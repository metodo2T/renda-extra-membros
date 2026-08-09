import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

interface NetflixHeroBillboardProps {
  name?: string;
  roleBadge?: string;
  avatarUrl?: string;
  onPlayClick?: () => void;
  onInfoClick?: () => void;
}

export const NetflixHeroBillboard: React.FC<NetflixHeroBillboardProps> = ({
  name = "BRUNO CESAR",
  roleBadge = "Gestor de Tráfego para Infoprodutores",
  avatarUrl = "https://i.postimg.cc/MKQH4wrR/Bruno-Ce-sar-jpg-(1).jpg",
  onPlayClick,
  onInfoClick
}) => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const triggerElement = parallaxRef.current?.querySelector('[data-parallax-layers]');

    if (triggerElement) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerElement,
          start: "top 20%",
          end: "bottom top",
          scrub: 0.5
        }
      });

      tl.to(triggerElement.querySelectorAll('[data-parallax-layer="1"]'), {
        yPercent: 20,
        ease: "none"
      }).to(triggerElement.querySelectorAll('[data-parallax-layer="2"]'), {
        yPercent: 10,
        ease: "none"
      }, "<");
    }

    const lenis = new Lenis();
    lenis.on('scroll', ScrollTrigger.update);
    const tickerCb = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tickerCb);
    gsap.ticker.lagSmoothing(0);

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
      gsap.ticker.remove(tickerCb);
      lenis.destroy();
    };
  }, []);

  return (
    <div ref={parallaxRef} className="relative w-full max-w-[380px] mx-auto mb-6 group cursor-pointer" onClick={onPlayClick}>
      {/* Netflix Outer Glow */}
      <div className="absolute -inset-1 rounded-[28px] bg-gradient-to-b from-[#E50914]/40 via-red-900/20 to-transparent blur-xl opacity-80 group-hover:opacity-100 transition duration-500"></div>

      {/* Main Netflix Card Container */}
      <div className="relative w-full rounded-[24px] bg-[#181818] border border-white/10 overflow-hidden shadow-2xl flex flex-col items-center">
        
        {/* Expanded Profile Image Stage across screen */}
        <div data-parallax-layers className="relative w-full h-[420px] sm:h-[480px] bg-[#0a0a0a] overflow-hidden">
          
          {/* Background Ambient Red Spotlight */}
          <div data-parallax-layer="1" className="absolute top-10 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-[#E50914]/30 blur-3xl pointer-events-none"></div>

          {/* Top Netflix Badge Overlay */}
          <div className="absolute top-4 left-4 z-30 flex items-center gap-1.5 px-3 py-1 rounded-md bg-black/80 backdrop-blur-md border border-white/10">
            <span className="text-[#E50914] font-black font-serif text-base">N</span>
            <span className="text-[11px] font-bold tracking-widest text-white uppercase">Série Original</span>
          </div>

          {/* Top 1 Badge */}
          <div className="absolute top-4 right-4 z-30 flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#E50914] text-white font-black text-[11px] uppercase tracking-wider shadow-lg">
            <span>TOP 1 HOJE</span>
          </div>

          {/* Expanded Profile Photo Filling Stage */}
          <div data-parallax-layer="2" className="relative z-10 w-full h-full flex items-center justify-center">
            <img
              src={avatarUrl}
              alt={name}
              className="w-full h-full object-cover object-top filter contrast-[1.08] brightness-[1.02] transform group-hover:scale-105 transition-transform duration-700"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800";
              }}
            />
          </div>

          {/* Smooth Bottom Dark Gradient Fade */}
          <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#181818] via-[#181818]/85 to-transparent z-20 pointer-events-none"></div>
        </div>

        {/* Centered Content Details Section */}
        <div className="relative z-30 w-full pt-0 pb-6 px-5 flex flex-col items-center text-center -mt-16">
          
          {/* Centered Title */}
          <h1 className="font-serif text-4xl sm:text-5xl font-black text-white tracking-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)] leading-tight text-center">
            {name}
          </h1>

          {/* Subtitle / Role Badge */}
          <p className="text-xs sm:text-sm font-semibold text-red-400 mt-1 uppercase tracking-wider text-center">
            {roleBadge}
          </p>

          {/* Centered Synopsis */}
          <p className="text-xs text-slate-300 font-normal leading-relaxed mt-2.5 max-w-[320px] text-center">
            Especialista em escala de lançamentos com Meta Ads & Google Ads. ROI implacável e estratégias validadas.
          </p>

          {/* WhatsApp Meeting Button */}
          <a
            href="https://wa.me/5511999999999?text=Ol%C3%A1%20Bruno!%20Gostaria%20de%20agendar%20uma%20reuni%C3%A3o."
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              e.stopPropagation();
              if (onPlayClick) onPlayClick();
            }}
            className="mt-4 w-full max-w-[320px] py-3.5 px-5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold text-sm flex items-center justify-center gap-2.5 shadow-[0_4px_20px_rgba(37,211,102,0.35)] hover:shadow-[0_6px_25px_rgba(37,211,102,0.5)] transition-all transform active:scale-95 border border-white/20"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.882-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.285-.143-1.689-.834-1.95-.929-.26-.095-.45-.143-.639.143-.19.286-.736.929-.902 1.118-.167.19-.333.214-.618.071-.285-.143-1.207-.445-2.299-1.419-.85-.759-1.424-1.696-1.591-1.982-.167-.285-.018-.44.125-.582.128-.128.285-.333.428-.499.143-.167.19-.285.285-.476.095-.19.048-.357-.024-.5-.071-.143-.639-1.541-.875-2.108-.23-.553-.464-.477-.639-.486-.165-.008-.354-.008-.544-.008s-.499.071-.76.357c-.26.286-1 .976-1 2.381 0 1.405 1.023 2.761 1.166 2.951.143.19 2.013 3.074 4.877 4.312.682.295 1.215.471 1.63.603.685.218 1.309.187 1.802.114.549-.081 1.689-.69 1.927-1.356.237-.666.237-1.237.166-1.356-.07-.119-.26-.19-.545-.333z"/>
            </svg>
            <span>Agendar uma reunião</span>
          </a>
        </div>
      </div>
    </div>
  );
};

