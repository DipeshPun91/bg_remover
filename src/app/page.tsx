"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  MagicWandIcon,
  LightningBoltIcon,
  CheckCircledIcon,
  AvatarIcon,
  UploadIcon,
} from "@radix-ui/react-icons";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 120 } },
};

const features = [
  {
    title: "AI-Powered Precision",
    icon: <MagicWandIcon />,
    description: "Advanced edge detection for perfect cuts",
  },
  {
    title: "Instant Processing",
    icon: <LightningBoltIcon />,
    description: "Results in under 3 seconds",
  },
  {
    title: "Professional Quality",
    icon: <CheckCircledIcon />,
    description: "4K resolution support",
  },
];

export default function Remover() {
  return (
    <motion.main
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100"
    >
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div variants={childVariants} className="text-center mb-24">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Professional Background Removal
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Made Effortless
            </span>
          </h1>
          <p className="text-lg text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Automatically remove image backgrounds with AI precision. Trusted by
            50,000+ professionals worldwide.
          </p>
        </motion.div>

        <div className="flex justify-center mb-28">
          <Link href="/remover-bg">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold
                       hover:from-blue-700 hover:to-purple-700 transition-all flex items-center gap-3 shadow-lg hover:shadow-xl"
            >
              <UploadIcon className="w-5 h-5" />
              Upload Image
            </motion.button>
          </Link>
        </div>

        <motion.div
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-8 mb-28"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={childVariants}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl mb-6 flex items-center justify-center text-blue-600 group-hover:text-purple-600 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 text-base leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={childVariants}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 sm:p-12 text-center text-white mb-28 shadow-xl"
        >
          <div className="max-w-4xl mx-auto">
            <div className="text-3xl mb-6 opacity-50">“</div>
            <p className="text-xl sm:text-2xl font-medium mb-8 leading-relaxed">
              The fastest and most reliable background remover we&apos;ve used.
              Reduced our editing time by 70% compared to other tools.
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 bg-white/20 rounded-full backdrop-blur-sm flex items-center justify-center ring-2 ring-white/30">
                <AvatarIcon className="w-12 h-12 text-white" />
              </div>
              <div>
                <p className="font-bold text-lg">Sarah Johnson</p>
                <p className="text-sm opacity-90">
                  Creative Director, Pixel Studio
                </p>
              </div>
            </div>
          </div>
        </motion.div>
        <Footer />
      </div>
    </motion.main>
  );
}
