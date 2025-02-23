"use client";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { motion } from "framer-motion";
import { UploadIcon, MagicWandIcon } from "@radix-ui/react-icons";
import Image from "next/image";

export default function ImageUploader({
  onProcessingComplete,
}: {
  onProcessingComplete: (resultUrl: string) => void;
}) {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFile(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [".png", ".jpg", ".jpeg"] },
    maxFiles: 1,
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
      onProcessingComplete(result.imageUrl);
    } catch (error) {
      console.error("Error:", error);
    }
    setLoading(false);
  };

  return (
    <div className="space-y-8">
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer transition-all 
          ${
            isDragActive
              ? "border-blue-500 bg-blue-50"
              : "border-slate-200 hover:border-blue-400"
          }`}
      >
        <input {...getInputProps()} />
        <div className="space-y-4">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
            <UploadIcon className="w-5 h-5 text-blue-600" />
          </div>
          <p className="text-slate-600">
            {isDragActive
              ? "Drop image here"
              : "Drag & drop image, or click to select"}
          </p>
          <p className="text-sm text-slate-400">Supports: PNG, JPG, JPEG</p>
        </div>
      </div>

      {file && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-6"
        >
          <div className="bg-white rounded-xl shadow-sm p-4">
            <Image
              src={URL.createObjectURL(file)}
              alt="Original"
              width={600}
              height={400}
              className="rounded-lg w-full h-64 object-contain"
            />
          </div>

          <button
            onClick={removeBackground}
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg
                      font-semibold hover:from-blue-700 hover:to-purple-700 transition-all flex items-center justify-center gap-2
                      disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <span className="animate-spin">🌀</span>
                Processing...
              </>
            ) : (
              <>
                <MagicWandIcon className="w-5 h-5" />
                Remove Background
              </>
            )}
          </button>
        </motion.div>
      )}
    </div>
  );
}
