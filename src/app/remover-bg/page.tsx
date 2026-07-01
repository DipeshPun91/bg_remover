// remover/page.tsx
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
    transition: { staggerChildren: 0.1 },
  },
};

const childVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Remover() {
  const router = useRouter();

  const handleProcessingComplete = (resultUrl: string) => {
    // The processed image comes back as a base64 data URL, which is too
    // long to safely pass as a query param, so we hand it off via
    // sessionStorage and read it back on the result page instead.
    sessionStorage.setItem("bgRemoverResult", resultUrl);
    router.push("/remover-bg/result");
  };

  return (
    <motion.main
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen flex flex-col bg-white"
    >
      <Header />

      <div className="flex-grow max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <motion.div
          variants={childVariants}
          className="text-center mb-12 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-50 border border-gray-200 rounded-full">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
            <p className="text-xs font-medium text-gray-600 uppercase tracking-wide">
              Step 1 of 2
            </p>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
            Remove image background
          </h1>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Upload an image and get a transparent PNG back in seconds
          </p>
        </motion.div>

        <motion.div variants={childVariants} className="max-w-2xl mx-auto">
          <ImageUploader onProcessingComplete={handleProcessingComplete} />
        </motion.div>
      </div>

      <Footer />
    </motion.main>
  );
}
