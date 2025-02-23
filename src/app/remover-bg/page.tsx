"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import ImageUploader from "@/components/ImageUploader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const childVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export default function Remover() {
  const router = useRouter();

  const handleProcessingComplete = (resultUrl: string) => {
    router.push(`/remover-bg/result?image=${encodeURIComponent(resultUrl)}`);
  };

  return (
    <motion.main
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-slate-100"
    >
      <Header />

      <div className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <motion.div
          variants={childVariants}
          className="text-center mb-12 sm:mb-16 space-y-6"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
            Remove Image Backgrounds
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Instantly with AI
            </span>
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Upload your image and get automatic background removal in seconds
          </p>
        </motion.div>

        <motion.div
          variants={childVariants}
          className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm p-6 sm:p-8"
        >
          <ImageUploader onProcessingComplete={handleProcessingComplete} />
        </motion.div>
      </div>

      <Footer />
    </motion.main>
  );
}
