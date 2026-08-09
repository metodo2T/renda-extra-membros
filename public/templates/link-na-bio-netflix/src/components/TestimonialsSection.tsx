import React, { useState } from 'react';
import { Testimonial } from '../types';
import { Star, MessageSquareQuote, ChevronLeft, ChevronRight } from 'lucide-react';

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const active = testimonials[currentIndex];

  if (!active) return null;

  return (
    <div className="w-full max-w-lg mx-auto px-4 my-6">
      <div className="glass-panel rounded-3xl p-5 border border-slate-800 shadow-xl relative overflow-hidden">
        {/* Title */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-400">
              <MessageSquareQuote className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white font-heading">
                Depoimentos de Clientes
              </h3>
              <p className="text-xs text-slate-400">
                O que quem contratou diz sobre a parceria:
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={handlePrev}
              className="w-7 h-7 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 flex items-center justify-center transition border border-slate-800"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="w-7 h-7 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 flex items-center justify-center transition border border-slate-800"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Testimonial Card */}
        <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800/80 transition-all duration-300">
          <div className="flex items-center justify-between gap-3 mb-3">
            <div className="flex items-center gap-3">
              <img
                src={active.avatar}
                alt={active.name}
                referrerPolicy="no-referrer"
                className="w-11 h-11 rounded-full object-cover border border-slate-700"
              />
              <div>
                <h4 className="font-bold text-white text-sm font-heading">{active.name}</h4>
                <p className="text-xs text-slate-400">{active.role} • {active.company}</p>
              </div>
            </div>

            <span className="px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-[10px] font-bold">
              {active.resultBadge}
            </span>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1 mb-2 text-amber-400">
            {Array.from({ length: active.rating }).map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
            ))}
          </div>

          <p className="text-xs text-slate-300 leading-relaxed italic">
            "{active.text}"
          </p>

          <div className="mt-3 text-right">
            <span className="text-[10px] text-slate-500 uppercase font-semibold">
              Nicho: {active.niche}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
