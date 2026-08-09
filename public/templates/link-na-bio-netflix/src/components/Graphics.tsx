import React from 'react';

// Meta Ads 3D Infinity Glowing Icon
export const Meta3DIcon: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="metaGlowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0064FF" />
        <stop offset="50%" stopColor="#0088FF" />
        <stop offset="100%" stopColor="#00D2FF" />
      </linearGradient>
      <filter id="metaGlow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="4" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>
    <path
      d="M28 35C21 35 15 41 15 50C15 59 21 65 28 65C36 65 44 57 50 50C56 43 64 35 72 35C79 35 85 41 85 50C85 59 79 65 72 65C64 65 56 57 50 50C44 43 36 35 28 35Z"
      stroke="url(#metaGlowGrad)"
      strokeWidth="10"
      strokeLinecap="round"
      strokeLinejoin="round"
      filter="url(#metaGlow)"
    />
  </svg>
);

// Google Ads 3D Emblem Icon
export const GoogleAds3DIcon: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="googleDrop" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="4" stdDeviation="4" floodColor="#000" floodOpacity="0.5" />
      </filter>
    </defs>
    <g filter="url(#googleDrop)">
      {/* Yellow bar */}
      <rect x="25" y="15" width="22" height="60" rx="11" transform="rotate(-30 25 15)" fill="#FABB05" />
      {/* Blue bar */}
      <rect x="42" y="32" width="22" height="60" rx="11" transform="rotate(30 42 32)" fill="#4285F4" />
      {/* Green circle badge */}
      <circle cx="28" cy="72" r="11" fill="#34A853" />
    </g>
  </svg>
);

// 3D Zoom Laptop Graphic for Mentoria Banner
export const Zoom3DLaptop: React.FC<{ className?: string }> = ({ className = "w-20 h-20" }) => (
  <div className={`relative flex flex-col items-center justify-center transform hover:scale-105 transition-transform duration-300 ${className}`}>
    <div className="relative w-20 h-14 bg-gradient-to-b from-slate-200 to-slate-400 rounded-t-lg p-1 shadow-2xl border border-slate-300/50 flex flex-col items-center justify-center">
      {/* Laptop Screen inner */}
      <div className="w-full h-full bg-[#0b1329] rounded flex items-center justify-center relative overflow-hidden border border-slate-800">
        <div className="absolute inset-0 bg-blue-600/20 animate-pulse"></div>
        <span className="text-sky-400 font-extrabold text-[13px] tracking-tight relative z-10 italic">
          zoom
        </span>
      </div>
    </div>
    {/* Laptop Base */}
    <div className="w-24 h-2 bg-gradient-to-b from-slate-400 to-slate-600 rounded-b-md shadow-lg relative flex justify-center">
      <div className="w-6 h-1 bg-slate-300 rounded-full mt-0.5"></div>
    </div>
    {/* Shadow beneath */}
    <div className="w-20 h-1.5 bg-sky-500/30 blur-md rounded-full mt-1"></div>
  </div>
);

// Telegram Glowing 3D Badge for Comunidade Banner
export const Telegram3DBadge: React.FC<{ className?: string }> = ({ className = "w-14 h-14" }) => (
  <div className={`relative flex items-center justify-center ${className}`}>
    <div className="absolute -inset-2 bg-sky-400/30 rounded-full blur-md animate-pulse"></div>
    <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-sky-500 via-cyan-400 to-blue-500 flex items-center justify-center shadow-lg border border-sky-300/40 transform hover:scale-110 transition-transform duration-300">
      <svg className="w-7 h-7 text-white fill-current translate-x-[-1px] translate-y-[1px]" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.25-5.54 3.69-.52.36-1 .53-1.42.52-.47-.01-1.37-.26-2.03-.48-.82-.27-1.47-.42-1.42-.88.03-.24.37-.49 1.02-.75 3.99-1.74 6.66-2.89 8.01-3.45 3.82-1.59 4.61-1.87 5.13-1.88.11 0 .37.03.54.17.14.12.18.28.2.45-.01.07.01.21 0 .28z" />
      </svg>
    </div>
  </div>
);

// Spotify Icon for Playlist button
export const SpotifyIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.48.66.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.18-.1.2-1.2-.42-.18-.6.42-1.2 1.02-1.38 4.26-1.26 11.28-1.02 15.72 1.62.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
  </svg>
);

// Instagram Icon
export const InstagramIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

// Bruno Cesar Portrait Cutout for Orçamentos Banner
export const BrunoCutout: React.FC<{ className?: string }> = ({ className = "w-16 h-16" }) => (
  <div className={`relative rounded-2xl overflow-hidden border-2 border-cyan-300/60 shadow-2xl shadow-cyan-500/30 group-hover:border-cyan-200 transition-all ${className}`}>
    <img
      src="https://i.postimg.cc/MKQH4wrR/Bruno-Ce-sar-jpg-(1).jpg"
      alt="Bruno Cesar"
      className="w-full h-full object-cover object-top filter contrast-[1.08] brightness-[1.02]"
      onError={(e) => {
        (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300";
      }}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none"></div>
    <div className="absolute inset-0 border border-white/20 rounded-2xl pointer-events-none"></div>
  </div>
);

export const JackCutout = BrunoCutout;
