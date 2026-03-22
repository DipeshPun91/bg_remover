import React from "react";
import { motion } from "framer-motion";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  MagicWandIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";

const childVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 120 } },
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      variants={childVariants}
      className="bg-gray-950 border-t border-gray-800 mt-24 pt-12 pb-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <MagicWandIcon className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                SnapCut
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Transform your images with AI-powered background removal.
              Professional results in seconds.
            </p>
            <div className="flex gap-4 pt-4">
              <a
                href="#"
                className="text-gray-500 hover:text-blue-400 transition-colors"
                aria-label="Twitter"
              >
                <TwitterLogoIcon className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedInLogoIcon className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-blue-400 transition-colors"
                aria-label="GitHub"
              >
                <GitHubLogoIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product Section */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-200">Product</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                >
                  API Docs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Status
                </a>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-200">Company</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Section */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-200">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Security
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Section - Added for professional touch */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-200">Stay Updated</h4>
            <p className="text-sm text-gray-400">
              Get the latest updates and news.
            </p>
            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 py-2 bg-gray-900 border border-gray-800 rounded-lg text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
              />
              <button className="px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © {currentYear} SnapCut. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a
                href="#"
                className="text-gray-500 hover:text-blue-400 transition-colors"
              >
                Sitemap
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-blue-400 transition-colors"
              >
                Accessibility
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-blue-400 transition-colors"
              >
                Feedback
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
