import React, { useState } from 'react';
import { ArrowLeft, Copy, Check, ExternalLink } from 'lucide-react';

interface Props {
  prompt: string;
  onBack: () => void;
}

export function PromptResult({ prompt, onBack }: Props) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6">
      <button
        onClick={onBack}
        className="flex items-center text-emerald-500 hover:text-emerald-400 mb-8 transition"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Voltar para o Formulário
      </button>

      <div className="bg-gray-800 rounded-xl shadow-xl overflow-hidden">
        <div className="bg-emerald-900/30 px-8 py-6 border-b border-emerald-500/20">
          <h2 className="text-2xl font-bold text-emerald-400 flex items-center gap-3">
            🎉 Seu Prompt está pronto!
          </h2>
          <p className="text-gray-300 mt-2">
            Siga os passos abaixo para gerar a sua página de vendas completa.
          </p>
        </div>

        <div className="p-8">
          <div className="flex flex-col md:flex-row gap-6 mb-8">
            <div className="flex-1 bg-gray-900 rounded-lg p-6 border border-gray-700">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center font-bold text-white">1</div>
                <h3 className="text-lg font-semibold text-white">Copie o código abaixo</h3>
              </div>
              <button
                onClick={handleCopy}
                className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-medium transition ${
                  copied 
                    ? 'bg-green-600 hover:bg-green-700 text-white' 
                    : 'bg-emerald-600 hover:bg-emerald-700 text-white'
                }`}
              >
                {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                {copied ? 'Prompt Copiado!' : 'Copiar Prompt Completo'}
              </button>
            </div>
            
            <div className="flex-1 bg-gray-900 rounded-lg p-6 border border-gray-700">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center font-bold text-white">2</div>
                <h3 className="text-lg font-semibold text-white">Cole no AI Studio</h3>
              </div>
              <a
                href="https://aistudio.google.com/app/prompts/new_chat"
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition"
              >
                <ExternalLink className="w-5 h-5" />
                Abrir Google AI Studio
              </a>
              <p className="text-xs text-gray-500 mt-3 text-center">Cole o texto lá, use o modelo Gemini 1.5 Pro e aperte Enter!</p>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Prévia do Prompt:</label>
            <div className="relative">
              <textarea
                readOnly
                className="w-full h-96 bg-gray-900 border border-gray-700 rounded-lg p-4 text-gray-300 font-mono text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500"
                value={prompt}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
