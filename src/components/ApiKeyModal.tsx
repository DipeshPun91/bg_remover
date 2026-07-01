"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Cross2Icon, GitHubLogoIcon } from "@radix-ui/react-icons";

export default function ApiKeyModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md bg-white rounded-2xl shadow-xl border border-gray-100 p-8"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute top-4 right-4 p-1.5 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-50 transition-colors"
            >
              <Cross2Icon className="w-4 h-4" />
            </button>

            <div className="w-11 h-11 bg-amber-50 border border-amber-100 rounded-xl flex items-center justify-center mb-5">
              <span className="text-amber-600 text-lg">🔑</span>
            </div>

            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              No live API key on this demo
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed mb-6">
              This is a portfolio project, so the deployed version doesn&apos;t
              ship with a real remove.bg API key. Clone the repo, add your own
              free remove.bg key, and it&apos;ll run locally in a couple of
              minutes.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://github.com/DipeshPun91/bg_remover"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-4 py-2.5 rounded-lg
                         hover:bg-gray-800 transition-all font-medium text-sm"
              >
                <GitHubLogoIcon className="w-4 h-4" />
                View setup guide
              </a>
              <button
                onClick={onClose}
                className="px-4 py-2.5 border border-gray-200 text-gray-600 rounded-lg font-medium text-sm
                         hover:bg-gray-50 transition-all"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
