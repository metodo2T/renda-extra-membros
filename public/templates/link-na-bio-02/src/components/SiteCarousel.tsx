import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CarouselSlide } from '../types';

interface SiteCarouselProps {
  slides: CarouselSlide[];
  onSlideClick?: (slide: CarouselSlide) => void;
}

export const SiteCarousel: React.FC<SiteCarouselProps> = ({ slides, onSlideClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const currentSlide = slides[currentIndex] || slides[0];

  return (
    <div
      onClick={() => onSlideClick?.(currentSlide)}
      className="group relative bg-white/90 hover:bg-white border border-purple-200 hover:border-purple-400/80 rounded-3xl p-6 sm:p-8 transition-all duration-300 shadow-xl shadow-purple-950/5 overflow-hidden cursor-pointer my-6"
    >
      {/* Background Code Snippet Watermark Texture */}
      <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden select-none font-mono text-[10px] text-purple-700 p-4 leading-snug break-all space-y-1">
        <div>&lt;/.p&gt;</div>
        <div>&lt;p&gt;&lt;a class=&quot;btn btn-lg btn-primary&quot; href=&quot;#&quot;&gt;Ver Projeto&lt;/a&gt;&lt;/p&gt;</div>
        <div>&lt;/div&gt;</div>
        <div>&lt;div class=&quot;hero-banner-purple&quot;&gt;</div>
        <div>&nbsp;&nbsp;&lt;span class=&quot;glow-effect&quot;&gt;DESIGN DIGITIAL&lt;/span&gt;</div>
        <div>&lt;/div&gt;</div>
        <div>&lt;!-- Carousel Section --&gt;</div>
        <div>&lt;div class=&quot;featured-content&quot;&gt;</div>
        <div>&nbsp;&nbsp;&lt;h2&gt;FEATURED CONTENT&lt;/h2&gt;</div>
        <div>&lt;/div&gt;</div>
      </div>

      {/* Radial purple glow background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-purple-400/10 rounded-full blur-3xl pointer-events-none" />

      {/* Left Navigation Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/80 hover:bg-purple-600 hover:text-white text-purple-950 flex items-center justify-center backdrop-blur-sm border border-purple-200 shadow-md hover:scale-110 transition-all cursor-pointer"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
      </button>

      {/* Right Navigation Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/80 hover:bg-purple-600 hover:text-white text-purple-950 flex items-center justify-center backdrop-blur-sm border border-purple-200 shadow-md hover:scale-110 transition-all cursor-pointer"
        aria-label="Próximo slide"
      >
        <ChevronRight className="w-6 h-6 stroke-[2.5]" />
      </button>

      {/* Slide Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        {/* Floating Silver Laptop Display Mockup */}
        <div className="relative w-full max-w-[280px] sm:max-w-[340px] mb-6 group-hover:scale-[1.03] transition-transform duration-500">
          {/* Laptop Screen Frame */}
          <div className="bg-[#121318] rounded-t-xl p-1.5 border border-gray-700 shadow-2xl relative overflow-hidden aspect-[16/10]">
            {/* Camera dot */}
            <div className="absolute top-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gray-600 z-30" />
            
            {/* Screen Inner Display */}
            <div className="w-full h-full bg-[#0d0014] rounded-sm overflow-hidden relative border border-purple-500/20">
              <img
                src={currentSlide.laptopImage}
                alt={currentSlide.titleBold}
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
              
              {/* Web Header Banner Overlay simulating screenshot mockup */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0014] via-[#0d0014]/40 to-transparent p-3 flex flex-col justify-end text-left">
                <div className="text-[9px] font-semibold text-purple-300 uppercase tracking-widest">A Nova era do Design</div>
                <div className="text-xs font-bold text-white leading-tight">Sites exclusivos e de alta conversão</div>
              </div>
            </div>
          </div>

          {/* Laptop Base / Keyboard Hinge */}
          <div className="bg-gradient-to-b from-gray-300 via-gray-400 to-gray-500 h-2.5 rounded-b-lg shadow-xl relative border-t border-gray-200">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-gray-600 rounded-b" />
          </div>
        </div>

        {/* Slide Title */}
        <h3 className="text-purple-950 text-2xl sm:text-3xl tracking-wide mb-1">
          <span className="font-light text-purple-900/80">{currentSlide.titlePrefix}</span>{' '}
          <span className="font-extrabold text-purple-950">{currentSlide.titleBold}</span>
        </h3>

        {/* Subtitle */}
        <p className="text-purple-800/80 text-xs sm:text-sm font-medium max-w-xs sm:max-w-sm leading-relaxed">
          {currentSlide.subtitle}
        </p>

        {/* Dots indicators */}
        <div className="flex items-center justify-center space-x-2 mt-4">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(idx);
              }}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                idx === currentIndex ? 'w-6 bg-purple-600' : 'w-1.5 bg-purple-200 hover:bg-purple-400'
              }`}
              aria-label={`Ir para slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
