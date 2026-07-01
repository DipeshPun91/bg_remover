// components/ImageUploader.tsx
"use client";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { motion, AnimatePresence } from "framer-motion";
import { UploadIcon, MagicWandIcon, Cross2Icon } from "@radix-ui/react-icons";
import Image from "next/image";

export default function ImageUploader({
  onProcessingComplete,
}: {
  onProcessingComplete: (resultUrl: string) => void;
}) {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const selectedFile = acceptedFiles[0];
    setFile(selectedFile);
    setError(null);

    // Create preview URL
    const previewUrl = URL.createObjectURL(selectedFile);
    setPreview(previewUrl);
  }, []);

  const clearFile = () => {
    if (preview) {
      URL.revokeObjectURL(preview);
    }
    setFile(null);
    setPreview(null);
    setError(null);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [".png", ".jpg", ".jpeg", ".webp"] },
    maxFiles: 1,
    multiple: false,
  });

  const removeBackground = async () => {
    if (!file) return;

    setLoading(true);
    setError(null);
    try {
      const formData = new FormData();
      formData.append("image", file);

      const response = await fetch("/api/remove-bg", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (!response.ok) {
        setError(result.error || "Something went wrong. Please try again.");
        return;
      }

      onProcessingComplete(result.imageUrl);
    } catch (err) {
      console.error("Error:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  return (
    <div className="space-y-6">
      <AnimatePresence mode="wait">
        {!file ? (
          <motion.div
            key="uploader"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div
              {...getRootProps()}
              className={`
                relative border-2 border-dashed rounded-xl p-12 text-center cursor-pointer 
                transition-all duration-200 bg-gray-50
                ${
                  isDragActive
                    ? "border-blue-500 bg-blue-50/50"
                    : "border-gray-200 hover:border-gray-300 hover:bg-gray-100"
                }
              `}
            >
              <input {...getInputProps()} />
              <div className="space-y-4">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-50 to-purple-50 border border-gray-100 rounded-2xl mx-auto">
                  <UploadIcon className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-gray-700 font-medium">
                    {isDragActive
                      ? "Drop your image here"
                      : "Drag and drop an image, or click to browse"}
                  </p>
                  <p className="text-sm text-gray-400 mt-1">
                    PNG, JPG, JPEG, WEBP up to 10MB
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="preview"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            {/* Filename / size */}
            {file && (
              <div className="flex items-center justify-between px-1">
                <p className="text-sm text-gray-600 font-medium truncate max-w-[70%]">
                  {file.name}
                </p>
                <p className="text-xs text-gray-400">
                  {formatFileSize(file.size)}
                </p>
              </div>
            )}

            {/* Image Preview */}
            <div className="relative bg-gray-50 rounded-xl p-4 border border-gray-100">
              <button
                onClick={clearFile}
                className="absolute top-2 right-2 z-10 p-1.5 bg-white rounded-full shadow-sm hover:bg-gray-50 transition-colors"
                aria-label="Remove image"
              >
                <Cross2Icon className="w-4 h-4 text-gray-500" />
              </button>
              <div className="relative w-full h-80">
                {preview && (
                  <Image
                    src={preview}
                    alt="Upload preview"
                    fill
                    className="object-contain rounded-lg"
                  />
                )}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={removeBackground}
                disabled={loading}
                className="flex-1 bg-gray-900 text-white px-6 py-3 rounded-lg font-medium
                         hover:bg-gray-800 transition-all flex items-center justify-center gap-2
                         disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Processing...
                  </>
                ) : (
                  <>
                    <MagicWandIcon className="w-4 h-4" />
                    Remove background
                  </>
                )}
              </button>

              <button
                onClick={clearFile}
                disabled={loading}
                className="px-6 py-3 border border-gray-200 text-gray-600 rounded-lg font-medium
                         hover:bg-gray-50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Choose different
              </button>
            </div>

            {error && (
              <p
                role="alert"
                className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-lg px-4 py-3"
              >
                {error}
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Tips */}
      <div className="text-center">
        <p className="text-xs text-gray-400">
          For best results, use high-contrast images with clear subjects
        </p>
      </div>
    </div>
  );
}
