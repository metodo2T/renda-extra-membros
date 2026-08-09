import React, { useState } from 'react';
import { X, Copy, Check, Share2, QrCode } from 'lucide-react';

interface ShareModalProps {
  onClose: () => void;
}

export const ShareModal: React.FC<ShareModalProps> = ({ onClose }) => {
  const [copied, setCopied] = useState(false);
  const currentUrl = window.location.href;

  const handleCopy = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Gestor de Tráfego Pago - Link na Bio',
          text: 'Conheça meus serviços de Gestão de Meta Ads & Google Ads:',
          url: currentUrl,
        });
      } catch (err) {
        // fallback
      }
    } else {
      handleCopy();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-sm bg-slate-900 border border-slate-700/80 rounded-3xl p-6 shadow-2xl text-center">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="w-12 h-12 rounded-2xl bg-blue-600/20 border border-blue-500/40 text-blue-400 flex items-center justify-center mx-auto mb-3">
          <Share2 className="w-6 h-6" />
        </div>

        <h3 className="text-lg font-bold text-white font-heading">Compartilhar Link na Bio</h3>
        <p className="text-xs text-slate-400 mt-1 mb-4">
          Copie o link abaixo para colar na bio do seu Instagram, TikTok ou enviar para clientes:
        </p>

        {/* Link Input + Copy */}
        <div className="flex items-center gap-2 p-2 rounded-2xl bg-slate-950 border border-slate-800 mb-4">
          <input
            type="text"
            readOnly
            value={currentUrl}
            className="w-full bg-transparent text-xs text-slate-300 px-2 focus:outline-none font-mono truncate"
          />
          <button
            onClick={handleCopy}
            className="px-3 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs flex items-center gap-1.5 shrink-0 transition"
          >
            {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? "Copiado!" : "Copiar"}</span>
          </button>
        </div>

        {/* QR Code Quick Mock Visual */}
        <div className="p-4 rounded-2xl bg-white/95 max-w-[160px] mx-auto shadow-lg mb-4">
          <img
            src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(
              currentUrl
            )}`}
            alt="QR Code do Link na Bio"
            className="w-full h-auto"
          />
        </div>

        <button
          onClick={handleNativeShare}
          className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs flex items-center justify-center gap-2 transition"
        >
          <QrCode className="w-4 h-4" />
          <span>Enviar via Compartilhamento do Dispositivo</span>
        </button>
      </div>
    </div>
  );
};
