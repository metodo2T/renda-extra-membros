export const mdxDocumentation = `# Documentação de Engenharia Reversa: Landing Page "Fritadeira Gourmet"

Esta documentação técnica em formato **MDX** detalha a engenharia reversa completa da landing page de alta conversão do produto digital **"Fritadeira Gourmet: 50 Receitas para Air Fryer"**. 

---

# 1. Design System

O design system da landing page utiliza uma estética **Dark Premium High-Contrast** voltada para a área culinária e e-commerce de produtos digitais de alta conversão. Ele utiliza fundos escuros e profundos com destaques em tons quentes e vibrantes de fogo/alimento (laranja e âmbar), combinados com acentos em verde esmeralda para sinalização de economia, gratuidade e confirmações.

## Paleta de Cores Completa

### Cores Principais
* **Primary (Laranja Fogo):** \`#f97316\` | \`rgb(249, 115, 22)\` | \`hsl(24, 95%, 53%)\`
  * *Uso:* Botões de ação principal (CTA), palavras-chave em destaque, bordas ativas.
* **Primary Hover / Dark:** \`#ea580c\` | \`rgb(234, 88, 12)\` | \`hsl(20, 88%, 48%)\`
  * *Uso:* Estado hover de botões e degradês.
* **Secondary / Accent (Âmbar Ouro):** \`#f59e0b\` | \`rgb(245, 158, 11)\` | \`hsl(38, 92%, 50%)\`
  * *Uso:* Badges de destaque, estrelas de avaliação, ícones promocionais.
* **Success / Economic (Verde Esmeralda):** \`#10b981\` | \`rgb(16, 185, 129)\` | \`hsl(160, 84%, 39%)\`
  * *Uso:* Ícones de checkmark, selo de bônus "GRÁTIS", tag de economia, garantias.

### Superfícies e Backgrounds
* **Background Deep (Fundo da Página):** \`#0b0c10\` | \`rgb(11, 12, 16)\` | \`hsl(228, 19%, 5%)\`
  * *Uso:* Fundo global da aplicação.
* **Surface Neutral (Cards e Seções):** \`#13141c\` | \`rgb(19, 20, 28)\` | \`hsl(233, 19%, 9%)\`
  * *Uso:* Containeres de cards, seções secundárias e FAQ.
* **Surface Elevated (Cards Flutuantes):** \`#1a1b26\` | \`rgb(26, 27, 38)\` | \`hsl(235, 19%, 13%)\`
  * *Uso:* Cards de depoimentos, categorias e preço em destaque.
* **Border Color (Bordas Sutis):** \`#27293a\` | \`rgb(39, 41, 58)\` | \`hsl(234, 20%, 19%)\`
  * *Uso:* Divisores, bordas de cards e inputs.

### Textos
* **Text High Contrast (Títulos):** \`#ffffff\` | \`rgb(255, 255, 255)\` | \`hsl(0, 0%, 100%)\`
* **Text Body (Corpo e Parágrafos):** \`#e4e4e7\` | \`rgb(228, 228, 231)\` | \`hsl(240, 5%, 91%)\`
* **Text Muted (Legendas e Detalhes):** \`#a1a1aa\` | \`rgb(161, 161, 170)\` | \`hsl(240, 5%, 65%)\`
* **Text Dark / Contrast On Primary:** \`#000000\` | \`rgb(0, 0, 0)\` | \`hsl(0, 0%, 0%)\`

## Gradientes Utilizados

1. **CTA Principal (Glow Flame Gradient):**
   \`linear-gradient(135deg, #f97316 0%, #ea580c 50%, #dc2626 100%)\`
2. **Texto em Destaque (Fire Accent Text):**
   \`linear-gradient(90deg, #fbbf24 0%, #f97316 50%, #ef4444 100%)\`
3. **Card Hero Accent Glow:**
   \`radial-gradient(circle at top, rgba(249, 115, 22, 0.15) 0%, transparent 70%)\`

## Opacidade e Transparências
* **Badges Translucidos:** \`rgba(245, 158, 11, 0.12)\` com borda \`rgba(245, 158, 11, 0.25)\`
* **Card Overlay / Backdrop:** \`rgba(19, 20, 28, 0.85)\` com \`backdrop-filter: blur(12px)\`
* **Sombra de Brilho CTA:** \`box-shadow: 0 10px 30px -5px rgba(249, 115, 22, 0.4)\`

---

# 2. Tipografia

A hierarquia tipográfica utiliza uma fonte sans-serif moderna, geométrica e com suporte a pesos pesados (ExtraBold / Black) para gerar alto impacto visual imediato.

* **Família Tipográfica Principal:** **Plus Jakarta Sans** (ou *Outfit* / *Inter* como fallback)
* **Família Secundária para Números/Stats:** **Plus Jakarta Sans** com \`font-weight: 800\` e \`letter-spacing: -0.03em\`

| Nível | Tamanho (Desktop) | Tamanho (Mobile) | Peso | Line Height | Letter Spacing |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero H1** | 52px (3.25rem) | 32px (2.0rem) | 800 (ExtraBold) | 1.15 | -0.02em |
| **Section H2** | 36px (2.25rem) | 26px (1.625rem) | 800 (ExtraBold) | 1.25 | -0.01em |
| **Card H3** | 20px (1.25rem) | 18px (1.125rem) | 700 (Bold) | 1.35 | Normal |
| **Subtítulo** | 18px (1.125rem) | 15px (0.9375rem) | 400 (Regular) | 1.6 | Normal |
| **Body (Texto)** | 16px (1.0rem) | 14px (0.875rem) | 400 (Regular) | 1.6 | Normal |
| **Badge / Label** | 12px (0.75rem) | 11px (0.6875rem) | 700 (Bold) | 1.0 | +0.08em (UPPERCASE) |
| **Price Hero** | 56px (3.5rem) | 40px (2.5rem) | 900 (Black) | 1.0 | -0.03em |

---

# 3. Layout e Estrutura Responsiva

A landing page é construída em uma estrutura **Single Page Vertical Conversion Funnel** com seções centralizadas e leitura guiada.

* **Largura Máxima do Container:** \`1120px\` (\`max-w-6xl\` no Tailwind CSS)
* **Largura Máxima para Leitura / Hero:** \`800px\` (\`max-w-3xl\` para copy focalizada)
* **Padding Padrão das Seções:**
  * Desktop: \`padding-top: 80px\`, \`padding-bottom: 80px\` (\`py-20\`)
  * Mobile: \`padding-top: 48px\`, \`padding-bottom: 48px\` (\`py-12\`)
* **Padding Lateral (Gutter):** \`24px\` em dispositivos móveis (\`px-6\`)
* **Grids de Layout:**
  * *Features / Módulos:* Grid 3 colunas em desktop (\`md:grid-cols-3\`), 1 em mobile.
  * *Categorias:* Grid 4 colunas em desktop (\`md:grid-cols-4\`), 2 colunas em tablet (\`sm:grid-cols-2\`), 1 em mobile.
  * *Receitas Destaque:* Grid 4 colunas em desktop (\`lg:grid-cols-4\`), 2 em mobile.
  * *Depoimentos:* Grid 3 colunas em desktop (\`md:grid-cols-3\`), 1 em mobile.
* **Breakpoints Responsivos:**
  * \`sm\`: 640px
  * \`md\`: 768px
  * \`lg\`: 1024px
  * \`xl\`: 1280px

---

# 4. Componentes Detalhados

## Navbar & Bar Topo de Oferta
- **Announcement Top Bar:**
  - *Altura:* 40px
  - *Cor:* Fundo vermelho/laranja escuro (\`#b91c1c\` para \`#ea580c\`)
  - *Conteúdo:* Cronômetro regressivo ("Oferta relâmpago! Expira em 00:00:00"), texto de escassez e mini CTA à direita.
- **Header Navbar Principal:**
  - *Altura:* 72px
  - *Comportamento:* Sticky no topo (\`position: sticky; top: 0; z-index: 50;\`) com \`backdrop-filter: blur(16px)\` e transparência escurecida.
  - *Alinhamento:* Flexbox \`justify-between\` com logo à esquerda e botão CTA rápido à direita.

## Hero Section
- *Alinhamento:* Conteúdo centralizado (\`text-center flex flex-col items-center\`).
- *Badge Superior:* Pill escuro com ícone de chama/estrela e borda âmbar suave.
- *Título Principal (H1):* Tamanho massivo (52px), com a palavra "Air Fryer" e "cozinha gourmet" com degradê laranja fogo brilhante.
- *Lista de Benefícios:* 4 itens em pilha vertical com ícones de checkmark verde esmeralda em círculos translúcidos.
- *CTA Principal:* Botão gigante com gradiente vibrante, efeito de brilho suave e ícone de fogo.
- *Provas Sociais / Métricas:* Bar de estatísticas logo abaixo com 4 indicadores em colunas lado a lado.

## Seções Intermediárias
- **Cards de Benefícios ("O que está incluído"):**
  - Cards em fundo escuro elevado (\`#18181b\`), bordas finas (\`#27272a\`), cantos arredondados (\`border-radius: 16px\`).
  - Ícone temático no topo esquerdo dentro de caixa translúcida âmbar.
- **Grid de Categorias:**
  - Pills/Cards interativos de categorias com ícone 3D ou ilustração e contador de receitas com badge translúcida.
- **Cards de Receitas em Destaque:**
  - Card de receita incluindo tag de categoria, nome do prato, tempo de preparo e temperatura da Air Fryer (ex: \`18 min | 200°C\`).
- **Cards de Bônus Grátis:**
  - Destacados com borda verde esmeralda ou dourada e badge "BÔNUS 1 — GRÁTIS".
  - Apresenta o valor original cortado e o valor "R$ 0,00".
- **Cards de Depoimentos:**
  - 5 estrelas amarelas, citação entre aspas, avatar com iniciais em círculo colorido, nome do cliente e cidade.

## Botões (CTAs)
- **Cores:** Gradiente \`linear-gradient(to right, #f97316, #ea580c, #dc2626)\`
- **Hover:** Aumento de escala leve (\`transform: scale(1.02)\`), brilho de sombra expandido (\`box-shadow: 0 12px 35px -5px rgba(249, 115, 22, 0.5)\`).
- **Border Radius:** \`14px\` (\`rounded-xl\` no Tailwind)
- **Padding:** \`18px 36px\` em desktop (\`py-4 px-8\`), \`16px 24px\` em mobile.
- **Tipografia:** \`font-size: 18px\`, \`font-weight: 800\` (ExtraBold), \`text-transform: uppercase\`, \`letter-spacing: 0.02em\`.

## Accordion / Perguntas Frequentes (FAQ)
- **Estilo:** Lista vertical de perguntas expansíveis.
- **Borda e Fundo:** \`background: #18181b\`, \`border: 1px solid #27272a\`, \`border-radius: 12px\`.
- **Focus / Active State:** Transição suave da seta e expansão do texto de resposta com cor ligeiramente mais clara.

---

# 5. CSS e Tailwind Equivalente

Exemplos práticos em **Tailwind CSS v4** para reproduzir exatamente os elementos visuais da landing page:

### 1. Botão CTA Principal
\`\`\`html
<button class="relative group w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-orange-500 via-orange-600 to-red-600 text-white font-extrabold text-lg uppercase tracking-wider rounded-xl shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer">
  <span>🔥 Quero Meu Guia por Apenas R$19,90</span>
</button>
\`\`\`

### 2. Badge Pill Promocional
\`\`\`html
<div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-bold uppercase tracking-widest">
  <span class="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
  50 Receitas Testadas e Aprovadas
</div>
\`\`\`

### 3. Título Hero H1 com Texto em Gradiente
\`\`\`html
<h1 class="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] text-center">
  Transforme sua <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-red-500">Air Fryer</span> em uma cozinha gourmet
</h1>
\`\`\`

### 4. Card de Benefício Escuro
\`\`\`html
<div class="p-6 rounded-2xl bg-[#13141c] border border-[#27293a] hover:border-orange-500/40 transition-colors duration-300 flex flex-col gap-3">
  <div class="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 font-bold text-xl">
    📖
  </div>
  <h3 class="text-xl font-bold text-white">50 Receitas Organizadas</h3>
  <p class="text-sm text-zinc-400 leading-relaxed">
    Divididas em 12 categorias — do café da manhã à sobremesa. Cada receita com tempo, temperatura e modo de preparo exatos.
  </p>
</div>
\`\`\`

### 5. Card de Preço / Checkout Hero
\`\`\`html
<div class="w-full max-w-lg p-8 rounded-3xl bg-[#13141c] border-2 border-orange-500/50 shadow-2xl shadow-orange-500/10 flex flex-col items-center text-center">
  <span class="px-4 py-1 rounded-full bg-red-500/20 text-red-400 text-xs font-bold uppercase tracking-wider mb-4">
    ⚡ Oferta Relâmpago — Economize 75%
  </span>
  <span class="text-zinc-500 line-through text-lg">De R$79,90</span>
  <div class="flex items-baseline gap-1 my-2">
    <span class="text-2xl font-bold text-white">R$</span>
    <span class="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">19,90</span>
  </div>
  <p class="text-xs text-emerald-400 font-semibold mb-6">Pagamento único — acesso para sempre</p>
</div>
\`\`\`

---

# 6. Tokens de Design (Variáveis CSS)

Abaixo está o bloco completo de variáveis CSS (Design Tokens) pronto para ser adicionado ao seu arquivo de estilos globais ou tema:

\`\`\`css
:root {
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
  --shadow-card: 0 10px 25px -5px rgba(0, 0, 0, 0.5);

  /* Gradients */
  --gradient-cta: linear-gradient(135deg, #f97316 0%, #ea580c 50%, #dc2626 100%);
  --gradient-text: linear-gradient(90deg, #fbbf24 0%, #f97316 50%, #ef4444 100%);

  /* Radius & Spacing */
  --radius-button: 14px;
  --radius-card: 20px;
  --radius-badge: 9999px;
  --container-max-width: 1120px;
}
\`\`\`
`;
