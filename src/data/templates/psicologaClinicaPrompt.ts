export const psicologaClinicaPrompt = `Build a full landing page for a clinical psychologist using plain HTML, CSS, and vanilla JavaScript. Recreate the existing page with maximum visual fidelity: a calm, premium psychology/therapy page with a rounded full-screen video hero, soft translucent navigation, editorial glass overlays, muted blue-gray typography, clinical service cards, a video CTA banner, care-method cards, a green manifesto strip, and a final "Quem sou eu" profile section.

PAGE IDENTITY
- Page title: "Psicóloga Clínica | Cuidado, escuta e acolhimento"
- Meta description: "Página institucional e de vendas para psicóloga clínica com posicionamento acolhedor, profissional e focado em conversão."
- Language: pt-BR.
- Page type: long-form institutional/sales landing page for a clinical psychologist.
- Visual style: soft therapeutic editorial, rounded full-bleed media panels, warm off-white backgrounds, translucent glass cards, muted slate/blue-gray text, gentle green accents, and subtle scroll/load reveal motion.
- Overall background: #f0f0f0.
- Primary font: custom "Helvetica Regular" loaded from local or hosted WOFF2/WOFF files, with Helvetica/Arial fallback.
- Core fidelity rule: preserve the rounded video hero and CTA video banner as real autoplaying background videos, not static images. Preserve the soft glass overlays, section card radii, responsive video positioning, scroll reveal animations, and the JavaScript content overrides in the future/protocol sections.

ASSETS DE IMAGEM E VIDEO

Use exatamente estes assets por link. Nao use placeholders visuais, midia gerada, banco de imagens ou alternativas parecidas. Preencha apenas o campo "Link" de cada item. Os assets estao em ordem de aparicao na pagina.

1. Video principal do hero
   Tipo: video
   Link:https://res.cloudinary.com/dalwymbky/video/upload/v1782348406/hero1_arb8ja.mp4
   Aparece em: primeira dobra da pagina, como video de fundo em tela cheia dentro do card arredondado do hero.
   Detalhes: MP4 horizontal 1920x1080, 30fps, duracao aproximada de 9.15s; visual calmo e acolhedor usado atras do texto principal.
   Renderizacao: elemento \`<video class="hero-video">\` absoluto \`inset: 0\`, \`width: 100%\`, \`height: 100%\`, \`object-fit: cover\`, \`object-position: 65% center\` no mobile/default e \`center center\` em desktop >=1024px; \`autoplay\`, \`muted\`, \`loop\`, \`playsinline\`, sem controles.

2. Video do banner de chamada
   Tipo: video
   Link:https://res.cloudinary.com/dalwymbky/video/upload/v1782348402/v3_hgipc8.mp4
   Aparece em: secao CTA com texto "Você não precisa dar conta de tudo sozinho."
   Detalhes: MP4 horizontal 1920x1080, 30fps, duracao aproximada de 7.01s; video suave de atmosfera terapeutica/calmante.
   Renderizacao: elemento \`<video class="cta-video">\` absoluto \`inset: 0\`, \`width: 100%\`, \`height: 100%\`, \`object-fit: cover\`, \`object-position: center\`, \`autoplay\`, \`muted\`, \`loop\`, \`playsinline\`, sem controles, com overlay gradiente acima.

3. Imagem da psicóloga / seção de perfil
   Tipo: imagem
   Link:https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1254&q=80
   Aparece em: janela visual da secao final "Quem sou eu".
   Detalhes: PNG quadrado 1254x1254; psicologa sentada em poltrona com bloco de anotacoes, consultorio acolhedor, janela com paisagem ao entardecer, luz quente e tons lilas/azulados.
   Renderizacao: usada como \`background-image\` em \`.protocol-window-image\`; \`background-size: cover\`; \`background-position: center top\`; nao renderizar como \`<img>\` visivel.

Fonts and external CSS:
1. Helvetica Regular
   URL/import: local or hosted WOFF2 and WOFF files.
   Used for: all visible text, navigation, buttons, cards, and section copy.

NOTAS PARA TROCA DE ASSETS
- Preencha apenas os campos "Link" da lista acima.
- Os videos e imagens devem ser usados somente via URL.
- Nao substitua os videos por imagens estaticas.
- Preserve o enquadramento e o \`object-position\` dos videos, porque a composicao do texto depende do posicionamento da midia.
- A imagem da psicologa deve aparecer como fundo da janela visual da ultima secao, nao como imagem solta no DOM.
- SVGs inline de icones, overlays em CSS, gradientes, dots de janela e efeitos de reveal sao elementos nativos do codigo, nao assets externos.

DEPENDENCIES
- Plain HTML, CSS, and vanilla JavaScript only.
- No framework and no animation library.
- Use CSS transitions plus IntersectionObserver for scroll reveal.
- Use DOMContentLoaded JavaScript for load reveal delays, scroll reveal, and the original content overrides.
- Respect \`prefers-reduced-motion: reduce\` by disabling transitions/animations and showing all animated elements immediately.

GLOBAL STYLES
- Define \`@font-face\`:
  - \`font-family: "Helvetica Regular"\`
  - WOFF2 first, WOFF fallback
  - \`font-weight: 400\`
  - \`font-style: normal\`
  - \`font-display: swap\`
- \`:root\` variables:
  - \`--page-bg: #f0f0f0\`
  - \`--ink-main: #5e6470\`
  - \`--accent-deep: rgba(30, 50, 90, 0.9)\`
  - \`--accent-soft: rgba(30, 50, 90, 0.8)\`
  - \`--border-soft: rgba(255, 255, 255, 0.2)\`
  - \`--font-helvetica: "Helvetica Regular", Helvetica, Arial, sans-serif\`
- Universal \`box-sizing: border-box\`.
- \`html { scroll-behavior: smooth; }\`
- \`body\`: margin 0; min-height 100vh; overflow-x hidden; background #f0f0f0; color #5e6470; font-family var(--font-helvetica); text-rendering optimizeLegibility; antialiased.
- \`button, a\`: inherit font.
- Links remove underline and inherit color.
- Media elements display block.

SECTION ORDER
1. Rounded Video Hero
2. Psychology Clinical Cards
3. Video CTA Banner
4. Care Method / Future Cards
5. Manifesto Strip
6. Profile / Protocol Section

REUSABLE COMPONENTS

Component: Pill Button
- Used for hero CTA, CTA banner buttons, and manifesto button.
- Base style: inline-flex, align-items center, justify-content center, gap .65rem, border none, cursor pointer, border-radius 999px, text-decoration none, transition transform 180ms ease, background-color 180ms ease, color 180ms ease, box-shadow 180ms ease.
- Hero primary style: height 3.35rem, padding 0 1.3rem 0 1.45rem, background rgba(255,255,255,.58), color rgba(33,42,58,.88), border 1px solid rgba(255,255,255,.55), backdrop-filter blur(18px), box-shadow 0 14px 34px rgba(55,67,86,.12).
- Hover: translateY(-1px), stronger white background, slightly deeper shadow.
- Arrow icon is inline SVG arrow-up-right inside a circular translucent icon holder.

Component: Reveal Animations
- \`.animate-on-load\`: starts opacity 0 and reveals after its \`data-delay\`.
- \`.animate-on-scroll\`: starts opacity 0, \`transform: translateY(44px) scale(.985)\`, filter blur(16px for \`.blur-on-scroll\`), and reveals once when intersecting.
- \`.scroll-from-left\`: initial translateX(-52px).
- \`.scroll-from-right\`: initial translateX(52px).
- Visible state: opacity 1, transform none, filter none.
- Transition: about 750ms cubic-bezier(.2,.75,.25,1), with blur using about 800ms.
- IntersectionObserver threshold .2 and rootMargin \`0px 0px -8% 0px\`; fallback to visible immediately if unsupported.

SECTION 1: ROUNDED VIDEO HERO
- Outer wrapper \`.hero-wrapper\`: min-height 100vh; padding .75rem; background #f0f0f0; display flex; align-items stretch; justify-content center.
- Main panel \`.hero-shell\`: position relative; width 100%; max-width 1536px; min-height calc(100vh - 1.5rem); overflow hidden; border-radius 1.5rem; isolation isolate; color #2d3442.
- At >=768px, hero panel radius becomes 3rem.
- Background video \`.hero-video\`: absolute inset 0; z-index -3; object-fit cover; object-position 65% center; filter none.
- At >=1024px, video object-position becomes center center.
- Overlay \`.hero-overlay\`: absolute inset 0; z-index -2; pointer-events none; combine:
  - vertical soft light/depth gradient from \`rgba(240,240,240,.2)\` to \`rgba(23,31,45,.14)\`
  - radial white glow at top center: \`circle at 50% 18%\`, white-heavy center fading out by 68%
  - horizontal side light gradient, with stronger white on the left and transparent center/right.
- Content \`.hero-content\`: relative z-index 10; min-height calc(100vh - 1.5rem); display flex; flex-direction column; justify-content space-between.

Hero Navigation:
- \`.hero-nav\`: display flex; align-items center; justify-content space-between; gap 1rem; padding \`1rem 1rem 0\`.
- At desktop >=768px, padding \`1.4rem clamp(1.2rem, 2vw, 2.25rem) 0\`.
- Mobile logo text: \`Psicóloga\`; visible on mobile, hidden at >=768px; color rgba(44,53,68,.82), font-size .95rem.
- Center menu \`.hero-menu\`: hidden on mobile; flex at >=768px; align-items center; justify-content center; gap 2rem; padding .72rem 1.65rem; border-radius 999px; background rgba(255,255,255,.36); border 1px solid rgba(255,255,255,.45); backdrop-filter blur(18px); box-shadow 0 18px 45px rgba(49,58,73,.08).
- Menu links exactly: \`Sobre\`, \`Abordagem\`, \`Atendimentos\`, \`Contato\`.
- Links with chevrons: \`Abordagem\` and \`Contato\`, using small inline SVG down/right chevron.
- Menu typography: font-size .875rem; color rgb(45,45,45); line-height 1; opacity .9.
- Nav CTA text: \`Agendar conversa\`.

Hero Text:
- \`.hero-center\`: flex 1; display flex; align-items center; justify-content center; text-align center.
- \`.hero-text\`: position relative; width 100%; max-width 64rem; margin auto; padding \`2rem 1.5rem 0\`.
- Pseudo-element behind copy: absolute centered translucent glow panel, width min(55rem, 92vw), height min(17rem, 58vw), border-radius 2.25rem, white radial/linear background, filter blur(22px), opacity .78, z-index -1.
- Badge text: \`Atendimento online e presencial\`.
- Badge style: inline-flex; gap .5rem; min-height 2.35rem; padding 0 .95rem; border-radius 999px; color rgba(49,58,73,.72); background rgba(255,255,255,.72); border 1px solid rgba(255,255,255,.4); backdrop-filter blur(14px); box-shadow 0 12px 28px rgba(55,67,86,.1); font-size .82rem.
- Badge icon: inline sparkles SVG.
- H1 text exactly: \`Cuidado psicológico para viver com mais clareza\`
- H1 style: margin \`1.15rem auto 0\`; max-width 55rem; color rgba(44,53,68,.96); font-size clamp(2.5rem, 6vw, 5rem); font-weight 400; line-height 1.05; letter-spacing -.04em; text-shadow 0 8px 30px rgba(255,255,255,.42).
- Subtitle text exactly: \`Um espaço seguro para acolher sua história, compreender suas dores e construir caminhos mais leves, conscientes e saudáveis.\`
- Subtitle style: max-width 40rem; margin \`1rem auto 0\`; font-size clamp(.98rem, 2vw, 1.18rem); line-height 1.8; color rgba(72,82,98,.82).
- Metric card \`.hero-metric\`: absolute glass card near lower edge.
  - Mobile/default: right 1rem; bottom 5.8rem.
  - >=768px: left 1.5rem; right auto; bottom 1.5rem.
  - >=1024px: left 2.5rem; bottom 2.5rem.
  - Style: display flex column; gap .15rem; padding 1rem 1.15rem; min-width 8.5rem; border-radius 1.2rem; background rgba(255,255,255,.3); border 1px solid rgba(255,255,255,.35); backdrop-filter blur(20px); box-shadow 0 18px 48px rgba(44,55,75,.14).
  - Number: \`10+\`, font-size clamp(2.2rem, 4vw, 3.4rem), line-height .9, color rgba(44,53,68,.92), letter-spacing -.05em.
  - Label: \`Anos de experiência\`, font-size .78rem, line-height 1.25, color rgba(72,82,98,.72).

SECTION 2: PSYCHOLOGY CLINICAL CARDS
- Section \`.performance-section\`: padding \`0 .75rem 1.5rem\`; background #f0f0f0.
- At >=768px: padding \`0 1.25rem 2rem\`.
- Shell \`.performance-shell\`: max-width 1536px; margin auto; overflow hidden; border-radius 1.5rem; background #f7f7f5; padding \`2rem 1rem 1rem\`; box-shadow inset 0 1px 0 rgba(255,255,255,.65).
- At >=768px: radius 2rem; padding 3.5rem 1.5rem 1.5rem.
- At >=1024px: radius 2.35rem; padding 4.5rem 2rem 2rem.
- Header \`.performance-heading\`: max-width 54rem; margin \`0 auto 2rem\`; text-align center.
- Eyebrow: \`Psicologia clínica\`, color rgba(95,104,122,.78), font-size .8rem, letter-spacing .2em, text-transform uppercase.
- H2 text exactly: \`Uma prática pensada para acolher você com profundidade e presença\`
- H2 style: margin .65rem 0 0; color rgba(42,50,64,.94); font-size clamp(2rem, 5vw, 4.4rem); font-weight 400; line-height 1.02; letter-spacing -.045em.
- Grid \`.performance-grid\`: display grid; gap 1rem; grid-template-columns 1fr on mobile.
- At >=768px: grid-template-columns .95fr 1.12fr 1.12fr; grid-auto-rows minmax(12rem, auto); gap 1rem.
- Cards share: background rgba(255,255,255,.74); border 1px solid rgba(96,110,136,.08); border-radius 1.4rem; box-shadow 0 18px 48px rgba(75,86,110,.08); padding 1.35rem; overflow hidden.
- Mini card:
  - Text \`CRP\`
  - Text \`ATENDIMENTO CLÍNICO\`
  - Compact centered/top card with light gray clinical label styling.
- Feature card:
  - Title \`Escuta acolhedora e direção terapêutica\`
  - Copy \`Cada encontro é conduzido com atenção genuína, leitura cuidadosa da sua história e um processo que respeita o seu tempo.\`
  - Larger title, muted body, airy card.
- Tall card:
  - Title \`Um espaço para elaborar<br>o que hoje pesa em silêncio\`
  - Copy \`Ansiedade, relacionamentos, autoestima, luto, exaustão emocional e fases de transição podem ser trabalhados com cuidado e profundidade.\`
  - Visually taller, soft gradient/white surface.
- Data card:
  - Meta left \`ATENDIMENTO\`, meta right \`01\`.
  - Copy \`Sessões online e presenciais com estrutura clara, sigilo e acompanhamento responsável.\`
  - Footer \`Como funciona\` plus small arrow icon.
- Oracle card:
  - Meta left \`FOCO CLÍNICO\`, meta right \`02\`.
  - Include a simple circular clock/clinical line icon.
  - Copy \`Um processo feito para ampliar autoconhecimento, fortalecer recursos emocionais e promover mudanças consistentes.\`

SECTION 3: VIDEO CTA BANNER
- Section \`.cta-section\`: padding \`0 .75rem 1.5rem\`; background #f0f0f0.
- At >=768px: padding \`0 1.25rem 2rem\`.
- \`.cta-shell\`: position relative; max-width 1536px; min-height 11rem; margin auto; overflow hidden; border-radius 1.6rem; background #4c5a84; isolation isolate; display flex; align-items center.
- At >=768px: min-height 13rem; border-radius 1.9rem.
- At >=1024px: min-height 13.6rem; border-radius 2.1rem.
- \`.cta-video\`: absolute inset 0; z-index -3; object-fit cover; object-position center.
- \`.cta-overlay\`: absolute inset 0; z-index -2; background layered dark blue-gray gradients that keep text legible while allowing video to show.
- \`.cta-content\`: position relative; z-index 1; width 100%; display flex; flex-direction column; gap 1.2rem; padding 1.5rem; color white.
- At >=900px: flex-direction row; justify-content space-between; align-items center; padding \`2rem clamp(2rem, 4vw, 4rem)\`.
- Heading text exactly:
  \`Você não precisa<br>dar conta de tudo sozinho.\`
- Copy: \`A psicoterapia pode ser o começo de uma relação mais saudável com suas emoções, escolhas e formas de se posicionar no mundo.\`
- Buttons:
  - Primary: \`Agendar sessão\`, white/cream pill with arrow icon.
  - Secondary: \`Como funciona\`, transparent/white border pill.

SECTION 4: CARE METHOD / FUTURE CARDS
- Section \`.future-section\`: padding \`0 .75rem 1.5rem\`; background #f0f0f0.
- Shell \`.future-shell\`: max-width 1536px; margin auto; border-radius 1.6rem; background #f7f7f5; padding 2rem 1rem; overflow hidden.
- At >=768px: radius 2rem; padding 3.4rem 1.5rem.
- At >=1024px: radius 2.2rem; padding 4.4rem 2rem.
- Header:
  - Kicker \`Minha forma de cuidar\`
  - H2 \`Uma presença profissional<br>com escuta humana de verdade.\`
- H2 style: color rgba(42,50,64,.94); font-size clamp(2rem, 5vw, 4.3rem); line-height 1.02; letter-spacing -.045em; font-weight 400.
- Cards grid: 1 column mobile, 3 columns at >=768px, gap 1rem.
- Cards share: min-height 220px mobile, 270px tablet, 300px desktop; border-radius 1.45rem; border 1px solid rgba(96,110,136,.08); background soft white/cream gradients; padding 1.35rem; transition transform 220ms ease, box-shadow 220ms ease.
- Hover: translateY(-6px), stronger shadow.
- First card must be overwritten by JavaScript on DOMContentLoaded and become a copy card:
  - Title \`Cada historia merece ser ouvida com respeito\`
  - Copy \`Um espaco terapeutico seguro para acolher sua experiencia, nomear sentimentos e atravessar processos com mais clareza e suporte.\`
  - Include a small decorative dot before the title.
- Second card:
  - Title \`Escuta que acolhe sem julgamento\`
  - Copy \`O processo terapêutico oferece um lugar seguro para nomear dores, reconhecer padrões e abrir espaço para novas possibilidades.\`
- Third card:
  - Title \`Condução técnica com sensibilidade\`
  - Copy \`Mais do que conversar, a terapia organiza experiências internas e apoia movimentos concretos na sua vida emocional e relacional.\`

SECTION 5: MANIFESTO STRIP
- Section \`.manifesto-section\`: padding \`0 .75rem 1.5rem\`; background #f0f0f0.
- \`.manifesto-shell\`: position relative; max-width 1536px; min-height 260px; margin auto; overflow hidden; border-radius 1.8rem; display flex; align-items center; justify-content center; text-align center; color #fff.
- At >=768px: min-height 300px; radius 2rem.
- At >=1024px: min-height 330px; radius 2.2rem.
- Background: layered radial yellow/green glow plus green linear gradient, roughly from #5f6d4f to #38452f.
- Add a subtle inner overlay with repeating vertical lines or soft texture.
- Copy text exactly:
  \`Todos atravessamos medos, conflitos e cansaços.<br>Você não precisa enfrentar tudo isso sozinho.\`
- Copy style: max-width 56rem; font-size clamp(2rem, 5vw, 4.15rem); line-height 1.05; letter-spacing -.045em; font-weight 400.
- Button text: \`Quero começar meu processo\`.
- Button style: cream/white pill, dark green-gray text, subtle shadow, hover translateY(-1px).

SECTION 6: PROFILE / PROTOCOL SECTION
- Section \`.protocol-section\`: padding \`0 .75rem 1.5rem\`; background #f0f0f0.
- Shell \`.protocol-shell\`: max-width 1536px; margin auto; border-radius 1.6rem; background #f7f7f5; overflow hidden; display grid; grid-template-columns 1fr; gap 0.
- At >=768px: grid-template-columns minmax(0, 1.05fr) minmax(0, .95fr); border-radius 2rem.
- At >=1024px: border-radius 2.2rem.
- Visual side \`.protocol-visual\`: padding 1rem; display flex; align-items stretch.
- Window \`.protocol-window\`: position relative; width 100%; min-height 420px; overflow hidden; border-radius 1.35rem; background #d4d2cf; box-shadow 0 30px 70px rgba(58,67,84,.14).
- At desktop, min-height should feel tall and cinematic.
- Window chrome: small top bar with three circular dots, translucent cream/white.
- \`.protocol-window-image\`: absolute inset 0; background-image uses the profile image asset; background-size cover; background-position center top.
- Do not display the original overlay content; \`.protocol-window-overlay\` should be \`display: none\`.
- Copy side \`.protocol-copy\`: display flex; flex-direction column; justify-content center; padding 2rem 1.3rem 2.4rem; text-align center on mobile.
- At >=768px: text-align left; padding clamp(3rem,5vw,5rem).
- JavaScript must overwrite the original title and paragraph on DOMContentLoaded:
  - Title: \`Quem sou eu\`
  - Paragraph: \`Sou psicologa clinica e conduzo meu trabalho a partir de uma escuta atenta, etica e profundamente humana. Minha proposta e oferecer um espaco seguro para que cada pessoa possa compreender a propria historia, elaborar seus conflitos e construir novos caminhos com mais clareza e autonomia.\`
  - Remove the original protocol link from the DOM.
- Title style: margin 0; color rgba(42,50,64,.94); font-size clamp(2.1rem, 5vw, 4.5rem); line-height 1.02; letter-spacing -.045em; font-weight 400.
- Paragraph style: margin-top 1rem; max-width 34rem; color rgba(86,94,110,.78); font-size clamp(1rem, 1.7vw, 1.16rem); line-height 1.9.

JAVASCRIPT REQUIREMENTS
- On DOMContentLoaded:
  1. Find the first \`.future-card\`. Replace its content with a small dot, title, and paragraph matching the first care-method card above.
  2. Find \`.protocol-copy h2\` and replace its text with \`Quem sou eu\`.
  3. Find \`.protocol-copy p\` and replace it with the exact profile paragraph above.
  4. Remove \`.protocol-link\` if present.
  5. Reveal all \`.animate-on-load\` elements after their \`data-delay\` value.
  6. Initialize IntersectionObserver for \`.animate-on-scroll\` elements.
- Scroll observer:
  - threshold .2
  - rootMargin \`0px 0px -8% 0px\`
  - on intersection, wait \`data-scroll-delay\` if present, add \`.is-visible\`, then unobserve.
- If IntersectionObserver is missing, mark all scroll elements visible immediately.
- Do not add autoplay recovery scripts beyond standard video attributes unless needed; the original behavior relies on muted autoplay loop videos.

RESPONSIVE RULES
- Mobile/default:
  - Hero wrapper padding .75rem.
  - Hero panel radius 1.5rem and video object-position 65% center.
  - Hero nav shows mobile logo and CTA, hides menu.
  - Hero text remains centered; title starts at about 2.5rem.
  - Metric card sits near the lower-right area above bottom content.
  - Performance, future, and protocol grids are single-column.
  - CTA banner content stacks vertically.
- At >=768px:
  - Hero panel radius 3rem.
  - Nav menu becomes visible and centered.
  - Metric card moves to bottom-left.
  - Performance grid becomes 3 columns.
  - Future cards become 3 columns.
  - Protocol becomes two columns.
- At >=900px:
  - CTA banner content becomes horizontal, text left and actions right.
- At >=1024px:
  - Hero video object-position center center.
  - Section shells use larger radii and more generous padding.

IMPLEMENTATION NOTES
- Keep the DOM close to the original class-driven structure:
  - \`.hero-wrapper\`, \`.hero-shell\`, \`.hero-video\`, \`.hero-overlay\`, \`.hero-content\`, \`.hero-nav\`, \`.hero-menu\`, \`.hero-text\`, \`.hero-metric\`
  - \`.performance-section\`, \`.performance-shell\`, \`.performance-grid\`
  - \`.cta-section\`, \`.cta-shell\`, \`.cta-video\`, \`.cta-overlay\`, \`.cta-content\`
  - \`.future-section\`, \`.future-shell\`, \`.future-grid\`, \`.future-card\`
  - \`.manifesto-section\`, \`.manifesto-shell\`
  - \`.protocol-section\`, \`.protocol-shell\`, \`.protocol-window\`, \`.protocol-window-image\`, \`.protocol-copy\`
- Use decoded Portuguese accents in visible static HTML. Keep the JavaScript replacement strings exactly as specified where noted.
- Preserve all inline SVG icons: sparkle badge, chevrons, arrow-up-right buttons, and small card icons.
- Keep all sections inside a single static page; no navigation routing.
- Avoid visible scrollbars caused by large rounded media panels.

STRICT RECREATION RULES
- Do not invent extra sections, nav bars, testimonials, pricing tables, or FAQ blocks.
- Do not replace the hero video or CTA video with static images.
- Do not change the section order.
- Do not render the profile image as a regular standalone image; it must be a background inside the rounded protocol window.
- Do not remove glass overlays, large border radii, muted therapeutic colors, or soft shadows.
- Do not change text content, capitalization, button labels, card labels, or the JavaScript-overridden profile copy.
- Do not change the custom Helvetica Regular font role.
- Preserve load reveal, scroll reveal, blur/translate reveal variants, hover lifts, responsive breakpoints, and the rounded max-width 1536px page shell composition.`;
