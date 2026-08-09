export const protocoloReelsPrompt = `Build a full landing page for "Protocolo Reels IA" using plain HTML, CSS, and vanilla JavaScript. Recreate the existing page with maximum visual fidelity: a clean off-white grid-textured sales page with deep navy typography, teal conversion accents, rounded teal topic pills, thick navy drop-shadows, vertical phone-video thumbnail, authority/social proof blocks, a 3-step method grid, offer card, guarantee block, FAQ/CTA block, and WhatsApp-style floating button.

PAGE IDENTITY
- Page title: "Protocolo Reels IA"
- Language: pt-BR.
- Page type: long-form sales landing page for a Reels/AI content product.
- Visual style: bright cream grid paper, deep navy editorial text, teal conversion buttons, rounded teal badges/pills, navy offset shadows, clean Nohemi typography, compact high-conversion layout, and strong mobile stacking.
- Overall background: pale cream/off-white with a real raster grid texture, not a flat white background and not a CSS-only grid.
- Primary font: custom "Nohemi" with weights 300, 500, and 700. Use Nohemi for headings, paragraphs, badges, buttons, cards, prices, and labels.
- Core fidelity rule: preserve the exact cream grid texture, navy/teal palette, Nohemi font, ticker strip, pill/card dimensions, button icon-chip geometry, image sizes, section spacing, border radii, shadows, and mobile layout. Do not convert the design into a generic white/green SaaS page.

ASSETS DE IMAGEM E VIDEO
Use exatamente estes assets por link. Nao use placeholders visuais, midia gerada, banco de imagens ou alternativas parecidas. Preencha apenas o campo "Link" de cada item. Os assets estao em ordem de aparicao na pagina.

1. Textura quadriculada de fundo
   Tipo: imagem
   Aparece em: fundo das secoes principais de fundo claro, especialmente hero e bloco de dores.
   Detalhes: WebP horizontal 1920x1366; textura muito clara em tom creme/off-white, com grid quadriculado fino e suave.
   Renderizacao: usar como background-image junto de cor base clara; background-position: center center; background-size: cover; background-repeat: no-repeat.

2. Thumbnail vertical do video / celular
   Tipo: imagem
   Link: https://res.cloudinary.com/dalwymbky/image/upload/v1782350418/imgvideo_dsgbm0.png
   Aparece em: primeira dobra, dentro da coluna visual central do hero.
   Detalhes: PNG vertical 431x733; mockup/thumbnail vertical com mulher, UI de video e botao play.
   Renderizacao: <img> dentro do bloco de video/shortcode; largura visual aproximadamente min(320px, 86vw), proporcao 9/16, object-fit: cover, cantos arredondados e sombra leve.

3. Imagem de apoio 01
   Tipo: imagem
   Link: https://res.cloudinary.com/dalwymbky/image/upload/v1782350382/img01_kmchg6.png
   Aparece em: secao "Sobre / Como funciona", coluna visual.
   Detalhes: PNG vertical 431x733; imagem demonstrativa em formato celular/reels.

4. Imagem de apoio 02
   Tipo: imagem
   Link: https://res.cloudinary.com/dalwymbky/image/upload/v1782350421/img02_g1ctv9.png
   Aparece em: segunda composicao visual da secao de explicacao/autoridade.
   Detalhes: PNG vertical 431x733; imagem demonstrativa em formato celular/reels.

5. Imagem de depoimento / prova social
   Tipo: imagem
   Link: https://res.cloudinary.com/dalwymbky/image/upload/v1782350383/depoimento_1_ml8ixz.jpg
   Aparece em: cards/imagens da secao de prova social/depoimentos.
   Detalhes: JPG 720x698; print de conversa/depoimento.

6. Icone/arte "Oferta"
   Tipo: imagem
   Link: https://res.cloudinary.com/dalwymbky/image/upload/v1782350413/29e066748324c223_mo4smy.webp
   Aparece em: card/lista de beneficios ou oferta.
   Detalhes: WebP pequeno 500x500 com iconografia do produto.

7. Icone/arte "Conteudo"
   Tipo: imagem
   Link: https://res.cloudinary.com/dalwymbky/image/upload/v1782350415/4561d54c8ec3be53_vvgjfe.webp
   Aparece em: card/lista de beneficios ou metodo.
   Detalhes: WebP pequeno 500x500 com iconografia do produto.

8. Icone/arte "Conversao"
   Tipo: imagem
   Link: https://res.cloudinary.com/dalwymbky/image/upload/v1782350389/2c87dffcea935d81_ogxp09.webp
   Aparece em: card/lista de beneficios ou conversao.
   Detalhes: WebP pequeno 500x500 com iconografia do produto.

GLOBAL STYLES & DESIGN TOKENS
:root {
  --navy: #0D1B2A;
  --navy-shadow: #0A1422;
  --teal: #2A9D8F;
  --teal-dark: #1D7F74;
  --teal-border: #0F5F58;
  --cream: #F3F7F2;
  --cream-bg: #F3F7F2;
  --grid-cream: #F4F3EA;
  --border-bluegray: #B8C4D2;
  --yellow: #FFD166;
  --yellow-dark: #F4B73F;
  --yellow-border: #C8922E;
  --font-nohemi: "Nohemi", Arial, sans-serif;
}

Hard offset shadow: box-shadow: 0px 4px 0px 0px #0A1422;

SECTION ORDER
1. Hero with cream grid background, eyebrow badge, heading, subtitle, vertical phone video mockup, and teal CTA button with navy icon chip.
2. Navy Ticker Strip with deep navy background and cream pills.
3. Pain Points / Dores with 4 teal rounded pills with hard shadow and alert summary panel.
4. Frustration Cards comparing traditional vs Protocolo Reels IA.
5. About / Explanation with 2 alternating media/text rows.
6. Authority / Social Proof with testimonial grid cards.
7. Method / 3 Steps grid with step icons.
8. Offer / Pricing with deliverables checklist, R$ 9,74 price title, and yellow CTA button.
9. Guarantee card with 7-day shield badge and assurance copy.
10. FAQ accordion and final conversion CTA.
11. Floating WhatsApp Button.
`;
