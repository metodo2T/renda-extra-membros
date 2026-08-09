import React from 'react';

interface ActionButtonProps {
  label: string;
  icon: React.ReactNode;
  onClick: () => void;
  href?: string;
}

export const ActionButton: React.FC<ActionButtonProps> = ({
  label,
  icon,
  onClick,
  href
}) => {
  const content = (
    <div className="w-full max-w-[380px] mx-auto mb-3.5">
      <button
        onClick={onClick}
        className="w-full rounded-2xl bg-gradient-to-r from-[#0066FF] via-[#0080FF] to-[#00A3FF] hover:from-[#0052cc] hover:to-[#0088cc] py-3.5 px-6 text-white font-extrabold text-lg sm:text-xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 border-t border-t-white/30 border-b border-b-blue-800/40 flex items-center justify-center gap-3 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] group"
      >
        <span className="text-white flex-shrink-0 group-hover:scale-110 transition-transform">{icon}</span>
        <span className="font-sans font-extrabold tracking-wide text-white drop-shadow-xs">{label}</span>
      </button>
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block w-full">
        {content}
      </a>
    );
  }

  return content;
};
