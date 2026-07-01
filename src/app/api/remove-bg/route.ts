// app/api/remove-bg/route.ts
import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: Request) {
  try {
    // No key configured (e.g. someone browsing the live portfolio demo,
    // which intentionally doesn't ship with a real remove.bg key).
    // Fail fast with a distinct error code the frontend can key off of.
    if (!process.env.REMOVE_BG_API_KEY) {
      return NextResponse.json(
        {
          error:
            "This demo doesn't have a live API key configured. Clone the repo and add your own remove.bg key to run it.",
          code: "NO_API_KEY",
        },
        { status: 503 },
      );
    }

    const formData = await req.formData();
    const file = formData.get("image") as File;

    if (!file) {
      return NextResponse.json({ error: "No image provided" }, { status: 400 });
    }

    // Process with Remove.bg
    const bgRemovalForm = new FormData();
    bgRemovalForm.append(
      "image_file",
      new Blob([await file.arrayBuffer()]),
      file.name,
    );
    bgRemovalForm.append("size", "auto");

    const response = await axios.post(
      "https://api.remove.bg/v1.0/removebg",
      bgRemovalForm,
      {
        headers: {
          "X-Api-Key": process.env.REMOVE_BG_API_KEY,
        },
        responseType: "arraybuffer",
        timeout: 15000,
      },
    );

    // Return the processed image directly as a base64 data URL.
    // No filesystem writes: this keeps the route safe to run on serverless
    // hosts (e.g. Vercel), where the filesystem is read-only in production,
    // and avoids leaving other users' uploaded images sitting in /public
    // indefinitely.
    const base64Image = Buffer.from(response.data, "binary").toString("base64");
    const imageUrl = `data:image/png;base64,${base64Image}`;

    return NextResponse.json({ imageUrl });
  } catch (error) {
    console.error("Background removal error:", error);

    if (
      axios.isAxiosError(error) &&
      (error.code === "ECONNABORTED" || error.code === "ETIMEDOUT")
    ) {
      return NextResponse.json(
        {
          error:
            "Could not reach remove.bg — check your network connection or firewall settings.",
        },
        { status: 504 },
      );
    }

    return NextResponse.json(
      { error: "Background removal failed" },
      { status: 500 },
    );
  }
}
