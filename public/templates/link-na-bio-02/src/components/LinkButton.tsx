import React from 'react';
import { WhatsAppIcon, YouTubeIcon, TikTokIcon, InstagramIcon, GlobeArrowIcon } from './CustomIcons';
import { BioLink } from '../types';

interface LinkButtonProps {
  link: BioLink;
  onClick: (link: BioLink) => void;
}

export const LinkButton: React.FC<LinkButtonProps> = ({ link, onClick }) => {
  const getBrandStyles = () => {
    switch (link.icon) {
      case 'whatsapp':
        return {
          bg: 'bg-gradient-to-r from-[#128c7e] via-[#25d366] to-[#128c7e] hover:from-[#0f7a6e] hover:via-[#20be5b] hover:to-[#0f7a6e]',
          border: 'border-emerald-300/40',
          shadow: 'shadow-lg shadow-emerald-950/60 hover:shadow-emerald-500/40',
          subtitle: 'text-emerald-100',
        };
      case 'globe':
        return {
          bg: 'bg-gradient-to-r from-[#2e0854] via-[#6b11af] to-[#9323e0] hover:from-[#260647] hover:via-[#5c0e98] hover:to-[#821cc8]',
          border: 'border-purple-300/40',
          shadow: 'shadow-lg shadow-purple-950/60 hover:shadow-purple-500/40',
          subtitle: 'text-purple-100',
        };
      case 'youtube':
        return {
          bg: 'bg-gradient-to-r from-[#990000] via-[#ff0000] to-[#cc0000] hover:from-[#800000] hover:via-[#e60000] hover:to-[#b30000]',
          border: 'border-red-300/40',
          shadow: 'shadow-lg shadow-red-950/60 hover:shadow-red-500/40',
          subtitle: 'text-red-100',
        };
      case 'tiktok':
        return {
          bg: 'bg-gradient-to-r from-[#050505] via-[#16161e] to-[#050505] hover:from-[#0a0a0f] hover:via-[#20202c] hover:to-[#0a0a0f]',
          border: 'border-cyan-400/40',
          shadow: 'shadow-lg shadow-cyan-950/80 hover:shadow-[0_4px_25px_rgba(37,244,238,0.35)]',
          subtitle: 'text-cyan-100/90',
        };
      case 'instagram':
        return {
          bg: 'bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] hover:from-[#722f9e] hover:via-[#e01919] hover:to-[#eb9f38]',
          border: 'border-pink-300/40',
          shadow: 'shadow-lg shadow-pink-950/60 hover:shadow-pink-500/40',
          subtitle: 'text-amber-100',
        };
      default:
        return {
          bg: 'bg-gradient-to-r from-[#8000a3] via-[#a200d1] to-[#b500eb] hover:from-[#8c00b3] hover:via-[#b000e3] hover:to-[#c400ff]',
          border: 'border-purple-300/30',
          shadow: 'shadow-lg shadow-purple-950/50 hover:shadow-purple-700/30',
          subtitle: 'text-purple-100',
        };
    }
  };

  const styles = getBrandStyles();

  const renderIcon = () => {
    switch (link.icon) {
      case 'whatsapp':
        return <WhatsAppIcon className="w-6 h-6 text-white drop-shadow" />;
      case 'globe':
        return <GlobeArrowIcon className="w-6 h-6 text-white drop-shadow" />;
      case 'youtube':
        return <YouTubeIcon className="w-6 h-6 text-white drop-shadow" />;
      case 'tiktok':
        return <TikTokIcon className="w-6 h-6 text-white drop-shadow-[0_0_6px_rgba(37,244,238,0.7)]" />;
      case 'instagram':
        return <InstagramIcon className="w-6 h-6 text-white drop-shadow" />;
      default:
        return <GlobeArrowIcon className="w-6 h-6 text-white drop-shadow" />;
    }
  };

  return (
    <button
      onClick={() => onClick(link)}
      className={`w-full relative group ${styles.bg} ${styles.border} ${styles.shadow} text-white py-3 sm:py-3.5 px-6 rounded-full border hover:scale-[1.015] active:scale-[0.985] transition-all duration-200 cursor-pointer overflow-hidden flex items-center justify-between`}
    >
      {/* Top subtle highlight line for glossy feel */}
      <div className="absolute top-0 left-4 right-4 h-[1px] bg-white/30 group-hover:bg-white/50 transition-colors pointer-events-none" />

      {/* Left Icon */}
      <div className="flex items-center justify-center shrink-0 w-8 h-8">
        {renderIcon()}
      </div>

      {/* Center Text Column */}
      <div className="flex-1 text-center px-2">
        <div className="font-extrabold text-base sm:text-lg tracking-wide text-white leading-tight drop-shadow-sm">
          {link.title}
        </div>
        <div className={`${styles.subtitle} text-xs sm:text-sm font-light tracking-normal opacity-95`}>
          {link.subtitle}
        </div>
      </div>

      {/* Invisible spacer right for perfect center balance */}
      <div className="w-8 shrink-0" />
    </button>
  );
};

