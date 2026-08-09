export const pagina07Prompt = `Build a static responsive landing page for the Brazilian legal training product "Aprenda a Reverter Prisões Preventivas" using plain HTML, CSS, and JavaScript with GSAP, ScrollTrigger, and SplitText. The goal is to recreate the existing page with maximum visual fidelity, including layout, typography, assets, animations, scroll behavior, interactions, and responsive behavior.

PAGE IDENTITY
- Page title: "Aprenda a Reverter Prisões Preventivas"
- Page type: legal education/training sales landing page.
- Language: Portuguese, pt-BR.
- Visual style: refined legal editorial page with warm paper backgrounds, muted gray body text, gold accents, cinematic justice imagery, large calm typography, square process cards, sticky scroll reading moment, and restrained premium offer card.
- Overall background: warm paper #f1f0ed, with major sections using #f5efe2 and layered translucent beige gradients.
- Primary font: Sora, loaded from Google Fonts, weights 300,400,500,600,700,800.
- Core visual rules: no navigation bar, no logo, no extra sections, no stock replacements, no decorative icons, no rounded cards except the CTA buttons, and no color palette changes.

ASSETS DE IMAGEM E VIDEO
Use exatamente estes assets por link. Nao use placeholders visuais, banco de imagens, midia gerada ou alternativas parecidas. Preencha apenas o campo "Link" de cada item. Os assets estao em ordem de aparicao na pagina.

1. Video de fundo do hero com estatua da justica
   Tipo: video
   Link: https://res.cloudinary.com/dalwymbky/video/upload/v1783170031/hero2_zkooqn.mp4
   Aparece em: primeira dobra da pagina, como fundo absoluto da secao hero.
   Detalhes: video horizontal 16:9, 1920x1080, aproximadamente 3,97s, 30fps. Mostra uma estatua da Justica com venda e balanca, posicionada principalmente no lado direito, sobre fundo claro de parede texturizada, deixando grande area vazia clara no lado esquerdo para o texto.
   Renderizacao: <video> com autoplay, muted, loop, playsinline, aria-hidden true. Desktop: position absolute, inset 0, z-index -1, width 100%, height 100%, object-fit cover, object-position center center. Tablet/mobile: anchored to bottom, width auto, object-fit contain, object-position center bottom, shifted left with transform, height 74% at <=920px and 58% at <=560px.

2. Imagem de fundo da secao de resultados
   Tipo: imagem
   Link: https://res.cloudinary.com/dalwymbky/image/upload/v1783170030/i1_k3q50x.jpg
   Aparece em: pseudo-elemento de fundo da secao "Resultados".
   Detalhes: imagem horizontal 1376x768 com balanca de justica de cobre sobre blocos de marmore, coluna classica desfocada a esquerda, livros juridicos e pergaminho a direita, tons branco/cinza/cobre.
   Renderizacao: applied as a full-section background image in ::before, center/cover no-repeat, filter blur(8px) saturate(0.96), transform scale(1.06), opacity 0.78. A translucent radial/linear overlay sits above it in ::after.

Fonts and external CSS:
1. Google Font: Sora
   URL/import: https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&display=swap
   Used for: every visible text element, including hero, sticky statement, process cards, result cards, and offer card.

2. GSAP core
   URL/import: use GSAP version 3.13.0 when possible.
   Used for: hero scroll blur/fade/scale, scroll-triggered outcome item entrance, sticky philosophy word reveal, and process card motion.

3. ScrollTrigger
   URL/import: use ScrollTrigger version 3.13.0 when possible.
   Used for: scroll-linked animation triggers and scrubbed motion.

GLOBAL STYLES
- Use <!DOCTYPE html>, <html lang="pt-BR">, UTF-8 charset, and responsive viewport meta.
- Define these CSS variables on :root:
  --gold: #c99a3d;
  --gold-light: #f1cd77;
  --ink: #4b4b4b;
  --muted: #696969;
  --paper: #f1f0ed;
  --philosophy-bg: #f5efe2;
  --philosophy-ink: #4b4b4b;
  --philosophy-muted: #696969;
  --philosophy-accent: #c99a3d;
  --word-dim: 0.18;
  --process-bg: #f5efe2;
  --process-card: #fbfaf6;
  --process-ink: #4b4b4b;
  --process-muted: #696969;
  --process-accent: #c99a3d;
  --effect-gap: 2.5rem;
  --font-display: "Sora", Arial, Helvetica, sans-serif;
  --font-body: "Sora", Arial, Helvetica, sans-serif;
- Apply box-sizing: border-box to all elements.
- html: min-width: 320px, scroll-behavior: smooth.
- body: margin 0, min-width 320px, overflow-x hidden, color var(--ink), background var(--paper), font family var(--font-body), font weight 400, -webkit-font-smoothing: antialiased.

DESIGN TOKENS
- Gold: #c99a3d
- Light gold: #f1cd77
- Main ink: #4b4b4b
- Muted text: #696969
- Hero eyebrow gray: #777777
- Paper: #f1f0ed
- Warm section background: #f5efe2
- Light card surface: #fbfaf6
- Button text: #21170b
- CTA gradient: linear-gradient(135deg, #f1cd77, #c99a3d)
- Hero CTA border: 1px solid rgba(108, 77, 24, 0.2)
- Gold card borders: rgba(201, 154, 61, 0.8) for process cards, rgba(201, 154, 61, 0.42) for outcome cards, and rgba(201, 154, 61, 0.72) for the offer card.
- Button shadow: 0 18px 42px rgba(140, 95, 20, 0.20-0.25), stronger on hover.
- Square content cards: process, outcome, and offer cards have no rounded corners.
- CTA buttons: hero button has border-radius: 14px on desktop and 999px on mobile; outcomes and offer buttons use 999px.

SECTION ORDER
1. Sticky hero with video background and CTA.
2. Sticky philosophy statement with scroll-revealed words.
3. "O método em três passos" process section with scroll-revealed title/subtitle and moving cards.
4. "Resultados" section with blurred legal image background and four outcome cards.
5. Offer/pricing section with centered purchase card.

REUSABLE COMPONENTS

Component: Gold CTA Button
- Purpose: used as the primary action in the hero, outcomes section, and offer card.
- Structure: inline anchor styled as an inline-flex button.
- Styling: centered content, bold Sora, gold diagonal gradient, dark text #21170b, border 1px solid rgba(108, 77, 24, 0.2), box shadow, no icon.
- Hover interaction: translateY(-2px), stronger shadow, filter: saturate(1.04-1.05).
- Focus interaction: outline: 3px solid rgba(201, 154, 61, 0.38), outline-offset: 4px.
- Responsive behavior: hero CTA becomes full width, 52px high, pill-shaped, and font-size: 0.95rem at <=560px. Outcomes CTA becomes full width at <=560px. Offer CTA is always full width.

Component: Process Card
- Purpose: repeated method step cards in the process section.
- Count: exactly 3.
- Structure: article.effect-card with .effect-card__heading, h3, number span, first hr, bold first paragraph, explanatory second paragraph, final hr.
- Styling: background #fbfaf6, color #4b4b4b, border 1px solid rgba(201,154,61,0.8), square corners, no shadow, transform-origin: center center, will-change: transform.
- Mobile padding: 0.625rem 1rem 1.25rem.
- Desktop padding at >=1024px: 0.625rem 1.375rem 1.375rem.

Component: Outcome Card
- Purpose: repeated result capability cards.
- Count: exactly 4.
- Structure: article.outcome-item containing a numeric span and a paragraph.
- Styling: centered grid, gap 18px, min-height 100%, padding 28px 24px 30px, text-align center, border 1px solid rgba(201,154,61,0.42), background rgba(251,250,246,0.72), inset highlight box-shadow: inset 0 0 0 1px rgba(255,255,255,0.18).
- Number: gold, display font, font-size: clamp(2rem, 3vw, 2.9rem), weight 700, line-height 1. A gold gradient bar appears below it: width 64px, height 4px, border-radius 999px, margin top 16px.

SECTION 1: HERO
- Selector/class: section.hero, labelled by #hero-title.
- Height: min-height: 100svh on desktop; min-height: 760px at <=920px; min-height: 720px at <=560px.
- Positioning: position: sticky, top: 0, z-index: 0, isolation: isolate, overflow hidden.
- Background: Asset 1 as absolute video background.
- Main elements:
  - Eyebrow text: Audiência de Custódia
  - H1 text: Aprenda a reverter prisões preventivas já na audiência de custódia
  - Subtitle text: Um passo a passo objetivo para atuar com segurança desde o primeiro minuto e evitar os erros que mantêm réus presos por falha da defesa, não por falta de provas.
  - CTA text: Quero conhecer o método (href="#metodo")

SECTION 2: PHILOSOPHY WORD REVEAL
- Selector/class: section.philosophy, id bloco-2.
- Text content: Você estudou Direito Penal, mas ninguém te ensinou o que fazer quando a liberdade de alguém depende da sua próxima frase. Na audiência, cada palavra pesa
- Emphasis phrases: Direito Penal, liberdade de alguém, próxima frase, cada palavra pesa.

SECTION 3: PROCESS / THREE STEPS
- Selector/class: section.process-effect-section, id bloco-3.
- Title: O método em três passos
- Subtitle: Um roteiro objetivo para chegar à audiência com leitura, estratégia e segurança em cada decisão.
- Cards:
  1. Passo 1 / 01: A preparação que começa antes da audiência
  2. Passo 2 / 02: O roteiro completo da audiência
  3. Passo 3 / 03: Estratégias que aumentam suas chances de sucesso

SECTION 4: OUTCOMES / RESULTADOS
- Selector/class: section.outcomes, id bloco-4.
- Background: Asset 2 in ::before with blur(8px) saturate(0.96) scale(1.06) opacity 0.78.
- Title: Ao concluir o treinamento você será capaz de:
- Cards: 4 outcome cards with numbers 01, 02, 03, 04 and gold bar divider.
- CTA: Quero começar agora (href="#hero-title")

SECTION 5: OFFER / PRICING
- Selector/class: section.offer, id metodo.
- Card: aside.offer__card.
- Tag: Acesso imediato
- Price: 12x de R$ 19,70 ou R$ 197,00 à vista
- Items:
  - Módulo completo do método em 3 passos
  - Checklist prático para pré-audiência
  - Estrutura de argumentos para pedidos de liberdade
  - Acesso por 12 meses para assistir no seu ritmo
- CTA: Quero garantir minha vaga (href="#hero-title")
- Note: Pagamento seguro e acesso liberado logo após a confirmação.
`;
