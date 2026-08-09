import React from 'react';
import { ProfileData } from '../types';
import { Sparkles } from 'lucide-react';

interface HeaderProps {
  profile: ProfileData;
}

export const Header: React.FC<HeaderProps> = ({ profile }) => {
  return (
    <header className="relative w-full pt-8 pb-3 px-4 flex flex-col items-center text-center max-w-lg mx-auto">
      {/* Avatar Container with 3D Ring */}
      <div className="relative group mb-4">
        {/* Glow backdrop behind profile */}
        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-600 via-indigo-500 to-emerald-500 blur-lg opacity-70 group-hover:opacity-100 transition duration-500 animate-pulse"></div>

        {/* Outer 3D ring frame */}
        <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1 bg-gradient-to-tr from-blue-500 via-cyan-400 to-emerald-400 shadow-2xl">
          <div className="w-full h-full rounded-full overflow-hidden bg-slate-950 p-0.5 relative">
            <img
              src={profile.avatarUrl}
              alt={profile.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-500"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800";
              }}
            />
          </div>
        </div>
      </div>

      {/* Name and Role */}
      <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-heading mb-1 flex items-center justify-center gap-2">
        <span>{profile.name}</span>
        <Sparkles className="w-5 h-5 text-amber-400 fill-amber-400/20 shrink-0" />
      </h1>

      <p className="text-blue-400 font-semibold text-sm sm:text-base mb-2">
        {profile.role}
      </p>

      {/* Bio Tagline */}
      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-md mx-auto mb-3 font-normal">
        {profile.tagline}
      </p>
    </header>
  );
};
