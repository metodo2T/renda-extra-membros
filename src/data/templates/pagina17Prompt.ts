export const pagina17Prompt = `Build a static responsive landing page for the infoproduct "Método Conteúdo com IA".
You MUST recreate the exact same page using the provided HTML template below.

CRITICAL INSTRUCTIONS:
1. OUTPUT EXACTLY THIS HTML CODE. Do not change any class names, IDs, or the structure of the tags. The CSS (assets/css/styles.css) and JS (assets/js/main.js) files are pre-configured in the environment and depend on these exact classes and IDs.
2. Replace ONLY the copy (the text inside the tags) with the appropriate content for the user's specific product, keeping the same tone and purpose.
3. DO NOT change the asset paths (e.g. assets/images/hero1.jpg, assets/videos/V01.mp4). Keep them exactly as they are.
4. Output ONLY the complete HTML code. Do not include markdown formatting or explanations.

--- BEGIN HTML TEMPLATE ---
﻿<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Método Conteúdo com IA</title>
  <meta name="description" content="Aprenda a criar conteúdo com inteligência artificial de forma prática, rápida e sem travar na tela em branco." />

  <!-- Preload: recursos críticos -->
  <link rel="preload" href="assets/images/hero1.jpg" as="image" media="(min-width: 768px)" />
  <link rel="preload" href="assets/images/heromobile.png" as="image" media="(max-width: 767px)" />
  <link rel="preload" href="assets/css/styles.css" as="style" />
  <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com" />
  <link rel="dns-prefetch" href="https://fonts.googleapis.com" />

  <!-- Google Fonts (async para não bloquear render) -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,500;0,600;0,700;0,800;1,600;1,700&family=Inter:wght@300;400;500;600;700&display=swap" />
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,500;0,600;0,700;0,800;1,600;1,700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" media="print" onload="this.media='all'" />
  <noscript><link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,500;0,600;0,700;0,800;1,600;1,700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" /></noscript>

  <!-- Styles -->
  <link rel="stylesheet" href="assets/css/styles.css" />
</head>
<body>

  <!-- â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
       HERO
       â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• -->
  <section class="hero" id="heroSection">
    <!-- Background image -->
    <picture>
      <source media="(max-width: 767px)" srcset="assets/images/heromobile.png" />
      <img class="hero-video hero-image" src="assets/images/hero1.jpg" alt="Background hero" fetchpriority="high" />
    </picture>

    <!-- Content -->
    <div class="hero-content">
      <div class="hero-seals">
        <span class="hero-seal">Sem bloqueio criativo</span>
        <span class="hero-seal">Sem depender de agência</span>
        <span class="hero-seal">Sem perder horas escrevendo</span>
      </div>
      <h1 class="hero-name name-reveal">Use este método e <span style="color:#00a8b5">crie conteúdo com IA</span> todos os dias sem travar</h1>
      <p class="hero-desc blur-in">
        Chega de olhar para a tela sem saber o que postar. Com um processo validado e prompts prontos, você cria ideias, roteiros, legendas e peças completas com IA em minutos.
      </p>
      <div class="hero-ctas blur-in">
        <div class="cta-wrap">
          <span class="gradient-ring"></span>
          <button class="btn-primary">Quero criar conteúdo com IA hoje</button>
        </div>
      </div>
    </div>
  </section>

  <!-- â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
       VIDEO CAROUSEL
       â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• -->
  <section class="video-carousel-section" id="videoCarouselSection">
    <div class="container">
      <div class="vc-header reveal">
        <div class="section-eyebrow" style="justify-content: center;">
          <div class="section-eyebrow-line"></div>
          <span class="section-eyebrow-text">Resultados Reais</span>
          <div class="section-eyebrow-line"></div>
        </div>
        <h2 class="section-heading" style="text-align: center;">
          Veja o tipo de conteúdo <em>que você vai conseguir criar</em>
        </h2>
      </div>
    </div>

        <div class="container vc-carousel-container" style="max-width: 100vw; padding: 0;">
      <!-- Sem setas de navegação (vc-nav), estrutura refatorada para drag coverflow -->
      <div class="vc-slider-wrapper" id="vcSliderWrapper">
        <div class="vc-slider-track" id="vcSliderTrack">
          <!-- Slides posicionados via absolute JS Coverflow Style -->
          <div class="vc-slide">
            <video src="assets/videos/V01.mp4" muted playsinline preload="none"></video>
          </div>
          <div class="vc-slide">
            <video src="assets/videos/V02.mp4" muted playsinline preload="none"></video>
          </div>
          <div class="vc-slide">
            <video src="assets/videos/V03.mp4" muted playsinline preload="none"></video>
          </div>
          <div class="vc-slide">
            <video src="assets/videos/V04.mp4" muted playsinline preload="none"></video>
          </div>
          <div class="vc-slide">
            <video src="assets/videos/V05.mp4" muted playsinline preload="none"></video>
          </div>
        </div>
      </div>
      <p class="vc-swipe-hint">Arraste para ver mais</p>
    </div>
  </section>

  <!-- â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
       DORES
       â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• -->
  <section class="pain-section">
    <div class="container">
      <div class="pain-header reveal">
        <h2 class="pain-heading" style="text-align: center;">Você já passou por alguma dessas situações na hora de criar conteúdo?</h2>
      </div>

      <div class="pain-list">
        <article class="pain-entry reveal-left">
          <span class="pain-dot" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"><path d="M6 6l12 12M18 6l-12 12"/></svg>
          </span>
          <p class="pain-text">Abriu a IA para pedir conteúdo e recebeu textos genéricos que parecem iguais aos de todo mundo.</p>
        </article>

        <article class="pain-entry reveal-left" style="transition-delay: 0.08s;">
          <span class="pain-dot" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"><path d="M6 6l12 12M18 6l-12 12"/></svg>
          </span>
          <p class="pain-text">Perdeu horas testando prompts, gastou energia e no final ainda achou o resultado fraco.</p>
        </article>

        <article class="pain-entry reveal-left" style="transition-delay: 0.16s;">
          <span class="pain-dot" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"><path d="M6 6l12 12M18 6l-12 12"/></svg>
          </span>
          <p class="pain-text">Precisa produzir conteúdo com frequência, mas trava na hora de transformar ideias em posts, vídeos e roteiros.</p>
        </article>

        <article class="pain-entry reveal-left" style="transition-delay: 0.24s;">
          <span class="pain-dot" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"><path d="M6 6l12 12M18 6l-12 12"/></svg>
          </span>
          <p class="pain-text">Publica sem consistência, vê o engajamento cair e sente que está ficando para trás no mercado.</p>
        </article>
      </div>

      <p class="pain-highlight" id="painHighlight">
        <span class="pain-highlight-main">É por isso que existe o </span><span class="pain-highlight-accent"> Método Conteúdo com IA</span>
      </p>
    </div>
  </section>

  <!-- PAIN MARQUEE -->
  <div class="pain-marquee-wrap">
    <div class="pain-marquee-track">
      <span class="pain-marquee-text">Método Conteúdo com IA • Método Conteúdo com IA • Método Conteúdo com IA • Método Conteúdo com IA • Método Conteúdo com IA • Método Conteúdo com IA • Método Conteúdo com IA • Método Conteúdo com IA • </span>
      <span class="pain-marquee-text">Método Conteúdo com IA • Método Conteúdo com IA • Método Conteúdo com IA • Método Conteúdo com IA • Método Conteúdo com IA • Método Conteúdo com IA • Método Conteúdo com IA • Método Conteúdo com IA • </span>
    </div>
  </div>

  <!-- ═══════════════════════════════════════════
       EXPECTATION FX SECTION 
       ═══════════════════════════════════════════ -->
  <section class="benefits-fx-section benefits-fx-primary">
    <div class="container relative reveal">
      <h2 class="section-heading" style="text-align: center; margin-bottom: 2.5rem;">Com o método <em>você vai:</em></h2>
      <div class="bfx-grid">
        
        <!-- Item 1 -->
        <div class="bfx-card">
          <div class="bfx-corner tl"></div>
          <div class="bfx-corner tr"></div>
          <div class="bfx-corner bl"></div>
          <div class="bfx-corner br"></div>
          <div class="bfx-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 6 9 17l-5-5"/>
            </svg>
          </div>
          <div class="bfx-text">
            <p style="font-size: 1.05rem; color: #eaeaea;">Criar conteúdo com mais clareza, mantendo uma comunicação forte e consistente</p>
          </div>
        </div>

        <!-- Item 2 -->
        <div class="bfx-card">
          <div class="bfx-corner tl"></div>
          <div class="bfx-corner tr"></div>
          <div class="bfx-corner bl"></div>
          <div class="bfx-corner br"></div>
          <div class="bfx-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 6 9 17l-5-5"/>
            </svg>
          </div>
          <div class="bfx-text">
            <p style="font-size: 1.05rem; color: #eaeaea;">Parar de postar no improviso e construir autoridade com conteúdos estratégicos</p>
          </div>
        </div>

        <!-- Item 3 -->
        <div class="bfx-card">
          <div class="bfx-corner tl"></div>
          <div class="bfx-corner tr"></div>
          <div class="bfx-corner bl"></div>
          <div class="bfx-corner br"></div>
          <div class="bfx-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 6 9 17l-5-5"/>
            </svg>
          </div>
          <div class="bfx-text">
            <p style="font-size: 1.05rem; color: #eaeaea;">Produzir ideias, roteiros e legendas em minutos usando inteligência artificial</p>
          </div>
        </div>

        <!-- Item 4 -->
        <div class="bfx-card">
          <div class="bfx-corner tl"></div>
          <div class="bfx-corner tr"></div>
          <div class="bfx-corner bl"></div>
          <div class="bfx-corner br"></div>
          <div class="bfx-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 6 9 17l-5-5"/>
            </svg>
          </div>
          <div class="bfx-text">
            <p style="font-size: 1.05rem; color: #eaeaea;">Transformar conteúdo em atenção, confiança e mais oportunidades de venda</p>
          </div>
        </div>

      </div>
      <div class="bfx-cta-wrap">
        <div class="gb-btn-wrap">
          <span class="gradient-ring"></span>
          <a href="#" class="gb-btn offer-btn">Quero acessar o método agora</a>
        </div>
      </div>
    </div>
  </section>

  <!-- â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
       SELECTED WORKS
       â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• -->
  <section class="works-section">
    <div class="container">
      <!-- HOW IT WORKS (Full width track breaking out of container) -->
    </div> <!-- fecha container temporário -->
    
    <section class="hiw-section" id="hiwSection">
      <div class="container">
        <div class="hiw-header reveal">
          <h2 class="hiw-heading">Veja como funciona na <em>prática</em></h2>
          <p class="hiw-desc">Você não precisa reinventar nada: eu organizei um processo direto para você sair do zero e criar conteúdo com IA de forma rápida e consistente.</p>
        </div>

        <div class="hiw-cards">
          <article class="hiw-card reveal-left" style="transition-delay: 0.05s;">
            <div class="hiw-card-content">
              <span class="hiw-step">01</span>
              <h3>Escolha um objetivo</h3>
              <p>Defina o que você quer criar no dia: post, roteiro curto, carrossel, e-mail ou oferta.</p>
            </div>
          </article>

          <article class="hiw-card reveal-left" style="transition-delay: 0.14s;">
            <div class="hiw-card-content">
              <span class="hiw-step">02</span>
              <h3>Use os prompts guiados</h3>
              <p>Aplique os prompts do método para gerar conteúdo alinhado ao seu nicho, voz e objetivo.</p>
            </div>
          </article>

          <article class="hiw-card reveal-left" style="transition-delay: 0.24s;">
            <div class="hiw-card-content">
              <span class="hiw-step">03</span>
              <h3>Refine e publique</h3>
              <p>Faça os ajustes finais e publique com segurança, sabendo exatamente o que dizer e como dizer.</p>
            </div>
          </article>
        </div>
      </div>
    </section> <!-- fecha hiw-section -->

    <div class="container"> <!-- reabre container -->
    
      <!-- REVOLUTION CTA SECTION -->
      <section class="revolution-cta-section reveal">
        <div class="rev-deliverables">
          <h2 class="rev-deliverables-title">Veja tudo o que você vai receber</h2>
          <div class="rev-deliverables-grid">
            
            <article class="rev-card rev-card-feature tight-card has-media">
              <div class="dc-corners">
                <span class="c-tl"></span><span class="c-tr"></span>
                <span class="c-bl"></span><span class="c-br"></span>
              </div>
              <div class="rev-content rev-content-feature text-center">
                <h3><em>Biblioteca de Prompts</em><br>para Conteúdo com IA</h3>
                <p>Prompts prontos para ideias, roteiros, legendas, carrosséis e conteúdos de venda. É copiar, adaptar e publicar.</p>
              </div>
              <div class="rev-feature-media tight-media">
                <img src="assets/images/e1.png" alt="Biblioteca de Prompts para Conteúdo com IA" class="rev-feature-img tight-img" loading="lazy" decoding="async" />
              </div>
            </article>

            <article class="rev-card rev-card-feature tight-card has-media">
              <div class="dc-corners">
                <span class="c-tl"></span><span class="c-tr"></span>
                <span class="c-bl"></span><span class="c-br"></span>
              </div>
              <div class="rev-content rev-content-feature text-center">
                <h3><em>Guia Prático</em><br>de Criação com IA</h3>
                <p>Passo a passo direto ao ponto mostrando como transformar qualquer ideia em conteúdo estratégico com apoio da IA.</p>
              </div>
              <div class="rev-feature-media tight-media">
                <img src="assets/images/e2.png" alt="Guia de Personalização com IA" class="rev-feature-img tight-img" loading="lazy" decoding="async" />
              </div>
            </article>

            <article class="rev-card rev-card-feature tight-card has-media" id="checklistCard">
              <div class="dc-corners">
                <span class="c-tl"></span><span class="c-tr"></span>
                <span class="c-bl"></span><span class="c-br"></span>
              </div>
              <div class="rev-content rev-content-feature text-center">
                <h3><em>Checklist</em><br>de Consistência</h3>
                <p>Um fluxo simples para manter frequência de postagem sem se perder e sem depender de inspiração.</p>
              </div>
              
              <!-- Container para animação 3D Three.js -->
              <div class="checklist-3d-container" id="checklist3d"></div>
            </article>

          </div>
        </div>
      </section>

    </div>
  </section>

  <!-- â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
       BONUS SECTION
       â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• -->
  <section class="bonus-section">
    <div class="container">
      <div class="section-header reveal bonus-header-center">
        <div>
          <div class="section-eyebrow">
            <div class="section-eyebrow-line" style="background: var(--color-stroke);"></div>
            <span class="section-eyebrow-text" style="color: var(--color-muted);">Bônus Exclusivos</span>
          </div>
          <h2 class="section-heading">E ainda <em>tem mais</em></h2>
          <p class="section-sub" style="max-width: 48rem;">Para quem adquirir o método até o dia <span id="bonusDeadlineDate">17/04/2026</span> estão garantidos 2 bônus.</p>
        </div>
      </div>

      <div class="bonus-grid">
        <!-- Bonus Card 01 -->
        <div class="bonus-card">
          <div class="bc-tag"><span>BÔNUS</span></div>
          <div class="bc-inner">
            <div class="bc-image">
              <div class="bc-glow shadow-cyan"></div>
              <!-- Animação do Guia de Publicação -->
              <div class="publish-anim-container">
                <div class="publish-window">
                  <div class="pw-header">
                    <span class="dw-dot m-red"></span><span class="dw-dot m-yel"></span><span class="dw-dot m-grn"></span>
                  </div>
                  <div class="pw-body">
                    <div class="pw-line"></div>
                    <div class="pw-line short"></div>
                    <div class="pw-box"></div>
                    <div class="pw-btn-wrap">
                      <div class="pw-btn">Publicar</div>
                    </div>
                  </div>
                </div>
                <div class="publish-tooltip">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M20 6 9 17l-5-5"/></svg>
                  ONLINE
                </div>
                <div class="publish-cursor">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#fff" stroke="#000" stroke-width="2"><path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/></svg>
                </div>
              </div>
            </div>
            <div class="bc-content">
              <div class="bc-badge"><span class="bc-badge-icon">🎁</span> BÔNUS 01</div>
              <h3 class="bc-title">Calendário de Conteúdo IA</h3>
              <p class="bc-desc">Um sistema simples para planejar conteúdos da semana inteira em poucos minutos, sem depender de inspiração.</p>
            </div>
          </div>
        </div>

        <!-- Bonus Card 02 -->
        <div class="bonus-card">
          <div class="bc-tag"><span>BÔNUS</span></div>
          <div class="bc-inner">
            <div class="bc-image">
              <div class="bc-glow shadow-cyan"></div>
              <img src="assets/images/B2.png" alt="Arsenal de Ganchos e CTAs" loading="lazy" decoding="async" style="mix-blend-mode: normal; filter: drop-shadow(0 10px 20px rgba(0,168,181,0.3)); max-width: 85%; transform: scale(1.1); margin-top: 1rem;" />
            </div>
            <div class="bc-content">
              <div class="bc-badge"><span class="bc-badge-icon">🎁</span> BÔNUS 02</div>
              <h3 class="bc-title">Arsenal de Ganchos e CTAs</h3>
              <p class="bc-desc">Biblioteca de aberturas, chamadas e fechamentos para deixar seus conteúdos mais persuasivos e aumentar ação da audiência.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="bonus-btn-container">
        <div class="gb-btn-wrap">
          <span class="gradient-ring"></span>
          <a href="#" class="gb-btn offer-btn">Acessar o Método agora</a>
        </div>
      </div>

    </div>
  </section>

  <!-- ═══════════════════════════════════════════
       BENEFITS FX SECTION
       ═══════════════════════════════════════════ -->
  <section class="benefits-fx-section">
    <div class="container relative reveal">
      <h2 class="section-heading" style="text-align: center; margin-bottom: 2rem;">O método de conteúdo com IA <em>é pra você que:</em></h2>
      <div class="bfx-grid">
        
        <!-- Item 1 -->
        <div class="bfx-card">
          <div class="bfx-corner tl"></div>
          <div class="bfx-corner tr"></div>
          <div class="bfx-corner bl"></div>
          <div class="bfx-corner br"></div>
          <div class="bfx-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
            </svg>
          </div>
          <div class="bfx-text">
            <p>Quer criar conteúdo de forma profissional sem depender de equipe grande.</p>
          </div>
        </div>

        <!-- Item 2 -->
        <div class="bfx-card">
          <div class="bfx-corner tl"></div>
          <div class="bfx-corner tr"></div>
          <div class="bfx-corner bl"></div>
          <div class="bfx-corner br"></div>
          <div class="bfx-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M3 3v18h18"/><path d="M18 9l-5-5-4 4-5-5"/>
            </svg>
          </div>
          <div class="bfx-text">
            <p>Quer fugir do conteúdo genérico com cara de texto automático.</p>
          </div>
        </div>

        <!-- Item 3 -->
        <div class="bfx-card">
          <div class="bfx-corner tl"></div>
          <div class="bfx-corner tr"></div>
          <div class="bfx-corner bl"></div>
          <div class="bfx-corner br"></div>
          <div class="bfx-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 18V6"/>
            </svg>
          </div>
          <div class="bfx-text">
            <p>Quer produzir com mais velocidade sem perder qualidade.</p>
          </div>
        </div>

        <!-- Item 4 -->
        <div class="bfx-card">
          <div class="bfx-corner tl"></div>
          <div class="bfx-corner tr"></div>
          <div class="bfx-corner bl"></div>
          <div class="bfx-corner br"></div>
          <div class="bfx-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
              <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
              <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
              <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
            </svg>
          </div>
          <div class="bfx-text">
            <p>Quer transformar conteúdo em autoridade, demanda e vendas.</p>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- ═══════════════════════════════════════════
       BANNER HIGHLIGHT COMPONENT
       ═══════════════════════════════════════════ -->
  <section class="banner-highlight-section">
    <div class="container relative reveal">
      <div class="banner-highlight-card">
        <div class="banner-border-glow"></div>
        <div class="bh-bg-smoke"></div>
        <div class="bh-inner">
          <div class="bh-animation-container">
            <div class="bh-three-wrapper">
              <canvas id="bh-three-canvas"></canvas>
            </div>
          </div>
          <div class="bh-content" style="align-items: center; text-align: center;">
            <h2 style="width: 100%; text-align: center;">Quando finalizei este método, me disseram para cobrar no mínimo <span class="text-brand">R\$ 197</span>... e faria sentido. Afinal:</h2>
            <ul class="strike-list" style="text-align: left;">
              <li><span>Uma consultoria de conteúdo estratégico custa muito mais do que esse investimento</span></li>
              <li><span>Assinaturas sem método geram volume, mas nem sempre geram conteúdo que vende</span></li>
              <li><span>Criar tudo no improviso demanda tempo, energia e consistência que poucos conseguem manter</span></li>
            </ul>
            <p class="post-strike-text">Mas eu não queria que preço fosse barreira para você começar</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
       OFFER SECTION
       â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• -->
  <section class="offer-section">
    <div class="container offer-container">
      <div class="offer-card reveal">
        <div class="offer-glow-bg"></div>
        <div class="offer-inner">
          <div class="offer-header">
            <div class="offer-features">
              <p class="offer-features-title">Hoje você pode entrar no método com uma condição especial:</p>
              <ul class="offer-checklist">
                <li><svg class="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg> Biblioteca de prompts para conteúdo com IA</li>
                <li><svg class="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg> Processo guiado para criação diária de conteúdo</li>
                <li><svg class="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg> Guia para transformar conteúdo em vendas com clareza</li>
                <li><svg class="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg> Pack de ideias e estruturas de alta conversão</li>
                <li><svg class="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg> Acesso às atualizações e novos materiais</li>
              </ul>
            </div>

            <div class="offer-divider"></div>

            <p class="price-from old-price">De R\$149,00</p>
            <p class="price-now-label">por apenas</p>
            <div class="price-big">
              <span class="price-currency">R\$</span>
              <span class="price-value">49</span>
              <span class="price-cents">,00</span>
            </div>
          </div>

          <div class="offer-action">
            <a href="#" class="btn-ref">
              <span class="btn-ref-text">Quero criar conteúdo com IA hoje</span>
              <span class="btn-ref-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </span>
            </a>
            
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ═══════════════════════════════════════════
       GUARANTEE SECTION
       ═══════════════════════════════════════════ -->
  <section class="guarantee-section">
    <div class="container guarantee-container reveal" style="text-align: center;">
      <div class="guarantee-icon">
        <div class="g-seal-3d">
          <div class="g-seal-ring-out"></div>
          <div class="g-seal-ring-in">
            <span class="g-seal-text">7</span>
          </div>
          <div class="g-seal-shadow"></div>
        </div>
      </div>
      <div class="guarantee-content">
        <h2 class="guarantee-title"><em>7 dias</em> de Garantia Incondicional</h2>
        <p class="guarantee-desc">
          Você tem 7 dias para testar o método completo. Se não fizer sentido para você, é só pedir reembolso e eu devolvo 100% do valor.
        </p>
      </div>
    </div>
  </section>

  <!-- â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
       COMPARISON SECTION
       â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• -->
  <section class="comparison-section">
    <div class="container">
      <div class="section-header reveal" style="text-align: center; justify-content: center; margin-bottom: 4rem;">
        <h2 class="section-heading" style="margin: 0;">Agora, você tem <em>duas opções</em></h2>
      </div>

      <div class="comparison-grid">
        <!-- Option 1 -->
        <div class="comp-card comp-bad reveal-left">
          <div class="comp-header">
            <span class="comp-badge bad">Opção 1</span>
            <h3>Sem o método de conteúdo com IA:</h3>
          </div>
          <ul class="comp-list">
            <li><svg class="comp-icon bad-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18M6 6l12 12"/></svg> Continuar travando para criar conteúdo com frequência.</li>
            <li><svg class="comp-icon bad-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18M6 6l12 12"/></svg> Depender de inspiração e perder tempo com tentativa e erro.</li>
            <li><svg class="comp-icon bad-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18M6 6l12 12"/></svg> Publicar conteúdo genérico que não diferencia sua marca.</li>
            <li><svg class="comp-icon bad-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18M6 6l12 12"/></svg> Atrair atenção sem conseguir transformar em oportunidades reais.</li>
          </ul>
        </div>
        
        <!-- Option 2 -->
        <div class="comp-card comp-good reveal-right">
          <div class="comp-glow"></div>
          <div class="comp-header">
            <span class="comp-badge good">Opção 2</span>
            <h3>Com o método de conteúdo com IA:</h3>
          </div>
          <ul class="comp-list">
            <li><svg class="comp-icon good-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg> Partir de estruturas validadas em vez de começar do zero.</li>
            <li><svg class="comp-icon good-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg> Criar conteúdo estratégico em poucos minutos por dia.</li>
            <li><svg class="comp-icon good-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg> Se diferenciar da concorrência com mensagem clara.</li>
            <li><svg class="comp-icon good-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg> Transformar consistência de conteúdo em autoridade e vendas.</li>
          </ul>
        </div>
      </div>

      <div class="comp-action reveal" style="text-align: center; margin-top: 3rem;">
        <div class="gb-btn-wrap">
          <span class="gradient-ring"></span>
          <a href="#" class="gb-btn offer-btn">Quero acessar o método agora</a>
        </div>
      </div>
    </div>
  </section>

  <!-- â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
       FAQ SECTION
       â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• -->
  <section class="faq-section">
    <div class="container faq-container">
      <div class="section-header reveal" style="text-align: center; justify-content: center;">
        <h2 class="section-heading">Perguntas <em>Frequentes</em></h2>
      </div>

      <div class="faq-list reveal">
        <!-- FAQ 1 -->
        <details class="faq-item">
          <summary class="faq-question">
            <span>Preciso assinar alguma ferramenta paga para aplicar o método?</span>
            <svg class="faq-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
          </summary>
          <div class="faq-answer">
            <p>Não. Você consegue aplicar com ferramentas acessíveis, e eu mostro opções para diferentes níveis de investimento.</p>
          </div>
        </details>
        <!-- FAQ 2 -->
        <details class="faq-item">
          <summary class="faq-question">
            <span>Preciso saber design, copy ou edição avançada?</span>
            <svg class="faq-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
          </summary>
          <div class="faq-answer">
            <p>Não. O foco é execução simples: você usa a estrutura, adapta com IA e publica.</p>
          </div>
        </details>
        <!-- FAQ 3 -->
        <details class="faq-item">
          <summary class="faq-question">
            <span>Posso personalizar para meu nicho e estilo de comunicação?</span>
            <svg class="faq-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
          </summary>
          <div class="faq-answer">
            <p>Sim. O método foi feito para personalização total, mantendo consistência e posicionamento.</p>
          </div>
        </details>
        <!-- FAQ 4 -->
        <details class="faq-item">
          <summary class="faq-question">
            <span>Funciona para qualquer nicho?</span>
            <svg class="faq-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
          </summary>
          <div class="faq-answer">
            <p>Sim. Você adapta os prompts e estruturas para o seu mercado, produto e público.</p>
          </div>
        </details>
        <!-- FAQ 5 -->
        <details class="faq-item">
          <summary class="faq-question">
            <span>Em quanto tempo começo a produzir com consistência?</span>
            <svg class="faq-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
          </summary>
          <div class="faq-answer">
            <p>No mesmo dia você já consegue criar os primeiros conteúdos e publicar com direção clara.</p>
          </div>
        </details>
      </div>
    </div>
  </section>

  <footer class="copyright-footer">
    <p>© 2026 Operação Conteúdo com IA. Todos os direitos reservados.</p>
  </footer>

  <!-- â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
       SCRIPTS â€” CDN: GSAP + hls.js
       â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• -->
  <!-- Scripts (defer para não bloquear render) -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" defer></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js" defer></script>
  <script src="assets/js/main.js" defer></script>
  <script src="assets/js/checklist3d.js" defer></script>
</body>
</html>




--- END HTML TEMPLATE ---
`;
