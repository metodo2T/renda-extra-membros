export const violaoDoZeroPrompt = `Build a full landing page for "Violão do Zero" using plain HTML, CSS, and vanilla JavaScript. Recreate the existing page with maximum visual fidelity: a dark purple/black guitar-course sales page with a Three.js/WebGL dotted wave hero canvas, purple glow accents, Degular typography, testimonial marquee, before/after comparison cards, urgency block, 3-step method cards with lamp reveal, deliverables grid, pre-offer value explanation, pricing card, 7-day guarantee seal, FAQ details accordion, and minimal dark footer.

PAGE IDENTITY
- Page title: "Violão do Zero — Aprenda a tocar violão"
- Meta description: "Aprenda a tocar violão do zero com um método prático e direto ao ponto"
- Language: pt-BR.
- Page type: long-form digital course sales landing page for beginners learning acoustic guitar.
- Visual style: black/deep aubergine interface, luminous purple glows, white and pale gray text, electric purple highlights, compact Elementor-like sales blocks, glassy dark cards, Three.js dotted wave hero background, bold CTA pills, social proof carousel, and dark premium pricing.
- Overall background: #0D0816.
- Primary font: custom "Degular" 400 and 500, with Sans-serif fallback.
- Core fidelity rule: the hero must use the same dark/purple Three.js procedural dotted wave and radial glow, not a static image or 2D approximation. Preserve the Degular font, purple #9b5cff accents, black/aubergine backgrounds, testimonial marquee, comparison cards, urgency flow, card reveal animations, pricing typography, guarantee seal SVG, FAQ styling, and exact Portuguese copy.

ASSETS DE IMAGEM E VIDEO

Use exatamente estes assets por link. Nao use placeholders visuais, banco de imagens, midia gerada ou alternativas parecidas. Preencha apenas o campo "Link" de cada item. Os assets estao em ordem de aparicao na pagina.

1. Selo circular de garantia de 7 dias
   Tipo: imagem
   Link: https://res.cloudinary.com/dalwymbky/image/upload/v1782391166/garantia_gqpidc.svg
   Aparece em: secao "Garantia total", acima do titulo e texto de garantia.
   Detalhes: SVG quadrado 416x416; selo circular escuro com aneis, numero "7" no centro, texto circular e gradientes roxos/claros.
   Renderizacao: <img> dentro do image-box de garantia; width: clamp(180px, 20vw, 290px) no desktop, clamp(150px, 48vw, 220px) no mobile; height: auto; centralizado; filtro saturate(1.12) brightness(1.05) contrast(1.03) drop-shadow(0 0 22px rgba(192,132,252,.28)).

DEPENDENCIES
- Plain HTML, CSS, and vanilla JavaScript.
- No framework required.
- Three.js via CDN (https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js) for hero procedural WebGL dotted wave.
- Mandatory routing fix in <head>: <script>try{history.replaceState(null,'','/');}catch(e){}</script>
- IntersectionObserver for scroll-driven animations and lamp reveals.
- Native <details> / <summary> for FAQ.

GLOBAL STYLES & DESIGN TOKENS
- Page background: #0D0816.
- Secondary dark: #100A1A.
- Dark card surface: #12141a.
- Almost-black card surface: rgba(8,10,15,.96), rgba(4,6,10,.97).
- Purple accent: #9b5cff.
- Purple soft: #c084fc.
- Purple pale: #D8B4FE and #F3E8FF.
- Text primary: #ffffff.
- Text body: #E5E5E5, #dfe5e7, rgba(255,255,255,.80).
- Text muted: rgba(255,255,255,.52), rgba(255,255,255,.35).
- Red danger: #FF4545 and #ff4d4f.
- Star yellow: #FFD800.
- Main hero glow: radial-gradient(circle, rgba(192,132,252,.56) 0%, rgba(155,92,255,.34) 42%, rgba(13,8,22,0) 78%).
- Guarantee background: linear-gradient(180deg,#0D0816 0%, #100A1A 46%, #0D0816 100%).
- Offer/pricing background: linear-gradient(180deg,#0D0816 0%, #120B1E 50%, #0D0816 100%).
- Primary CTA fill: white / light button with black text.
- Card radius: 12px, 14px, 16px, 18px, 20px.

SECTION ORDER
1. Hero / Three.js Dotted Surface
2. Testimonials Marquee
3. Before / After Comparison
4. CTA Button Divider
5. Urgency Impact Block
6. Method / 3 Steps (with dynamic purple lamp beam)
7. Deliverables Grid (4 cards with corner indicators)
8. Pre-Offer Value Card
9. Offer / Pricing (R$ 49, de R$ 147)
10. Guarantee (Selo 7 dias)
11. FAQ (Accordion)
12. Minimal Footer`;
