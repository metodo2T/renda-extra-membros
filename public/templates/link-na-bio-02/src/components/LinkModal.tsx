import React from 'react';
import { X, ExternalLink, Copy, Check } from 'lucide-react';
import { BioLink } from '../types';

interface LinkModalProps {
  link: BioLink | null;
  onClose: () => void;
}

export const LinkModal: React.FC<LinkModalProps> = ({ link, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  if (!link) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(link.url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleOpen = () => {
    window.open(link.url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-purple-950/40 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-sm bg-white border border-purple-200 rounded-3xl p-6 text-slate-900 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-purple-400 hover:text-purple-950 p-1 rounded-full hover:bg-purple-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center pt-2">
          <div className="w-12 h-12 rounded-full bg-purple-100 border border-purple-200 text-purple-700 flex items-center justify-center mx-auto mb-4">
            <ExternalLink className="w-6 h-6" />
          </div>

          <h3 className="text-xl font-bold text-purple-950 mb-1">{link.title}</h3>
          <p className="text-purple-800/80 text-sm mb-6">{link.subtitle}</p>

          <div className="bg-purple-50/80 p-3 rounded-xl border border-purple-200/80 text-xs text-purple-900 font-mono truncate mb-6 text-left">
            {link.url}
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={handleCopy}
              className="w-full py-2.5 px-4 rounded-xl border border-purple-200 bg-purple-50 hover:bg-purple-100 text-purple-900 text-sm font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-purple-700" />}
              <span>{copied ? 'Copiado!' : 'Copiar Link'}</span>
            </button>

            <button
              onClick={handleOpen}
              className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 text-white text-sm font-bold flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer"
            >
              <span>Acessar</span>
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
