export const gestorDeTrafegoPrompt = `Build a one-page landing page for "Gestor de Trafego" using static HTML, CSS, and vanilla JavaScript. The goal is to recreate the existing page with maximum visual fidelity, including layout, typography, assets, animations, interactions, and responsive behavior.

PAGE IDENTITY
- Page title: "Gestor de Tráfego | Performance e Escala"
- Meta description: "Gestão de tráfego pago com foco em leads, vendas e otimização contínua para negócios que querem crescer com previsibilidade."
- Language: pt-BR.
- Visual style: dark, cinematic performance-marketing landing page with oversized uppercase gradient typography, a centered hero statue image, green conversion CTAs, moving project-image marquees, high-contrast white services section, and sticky stacked process cards.
- Overall background: #0C0C0C, with the hero using #020405 and radial/linear dark atmospheric gradients.
- Primary font: Kanit from Google Fonts, weights 300, 400, 500, 700, 900.
- Core visual rules: uppercase headings, dark graphite backgrounds, cool gray text gradient, neon green CTAs, rounded top transitions between major sections, scroll-triggered fade-ins, scroll-linked text reveal, and scroll-reactive marquee/card motion.

CRITICAL LAYOUT LOCKS
- Recreate the layout with CSS values, not by visually guessing from the text size. The most common failure is making the huge headings full-bleed and left-aligned; do not do that.
- Every section heading must be centered in its section. Use width: 100%, text-align: center, margin-left: auto, margin-right: auto. Do not let "SERVIÇOS" or "COMO FUNCIONA" start at x=0 on desktop.
- Keep all section content inside its intended horizontal padding. On desktop/tablet, dark and white sections use at least 2.5rem left/right padding. The only elements allowed to span the full viewport width are the two marquee rows.
- At a 1424px wide desktop viewport, the services heading should appear centered with clear white margin on both sides, not cropped. The services list should be centered in a max-width 1024px column.
- At a 1424px wide desktop viewport, the process card deck should sit inside a centered max-width 1200px container. With the section's 2.5rem horizontal padding, the card's outer border must not touch the left viewport edge; it should begin roughly around 7vw/100px from the viewport edge when the viewport is wider than the 1200px container.
- Do not use position absolute for service rows, service numbers, project card text, or section headings. Those elements are normal flex/static document flow.
- Do not use 100vw for services list, about content, project cards, or project stack container. Use 100vw only for marquee containers/tracks. Using 100vw elsewhere will break alignment and create cropped content.
- Do not override line-height with values below the specified ones. The giant numerals and headings rely on controlled line-height, but body copy must remain readable and vertically spaced.
- Do not reduce vertical padding in services or cards to fit more content above the fold. Preserve the large, airy spacing even when it means the next rows continue below the viewport.
- All cards and rows must keep their internal padding. Text must never touch a card border or viewport edge.

ASSETS DE IMAGEM E VIDEO

Use exatamente estes assets por link. Nao use placeholders visuais, banco de imagens, midia gerada ou alternativas parecidas. Preencha apenas o campo "Link" de cada item. Os assets estao em ordem de aparicao na pagina.

1. Retrato principal da hero, escultura classica vendada
   Tipo: imagem
   Link: https://res.cloudinary.com/dalwymbky/image/upload/v1783952002/hero_dimpqc.png
   Aparece em: hero, centralizada sobre o texto e acima do CTA.
   Detalhes: imagem quadrada 1254x1254; escultura classica com venda nos olhos, recortada sobre fundo transparente/escuro.
   Renderizacao: img com width 100%, height auto, user-select none, draggable false; container absoluto left 50%, top 54% mobile, 55% >=768px, 56% >=1200px; width min(50vw, 480px) mobile/base, min(31vw, 420px) >=768px, min(27vw, 440px) >=1200px; drop-shadow 0 3rem 3.5rem rgba(0,0,0,0.54); translateZ(28px); acompanha o cursor via variaveis CSS.

2. Tile de portfolio: laptop iluminado em fundo escuro
   Tipo: imagem
   Link: https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1600&q=80
   Aparece em: primeira linha do marquee, primeira imagem; tambem se repete nas duas linhas do marquee.
   Detalhes: 1600x1133; laptop iluminado em ambiente escuro.
   Renderizacao: .marquee-tile com object-fit cover; 420x270px desktop, 280x180px em telas <=640px; border-radius 1rem; box-shadow 0 4px 20px rgba(0,0,0,0.5); border 1px solid rgba(215,226,234,0.05); loading lazy.

3. Tile de portfolio: setup com duas telas em ambiente escuro
   Tipo: imagem
   Link: https://images.unsplash.com/photo-1593062096033-9a26b09da705?auto=format&fit=crop&w=1600&q=80
   Aparece em: primeira linha do marquee, segunda imagem; tambem se repete nas duas linhas do marquee.
   Detalhes: 1600x1068; setup escuro com duas telas.
   Renderizacao: mesmo tratamento de .marquee-tile: object-fit cover; 420x270px desktop, 280x180px <=640px; radius 1rem; sombra e borda sutis; loading lazy.

4. Tile de portfolio: notebook com luz neon sobre mesa preta
   Tipo: imagem
   Link: https://images.unsplash.com/photo-1526738549149-8e07eca6c147?auto=format&fit=crop&w=1600&q=80
   Aparece em: primeira linha do marquee, terceira imagem; tambem se repete nas duas linhas do marquee.
   Detalhes: 1600x2000; notebook vertical com iluminacao neon sobre mesa preta.
   Renderizacao: mesmo tratamento de .marquee-tile; o corte deve preservar o aspecto escuro/neon dentro do enquadramento horizontal 420x270 ou 280x180.

5. Tile de portfolio: close de notebook com iluminacao neon
   Tipo: imagem
   Link: https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1600&q=80
   Aparece em: primeira linha do marquee, quarta imagem.
   Detalhes: 1600x2000; close vertical de notebook com iluminacao neon.
   Renderizacao: mesmo tratamento de .marquee-tile com object-fit cover e corte horizontal.

6. Tile de portfolio: mesa escura com monitor e laptop
   Tipo: imagem
   Link: https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=1600&q=80
   Aparece em: primeira linha do marquee, quinta imagem.
   Detalhes: 1600x1096; mesa escura com monitor e laptop.
   Renderizacao: mesmo tratamento de .marquee-tile.

7. Tile de portfolio: escritorio escuro com monitores junto a janela
   Tipo: imagem
   Link: https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1600&q=80
   Aparece em: primeira linha do marquee, sexta imagem.
   Detalhes: 1600x2133; escritorio escuro com monitores proximos a uma janela.
   Renderizacao: mesmo tratamento de .marquee-tile com object-fit cover e corte horizontal.

8. Tile de portfolio: mesa com luminaria e skyline noturno
   Tipo: imagem
   Link: https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80
   Aparece em: segunda linha do marquee, primeira imagem.
   Detalhes: 1600x1069; mesa com luminaria e skyline noturno.
   Renderizacao: mesmo tratamento de .marquee-tile.

9. Tile de portfolio: laptop e acessorios sobre mesa preta
   Tipo: imagem
   Link: https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1600&q=80
   Aparece em: segunda linha do marquee, segunda imagem.
   Detalhes: 1600x1280; laptop e acessorios em uma mesa preta.
   Renderizacao: mesmo tratamento de .marquee-tile.

10. Tile de portfolio: close de notebook em ambiente escuro
   Tipo: imagem
   Link: https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1600&q=80
   Aparece em: segunda linha do marquee, terceira imagem.
   Detalhes: 1600x1067; close de notebook em ambiente escuro.
   Renderizacao: mesmo tratamento de .marquee-tile.

Fonts and external CSS:
1. Google Font: Kanit
   URL/import: @import url('https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500;700;900&display=swap');
   Used for: all page text, buttons, headings, cards, and footer.

NOTAS PARA TROCA DE ASSETS
- Preencha apenas os campos "Link" da lista acima.
- As imagens e videos devem ser usados somente via URL.
- Mantenha os nomes, a ordem, o uso em cada secao, o object-fit, o posicionamento e o comportamento descritos.
- Nao substitua imagens por ilustracoes, placeholders, banco de imagens diferente ou midia gerada.
- Mantenha SVGs inline, data-URIs do CSS e icones SVG como assets nativos do codigo, caso sejam adicionados.

DEPENDENCIES
- Static HTML document with one CSS file and one vanilla JavaScript file.
- No package.json, framework, Tailwind runtime, build step, or external icon library is required.
- Use Google Fonts for Kanit.
- Use browser APIs: DOMContentLoaded, matchMedia, pointer events, requestAnimationFrame, IntersectionObserver, getBoundingClientRect, CSS custom properties, and smooth anchor scrolling.

GLOBAL STYLES
- Reset all elements, ::before, and ::after with box-sizing border-box, margin 0, padding 0.
- html/body background-color #0C0C0C; color #D7E2EA; font-family 'Kanit', sans-serif; overflow-x hidden; scroll-behavior smooth; webkit and moz font smoothing enabled.
- #root and .main-wrapper: background-color #0C0C0C; width 100%; overflow-x clip.
- .hero-heading is reusable gradient text: background linear-gradient(180deg, #646973 0%, #BBCCD7 100%); background-clip text; -webkit-text-fill-color transparent.
- Page uses no visible navigation, although unused navbar styles may exist. Do not render a navbar.

DESIGN TOKENS
- Main dark background: #0C0C0C.
- Hero dark background: #020405.
- Hero top gradient: radial-gradient(circle at 50% 46%, rgba(215,226,234,0.1) 0%, rgba(99,113,124,0.06) 20%, rgba(2,4,5,0) 54%) plus linear-gradient(180deg, #050708 0%, #020405 68%, #020405 100%).
- Text color: #D7E2EA.
- Gradient heading colors: #646973 to #BBCCD7.
- Services white section: #FFFFFF background, #0C0C0C text.
- CTA gradient: linear-gradient(123deg, #04160C 7%, #0A8F45 37%, #22C55E 72%, #8BFFB8 100%).
- CTA shadow: 0px 4px 12px rgba(10,143,69,0.3), inset 4px 4px 12px #14984F; hover shadow 0px 8px 18px rgba(10,143,69,0.42), inset 4px 4px 12px #14984F.
- CTA outline: 2px solid #FFFFFF, outline-offset -3px.
- Accent green: #0A8F45; secondary green #67F39B.
- Marquee tile background #1a1a1a, border rgba(215,226,234,0.05), shadow rgba(0,0,0,0.5).
- Rounded section tops: 40px base, 50px >=640px, 60px >=768px.
- Project card border: 2px solid #D7E2EA; radius 40px base, 50px >=640px, 60px >=768px.
- Motion easing: cubic-bezier(0.25, 0.1, 0.25, 1).

SECTION ORDER
1. Hero
2. Trabalhos realizados marquee
3. Sobre
4. Serviços
5. Como funciona
6. Contact footer

REUSABLE COMPONENTS

Component: Gradient Heading
- Purpose: hero H1, marquee heading, "Sobre", "Como funciona", and footer heading.
- Structure: text element with class .hero-heading.
- Styling: linear text gradient #646973 to #BBCCD7, uppercase where section-specific styles apply, transparent text fill.
- Alignment lock: all headings using this component must keep text-align center when the original section specifies center alignment. Do not left-align huge headings and do not allow them to overflow/crop at the viewport edge.
- Responsive behavior: section-specific clamp font sizes.

Component: Primary Contact Button
- Purpose: hero CTA "Solicitar diagnóstico", about CTA "Quero escalar", footer CTA "Entrar em contato".
- Structure: anchor with class .btn-contact.
- Styling: inline-flex center, border-radius 9999px, uppercase, letter-spacing 0.15em, white text, Kanit weight 500, no text decoration, nowrap.
- Sizing: padding 0.75rem 2rem and font-size 0.75rem base; 0.875rem 2.5rem and 0.875rem >=640px; 1rem 3rem and 1rem >=768px.
- Animation/interaction: hover translateY(-2px) scale(1.03), brightness(1.1), stronger green shadow; active translateY(1px) scale(0.98); transition 0.2s cubic-bezier(0.25,0.1,0.25,1).

Component: Scroll Fade In
- Purpose: section headings, about CTA, service rows, project heading, footer content.
- Structure: element with .scroll-fade-in and inline CSS variables --delay and --y.
- Styling before visible: opacity 0; transform translate(var(--x,0px), var(--y,30px)).
- Visible state: opacity 1; transform translate(0,0).
- Animation: transition opacity and transform over var(--duration,0.7s), easing cubic-bezier(0.25,0.1,0.25,1), delay var(--delay,0s). Trigger once with IntersectionObserver rootMargin 50px, threshold 0.

SECTION 1: HERO
- Height: min-height 100vh.
- Background: #020405 with ::before radial/linear gradient atmosphere and ::after bottom fade. ::after height clamp(10rem,22vw,18rem), gradient from transparent to #020405.
- Layout: flex column, align-items center, justify-content flex-start, position relative, overflow hidden, isolation isolate, padding clamp(2.5rem,6vw,4rem) 0 2rem.
- Desktop alignment lock: the hero content is centered on the viewport. The H1 is not full-bleed; it is capped by max-width 1200px and centered. The bio is centered below the H1, not left-aligned. The portrait and CTA are centered with left 50% + translateX(-50%).
- CSS variables: --hero-shift-x/y default 0px; --hero-rotate-x/y default 0deg.
- Main elements:
  - H1:
    Transforme cliques
    em clientes reais
  - Bio text: "Estratégia, mídia e otimização diária para transformar investimento em vendas."
  - Hero portrait asset.
  - CTA: "Solicitar diagnóstico", href #contact.
- H1 styling: .hero-heading-text .hero-heading .fade-in-load; font-weight 900; text-transform uppercase; letter-spacing -0.045em; line-height 0.88; width 100%; max-width 1200px; margin 0 auto; text-align center; opacity 0.94; span display block.
- H1 overflow guard: use max-width: min(1200px, calc(100vw - 2rem)) on small screens and keep each span on its own line. If the heading would crop horizontally, reduce with the clamp values rather than letting text overflow.
- H1 sizes: clamp(3rem,8vw,7rem) base; clamp(3.7rem,8vw,7.8rem) >=640px; clamp(4.3rem,7.2vw,8.4rem) >=768px; clamp(4.8rem,6.7vw,8.8rem) >=1024px.
- Heading container: width 100%; overflow hidden; padding 0 1rem base, 0 1.5rem >=640px, 0 2.5rem >=768px; z-index 8; pointer-events none.
- Bio styling: color #D7E2EA; font-weight 300; uppercase; letter-spacing 0.05em; line-height 1.3; font-size clamp(0.72rem,1.1vw,1.05rem); max-width 680px base, 720px >=640px, 760px >=768px; centered; margin clamp(0.9rem,2vw,1.4rem) auto 0; padding 0 1.5rem; z-index 25; text-shadow 0 2px 18px rgba(0,0,0,0.72).
- Portrait: use asset 1. Container z-index 18, pointer-events none, transform-style preserve-3d, transform-origin center, transition transform 0.04s linear, will-change transform.
- Portrait reveal: opacity starts 0; animation heroPortraitReveal 0.75s cubic-bezier(0.25,0.1,0.25,1) 0.25s forwards to opacity 1.
- Portrait shadow ellipse: ::after bottom 2%, left 50%, width 54%, height 8%, background rgba(0,0,0,0.5), blur 22px, border-radius 50%.
- CTA row: absolute left 50%; transform translateX(-50%); z-index 25; bottom clamp(1.75rem,5vh,3rem). On max-width 767px, set top 73% and bottom auto.
- Load animation: .fade-in-load starts opacity 0 and translate(var(--start-x,0), var(--start-y,0)); animation fadeInLoad var(--duration,0.7s) cubic-bezier(0.25,0.1,0.25,1) forwards; delay var(--delay). H1 delay 0.15s start-y 40px; bio delay 0.35s start-y 20px; CTA delay 0.5s start-y 20px.
- Interaction: on non-reduced-motion pointermove inside hero, update targetX from pointer mapped to +/-150px and targetY to +/-64px. Each animation frame lerp current values by 0.18. Set --hero-shift-x/y in px, --hero-rotate-x to -currentY*0.055deg, --hero-rotate-y to currentX*0.055deg. Reset targets to 0 on pointerleave. Ignore touch pointer.

SECTION 2: TRABALHOS REALIZADOS MARQUEE
- Height: content-driven.
- Background: radial-gradient(ellipse at 50% 0%, rgba(107,157,178,0.08) 0%, rgba(43,76,91,0.04) 30%, rgba(2,4,5,0) 64%) plus linear-gradient(180deg, #020405 0%, #05090b 28%, #0C0C0C 100%).
- Layout: flex column, gap 0.75rem, position relative, overflow hidden, padding-top clamp(7rem,13vw,10rem), padding-bottom 2.5rem.
- Top fade ::before: absolute top 0, height clamp(6rem,12vw,9rem), gradient #020405 to rgba(12,12,12,0), z-index 0.
- Heading text: "Trabalhos realizados"
- Heading styling: .marquee-heading .hero-heading; position relative z-index 1; text-align center; font-size clamp(2.4rem,7vw,6rem); font-weight 900; line-height 0.95; uppercase; margin bottom clamp(2rem,4vw,3.5rem); padding 0 1.25rem.
- Marquee containers: two .marquee-container rows, width 100vw, overflow hidden, display flex, user-select none, pointer-events none, z-index 1.
- Tracks: .marquee-track display flex, gap 0.75rem, will-change transform.
- Row 1 image sequence repeated three times: assets 2, 3, 4, 5, 6, 7.
- Row 2 image sequence repeated three times: assets 8, 9, 10, 2, 3, 4.
- Tile styling: use the .marquee-tile renderizacao described in the asset block.
- Scroll-linked motion: while marquee section is visible, compute offset = (window.scrollY - sectionTop + window.innerHeight) * 0.3. Set first track transform translate3d(offset - 200px,0,0). Set second track transform translate3d(-(offset - 200px),0,0). This runs continuously with requestAnimationFrame.

SECTION 3: SOBRE
- Height: min-height 100vh.
- Background: #0C0C0C.
- Layout: flex column, centered both axes, text-align center, position relative, overflow hidden, z-index 5.
- Padding: 5rem 1.25rem base; 5rem 2rem >=640px; 5rem 2.5rem >=768px.
- Heading text: "Sobre"
- Heading styling: .section-heading-huge .hero-heading; font-weight 900; uppercase; letter-spacing -0.02em; text-align center; font-size clamp(3rem,12vw,160px); z-index 2; margin-bottom 2.5rem base, 3.5rem >=640px, 4rem >=768px. Preserve the original CSS typo/property if copying CSS: leading-opacity: 0.85 has no effect.
- Content wrapper: .about-content flex column center, gap 4rem base, 5rem >=640px, 6rem >=768px; max-width 560px; z-index 2.
- Paragraph exact text: "Sou gestor de tráfego com foco em aquisição, performance e escala. Estruturo campanhas no Meta Ads e Google Ads, acompanho as métricas todos os dias e otimizo o funil para reduzir custo por resultado e aumentar previsibilidade de vendas."
- Paragraph styling: color #D7E2EA; font-weight 500; line-height 1.6; text-align center; font-size clamp(1rem,2vw,1.35rem).
- Character reveal: JavaScript trims paragraph text, replaces it with span.char for every character. .char opacity starts 0.2, display inline-block, white-space pre-wrap, will-change opacity. On scroll, progress maps from paragraph rect.top at 80% viewport height to 20% viewport height; each character starts at (idx / numChars) * 0.85 and fades over 0.15 progress from opacity 0.2 to 1.
- CTA: "Quero escalar", href #contact, primary button, wrapped in scroll-fade-in with delay 0.1s and y 30px.

SECTION 4: SERVIÇOS
- Height: content-driven.
- Background: #FFFFFF; text #0C0C0C.
- Layout: position relative, z-index 8, overflow hidden. Children remain in normal document flow: heading first, then centered services list. Do not use absolute positioning in this section.
- Shape: border-top-left-radius and border-top-right-radius 40px base, 50px >=640px, 60px >=768px.
- Padding: 5rem 1.25rem base; 6rem 2rem >=640px; 8rem 2.5rem >=768px.
- Heading text: "Serviços"
- Heading styling: .section-heading-huge .services-heading; color #0C0C0C; same huge heading scale; display block; width 100%; text-align center; margin-left auto; margin-right auto; margin-bottom 2.5rem base, 3.5rem >=640px, 4rem >=768px. The heading must not be clipped by the viewport; if the word is too wide, keep the clamp max 160px and section padding rather than increasing font size.
- Services list: max-width 1024px; width 100%; margin 0 auto; display flex; flex-direction column. The list must be centered and must not span 100vw.
- Service item styling: display flex, align-items center, border-top 1px solid rgba(12,12,12,0.15), padding 2rem 0, transition transform and padding-left 0.3s cubic-bezier(0.25,0.1,0.25,1). Last child adds matching border-bottom.
- Service row geometry: on desktop each row is a horizontal flex row with the giant number column on the left and the text column on the right. The number and text are vertically centered as a row. Do not stack title directly under the number on desktop, and do not collapse row padding below 2rem.
- Hover: item padding-left 1.5rem and translateX(5px); title color changes to #0A8F45.
- Number styling: font-weight 900; font-size clamp(3rem,10vw,140px); color #0C0C0C; line-height 0.8; margin-right 2rem base, 3rem >=768px; width 30% base, 25% >=768px; flex-shrink 0.
- Number alignment: numbers are part of the flex row and start inside the 1024px list container. They are not absolutely positioned and must not touch the viewport edge on desktop.
- Content styling: flex column gap 0.5rem; width 70% base, 75% >=768px.
- Title styling: font-weight 500; uppercase; font-size clamp(1rem,2.2vw,2.1rem); color #0C0C0C.
- Description styling: font-weight 300; line-height 1.5; max-width 650px; font-size clamp(0.85rem,1.6vw,1.25rem); opacity 0.6; color #0C0C0C.
- Items, exact text:
  - 01 / "Planejamento de mídia" / "Definição de oferta, público, verba, canais e metas para campanhas começarem com direção clara e expectativa realista de resultado."
  - 02 / "Gestão de Meta Ads" / "Criação, monitoramento e otimização de campanhas no Instagram e Facebook com foco em leads qualificados, vendas e remarketing."
  - 03 / "Gestão de Google Ads" / "Campanhas de pesquisa, display, performance max e YouTube orientadas por intenção de compra e leitura constante dos dados."
  - 04 / "Criativos e testes" / "Organização de hipóteses, testes A/B e leitura de criativos para descobrir quais mensagens e formatos mais convertem."
  - 05 / "Otimização e relatórios" / "Ajustes semanais com base em CAC, CPL, CTR, ROAS e taxa de conversão para manter crescimento com mais controle."
- Animation: each service item uses .scroll-fade-in with y 30px and staggered delays 0s, 0.1s, 0.2s, 0.3s, 0.4s.

SECTION 5: COMO FUNCIONA
- Height: content plus sticky scroll space.
- Background: #0C0C0C.
- Layout: position relative, z-index 10; margin-top -2.5rem base, -3rem >=640px, -3.5rem >=768px; padding 6rem 1.25rem 20vh base, horizontal 2rem >=640px, 2.5rem >=768px.
- Layout lock: this section's inner content is centered. The heading is centered, then the card stack starts below it inside a max-width 1200px container. Do not make the project card full-viewport width.
- Shape: border-top-left-radius and border-top-right-radius 40px base, 50px >=640px, 60px >=768px.
- Heading text: "Como funciona"
- Heading styling: .section-heading-huge .hero-heading; display block; width 100%; text-align center; margin-left auto; margin-right auto; font-size clamp(3rem,12vw,160px); line-height normal/default. The heading must not be left-aligned or clipped.
- Stack container: max-width 1200px; width 100%; margin 4rem auto 0; position relative; perspective 1400px. On desktop, this centered container creates side gutters; preserve them.
- Cards: three .project-card-wrapper elements, each height 85vh, display flex, justify-content center, align-items flex-start, position relative, transform-origin top center, will-change transform/opacity. z-index values 1, 2, 3.
- Card wrapper inline variables: first --stack-offset 0px --index 0; second --stack-offset 28px --index 1; third --stack-offset 56px --index 2.
- Card styling: position sticky; top calc(clamp(6rem,15vh,8rem) + var(--stack-offset,0px)); border-radius 40px base, 50px >=640px, 60px >=768px; border 2px solid #D7E2EA; background #0C0C0C; padding 1.25rem base, 2rem >=640px, 2.5rem >=768px; width 100%; max-width 100%; height 90%; min-height clamp(24rem,62vh,38rem), or clamp(24rem,70vh,32rem) <=767px; box-shadow 0 -20px 40px rgba(0,0,0,0.8); display flex; flex-direction column; gap 1.5rem base, 2rem >=640px; overflow hidden; transform-origin center top.
- Card internal spacing lock: all card text starts inside the card padding. At desktop, content should begin about 2.5rem from the card border. No number, category, title, intro, or body text may sit on the border or viewport edge.
- Card overlay: ::after inset 0, linear-gradient(180deg, rgba(215,226,234,0.05) 0%, rgba(6,10,12,0.16) 26%, rgba(2,4,5,0.5) 100%), opacity var(--stack-overlay-opacity,0), z-index 0.
- Card content z-index 1.
- Top row: flex justify-between align-center width 100%; on <=767px flex-direction column, align-items flex-start, gap 1.25rem.
- Info group: flex align-center gap 1.5rem base, 3rem >=768px; on <=767px align-items flex-start.
- Number: font-weight 900; font-size clamp(2rem,6vw,5.5rem); color #D7E2EA; line-height 0.8.
- Number placement: card number belongs inside .card-info-group beside the category/title block. Do not position it outside the card or overlap it with the border.
- Category: font-size clamp(0.7rem,1.2vw,0.9rem); uppercase; letter-spacing 0.1em; opacity 0.5; font-weight 400.
- Card title: font-weight 500; uppercase; font-size clamp(1rem,2vw,1.8rem); color #D7E2EA.
- Method content: flex column gap 1.5rem; width 100%; flex 1.
- Intro paragraph: max-width 60rem; color rgba(215,226,234,0.78); font-size clamp(0.98rem,1.5vw,1.2rem); line-height 1.65; padding-bottom 1rem; border-bottom 1px solid rgba(215,226,234,0.12).
- Body paragraph: max-width 70rem; color rgba(215,226,234,0.64); line-height 1.65; font-size clamp(0.92rem,1.22vw,1.04rem).
- Method text placement: paragraphs are normal block text inside .project-method-content. They start under the top row with a 1.5rem/2rem gap and never overlap the number/title row.
- Cards, exact text:
  - Card 01: category "Etapa 01"; title "Diagnóstico"; intro "Começo entendendo sua oferta, público, metas e o que já foi feito."; body "A partir dessa leitura, identifico oportunidades, gargalos e o melhor caminho para atrair clientes com mais previsibilidade."
  - Card 02: category "Etapa 02"; title "Estruturação"; intro "Organizo campanhas, públicos, criativos e mensagens de acordo com o objetivo."; body "Tudo é configurado para medir os resultados certos e direcionar a verba para o que tem maior chance de conversão."
  - Card 03: category "Etapa 03"; title "Otimização"; intro "Acompanho os dados, ajusto as campanhas e corto desperdícios durante a operação."; body "Com os aprendizados, reforço o que performa melhor e busco escalar mantendo controle de custo e qualidade dos leads."
- Scroll stack motion: on non-reduced-motion, run requestAnimationFrame while section is visible. For each card, inspect up to the next two wrappers. For offset 1 use influence 1; offset 2 use influence 0.55. For each next card, progress = clamp((startY - nextRect.top) / (startY - stickyTop), 0, 1), where startY is window.innerHeight * 0.92. Current card scale reduces by progress * 0.055 * influence; translateY reduces by progress * 28 * influence; overlayOpacity increases by progress * 0.2 * influence; brightness reduces by progress * 0.075 * influence. Clamp scale 0.89 to 1, brightness 0.84 to 1, overlay 0 to 0.28. Apply transform translate3d(0, translateYpx, 0) scale(scale), filter brightness(value), and --stack-overlay-opacity.

SECTION 6: CONTACT FOOTER
- Element: footer with id contact.
- Background: #0C0C0C.
- Layout: text-align center; padding 6rem 1.25rem; border-top 1px solid rgba(215,226,234,0.1).
- Content wrapper: .scroll-fade-in with delay 0s and y 30px.
- Heading text: "Pronto para vender mais?"
- Heading styling: .hero-heading plus inline font-size clamp(2rem,6vw,4rem), font-weight 900, uppercase, margin-bottom 2rem.
- Paragraph exact text: "Se você quer campanhas com direção, criativos alinhados e otimização constante, vamos conversar e montar um plano de aquisição para o seu negócio."
- Paragraph styling: opacity 0.6; max-width 500px; margin 0 auto 3rem auto; line-height 1.6.
- CTA: "Entrar em contato", mailto:contato@seudominio.com, primary contact button.
- Copyright line: "© 2026 Gestor de Tráfego. Todos os direitos reservados."
- Copyright styling: opacity 0.3; font-size 0.8rem; margin-top 5rem; uppercase; letter-spacing 0.2em.

INTERACTIONS AND MOTION
- Smooth anchor scrolling is enabled globally with scroll-behavior smooth.
- Initial hero fade-in uses CSS keyframes fadeInLoad, duration 0.7s unless overridden, easing cubic-bezier(0.25,0.1,0.25,1), with staggered inline delays.
- Hero portrait fades in independently over 0.75s with 0.25s delay.
- Hero image follows cursor with inertial requestAnimationFrame lerp and slight 3D rotation; disabled for prefers-reduced-motion reduce and touch pointer movement.
- Scroll-fade elements reveal once when entering the viewport, using IntersectionObserver with rootMargin 50px.
- Marquee rows are scroll-reactive, not time-looped CSS animations. The first row moves right as scroll progresses; the second row moves left by the inverse transform.
- About paragraph reveal is scroll-linked character opacity. Characters never move; only opacity changes from 0.2 to 1.
- Services rows shift right and indent on hover; titles turn green.
- Project cards are sticky and scale/dim as following cards approach, creating a stacked deck effect. This is inferred from the JavaScript math and CSS sticky layout.
- Respect prefers-reduced-motion by disabling hero mouse-follow and project stack transforms when reduce is active; other scroll fades and marquee logic remain as coded unless explicitly extended.

RESPONSIVE RULES
- Mobile/base: hero H1 clamp(3rem,8vw,7rem); hero portrait width min(50vw,480px); CTA row top 73%; marquee tiles 280x180px on <=640px; major section horizontal padding 1.25rem; services and projects top radii 40px; project card top row stacks on <=767px.
- Small >=640px: CTA padding/font increases; hero heading container padding 1.5rem; about/services/projects horizontal padding grows; section top radii 50px; about gaps and heading margin increase.
- Tablet >=768px: hero portrait width min(31vw,420px), top 55%; CTA returns to bottom positioning; hero heading container padding 2.5rem; services/projects radii 60px; project cards get larger padding; service number/content widths change to 25%/75%.
- Desktop >=1024px: hero H1 max scale uses clamp(4.8rem,6.7vw,8.8rem).
- Wide >=1200px: hero portrait top 56%, width min(27vw,440px).
- Keep overflow-x hidden/clip throughout so marquees and large headings do not create horizontal scrollbars.

IMPLEMENTATION NOTES
- Preserve the simple file structure: one HTML page, one CSS file, one JavaScript file.
- Decode visible HTML entities as rendered text in the browser while preserving exact visible copy.
- The CSS contains styles for a navbar and a secondary button that are not rendered by the current HTML. Do not introduce them into the recreated page.
- Use lazy loading on marquee images.
- Use pointer-events none for the marquee containers and hero portrait so they do not interfere with scrolling/clicking.
- Keep z-index layering: hero gradient below content, portrait above text atmosphere, CTA above portrait fade, services above dark background, projects above services overlap.
- Use CSS custom properties for delays and motion variables instead of hard-coding every animation state in JavaScript.

STRICT RECREATION RULES
- Do not invent new sections.
- Do not add a navbar, menu, testimonials, pricing, forms, social icons, logos, or extra cards.
- Do not change the text content, capitalization, accents, or line breaks unless required for responsiveness.
- Do not replace listed assets.
- Do not use placeholder media, generated media, stock substitutions, or approximations for the listed assets.
- Do not change the font family.
- Preserve the section order.
- Preserve the dark-to-white-to-dark section rhythm, green CTA styling, oversized uppercase headings, rounded section tops, sticky card behavior, scroll-linked marquee, cursor-following hero portrait, about text reveal, colors, border radii, spacing, and responsive breakpoints.
- Before finalizing, visually check at 1424x709 and 390x844. Reject the result if any of these are true: "SERVIÇOS" is cropped or starts at the viewport edge; service numbers touch the viewport edge; service rows overlap or collapse vertically; "COMO FUNCIONA" is left-aligned or cropped; project cards touch the viewport edge on desktop; card text touches the border; the card number is outside the card; any paragraph overlaps a title or number.
- If a generated implementation looks crowded, fix it by restoring the specified padding, max-widths, flex layout, and clamp sizes. Do not fix crowding by shrinking random text, removing rows, or changing section order.
- If a detail is not specified, infer conservatively from the surrounding system and keep the same visual language.
`;
