import React from "react";
import Link from "next/link";
import { UploadIcon, GitHubLogoIcon } from "@radix-ui/react-icons";

const Header = () => {
  return (
    <nav className="sticky top-0 bg-white/90 backdrop-blur-md border-b border-slate-200/80 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-4 flex-1">
          <Link href="/" className="group relative flex items-center">
            <span className="text-xl font-bold tracking-tight">
              <span className="text-blue-600 transition-colors duration-300 group-hover:text-blue-700">
                Snap
              </span>
              <span className="text-gray-900 transition-colors duration-300 group-hover:text-gray-700">
                Cut
              </span>
            </span>
            <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-gray-900 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <span className="text-xs text-gray-400 font-medium bg-gray-100 px-2 py-0.5 rounded-full">
            Background remover
          </span>
        </div>

        {/* Navigation Links with Icons */}
        <div className="flex items-center gap-2">
          <Link
            href="/remover-bg"
            className="group relative flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 active:text-blue-700 transition-colors duration-200 rounded-lg hover:bg-blue-50/50"
          >
            <UploadIcon className="w-4 h-4 transition-transform duration-200 group-hover:scale-110" />
            <span>Upload</span>
            {/* Underline */}
            <span className="absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-blue-600 group-hover:w-[calc(100%-2rem)] group-hover:left-4 transition-all duration-300"></span>
          </Link>

          <a
            href="https://github.com/DipeshPun91/bg_remover"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 active:text-blue-700 transition-colors duration-200 rounded-lg hover:bg-blue-50/50"
          >
            <GitHubLogoIcon className="w-4 h-4 transition-transform duration-200 group-hover:scale-110" />
            <span>GitHub</span>
            {/* Underline */}
            <span className="absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-blue-600 group-hover:w-[calc(100%-2rem)] group-hover:left-4 transition-all duration-300"></span>
          </a>

          {/* CTA Button */}
          <Link
            href="/remover-bg"
            className="ml-3 px-5 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
