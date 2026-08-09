import React from 'react';
import { Monitor, Smartphone, ExternalLink, X } from 'lucide-react';
import { LandingModel } from '../data/models';

interface Props {
  model: LandingModel;
  view: 'desktop' | 'mobile';
  onViewChange: (view: 'desktop' | 'mobile') => void;
  onClose: () => void;
}

export function PreviewModal({ model, view, onViewChange, onClose }: Props) {
  return (
    <div className="fixed inset-0 bg-black/95 z-50 flex flex-col backdrop-blur-md">
      
      {/* Top Header Bar */}
      <div className="h-16 flex items-center justify-between px-6 border-b border-gray-800 bg-[#0c0c0c] shrink-0 z-20">
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>
          <h3 className="font-bold text-white text-base truncate">
            Preview: <span className="text-gray-400 font-normal">{model.name}</span>
          </h3>
        </div>
        
        {/* Viewport Switcher */}
        <div className="flex bg-[#181818] rounded-xl p-1 border border-gray-800 mx-4 shadow-inner">
          <button 
            onClick={() => onViewChange('desktop')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition flex items-center gap-2 ${
              view === 'desktop' 
                ? 'bg-cyan-500 text-black shadow' 
                : 'text-gray-400 hover:text-white'
            }`}
            title="Visualização Tela Cheia (Desktop)"
          >
            <Monitor className="w-4 h-4" />
            <span className="hidden sm:inline">Desktop (Tela Cheia)</span>
          </button>
          <button 
            onClick={() => onViewChange('mobile')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition flex items-center gap-2 ${
              view === 'mobile' 
                ? 'bg-cyan-500 text-black shadow' 
                : 'text-gray-400 hover:text-white'
            }`}
            title="Visualização Mobile"
          >
            <Smartphone className="w-4 h-4" />
            <span className="hidden sm:inline">Mobile</span>
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex-1 flex justify-end items-center gap-3">
          {model.htmlPreview && (
            <a 
              href={model.htmlPreview}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:flex items-center gap-1.5 text-xs text-gray-400 hover:text-cyan-400 bg-[#181818] border border-gray-800 hover:border-cyan-500/40 px-3 py-2 rounded-lg transition"
              title="Abrir em Nova Aba"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Nova Aba</span>
            </a>
          )}
          <button 
            onClick={onClose}
            className="flex items-center gap-1 bg-red-500/10 hover:bg-red-500 text-red-400 hover:text-white border border-red-500/20 px-3.5 py-1.5 rounded-lg text-xs font-bold transition"
          >
            <X className="w-4 h-4" />
            <span>Fechar</span>
          </button>
        </div>
      </div>

      {/* Main Preview Area */}
      <div className="flex-1 bg-[#080808] overflow-hidden relative flex items-center justify-center">
        {model.htmlPreview ? (
          view === 'desktop' ? (
            /* Desktop View: 100% Full Width & Height */
            <div className="w-full h-full bg-white relative">
              <iframe 
                src={model.htmlPreview} 
                className="w-full h-full border-none bg-white block"
                title={`Preview ${model.name}`}
              />
            </div>
          ) : (
            /* Mobile View: High-fidelity Smartphone Container */
            <div className="w-[390px] max-w-[92%] h-[844px] max-h-[90vh] bg-black rounded-[3rem] p-3 shadow-[0_0_60px_rgba(0,0,0,0.9),0_0_0_2px_#333] border-4 border-gray-800 flex flex-col relative my-auto animate-in fade-in zoom-in-95 duration-300">
              
              {/* Dynamic Island / Notch */}
              <div className="absolute top-4 inset-x-0 h-6 flex justify-center z-20 pointer-events-none">
                <div className="w-28 h-5 bg-black rounded-full flex items-center justify-end px-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-900 border border-gray-800"></div>
                </div>
              </div>

              {/* Mobile Screen Iframe */}
              <div className="flex-1 w-full h-full rounded-[2.2rem] overflow-hidden bg-white relative">
                <iframe 
                  src={model.htmlPreview} 
                  className="w-full h-full border-none bg-white block"
                  title={`Preview Mobile ${model.name}`}
                />
              </div>

              {/* Home Indicator Bar */}
              <div className="absolute bottom-2 inset-x-0 flex justify-center z-20 pointer-events-none">
                <div className="w-32 h-1 bg-white/40 rounded-full"></div>
              </div>
            </div>
          )
        ) : (
          <div className="flex items-center justify-center p-8">
            <img src={model.image} className="max-h-[85vh] max-w-full object-contain rounded-xl shadow-2xl" alt={model.name} />
          </div>
        )}
      </div>
    </div>
  );
}
