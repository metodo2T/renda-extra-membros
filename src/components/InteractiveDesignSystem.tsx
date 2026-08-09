import { useState } from 'react';
import { Copy, Check, Palette, Type, LayoutGrid, Layers, Code, Sparkles } from 'lucide-react';

export function InteractiveDesignSystem() {
  const [copiedToken, setCopiedToken] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedToken(label);
    setTimeout(() => setCopiedToken(null), 2000);
  };

  const colors = [
    { name: 'Primary (Laranja Fogo)', hex: '#f97316', rgb: 'rgb(249, 115, 22)', role: 'CTA e Destaque', bgClass: 'bg-[#f97316]' },
    { name: 'Primary Hover', hex: '#ea580c', rgb: 'rgb(234, 88, 12)', role: 'Estado Hover CTA', bgClass: 'bg-[#ea580c]' },
    { name: 'Secondary (Âmbar Ouro)', hex: '#f59e0b', rgb: 'rgb(245, 158, 11)', role: 'Badges e Estrelas', bgClass: 'bg-[#f59e0b]' },
    { name: 'Success (Esmeralda)', hex: '#10b981', rgb: 'rgb(16, 185, 129)', role: 'Sinalização e Selo Grátis', bgClass: 'bg-[#10b981]' },
    { name: 'Background Deep', hex: '#0b0c10', rgb: 'rgb(11, 12, 16)', role: 'Fundo Global', bgClass: 'bg-[#0b0c10]' },
    { name: 'Surface Neutral', hex: '#13141c', rgb: 'rgb(19, 20, 28)', role: 'Containeres e Cards', bgClass: 'bg-[#13141c]' },
    { name: 'Surface Elevated', hex: '#1a1b26', rgb: 'rgb(26, 27, 38)', role: 'Cards Flutuantes', bgClass: 'bg-[#1a1b26]' },
    { name: 'Border Subtle', hex: '#27293a', rgb: 'rgb(39, 41, 58)', role: 'Divisores e Bordas', bgClass: 'bg-[#27293a]' },
  ];

  const cssVariables = `:root {
  /* Brand Colors */
  --primary: #f97316;
  --primary-hover: #ea580c;
  --primary-dark: #c2410c;
  --secondary: #f59e0b;
  --secondary-light: #fbbf24;
  --success: #10b981;
  --success-glow: rgba(16, 185, 129, 0.2);

  /* Backgrounds & Surfaces */
  --background: #0b0c10;
  --surface-card: #13141c;
  --surface-elevated: #1a1b26;
  --surface-overlay: rgba(19, 20, 28, 0.85);

  /* Typography Colors */
  --text-primary: #ffffff;
  --text-body: #e4e4e7;
  --text-muted: #a1a1aa;
  --text-dark: #000000;

  /* Borders & Shadows */
  --border-subtle: #27293a;
  --border-active: rgba(249, 115, 22, 0.5);
  --shadow-cta: 0 10px 30px -5px rgba(249, 115, 22, 0.4);

  /* Gradients */
  --gradient-cta: linear-gradient(135deg, #f97316 0%, #ea580c 50%, #dc2626 100%);
  --gradient-text: linear-gradient(90deg, #fbbf24 0%, #f97316 50%, #ef4444 100%);

  /* Radius & Spacing */
  --radius-button: 14px;
  --radius-card: 20px;
  --radius-badge: 9999px;
  --container-max-width: 1120px;
}`;

  return (
    <div className="w-full space-y-10">
      {/* Introduction Banner */}
      <div className="p-6 sm:p-8 rounded-2xl bg-[#13141c] border border-[#27293a] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="flex items-center gap-3 text-orange-400 font-bold text-sm mb-2">
          <Sparkles className="w-5 h-5" />
          <span>Fritadeira Gourmet Design Tokens</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
          Design System & Especificação Visual
        </h2>
        <p className="text-zinc-400 text-sm max-w-2xl">
          Inspetor interativo dos tokens de cor, tipografia, elevação e componentes componentes derivados da engenharia reversa da landing page.
        </p>
      </div>

      {/* 1. Paleta de Cores */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 border-b border-[#27293a] pb-3">
          <Palette className="w-5 h-5 text-amber-400" />
          <h3 className="text-lg font-bold text-white">1. Paleta de Cores Interativa</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {colors.map((c) => (
            <div
              key={c.hex}
              onClick={() => copyToClipboard(c.hex, c.hex)}
              className="p-4 rounded-xl bg-[#13141c] border border-[#27293a] hover:border-orange-500/40 transition-all cursor-pointer group relative overflow-hidden"
            >
              <div className={`w-full h-20 rounded-lg ${c.bgClass} mb-3 shadow-inner border border-white/10 flex items-center justify-center`}>
                <span className="opacity-0 group-hover:opacity-100 bg-black/70 text-white text-xs px-2.5 py-1 rounded-md font-mono font-bold transition-opacity flex items-center gap-1">
                  {copiedToken === c.hex ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  {copiedToken === c.hex ? 'Copiado!' : 'Copiar Hex'}
                </span>
              </div>
              <div className="font-bold text-white text-sm mb-1">{c.name}</div>
              <div className="text-xs text-zinc-400 flex items-center justify-between font-mono">
                <span>{c.hex}</span>
                <span className="text-[10px] text-zinc-500">{c.rgb}</span>
              </div>
              <div className="mt-2 text-[11px] text-amber-400/90 font-medium">{c.role}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Tipografia */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 border-b border-[#27293a] pb-3">
          <Type className="w-5 h-5 text-orange-400" />
          <h3 className="text-lg font-bold text-white">2. Escala Tipográfica</h3>
        </div>
        <div className="p-6 rounded-2xl bg-[#13141c] border border-[#27293a] space-y-6">
          <div className="space-y-1">
            <span className="text-xs text-amber-400 font-mono font-bold">HERO H1 (52px / ExtraBold 800)</span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Transforme sua <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-red-500">Air Fryer</span> em gourmet
            </h1>
          </div>

          <div className="space-y-1 border-t border-[#27293a] pt-4">
            <span className="text-xs text-amber-400 font-mono font-bold">SECTION H2 (36px / ExtraBold 800)</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Tudo o que você precisa para dominar sua Air Fryer
            </h2>
          </div>

          <div className="space-y-1 border-t border-[#27293a] pt-4">
            <span className="text-xs text-amber-400 font-mono font-bold">CARD H3 (20px / Bold 700)</span>
            <h3 className="text-xl font-bold text-white">
              50 Receitas Organizadas por Categoria
            </h3>
          </div>

          <div className="space-y-1 border-t border-[#27293a] pt-4">
            <span className="text-xs text-amber-400 font-mono font-bold">BODY (16px / Regular 400)</span>
            <p className="text-zinc-300 text-base leading-relaxed max-w-2xl">
              Organizadas por categoria, prontas em até 20 minutos, sem segredo. Do café da manhã à sobremesa — receitas com teste prático na cozinha.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Componentes Test Bench */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 border-b border-[#27293a] pb-3">
          <Layers className="w-5 h-5 text-emerald-400" />
          <h3 className="text-lg font-bold text-white">3. Bancada de Componentes</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* CTA Buttons */}
          <div className="p-6 rounded-2xl bg-[#13141c] border border-[#27293a] space-y-4">
            <h4 className="text-sm font-bold text-zinc-300 uppercase tracking-wider">Botões & CTAs</h4>
            <div className="space-y-3">
              <button className="w-full px-6 py-3.5 bg-gradient-to-r from-orange-500 via-orange-600 to-red-600 text-white font-extrabold text-sm uppercase tracking-wider rounded-xl shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-[1.01] transition-all cursor-pointer">
                🔥 Quero Meu Guia por Apenas R$19,90
              </button>

              <button className="w-full px-4 py-2.5 bg-[#1a1b26] border border-[#27293a] hover:border-orange-500/50 text-white font-bold text-xs rounded-lg transition-colors cursor-pointer">
                Quero Agora — R$19,90
              </button>
            </div>
          </div>

          {/* Badges & Pills */}
          <div className="p-6 rounded-2xl bg-[#13141c] border border-[#27293a] space-y-4">
            <h4 className="text-sm font-bold text-zinc-300 uppercase tracking-wider">Badges & Pills</h4>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-bold uppercase tracking-wider">
                ⚡ 50 RECEITAS TESTADAS
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                ✓ BÔNUS 1 — GRÁTIS
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/25 text-red-400 text-xs font-bold uppercase tracking-wider">
                ECONOMIZE 75%
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Variáveis CSS / Tokens Code Block */}
      <section className="space-y-4">
        <div className="flex items-center justify-between border-b border-[#27293a] pb-3">
          <div className="flex items-center gap-2">
            <Code className="w-5 h-5 text-amber-400" />
            <h3 className="text-lg font-bold text-white">4. Bloco de Tokens CSS (:root)</h3>
          </div>
          <button
            onClick={() => copyToClipboard(cssVariables, 'css-vars')}
            className="px-3 py-1.5 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer shadow-sm"
          >
            {copiedToken === 'css-vars' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copiedToken === 'css-vars' ? 'Copiado!' : 'Copiar CSS Tokens'}</span>
          </button>
        </div>

        <pre className="p-5 rounded-2xl bg-[#0b0c10] border border-[#27293a] text-amber-300/90 font-mono text-xs overflow-x-auto leading-relaxed">
          {cssVariables}
        </pre>
      </section>
    </div>
  );
}
