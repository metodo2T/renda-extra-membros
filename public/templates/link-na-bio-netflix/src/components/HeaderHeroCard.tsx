import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

interface HeaderHeroCardProps {
  name?: string;
  roleBadge?: string;
  avatarUrl?: string;
}

export const HeaderHeroCard: React.FC<HeaderHeroCardProps> = ({
  name = "BRUNO CESAR",
  roleBadge = "Gestor de tráfego para Infoprodutores",
  avatarUrl = "https://i.postimg.cc/MKQH4wrR/Bruno-Ce-sar-jpg-(1).jpg"
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

      const layers = [
        { layer: "1", yPercent: 35 },
        { layer: "2", yPercent: 20 },
        { layer: "3", yPercent: 5 }
      ];

      layers.forEach((layerObj, idx) => {
        tl.to(
          triggerElement.querySelectorAll(`[data-parallax-layer="${layerObj.layer}"]`),
          {
            yPercent: layerObj.yPercent,
            ease: "none"
          },
          idx === 0 ? undefined : "<"
        );
      });
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
    <div ref={parallaxRef} className="relative w-full max-w-[380px] mx-auto mb-6 group">
      {/* Cyan Ambient Glow Behind Card */}
      <div className="absolute -inset-1 rounded-[30px] bg-gradient-to-b from-cyan-500/30 via-blue-600/20 to-transparent blur-xl opacity-80 group-hover:opacity-100 transition duration-500"></div>

      {/* Main Hero Card Container - Dark Seamless Theme */}
      <div className="relative w-full rounded-[26px] bg-[#0a1324] border border-cyan-500/25 overflow-hidden shadow-2xl shadow-cyan-950/60 flex flex-col items-center">
        
        {/* Parallax Container Stage */}
        <div data-parallax-layers className="relative w-full h-[320px] bg-gradient-to-b from-[#09152a] via-[#0e2246] to-[#0a1324] flex items-center justify-center overflow-hidden">
          
          {/* Layer 1: Studio Spotlight behind head */}
          <div data-parallax-layer="1" className="absolute top-8 left-1/2 -translate-x-1/2 w-52 h-52 rounded-full bg-cyan-400/20 blur-3xl pointer-events-none"></div>

          {/* Layer 2: Profile Image Cutout / Photo */}
          <div data-parallax-layer="2" className="relative z-10 w-full h-full flex items-end justify-center">
            <img
              src={avatarUrl}
              alt={name}
              className="w-full h-full object-cover object-top filter contrast-[1.06] brightness-[1.02]"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800";
              }}
            />
          </div>

          {/* Layer 3: Dark Seamless Gradient Overlay at bottom of portrait */}
          <div data-parallax-layer="3" className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0a1324] via-[#0a1324]/80 to-transparent z-20 pointer-events-none"></div>
        </div>

        {/* Name and Tagline Badge Section */}
        <div className="relative z-30 w-full pt-0 pb-5 px-4 flex flex-col items-center text-center -mt-8">
          {/* Main Condensed Uppercase Title */}
          <h1 className="font-condensed text-4xl sm:text-5xl font-black text-white tracking-widest uppercase drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] leading-tight">
            {name}
          </h1>

          {/* Vibrant Blue Pill Badge */}
          <div className="mt-1.5 inline-flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-black text-[11px] sm:text-[12px] px-4 py-1.5 rounded-full uppercase tracking-wide shadow-md shadow-cyan-500/25 border border-cyan-300/30 font-sans">
            {roleBadge}
          </div>
        </div>
      </div>
    </div>
  );
};


