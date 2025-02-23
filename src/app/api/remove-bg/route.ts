// app/api/remove-bg/route.ts
import { NextResponse } from "next/server";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import fs from "fs";
import path from "path";

const uploadDir = path.join(process.cwd(), "public/uploads");

export async function POST(req: Request) {
  try {
    // Create uploads directory if not exists
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    const formData = await req.formData();
    const file = formData.get("image") as File;

    // Process with Remove.bg
    const bgRemovalForm = new FormData();
    bgRemovalForm.append(
      "image_file",
      new Blob([await file.arrayBuffer()]),
      file.name
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
      }
    );

    // Save to temporary file
    const fileName = `${uuidv4()}.png`;
    const filePath = path.join(uploadDir, fileName);
    fs.writeFileSync(filePath, Buffer.from(response.data, "binary"));

    return NextResponse.json({
      imageUrl: `/uploads/${fileName}`,
    });
  } catch (error) {
    console.error("Background removal error:", error);
    return NextResponse.json(
      { error: "Background removal failed" },
      { status: 500 }
    );
  }
}
