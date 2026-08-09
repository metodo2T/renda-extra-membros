import React from 'react';
import { CheckCircle2, FileText } from 'lucide-react';

interface Props {
  prompt: string;
  copied: boolean;
  onCopy: () => void;
  onClose: () => void;
}

export function PromptResultModal({ prompt, copied, onCopy, onClose }: Props) {
  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
      <div className="bg-[#121212] border border-gray-800 rounded-2xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl">
        <div className="p-6 border-b border-gray-800 flex justify-between items-center">
          <div>
            <h3 className="text-xl font-bold text-white">Seu Prompt está Pronto!</h3>
            <p className="text-sm text-gray-400 mt-1">Copie o texto abaixo e cole no ChatGPT, Claude ou Google AI Studio.</p>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white text-sm font-bold"
          >
            FECHAR
          </button>
        </div>
        
        <div className="p-6 overflow-y-auto flex-1 custom-scrollbar">
          <pre className="bg-[#0a0a0a] border border-gray-800 p-6 rounded-xl text-gray-300 text-sm whitespace-pre-wrap font-mono leading-relaxed">
            {prompt}
          </pre>
        </div>
        
        <div className="p-6 border-t border-gray-800 bg-[#0f0f0f] flex justify-end">
          <button
            onClick={onCopy}
            className={`flex items-center gap-2 px-8 py-3 rounded-lg font-bold transition-all ${
              copied ? 'bg-green-600 text-white' : 'bg-white text-black hover:bg-gray-200'
            }`}
          >
            {copied ? <CheckCircle2 className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
            {copied ? 'Copiado!' : 'Copiar Prompt'}
          </button>
        </div>
      </div>
    </div>
  );
}
