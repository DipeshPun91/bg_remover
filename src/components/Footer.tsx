import React from "react";
import { motion } from "framer-motion";
import { MagicWandIcon } from "@radix-ui/react-icons";

const childVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 120 } },
};

const Footer = () => {
  return (
    <motion.footer
      variants={childVariants}
      className="container border-t border-slate-200 pt-12"
    >
      <div className="grid md:grid-cols-4 gap-8 text-slate-600 text-center md:text-left">
        <div className="space-y-4">
          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <MagicWandIcon className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-900">SnapCut</span>
          </div>
          <p className="text-sm text-slate-500 mt-4 leading-relaxed">
            Transform your images with AI-powered background removal.
            Professional results in seconds, trusted by creators worldwide.
          </p>
        </div>

        <div className="space-y-4">
          <h4 className="font-bold text-slate-900 text-lg">Product</h4>
          <ul className="space-y-3">
            <li>
              <a href="#" className="hover:text-blue-600 transition-colors">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 transition-colors">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 transition-colors">
                API
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="font-bold text-slate-900 text-lg">Company</h4>
          <ul className="space-y-2">
            <li>About</li>
            <li>Blog</li>
            <li>Careers</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="font-bold text-slate-900 text-lg">Legal</h4>
          <ul className="space-y-2">
            <li>Privacy</li>
            <li>Terms</li>
            <li>Security</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-slate-200 text-center text-sm text-slate-500">
        <p>© 2025 SnapCut. All rights reserved.</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
