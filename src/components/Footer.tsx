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
      className="bg-gray-950 border-t border-gray-800 mt-24 pt-12 pb-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-12">
          {/* Brand Section */}
          <div className="space-y-4 max-w-sm">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <MagicWandIcon className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                SnapCut
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              A background remover built with Next.js and the remove.bg API.
            </p>
          </div>

          {/* Links Section */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-200">Links</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/remover-bg"
                  className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Upload an image
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/DipeshPun91/bg_remover"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <GitHubLogoIcon className="w-3.5 h-3.5" />
                  Source code
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/DipeshPun91"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                >
                  More projects
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <p className="text-sm text-gray-500 text-center">
            © {currentYear} SnapCut. Built by Dipesh Pun.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
