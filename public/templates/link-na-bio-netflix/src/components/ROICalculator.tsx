import React, { useState, useMemo } from 'react';
import { Calculator, TrendingUp, DollarSign, Target, Sparkles, ArrowRight, HelpCircle } from 'lucide-react';

interface ROICalculatorProps {
  whatsappNumber: string;
}

export const ROICalculator: React.FC<ROICalculatorProps> = ({ whatsappNumber }) => {
  const [budget, setBudget] = useState<number>(3000);
  const [niche, setNiche] = useState<'ecommerce' | 'local_services' | 'b2b_leads' | 'infoproducts'>('ecommerce');
  const [ticket, setTicket] = useState<number>(180);

  const cleanNumber = whatsappNumber.replace(/\D/g, '');

  const calculation = useMemo(() => {
    // Benchmarks per niche
    let cpc = 1.20; // Cost Per Click average
    let convRate = 0.025; // 2.5% conversion rate
    let roasMultiplier = 4.5;

    switch (niche) {
      case 'ecommerce':
        cpc = 1.10;
        convRate = 0.022; // 2.2% purchase rate
        roasMultiplier = 4.8;
        break;
      case 'local_services':
        cpc = 1.80;
        convRate = 0.12; // 12% lead rate
        roasMultiplier = 6.2;
        break;
      case 'b2b_leads':
        cpc = 3.50;
        convRate = 0.08; // 8% lead form rate
        roasMultiplier = 5.0;
        break;
      case 'infoproducts':
        cpc = 1.40;
        convRate = 0.035; // 3.5% checkout conv
        roasMultiplier = 4.2;
        break;
    }

    const estimatedClicks = Math.floor(budget / cpc);
    const estimatedConversions = Math.floor(estimatedClicks * convRate);
    const estimatedRevenue = Math.floor(estimatedConversions * ticket);
    const estimatedROAS = Number((estimatedRevenue / budget).toFixed(1));

    return {
      clicks: estimatedClicks,
      conversions: estimatedConversions,
      revenue: estimatedRevenue,
      roas: Math.max(estimatedROAS, 2.5),
    };
  }, [budget, niche, ticket]);

  const handleSendToWhatsApp = () => {
    const nicheLabels = {
      ecommerce: 'E-commerce / Loja Virtual',
      local_services: 'Negócio Local / Clínica / Serviços',
      b2b_leads: 'Vendas B2B / Software / High Ticket',
      infoproducts: 'Infoproduct / Cursos / Mentoria'
    };

    const msg = `Olá Lucas! Utilizei a Calculadora no seu Link na Bio.\n\n*Orçamento Mensal Pretendido:* R$ ${budget.toLocaleString('pt-BR')}\n*Modelo de Negócio:* ${nicheLabels[niche]}\n*Ticket Médio:* R$ ${ticket.toLocaleString('pt-BR')}\n*Meta de Faturamento Estimado:* R$ ${calculation.revenue.toLocaleString('pt-BR')} (ROAS ${calculation.roas}x)\n\nGostaria de validar essa projeção para meu negócio!`;
    const url = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="w-full max-w-lg mx-auto px-4 my-6">
      <div className="glass-panel rounded-3xl p-5 border border-slate-800 shadow-xl relative overflow-hidden">
        {/* Title */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-9 h-9 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400">
            <Calculator className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white font-heading">
              Calculadora de Retorno (ROI Estimado)
            </h3>
            <p className="text-xs text-slate-400">
              Simule a estimativa de tráfego e vendas para seu orçamento:
            </p>
          </div>
        </div>

        {/* Inputs */}
        <div className="space-y-4 my-3">
          {/* Budget Slider */}
          <div>
            <div className="flex items-center justify-between text-xs font-semibold mb-1">
              <span className="text-slate-300">Investimento Mensal em Anúncios:</span>
              <span className="text-emerald-400 text-sm font-bold font-heading">
                R$ {budget.toLocaleString('pt-BR')}
              </span>
            </div>
            <input
              type="range"
              min={1000}
              max={50000}
              step={500}
              value={budget}
              onChange={(e) => setBudget(Number(e.target.value))}
              className="w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-emerald-500"
            />
            <div className="flex justify-between text-[10px] text-slate-500 mt-1">
              <span>R$ 1.000</span>
              <span>R$ 25.000</span>
              <span>R$ 50.000+</span>
            </div>
          </div>

          {/* Niche Selector */}
          <div>
            <label className="block text-xs text-slate-300 font-semibold mb-1">
              Seu Modelo de Negócio:
            </label>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <button
                type="button"
                onClick={() => setNiche('ecommerce')}
                className={`p-2.5 rounded-xl border text-left font-medium transition ${
                  niche === 'ecommerce'
                    ? 'bg-blue-600/20 border-blue-500 text-white'
                    : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                🛒 E-commerce
              </button>
              <button
                type="button"
                onClick={() => setNiche('local_services')}
                className={`p-2.5 rounded-xl border text-left font-medium transition ${
                  niche === 'local_services'
                    ? 'bg-blue-600/20 border-blue-500 text-white'
                    : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                📍 Negócio Local / Clínica
              </button>
              <button
                type="button"
                onClick={() => setNiche('b2b_leads')}
                className={`p-2.5 rounded-xl border text-left font-medium transition ${
                  niche === 'b2b_leads'
                    ? 'bg-blue-600/20 border-blue-500 text-white'
                    : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                💼 B2B / Serviços
              </button>
              <button
                type="button"
                onClick={() => setNiche('infoproducts')}
                className={`p-2.5 rounded-xl border text-left font-medium transition ${
                  niche === 'infoproducts'
                    ? 'bg-blue-600/20 border-blue-500 text-white'
                    : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                🎓 Cursos / Mentoria
              </button>
            </div>
          </div>

          {/* Ticket Input */}
          <div>
            <div className="flex items-center justify-between text-xs font-semibold mb-1">
              <span className="text-slate-300">Ticket Médio (Preço Médio do Produto/Serviço):</span>
              <span className="text-blue-400 font-bold font-heading">
                R$ {ticket.toLocaleString('pt-BR')}
              </span>
            </div>
            <input
              type="number"
              min={20}
              max={10000}
              value={ticket}
              onChange={(e) => setTicket(Number(e.target.value) || 100)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-xs text-white focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        {/* Results Panel */}
        <div className="p-4 rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950/60 border border-slate-800 my-4 shadow-inner">
          <div className="grid grid-cols-2 gap-3 text-center mb-3">
            <div className="p-2 rounded-xl bg-slate-900/80 border border-slate-800">
              <p className="text-[10px] text-slate-400 font-medium">Cliques Qualificados</p>
              <p className="text-sm sm:text-base font-extrabold text-white font-heading">
                ~{calculation.clicks.toLocaleString('pt-BR')}
              </p>
            </div>
            <div className="p-2 rounded-xl bg-slate-900/80 border border-slate-800">
              <p className="text-[10px] text-slate-400 font-medium">
                {niche === 'local_services' || niche === 'b2b_leads' ? 'Leads Estimados' : 'Vendas Estimadas'}
              </p>
              <p className="text-sm sm:text-base font-extrabold text-blue-400 font-heading">
                ~{calculation.conversions.toLocaleString('pt-BR')}
              </p>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between">
            <div>
              <p className="text-[10px] text-slate-400">Faturamento Bruto Projetado:</p>
              <p className="text-lg sm:text-xl font-extrabold text-emerald-400 font-heading">
                R$ {calculation.revenue.toLocaleString('pt-BR')}
              </p>
            </div>
            <div className="text-right">
              <p className="text-[10px] text-slate-400">ROAS Estimado:</p>
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30 font-heading">
                {calculation.roas}x ROAS
              </span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={handleSendToWhatsApp}
          className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg transition"
        >
          <span>Validar Projeção para Meu Negócio</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
