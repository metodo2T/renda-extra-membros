export const stayflowHeroPrompt = `Build a high-conversion Portuguese sales landing page for "StayFlow | Hero" using plain HTML, CSS, and vanilla JavaScript. Recreate the existing page with maximum visual fidelity, including layout, typography, linked media assets, gradients, scroll animations, hover interactions, sticky horizontal deliverables behavior, exact Portuguese text, and responsive behavior.

PAGE IDENTITY
- Page title: "StayFlow | Hero"
- Language: pt-BR
- Meta description: "Hero section com vídeo em tela cheia para página de vendas."
- Page type: premium sales page for a commercial/sales training product.
- Visual style: dark cinematic neon-green sales page with holographic effects, serif editorial headlines, glassmorphism cards, soft radial glows, thin borders, particle/grain overlays, and scroll-driven reveals.
- Overall background: #050b00 / near-black green.
- Primary fonts: Google Fonts using Cabin 500/600, Instrument Serif regular/italic, Inter 400/500, Inter Tight 300/400/500, Manrope 500/600/700.
- Core visual rules: dark background, neon green accent (#5bc401 / #65da00), large Instrument Serif headings with tight negative letter spacing, Manrope UI labels, Inter body copy, soft green glows, rounded glass cards, scroll-linked animations.

ASSETS DE IMAGEM E VIDEO
Use exatamente estes assets por link. Nao use placeholders visuais, midia gerada, banco de imagens ou alternativas parecidas. Preencha apenas o campo "Link" de cada item. Os assets estao em ordem de aparicao na pagina.

1. Video de fundo do hero
   Tipo: video
   Link: https://res.cloudinary.com/dalwymbky/video/upload/v1782324124/hero_u9l9cb.mp4
   Aparece em: primeira dobra da pagina, como fundo em tela cheia da secao hero.
   Detalhes: MP4 H.264, 1280x720, 16:9, 30fps, 8 segundos. O video deve tocar com autoplay, loop, muted e playsinline.
   Renderizacao: .hero-video com position absolute, inset 0, width 100%, height 100%, object-fit cover e z-index -2.

2. Mao holografica verde
   Tipo: imagem
   Link: https://res.cloudinary.com/dalwymbky/image/upload/v1782324118/t1_gurovc.png
   Aparece em: secao "Method Steps", centralizada entre os tres cards do metodo.
   Detalhes: imagem quadrada 1254x1254 de uma mao holografica verde, transparente/pontilhada, com aparencia digital.
   Renderizacao: img.method-hand com display block, width 100%, height auto e object-fit contain. Container com animacao flutuante.

3. Fundo da oferta com feixe verde
   Tipo: imagem
   Link: https://res.cloudinary.com/dalwymbky/image/upload/v1782324118/fundooferta_hqmgrb.png
   Aparece em: secao "Offer Block", como imagem de fundo.
   Detalhes: imagem 1672x941 com fundo escuro verde/preto, feixe vertical neon verde brilhante no centro e particulas espalhadas.
   Renderizacao: no desktop, background #050b00 url(...) center top / 100% auto no-repeat.

GLOBAL STYLES & DESIGN TOKENS
:root {
  --color-primary: #5bc401;
  --color-primary-hover: #65da00;
  --color-secondary: #123429;
  --color-secondary-hover: #184537;
  --color-accent: #9de3bc;
  --color-accent-strong: #65da00;
  --color-glow-soft: rgba(91,196,1,.16);
  --color-glow-faint: rgba(157,227,188,.08);
  --color-text: #f7faf7;
  --color-text-soft: rgba(247,250,247,.76);
  --color-surface: rgba(16,45,35,.42);
  --color-surface-border: rgba(157,227,188,.35);
  --font-ui: "Manrope";
  --font-body: "Inter";
  --font-tight: "Inter Tight";
  --font-button: "Cabin";
  --font-display: "Instrument Serif";
}

SECTION ORDER & CONTENT
1. Full-screen video hero (H1: "Transforme conversas em vendas *e* feche com mais segurança", paragraph, CTA "Quero entrar agora")
2. Pain points (Eyebrow: "por que as vendas travam", Title: "Seu resultado desacelera quando *a insegurança assume*", 3 cards: [ 01 ], [ 02 ], [ 03 ])
3. Services showcase (Eyebrow: "[ treinamento ]", Title: "Estrutura comercial prática pensada para vender mais", 5 service cards: 1.0 Abordagem Comercial, 2.0 Script de Conversão [featured with rotating glow], 3.0 Processo de Follow-up, 4.0 Quebra de Objeções, 5.0 Fechamento; CTA: "Quero acessar o treinamento")
4. Difference block (Eyebrow: "diferencial", Title: "Treinamento que vende", Note: "Veja por que ele acelera seu comercial", Copy: "Este treinamento foi pensado para quem precisa transformar teoria em conversa real...")
5. Method steps (Eyebrow: "como funciona o método", Title: "Veja como funciona na prática", central holographic hand floating, 3 cards: [ 01 ] Clareza na abordagem, [ 02 ] Valor na condução, [ 03 ] Ritmo no fechamento)
6. Deliverables sticky horizontal section (Eyebrow: "o que você recebe", Title: "Tudo o que precisa para vender melhor", 4 cards in sticky horizontal scroll with desktop pagination and mobile touch drag)
7. Offer block (Eyebrow: "oferta especial", Title: "Hoje você pode acessar com uma oferta exclusiva", Checklist of 4 items, "De R$ 497,00", "por apenas", "12x de R$ 19,70 ou R$ 197,00 à vista", CTA: "Quero garantir minha vaga")
8. Guarantee block (3D floating badge with "7", Title: "Você tem 7 dias para entrar, assistir e decidir com tranquilidade", Body text)
9. FAQ block (4 native details items: "Para quem esse treinamento é indicado?", "O acesso é imediato depois da compra?", "Por quanto tempo posso assistir às aulas?", "E se eu perceber que não era o que eu precisava?")
10. Footer ("@2026 todos os direitos reservados")
`;
