import React from 'react';
import { BioCard } from '../types';
import { X, ArrowRight, MessageCircle, CheckCircle2 } from 'lucide-react';

interface CardDetailModalProps {
  card: BioCard | null;
  onClose: () => void;
  whatsappNumber?: string;
  professionalName?: string;
}

export const CardDetailModal: React.FC<CardDetailModalProps> = ({
  card,
  onClose,
  whatsappNumber = '5511999998888',
  professionalName = 'Fernanda Marcolin'
}) => {
  if (!card) return null;

  const whatsappMessage = encodeURIComponent(
    `Olá ${professionalName}! Gostaria de agendar / saber mais detalhes sobre o serviço *${card.title}*.`
  );

  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${whatsappMessage}`;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 animate-fade-in">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal / Bottom Sheet */}
      <div className="relative w-full max-w-[420px] bg-white rounded-t-[20px] sm:rounded-[20px] shadow-2xl overflow-hidden z-10 flex flex-col font-sans-clean border border-[#D8D4D1] max-h-[85vh]">
        {/* Top Image Header */}
        <div className="relative w-full h-[160px] bg-[#CECECF] overflow-hidden flex items-end justify-center">
          <img
            src={card.notebookScreenImage || card.image || card.ebookImage || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600"}
            alt={card.title}
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 p-1.5 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors backdrop-blur-md"
            aria-label="Fechar"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Title on Image */}
          <div className="absolute bottom-4 left-5 right-5 text-white">
            <span className="text-[10px] uppercase tracking-widest text-white/80 font-medium">
              Serviço Exclusivo
            </span>
            <h2 className="font-serif-editorial italic text-3xl font-semibold leading-tight">
              {card.title}
            </h2>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-4 overflow-y-auto">
          <p className="text-xs text-[#574E49] leading-relaxed">
            {card.description}
          </p>

          <div className="space-y-2 pt-2 border-t border-[#E8E5E2]">
            <h4 className="text-[11px] font-semibold text-[#96877E] uppercase tracking-wider">
              O que você receberá:
            </h4>
            <ul className="space-y-2 text-xs text-[#78716D]">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#96877E] flex-shrink-0 mt-0.5" />
                <span>Atendimento personalizado e metodologia exclusiva</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#96877E] flex-shrink-0 mt-0.5" />
                <span>Análise profunda do seu perfil e alinhamento de expectativas</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#96877E] flex-shrink-0 mt-0.5" />
                <span>Suporte contínuo e acompanhamento pós-entrega</span>
              </li>
            </ul>
          </div>

          {/* Call to action */}
          <div className="pt-4 flex flex-col gap-2">
            <a
              href={card.link && card.link !== '#' ? card.link : whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-[12px] bg-[#96877E] hover:bg-[#85766D] text-white text-xs font-semibold transition-all shadow-md flex items-center justify-center gap-2 group active:scale-[0.99]"
            >
              <MessageCircle className="w-4 h-4 text-white fill-white/20" />
              <span>Solicitar Agendamento VIP</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <button
              onClick={onClose}
              className="w-full py-2.5 text-center text-[11px] text-[#78716D] hover:text-[#574E49] font-medium"
            >
              Voltar para a lista
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
