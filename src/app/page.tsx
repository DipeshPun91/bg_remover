"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  MagicWandIcon,
  LightningBoltIcon,
  CheckCircledIcon,
  AvatarIcon,
  StarIcon,
  ArrowRightIcon,
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
    title: "AI-Powered Precision",
    icon: <MagicWandIcon className="w-5 h-5" />,
    description:
      "Advanced edge detection algorithms deliver pixel-perfect cuts with hair-level accuracy.",
  },
  {
    title: "Instant Processing",
    icon: <LightningBoltIcon className="w-5 h-5" />,
    description:
      "Results in under 3 seconds with batch processing support for up to 100 images.",
  },
  {
    title: "Professional Quality",
    icon: <CheckCircledIcon className="w-5 h-5" />,
    description:
      "4K resolution support with lossless output in PNG, JPEG, and WebP formats.",
  },
];

const stats = [
  { value: "50,000+", label: "Active Users" },
  { value: "100M+", label: "Images Processed" },
  { value: "< 3s", label: "Average Processing" },
  { value: "99.9%", label: "Accuracy Rate" },
];

const logos = ["Dropbox", "Shopify", "Adobe", "Figma", "Notion", "Slack"];

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
                Trusted by industry leaders
              </p>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
              Remove backgrounds
              <br />
              <span className="text-blue-600">with AI precision</span>
            </h1>
            <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Automatically remove image backgrounds in seconds. Used by
              designers, e-commerce teams, and creative professionals worldwide.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link href="/remover-bg">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-gray-900 text-white px-8 py-3.5 rounded-lg font-medium text-base
                           hover:bg-gray-800 transition-all flex items-center gap-2 shadow-sm"
                >
                  Start free trial
                  <ArrowRightIcon className="w-4 h-4" />
                </motion.button>
              </Link>
              <button className="px-8 py-3.5 text-gray-700 font-medium text-base hover:text-gray-900 transition-colors">
                Watch demo
              </button>
            </div>
          </motion.div>

          {/* Trusted by section */}
          <motion.div variants={childVariants} className="mt-20">
            <p className="text-center text-xs font-medium text-gray-400 uppercase tracking-wider mb-6">
              Trusted by innovative companies
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
              {logos.map((logo, i) => (
                <span
                  key={i}
                  className="text-gray-400 text-sm font-medium tracking-wide"
                >
                  {logo}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats Section - Clean numbers */}
      <div className="border-y border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={childVariants}
                className="text-center"
              >
                <p className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-1 tracking-tight">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </motion.div>
            ))}
          </div>
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
              Everything you need in one platform
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Professional-grade background removal that works instantly
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

      {/* Testimonial Section - Clean, minimal */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            variants={childVariants}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="flex justify-center gap-0.5 mb-8">
              {[...Array(5)].map((_, i) => (
                <StarIcon
                  key={i}
                  className="w-5 h-5 fill-gray-300 text-gray-300"
                />
              ))}
            </div>
            <p className="text-xl sm:text-2xl text-gray-700 mb-8 leading-relaxed">
              &ldquo;SnapCut has transformed our workflow. What used to take
              hours now takes seconds. The accuracy is remarkable.&ldquo;
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                <AvatarIcon className="w-5 h-5 text-gray-500" />
              </div>
              <div className="text-left">
                <p className="font-medium text-gray-900 text-sm">
                  Sarah Johnson
                </p>
                <p className="text-xs text-gray-500">
                  Creative Director, Pixel Studio
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* CTA Section - Minimal, direct */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          variants={childVariants}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Start removing backgrounds today
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join 50,000+ professionals who trust SnapCut
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
          <p className="text-xs text-gray-400 mt-4">
            No credit card required • Free forever plan available
          </p>
        </motion.div>
      </div>

      <Footer />
    </motion.main>
  );
}
