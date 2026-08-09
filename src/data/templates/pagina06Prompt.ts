export const pagina06Prompt = `Build a full landing page for "Social IA Pro" using plain HTML, CSS, and vanilla JavaScript. Recreate the existing page with maximum visual fidelity: a futuristic editorial AI-training sales page with a full-screen video hero, black-and-white sci-fi sections, scroll reveal animations, comparison cards, a word-by-word quote reveal, numbered deliverable cards, offer card, animated 3D guarantee seal, FAQ accordion, and minimal footer.

PAGE IDENTITY
- Page title: "Future Editorial Hero"
- Meta description: "Treinamento para aprender a usar IA na gestão de redes sociais com método prático, estrutura clara e aplicação real."
- Language: pt-BR.
- Page type: long-form sales landing page for an AI/social-media training product.
- Visual style: futuristic editorial, monochrome sci-fi, high contrast black/light sections, thin borders, large condensed-feeling uppercase typography, glossy technical imagery, and restrained premium motion.
- Overall background: pale gray body gradient before the dark content starts; most content sections are pure black.
- Primary font: system sans stack "Segoe UI", "Helvetica Neue", Arial, sans-serif.
- Core fidelity rule: the first viewport must be a video-backed hero, not a static image. Preserve the desktop/mobile video switch, autoplay resilience script, scroll reveals, FAQ behavior, and animated 3D "7" guarantee seal.

ASSETS DE IMAGEM E VIDEO
Use exatamente estes assets por link. Nao use placeholders visuais, midia gerada, banco de imagens ou alternativas parecidas. Preencha apenas o campo "Link" de cada item. Os assets estao em ordem de aparicao na pagina.

1. Video desktop de fundo do hero
   Tipo: video
   Link:https://res.cloudinary.com/dalwymbky/video/upload/v1782346534/hero2_gtrjg7.mp4
   Aparece em: primeira dobra da pagina, como video de fundo em tela cheia no desktop/tablet.
   Detalhes: MP4 horizontal 1280x720, 30fps, duracao aproximada de 8s; visual futurista/editorial em tons claros usado atras do titulo principal.
   Renderizacao: elemento <video> absoluto inset: 0, width: 100%, height: 100%, object-fit: cover, object-position: center top, autoplay, muted, loop, playsinline, preload="auto", sem controles, escondido em telas <=720px.

2. Video mobile de fundo do hero
   Tipo: video
   Link:https://res.cloudinary.com/dalwymbky/video/upload/v1782346535/hero2mobile_vy9zzi.mp4
   Aparece em: primeira dobra da pagina em telas <=720px.
   Detalhes: MP4 quadrado 1080x1080, 30fps, duracao aproximada de 8s; versao mobile do mesmo visual futurista do hero.
   Renderizacao: elemento <video> absoluto inset: 0, object-fit: cover, object-position: center center, transform: scale(1.08), autoplay, muted, loop, playsinline, preload="auto", exibido apenas em telas <=720px.

3. Imagem futurista da secao caos digital
   Tipo: imagem
   Link:https://res.cloudinary.com/dalwymbky/image/upload/v1782346528/b2_j1oc3v.png
   Aparece em: secao "O CAOS DA ROTINA DIGITAL", lado esquerdo no desktop e abaixo do texto no mobile.
   Detalhes: PNG horizontal 1672x941; render monocromatico de cabeca/capacete futurista branco com visor preto sobre fundo transparente/preto.
   Renderizacao: <img> dentro de <figure class="about-block__media reveal-media">, largura 100%, altura auto, object-fit: cover, animacao flutuante aboutFloat e reveal com blur/translate/scale.

4. Imagem do entregavel 1
   Tipo: imagem
   Link:https://res.cloudinary.com/dalwymbky/image/upload/v1782346527/i1_va5clt.png
   Aparece em: primeiro card da secao "O QUE VOCE VAI RECEBER".
   Detalhes: PNG vertical 1080x1350; fundo claro sci-fi com numero grande "1" preto e formas tecnicas branco/cinza.
   Renderizacao: imagem de card, largura 100%, altura auto, sem recorte, dentro de card branco com borda, raio 18px e legenda abaixo.

5. Imagem do entregavel 2
   Tipo: imagem
   Link:https://res.cloudinary.com/dalwymbky/image/upload/v1782346527/i1_va5clt.png
   Aparece em: segundo card da secao "O QUE VOCE VAI RECEBER".
   Detalhes: PNG vertical 1080x1350; fundo preto/cinza sci-fi com numero grande "2" escuro e formas tecnicas brilhantes.
   Renderizacao: imagem de card, largura 100%, altura auto, card deslocado para baixo no desktop por margin-top: 46px.

6. Imagem do entregavel 3
   Tipo: imagem
   Link:https://res.cloudinary.com/dalwymbky/image/upload/v1782346527/i1_va5clt.png
   Aparece em: terceiro card da secao "O QUE VOCE VAI RECEBER".
   Detalhes: PNG vertical 1080x1350; fundo claro sci-fi com numero grande "3" preto e formas tecnicas branco/cinza.
   Renderizacao: imagem de card, largura 100%, altura auto, sem deslocamento vertical no desktop.

7. Imagem do entregavel 4
   Tipo: imagem
   Link:https://res.cloudinary.com/dalwymbky/image/upload/v1782346527/i1_va5clt.png
   Aparece em: quarto card da secao "O QUE VOCE VAI RECEBER".
   Detalhes: PNG vertical 1080x1350; fundo preto/cinza sci-fi com numero grande "4" escuro e formas tecnicas brilhantes.
   Renderizacao: imagem de card, largura 100%, altura auto, card deslocado para baixo no desktop por margin-top: 46px.

Fonts and external CSS:
1. System sans-serif stack
   URL/import: none.
   Used for: all visible text, buttons, cards, FAQ, and footer.
2. Times New Roman fallback
   URL/import: none.
   Used for: the large animated guarantee number "7" only.

NOTAS PARA TROCA DE ASSETS
- Preencha apenas os campos "Link" da lista acima.
- As imagens e videos devem ser usados somente via URL.
- Mantenha os nomes, a ordem, o uso em cada secao, o object-fit, o posicionamento e o comportamento descritos.
- Nao substitua os videos do hero por imagem estatica.
- Mantenha os icones CSS inline, o shape da linha do hero, o selo 3D de garantia e os efeitos de reveal como elementos nativos do codigo.

DEPENDENCIES
- Plain HTML, CSS, and vanilla JavaScript only.
- No framework, no animation library, no WebGL.
- Use IntersectionObserver for scroll reveal animations.
- Use JavaScript to keep hero videos autoplaying on visibility/focus/touch/click events.
- Use JavaScript to split quote text into word spans for word-by-word reveal.
- Use JavaScript for the FAQ accordion.

GLOBAL STYLES
- :root variables:
  - --bg: #efefed
  - --panel: rgba(255, 255, 255, 0.6)
  - --ink: #0d0d0d
  - --muted: #626262
  - --line: rgba(15, 15, 15, 0.08)
  - --line-strong: rgba(15, 15, 15, 0.14)
  - --card: rgba(255, 255, 255, 0.34)
  - --shadow: 0 20px 80px rgba(0, 0, 0, 0.08)
  - --radius: 26px
  - --max-width: 1240px
- Universal box-sizing: border-box.
- html { scroll-behavior: smooth; }
- body: margin 0; min-height 100vh; color #0d0d0d; font-family "Segoe UI", "Helvetica Neue", Arial, sans-serif; background combines radial-gradient(circle at top left, rgba(255,255,255,.9), transparent 32%) and linear-gradient(180deg, #f5f5f3 0%, #ebebe8 100%).
- Links inherit color and remove underline.
- .page-shell { min-height: 100vh; }

DESIGN TOKENS
- Dark section background: #000000.
- Dark section text: #f3f3f1.
- Light section background: #f5f4f0.
- Main black text: #101010 or #111111.
- Muted dark text: rgba(255,255,255,.42) to rgba(255,255,255,.58).
- Primary button: black gradient linear-gradient(180deg, #202020 0%, #050505 100%), white text, border rgba(255,255,255,.18), shadow 0 18px 48px rgba(0,0,0,.18).
- Comparison CTA: #f4f4f1 background with #111111 text.
- Offer CTA: linear-gradient(180deg, #ffffff 0%, #e9e9e4 100%), black text, uppercase.
- Common large heading letter-spacing: about -0.055em.
- Common card radius: 18px to 28px.
- Max content width: 1240px.

SECTION ORDER
1. Video Hero
2. About / Chaos Block
3. Services / Benefits
4. Comparison
5. Quote Method Block
6. Deliverables
7. Offer
8. Guarantee
9. FAQ
10. Minimal Footer

REUSABLE COMPONENTS

Component: Primary Button
- Structure: <a class="button button--primary" href="#buy">...</a>.
- Base style: inline-flex centered, min-height 48px, padding 0 22px, border-radius 12px, font-size .84rem, font-weight 500.
- Primary style: min-height 60px, padding 0 38px, black vertical gradient, white text, 1px translucent white border, shadow 0 18px 48px rgba(0,0,0,.18), font-size .98rem, font-weight 600, letter-spacing .01em.
- Interaction: hover/focus translateY(-1px) over 180ms.

Component: Scroll Reveal
- .reveal-media: starts opacity 0, translateY(46px) scale(.96), blur 18px; visible state opacity 1, no blur, transform reset; transition opacity 900ms, transform/filter 1100ms.
- .reveal-side: starts opacity 0, translateX(48px), blur 10px; visible state reset; transition opacity 850ms, transform/filter 950ms.
- .reveal-up: starts opacity 0, translateY(52px), blur 10px; visible state reset; transition opacity 800ms, transform/filter 950ms.
- .reveal-mark: comparison list items start opacity 0, translateY(18px), blur 10px; visible state reveals item and its check/x mark.
- Trigger: IntersectionObserver threshold .22 and rootMargin 0px 0px -8% 0px; reveal once, then unobserve.

Component: Word Reveal
- JS recursively splits every .reveal-write text node into <span class="reveal-word"> while preserving whitespace and nested <em>.
- Each word has CSS variable --word-index.
- .reveal-word: inline-block, opacity 0, translateY(12px), blur 8px; transition opacity 500ms, transform/filter 700ms.
- Delay: calc(var(--word-index) * 45ms).
- .reveal-write--delay .reveal-word: delay starts at 180ms plus the word index.

Component: FAQ Accordion
- Each .faq-item__trigger toggles one item.
- Opening one item closes all others.
- Set aria-expanded to true/false and toggle hidden on .faq-item__answer.
- Plus icon uses two pseudo-elements; vertical bar fades to opacity 0 when open.

SECTION 1: VIDEO HERO
- Height: min-height: 100vh.
- Layout: .hero position relative, overflow hidden, padding 56px 48px 0, isolation isolate.
- Media: .hero__media and videos are absolute inset 0. Desktop video visible by default; mobile video display none until <=720px.
- Video rendering: object-fit: cover, object-position: center top, pointer-events none, user-select none, hide webkit media controls and playback button.
- Content wrapper: .hero__grid relative z-index 1, width min(100%, 1240px), margin auto, display grid one column, align-items start, padding-top 12px.
- Title:
  - Text lines exactly:
    DOMINE A IA E
    TRANSFORME SUAS
    REDES SOCIAIS
  - .hero__title: margin 14px 0 0 42px, max-width 860px, font-size clamp(3.15rem, 5.85vw, 5.55rem), line-height .96, letter-spacing -.05em, font-weight 300, uppercase, text-align left.
  - Title spans display inline-block and stay nowrap.
- Subheadline text:
  Aprenda a usar inteligência artificial para planejar, produzir, organizar e acelerar a gestão das suas redes sociais com mais clareza, consistência e menos sobrecarga no dia a dia.
  - Margin 24px 0 0 42px, max-width 560px, color #4f4f4f, font-size 1.02rem, line-height 1.9.
- CTA: Quero Dominar a IA Agora, margin 28px 0 0 42px.
- Decorative line: .hero__line relative z-index 1, width min(100%, 1240px), margin 42px auto 0, height 64px. Its ::before uses background rgba(128,128,128,.11) and clip-path polygon 0 62%, 39% 62%, 48% 0, 100% 0, 100% 25%, 52% 25%, 43% 98%, 0 98%.
- Animation/interaction: videos must autoplay muted loop and be kept playing by JS retries.

SECTION 2: ABOUT / CHAOS BLOCK
- Section classes: .section-dark.about-block.
- Background: #000, text #f3f3f1.
- Padding: 88px 48px.
- Inner layout: grid minmax(0, 1.08fr) minmax(360px, 480px), align center, gap 72px, width min(100%, 1240px), margin auto.
- Media: futuristic helmet image in .about-block__media reveal-media; overflow hidden; image width 100%, height auto, object-fit: cover; animation aboutFloat 8s ease-in-out infinite, moving up -10px and scaling to 1.012 at 50%.
- Media fade overlay: ::after bottom 38% black gradient, opacity 1 before reveal and fades to 0 when visible.
- Title:
  O CAOS DA
  ROTINA DIGITAL
  - Font-size clamp(3.65rem, 6.3vw, 5.6rem), line-height .96, letter-spacing -.055em, font-weight 300, uppercase, margin 26px 0 0.
- Tags: falta de tempo, bloqueio criativo, atraso constante; flex wrap, gap 16px, margin-top 34px; pill border rgba(255,255,255,.14), radius 999px, min-height 34px, padding 0 16px.
- Copy:
  Criar conteúdo, manter frequência, responder demandas, pensar em calendário e ainda tentar crescer nas redes virou uma operação pesada para quem faz tudo sozinho ou depende de processos lentos.
  - Max-width 410px, color rgba(255,255,255,.52), font-size 1rem, line-height 1.9.

SECTION 3: SERVICES / BENEFITS
- Section classes: .section-dark.services-block.
- Padding: 64px 48px 108px.
- Title: O QUE VOCÊ GANHA COM O SOCIAL IA PRO; max-width 980px, font-size clamp(2.95rem, 5.4vw, 4.7rem), line-height .98, letter-spacing -.055em, font-weight 300, uppercase.
- Grid: 3 columns, gap 28px, margin-top 64px.
- Cards: .service-card reveal-up, min-height 360px, padding 36px 34px 30px, border radius 24px, background #171717, border rgba(255,255,255,.04), centered text.
- Card hover: translateY(-8px), border rgba(255,255,255,.12), deeper shadow.
- Card icons are CSS-only inside 54px circular translucent holders:
  - headset icon for "Mais Agilidade"
  - play/assistant circle for "Mais Clareza"
  - screen/device icon for "Mais Escala"
- Card titles/copy:
  - Mais Agilidade: Aprenda a usar IA para acelerar ideias, roteiros, legendas, planejamentos e tarefas que hoje consomem horas da sua semana.
  - Mais Clareza: Tenha um processo objetivo para organizar conteúdo, manter consistência e parar de depender apenas de improviso.
  - Mais Escala: Descubra como usar ferramentas de IA para produzir melhor sem perder identidade, estratégia e qualidade de comunicação.
- Title margin in cards 42px; font-size 1.9rem; copy max-width 280px, color rgba(255,255,255,.42), line-height 1.95.
- Reveal delays: 0ms, 180ms, 360ms across the three service cards.

SECTION 4: COMPARISON
- Section classes: .section-dark.comparison-block.
- Padding: 44px 48px 120px.
- Header centered.
- Title: VEJA A DIFERENÇA NA PRÁTICA; font-size clamp(3.2rem, 6vw, 5rem), line-height .98, letter-spacing -.055em, font-weight 300, uppercase.
- Grid: two equal columns, gap 28px, margin-top 52px.
- Negative card: dark translucent gradient, border rgba(255,255,255,.08), radius 24px.
- Positive card: light card background #f5f5f2, border rgba(255,255,255,.92), black text.
- Card titles: Sem o Social IA Pro and Com o Social IA Pro; font-size 2rem, line-height 1.05, font-weight 300.
- Negative list items:
  - Demora para criar conteúdo
  - Falta de constância nas postagens
  - Decisões baseadas em improviso
  - Mais desgaste e menos produção
- Positive list items:
  - Produção mais rápida e estruturada
  - Processo claro para publicar com frequência
  - Uso estratégico de prompts e ferramentas
  - Mais resultado com menos esforço operacional
- List item style: min-height 72px, padding-left 34px, border-bottom, reveal from blur/translate. Negative marker content is ×; positive marker content is ✓.
- CTA centered below cards, margin-top 40px: Quero Dominar a IA Agora with .button--comparison light style.

SECTION 5: QUOTE METHOD BLOCK
- Section classes: .section-dark.quote-block.
- Padding: 10px 48px 128px.
- Inner width: min(100%, 980px).
- Panel: padding 44px 56px 40px, border rgba(255,255,255,.06), subtle dark translucent vertical gradient, centered text, overflow hidden.
- Panel corner marks: ::before and ::after draw 120px corner outlines at top-left and bottom-right.
- Quote text, word-revealed:
  Você não vai apenas usar ferramentas,
  <em>vai aprender um método aplicável.</em>
  O foco é transformar IA em processo real para gerenciar redes sociais.
- Quote typography: max-width 760px, color #f3ecde, font-size clamp(2.25rem, 4.6vw, 4rem), line-height 1.02, letter-spacing -.045em, font-weight 300. em is italic, color #dfc19a.
- Meta text, delayed word reveal:
  Em vez de dicas soltas ou promessas genéricas, o treinamento mostra como encaixar a IA na rotina, com lógica, fluxo e uso prático.
  - Max-width 620px, margin-top 24px, color rgba(255,255,255,.58), font-size 1.12rem, line-height 1.85.

SECTION 6: DELIVERABLES
- Section classes: .section-light.deliverables-block.
- Background: #f5f4f0; color #101010.
- Padding: 84px 48px 118px.
- Header max-width 520px.
- Title:
  O QUE VOCÊ
  VAI RECEBER
  - Font-size clamp(3.1rem, 5.8vw, 4.9rem), line-height .98, letter-spacing -.055em, font-weight 300, uppercase.
- Grid: repeat(4, 1fr), gap 26px, align-items start, margin-top 48px.
- Cards: .deliverable-card reveal-up, overflow hidden, border rgba(16,16,16,.08), radius 18px, background rgba(255,255,255,.92), shadow 0 18px 34px rgba(16,16,16,.045).
- Hover: translateY(-4px).
- Cards 2 and 4 use .deliverable-card--offset with margin-top 46px on desktop.
- Captions: padding 16px 18px 18px, border-top rgba(16,16,16,.06), background rgba(255,255,255,.98).
- Cards:
  1. Treinamento Base: A base completa para entender como aplicar IA no seu processo de criação, organização e gestão de conteúdo.
  2. Prompts Prontos: Modelos práticos para acelerar ideias, roteiros, legendas e tarefas que hoje travam sua produção no dia a dia.
  3. Fluxo de Produção: Um caminho claro para organizar publicação, manter constância e transformar IA em rotina de execução real.
  4. Aplicação Estratégica: Direcionamento para usar IA com mais intenção, sem perder posicionamento, clareza da marca e consistência na comunicação.

SECTION 7: OFFER
- Section classes: .section-dark.offer-block.
- Padding: 108px 48px 128px.
- Inner width: min(100%, 920px).
- Card: width min(100%, 680px), margin auto, padding 52px 56px, border radius 28px, border rgba(255,255,255,.12), backdrop-filter blur(10px), centered.
- Card background: radial white glow at top center plus subtle dark translucent vertical gradient.
- Top highlight line: ::before 1px horizontal gradient from transparent to rgba(255,255,255,.34) back to transparent.
- Eyebrow: Oferta, uppercase, font-size .72rem, letter-spacing .28em, color rgba(255,255,255,.46).
- Title: TREINAMENTO IA PARA REDES SOCIAIS; font-size clamp(1.7rem, 3vw, 2.4rem), line-height 1.1, letter-spacing -.035em, font-weight 300, uppercase, nowrap on desktop.
- List items:
  - Acesso ao treinamento completo
  - Método prático de aplicação da IA
  - Modelos para produção de conteúdo
  - Estrutura para gestão mais eficiente
- List item style: flex, gap 12px, padding 16px 18px, border radius 16px, dark translucent background, small white dot with outer glow.
- Price: label Investimento; value R$497, font-size clamp(2.5rem, 4vw, 3.4rem), font-weight 500.
- CTA: Quero Garantir Meu Acesso Agora, .button--offer, min-width 320px, min-height 62px, white gradient, uppercase, font-size .9rem, font-weight 700.

SECTION 8: GUARANTEE
- Section classes: .section-dark.guarantee-block.
- Padding: 0 48px 132px.
- Card: grid 230px minmax(0, 1fr), gap 42px, padding 42px 48px, border radius 28px, border rgba(255,255,255,.08), subtle dark translucent gradient.
- Seal: perspective 1200px.
- Ring: 178x178 circle, border rgba(255,255,255,.14), radial inner glow, inset ring, shadow, transform-style: preserve-3d.
- Animated number:
  - .guarantee-seven: 100x100, 3D, animation guarantee-seven-float 5.5s ease-in-out infinite.
  - Back "7": Times New Roman, font-size 5.6rem, weight 700, color rgba(255,255,255,.14), translated 10px, 12px, -50px, blur 1px.
  - Front "7": color #f4f4f1, text shadow, transformed translate3d(0,0,40px) rotateX(18deg) rotateY(-20deg).
  - Glow: 118x28 blurred radial pill under the number.
- Keyframes: 0/100 rotateX(4deg) rotateY(-10deg) translateY(0); 50% rotateX(-6deg) rotateY(12deg) translateY(-8px).
- Content:
  - Eyebrow Garantia
  - Title 7 dias de garantia
  - Copy: Você pode apresentar aqui sua garantia para reduzir objeções e aumentar a confiança de quem está quase entrando no treinamento.
  - Note: Substitua este texto pelos termos reais da garantia, prazo e condições.

SECTION 9: FAQ
- Section classes: .section-dark.faq-block.
- Padding: 0 48px 84px.
- Inner width: min(100%, 980px).
- Header centered.
- Eyebrow: FAQ.
- Title: PERGUNTAS FREQUENTES; font-size clamp(2.9rem, 5.3vw, 4.5rem), line-height .98, letter-spacing -.055em, font-weight 300, uppercase, nowrap on desktop.
- FAQ list: margin-top 42px, top border rgba(255,255,255,.08).
- Items have bottom border rgba(255,255,255,.08).
- Triggers: flex space-between, padding 24px 0, transparent button, left aligned.
- Questions and answers:
  1. Esse treinamento é para iniciantes?
     Sim. A proposta é ensinar como usar IA na gestão das redes sociais mesmo para quem ainda não tem um processo estruturado.
  2. Eu preciso entender de tecnologia para aplicar?
     Não. O treinamento pode ser apresentado de forma prática, com foco no uso direto das ferramentas no contexto das redes sociais.
  3. Esse conteúdo serve para negócios e perfis pessoais?
     Sim. A lógica de planejamento, criação e otimização com IA pode ser adaptada para diferentes nichos, marcas e posicionamentos.
  4. Eu vou receber materiais prontos para usar?
     A estrutura já prevê espaço para incluir prompts, modelos, exemplos e recursos práticos que acelerem a aplicação.
  5. Em quanto tempo eu consigo começar a aplicar?
     A proposta da oferta é permitir aplicação rápida, para que a pessoa já consiga usar IA na rotina logo nas primeiras etapas.
- Answer paragraph max-width 720px, color rgba(255,255,255,.5), font-size 1rem, line-height 1.85.

SECTION 10: MINIMAL FOOTER
- .footer-minimal: padding 22px 16px 30px, background #000, top border rgba(255,255,255,.06).
- Text: Todos os direitos reservados.
- Typography: margin 0, color rgba(255,255,255,.34), font-size .78rem, letter-spacing .14em, centered, uppercase.

INTERACTIONS AND MOTION
- On script load, add is-ready to the root HTML element.
- Hero videos:
  - Set muted/defaultMuted/autoplay/loop/playsInline/control attributes in JS.
  - Remove native controls and disable picture-in-picture/remote playback.
  - Try to play on loadeddata, when paused, ended, visibilitychange, pageshow, focus, touchstart, touchend, and click.
  - Retry every 1200ms up to 20 times; clear early after sustained playback.
- Scroll reveal:
  - Observe .reveal-media, .reveal-side, .reveal-up, .reveal-mark, and .reveal-write.
  - Add .is-visible once when intersecting; fallback immediately visible if IntersectionObserver is unavailable.
- Service card hover: lift -8px and increase border/shadow.
- Deliverable card hover: lift -4px.
- Buttons hover/focus: lift -1px.
- FAQ: only one item open at a time.

RESPONSIVE RULES
- At max-width 1100px:
  - Hero padding becomes 28px 24px 0.
  - Hero grid remains single column and line margin-top becomes 26px.
  - About grid becomes 1 column; padding 72px 24px; gap 40px.
  - Services padding 48px 24px 84px; services grid becomes 1 column, gap 22px, margin-top 40px.
  - Comparison padding 24px 24px 88px; comparison grid becomes 1 column.
  - Quote padding 0 24px 96px; panel padding 38px 34px 34px.
  - Offer padding 88px 24px 96px; offer card padding 40px 32px.
  - Guarantee card becomes 1 column, justify-items start, padding 36px 32px.
  - FAQ padding 0 24px 72px.
- At max-width 720px:
  - Hide desktop hero video and show mobile hero video.
  - Hero min-height: 100svh, padding 18px 16px 0.
  - Hero video uses object-position: center center and transform: scale(1.08).
  - Hero content centered with padding-top 28px.
  - Hero title margin 18px auto 0, font-size clamp(2.2rem, 8.8vw, 3.05rem), line-height .94, centered, spans nowrap.
  - Subheadline margin 16px auto 0, max-width 360px, font-size .9rem, line-height 1.6, centered.
  - Hero actions centered, margin-top 18px, wrapping allowed; primary button min-height 50px, padding 0 24px, font-size .86rem.
  - Hero line height 44px, margin-top 32px, clip-path polygon 0 68%, 52% 68%, 64% 0, 100% 0, 100% 25%, 68% 25%, 56% 98%, 0 98%.
  - About padding 56px 16px; flex column; content appears before media; title font-size clamp(2.85rem, 14vw, 4.2rem).
  - Services padding 40px 16px 64px; title font-size clamp(2.6rem, 13vw, 3.8rem); service cards lose fixed min-height and use padding 30px 24px 28px.
  - Comparison padding 18px 16px 64px; title left aligned with font-size clamp(2.6rem, 13vw, 3.8rem); cards padding 28px 22px 10px; list items min-height 62px.
  - Quote padding 0 16px 72px; panel padding 30px 22px 28px; corner marks shrink to 72px; quote font-size clamp(1.9rem, 9vw, 2.8rem).
  - Deliverables padding 56px 16px 72px; grid becomes 1 column; offset cards reset margin-top to 0; title font-size clamp(2.5rem, 12vw, 3.8rem).
  - Offer padding 68px 16px 76px; card padding 30px 20px; title font-size clamp(1.2rem, 4.6vw, 1.5rem); offer button width min(100%, 320px), min-height 58px.
  - Guarantee padding 0 16px 76px; card centered, text centered, gap 28px, padding 28px 22px; seal ring 142px; number font-size 4.4rem.
  - FAQ padding 0 16px 60px; title font-size clamp(1.25rem, 5.4vw, 2rem); question font-size 1rem; answer font-size .94rem.

IMPLEMENTATION NOTES
- Return a single, self-contained HTML file with all CSS inside a <style> tag and all JavaScript inside a <script> tag.
- Preserve the exact DOM class names where possible because CSS and JS are class-driven.
- Keep the video attributes on both hero videos: autoplay, muted, loop, playsinline, webkit-playsinline, x5-playsinline, x5-video-player-type="h5", x5-video-player-fullscreen="false", preload="auto", disablepictureinpicture, controlslist="nodownload nofullscreen noremoteplayback", disableremoteplayback, tabindex="-1", aria-hidden="true".
- Do not add a navigation bar; the original begins directly with the hero.
- Use decoded Portuguese accents in visible text.

STRICT RECREATION RULES
- Do not invent new sections or remove existing sections.
- Do not replace the hero videos with a static image.
- Do not use placeholder media, generated substitutes, or stock imagery. Use the exact Cloudinary asset URLs provided.
- Do not change the order of assets or sections.
- Preserve the large uppercase editorial typography, thin borders, black/light contrast, card radii, hover lifts, reveal blur/translate animations, word-by-word quote reveal, comparison markers, FAQ single-open behavior, and animated 3D guarantee "7".
- Preserve desktop/mobile video switching and the autoplay resilience behavior.
- Preserve responsive breakpoints at 1100px and 720px and the specific mobile hero composition.`;
