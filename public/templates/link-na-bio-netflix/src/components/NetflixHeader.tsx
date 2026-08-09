import React, { useState } from 'react';
import { User, Bell, Search, ChevronDown, Check } from 'lucide-react';

interface NetflixHeaderProps {
  currentProfile: string;
  onSelectProfile: (profile: string) => void;
  onOpenProfileModal: () => void;
}

export const NetflixHeader: React.FC<NetflixHeaderProps> = ({
  currentProfile,
  onOpenProfileModal
}) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-gradient-to-b from-black/90 via-[#141414]/90 to-transparent backdrop-blur-md px-4 sm:px-6 py-3 flex items-center justify-between transition-all border-b border-white/5">
      {/* Left side: BRUNOFLIX Logo & Nav items */}
      <div className="flex items-center gap-4 sm:gap-6">
        <div className="flex items-center gap-1 cursor-pointer group">
          <span className="font-serif font-black text-2xl sm:text-3xl tracking-tighter text-[#E50914] drop-shadow-[0_2px_8px_rgba(229,9,20,0.6)] group-hover:scale-105 transition-transform">
            BRUNO<span className="text-white">FLIX</span>
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-4 text-xs font-medium text-slate-300">
          <span className="text-white font-bold cursor-pointer hover:text-slate-200 transition">Início</span>
          <span className="cursor-pointer hover:text-slate-200 transition">Séries de Tráfego</span>
          <span className="cursor-pointer hover:text-slate-200 transition">Em Alta</span>
          <span className="cursor-pointer hover:text-slate-200 transition">Minha Lista</span>
        </nav>
      </div>

      {/* Right side: Search, Notifications & Profile Picker */}
      <div className="flex items-center gap-3 sm:gap-4">
        <button className="text-slate-300 hover:text-white transition p-1" title="Buscar">
          <Search className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        <button className="relative text-slate-300 hover:text-white transition p-1" title="Notificações">
          <Bell className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="absolute top-0 right-0 w-2 h-2 rounded-full bg-[#E50914] animate-pulse"></span>
        </button>

        {/* Profile Avatar Button */}
        <button
          onClick={onOpenProfileModal}
          className="flex items-center gap-1.5 p-1 rounded-md hover:bg-white/10 transition border border-transparent hover:border-white/20"
          title="Trocar Perfil"
        >
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded bg-gradient-to-tr from-[#E50914] to-rose-600 flex items-center justify-center text-white font-bold text-xs shadow-md border border-rose-400/40">
            <img
              src="https://i.postimg.cc/MKQH4wrR/Bruno-Ce-sar-jpg-(1).jpg"
              alt={currentProfile}
              className="w-full h-full object-cover rounded"
            />
          </div>
          <ChevronDown className="w-3.5 h-3.5 text-slate-300" />
        </button>
      </div>
    </header>
  );
};
