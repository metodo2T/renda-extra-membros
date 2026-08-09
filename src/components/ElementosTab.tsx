import React, { useState } from 'react';
import { Eye, FileText } from 'lucide-react';
import { ElementPreviewModal } from './ElementPreviewModal';
import { PromptResultModal } from './PromptResultModal';

export function ElementosTab() {
  const [showPreview, setShowPreview] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);
  const [copied, setCopied] = useState(false);

  const elementPrompt = `Aqui está o prompt para gerar este elemento (ou integre o código abaixo):

Para recriar o Efeito de Scroll "Stroke Follows Scroll":
1. Certifique-se de ter o Framer Motion instalado (npm install framer-motion)
2. Utilize os hooks useScroll e useTransform para capturar a porcentagem do scroll
3. Associe o valor de scroll ao atributo strokeDashoffset de um SVG path animado
4. Veja a implementação base em React:

\`\`\`tsx
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// No seu componente:
const { scrollYProgress } = useScroll({ target: ref });
const pathLength = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

<svg>
  <motion.path
    d="M..."
    style={{
      pathLength,
      strokeDashoffset: useTransform(pathLength, (value) => 1 - value),
    }}
  />
</svg>
\`\`\`
`;

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(elementPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <div className="flex flex-col items-center mb-12">
        <span className="px-3 py-1 bg-gray-900 border border-gray-800 rounded-full text-[10px] uppercase tracking-widest text-gray-400 mb-6">
          Elementos
        </span>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Componentes e Efeitos</h1>
        <p className="text-gray-400 text-sm">
          Visualize efeitos interativos e copie os prompts para implementá-los nas suas páginas.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {/* Card do Efeito de Scroll */}
        <div className="bg-[#121212] border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-600 transition group flex flex-col">
          <div className="relative aspect-[4/3] bg-[#FAFDEE] overflow-hidden flex items-center justify-center p-4">
             <div className="text-center">
               <h1 className="text-[#1F3A4B] font-bold text-2xl mb-2">Stroke Follows Scroll</h1>
               <div className="w-16 h-1 bg-[#C2F84F] mx-auto rounded-full"></div>
             </div>
          </div>
          
          <div className="p-4 flex flex-col flex-1 justify-between">
            <div>
              <h3 className="font-bold text-white text-lg">Scroll SVG Animation</h3>
              <p className="text-xs text-gray-500 mt-1">Animação Interativa</p>
            </div>
            
            <div className="flex gap-1.5 mt-4 pt-4 border-t border-gray-800/50 flex-wrap">
              <button 
                onClick={() => setShowPreview(true)}
                className="flex-1 bg-[#1a1a1a] hover:bg-gray-800 text-gray-300 text-[11px] sm:text-xs font-bold uppercase tracking-wider py-2.5 px-2 rounded-lg transition border border-gray-800 flex items-center justify-center gap-1.5 min-w-[70px]"
              >
                <Eye className="w-3.5 h-3.5" /> <span className="truncate">Visualizar</span>
              </button>
              <button 
                onClick={() => setShowPrompt(true)}
                className="flex-1 bg-cyan-600 hover:bg-cyan-500 text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider py-2.5 px-2 rounded-lg transition border border-transparent flex items-center justify-center gap-1.5 shadow-[0_0_15px_rgba(8,145,178,0.4)] min-w-[70px]"
              >
                <FileText className="w-3.5 h-3.5" /> <span className="truncate">Prompt</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {showPreview && (
        <ElementPreviewModal onClose={() => setShowPreview(false)} />
      )}

      {showPrompt && (
        <PromptResultModal 
          prompt={elementPrompt} 
          copied={copied} 
          onCopy={handleCopyPrompt} 
          onClose={() => setShowPrompt(false)} 
        />
      )}
    </>
  );
}
