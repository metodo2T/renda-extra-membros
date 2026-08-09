import React, { useState } from 'react';
import { MessageSquare, Share2, Check, Sparkles, Circle } from 'lucide-react';

interface TopHeaderProps {
  onContactClick: () => void;
  whatsappNumber?: string;
}

export const TopHeader: React.FC<TopHeaderProps> = ({ onContactClick, whatsappNumber = "5511999999999" }) => {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Bruno Cesar - Gestor de Tráfego Pago',
          text: 'Conheça o trabalho de gestão de tráfego pago e performance para infoprodutores.',
          url: window.location.href,
        });
      } catch {
        copyLink();
      }
    } else {
      copyLink();
    }
  };

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-xl border-b border-slate-200/80 shadow-sm transition-all">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 flex items-center justify-between gap-4">
        
        {/* Left Branding */}
        <div className="flex items-center gap-3">
          {/* Monogram Badge */}
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-sky-400 flex items-center justify-center font-condensed font-black text-white text-lg sm:text-xl shadow-md shadow-cyan-500/20 border border-sky-300/30 flex-shrink-0">
            BC
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-condensed text-lg sm:text-xl font-bold text-slate-900 tracking-widest uppercase leading-none">
                BRUNO CESAR
              </span>
              <span className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[11px] font-semibold">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Disponível</span>
              </span>
            </div>
            <span className="text-[11px] sm:text-xs text-slate-500 font-medium leading-tight">
              Gestor de Tráfego <span className="hidden sm:inline">para Infoprodutores</span>
            </span>
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Share Button */}
          <button
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 border border-slate-200/90 transition shadow-xs text-xs font-semibold"
            title="Compartilhar Link"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="hidden sm:inline text-emerald-600">Copiado!</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5 text-cyan-600" />
                <span className="hidden sm:inline">Compartilhar</span>
              </>
            )}
          </button>

          {/* Primary Action Button */}
          <button
            onClick={onContactClick}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-extrabold text-xs sm:text-sm shadow-md shadow-cyan-500/20 border border-sky-300/30 transition-all transform hover:scale-[1.02] active:scale-95"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-current" />
            <span>Orçamento</span>
          </button>
        </div>

      </div>
    </header>
  );
};
