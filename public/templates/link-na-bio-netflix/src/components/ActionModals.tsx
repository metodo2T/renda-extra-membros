import React from 'react';
import { X, Play, Plus, MessageSquare, CheckCircle, ExternalLink, Sparkles, Send, Volume2, Share2 } from 'lucide-react';
import { SpotifyIcon, InstagramIcon, BrunoCutout, Zoom3DLaptop, Telegram3DBadge } from './Graphics';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'orcamentos' | 'mentoria' | 'comunidade' | 'instagram' | 'playlist' | null;
  whatsappNumber?: string;
  telegramUrl?: string;
  instagramUrl?: string;
  spotifyUrl?: string;
}

export const ActionModals: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  type,
  whatsappNumber = "5511999999999",
  telegramUrl = "https://t.me",
  instagramUrl = "https://instagram.com",
  spotifyUrl = "https://open.spotify.com"
}) => {
  if (!isOpen || !type) return null;

  const cleanNumber = whatsappNumber.replace(/\D/g, '');

  const handleWhatsApp = (msg: string) => {
    const url = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-fade-in">
      <div className="relative w-full max-w-md bg-[#181818] border border-white/10 rounded-2xl shadow-2xl text-slate-100 overflow-hidden">
        
        {/* Netflix Top Banner Backdrop */}
        <div className="relative w-full h-36 bg-gradient-to-b from-[#0a0a0a] via-[#141414] to-[#181818] flex items-center justify-center overflow-hidden border-b border-white/10">
          
          {/* Ambient Red Glow */}
          <div className="absolute top-0 w-48 h-48 bg-[#E50914]/20 blur-3xl rounded-full pointer-events-none"></div>

          {/* Netflix Badge Top Left */}
          <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded bg-black/80 backdrop-blur-md border border-white/10">
            <span className="text-[#E50914] font-black font-serif text-sm">N</span>
            <span className="text-[10px] font-bold tracking-widest text-white uppercase">Série Original</span>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 z-30 p-1.5 rounded-full bg-black/70 text-slate-300 hover:text-white hover:bg-black transition"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Graphic Banner Icon */}
          <div className="relative z-10 transform hover:scale-105 transition-transform duration-300">
            {type === 'orcamentos' && <BrunoCutout className="w-20 h-20" />}
            {type === 'mentoria' && <Zoom3DLaptop className="w-24 h-20" />}
            {type === 'comunidade' && <Telegram3DBadge className="w-16 h-16" />}
            {type === 'instagram' && (
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center shadow-xl">
                <InstagramIcon className="w-9 h-9" />
              </div>
            )}
            {type === 'playlist' && (
              <div className="w-16 h-16 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center shadow-xl font-bold">
                <SpotifyIcon className="w-10 h-10" />
              </div>
            )}
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 flex flex-col items-center text-center">
          
          {/* Badges Row */}
          <div className="flex items-center justify-center gap-2 text-xs font-semibold mb-2">
            <span className="text-emerald-400 font-extrabold">99% de Match</span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-300">2026</span>
            <span className="text-slate-500">•</span>
            <span className="px-1.5 py-0.5 rounded border border-slate-700 text-[10px] text-slate-300 font-bold uppercase">HD</span>
          </div>

          {/* ORÇAMENTOS */}
          {type === 'orcamentos' && (
            <>
              <h3 className="font-serif text-2xl sm:text-3xl font-black text-white uppercase tracking-tight text-center">
                Episódio 1: Orçamentos
              </h3>
              <p className="text-xs text-slate-300 mt-2 mb-6 leading-relaxed font-normal text-center max-w-xs">
                Tenha uma gestão profissional de tráfego pago para seu infoproduto com foco em escala acelerada, ROAS alto e otimização constante.
              </p>

              <div className="space-y-3 w-full">
                <button
                  onClick={() => handleWhatsApp("Olá Bruno! Gostaria de solicitar um orçamento para gestão de tráfego do meu infoproduto.")}
                  className="w-full py-3.5 px-4 rounded-lg bg-white hover:bg-slate-200 text-black font-extrabold text-sm shadow-xl flex items-center justify-center gap-2 transition"
                >
                  <Play className="w-4 h-4 fill-current text-black" />
                  <span>Solicitar no WhatsApp</span>
                </button>

                <button
                  onClick={() => handleWhatsApp("Olá Bruno! Gostaria de agendar uma reunião de diagnóstico de tráfego pago.")}
                  className="w-full py-3 px-4 rounded-lg bg-[#2a2a2a] hover:bg-[#383838] text-slate-200 font-bold text-xs border border-white/10 flex items-center justify-center gap-2 transition"
                >
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Agendar Diagnóstico de Tráfego</span>
                </button>
              </div>
            </>
          )}

          {/* MENTORIA */}
          {type === 'mentoria' && (
            <>
              <h3 className="font-serif text-2xl sm:text-3xl font-black text-white uppercase tracking-tight text-center">
                Episódio 2: Mentoria Individual
              </h3>
              <p className="text-xs text-slate-300 mt-2 mb-6 leading-relaxed font-normal text-center max-w-xs">
                Acelere seus resultados no Meta Ads e Google Ads de maneira simples com encontros individuais ao vivo para tirar dúvidas e otimizar campanhas.
              </p>

              <button
                onClick={() => handleWhatsApp("Olá Bruno! Tenho interesse na sua Mentoria Individual de tráfego para infoprodutores.")}
                className="w-full py-3.5 px-4 rounded-lg bg-white hover:bg-slate-200 text-black font-extrabold text-sm shadow-xl flex items-center justify-center gap-2 transition"
              >
                <Play className="w-4 h-4 fill-current text-black" />
                <span>Iniciar Mentoria no WhatsApp</span>
              </button>
            </>
          )}

          {/* COMUNIDADE */}
          {type === 'comunidade' && (
            <>
              <h3 className="font-serif text-2xl sm:text-3xl font-black text-white uppercase tracking-tight text-center">
                Episódio 3: Comunidade VIP
              </h3>
              <p className="text-xs text-slate-300 mt-2 mb-6 leading-relaxed font-normal text-center max-w-xs">
                Entre para a comunidade gratuita no Telegram com sacadas de bastidores, testes de criativos e atualizações das ferramentas de anúncios.
              </p>

              <button
                onClick={() => {
                  window.open(telegramUrl, '_blank', 'noopener,noreferrer');
                  onClose();
                }}
                className="w-full py-3.5 px-4 rounded-lg bg-[#E50914] hover:bg-red-700 text-white font-extrabold text-sm shadow-xl flex items-center justify-center gap-2 transition"
              >
                <Send className="w-4 h-4" />
                <span>Entrar no Telegram</span>
              </button>
            </>
          )}

          {/* INSTAGRAM */}
          {type === 'instagram' && (
            <>
              <h3 className="font-serif text-2xl sm:text-3xl font-black text-white uppercase tracking-tight text-center">
                Episódio 4: Instagram Direct
              </h3>
              <p className="text-xs text-slate-300 mt-2 mb-6 leading-relaxed font-normal text-center max-w-xs">
                Siga no Instagram para conteúdos diários, análises de métricas, reels com dicas práticas e stories dos bastidores.
              </p>

              <button
                onClick={() => {
                  window.open(instagramUrl, '_blank', 'noopener,noreferrer');
                  onClose();
                }}
                className="w-full py-3.5 px-4 rounded-lg bg-gradient-to-r from-purple-600 via-rose-500 to-amber-500 hover:opacity-95 text-white font-extrabold text-sm shadow-xl flex items-center justify-center gap-2 transition"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Abrir Instagram @brunocesar</span>
              </button>
            </>
          )}

          {/* PLAYLIST */}
          {type === 'playlist' && (
            <>
              <h3 className="font-serif text-2xl sm:text-3xl font-black text-white uppercase tracking-tight text-center">
                Episódio 5: Playlist do Gestor
              </h3>
              <p className="text-xs text-slate-300 mt-2 mb-6 leading-relaxed font-normal text-center max-w-xs">
                Trilha sonora selecionada a dedo para aumentar a concentração e o ritmo de trabalho durante o gerenciamento de contas de anúncios.
              </p>

              <button
                onClick={() => {
                  window.open(spotifyUrl, '_blank', 'noopener,noreferrer');
                  onClose();
                }}
                className="w-full py-3.5 px-4 rounded-lg bg-[#1DB954] hover:bg-emerald-600 text-black font-extrabold text-sm shadow-xl flex items-center justify-center gap-2 transition"
              >
                <Play className="w-4 h-4 fill-current text-black" />
                <span>Ouvir Playlist no Spotify</span>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
