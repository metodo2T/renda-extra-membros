import React, { useState } from 'react';
import { FAQItem } from '../types';
import { HelpCircle, ChevronDown } from 'lucide-react';

interface FAQSectionProps {
  faqs: FAQItem[];
}

export const FAQSection: React.FC<FAQSectionProps> = ({ faqs }) => {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id || null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="w-full max-w-lg mx-auto px-4 my-6">
      <div className="glass-panel rounded-3xl p-5 border border-slate-800 shadow-xl">
        {/* Header */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-9 h-9 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
            <HelpCircle className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white font-heading">
              Perguntas Frequentes (FAQ)
            </h3>
            <p className="text-xs text-slate-400">
              Tire suas dúvidas antes de iniciar sua campanha:
            </p>
          </div>
        </div>

        {/* Accordions */}
        <div className="space-y-2">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl bg-slate-950/70 border border-slate-800/80 overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full p-3.5 text-left flex items-center justify-between gap-3 text-xs sm:text-sm font-semibold text-white hover:text-blue-300 transition"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-blue-400' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-3.5 pb-4 pt-1 text-xs text-slate-300 leading-relaxed border-t border-slate-900/80">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
