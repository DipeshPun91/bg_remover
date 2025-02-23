"use client";

import { motion } from "framer-motion";
import ImageUploader from "@/components/ImageUploader";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const childVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export default function Remover() {
  return (
    <motion.main
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen p-8 bg-gradient-to-br from-blue-50 to-purple-50"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h1
          variants={childVariants}
          className="text-5xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          Magic Background Remover
        </motion.h1>

        <motion.div variants={childVariants}>
          <ImageUploader />
        </motion.div>

        <motion.footer
          variants={childVariants}
          className="mt-12 text-center text-gray-600"
        >
          <p>Powered by AI Magic • 100% Secure • Free to Use</p>
        </motion.footer>
      </div>
    </motion.main>
  );
}
