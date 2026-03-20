"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  MagicWandIcon,
  LightningBoltIcon,
  CheckCircledIcon,
  AvatarIcon,
  UploadIcon,
  StarIcon,
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

const stats = [
  { value: "50K+", label: "Active Users" },
  { value: "100M+", label: "Images Processed" },
  { value: "2s", label: "Average Processing" },
  { value: "99.9%", label: "Accuracy Rate" },
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

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <motion.div variants={childVariants} className="text-center mb-12">
          <div className="inline-block mb-6 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full">
            <p className="text-sm font-semibold text-blue-700">
              ✨ Trusted by 50,000+ professionals
            </p>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
            Professional Background
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Removal Made Easy
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
            Automatically remove image backgrounds with AI-powered precision. In
            seconds, not hours. No editing skills required. Used by designers,
            e-commerce teams, and content creators.
          </p>
        </motion.div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-20">
          <Link href="/remover-bg">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold
                       hover:from-blue-700 hover:to-purple-700 transition-all flex items-center gap-3 shadow-lg hover:shadow-xl"
            >
              <UploadIcon className="w-5 h-5" />
              Start Removing Now
            </motion.button>
          </Link>
          <button
            className="px-8 py-4 border-2 border-slate-300 text-slate-900 rounded-xl font-semibold
                           hover:bg-slate-50 transition-all"
          >
            Watch Demo
          </button>
        </div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32 pt-12 border-t border-slate-200"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={childVariants}
              className="text-center"
            >
              <p className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </p>
              <p className="text-slate-600 text-sm sm:text-base">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Section */}
        <motion.div variants={containerVariants} className="mb-32">
          <motion.h2
            variants={childVariants}
            className="text-3xl sm:text-4xl font-bold text-center text-slate-900 mb-4"
          >
            Why Choose SnapCut?
          </motion.h2>
          <motion.p
            variants={childVariants}
            className="text-center text-slate-600 mb-12 max-w-2xl mx-auto"
          >
            Get professional results with zero learning curve. Our AI technology
            handles the heavy lifting.
          </motion.p>
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={childVariants}
                className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl mb-6 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
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
        </motion.div>

        {/* Testimonial Section */}
        <motion.div
          variants={childVariants}
          className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-12 sm:p-16 text-center text-white mb-32 shadow-2xl"
        >
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center gap-1 mb-8">
              {[...Array(5)].map((_, i) => (
                <StarIcon
                  key={i}
                  className="w-6 h-6 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <p className="text-lg sm:text-2xl font-medium mb-8 leading-relaxed">
              &ldquo;The fastest and most reliable background remover we&apos;ve
              used. Reduced our editing time by 70% compared to other tools.
              It&apos;s not even close—SnapCut is a game-changer.&ldquo;
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center ring-2 ring-white/30">
                <AvatarIcon className="w-10 h-10 text-white" />
              </div>
              <div className="text-left">
                <p className="font-bold text-lg">Sarah Johnson</p>
                <p className="text-sm opacity-90">
                  Creative Director, Pixel Studio
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div variants={childVariants} className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
            Ready to transform your images?
          </h2>
          <p className="text-slate-600 text-lg mb-8">
            No credit card required. Process your first image free.
          </p>
          <Link href="/remover-bg">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold
                       hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-3"
            >
              <UploadIcon className="w-5 h-5" />
              Get Started Free
            </motion.button>
          </Link>
        </motion.div>
      </div>
      <Footer />
    </motion.main>
  );
}
