import React from "react";
import Link from "next/link";
import { MagicWandIcon } from "@radix-ui/react-icons";

const Header = () => {
  return (
    <nav className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-9 h-9 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-md">
            <MagicWandIcon className="w-5 h-5 text-white" />
          </div>
          <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            SnapCut
          </span>
        </Link>
        <div className="flex items-center gap-8 text-slate-600">
          <Link
            href="/remover-bg"
            className="hover:text-blue-600 transition-colors font-medium text-sm"
          >
            Upload
          </Link>
          <a
            href="https://github.com/DipeshPun91/bg_remover"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors font-medium text-sm"
          >
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
