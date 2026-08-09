import React from 'react';
import { ProfileData } from '../types';

interface HeaderProps {
  profile: ProfileData;
}

export const Header: React.FC<HeaderProps> = ({ profile }) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-purple-100 shadow-xs transition-all">
      <div className="max-w-md mx-auto px-4 py-2.5 flex items-center justify-start">
        {/* Minimalist Logo / Name */}
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-purple-600 to-fuchsia-600 flex items-center justify-center text-white text-xs font-black shadow-xs">
            MS
          </div>
          <div className="flex flex-col text-left">
            <span className="text-xs font-bold text-purple-950 tracking-tight leading-none">
              <span className="font-light text-purple-800">{profile.namePrefix}</span> {profile.nameBold}
            </span>
            <span className="text-[10px] text-purple-700/80 font-medium leading-none mt-0.5">
              {profile.role}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};
