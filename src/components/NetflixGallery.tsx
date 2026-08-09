import React, { useRef, useEffect, useState } from 'react';
import { LandingModel } from '../data/models';
import { Play, Info } from 'lucide-react';

// Mini preview component para o Netflix Gallery
function NetflixIframePreview({ src, isMobile }: { src: string; isMobile: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.2);
  const BASE_WIDTH = isMobile ? 480 : 1280;
  const IFRAME_HEIGHT = isMobile ? 3200 : 5000;
  const animDuration = isMobile ? '45s' : '60s';

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new ResizeObserver(entries => {
      for (const entry of entries) {
        const containerW = entry.contentRect.width;
        if (containerW > 0) setScale(containerW / BASE_WIDTH);
      }
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [BASE_WIDTH]);

  const scrollAmount = Math.round(IFRAME_HEIGHT * scale * 0.70);
  const animName = `nfPreview_${isMobile ? 'mob' : 'desk'}_${Math.round(scale * 1000)}`;

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none bg-zinc-900">
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          animation: `${animName} ${animDuration} ease-in-out infinite`,
        }}
      >
        <iframe
          src={src}
          tabIndex={-1}
          className="border-none"
          style={{
            display: 'block',
            width: `${BASE_WIDTH}px`,
            height: `${IFRAME_HEIGHT}px`,
            transform: `scale(${scale})`,
            transformOrigin: 'top left',
          }}
        />
      </div>
      <style>{`
        @keyframes ${animName} {
          0%   { top: 0px; }
          45%  { top: -${scrollAmount}px; }
          55%  { top: -${scrollAmount}px; }
          100% { top: 0px; }
        }
      `}</style>
    </div>
  );
}

interface Props {
  models: LandingModel[];
  onSelect: (model: LandingModel) => void;
}

export function NetflixGallery({ models, onSelect }: Props) {
  // Group models by category
  const categories = models.reduce((acc, model) => {
    if (!acc[model.category]) {
      acc[model.category] = [];
    }
    acc[model.category].push(model);
    return acc;
  }, {} as Record<string, LandingModel[]>);

  // Use the first model (Protocolo Reels) as the Hero
  const heroModel = models[0];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      
      {/* Hero Banner */}
      <div className="relative h-[70vh] w-full mb-8">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')` 
          }}
        >
          {/* Gradient Overlay to blend with black background */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        </div>
        
        <div className="absolute bottom-[20%] left-[5%] max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tight drop-shadow-xl text-white">
            A jornada no <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">digital</span>
          </h1>
          <p className="text-xl md:text-2xl font-medium mb-6 text-gray-200 drop-shadow-md">
            SUA JORNADA COMEÇA AQUI
          </p>
          <div className="flex gap-4">
            <button 
              onClick={() => onSelect(heroModel)}
              className="flex items-center gap-2 bg-white text-black px-8 py-3 rounded-md font-bold hover:bg-gray-200 transition"
            >
              <Play className="w-6 h-6 fill-black" />
              Começar Agora
            </button>
            <button className="flex items-center gap-2 bg-gray-500/50 text-white px-8 py-3 rounded-md font-bold hover:bg-gray-500/70 transition backdrop-blur-sm">
              <Info className="w-6 h-6" />
              Mais Informações
            </button>
          </div>
        </div>
      </div>

      {/* Category Rows */}
      <div className="pb-20 relative z-10 -mt-10">
        {Object.entries(categories).map(([category, categoryModels]) => (
          <div key={category} className="mb-12">
            <h2 className="text-2xl font-bold mb-4 px-[5%] drop-shadow-md">
              {category}
            </h2>
            
            {/* Horizontal Scroll Container */}
            <div className="flex gap-4 px-[5%] overflow-x-auto pb-6 scrollbar-hide snap-x" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {categoryModels.map((model) => (
                <div 
                  key={model.id}
                  onClick={() => onSelect(model)}
                  className="relative flex-none w-[200px] md:w-[250px] aspect-[2/3] rounded-md overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:z-20 snap-start shadow-lg hover:shadow-cyan-500/20 group"
                >
                  {model.htmlPreview ? (
                    <NetflixIframePreview
                      src={model.htmlPreview}
                      isMobile={model.category === 'Link na Bio'}
                    />
                  ) : (
                    <img 
                      src={model.image} 
                      alt={model.name}
                      className="w-full h-full object-cover object-top"
                    />
                  )}
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <h3 className="text-base sm:text-lg font-bold text-white mb-1 truncate" title={model.name}>{model.name}</h3>
                    <p className="text-xs sm:text-sm text-gray-300 line-clamp-2">{model.description}</p>
                    <div className="mt-3 flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                        <Play className="w-4 h-4 fill-black text-black ml-1" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider">Gerar Prompt</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
