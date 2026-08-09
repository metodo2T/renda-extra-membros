import React from 'react';

export const JMLogoFooter: React.FC = () => {
  return (
    <footer className="w-full flex flex-col items-center justify-center pt-8 pb-12">
      {/* BC Monogram Logo */}
      <div className="flex items-center justify-center">
        <span className="font-condensed text-3xl sm:text-4xl font-black text-white tracking-tighter opacity-90 drop-shadow-[0_2px_8px_rgba(56,189,248,0.3)]">
          BC
        </span>
      </div>
      <p className="text-[10px] text-slate-500 font-medium mt-1 tracking-widest uppercase">
        Bruno Cesar • Gestão de Performance
      </p>
    </footer>
  );
};
