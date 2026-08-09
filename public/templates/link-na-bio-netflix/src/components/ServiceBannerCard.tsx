import React, { useState } from 'react';
import { ServiceItem } from '../types';
import { MetaAdsLogo, GoogleAdsLogo } from './Logos';
import {
  TrendingUp,
  Target,
  Zap,
  BarChart3,
  ShieldCheck,
  GraduationCap,
  ChevronRight,
  Sparkles,
  ArrowUpRight,
  CheckCircle,
  HelpCircle
} from 'lucide-react';

interface ServiceBannerCardProps {
  service: ServiceItem;
  onSelectService: (service: ServiceItem) => void;
  onQuickWhatsApp: (service: ServiceItem) => void;
}

export const ServiceBannerCard: React.FC<ServiceBannerCardProps> = ({
  service,
  onSelectService,
  onQuickWhatsApp,
}) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse tilt calculation for 3D clean effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -8; // subtle 8 deg max
    const rotY = ((x - centerX) / centerX) * 8;

    setRotateX(rotX);
    setRotateY(rotY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  // Icon renderer for 3D visual badge
  const render3DIcon = () => {
    switch (service.iconType) {
      case 'meta':
        return (
          <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-400 p-0.5 shadow-lg shadow-blue-500/20 translate-z-30">
            <div className="w-full h-full bg-slate-950 rounded-2xl flex items-center justify-center">
              <MetaAdsLogo className="w-7 h-7" />
            </div>
          </div>
        );
      case 'google':
        return (
          <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-500 via-amber-400 to-emerald-400 p-0.5 shadow-lg shadow-blue-500/20 translate-z-30">
            <div className="w-full h-full bg-slate-950 rounded-2xl flex items-center justify-center">
              <GoogleAdsLogo className="w-7 h-7" />
            </div>
          </div>
        );
      case 'consulting':
        return (
          <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-400 p-0.5 shadow-lg shadow-purple-500/20 translate-z-30">
            <div className="w-full h-full bg-slate-950 rounded-2xl flex items-center justify-center text-purple-400">
              <BarChart3 className="w-6 h-6" />
            </div>
          </div>
        );
      case 'funnel':
        return (
          <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 to-emerald-400 p-0.5 shadow-lg shadow-amber-500/20 translate-z-30">
            <div className="w-full h-full bg-slate-950 rounded-2xl flex items-center justify-center text-amber-400">
              <Target className="w-6 h-6" />
            </div>
          </div>
        );
      case 'audit':
        return (
          <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-tr from-rose-600 to-orange-400 p-0.5 shadow-lg shadow-rose-500/20 translate-z-30">
            <div className="w-full h-full bg-slate-950 rounded-2xl flex items-center justify-center text-rose-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
          </div>
        );
      case 'mentorship':
        return (
          <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-tr from-violet-600 to-cyan-400 p-0.5 shadow-lg shadow-violet-500/20 translate-z-30">
            <div className="w-full h-full bg-slate-950 rounded-2xl flex items-center justify-center text-violet-400">
              <GraduationCap className="w-6 h-6" />
            </div>
          </div>
        );
      default:
        return (
          <div className="relative w-12 h-12 rounded-2xl bg-blue-600 p-2 text-white">
            <Zap className="w-6 h-6" />
          </div>
        );
    }
  };

  return (
    <div className="w-full perspective-1000 my-3">
      {/* 3D Container with hardware accelerated transform */}
      <div
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
        }}
        className="relative w-full rounded-3xl transform-style-3d overflow-hidden glass-panel border border-slate-800 hover:border-slate-700/80 transition-all duration-300 shadow-xl group cursor-pointer animate-shimmer"
      >
        {/* Ambient Top Subtle Lighting Sheen */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${service.themeGradient.bgFrom} ${service.themeGradient.bgTo} opacity-30 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none`}
        ></div>

        {/* 3D Glass Layer Card Content */}
        <div className="relative p-5 sm:p-6 z-10 flex flex-col justify-between min-h-[210px]">
          {/* Top Row: 3D Icon + Badge + Metric Pill */}
          <div className="flex items-start justify-between gap-3 mb-3">
            <div className="flex items-center gap-3">
              {render3DIcon()}
              <div>
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-slate-900/90 border border-slate-700/70 text-[11px] font-semibold text-slate-300 tracking-wide uppercase">
                  {service.category}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white font-heading mt-0.5 group-hover:text-blue-300 transition-colors">
                  {service.title}
                </h3>
              </div>
            </div>

            {/* Top Right Stats Highlight Pill */}
            {service.statsHighlight && (
              <div className="hidden sm:flex flex-col items-end px-3 py-1 rounded-2xl bg-slate-900/90 border border-slate-800 text-right translate-z-20 shrink-0">
                <span className="text-xs font-extrabold text-emerald-400 font-heading">
                  {service.statsHighlight.metric}
                </span>
                <span className="text-[10px] text-slate-400 font-medium">
                  {service.statsHighlight.label}
                </span>
              </div>
            )}
          </div>

          {/* Subtitle / Pitch */}
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2">
            {service.highlightText}
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {service.features.slice(0, 3).map((feat, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-300 bg-slate-900/80 border border-slate-800 px-2.5 py-1 rounded-lg"
              >
                <CheckCircle className="w-3 h-3 text-emerald-400 shrink-0" />
                <span className="truncate max-w-[190px]">{feat}</span>
              </span>
            ))}
          </div>

          {/* Bottom Actions Row */}
          <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between gap-2 mt-auto">
            {/* Saber Mais Detail trigger */}
            <button
              onClick={() => onSelectService(service)}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-300 hover:text-white transition-colors group/btn"
            >
              <span>Detalhes do Serviço</span>
              <ChevronRight className="w-4 h-4 text-blue-400 group-hover/btn:translate-x-1 transition-transform" />
            </button>

            {/* Fast WhatsApp Orçamento Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onQuickWhatsApp(service);
              }}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-emerald-600 hover:text-white text-emerald-400 border border-emerald-500/30 text-xs font-semibold transition-all duration-300 shadow-sm"
            >
              <span>Orçamento</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
