"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  MagicWandIcon,
  LightningBoltIcon,
  CheckCircledIcon,
  ArrowRightIcon,
  GitHubLogoIcon,
} from "@radix-ui/react-icons";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const childVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const features = [
  {
    title: "Powered by remove.bg",
    icon: <MagicWandIcon className="w-5 h-5" />,
    description:
      "Background removal is handled by remove.bg's image segmentation model, not a from-scratch AI pipeline.",
  },
  {
    title: "Fast turnaround",
    icon: <LightningBoltIcon className="w-5 h-5" />,
    description:
      "Upload one image at a time and get a result back in a few seconds.",
  },
  {
    title: "Transparent PNG output",
    icon: <CheckCircledIcon className="w-5 h-5" />,
    description:
      "Download the result as a PNG with a transparent background, ready to drop into other projects.",
  },
];

export default function Remover() {
  return (
    <motion.main
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen bg-white"
    >
      <Header />

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white pointer-events-none" />
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-50 rounded-full blur-3xl opacity-30" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 relative">
          <motion.div
            variants={childVariants}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 bg-gray-50 border border-gray-200 rounded-full">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
              <p className="text-xs font-medium text-gray-600 uppercase tracking-wide">
                A background remover I built
              </p>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
              Remove backgrounds
              <br />
              <span className="text-blue-600">in a couple clicks</span>
            </h1>
            <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Upload an image, and get back a clean PNG with a transparent
              background. Built with Next.js and the remove.bg API.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link href="/remover-bg">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-gray-900 text-white px-8 py-3.5 rounded-lg font-medium text-base
                           hover:bg-gray-800 transition-all flex items-center gap-2 shadow-sm"
                >
                  Upload an image
                  <ArrowRightIcon className="w-4 h-4" />
                </motion.button>
              </Link>
              <a
                href="https://github.com/DipeshPun91/bg_remover"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 text-gray-700 font-medium text-base hover:text-gray-900 transition-colors inline-flex items-center gap-2"
              >
                <GitHubLogoIcon className="w-4 h-4" />
                View on GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features Section - Clean, minimal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div variants={containerVariants}>
          <motion.div
            variants={childVariants}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              How it works
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              A simple upload-and-download flow, nothing more
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-12"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={childVariants}
                className="group"
              >
                <div className="w-10 h-10 bg-gray-900 rounded-lg mb-6 flex items-center justify-center text-white group-hover:bg-blue-600 transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* CTA Section - Minimal, direct */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          variants={childVariants}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Try it on your own image
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Free to use, no sign-up required
          </p>
          <Link href="/remover-bg">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gray-900 text-white px-8 py-3.5 rounded-lg font-medium text-base
                       hover:bg-gray-800 transition-all inline-flex items-center gap-2 shadow-sm"
            >
              Get started
              <ArrowRightIcon className="w-4 h-4" />
            </motion.button>
          </Link>
        </motion.div>
      </div>

      <Footer />
    </motion.main>
  );
}
