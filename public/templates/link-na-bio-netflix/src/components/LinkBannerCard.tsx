import React from 'react';

interface LinkBannerCardProps {
  title: string;
  subtitle: string;
  graphic: React.ReactNode;
  onClick: () => void;
  index?: number;
}

export const LinkBannerCard: React.FC<LinkBannerCardProps> = ({
  title,
  subtitle,
  graphic,
  onClick,
  index = 0
}) => {
  // Sticky top stacking offset: card 0 at top-4 (z-10), card 1 at top-10 (z-20), card 2 at top-16 (z-30)
  const stickyStyles = {
    top: `${16 + index * 24}px`,
    zIndex: 10 + index * 10
  };

  return (
    <div
      style={stickyStyles}
      className="sticky w-full max-w-[380px] mx-auto mb-4 text-left group transition-all duration-300"
    >
      <button
        onClick={onClick}
        className="w-full text-left focus:outline-none transform hover:-translate-y-1 active:translate-y-0 transition-transform duration-300"
      >
        <div className="relative w-full rounded-2xl bg-gradient-to-r from-[#0a1327] via-[#0d1f3f] to-[#081226] border-t border-t-cyan-300/30 border-x border-slate-700/80 group-hover:border-cyan-400/80 border-b-[4px] border-b-cyan-400 p-4 sm:p-5 flex items-center justify-between shadow-2xl shadow-cyan-950/90 group-hover:shadow-cyan-500/30 overflow-hidden backdrop-blur-md transition-all duration-300">
          
          {/* Realistic Glossy Light Sweep Animation on Hover */}
          <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>

          {/* Ambient Backlight Glow inside Card */}
          <div className="absolute -right-10 -bottom-10 w-36 h-36 bg-cyan-500/15 blur-2xl rounded-full pointer-events-none"></div>

          {/* Left Text Column */}
          <div className="flex-1 pr-3 z-10">
            <h2 className="font-condensed text-3xl sm:text-4xl font-black bg-gradient-to-r from-cyan-300 via-sky-200 to-cyan-400 bg-clip-text text-transparent tracking-wider uppercase leading-none drop-shadow-[0_2px_8px_rgba(56,189,248,0.4)] group-hover:from-cyan-200 group-hover:to-sky-100 transition-all">
              {title}
            </h2>
            <p className="text-xs sm:text-[13px] text-slate-100 font-medium leading-snug mt-1.5 opacity-95">
              {subtitle}
            </p>
          </div>

          {/* Right Visual Graphic Column */}
          <div className="relative z-10 flex-shrink-0 flex items-center justify-center w-20 h-16 sm:w-24 sm:h-20 transform group-hover:scale-105 transition-transform duration-300">
            <div className="absolute inset-0 bg-cyan-400/10 blur-xl rounded-full pointer-events-none"></div>
            {graphic}
          </div>
        </div>
      </button>
    </div>
  );
};

