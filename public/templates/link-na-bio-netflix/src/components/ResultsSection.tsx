import React, { useState } from 'react';
import { CaseStudy } from '../types';
import { Trophy, TrendingUp, ArrowRight, CheckCircle2, Quote } from 'lucide-react';

interface ResultsSectionProps {
  caseStudies: CaseStudy[];
  whatsappNumber: string;
}

export const ResultsSection: React.FC<ResultsSectionProps> = ({ caseStudies, whatsappNumber }) => {
  const [selectedCaseId, setSelectedCaseId] = useState<string>(caseStudies[0]?.id || '');

  const activeCase = caseStudies.find(c => c.id === selectedCaseId) || caseStudies[0];

  const handleConsultCase = () => {
    if (!activeCase) return;
    const cleanNumber = whatsappNumber.replace(/\D/g, '');
    const msg = `Olá Lucas! Vi o Case de Sucesso no seu Link na Bio (${activeCase.clientNiche}: ${activeCase.title}). Gostaria de alcançar resultados semelhantes para minha empresa.`;
    const url = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="w-full max-w-lg mx-auto px-4 my-6">
      <div className="glass-panel rounded-3xl p-5 border border-slate-800 shadow-xl relative overflow-hidden">
        {/* Title */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
            <Trophy className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white font-heading">
              Provas de Resultado (Cases Reais)
            </h3>
            <p className="text-xs text-slate-400">
              Veja o impacto gerado para diferentes modelos de negócio:
            </p>
          </div>
        </div>

        {/* Niche Tabs */}
        <div className="flex gap-1.5 overflow-x-auto pb-2 mb-3 scrollbar-none">
          {caseStudies.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedCaseId(item.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCaseId === item.id
                  ? 'bg-amber-500/20 border border-amber-500/60 text-amber-300 shadow'
                  : 'bg-slate-950/60 border border-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              {item.nicheTag}
            </button>
          ))}
        </div>

        {/* Active Case Card */}
        {activeCase && (
          <div className="p-4 rounded-2xl bg-slate-950/90 border border-slate-800/90 space-y-3">
            <div className="flex items-center justify-between text-[11px]">
              <span className="px-2.5 py-0.5 rounded-full bg-blue-900/60 text-blue-300 border border-blue-500/30 font-semibold">
                {activeCase.platform}
              </span>
              <span className="text-slate-400 font-medium">{activeCase.clientNiche}</span>
            </div>

            <h4 className="text-base font-bold text-white font-heading leading-snug">
              {activeCase.title}
            </h4>

            {/* Metrics Comparison */}
            <div className="grid grid-cols-3 gap-2 py-2 border-y border-slate-800/80">
              {activeCase.metrics.map((m, idx) => (
                <div key={idx} className="p-2 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
                  <p className="text-[10px] text-slate-400 line-clamp-1">{m.label}</p>
                  <p className="text-[11px] text-slate-500 line-through mt-0.5">{m.before}</p>
                  <p className="text-xs sm:text-sm font-extrabold text-emerald-400 font-heading">
                    {m.after}
                  </p>
                </div>
              ))}
            </div>

            {/* Client Quote */}
            <div className="flex gap-2 p-2.5 rounded-xl bg-slate-900/50 border border-slate-800/50 text-xs italic text-slate-300">
              <Quote className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>"{activeCase.quote}"</span>
            </div>

            {/* Action */}
            <button
              onClick={handleConsultCase}
              className="w-full py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-semibold flex items-center justify-center gap-1.5 transition"
            >
              <span>Quero Resultados Como Este</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
