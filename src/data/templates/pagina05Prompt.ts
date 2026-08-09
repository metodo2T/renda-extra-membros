export const pagina05Prompt = `Build a full landing page for "Aprenda a Reverter Prisões Preventivas" using plain HTML, CSS, and vanilla JavaScript. Recreate the existing page with maximum visual fidelity: a sophisticated editorial legal sales page featuring warm cream parchment aesthetics, gold accents, full-bleed sticky hero with video background, a word-by-word quote reveal on scroll ("Você estudou Direito Penal..."), 3-step structured process cards with numbered headings and scroll reveal, outcome deliverables list, and a clean high-conversion offer card.

PAGE IDENTITY
- Page title: "Aprenda a Reverter Prisões Preventivas"
- Meta description: "Um passo a passo objetivo para atuar com segurança desde o primeiro minuto e evitar erros na audiência de custódia."
- Language: pt-BR.
- Page type: Legal / Law Professional Training Landing Page.
- Visual style: Editorial luxury minimalism, warm cream parchment background (#F1F0ED, #F5EFE2), refined charcoal typography (#4B4B4B, #696969), warm gold gradients (#C99A3D to #F1CD77), and modern Sora typography.

ASSETS
- Hero Background Video: "https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-man-typing-on-a-laptop-keyboard-41486-large.mp4" (or local video)
- Hero Poster Image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1200"

CORE FIDELITY RULES
- Output a single complete HTML file containing all HTML, embedded CSS in a <style> tag, and embedded vanilla JavaScript in a <script> tag.
- Include the routing fix script inside <head>: history.replaceState(null, '', '/');
- Integrate GSAP and ScrollTrigger via CDN for the word-by-word quote reveal and card reveal animations.
- Ensure full mobile responsiveness and smooth scrolling interactions.

DEPENDENCIES & HEAD
- Preconnect: https://fonts.googleapis.com, https://fonts.gstatic.com
- Fonts: Sora:wght@300;400;500;600;700;800
- CDN Scripts:
  - GSAP: https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js
  - ScrollTrigger: https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js

DESIGN TOKENS & CSS VARIABLES
:root {
  --gold: #c99a3d;
  --gold-light: #f1cd77;
  --ink: #4b4b4b;
  --muted: #696969;
  --paper: #f1f0ed;
  --philosophy-bg: #f5efe2;
  --process-bg: #f5efe2;
  --process-card: #fbfaf6;
  --font-body: 'Sora', sans-serif;
  --font-display: 'Sora', sans-serif;
}

SECTIONS BREAKDOWN

1. HERO SECTION (STICKY FULL-BLEED)
- Eyebrow: "Audiência de Custódia"
- Title: "Aprenda a reverter prisões preventivas já na audiência de custódia"
- Subtitle: "Um passo a passo objetivo para atuar com segurança desde o primeiro minuto e evitar os erros que mantêm réus presos por falha da defesa, não por falta de provas."
- CTA Button: "Quero conhecer o método" -> scrolls to "#metodo".
- Background video/poster overlay with gentle dimming.

2. PHILOSOPHY / STATEMENT SECTION (WORD-BY-WORD SCROLL REVEAL)
- Sticky viewport with large editorial statement:
  "Você estudou Direito Penal, mas ninguém te ensinou o que fazer quando a liberdade de alguém depende da sua próxima frase. Na audiência, cada palavra pesa"
- Animated smoothly word-by-word as user scrolls down.

3. 3-STEP PROCESS CARDS SECTION ("O MÉTODO EM TRÊS PASSOS")
- Header:
  - Kicker: "etapas | 03 passos"
  - Title: "O método em três passos"
  - Subtitle: "Um roteiro objetivo para chegar à audiência com leitura, estratégia e segurança em cada decisão."
- 3 Process Cards:
  - Passo 1 (01): "A preparação que começa antes da audiência" — Como analisar o auto de prisão; o que identificar antes de entrar na sala; os detalhes que podem fortalecer sua defesa.
  - Passo 2 (02): "O roteiro completo da audiência" — Como iniciar sua atuação; quais argumentos apresentar; quando insistir na liberdade provisória; quais erros nunca cometer.
  - Passo 3 (03): "Estratégias que aumentam suas chances de sucesso" — Quais fundamentos utilizar; como construir uma defesa mais convincente; como transmitir segurança perante juiz e Ministério Público.

4. OUTCOMES SECTION ("AO CONCLUIR O TREINAMENTO VOCÊ SERÁ CAPAZ DE:")
- Eyebrow: "Resultados"
- 4 Numbered Deliverables:
  - 01: Identificar pontos frágeis no auto de prisão e transformar detalhes técnicos em argumentos defensivos mais consistentes.
  - 02: Conduzir sua fala na audiência com ordem, clareza e segurança, sem depender de improviso no momento decisivo.
  - 03: Escolher os fundamentos adequados para sustentar liberdade provisória, relaxamento da prisão ou medidas cautelares.
  - 04: Evitar erros comuns que enfraquecem a defesa e aumentam o risco de manutenção da prisão preventiva.
- Button: "Quero começar agora".

5. OFFER SECTION (#metodo)
- Tag: "Acesso imediato"
- Price:
  - 12x de R$ 19,70
  - ou R$ 197,00 à vista
- Benefit list:
  - Módulo completo do método em 3 passos
  - Checklist prático para pré-audiência
  - Estrutura de argumentos para pedidos de liberdade
  - Acesso por 12 meses para assistir no seu ritmo
- Big Button: "Quero garantir minha vaga"
- Security Note: "Pagamento seguro e acesso liberado logo após a confirmação."

JAVASCRIPT & ANIMATION LOGIC
- Register GSAP ScrollTrigger plugin.
- Animate the philosophy statement words smoothly from dim (opacity 0.2) to full gold/ink (opacity 1) during scroll.
- Staggered card entrance on the 3 process cards.
- History replaceState fix for iframe compatibility.

RECREATION RULES
- Output a single complete HTML file with all CSS and JavaScript embedded.
- Ensure pure aesthetic fidelity and smooth scrolling interactions.`;
