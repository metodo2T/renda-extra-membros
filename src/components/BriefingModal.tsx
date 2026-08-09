import React from 'react';
import { LandingModel } from '../data/models';
import { BriefingForm } from './BriefingForm';

interface Props {
  model: LandingModel;
  onClose: () => void;
  onSubmit: (answers: Record<string, string>) => void;
}

export function BriefingModal({ model, onClose, onSubmit }: Props) {
  return (
    <div className="fixed inset-0 bg-black/90 z-50 overflow-y-auto">
      <div className="min-h-screen py-12 px-4 flex flex-col items-center">
        <div className="w-full max-w-3xl">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-white">Personalize o Prompt: {model.name}</h3>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-white text-sm font-bold"
            >
              FECHAR
            </button>
          </div>
          <BriefingForm 
            model={model} 
            onSubmit={onSubmit}
          />
        </div>
      </div>
    </div>
  );
}
