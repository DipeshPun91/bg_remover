import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { GitHubLogoIcon, MagicWandIcon } from "@radix-ui/react-icons";

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
          <div className="flex items-center gap-3 flex-1">
            <div className="w-9 h-9 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/10 flex-shrink-0">
              <MagicWandIcon className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-base font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                SnapCut
              </span>
              <p className="text-xs text-gray-500 mt-0.5">
                Background remover tool
              </p>
            </div>
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
