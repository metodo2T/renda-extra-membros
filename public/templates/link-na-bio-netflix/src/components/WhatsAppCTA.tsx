import React, { useState } from 'react';
import { WhatsAppLogo } from './Logos';
import { MessageSquare, ArrowRight, CheckCircle2, Sparkles, Send, Copy, Check } from 'lucide-react';
import confetti from 'canvas-confetti';

interface WhatsAppCTAProps {
  whatsappNumber: string;
}

export const WhatsAppCTA: React.FC<WhatsAppCTAProps> = ({ whatsappNumber }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedObjective, setSelectedObjective] = useState<string>("Preciso de mais vendas/leads para o meu negócio.");
  const [customNote, setCustomNote] = useState<string>("");
  const [copied, setCopied] = useState(false);

  const cleanNumber = whatsappNumber.replace(/\D/g, '');

  const objectivesList = [
    "Aumentar faturamento do meu E-commerce (Meta + Google Ads)",
    "Gerar leads diários no WhatsApp para meu Negócio Local/Clínica",
    "Agendar uma Consultoria ou Auditoria de Campanhas",
    "Melhorar o ROAS e Custo por Aquisição das minhas campanhas atuais",
    "Treinar minha equipe interna de marketing"
  ];

  const handleOpenWhatsApp = (customMsg?: string) => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 }
    });

    const defaultMsg = customMsg || `Olá! Vim pelo seu Link na Bio. ${selectedObjective} ${customNote ? `\n\nDetalhes do meu projeto: ${customNote}` : ''}`;
    const encodedMsg = encodeURIComponent(defaultMsg);
    const url = `https://wa.me/${cleanNumber}?text=${encodedMsg}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsModalOpen(false);
  };

  const handleCopyNumber = () => {
    navigator.clipboard.writeText(`+${cleanNumber}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-lg mx-auto px-4 my-3">
      {/* Primary High-Impact WhatsApp Button */}
      <div className="relative group">
        {/* Animated Glow outline */}
        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-400 to-green-500 blur-md opacity-80 group-hover:opacity-100 transition duration-300 animate-pulse"></div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="relative w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 text-white font-bold text-base sm:text-lg flex items-center justify-between shadow-2xl transition-all duration-300 transform group-hover:-translate-y-0.5 border border-emerald-400/40"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0 border border-white/30 shadow-inner">
              <WhatsAppLogo className="w-6 h-6 text-white" />
            </div>
            <div className="text-left">
              <div className="flex items-center gap-1.5">
                <span className="font-heading tracking-wide">Falar no WhatsApp Agora</span>
                <Sparkles className="w-4 h-4 text-amber-300 fill-amber-300/30 animate-spin" style={{ animationDuration: '4s' }} />
              </div>
              <p className="text-xs text-emerald-100 font-normal font-sans opacity-95">
                Atendimento rápido & Diagnóstico inicial
              </p>
            </div>
          </div>

          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0 group-hover:translate-x-1 transition-transform">
            <ArrowRight className="w-5 h-5 text-white" />
          </div>
        </button>
      </div>

      {/* Quick message builder modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-md bg-slate-900 border border-slate-700/80 rounded-3xl p-6 shadow-2xl text-left overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                  <WhatsAppLogo className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-heading">Iniciar Conversa no WhatsApp</h3>
                  <p className="text-xs text-slate-400">Selecione seu objetivo principal:</p>
                </div>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition"
              >
                ✕
              </button>
            </div>

            {/* Objective list options */}
            <div className="my-4 space-y-2 max-h-60 overflow-y-auto pr-1">
              {objectivesList.map((obj, index) => {
                const isSelected = selectedObjective === obj;
                return (
                  <button
                    key={index}
                    onClick={() => setSelectedObjective(obj)}
                    className={`w-full text-left p-3 rounded-xl text-xs sm:text-sm font-medium transition-all flex items-start gap-2.5 ${
                      isSelected
                        ? 'bg-emerald-500/15 border border-emerald-500/60 text-emerald-200'
                        : 'bg-slate-800/60 border border-slate-800 text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${isSelected ? 'text-emerald-400' : 'text-slate-600'}`} />
                    <span>{obj}</span>
                  </button>
                );
              })}
            </div>

            {/* Custom note optional */}
            <div className="mb-5">
              <label className="block text-xs text-slate-400 mb-1 font-medium">
                Mensagem adicional ou segmento do seu negócio (Opcional):
              </label>
              <textarea
                value={customNote}
                onChange={(e) => setCustomNote(e.target.value)}
                placeholder="Ex: Tenho uma loja de roupas e quero investir R$ 3k/mês..."
                rows={2}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-slate-200 focus:outline-none focus:border-emerald-500 transition"
              />
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-2">
              <button
                onClick={() => handleOpenWhatsApp()}
                className="w-full py-3.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg transition"
              >
                <Send className="w-4 h-4" />
                <span>Enviar no WhatsApp</span>
              </button>

              <button
                onClick={handleCopyNumber}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium text-xs flex items-center justify-center gap-2 transition"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? "Número Copiado!" : "Copiar Número do WhatsApp"}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
