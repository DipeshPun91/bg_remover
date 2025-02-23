"use client";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";

export default function ImageUploader() {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFile(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { "image/*": [".png", ".jpg", ".jpeg"] },
  });

  const removeBackground = async () => {
    if (!file) return;

    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("image", file);

      const response = await fetch("/api/remove-bg", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      setResult(result.imageUrl);
    } catch (error) {
      console.error("Error:", error);
    }
    setLoading(false);
  };

  return (
    <div className="container mx-auto p-4">
      <div
        {...getRootProps()}
        className="border-2 border-dashed p-8 text-center cursor-pointer"
      >
        <input {...getInputProps()} />
        <p>Drag & drop image, or click to select</p>
      </div>

      {file && (
        <div className="mt-4">
          <Image
            src={URL.createObjectURL(file)}
            alt="Original"
            width="600"
            height="400"
            className="max-w-md mx-auto"
          />
          <button
            onClick={removeBackground}
            disabled={loading}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-400"
          >
            {loading ? "Processing..." : "Remove Background"}
          </button>
        </div>
      )}

      {result && (
        <div className="mt-8">
          <h2 className="text-xl mb-4">Result:</h2>
          <Image
            src={result}
            alt="Result"
            width="600"
            height="400"
            className="max-w-md mx-auto"
          />
          <a
            href={result}
            download="background-removed.png"
            className="mt-4 inline-block bg-green-500 text-white px-4 py-2 rounded"
          >
            Download
          </a>
        </div>
      )}
    </div>
  );
}
