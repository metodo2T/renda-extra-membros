import React from 'react';
import { ProfileData } from '../types';

interface FooterCTAProps {
  profile: ProfileData;
  onCtaClick?: () => void;
}

export const FooterCTA: React.FC<FooterCTAProps> = ({ profile }) => {
  return (
    <div className="mt-8 flex flex-col items-center text-center">
      {/* Footer Banner matching light theme */}
      <footer className="w-full mt-6 pt-6 pb-8 border-t border-purple-200/80 bg-gradient-to-b from-white/60 via-purple-50/50 to-purple-100/40 rounded-b-3xl text-center px-4 shadow-sm">
        <p className="text-purple-950 text-base sm:text-lg font-extrabold tracking-tight">
          {profile.footerCopyright}
        </p>
      </footer>
    </div>
  );
};
