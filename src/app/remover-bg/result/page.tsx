"use client";

import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { DownloadIcon } from "@radix-ui/react-icons";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function ResultPage() {
  const searchParams = useSearchParams();
  const imageUrl = searchParams.get("image");

  if (!imageUrl) {
    return <div className="text-center p-8">No image found</div>;
  }

  return (
    <motion.main
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100"
    >
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Background Removed Successfully! 🎉
          </h1>
          <p className="text-slate-600">Download your image below</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <Image
            src={imageUrl}
            alt="Result"
            width={800}
            height={600}
            className="rounded-lg w-full h-96 object-contain"
          />

          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={imageUrl}
              download
              className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg
                hover:bg-blue-700 transition-colors"
            >
              <DownloadIcon className="w-5 h-5" />
              Download PNG
            </a>

            <button
              onClick={() => (window.location.href = "/remover-bg")}
              className="inline-flex items-center justify-center gap-2 bg-slate-100 text-slate-700 px-6 py-3 rounded-lg
                        hover:bg-slate-200 transition-colors"
            >
              Remove Another Image
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </motion.main>
  );
}
