import React from 'react';
import { Play, Plus, Check, Info } from 'lucide-react';

interface NetflixMovieCardProps {
  index: number;
  episodeNumber: number;
  title: string;
  subtitle: string;
  matchScore?: string;
  duration?: string;
  badgeText?: string;
  progressPercent?: number;
  coverImageUrl?: string;
  onClick: () => void;
}

export const NetflixMovieCard: React.FC<NetflixMovieCardProps> = ({
  index,
  episodeNumber,
  title,
  subtitle,
  matchScore = "98% Match",
  duration = "25 min",
  badgeText = "Série Original",
  progressPercent = 75,
  coverImageUrl,
  onClick
}) => {
  const [inList, setInList] = React.useState(false);

  return (
    <div
      onClick={onClick}
      className="w-full max-w-[380px] mx-auto mb-4 cursor-pointer group focus:outline-none transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
    >
      {/* Outer Card Container */}
      <div className="relative w-full rounded-2xl bg-[#181818] border border-white/10 group-hover:border-[#E50914]/80 p-3.5 sm:p-4 flex flex-col shadow-xl group-hover:shadow-[0_8px_25px_rgba(229,9,20,0.25)] overflow-hidden transition-all duration-300">
        
        {/* Top Thumbnail Section with Real Photo Cover */}
        <div className="relative w-full h-40 sm:h-44 rounded-xl bg-[#0a0a0a] overflow-hidden flex flex-col items-center justify-center p-4 border border-white/5 text-center">
          
          {/* Real Photo Background Cover */}
          {coverImageUrl && (
            <img
              src={coverImageUrl}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover filter contrast-[1.05] brightness-[0.7] group-hover:scale-105 transition-transform duration-500"
            />
          )}

          {/* Dark Overlay for Ultra Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/40 z-0"></div>

          {/* Subtle Ambient Red Light on Hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#E50914]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"></div>

          {/* Episode Tag */}
          <div className="absolute top-2.5 left-2.5 z-20 flex items-center gap-1.5 px-2 py-0.5 rounded bg-black/80 backdrop-blur-md border border-white/10 text-[10px] font-bold text-white uppercase tracking-wider">
            <span className="text-[#E50914] font-black font-serif">N</span>
            <span>Ep. {episodeNumber}</span>
          </div>

          {/* Match Score & Duration Badge */}
          <div className="absolute top-2.5 right-2.5 z-20 flex items-center gap-1.5 px-2 py-0.5 rounded bg-black/80 backdrop-blur-md border border-white/10 text-[10px] font-bold">
            <span className="text-emerald-400 font-extrabold">{matchScore}</span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-300">{duration}</span>
          </div>

          {/* Centered Title & Subtitle */}
          <div className="relative z-20 flex flex-col items-center justify-center text-center w-full max-w-[320px] px-2 pt-4">
            <h3 className="font-serif text-2xl sm:text-3xl font-black text-white tracking-wide uppercase leading-tight group-hover:text-red-400 transition-colors drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] text-center">
              {title}
            </h3>
            <p className="text-xs text-slate-200 font-medium line-clamp-2 mt-1.5 leading-snug opacity-95 drop-shadow text-center">
              {subtitle}
            </p>
          </div>

          {/* Play Button Overlay on Hover */}
          <div className="absolute inset-0 z-30 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
            <div className="w-12 h-12 rounded-full bg-[#E50914] text-white flex items-center justify-center shadow-lg shadow-red-900/60 transform scale-90 group-hover:scale-100 transition-transform">
              <Play className="w-6 h-6 fill-current text-white translate-x-[1px]" />
            </div>
          </div>

          {/* Red Progress Bar at bottom of thumbnail */}
          <div className="absolute inset-x-0 bottom-0 h-1 bg-slate-800/80 z-20">
            <div
              className="h-full bg-[#E50914] rounded-r-full transition-all duration-500 shadow-[0_0_8px_rgba(229,9,20,0.8)]"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
        </div>

        {/* Bottom Centered Quick Controls Bar */}
        <div className="mt-2.5 px-1 flex items-center justify-between text-xs text-slate-400 font-medium">
          <div className="flex items-center gap-2">
            <span className="text-emerald-400 font-bold text-[11px]">Continuar assistindo</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400 text-[11px]">{badgeText}</span>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setInList(!inList);
              }}
              className="p-1 rounded hover:bg-white/10 text-slate-300 hover:text-white transition"
              title="Adicionar à Lista"
            >
              {inList ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Plus className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onClick();
              }}
              className="p-1 rounded hover:bg-white/10 text-slate-300 hover:text-white transition"
              title="Detalhes do Episódio"
            >
              <Info className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

