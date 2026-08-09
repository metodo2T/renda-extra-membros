import React, { useState, useRef, useEffect } from 'react';
import { LandingModel, models } from '../data/models';
import { Eye, Download, FileText, Info } from 'lucide-react';
import { saveAs } from 'file-saver';
import { PreviewModal } from './PreviewModal';
import { ModelInfoModal } from './ModelInfoModal';
import { PromptResultModal } from './PromptResultModal';

// Componente de miniatura de página com escala dinâmica
function IframePreview({ src, isMobile }: { src: string; isMobile: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.25);
  const BASE_WIDTH = isMobile ? 480 : 1280;
  const IFRAME_HEIGHT = isMobile ? 3200 : 5000;
  const animDuration = isMobile ? '45s' : '60s';

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new ResizeObserver(entries => {
      for (const entry of entries) {
        const containerW = entry.contentRect.width;
        if (containerW > 0) {
          setScale(containerW / BASE_WIDTH);
        }
      }
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [BASE_WIDTH]);

  // Quanto rolar: 70% da altura escalada em pixels
  const scrollAmount = Math.round(IFRAME_HEIGHT * scale * 0.70);
  const animName = `previewScroll_${isMobile ? 'mob' : 'desk'}_${Math.round(scale * 1000)}`;

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none bg-white"
    >
      {/* Wrapper que faz o scroll vertical */}
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
          loading="lazy"
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
  category?: 'Páginas Completas' | 'Link na Bio' | 'Todos';
  title?: string;
  subtitle?: string;
}

export function ModelsTab({ category = 'Todos', title, subtitle }: Props) {
  const [previewModel, setPreviewModel] = useState<LandingModel | null>(null);
  const [previewView, setPreviewView] = useState<'desktop' | 'mobile'>('desktop');
  const [infoModel, setInfoModel] = useState<LandingModel | null>(null);
  const [finalPrompt, setFinalPrompt] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  // Filter models based on the selected section/category
  const filteredModels = models.filter(m => {
    if (category === 'Páginas Completas') {
      return m.category !== 'Link na Bio';
    }
    if (category === 'Link na Bio') {
      return m.category === 'Link na Bio';
    }
    return true;
  });

  const displayTitle = title || (category === 'Link na Bio' ? 'Link na Bio com IA' : 'Páginas com IA');
  const displaySubtitle = subtitle || (
    category === 'Link na Bio' 
      ? 'Modelos mobile-first interativos de alta conversão para links de bio.'
      : 'Modelos de alta conversão prontos para replicar e personalizar com IA.'
  );

  const handleDownload = (model: LandingModel) => {
    if (model.downloadUrl) {
      const link = document.createElement('a');
      link.href = model.downloadUrl;
      link.download = `${model.id}-template.html`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      return;
    }
    const htmlTemplate = model.generatePrompt ? model.generatePrompt({}) : '';
    const blob = new Blob([htmlTemplate], { type: 'text/html;charset=utf-8' });
    saveAs(blob, `${model.id}-template.html`);
  };

  const handleCopyPrompt = () => {
    if (finalPrompt) {
      navigator.clipboard.writeText(finalPrompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center mb-12 text-center">
        <span className="px-3 py-1 bg-gray-900 border border-gray-800 rounded-full text-[10px] uppercase tracking-widest text-cyan-400 font-semibold mb-6">
          {category === 'Link na Bio' ? 'Mobile & Bio' : 'Landing Pages'}
        </span>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-white">{displayTitle}</h1>
        <p className="text-gray-400 text-sm max-w-xl">
          {displaySubtitle}
        </p>
      </div>

      {/* Grid de Modelos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredModels.map(model => (
          <div key={model.id} className="bg-[#121212] border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-600 transition group flex flex-col shadow-lg">
            <div className="relative aspect-[4/3] bg-gray-900 overflow-hidden">
              {model.htmlPreview ? (
                <IframePreview
                  src={model.htmlPreview}
                  isMobile={model.category === 'Link na Bio'}
                />
              ) : (
                <img 
                  src={model.image} 
                  alt={model.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition duration-500"
                  loading="lazy"
                />
              )}
              {model.indicatedFor && (
                <button 
                  onClick={() => setInfoModel(model)}
                  className="absolute top-3 right-3 bg-black/60 p-2 rounded-full hover:bg-cyan-500 text-gray-300 hover:text-white transition"
                  title="Para quem é indicado?"
                >
                  <Info className="w-4 h-4" />
                </button>
              )}
            </div>
            
            <div className="p-4 flex flex-col flex-1 justify-between min-w-0">
              <div className="min-w-0">
                <h3 
                  className="font-bold text-white text-sm sm:text-base md:text-lg leading-tight tracking-tight truncate"
                  title={model.name}
                >
                  {model.name}
                </h3>
                <p className="text-xs text-gray-500 mt-1 truncate">{model.category}</p>
              </div>
              
              <div className="flex gap-1.5 mt-4 pt-4 border-t border-gray-800/50 flex-wrap">
                <button 
                  onClick={() => setPreviewModel(model)}
                  className="flex-1 bg-[#1a1a1a] hover:bg-gray-800 text-gray-300 text-[11px] sm:text-xs font-bold uppercase tracking-wider py-2.5 px-2 rounded-lg transition border border-gray-800 flex items-center justify-center gap-1.5 min-w-[70px]"
                >
                  <Eye className="w-3.5 h-3.5" /> <span className="truncate">Preview</span>
                </button>
                <button 
                  onClick={() => handleDownload(model)}
                  className="flex-1 bg-[#1a1a1a] hover:bg-gray-800 text-gray-300 text-[11px] sm:text-xs font-bold uppercase tracking-wider py-2.5 px-2 rounded-lg transition border border-gray-800 flex items-center justify-center gap-1.5 min-w-[70px]"
                >
                  <Download className="w-3.5 h-3.5" /> <span className="truncate">Baixar</span>
                </button>
                {model.generatePrompt && (
                  <button 
                    onClick={() => setFinalPrompt(model.generatePrompt ? model.generatePrompt({}) : null)}
                    className="flex-1 bg-cyan-600 hover:bg-cyan-500 text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider py-2.5 px-2 rounded-lg transition border border-transparent flex items-center justify-center gap-1.5 shadow-[0_0_15px_rgba(8,145,178,0.4)] min-w-[70px]"
                  >
                    <FileText className="w-3.5 h-3.5" /> <span className="truncate">Prompt</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modais */}
      {previewModel && (
        <PreviewModal 
          model={previewModel} 
          view={previewView} 
          onViewChange={setPreviewView} 
          onClose={() => setPreviewModel(null)} 
        />
      )}

      {infoModel && (
        <ModelInfoModal 
          model={infoModel} 
          onClose={() => setInfoModel(null)} 
        />
      )}

      {finalPrompt && (
        <PromptResultModal 
          prompt={finalPrompt} 
          copied={copied} 
          onCopy={handleCopyPrompt} 
          onClose={() => setFinalPrompt(null)} 
        />
      )}
    </>
  );
}
