export const projetoTreinoEmCasaPrompt = `Build a full landing page for "Projeto Treino em Casa" using plain HTML, CSS, and vanilla JavaScript. Recreate the existing page with maximum visual fidelity. This is not a generic fitness landing page: it is a static recreation of a Nuxt/Tailwind-style page with a black/lime glass visual system, huge blurred glow fields, Petrona editorial hero typography, Jersey 10 pixel labels, Iconify-style pixel mask icons, masked gradient borders, pulsing green CTA rings, and scroll reveal animations.

PAGE IDENTITY
- Page title: "Projeto Treino em Casa - Treinos para fazer em casa com consistencia"
- Meta keywords: "treino em casa, treino para emagrecer, exercicios em casa, treino sem academia, plano de treino, condicionamento fisico, treino guiado"
- Language: pt-BR.
- Page type: long-form sales page for a home workout program.
- Visual style: dark CSS-only fitness/productivity page, black base, lime/emerald glow halos, glass cards, pixel icons, serif hero headline, pixel display section labels, green CTAs, masked border highlights, and quiet scroll motion.
- Overall background: #070707, with fixed emerald/lime radial glows behind the whole page.
- Primary fonts: DM Sans for body/UI; Petrona for hero and the final serif line; Jersey 10 for pixel labels; Shadows Into Light loaded as a support face.
- Core fidelity rule: port the original visual recipe and exact DOM/layering behavior. Do not ask the builder to invent a new design. The page must look like the original Nuxt/Tailwind export, with no visible photos, videos, product mockups, navbar, footer, testimonials, or extra sections.

ASSETS DE IMAGEM E VIDEO

Esta pagina nao usa imagens ou videos visiveis no corpo da landing page. Nao invente imagens, videos, mockups, fotos de treino, banco de imagens ou midia gerada. A composicao visual deve ser recriada com CSS, fontes, gradientes, blur glows, SVGs inline, data-URIs e icones por mascara.

Fonts and external CSS:
1. DM Sans
   URL/import: use local or hosted WOFF/WOFF2 variable files and regular weights 100-1000, normal and italic where available.
   Used for: body text, paragraphs, buttons, cards, price, FAQ and most UI.
2. Petrona
   URL/import: use local or hosted WOFF/WOFF2 variable files and regular weights 100-900, normal and italic where available.
   Used for: hero headline and final CTA serif line.
3. Jersey 10
   URL/import: use local or hosted WOFF/WOFF2 files, weight 400.
   Used for: pixel-style display labels, especially "Projeto Treino em Casa", "4 semanas", "Veja como funciona", and "// o que voce recebe".
4. Shadows Into Light
   URL/import: use local or hosted WOFF/WOFF2 files, weight 400.
   Used for: support font face only; keep it available even if not visible.
5. Iconify-style CSS mask icons
   URL/import: inline CSS mask data-URIs or an equivalent local icon CSS implementation.
   Used for: all pixel icons in comparison, outcomes, deliverables, guarantee and FAQ support UI.

NOTAS PARA TROCA DE ASSETS
- Nao ha campos "Link" de imagem/video para preencher nesta pagina porque o corpo visivel nao usa midia externa.
- Mantenha todos os icones SVG inline, data-URIs de mascara, checks SVG, chevrons, canvas decorativo transparente e gradientes CSS como assets nativos do codigo.
- Nao substitua os glows, cards, icones, fundos ou borders por imagens estaticas.
- Se usar favicon ou Open Graph image, trate como metadado, nao como elemento visual da landing page.

DEPENDENCIES
- Plain HTML, CSS and vanilla JavaScript only.
- No framework is required in the recreated build, but the output must preserve the original Nuxt/Tailwind utility-class feel.
- No image runtime, no video runtime, no carousel library, no WebGL renderer.
- Use IntersectionObserver for reveal animations.
- Use native <details> / <summary> for FAQ.
- Use CSS keyframes for CTA pulse rings.
- Respect prefers-reduced-motion: reduce by disabling reveal transforms and CTA pulse animation.

GLOBAL STYLES
- Use a Tailwind-like reset: universal box-sizing: border-box, zero margins for headings/p/lists, media display block, links inherit color, buttons inherit font.
- html: normal scrolling, no horizontal overflow.
- body: margin 0; background #070707; color #fff; font-family "DM Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; line-height 1.5; overflow-x hidden; overflow-y scroll; antialiased.
- Include the original single-scroll fix behavior:
  - html { overflow: initial !important; }
  - body { max-width: 100%; overflow-x: hidden !important; overflow-y: scroll !important; }
  - #__nuxt, #__nuxt > div, .craveless-bg, .craveless-bg > div { height: auto !important; overflow: visible !important; }
- Root page wrapper:
  - <div class="craveless-bg"><div class="min-h-screen text-white font-sans overflow-x-hidden">...</div></div>
  - .craveless-bg must be position relative, min-height 100vh, background #070707, color #fff, overflow visible.
- Font helper classes:
  - .font-serif { font-family: "Petrona", Georgia, "Times New Roman", serif !important; }
  - .font-pixel { font-family: "Jersey 10", "Times New Roman", serif !important; }
  - .font-handwritten { font-family: "Shadows Into Light", cursive !important; }
- Keep visible copy unaccented exactly as listed. Do not "fix" voce, comecar, metodo, execucao, etc.

DESIGN TOKENS
- --juicy-dark: #070707
- --juicy-card-bg: #1c1b1b
- --juicy-card-dark: #181818
- --battery-full: #76b545
- --battery-good: #a8d15f
- --battery-medium: #f5a623
- --battery-low: #f56423
- --battery-critical: #d0021b
- --gradient-green: #76b545
- --gradient-dark-green: #5dc988
- --gradient-lime: #a8d15f
- --gradient-teal: #4a9b7e
- --gradient-emerald: #3dbd8f
- Body/card blacks: #070707, #181818, #1c1b1b, #09090b.
- Main text: #ffffff.
- Muted text: rgba(255,255,255,.50), rgba(255,255,255,.60), rgba(255,255,255,.70), rgba(255,255,255,.75), rgba(255,255,255,.90).
- Green accents: #4ade80, #22c55e, #16a34a, #10b981, #059669, #76b545, #a8d15f.
- Red comparison accents: #f87171, #ef4444, rgba(239,68,68,.3), rgba(127,29,29,.4), rgba(127,29,29,.2).
- Glass card background: rgba(28,27,27,.4).
- Dark card gradient: linear-gradient(to bottom right, rgba(24,24,24,.80), rgba(24,24,24,.60)).
- Global glow colors:
  - #76b545, #a8d15f, emerald/green/lime translucent gradients.
- Button gradient:
  - Define .bg-gradient-juicy-darker as a dark green/lime gradient, e.g. linear-gradient(135deg, #5a9129 0%, #76b545 45%, #3dbd8f 100%), tuned to read like the source CTA.
- Card radii:
  - large cards: 24px (rounded-3xl)
  - icons: 16px to 24px
  - mobile CTA: 12px
  - desktop CTA: 999px
- Main masked border overlay:
  - position:absolute; inset:0; pointer-events:none; border-radius:inherit; padding:1px;
  - background: linear-gradient(135deg, rgba(134,239,172,.4) 0%, rgba(255,255,255,.25) 15%, rgba(255,255,255,.1) 30%, transparent 50%);
  - -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); -webkit-mask-composite: xor; mask-composite: exclude;

SECTION ORDER
1. Hero
2. Before / After Comparison
3. Four-Week Outcomes
4. Results Unlock / Support Materials
5. How It Works
6. Deliverables
7. Offer / Pricing
8. Guarantee
9. FAQ
10. Final CTA

REUSABLE COMPONENTS

Component: Fixed Background Glow Field
- Purpose: full-page atmosphere behind all sections.
- Structure: first child inside .min-h-screen:
  <div class="fixed inset-0 -z-10 pointer-events-none">...</div>.
- Layers:
  1. 500px x 500px circle, background: #76b545, border-radius 999px, blur 150px, opacity .40, left: calc(50% - 400px), top: -200px.
  2. 800px x 800px circle, background: #a8d15f, border-radius 999px, blur 150px, opacity .10, right: calc(50% - 600px), top: -400px.
  3. 1400px x 1000px oval, background: linear-gradient(135deg, rgba(74,222,128,.25), rgba(52,211,153,.20), rgba(163,230,53,.15)), border-radius 999px, blur 250px, opacity .50, centered at left: 50%; top: 15%; transform: translateX(-50%).
  4. Transparent decorative <canvas class="absolute inset-0 pointer-events-none" style="opacity:.02"></canvas>; no active renderer required.
- This fixed glow system is mandatory. Without it the page becomes flat/generic.

Component: Green CTA Button
- Purpose: primary conversion action used in hero, comparison, pricing, and final CTA.
- DOM: <a href="{{CTA_LINK}}"><button class="cta-button"><span class="relative z-10 ...">TEXT</span><div class="button-overlay"></div></button></a>.
- Desktop/standard style:
  - position: relative; display: inline-block; border-radius: 999px; padding: 16px 32px; font-weight: 600; color: #fff; font-size: 18px;
  - background: var(--bg-gradient-juicy-darker) or .bg-gradient-juicy-darker.
  - box-shadow: inset 0 1px 2px rgba(255,255,255,.5), 0 0 0 4px rgba(255,255,255,.1).
  - text-shadow 0px 1px 3px rgba(0,0,0,.2), 0px 1px 0px rgba(0,0,0,.1).
  - transition all 200ms.
  - hover shadow: inset 0 1px 2px rgba(255,255,255,.25), outer ring 0 0 0 10px rgba(255,255,255,.12).
  - active: translateY(.5px), ring returns to 4px.
  - inner overlay div: absolute inset 0, rounded-full, white, opacity 0, mix-blend-overlay, pointer-events none.
- Mobile hero style:
  - full-width anchor with padding-left/right: 16px.
  - button width 100%, max-width 320px, margin auto, border-radius: 12px, background: linear-gradient(90deg,#16a34a,#059669), padding 16px 24px, font-size 16px, box-shadow large.
- CTA pulse:
  - JS adds .cta-pulse to all buttons.
  - .cta-pulse { position: relative; isolation: isolate; }
  - .cta-pulse::after: content ""; absolute; inset -6px; border-radius inherit; border 1px solid rgba(134,239,172,.4); opacity 0; transform scale(.92); pointer-events none; animation ctaPulseRing 2.8s ease-out infinite; delay from --pulse-delay.
  - Keyframes: 0% opacity 0 scale .92; 20% opacity .45; 70%/100% opacity 0 scale 1.14.

Component: Glass Card With Masked Border
- Purpose: all comparison, outcomes, support, method, deliverable, offer, guarantee, FAQ and final CTA cards.
- Structure:
  - Outer .relative.
  - Optional absolute background layer: absolute inset-0 rounded-3xl bg-gradient-to-br from-juicy-card-dark/80 to-juicy-card-dark/60 backdrop-blur-xl.
  - Content layer: relative flex flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] p-8.
  - Border overlay: absolute inset 0, rounded-3xl, pointer-events none, masked gradient.
- Important: the masked border overlay is not a normal border. It creates a thin diagonal green/white highlight only on edges. Preserve the mask-composite: exclude technique.
- Hover: only subtle border/brightness changes. Do not add large transforms that change layout.

Component: Border Gradient Method Card
- Purpose: three "como funciona" cards.
- Base CSS:
  - .border-gradient { background-clip: padding-box; border: 2px solid transparent; position: relative; }
  - .border-gradient::before: content ""; position absolute; inset 0; margin -2px; border-radius inherit; z-index -1; background linear-gradient(180deg,#303030 15%,#181818).
  - .border-gradient::after: content ""; position absolute; inset 0; margin -2px; border-radius inherit; pointer-events none; background linear-gradient(30deg,#76b545,#a8d15f,#5dc988); mix-blend-mode plus-lighter; opacity .05; transition opacity .2s ease.
  - hover ::after opacity .15 and ::before background linear-gradient(180deg,#404040 15%,#181818).

Component: Iconify Pixel Icons
- Use CSS mask classes equivalent to the source:
  - i-pixelarticons:mood-sad
  - i-pixelarticons:mood-happy
  - i-pixelarticons:close
  - i-pixelarticons:battery-charging
  - i-pixelarticons:chart-delete
  - i-pixelarticons:code
  - i-pixelarticons:visible
  - i-pixelarticons:heart
  - i-pixelarticons:zap
  - i-pixelarticons:eye-closed
  - i-streamline-pixel:computers-devices-electronics-laptop
  - i-streamline-pixel:business-products-deal-handshake
  - i-streamline-pixel:business-product-report-present-grahp (keep this original misspelled icon class if using class names)
  - i-streamline-pixel:interface-essential-heart-favorite
  - i-streamline-pixel:social-rewards-heart-like-circle
  - i-streamline-pixel:ecology-clean-battery
  - i-streamline-pixel:food-drink-coffee-cup
- Icon styling: inline-block, currentColor background, mask-repeat no-repeat, mask-size 100% 100%.
- Common sizes: comparison icons 28px; outcome/deliverable icons 40px; guarantee heart 48px.

Component: Scroll Reveal System
- Include CSS exactly equivalent:
  - :root { --reveal-distance: 28px; --reveal-duration: .8s; --reveal-ease: cubic-bezier(.22,.61,.36,1); }
  - .scroll-reveal: opacity 1; transform none; filter blur(0); transition-property opacity, transform, filter; transition-duration var(--reveal-duration); transition-timing-function var(--reveal-ease); transition-delay var(--reveal-delay,0ms).
  - .js-scroll-reveal .scroll-reveal: opacity 0; transform translate3d(0,var(--reveal-distance),0) scale(.985); filter blur(8px); will-change opacity, transform, filter.
  - .js-scroll-reveal .scroll-reveal.is-visible: opacity 1; transform none; filter none.
  - .reveal-left: transform translate3d(-36px,14px,0) scale(.985).
  - .reveal-right: transform translate3d(36px,14px,0) scale(.985).
  - .reveal-zoom: transform translate3d(0,36px,0) scale(.94).
  - .reveal-card.is-visible: transition-duration .95s.
- JavaScript:
  - const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  - const shouldAnimate = !prefersReduced && document.visibilityState === "visible" && "IntersectionObserver" in window;
  - If false, do nothing; page remains visible.
  - Add .js-scroll-reveal to document.documentElement.
  - Register all sections except the first with variant zoom, delay Math.min(sectionIndex * 45, 220).
  - Inside each section register .grid > div, .space-y-4 > div, .rounded-2xl, and details.
  - Card variants cycle: index 0 left, index 1 right, index 2 up.
  - Card delay: 90 + i * 70, extra class reveal-card.
  - Register first five h2, h3, p text blocks with variant up, delay 80 + i * 60.
  - Add .cta-pulse to a[href="{{CTA_LINK}}"] button, button; set --pulse-delay to (i % 4) * .35s.
  - IntersectionObserver threshold .18 and rootMargin 0px 0px -8% 0px.
  - Also call revealAll after 1800ms to avoid stuck hidden elements.

SECTION 1: HERO
- Section class equivalent: relative min-h-[calc(100vh-56px)] flex flex-col items-center justify-center px-6 pt-4 sm:pt-[70px] sm:pb-40.
- Background: none on the section itself beyond the fixed glow field. Do not add a hero image, video, gym photo or pattern.
- Decorative hero glows:
  - wrapper relative mb-6 mt-8.
  - left glow: absolute 400px x 400px, gradient linear-gradient(135deg, rgba(34,197,94,.60), rgba(16,185,129,.40), transparent), radius 999px, blur 140px, left -160px, top about -168px.
  - right glow: absolute 400px x 400px, gradient linear-gradient(225deg, rgba(163,230,53,.50), rgba(74,222,128,.30), transparent), radius 999px, blur 140px, right -160px, top about -168px.
- H1 structure:
  - <h1> uses Petrona / .font-serif.
  - Classes/values: font-extralight, text-align center, text-[28px], sm:text-[40px], lg:text-7xl, tracking-tight, line-height: 1.12, max-width: 22ch mobile, sm:max-width: 64rem, margin-bottom 16px mobile / 20px desktop.
  - Line 1 text: Treine em casa com acompanhamento guiado
  - Wrap acompanhamento guiado in a medium-weight span.
  - Line 2 text: e construa o corpo que voce quer sem depender de academia.
  - Put sem depender de academia. in a medium-weight span.
  - Second paragraph inside h1 has margin-top -4px mobile and about 10px desktop, tracking tight/tighter.
- Subtitle:
  - Text exactly: Mesmo com rotina corrida, voce segue treinos de 15 a 30 minutos com metodo claro para perder gordura, definir e ganhar condicionamento.
  - Font DM Sans, text center, font-size: 14px mobile, 24px desktop, line-height relaxed, max-width 48rem, color rgba(255,255,255,.70) mobile and rgba(255,255,255,.60) desktop, margin-bottom 32px.
- Desktop CTA:
  - Visible only at min-width: 640px.
  - wrapper flex column center, gap 16px, margin-bottom 32px, width 100%.
  - Button text: Quero comecar meus treinos
  - Price note below: Acesso imediato por apenas R$ 49, font 14px, color rgba(255,255,255,.50), weight 500.
- Mobile CTA:
  - Visible below 640px only.
  - wrapper flex column center, gap 16px, margin top/bottom 32px, width 100%.
  - Button text: Quero comecar meus treinos
  - Price note below same text.
- Critical hero rules:
  - The first viewport must feel minimal, centered and airy, with only text, CTA, price note and glow fields.
  - Do not add cards, badges, nav, logos, photos, icons, background grids or fitness illustrations to the hero.

SECTION 2: BEFORE / AFTER COMPARISON
- Section id: o-que-muda.
- Classes/values: position: relative; padding: 0 24px; margin-top: 32px, desktop margin-top 40px.
- Container max-width 56rem.
- Heading:
  - O que muda com o
  - line break
  - Projeto Treino em Casa
  - Style: text center, font-weight 500, font-size 20px mobile / 36px desktop.
  - Project name uses Jersey 10, font-size 30px mobile / 48px desktop.
- Grid: one column mobile, two columns from 768px, gap 24px, margin-top 40px mobile / 48px desktop.
- Left card:
  - Outer relative.
  - Background absolute inset 0, rounded 24px, linear-gradient(135deg, rgba(69,10,10,.40), rgba(127,29,29,.20)), backdrop blur.
  - Content padding 32px, overflow hidden, rounded inner.
  - Header icon holder 48px x 48px, radius 16px, background rgba(239,68,68,.20), icon i-pixelarticons:mood-sad, size 28px, color #f87171.
  - Title: Se voce..., font-size 24px, semibold, color rgba(254,202,202,.90).
  - Bullet icon/text rows:
    1. Icon i-pixelarticons:close; text Comeca a treinar por alguns dias e para por falta de direcao.
    2. Icon i-pixelarticons:battery-charging; text Nao sabe quais exercicios fazer nem em que ordem.
    3. Icon i-pixelarticons:chart-delete; text Tem pouco tempo e acha que so academia da resultado.
    4. Icon i-pixelarticons:code; text Quer treinar em casa, mas sem arriscar execucao errada.
  - Bullet text: font-size 16px, line-height 1.625, color rgba(255,255,255,.70).
  - Border overlay gradient red: rgba(239,68,68,.30) 0%, rgba(255,255,255,.15) 25%, transparent 50%.
- Right card:
  - Background absolute inset 0, rounded 24px, linear-gradient(135deg, rgba(5,46,22,.40), rgba(6,78,59,.20)), backdrop blur.
  - Header icon holder 48px x 48px, background rgba(34,197,94,.20), icon i-pixelarticons:mood-happy, color #4ade80.
  - Title: Com o Projeto Treino em Casa voce vai, font-size 24px, semibold, color rgba(187,247,208,.90).
  - Bullet rows:
    1. Icon i-pixelarticons:visible; text Seguir um plano pronto de treinos para fazer em casa.
    2. Icon i-pixelarticons:heart; text Treinar em sessoes curtas, mesmo com rotina corrida.
    3. Icon i-pixelarticons:zap; text Aprender a executar os movimentos com seguranca e tecnica.
    4. Icon i-pixelarticons:eye-closed; text Evoluir com consistencia e ver resultado no espelho.
  - Bullet text: font-size 16px, line-height 1.625, color rgba(255,255,255,.90), weight 500.
  - Border overlay gradient green: rgba(134,239,172,.40) 0%, rgba(255,255,255,.20) 25%, transparent 50%.
- CTA below grid: margin-top 24px, centered, button text QUERO COMECAR HOJE.

SECTION 3: FOUR-WEEK OUTCOMES
- Section classes/values: padding: 80px 24px.
- Container max-width 72rem.
- Header centered, margin-bottom 48px.
- H2:
  - O que voce pode conquistar em 
  - pixel span 4 semanas.
  - Font size 30px mobile / 36px desktop; weight 500; margin-bottom 16px.
  - Pixel span 40px mobile / 48px desktop.
- Paragraph:
  - Sem promessas milagrosas: aqui voce segue um plano realista para evoluir com consistencia e enxergar progresso no espelho e na disposicao.
  - Font-size 19px inline style in source; color rgba(255,255,255,.70); max-width 48rem; centered; line-height relaxed.
- Grid: one column mobile, three columns desktop, gap 32px.
- Cards: relative glass cards, dark gradient background, icon top, h3/p, masked border overlay.
- Cards:
  1. Icon i-pixelarticons:zap; title Mais energia no dia a dia; copy Treinos curtos que melhoram folego, mobilidade e disposicao para sua rotina.
  2. Icon i-pixelarticons:visible; title Corpo mais definido; copy Com frequencia e progressao, voce comeca a notar mudancas reais em postura e composicao corporal.
  3. Icon i-pixelarticons:heart; title Rotina que voce consegue manter; copy Nada de plano impossivel: voce treina no seu ritmo e cria consistencia sem se punir.
- Card icon: 40px, color #4ade80, margin-bottom 16px.
- Card title: font-size 20px, semibold, margin-bottom 12px.
- Card copy: color rgba(255,255,255,.70), line-height relaxed.

SECTION 4: RESULTS UNLOCK / SUPPORT MATERIALS
- Section padding: 64px 24px.
- Container max-width 64rem.
- Header centered.
- H2: O que destrava seus resultados mais rapido, font-size 30px mobile / 36px desktop, weight 500.
- Copy: Voce entra com acesso completo ao metodo e ainda recebe materiais de apoio para nao quebrar a consistencia nas primeiras semanas.
- Small card grid: one column mobile, three columns desktop, gap 20px, margin-bottom 32px.
- Small card style: rounded 16px, padding 20px, border 1px solid rgba(255,255,255,.10), background rgba(0,0,0,.20).
- Cards:
  1. Calendario semanal pronto / Para voce saber exatamente quando e o que treinar.
  2. Guia de execucao segura / Movimentos explicados para evitar erro e treinar com confianca.
  3. Plano anti-desistencia / Checklist simples para manter frequencia mesmo nos dias corridos.
- Closing statement: Se voce aplicar por 30 dias, sua rotina de treino deixa de ser tentativa e vira processo.

SECTION 5: HOW IT WORKS
- Section id: como-funciona.
- Classes/values: padding-bottom: 64px; margin-top: 40px; padding-left/right: 32px mobile, 24px desktop; background: linear-gradient(to bottom, transparent, rgba(0,0,0,.20)); and desktop top/bottom padding 80px.
- Container max-width 72rem.
- H2 centered:
  - pixel span Veja como funciona
  - text  na pratica
  - Font size 30px mobile / 36px desktop; pixel span 40px mobile / 48px desktop.
- Paragraph:
  - Em poucos passos, voce sai da improvisacao e entra em uma rotina pratica que gera resultado de verdade.
  - Inline font-size 19px, color rgba(255,255,255,.70), max-width 42rem, margin-bottom 48px.
- Grid: one column mobile, three columns desktop, gap 32px.
- Method cards:
  - Use the Border Gradient Method Card component.
  - Content padding: 80px top, 32px sides/bottom.
  - Background rgba(28,27,27,.4), backdrop blur, rounded 24px, overflow hidden.
  - Add an internal absolute gradient from-black/0 to-transparent.
  - Number: Jersey 10, font-size 40px, color #4ade80, display block, margin-bottom 16px.
  - Title: font-size 24px, semibold, margin-bottom 12px.
  - Copy: color rgba(255,255,255,.90), line-height relaxed.
  - Add masked green/white border overlay with rgba(134,239,172,.4) 0%, rgba(255,255,255,.25) 15%, rgba(255,255,255,.1) 30%, transparent 50%.
- Steps:
  1. 01 / Acesse o plano completo / Entre na area de alunos e veja exatamente o que fazer em cada dia.
  2. 02 / Siga os treinos guiados / Treinos objetivos de 15 a 30 minutos, com orientacao simples para executar com seguranca.
  3. 03 / Evolua semana a semana / Acompanhe sua evolucao, ajuste a intensidade e mantenha resultados reais no seu ritmo.

SECTION 6: DELIVERABLES
- Section id: o-que-recebe.
- Padding: 80px 24px.
- Container max-width 64rem.
- Header centered, margin-bottom 48px.
- H2:
  - pixel span only: // o que voce recebe
  - font-size 40px mobile / 48px desktop, weight 500, margin-bottom 16px.
- Paragraph:
  - Tudo o que voce precisa para sair do zero e manter consistencia.
  - Inline font-size 19px, color rgba(255,255,255,.70), max-width 42rem, centered.
- Grid: one column mobile, two columns desktop, gap 32px, margin-bottom 48px.
- Card style:
  - Outer relative.
  - Absolute background rounded 24px, linear-gradient(135deg, rgba(24,24,24,.80), rgba(24,24,24,.60)), backdrop blur.
  - Content relative flex flex-col overflow-hidden, rounded inner, padding 32px.
  - Icon 40px, color #4ade80, margin-bottom 16px.
  - Title 20px, semibold, margin-bottom 12px.
  - Copy color rgba(255,255,255,.70), line-height relaxed.
  - Masked border overlay same green/white diagonal gradient.
- Cards:
  1. Icon i-streamline-pixel:computers-devices-electronics-laptop; title Plano de treinos em casa; copy Treinos organizados por nivel e objetivo para voce saber exatamente o que fazer.
  2. Icon i-streamline-pixel:business-products-deal-handshake; title Videos de execucao dos exercicios; copy Aprenda postura, ritmo e tecnica para treinar com seguranca e evitar erros comuns.
  3. Icon i-streamline-pixel:business-product-report-present-grahp; title Progressao para iniciantes e intermediarios; copy Evolua semana a semana com orientacoes claras para nao estagnar nos resultados.
  4. Icon i-streamline-pixel:interface-essential-heart-favorite; title Checklist de rotina e consistencia; copy Um plano simples para manter frequencia mesmo com pouco tempo durante a semana.

SECTION 7: OFFER / PRICING
- Section id: preco.
- Classes/values: padding: 64px 24px mobile, 80px 24px desktop.
- Container max-width 48rem.
- Badge wrapper centered, margin-bottom 32px.
- Badge:
  - Rounded-full linear-gradient(90deg, rgba(34,197,94,.20), rgba(16,185,129,.20)), backdrop blur, padding 4px 16px.
  - Text Oferta especial, font-size 14px, semibold, color #4ade80.
  - Masked border overlay with rgba(134,239,172,.6) 0%, rgba(255,255,255,.3) 20%, rgba(255,255,255,.15) 40%, transparent 60%.
- Offer card:
  - max-width 36rem, centered.
  - Rounded 24px, padding 32px, flex column gap 24px.
  - Background rgba(28,27,27,.4), border 1px solid rgba(255,255,255,.10), backdrop blur.
  - Hidden-on-mobile badge at top right: ACESSO IMEDIATO, gradient green to emerald, white text, 10px bold, padding 4px 12px, rounded-full, z-index 10.
  - Masked border overlay with rgba(134,239,172,.5) 0%, rgba(255,255,255,.3) 20%, rgba(255,255,255,.15) 40%, transparent 60%.
- Heading:
  - Hoje voce pode comecar a treinar em casa com uma condicao especial.
  - font-size 24px mobile / 30px desktop, weight 500, centered, margin-bottom 16px.
- Subcopy:
  - Acesso imediato, sem mensalidade e com risco zero por 7 dias.
  - color rgba(255,255,255,.70), centered, margin-top -4px, margin-bottom 8px.
- Checklist:
  - vertical gap 12px.
  - each item flex, gap 12px.
  - check SVG 20px, color #76b545, flex-shrink 0, margin-top 2px.
  - texts:
    1. Plano de treinos em casa
    2. Videos curtos com execucao passo a passo
    3. Progressao semanal para evoluir com seguranca
    4. Acesso durante 1 ano a todas as atualizacoes
    5. 7 dias de garantia
- Price block:
  - old price de R$147, font-size 24px, weight 500, color rgba(255,255,255,.40), line-through, centered.
  - label POR APENAS, font-size 14px, color #4ade80, semibold, margin-bottom 4px.
  - current price R$49, font-size 60px, bold, color #76b545, margin-bottom 24px.
- CTA: full-width button text QUERO COMECAR MEUS TREINOS.

SECTION 8: GUARANTEE
- Section padding: 48px 24px.
- Container max-width 36rem.
- Card:
  - relative, rounded 24px, padding 32px, text center.
  - background rgba(28,27,27,.4), border 1px solid rgba(255,255,255,.10), backdrop blur.
  - masked border overlay with rgba(134,239,172,.4) 0%, rgba(255,255,255,.2) 25%, transparent 50%.
- Icon: i-streamline-pixel:interface-essential-heart-favorite, 48px x 48px, color #4ade80, centered, margin-bottom 16px.
- Title: Garantia total, font-size 24px mobile / 30px desktop, semibold, margin-bottom 16px.
- Copy:
  - Voce tem 7 dias para testar o programa completo. Se nao se adaptar, e so pedir reembolso e devolvemos 100% do valor.
  - font-size 16px mobile / 18px desktop, line-height relaxed, color rgba(255,255,255,.70).

SECTION 9: FAQ
- Section id: faq.
- Padding: 80px 24px.
- Container max-width 48rem.
- Header centered, margin-bottom 64px.
- H2:
  - Desktop: Perguntas frequentes.
  - Mobile: Perguntas then line break then frequentes.
  - font-size 36px mobile / 48px desktop, weight 500.
  - frequentes is bold.
- FAQ list gap 16px.
- Each FAQ card:
  - relative, rounded 24px, padding 24px.
  - background rgba(28,27,27,.4), border 1px solid rgba(255,255,255,.10), backdrop blur.
  - no additional visible border overlay in source FAQ cards.
- Use native <details class="group">.
- Summary:
  - list marker removed.
  - display flex, align-items center, justify-content space-between.
  - cursor pointer.
  - font-size 18px, semibold.
  - chevron SVG 20px, color rgba(255,255,255,.50), rotates 180deg when open.
- Answer paragraph:
  - margin-top 16px, color rgba(255,255,255,.60), line-height relaxed.
- Items:
  1. Question Preciso de academia ou equipamentos caros para comecar?
     Answer Nao. Voce pode comecar com pouco espaco e usando o peso do proprio corpo. Se tiver acessorios simples, melhor ainda.
  2. Question Sou iniciante. Vou conseguir acompanhar os treinos?
     Answer Sim. O plano comeca do basico, com evolucao gradual. Voce avanca no seu ritmo, com orientacao clara em cada etapa.
  3. Question Quanto tempo por dia eu preciso para treinar?
     Answer De 15 a 30 minutos por treino ja e suficiente para ter resultado quando voce mantem consistencia.
  4. Question Quantas vezes por semana devo treinar?
     Answer A recomendacao e treinar de 3 a 5 vezes por semana, conforme seu nivel e disponibilidade.
  5. Question Por quanto tempo tenho acesso e como funciona a garantia?
     Answer Voce tem 1 ano de acesso com atualizacoes. E ainda conta com 7 dias de garantia para testar sem risco.

SECTION 10: FINAL CTA
- Section classes/values: padding-left/right: 24px, desktop top/bottom 80px.
- Container max-width 56rem.
- Card:
  - Outer relative.
  - Absolute inset 0 rounded 24px background linear-gradient(135deg, rgba(22,163,74,.20), rgba(5,150,105,.15), transparent), backdrop blur.
  - Content relative, flex column, overflow hidden, rounded inner, padding: 48px 12px mobile, 40px 64px desktop, text center.
  - Masked border overlay with rgba(134,239,172,.5) 0%, rgba(255,255,255,.3) 20%, rgba(255,255,255,.15) 40%, transparent 60%.
- Heading:
  - Pare de adiar.
  - mobile line break
  - serif span  Seu treino pode comecar hoje.
  - base font-size 36px mobile / 48px desktop, weight 500.
  - serif span uses Petrona, font-size: 44px mobile / 60px desktop, tracking tighter, slight margin-left -4px.
- Paragraph:
  - Treinos guiados, progressao clara e rotina objetiva - tudo o que voce precisa para transformar seu corpo sem sair de casa.
  - font-size: clamp(14px, 2.5vw, 20px).
  - color rgba(255,255,255,.70), max-width 42rem, centered, margin-bottom 40px.
- CTA text: QUERO COMECAR HOJE.
- Note: 7 dias de garantia - Acesso imediato - Apenas R$49, font-size 14px, color rgba(255,255,255,.50), margin-top 16px.

INTERACTIONS AND MOTION
- Page load: content is visible by default; JS only hides/reveals if reduced motion is false and IntersectionObserver is available.
- Scroll reveal: implement the exact Scroll Reveal System above. Do not replace it with random fade animations.
- CTA pulse: implement the exact ctaPulseRing ring around all buttons with staggered --pulse-delay.
- FAQ: native details open/close. Do not force single-open; original allows multiple open items.
- Button hover: outer ring expands from 4px to 10px, inner white overlay may appear on hover through opacity transition.
- Card hover: maintain subtle border brightness only. Avoid large lifts, rotations, or scale effects.
- Reduced motion: disable reveal transitions and CTA pulse. Page remains fully visible.

RESPONSIVE RULES
- Mobile default:
  - hero headline 28px, max-width 22ch.
  - hero subtitle 14px.
  - mobile hero CTA full width, max-width 320px, rounded 12px.
  - all grids stack to one column.
  - comparison section margin-top 32px.
  - section horizontal padding 24px except method mobile uses 32px.
  - FAQ title breaks after Perguntas.
  - final CTA uses compact horizontal padding 12px.
- At min-width: 640px:
  - hero top padding 70px and bottom padding 160px.
  - hero headline 40px until large breakpoint.
  - desktop CTA appears; mobile CTA hides.
  - comparison title scales to 36px and pixel project name to 48px.
- At min-width: 768px:
  - comparison grid two columns.
  - outcome grid three columns.
  - method grid three columns.
  - deliverables grid two columns.
  - H2 sizes become 36px/48px depending section.
- At large desktop:
  - hero H1 becomes 72px (lg:text-7xl).
  - keep centered composition; do not stretch hero text beyond 64rem.

IMPLEMENTATION NOTES
- The page can be implemented as index.html, assets/css/style.css, and assets/js/main.js, but preserve the original class-driven structure.
- It is acceptable to write semantic classes instead of every Tailwind utility, but the resulting computed values must match the source. Prefer utility-like class names for clarity.
- Preserve href="{{CTA_LINK}}" on all conversion CTAs exactly.
- Use inline SVG checkmarks for pricing checklist and chevrons for FAQ.
- Use CSS mask data-URIs or inline SVG spans for Iconify pixel icons.
- The fixed decorative canvas remains transparent and inert; it is there only to match the original DOM/layering.
- Do not add a navbar, footer, testimonials, social proof, countdown, product images, app screenshots, exercise photos, video, or decorative sections.

STRICT RECREATION RULES
- Do not invent new sections or remove existing sections.
- Do not make a generic fitness page. Recreate the original CSS/glow/glass Nuxt/Tailwind page.
- Do not add visible image or video assets.
- Do not replace the fixed glow field with flat background color, photos, stock media, generated media, or a texture image.
- Do not change section order.
- Do not change text content, capitalization, prices, CTA labels, FAQ questions, FAQ answers, or the {{CTA_LINK}} placeholder.
- Do not "correct" the unaccented Portuguese copy.
- Do not change the font roles: DM Sans body/UI, Petrona hero/final serif, Jersey 10 pixel labels.
- Preserve black/emerald/lime palette, huge blurred radial glows, glass card backgrounds, masked gradient borders, pixel icons, CTA pulse rings, scroll reveal script, FAQ native details behavior, border radii, spacing, and mobile stacking.
- If a detail is not specified, infer conservatively from the existing Nuxt/Tailwind source and keep the same dark green glass visual language.
`;
