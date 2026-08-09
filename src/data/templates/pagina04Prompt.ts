export const pagina04Prompt = `Build a full landing page for "Violão do Zero" using plain HTML, CSS, and vanilla JavaScript. Recreate the existing page with maximum visual fidelity: an engaging musical educational sales page with modern purple & violet accents (#7C3AED, #A855F7), three.js or canvas interactive musical visual elements, step-by-step learning progression, song repertory showcase, student testimonials with star ratings, pricing offer box, and guarantee seal.

PAGE IDENTITY
- Page title: "Violão do Zero — Aprenda a tocar violão do zero"
- Meta description: "Aprenda a tocar violão do zero com um método prático e direto ao ponto."
- Language: pt-BR.
- Page type: Musical Education & Hobby Infoproduct Sales Page.
- Visual style: Dark modern tech aesthetic, deep violet and indigo glows (#000000, #0B0813, #150E24), electric purple gradients (#7C3AED, #9B5CFF), golden rating stars (#FFD800), clean sans-serif typography (Degular / Inter / Poppins).

ASSETS & ICONS
- Musical instruments / chord diagrams / fretboard vectors.
- Star rating icons (★★★★★ 4.9/5 estrelas).
- Guarantee Badge: 3D guarantee seal with 7-day refund guarantee.

CORE FIDELITY RULES
- Output a single complete HTML file containing all HTML, embedded CSS in a <style> tag, and embedded vanilla JavaScript in a <script> tag.
- Include the routing fix script inside <head>: history.replaceState(null, '', '/');
- Ensure all interactive elements and accordion toggles work with zero runtime errors.

DEPENDENCIES & HEAD
- Preconnect: https://fonts.googleapis.com, https://fonts.gstatic.com
- Fonts: Poppins:wght@300;400;500;600;700;800;900

DESIGN TOKENS & CSS VARIABLES
:root {
  --bg-dark: #07050d;
  --bg-card: #120c1f;
  --bg-card-hover: #1c1330;
  --text-main: #f8fafc;
  --text-muted: #a39cb5;
  --accent-purple: #7c3aed;
  --accent-purple-glow: #9b5cff;
  --accent-gold: #ffd800;
  --border-subtle: rgba(124, 58, 237, 0.2);
  --font-main: 'Poppins', sans-serif;
}

SECTIONS BREAKDOWN

1. HERO SECTION
- Eyebrow: "🎸 O MÉTODO PRÁTICO PARA INICIANTES"
- Headline: "Aprenda a tocar suas primeiras músicas no violão em menos de 30 dias"
- Subtitle: "Um método direto ao ponto, sem teoria chata ou enrolação: domine acordes, ritmos e batidas mesmo que nunca tenha pegado em um violão antes."
- Primary Action Button: "QUERO APRENDER A TOCAR VIOLÃO" -> scrolls to "#oferta".
- Social proof banner: Mais de 3.500 alunos tocando suas músicas favoritas.

2. WHY TRADITIONAL CLASSES FAIL (THE 3 TRAPS)
- Trap 1: Teoria excessiva antes de tocar uma nota.
- Trap 2: Falta de ritmo e dedos doendo por falta de postura correta.
- Trap 3: Desistência rápida por falta de repertório legal.

3. THE "VIOLÃO DO ZERO" METHOD (3 PHASES)
- Phase 1: Postura, Dedilhado e os 4 Acordes Mágicos.
- Phase 2: As 3 Batidas Essenciais (Pop, Rock, Sertanejo, MPB).
- Phase 3: Repertório Guiado de 50 Músicas Famosas e Fáceis.

4. WHAT IS INCLUDED (DELIVERABLES)
- Módulo 1: Primeiros Passos e Afinação
- Módulo 2: O Ritmo Perfeito na Mão Direita
- Módulo 3: Troca Rápida de Acordes Sem Travar
- Módulo 4: Dicionário de Acordes e Cifras Simplificadas
- Módulo 5: Como Tocar de Ouvido e Cantar Junto

5. SPECIAL BONUSES
- Bônus 1: E-book com 100 Cifras Simplificadas para Iniciantes
- Bônus 2: Aulão de Troca de Cordas e Manutenção Básica
- Bônus 3: Suporte Direto com o Professor para Tirar Dúvidas

6. SPECIAL OFFER SECTION (#oferta)
- Special entry condition.
- Pricing:
  - De ~R$ 197~ por
  - 12x de R$ 9,74 ou R$ 97 à vista
- Benefit checklist with purple checkmarks.
- Big Vibrant Button: "QUERO MINHA VAGA COM DESCONTO".
- 7 Dias de Garantia Incondicional: Se não aprender a tocar sua primeira música, 100% do dinheiro de volta.

7. FAQ ACCORDION
- Q1: Não tenho nenhum conhecimento de música, consigo acompanhar?
- Q2: Preciso de um violão caro para começar?
- Q3: Quanto tempo por dia preciso treinar?
- Q4: Como recebo meu acesso ao curso?

8. CLEAN FOOTER
- Copyright Violão do Zero & All Rights Reserved.

RECREATION RULES
- Output a single complete HTML file with all CSS and JavaScript embedded.
- Ensure full responsiveness and smooth animations.`;
