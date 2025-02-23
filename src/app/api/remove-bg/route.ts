import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const formData = new FormData();
    const imageBuffer = Buffer.from(req.body.image, "base64");

    formData.append("image_file", imageBuffer, "image.jpg");
    formData.append("size", "auto");

    const response = await axios.post(
      "https://api.remove.bg/v1.0/removebg",
      formData,
      {
        headers: {
          "X-Api-Key": process.env.REMOVE_BG_API_KEY,
        },
        responseType: "arraybuffer",
      }
    );

    const result = Buffer.from(response.data, "binary").toString("base64");
    res.status(200).json({ imageUrl: `data:image/png;base64,${result}` });
  } catch (error) {
    console.error("Background removal error:", error);
    res.status(500).json({ error: "Background removal failed" });
  }
}
