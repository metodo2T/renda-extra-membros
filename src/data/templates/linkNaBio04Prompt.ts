export const linkNaBio04Prompt = `Build a full landing page for "Camila Silveira | Corretora de Imóveis | CRECI 248.910-F" using plain HTML, CSS, and vanilla JavaScript. Recreate the existing page with maximum visual fidelity: a luxury mobile-first link-in-bio page featuring a full-width expanded hero profile photo with gradient dark overlay, sticky glassmorphic header, bento-style colorful action cards (Pastel Lime, Dark Charcoal, Periwinkle Blue, Warm Cream), expanded property thumbnails, interactive modals with listing details, verified checkmark badges, and direct WhatsApp call-to-actions.

PAGE IDENTITY
- Page title: "Camila Silveira | Corretora de Imóveis | CRECI 248.910-F"
- Meta description: "Especialista em imóveis de alto padrão, condomínios fechados e investimentos imobiliários exclusivos."
- Language: pt-BR.
- Page type: Mobile-First Digital Business Card / Luxury Real Estate Link-in-Bio Landing Page.
- Visual style: Modern Bento/Link-in-Bio design, luxury editorial aesthetic, warm neutral sand background (#f4f0e6), sticky glassmorphism header with backdrop blur, high-contrast dark overlay hero with profile portrait, colorful rounded pastel action cards with pill buttons, expanded thumbnail images, interactive modal overlays for property showcase and booking.
- Overall background: #f4f0e6 (Warm Sand / Off-White).
- Primary font stack: 'Plus Jakarta Sans', sans-serif (Google Fonts).
- Core fidelity rule: Output a single complete HTML file containing all HTML, embedded CSS in a <style> tag, and embedded vanilla JavaScript in a <script> tag. Preserve all layout grids, typography clamps, animations, and interactive behaviors.

ASSETS DE IMAGEM E VIDEO
Use exatamente estes assets por link. Não use placeholders nem banco de imagens genérico.

1. Cover Hero Portrait (Capa Principal):
   - Tipo: imagem
   - Link: https://i.postimg.cc/HsCKd0Pk/download-(7).jpg
   - Aparece em: Seção 2 - Full-Width Foreground Expanded Hero Cover Photo (.full-hero-image)
   - Detalhes: Portrait fotográfico profissional de alta resolução da corretora Camila Silveira.
   - Renderização: .full-hero-image, width: 100%, height: 575px, object-fit: cover, object-position: center 8%, filter: brightness(0.98) contrast(1.02), referrerpolicy="no-referrer".

2. Thumbnail Card Agendamento São Paulo:
   - Tipo: imagem
   - Link: https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=400
   - Aparece em: Card 1 do Banners Stack (.card-green .headshot-expanded)
   - Detalhes: Arquitetura residencial contemporânea de luxo.
   - Renderização: .headshot-expanded, width: 38%, height: 105px, border-radius: 0.85rem, object-fit: cover, object-position: center 20%, border: 2px solid #ffffff, box-shadow: 0 4px 14px rgba(0,0,0,0.12), referrerpolicy="no-referrer".

3. Thumbnail Card Atendimento WhatsApp:
   - Tipo: imagem
   - Link: https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=400
   - Aparece em: Card 2 do Banners Stack (.card-dark .headshot-expanded)
   - Detalhes: Fachada corporativa/imobiliária de alto padrão.
   - Renderização: .headshot-expanded, width: 38%, height: 105px, border-radius: 0.85rem, object-fit: cover, object-position: center 20%, border: 2px solid #ffffff, box-shadow: 0 4px 14px rgba(0,0,0,0.12), referrerpolicy="no-referrer".

4. Thumbnail Card Carteira de Imóveis:
   - Tipo: imagem
   - Link: https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=400
   - Aparece em: Card 3 do Banners Stack (.card-blue .headshot-expanded)
   - Detalhes: Casa em condomínio fechado com iluminação cênica.
   - Renderização: .headshot-expanded, width: 38%, height: 105px, border-radius: 0.85rem, object-fit: cover, object-position: center 20%, border: 2px solid #ffffff, box-shadow: 0 4px 14px rgba(0,0,0,0.12), referrerpolicy="no-referrer".

5. Thumbnail Card Consultoria Camila Silveira:
   - Tipo: imagem
   - Link: https://i.postimg.cc/Kc96wLQ2/1c901d2b35e2cc6474fe524a1c3aac68.jpg
   - Aparece em: Card 4 do Banners Stack (.card-cream .headshot-expanded)
   - Detalhes: Fotografia editorial de atendimento imobiliário executivo.
   - Renderização: .headshot-expanded, width: 38%, height: 105px, border-radius: 0.85rem, object-fit: cover, object-position: center 20%, border: 2px solid #ffffff, box-shadow: 0 4px 14px rgba(0,0,0,0.12), referrerpolicy="no-referrer".

6. Imagem 1 do Modal Carteira de Imóveis (Mansão):
   - Tipo: imagem
   - Link: https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=600
   - Aparece em: Modal Carteira de Imóveis - Primeiro Card de Propriedade (.prop-img)
   - Detalhes: Mansão em condomínio fechado.
   - Renderização: .prop-img, width: 100%, height: 120px, object-fit: cover, referrerpolicy="no-referrer".

7. Imagem 2 do Modal Carteira de Imóveis (Cobertura):
   - Tipo: imagem
   - Link: https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=600
   - Aparece em: Modal Carteira de Imóveis - Segundo Card de Propriedade (.prop-img)
   - Detalhes: Cobertura Duplex Penthouse.
   - Renderização: .prop-img, width: 100%, height: 120px, object-fit: cover, referrerpolicy="no-referrer".

DEPENDENCIES & HEAD
- Plain HTML, CSS e vanilla JavaScript apenas.
- Sem frameworks JS externos (React, Vue, etc.).
- Inclusão mandatória do script de roteamento dentro do <head>:
  <script>
    history.replaceState(null, '', '/');
    try {
      let _fetch = window.fetch;
      Object.defineProperty(window, 'fetch', {
        configurable: true,
        enumerable: true,
        get() { return _fetch; },
        set(v) { _fetch = v; }
      });
    } catch (e) {}
  </script>

DESIGN TOKENS & CSS (:root)
  --page-bg: #f4f0e6;
  --container-bg: #ffffff;
  --card-green-bg: #d2ef7a;
  --card-dark-bg: #0e120b;
  --card-blue-bg: #b8d2fc;
  --card-cream-bg: #f7e2be;
  --lime-accent: #ccf244;
  --lime-dark: #0f1403;
  --text-dark: #111111;
  --text-muted: #666666;
  --radius-card: 1.35rem;
  --max-width: 520px;

SECTION ORDER
1. Cabeçalho Fixo Superior (Site Header / Cabeçalho Sticky)
2. Capa Hero Expandida em Tela Cheia (Full-Width Foreground Expanded Hero Cover Photo)
3. Container Principal Flutuante (Main App Container)
4. Selo Verificado Topo-Direita (.verified-badge)
5. Banners Stack (Cards de Ação Coloridos)
   - Card 1: Agendamento São Paulo (Verde Limão Pastel)
   - Card 2: Atendimento WhatsApp (Carvão Escuro)
   - Card 3: Carteira de Imóveis (Azul Periwinkle)
   - Card 4: Consultoria Camila Silveira (Creme Quente)
6. Rodapé Interno do Container (.card-footer)
7. Sistema de Modais Interativos (Modals System)
   - Modal 1: Agendamento São Paulo (#modal-visit)
   - Modal 2: Carteira de Imóveis (#modal-portfolio)
   - Modal 3: Consultoria Camila Silveira (#modal-consulting)`;
