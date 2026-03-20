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
  return (
    <motion.footer
      variants={childVariants}
      className="border-t border-slate-200 mt-24 pt-12 pb-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <MagicWandIcon className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                SnapCut
              </span>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Transform your images with AI-powered background removal.
              Professional results in seconds.
            </p>
            <div className="flex gap-4 pt-4">
              <a
                href="#"
                className="text-slate-400 hover:text-blue-600 transition-colors"
              >
                <TwitterLogoIcon className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-blue-600 transition-colors"
              >
                <LinkedInLogoIcon className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-blue-600 transition-colors"
              >
                <GitHubLogoIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-slate-900">Product</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-slate-600 hover:text-blue-600 transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-slate-600 hover:text-blue-600 transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-slate-600 hover:text-blue-600 transition-colors"
                >
                  API Docs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-slate-600 hover:text-blue-600 transition-colors"
                >
                  Status
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-slate-900">Company</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-slate-600 hover:text-blue-600 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-slate-600 hover:text-blue-600 transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-slate-600 hover:text-blue-600 transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-slate-600 hover:text-blue-600 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-slate-900">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-slate-600 hover:text-blue-600 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-slate-600 hover:text-blue-600 transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-slate-600 hover:text-blue-600 transition-colors"
                >
                  Security
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-slate-600">
              © 2025 SnapCut. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0 text-sm text-slate-600">
              <a href="#" className="hover:text-blue-600 transition-colors">
                Sitemap
              </a>
              <a href="#" className="hover:text-blue-600 transition-colors">
                Accessibility
              </a>
              <a href="#" className="hover:text-blue-600 transition-colors">
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
