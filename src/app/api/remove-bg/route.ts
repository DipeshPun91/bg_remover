// app/api/remove-bg/route.ts
import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: Request) {
  try {
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
    return NextResponse.json(
      { error: "Background removal failed" },
      { status: 500 },
    );
  }
}
