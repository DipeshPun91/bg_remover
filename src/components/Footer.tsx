import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

const childVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 120 } },
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      variants={childVariants}
      className="bg-gray-950 border-t border-gray-800 mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-12">
          {/* Brand Section - Left */}
          <div className="flex-1">
            <Link href="/" className="group relative inline-flex items-center">
              <span className="text-xl font-bold tracking-tight">
                <span className="text-blue-600 transition-colors duration-300 group-hover:text-blue-700">
                  Snap
                </span>
                <span className="text-white transition-colors duration-300">
                  Cut
                </span>
              </span>
              <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-gray-900 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <p className="text-xs text-gray-500 mt-0.5">
              Background remover tool
            </p>
          </div>

          {/* Links Section - Right */}
          <div className="flex items-center gap-6 md:gap-8 flex-wrap">
            <Link
              href="/remover-bg"
              className="text-sm text-gray-400 hover:text-blue-400 transition-colors duration-200"
            >
              Upload
            </Link>
            <a
              href="https://github.com/DipeshPun91/bg_remover"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-blue-400 transition-colors duration-200"
            >
              <GitHubLogoIcon className="w-4 h-4" />
              GitHub
            </a>
            <a
              href="https://github.com/DipeshPun91"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-400 hover:text-blue-400 transition-colors duration-200"
            >
              Projects
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800/50 mt-8 pt-6">
          <p className="text-xs text-gray-500 text-center">
            © {currentYear} SnapCut. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
