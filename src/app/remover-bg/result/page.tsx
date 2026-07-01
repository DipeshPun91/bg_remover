"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { DownloadIcon, ArrowLeftIcon, CopyIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

export default function ResultPage() {
  // Start as null on both server and client, then read sessionStorage after
  // mount. This avoids a hydration mismatch, since sessionStorage doesn't
  // exist during server rendering.
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [checkedStorage, setCheckedStorage] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const stored = sessionStorage.getItem("bgRemoverResult");
    // Defensive check: only accept values that actually look like a usable
    // image source. A stray "undefined"/"null" string (e.g. left over from
    // an earlier failed request) should not be treated as a real image.
    const isValidImage =
      stored &&
      (stored.startsWith("data:image/") ||
        stored.startsWith("/") ||
        stored.startsWith("http"));
    setImageUrl(isValidImage ? stored : null);
    setCheckedStorage(true);
  }, []);

  if (!checkedStorage) {
    return (
      <motion.main
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="min-h-screen bg-white"
      >
        <Header />
        <div className="flex flex-col items-center justify-center py-32">
          <svg
            className="animate-spin h-6 w-6 text-gray-400"
            viewBox="0 0 24 24"
          >
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
        </div>
        <Footer />
      </motion.main>
    );
  }

  if (!imageUrl) {
    return (
      <motion.main
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="min-h-screen bg-white"
      >
        <Header />
        <div className="flex flex-col items-center justify-center py-32">
          <div className="text-center">
            <p className="text-gray-400 mb-4">No image found</p>
            <button
              onClick={() => (window.location.href = "/remover-bg")}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              ← Back to upload
            </button>
          </div>
        </div>
        <Footer />
      </motion.main>
    );
  }

  // imageUrl is a base64 data URL, not a real shareable link, so "copy
  // link" wouldn't be useful. Instead, copy the actual image to the
  // clipboard so it can be pasted directly into other apps.
  const handleCopyImage = async () => {
    try {
      const res = await fetch(imageUrl);
      const blob = await res.blob();
      await navigator.clipboard.write([
        new ClipboardItem({ [blob.type]: blob }),
      ]);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy image:", err);
    }
  };

  return (
    <motion.main
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen bg-white"
    >
      <Header />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-green-50 border border-green-100 rounded-full">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
            <p className="text-xs font-medium text-green-700 uppercase tracking-wide">
              Processing complete
            </p>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Background removed
          </h1>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Your image is ready to download
          </p>
        </div>

        {/* Result Card */}
        <div className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden relative">
          {/* Actions - Top Right */}
          <div className="absolute top-4 right-4 z-10 flex gap-2">
            <button
              onClick={handleCopyImage}
              className="inline-flex items-center justify-center gap-2 bg-white/90 backdrop-blur-sm border border-gray-200 text-gray-700 px-3 py-2 rounded-lg
                       hover:bg-white transition-all font-medium text-sm shadow-sm"
              title="Copy image"
            >
              <CopyIcon className="w-4 h-4" />
              {copied ? "Copied!" : "Copy"}
            </button>

            <a
              href={imageUrl}
              download="transparent-image.png"
              className="inline-flex items-center justify-center gap-2 bg-gray-900/90 backdrop-blur-sm text-white px-3 py-2 rounded-lg
                       hover:bg-gray-900 transition-all font-medium text-sm shadow-sm"
              title="Download image"
            >
              <DownloadIcon className="w-4 h-4" />
              Download
            </a>

            <button
              onClick={() => {
                sessionStorage.removeItem("bgRemoverResult");
                window.location.href = "/remover-bg";
              }}
              className="inline-flex items-center justify-center gap-2 bg-white/90 backdrop-blur-sm border border-gray-200 text-gray-700 px-3 py-2 rounded-lg
                       hover:bg-white transition-all font-medium text-sm shadow-sm"
              title="Process another image"
            >
              <ArrowLeftIcon className="w-4 h-4" />
              New
            </button>
          </div>

          {/* Image Container */}
          <div className="bg-gray-50 p-8 flex items-center justify-center min-h-[500px]">
            <div className="relative w-full max-w-2xl h-96">
              <Image
                src={imageUrl}
                alt="Processed image with transparent background"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>

        {/* Tips Section */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-400">
            Image is ready with transparent background • PNG format
          </p>
        </div>
      </div>

      <Footer />
    </motion.main>
  );
}
