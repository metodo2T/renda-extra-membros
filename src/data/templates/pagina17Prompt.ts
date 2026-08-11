export const pagina17Prompt = (answers: Record<string, string>) => `Build a full landing page for "Método Conteúdo com IA" using plain HTML, CSS, and vanilla JavaScript. Recreate the existing page with maximum visual fidelity: a modern, conversion-focused layout with a dark aesthetic, vibrant cyan accents (#00a8b5), interactive 3D elements, draggable video carousel, scroll reveal animations, animated guarantee seal, and glowing bonus cards.

PAGE IDENTITY
- Page title: "Método Conteúdo com IA"
- Meta description: "Aprenda a criar conteúdo com inteligência artificial de forma prática, rápida e sem travar na tela em branco."
- Language: pt-BR.
- Page type: high-converting infoproduct sales landing page.
- Visual style: modern dark mode (#000000 / #0a0a0a), sharp borders, glowing cyan accents (#00a8b5), sans-serif typography, and subtle glassmorphism.
- Primary font stack: 'Plus Jakarta Sans' for headings and 'Inter' for body text (loaded from Google Fonts).
- Core fidelity rule: output a single complete HTML file containing all HTML structure, embedded CSS inside a <style> tag, and embedded vanilla JavaScript inside a <script> tag. Preserve all GSAP scroll animations, hover effects, the draggable carousel logic, and the exact section flow.

ASSETS DE IMAGEM E VÍDEO
Use exactly these asset links. Do not use generic placeholders.

1. Hero Background Image (Desktop)
- Type: Image (jpg)
- Link: assets/images/hero1.jpg
- Appears in: Hero Section (Desktop view)

2. Hero Background Image (Mobile)
- Type: Image (png)
- Link: assets/images/heromobile.png
- Appears in: Hero Section (Mobile view, via <picture> tag)

3. Carousel Videos (Results)
- Type: Video (mp4)
- Link 1: assets/videos/V01.mp4
- Link 2: assets/videos/V02.mp4
- Link 3: assets/videos/V03.mp4
- Link 4: assets/videos/V04.mp4
- Link 5: assets/videos/V05.mp4
- Appears in: Video Carousel Section

4. Deliverable 1 Image (Biblioteca de Prompts)
- Type: Image (png)
- Link: assets/images/e1.png
- Appears in: Revolution CTA Section (Card 1)

5. Deliverable 2 Image (Guia Prático)
- Type: Image (png)
- Link: assets/images/e2.png
- Appears in: Revolution CTA Section (Card 2)

6. Bonus Image (Arsenal de Ganchos e CTAs)
- Type: Image (png)
- Link: assets/images/B2.png
- Appears in: Bonus Section (Card 2)

GLOBAL STYLES & DESIGN TOKENS
:root {
  --bg: 0 0% 4%;
  --surface: 0 0% 8%;
  --text: 0 0% 96%;
  --muted: 0 0% 53%;
  --stroke: 0 0% 12%;
  --accent: 0 0% 96%;
  --brand: 185 100% 35%;
  --brand-strong: 185 100% 30%;
  --brand-soft: 185 100% 62%;
  --font-body: 'Inter', sans-serif;
  --font-display: 'Plus Jakarta Sans', sans-serif;
}

SECTION ORDER & STRUCTURE

1. HERO SECTION
- Main wrapper: <section class="hero" id="heroSection">
- Background: <picture> tag switching between hero1.jpg and heromobile.png based on media queries, with object-fit: cover.
- Content:
  - 3 Seals/Badges (Sem bloqueio criativo, Sem depender de agência, Sem perder horas escrevendo)
  - Main Title: "Use este método e <span style='color:#00a8b5'>crie conteúdo com IA</span> todos os dias sem travar"
  - Subtitle: "Chega de olhar para a tela sem saber o que postar. Com um processo validado e prompts prontos, você cria ideias, roteiros, legendas e peças completas com IA em minutos."
  - CTA Button: "Quero criar conteúdo com IA hoje" with a glowing gradient ring.

2. VIDEO CAROUSEL SECTION (Resultados Reais)
- Title: "Veja o tipo de conteúdo que você vai conseguir criar"
- Layout: A horizontal track of 5 vertical video elements. Drag/swipe behavior using JS. The videos should autoplay on hover/focus or loop silently.

3. PAIN POINTS SECTION
- Title: "Você já passou por alguma dessas situações na hora de criar conteúdo?"
- Items: 4 list items with a custom icon, appearing sequentially on scroll.
- Bottom Highlight: "É por isso que existe o Método Conteúdo com IA"
- Marquee: A continuous CSS text marquee scrolling across the screen reading "Método Conteúdo com IA •" over and over.

4. BENEFITS FX SECTION (Primary)
- Title: "Com o método você vai:"
- Layout: 4 grid cards with corner border accents (.bfx-corner) and central SVG icons.
- CTA Button: "Quero acessar o método agora"

5. HOW IT WORKS SECTION
- Title: "Veja como funciona na prática"
- Layout: 3 steps horizontally or stacked on mobile (01: Escolha um objetivo, 02: Use os prompts guiados, 03: Refine e publique).

6. DELIVERABLES SECTION (Revolution CTA)
- Title: "Veja tudo o que você vai receber"
- Layout: 3 cards. First two cards contain the deliverables images (e1.png and e2.png). Third card (Checklist) contains a div element for a 3D animation context (id="checklist3d").

7. BONUS SECTION
- Eyebrow: "Bônus Exclusivos"
- Title: "E ainda tem mais"
- Layout: 2 glowing bonus cards (BÔNUS 01: Calendário de Conteúdo IA with a CSS/SVG animated publish window, BÔNUS 02: Arsenal de Ganchos e CTAs with image B2.png).
- CTA Button: "Acessar o Método agora"

8. WHO IS THIS FOR SECTION (Benefits FX Secondary)
- Title: "O método de conteúdo com IA é pra você que:"
- Layout: 4 grid cards with check/play/arrow icons.

9. BANNER HIGHLIGHT SECTION
- Layout: A central glowing glassmorphism card stating "Quando finalizei este método, me disseram para cobrar no mínimo R$ 197...". Includes a list with crossed-out/strike-through text items showing expensive alternatives.

10. OFFER SECTION
- Features: 5 checkmarked items.
- Pricing layout: "De R$149,00" crossed out. "por apenas R$ 49,00" highly visible.
- Main CTA Button: "Quero criar conteúdo com IA hoje" with an arrow icon.

11. GUARANTEE SECTION
- Layout: A 3D-styled '7' seal icon beside text "7 dias de Garantia Incondicional".

12. COMPARISON SECTION
- Title: "Agora, você tem duas opções"
- Layout: Side-by-side comparison cards (Option 1 with red/bad icons, Option 2 with green/good icons).

13. FAQ SECTION & FOOTER
- Title: "Perguntas Frequentes"
- Layout: 5 <details> elements acting as an accordion.
- Footer: Simple copyright text.

JAVASCRIPT & ANIMATION BEHAVIOR
- Use GSAP & ScrollTrigger for reveal animations (.reveal, .reveal-left, .blur-in, .name-reveal). Elements should fade and slide up when scrolling into view.
- Draggable Carousel: Implement custom vanilla JS logic to handle touch/mouse drag over the video track container to scroll horizontally smoothly.
- FAQ Accordion: Add logic to close other open <details> tags when one is opened.
`;
