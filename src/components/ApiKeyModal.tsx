"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Cross2Icon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { useEffect } from "react";

export default function ApiKeyModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "var(--removed-scroll-width, 0px)";
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [open]);

  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{
              duration: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-gray-100/80 p-9"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close dialog"
              className="absolute top-5 right-5 p-2 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-200"
            >
              <Cross2Icon className="w-4.5 h-4.5" />
            </button>

            {/* Icon */}
            <div className="w-14 h-14 bg-gradient-to-br from-amber-50 to-amber-100/80 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-amber-200/50">
              <span className="text-2xl">🔑</span>
            </div>

            {/* Content */}
            <div className="space-y-3 mb-8">
              <h2 className="text-xl font-semibold text-gray-900 tracking-tight">
                API Key Required
              </h2>
              <p className="text-[15px] text-gray-600 leading-relaxed">
                This is a portfolio project, so the deployed version
                doesn&apos;t include a remove.bg API key. To run it locally,
                clone the repository and add your own free API key.
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col-reverse sm:flex-row gap-3">
              <button
                onClick={onClose}
                className="flex-1 px-5 py-3 text-sm font-medium text-gray-700 bg-gray-50 rounded-xl 
                         hover:bg-gray-100 transition-all duration-200 border border-gray-200/80
                         focus:outline-none focus:ring-2 focus:ring-gray-200"
              >
                Dismiss
              </button>
              <a
                href="https://github.com/DipeshPun91/bg_remover"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2.5 px-5 py-3 
                         bg-gray-900 text-white text-sm font-medium rounded-xl
                         hover:bg-gray-800 transition-all duration-200 shadow-sm
                         focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
              >
                <GitHubLogoIcon className="w-4 h-4" />
                View Setup Guide
              </a>
            </div>

            {/* Decorative subtle gradient */}
            <div className="absolute -top-px left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-amber-400/30 to-transparent rounded-full" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
