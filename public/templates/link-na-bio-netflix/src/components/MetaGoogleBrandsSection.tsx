import React, { useState } from 'react';
import { MetaAdsLogo, GoogleAdsLogo } from './Logos';
import { Check, ShieldCheck, Sparkles, Layers, Cpu, Target, Eye, ShoppingCart } from 'lucide-react';

export const MetaGoogleBrandsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'meta' | 'google' | 'both'>('both');

  return (
    <div className="w-full max-w-lg mx-auto px-4 my-6">
      <div className="glass-panel rounded-3xl p-5 border border-slate-800 shadow-xl relative overflow-hidden">
        {/* Glow backdrop */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none"></div>

        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-blue-400">
              Especialização Oficial
            </span>
            <h3 className="text-lg font-bold text-white font-heading">
              Meta Ads & Google Ads
            </h3>
          </div>

          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-950 border border-slate-800 text-xs">
            <button
              onClick={() => setActiveTab('both')}
              className={`px-2.5 py-1 rounded-lg font-semibold transition ${
                activeTab === 'both' ? 'bg-blue-600 text-white shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              Ambos
            </button>
            <button
              onClick={() => setActiveTab('meta')}
              className={`px-2.5 py-1 rounded-lg font-semibold transition flex items-center gap-1 ${
                activeTab === 'meta' ? 'bg-blue-600 text-white shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              <MetaAdsLogo className="w-3.5 h-3.5" />
              <span>Meta</span>
            </button>
            <button
              onClick={() => setActiveTab('google')}
              className={`px-2.5 py-1 rounded-lg font-semibold transition flex items-center gap-1 ${
                activeTab === 'google' ? 'bg-emerald-600 text-white shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              <GoogleAdsLogo className="w-3.5 h-3.5" />
              <span>Google</span>
            </button>
          </div>
        </div>

        {/* Brand Specs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-2">
          {/* Meta Card */}
          {(activeTab === 'both' || activeTab === 'meta') && (
            <div className="p-4 rounded-2xl bg-slate-950/80 border border-blue-500/30 relative group hover:border-blue-500/60 transition">
              <div className="flex items-center gap-2 mb-2">
                <MetaAdsLogo className="w-6 h-6" />
                <h4 className="font-bold text-white text-sm font-heading">Meta Ads Ecosystem</h4>
              </div>
              <ul className="space-y-1.5 text-xs text-slate-300">
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>Instagram Feed & Stories Ads</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>Campanhas de Click p/ WhatsApp</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>API de Conversões (CAPI) & Pixel</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>Vendas no Catálogo & Advantage+</span>
                </li>
              </ul>
            </div>
          )}

          {/* Google Card */}
          {(activeTab === 'both' || activeTab === 'google') && (
            <div className="p-4 rounded-2xl bg-slate-950/80 border border-emerald-500/30 relative group hover:border-emerald-500/60 transition">
              <div className="flex items-center gap-2 mb-2">
                <GoogleAdsLogo className="w-6 h-6" />
                <h4 className="font-bold text-white text-sm font-heading">Google Ads Ecosystem</h4>
              </div>
              <ul className="space-y-1.5 text-xs text-slate-300">
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Rede de Pesquisa (Foco na Intenção)</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Google Shopping & PMax</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Anúncios de Vídeo no YouTube</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Analytics GA4 & Tag Manager</span>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
