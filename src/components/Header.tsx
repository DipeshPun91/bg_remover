import React from "react";
import { MagicWandIcon } from "@radix-ui/react-icons";

const Header = () => {
  return (
    <nav className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-slate-100 p-5 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <MagicWandIcon className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-slate-900">SnapCut</span>
        </div>
        <div className="flex items-center gap-6 text-slate-600">
          <button className="hover:text-blue-600 transition-colors font-medium">
            Pricing
          </button>
          <button className="hover:text-blue-600 transition-colors font-medium">
            Enterprise
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
