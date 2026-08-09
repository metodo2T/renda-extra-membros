import React from 'react';
import { LandingModel } from '../data/models';

interface Props {
  model: LandingModel;
  onClose: () => void;
}

export function ModelInfoModal({ model, onClose }: Props) {
  if (!model.indicatedFor) return null;

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
      <div className="bg-[#121212] border border-gray-800 rounded-2xl w-full max-w-2xl max-h-[90vh] flex flex-col shadow-2xl">
        <div className="p-6 border-b border-gray-800 flex justify-between items-center">
          <div>
            <h3 className="text-xl font-bold text-white">Sobre: {model.name}</h3>
            <p className="text-sm text-gray-400 mt-1">Para quem é indicado e principais objetivos.</p>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white text-sm font-bold"
          >
            FECHAR
          </button>
        </div>
        
        <div className="p-6 overflow-y-auto flex-1 custom-scrollbar">
          <div className="text-gray-300 text-sm whitespace-pre-wrap font-sans leading-relaxed">
            {model.indicatedFor}
          </div>
        </div>
      </div>
    </div>
  );
}
