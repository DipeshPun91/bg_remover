import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: Request) {
  try {
    // Get form data from request
    const formData = await req.formData();
    const file = formData.get("image") as File;

    // Convert file to buffer
    const buffer = Buffer.from(await file.arrayBuffer());

    // Prepare payload for Remove.bg API
    const bgRemovalForm = new FormData();
    bgRemovalForm.append("image_file", new Blob([buffer]), file.name);
    bgRemovalForm.append("size", "auto");

    // Call Remove.bg API
    const response = await axios.post(
      "https://api.remove.bg/v1.0/removebg",
      bgRemovalForm,
      {
        headers: {
          "X-Api-Key": process.env.REMOVE_BG_API_KEY,
        },
        responseType: "arraybuffer",
      }
    );

    // Convert response to base64
    const resultBuffer = Buffer.from(response.data, "binary");
    const base64Image = resultBuffer.toString("base64");

    return NextResponse.json({
      imageUrl: `data:image/png;base64,${base64Image}`,
    });
  } catch (error) {
    console.error("Background removal error:", error);
    return NextResponse.json(
      { error: "Background removal failed" },
      { status: 500 }
    );
  }
}
