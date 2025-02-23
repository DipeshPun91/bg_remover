"use client";

import { motion } from "framer-motion";
import {
  MagicWandIcon,
  UploadIcon,
  CheckCircledIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

interface FeatureItem {
  title: string;
  icon: React.ReactNode;
  description: string;
}

const features: FeatureItem[] = [
  {
    title: "One-Click Removal",
    icon: <MagicWandIcon className="w-8 h-8" />,
    description: "Instant background removal with AI-powered technology",
  },
  {
    title: "High Quality",
    icon: <CheckCircledIcon className="w-8 h-8" />,
    description: "HD resolution output with perfect edge detection",
  },
  {
    title: "Batch Processing",
    icon: <UploadIcon className="w-8 h-8" />,
    description: "Process multiple images simultaneously",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <nav className="px-6 py-4 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <div className="w-8 h-8 bg-indigo-600 rounded-lg" />
            <span className="text-xl font-bold text-slate-900">SnapCut</span>
          </motion.div>
          <div className="flex items-center gap-6">
            <button className="text-slate-600 hover:text-indigo-600 transition-colors">
              Pricing
            </button>
            <button className="text-slate-600 hover:text-indigo-600 transition-colors">
              Login
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl font-bold text-slate-900 mb-6">
            Remove Image Backgrounds
            <br />
            <span className="bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
              in Seconds
            </span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Powered by advanced AI to deliver professional-grade background
            removal instantly. Free to use - no credit card required.
          </p>
          <Link className="flex justify-center gap-4" href="/remover-bg">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold
                       hover:bg-indigo-700 transition-colors flex items-center gap-2"
            >
              <UploadIcon className="w-5 h-5" />
              Upload Image
            </motion.button>
          </Link>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-24"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-indigo-50 rounded-lg mb-4 flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="bg-gradient-to-r from-indigo-600 to-blue-500 rounded-2xl p-12 text-center"
        >
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
              Try it free today
            </h2>
            <p className="text-slate-100 mb-8">
              Join thousands of professionals and creatives who already trust
              our background removal technology
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold
                       hover:bg-slate-100 transition-colors"
            >
              Get Started Now
            </motion.button>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
