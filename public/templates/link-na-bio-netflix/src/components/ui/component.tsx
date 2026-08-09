import React, { FC, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

export function ParallaxComponent() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const triggerElement = parallaxRef.current?.querySelector('[data-parallax-layers]');

    if (triggerElement) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerElement,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });

      const layers = [
        { layer: "1", yPercent: 50 },
        { layer: "2", yPercent: 35 },
        { layer: "3", yPercent: 20 },
        { layer: "4", yPercent: 5 }
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
    <div className="parallax w-full overflow-hidden" ref={parallaxRef}>
      <section className="parallax__header relative">
        <div className="parallax__visuals relative w-full h-[320px] rounded-[26px] overflow-hidden bg-gradient-to-b from-[#09152a] via-[#0e2246] to-[#0a1120]">
          <div data-parallax-layers className="parallax__layers relative w-full h-full">
            {/* Layer 1: Backdrop Spotlight */}
            <div data-parallax-layer="1" className="absolute top-8 left-1/2 -translate-x-1/2 w-52 h-52 rounded-full bg-cyan-400/25 blur-3xl pointer-events-none"></div>

            {/* Layer 2: Main Image */}
            <div data-parallax-layer="2" className="absolute inset-0 flex items-end justify-center">
              <img
                src="https://i.postimg.cc/MKQH4wrR/Bruno-Ce-sar-jpg-(1).jpg"
                loading="eager"
                alt="Bruno Cesar"
                className="w-full h-full object-cover object-top filter contrast-[1.06] brightness-[1.02]"
              />
            </div>

            {/* Layer 3: Title */}
            <div data-parallax-layer="3" className="parallax__layer-title absolute inset-x-0 bottom-4 z-20 text-center">
              <h2 className="parallax__title font-condensed text-3xl font-black text-white tracking-widest uppercase drop-shadow-md">
                BRUNO CESAR
              </h2>
            </div>

            {/* Layer 4: Overlay Badge */}
            <div data-parallax-layer="4" className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none z-30"></div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Types for CardsParallax
export interface iCardItem {
  title: string;
  description: string;
  tag: string;
  src: string;
  link: string;
  color: string;
  textColor: string;
}

export interface iCardProps extends Omit<iCardItem, "src" | "link" | "tag"> {
  i: number;
  src: string;
}

export const Card: FC<iCardProps> = ({
  title,
  description,
  color,
  textColor,
  i,
  src,
}) => {
  return (
    <div className="flex items-center justify-center sticky top-12 z-10 w-full mb-6">
      <div
        className="relative flex flex-col h-[220px] w-full max-w-[380px] py-8 px-6 sm:px-8
        items-center justify-center mx-auto rounded-2xl shadow-2xl border border-cyan-500/30 overflow-hidden"
        style={{ backgroundColor: color }}
      >
        <span className="font-bold relative text-3xl sm:text-4xl">
          <span
            className="relative z-10 font-condensed font-black tracking-wider uppercase"
            style={{ color: textColor }}
          >
            {title}
          </span>
        </span>
        <div
          className="font-sans text-sm sm:text-base font-medium text-center mb-0 z-20 mt-2 tracking-wide"
          style={{ lineHeight: 1.4, color: textColor }}
        >
          {description}
        </div>
        {src && (
          <div className="absolute inset-0 z-0 opacity-20">
            <img
              className="w-full h-full object-cover"
              src={src}
              alt="Background"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export interface iCardSlideProps {
  items: iCardItem[];
}

export const CardsParallax: FC<iCardSlideProps> = ({ items }) => {
  return (
    <div className="w-full max-w-[380px] mx-auto">
      {items.map((project, i) => {
        return <Card key={`p_${i}`} {...project} i={i} />;
      })}
    </div>
  );
};

