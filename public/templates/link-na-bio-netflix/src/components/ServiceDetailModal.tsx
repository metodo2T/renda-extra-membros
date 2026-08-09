import React from 'react';
import { ServiceItem } from '../types';
import { MetaAdsLogo, GoogleAdsLogo, WhatsAppLogo } from './Logos';
import { CheckCircle2, ArrowRight, ShieldCheck, Sparkles, X, Target, Package, Users } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  whatsappNumber: string;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  whatsappNumber,
}) => {
  if (!service) return null;

  const cleanNumber = whatsappNumber.replace(/\D/g, '');

  const handleHireService = () => {
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.7 }
    });

    const msg = service.whatsappPreFilledMessage;
    const url = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg max-h-[90vh] bg-slate-900 border border-slate-700/80 rounded-3xl overflow-hidden shadow-2xl flex flex-col my-auto">
        {/* Header with Gradient Theme */}
        <div className={`relative p-6 bg-gradient-to-br ${service.themeGradient.bgFrom} to-slate-900 border-b border-slate-800`}>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-950/60 hover:bg-slate-950 text-slate-300 flex items-center justify-center transition border border-slate-800 z-10"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <span className="px-3 py-1 rounded-full bg-slate-950/80 text-blue-300 text-xs font-bold border border-blue-500/30">
              {service.badge}
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl font-extrabold text-white font-heading">
            {service.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            {service.subtitle}
          </p>

          {/* Stats highlight pill if available */}
          {service.statsHighlight && (
            <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-950/90 border border-emerald-500/40 text-emerald-300 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>{service.statsHighlight.label}: {service.statsHighlight.metric}</span>
            </div>
          )}
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-5 text-left text-xs sm:text-sm text-slate-300">
          {/* Overview */}
          <div>
            <h4 className="font-bold text-white text-sm font-heading mb-1 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span>Visão Geral</span>
            </h4>
            <p className="leading-relaxed bg-slate-950/60 p-3.5 rounded-2xl border border-slate-800 text-slate-300">
              {service.description}
            </p>
          </div>

          {/* Target Audience */}
          <div>
            <h4 className="font-bold text-white text-sm font-heading mb-1 flex items-center gap-1.5">
              <Users className="w-4 h-4 text-amber-400" />
              <span>Para Quem É Este Serviço</span>
            </h4>
            <p className="leading-relaxed bg-slate-950/60 p-3.5 rounded-2xl border border-slate-800 text-slate-300">
              {service.targetAudience}
            </p>
          </div>

          {/* Key Features */}
          <div>
            <h4 className="font-bold text-white text-sm font-heading mb-2 flex items-center gap-1.5">
              <Target className="w-4 h-4 text-emerald-400" />
              <span>O Que Está Incluso</span>
            </h4>
            <div className="space-y-2">
              {service.features.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 p-2.5 rounded-xl bg-slate-950/50 border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-slate-200">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Deliverables */}
          <div>
            <h4 className="font-bold text-white text-sm font-heading mb-2 flex items-center gap-1.5">
              <Package className="w-4 h-4 text-purple-400" />
              <span>Entregáveis & Acompanhamento</span>
            </h4>
            <div className="space-y-2">
              {service.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 p-2.5 rounded-xl bg-slate-950/50 border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <span className="text-slate-200">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-slate-800 bg-slate-950/90 flex flex-col gap-2">
          <button
            onClick={handleHireService}
            className="w-full py-3.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg transition"
          >
            <WhatsAppLogo className="w-5 h-5 text-slate-950" />
            <span>Contratar via WhatsApp</span>
            <ArrowRight className="w-4 h-4 text-slate-950" />
          </button>

          <p className="text-[11px] text-slate-500 text-center">
            Resposta rápida em horário comercial • Atendimento direto com o especialista
          </p>
        </div>
      </div>
    </div>
  );
};
