export const pagina02Prompt = `Build a full landing page for "Comunidade Atlas" using plain HTML, CSS, and vanilla JavaScript. Recreate the existing page with maximum visual fidelity: a high-authority dark editorial sales page featuring luxury serif headings, crimson and champagne accents, structured results grid, 3-step alternating journey timeline with custom diamond icon illustrations, leadership bio notch card, interactive 6-module horizontal carousel with pagination dots, high-converting pricing offer box, and native HTML5 details/summary FAQ accordion.

PAGE IDENTITY
- Page title: "Comunidade Atlas — Escale sua autoridade digital com IA"
- Meta description: "Crie autoridade digital, organize sua oferta e venda com mais consistência usando conteúdo estratégico e sistemas com IA."
- Language: pt-BR.
- Page type: Authority Community & Mentorship Sales Landing Page.
- Visual style: High-end dark editorial, deep obsidian black (#0A0505, #120707), crimson wine accents (#B82929, #8C1D1D), warm champagne typography (#F6E8E0, #D1B8AC), bold Bebas Neue titles, elegant Instrument Serif accents, and clean Poppins body text.

ASSETS
- Module Carousel Cards (6 cards):
  1. Fundamentos da oferta: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600"
  2. Posicionamento premium: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=600"
  3. Conteúdo com IA: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600"
  4. Conversão e Funis: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=600"
  5. Vendas Consultivas: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600"
  6. Escala Operacional: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600"
- Leader Portrait: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800"

CORE FIDELITY RULES
- Output a single complete HTML file containing all HTML, embedded CSS in a <style> tag, and embedded vanilla JavaScript in a <script> tag.
- Include the routing fix script inside <head>: history.replaceState(null, '', '/');
- Ensure the 6-module carousel functions with smooth slide transitions and previous/next nav buttons.
- Preserve all details/summary toggle behavior in the FAQ section.

DEPENDENCIES & HEAD
- Preconnect: https://fonts.googleapis.com, https://fonts.gstatic.com
- Fonts:
  - Bebas Neue
  - Instrument Serif:ital@0;1
  - Poppins:wght@400;500;600;700;800

DESIGN TOKENS & CSS VARIABLES
:root {
  --bg-dark: #0a0505;
  --bg-surface: #140808;
  --bg-card: #1c0b0b;
  --text-main: #f6e8e0;
  --text-muted: #a69188;
  --accent-crimson: #c92a2a;
  --accent-crimson-hover: #e03131;
  --accent-rose: #d4a59a;
  --border-subtle: rgba(246, 232, 224, 0.1);
  --font-display: 'Bebas Neue', sans-serif;
  --font-serif: 'Instrument Serif', Georgia, serif;
  --font-sans: 'Poppins', -apple-system, sans-serif;
}

SECTIONS BREAKDOWN

1. HERO SECTION
- Eyebrow tag: "Comunidade Atlas".
- Title:
  "Escale sua autoridade digital com um sistema de conteúdo movido por IA"
- Description:
  "Aprenda a posicionar seu nome, criar conteúdo com clareza e transformar conhecimento em vendas com uma operação mais enxuta, sem depender de postar o dia inteiro ou improvisar toda semana."
- Action CTA Button: "Quero vender com autoridade" -> scrolls to "#oferta".

2. RESULTS PANEL ("DEPOIS DA IMERSÃO, VOCÊ VAI:")
- 5 Structured Result Articles with SVG icons:
  1. Escolher uma oferta clara para vender com mais confiança
  2. Criar uma mensagem que posiciona seu nome no mercado
  3. Usar IA para produzir conteúdo com mais consistência
  4. Montar uma rotina enxuta de marketing, conteúdo e follow-up
  5. Escalar autoridade sem depender de improviso diário

3. PRACTICAL JOURNEY (3-STEP TIMELINE)
- Title: "Temos um plano prático para você sair do rascunho e entrar no jogo com posicionamento real"
- Step 1 (Left): Clareza estratégica — Defina público, promessa e oferta.
- Step 2 (Right): Execução guiada — Organize sua rotina de conteúdo, atendimento e follow-up.
- Step 3 (Left): Autoridade consistente — Construa presença, repetição e confiança.
- CTA Button: "Quero entrar no jogo com posicionamento real".

4. ABOUT / LEADERSHIP PANEL ("QUEM LIDERA A COMUNIDADE ATLAS")
- Notched luxury dark card with background embossed typography ("ATLAS MARCA") and portrait photo.
- Story Copy:
  "Sou estrategista de posicionamento digital e criei a Comunidade Atlas para ajudar especialistas, mentores e prestadores de serviço a vender com mais clareza... Hoje, meu foco é encurtar seu caminho entre conhecimento, autoridade e fechamento."
- CTA Button: "Quero construir minha autoridade".

5. MODULE UNLOCK CAROUSEL ("VEJA TUDO O QUE VOCÊ VAI DESBLOQUEAR")
- Interactive horizontal carousel with 6 visual cards:
  - Módulo 1: Fundamentos da oferta (Promessa, público e direção)
  - Módulo 2: Posicionamento premium (Mensagem, percepção e autoridade)
  - Módulo 3: Conteúdo com IA (Ideias, roteiros e cadência)
  - Módulo 4: Conversão (CTA, oferta e follow-up)
  - Módulo 5: Vendas consultivas (Reunião, fechamento e objeções)
  - Módulo 6: Escala operacional (Sistema, delegação e consistência)
- Previous / Next navigation buttons and dynamic dot indicators.

6. SPECIAL OFFER SECTION (#oferta)
- Badge: "Condição de entrada hoje".
- Pricing:
  - De ~R$ 497~ por
  - 12x de R$ 19,70 ou R$ 197 à vista
- Benefit bullets with crimson checkmarks.
- Big CTA: "Quero entrar na Comunidade Atlas".
- Security & immediate access guarantees.

7. FAQ ACCORDION (NATIVE HTML DETAILS/SUMMARY)
- Q1: Como vou receber o acesso depois da compra?
- Q2: Esse conteúdo serve para quem ainda não vende todos os dias?
- Q3: Eu preciso já ter audiência grande para aplicar?
- Q4: Por quanto tempo terei acesso ao material?
- Q5: Se eu tiver dúvidas na implementação, vou ficar sozinho?

8. MINIMALIST FOOTER
- Copyright Comunidade Atlas.

JAVASCRIPT LOGIC
- Carousel track movement with touch/drag support and prev/next buttons.
- Scroll reveal animations for sections.
- History replaceState fix.

RECREATION RULES
- Output a single complete HTML file with all CSS and JavaScript embedded.
- Ensure full responsiveness and aesthetic fidelity across all screens.`;
