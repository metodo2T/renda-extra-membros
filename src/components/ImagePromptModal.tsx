import React, { useState } from 'react';
import { ImagePrompt } from '../data/imagePrompts';
import { X, Copy, Check } from 'lucide-react';

interface Props {
  promptData: ImagePrompt;
  onClose: () => void;
  isAdmin?: boolean;
  onDelete?: () => void;
  onEdit?: () => void;
}

export function ImagePromptModal({ promptData, onClose, isAdmin, onDelete, onEdit }: Props) {
  const [copied, setCopied] = useState(false);

  const fullPrompt = `${promptData.imageUrl} ${promptData.prompt}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(fullPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div 
        className="absolute inset-0" 
        onClick={onClose}
      />
      <div className="relative bg-[#0f0f0f] border border-gray-800 rounded-3xl w-full max-w-5xl shadow-2xl flex flex-col md:flex-row max-h-[90vh] overflow-y-auto md:overflow-hidden">
        
        {/* Close button for mobile (floating) */}
        <button 
          onClick={onClose}
          className="md:hidden absolute top-4 right-4 z-10 bg-black/50 p-2 rounded-full text-white border border-gray-700"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Imagem (Left side) */}
        <div className="w-full md:w-1/2 bg-black flex items-center justify-center relative min-h-[300px] md:h-[90vh]">
          <img 
            src={promptData.imageUrl} 
            alt={promptData.title}
            className="w-full h-full object-contain p-4"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
          <div className="absolute bottom-4 left-4">
            <span className="px-3 py-1 bg-black/50 backdrop-blur-md border border-white/10 rounded-full text-[10px] uppercase tracking-widest text-white shadow-lg">
              {promptData.category}
            </span>
          </div>
        </div>

        {/* Conteúdo do Prompt (Right side) */}
        <div className="w-full md:w-1/2 flex flex-col bg-[#0f0f0f] md:h-[90vh] min-h-0">
          {/* Header */}
          <div className="p-6 border-b border-gray-800 flex justify-between items-start shrink-0">
            <div>
              <h2 className="text-2xl font-bold text-white mb-1">{promptData.title}</h2>
              <p className="text-gray-400 text-sm">Copie o prompt abaixo (já inclui o link da imagem como referência base).</p>
            </div>
            <div className="flex items-center gap-2">
              {isAdmin && (
                <>
                  <button onClick={onEdit} className="hidden md:flex text-gray-500 hover:text-cyan-400 transition" title="Editar">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                  </button>
                  <button onClick={onDelete} className="hidden md:flex text-gray-500 hover:text-red-400 transition" title="Excluir">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                  </button>
                </>
              )}
              <button 
                onClick={onClose}
                className="hidden md:flex text-gray-500 hover:text-white transition ml-4"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Prompt Box */}
          <div className="flex-1 p-6 flex flex-col min-h-0">
            <div className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-5 flex flex-col flex-1 min-h-0 h-full">
              
              {/* Scrollable Text Area */}
              <div className="flex-1 overflow-y-auto custom-scrollbar pr-2 mb-4">
                <p className="font-mono text-sm leading-relaxed text-gray-300 whitespace-pre-wrap select-all break-words">
                  {fullPrompt}
                </p>
              </div>
              
              {/* Copy Button Bottom (Fixed inside the box) */}
              <div className="shrink-0 pt-2 border-t border-gray-800/50">
                <button
                  onClick={handleCopy}
                  className={`w-full py-4 rounded-xl font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                    copied 
                      ? 'bg-green-600/20 text-green-500 border border-green-600/50'
                      : 'bg-cyan-600 hover:bg-cyan-500 text-white shadow-[0_0_20px_rgba(8,145,178,0.3)]'
                  }`}
                >
                  {copied ? (
                    <>
                      <Check className="w-5 h-5" /> Copiado!
                    </>
                  ) : (
                    <>
                      <Copy className="w-5 h-5" /> Copiar Prompt Completo
                    </>
                  )}
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
