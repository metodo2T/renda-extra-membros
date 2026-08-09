import React from 'react';
import { ExternalLink } from 'lucide-react';

interface PortfolioCardProps {
  onClick: () => void;
}

export const PortfolioCard: React.FC<PortfolioCardProps> = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="group relative bg-white/90 hover:bg-white border border-purple-200 hover:border-purple-400/80 rounded-2xl p-4 sm:p-5 transition-all duration-300 shadow-xl shadow-purple-950/5 hover:shadow-purple-900/15 cursor-pointer overflow-hidden transform hover:-translate-y-0.5"
    >
      {/* Glow highlight effect */}
      <div className="absolute top-0 right-0 w-3/4 h-full bg-gradient-to-l from-purple-200/40 via-purple-100/10 to-transparent pointer-events-none" />

      <div className="flex items-center justify-between gap-3 relative z-10">
        {/* Left Text */}
        <div className="flex-1 pr-2">
          <h3 className="text-purple-950 text-2xl sm:text-3xl tracking-tight mb-1">
            <span className="font-light text-purple-900/80">Port</span>
            <span className="font-extrabold text-purple-950">folio</span>
          </h3>
          <p className="text-purple-800/80 text-xs sm:text-sm font-medium leading-snug">
            Artes feitas sob medida para seu negócio
          </p>
        </div>

        {/* Right Devices Graphic Showcase (Laptop + Mobile Mockup) */}
        <div className="relative w-36 sm:w-44 h-24 sm:h-28 flex items-center justify-center shrink-0">
          {/* Laptop SVG frame */}
          <div className="relative w-full max-w-[150px] sm:max-w-[170px] transform group-hover:scale-105 transition-transform duration-300">
            {/* Screen content */}
            <div className="bg-purple-950 rounded-t-md p-1 border border-purple-400/40 overflow-hidden shadow-lg aspect-[16/10]">
              <div className="w-full h-full bg-gradient-to-br from-purple-900 via-purple-800 to-purple-950 rounded flex flex-col justify-between p-1.5 relative overflow-hidden">
                <div className="flex items-center justify-between">
                  <div className="text-[7px] font-bold text-white tracking-wider">PORTFOLIO</div>
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-300 animate-pulse" />
                </div>
                <div className="grid grid-cols-2 gap-1 my-1">
                  <div className="bg-purple-700/50 rounded h-5 border border-purple-400/30" />
                  <div className="bg-fuchsia-800/50 rounded h-5 border border-fuchsia-400/30" />
                </div>
                <div className="text-[6px] text-purple-100/90 truncate">Social Media Design</div>
              </div>
            </div>
            {/* Laptop Base */}
            <div className="bg-gradient-to-r from-gray-700 via-gray-400 to-gray-700 h-1.5 rounded-b-md shadow-md flex justify-center items-center">
              <div className="w-6 h-0.5 bg-gray-900/60 rounded-full" />
            </div>
          </div>

          {/* Mobile phone overlapping mockup on right */}
          <div className="absolute -bottom-1 -right-1 w-10 sm:w-12 h-16 sm:h-20 bg-gray-900 rounded-lg p-0.5 border border-gray-600 shadow-xl transform rotate-6 group-hover:rotate-0 group-hover:scale-110 transition-all duration-300">
            <div className="w-full h-full bg-gradient-to-b from-purple-900 to-[#120018] rounded-[5px] p-1 flex flex-col items-center justify-between text-[5px] text-white overflow-hidden">
              <div className="w-2 h-0.5 bg-gray-500 rounded-full mb-0.5" />
              <div className="w-full h-7 bg-purple-800/40 rounded border border-purple-400/30 my-0.5" />
              <div className="w-full h-2 bg-fuchsia-600/60 rounded" />
            </div>
          </div>
        </div>
      </div>

      {/* Hover action badge */}
      <div className="mt-3 pt-2 border-t border-purple-100 flex items-center justify-between text-xs text-purple-700 font-semibold group-hover:text-purple-900">
        <span>Ver galeria de trabalhos</span>
        <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
      </div>
    </div>
  );
};
