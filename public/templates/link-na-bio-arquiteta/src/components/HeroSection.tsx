import React from 'react';
import { ProfileData } from '../types';

interface HeroSectionProps {
  profile: ProfileData;
  onOpenMenu: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ profile, onOpenMenu }) => {
  return (
    <div className="relative w-full h-[400px] sm:h-[450px] text-white flex flex-col justify-between overflow-hidden select-none bg-[#CECECF]">
      {/* Expanded Full-Bleed Profile Photograph */}
      <img
        src={profile.heroImage}
        alt={`${profile.name} ${profile.surname}`}
        className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 ease-out scale-[1.02]"
      />

      {/* Top Gradient Overlay for readability of BEM-VINDO and Menu */}
      <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-black/55 via-black/20 to-transparent pointer-events-none z-10" />

      {/* Bottom Gradient Overlay for readability of Name & Profession */}
      <div className="absolute bottom-0 inset-x-0 h-44 bg-gradient-to-t from-black/75 via-black/35 to-transparent pointer-events-none z-10" />

      {/* 1. Header Top Bar */}
      <div className="relative z-20 w-full max-w-[390px] mx-auto pt-4 px-4 flex flex-col items-center">
        <div className="w-full flex items-center justify-between px-1 pb-2">
          {/* Top Left: BEM-VINDO */}
          <span className="font-sans-clean text-[10.5px] font-light tracking-[0.28em] text-white uppercase select-none drop-shadow-xs">
            {profile.welcome || "BEM-VINDO"}
          </span>

          {/* Top Right: Minimalist Hamburger Icon */}
          <button
            onClick={onOpenMenu}
            aria-label="Abrir Menu"
            className="group p-1 flex flex-col items-end gap-[4px] cursor-pointer focus:outline-none transition-transform active:scale-95"
          >
            <span className="w-4 h-[1.5px] bg-white rounded-full transition-all group-hover:w-5 shadow-xs"></span>
            <span className="w-3.5 h-[1.5px] bg-white rounded-full transition-all group-hover:w-5 shadow-xs"></span>
            <span className="w-2.5 h-[1.5px] bg-white rounded-full transition-all group-hover:w-5 shadow-xs"></span>
          </button>
        </div>

        {/* Thin Horizontal White Line */}
        <div className="w-full h-[1px] bg-white/40 rounded-full shadow-xs" />
      </div>

      {/* 2. Name & Profession Overlay (At the bottom of expanded portrait) */}
      <div className="relative z-20 w-full max-w-[390px] mx-auto pb-6 px-4 text-center flex flex-col items-center justify-end">
        <h1 className="font-serif-editorial text-[clamp(2.1rem,8vw,2.8rem)] font-normal text-white drop-shadow-md leading-none tracking-tight">
          <span>{profile.name} </span>
          <span className="italic font-light">{profile.surname}</span>
        </h1>
        <p className="font-sans-clean text-[10px] sm:text-[11px] font-medium tracking-[0.32em] text-white/95 uppercase mt-1.5 drop-shadow-sm">
          {profile.profession || "PROFISSÃO"}
        </p>
      </div>
    </div>
  );
};
