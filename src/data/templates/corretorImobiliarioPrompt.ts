export const corretorImobiliarioPrompt = `Build a full landing page for "Marcus Vance - Consultoria Imobiliária de Alto Padrão" using plain HTML, CSS, and vanilla JavaScript. Recreate the existing page with maximum visual fidelity: a luxury high-end real estate sales landing page featuring an automatic crossfading hero carousel of luxury mansions, dark emerald and gold branding, scroll reveal animations, floating property cards with pricing and details, interactive comparison columns, quote statement block, deliverables grid with high-resolution imagery, offer CTA card with WhatsApp integration, 3D animated guarantee seal, and FAQ accordion.

PAGE IDENTITY
- Page title: "Marcus Vance | Consultoria Imobiliária de Alto Padrão"
- Meta description: "Encontre os imóveis mais exclusivos e valorizados com assessoria completa, discrição e segurança jurídica para o seu patrimônio."
- Language: pt-BR.
- Page type: Luxury real estate consulting & high-ticket property acquisition landing page.
- Visual style: High-end editorial, deep forest green (#21422E, #1A3525), warm polished gold accents (#C29F58, #DFCA98), soft sand parchment backgrounds (#EFECE6, #F7F5F0), crisp typography with serif headings and clean sans copy.

ASSETS
- Hero Background Slide 1: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=80" (Mansão Contemporânea de Alto Padrão)
- Hero Background Slide 2: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1920&q=80" (Villa Neoclássica Exclusiva)
- Hero Background Slide 3: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1920&q=80" (Residência Arquitetônica em Condomínio)
- Hero Background Slide 4: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920&q=80" (Mansão Iluminada com Vista Panorâmica)
- Hero Background Slide 5: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80" (Design Minimalista & Conceito Aberto)
- Hero Background Slide 6: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1920&q=80" (Propriedade Exclusiva com Piscina Infinita)
- About Block Image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80" (Luxury Mansion)
- Deliverable Property 1: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" (Residência Alphaville)
- Deliverable Property 2: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80" (Villa Contemporânea Jardins)
- Deliverable Property 3: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80" (Cobertura Triplex Faria Lima)
- Deliverable Property 4: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80" (Mansão Lago Sul)

CORE FIDELITY RULES
- Output a single complete HTML file containing all HTML, embedded CSS in a <style> tag, and embedded vanilla JavaScript in a <script> tag.
- Do NOT omit any section, card, FAQ item, or responsive behavior.
- Ensure all CTA links point to WhatsApp: "https://wa.me/5500000000000?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20consultoria%20imobili%C3%A1ria."
- Include the routing fix script inside <head>: history.replaceState(null, '', '/');

DEPENDENCIES & HEAD
- Preconnect: https://fonts.googleapis.com and https://fonts.gstatic.com
- Fonts:
  - Cormorant Garamond:ital,wght@1,500;1,600;1,700
  - Playfair Display:ital,wght@0,700;0,800;0,900;1,400;1,600;1,700
  - Plus Jakarta Sans:wght@500;600;700;800;900
  - Alex Brush (decorative cursive)
- CSS Tailwind Play CDN: <script src="https://cdn.tailwindcss.com"></script>

DESIGN TOKENS & CSS VARIABLES
:root {
  --bg: #EFECE6;
  --panel: rgba(239, 236, 230, 0.9);
  --ink: #21422E;
  --muted: #4B6E59;
  --gold: #C29F58;
  --gold-light: #DFCA98;
  --gold-dark: #987836;
  --forest-dark: #1A3525;
  --forest-mid: #21422E;
  --forest-card: #274C36;
  --sage: #3E6850;
  --line: rgba(33, 66, 46, 0.18);
  --line-strong: rgba(33, 66, 46, 0.35);
  --shadow: 0 20px 80px rgba(27, 53, 37, 0.12);
  --radius: 26px;
  --max-width: 1240px;
}

SECTIONS BREAKDOWN

1. STICKY LUXURY HEADER
- Fixed / sticky top navigation bar with blur backdrop (bg #21422E / 90% opacity, border-bottom 1px solid rgba(194, 159, 88, 0.2)).
- Brand: "MARCUS VANCE" in Playfair Display uppercase, subtitle "CONSULTORIA IMOBILIÁRIA" in gold tracking-widest sans.
- Nav Links: Imóveis Exclusivos, Diferenciais, Comparativo, Sobre, Perguntas.
- CTA Button: "Falar com Consultor" with gold border and WhatsApp pulse.

2. HERO CAROUSEL SECTION
- Min height: 100vh.
- Fullscreen background carousel with 6 high-resolution mansion images, auto-crossfading every 5 seconds.
- Dark gradient overlay for text readability (radial and vertical linear gradient to deep forest green).
- Eyebrow tag: "CURADORIA IMOBILIÁRIA EXCLUSIVA" in gold uppercase badge.
- Main Headline:
  "ENCONTRE O IMÓVEL DOS SEUS SONHOS COM ASSESSORIA DE ALTO PADRÃO"
  (Playfair Display, clamp(2.8rem, 5.5vw, 5.2rem), uppercase, font-weight 800, line-height 1.05).
- Subheadline:
  "Acesso a propriedades off-market, negociação sigilosa e assessoria jurídica integral para investidores e famílias que buscam excelência."
- Hero CTA: Button with WhatsApp icon "Agendar Consultoria Exclusiva", pulsing gold shadow animation.
- Metric highlights: "R$ 450M+ Negociados" | "100% Sigilo e Segurança" | "12+ Anos de Experiência".

3. ABOUT / CHAOS BLOCK
- Title: "O DESAFIO DA BUSCA IMOBILIÁRIA DE LUXO"
- Floating mansion image with smooth parallax / float keyframe animation.
- Pain tags: "Burocracia excessiva", "Anúncios desatualizados", "Falta de sigilo".
- Editorial copy highlighting how high-net-worth buyers lose time with generic brokers, and how Marcus Vance's bespoke concierge service eliminates friction.

4. SERVICES / DIFERENCIAIS
- 3 Luxury Cards:
  1. "Curadoria Off-Market": Acesso antecipado a mansões e coberturas que não chegam aos portais públicos.
  2. "Segurança Jurídica Total": Due diligence completa de matrículas, certidões e conformidade patrimonial.
  3. "Negociação Assertiva": Estratégia de precificação e intermediação diplomática com máxima discrição.

5. COMPARISON SECTION
- Two contrasting cards side by side:
  - "Sem Consultoria Especializada": Busca exaustiva em portais, informações desencontradas, risco de passivos jurídicos, desgaste na negociação.
  - "Com Marcus Vance Consultoria": Portfólio filtrado sob medida, atendimento privativo, assessoria jurídica inclusa, negociação otimizada.
- CTA button: "Quero Consultoria Especializada".

6. QUOTE METHOD BLOCK
- Large serif quote with gold italic accents:
  "Você não está apenas adquirindo um imóvel, <em>está investindo no legado e no patrimônio da sua família.</em>"

7. DELIVERABLES / PROPRIEDADES SELECIONADAS
- 4-column responsive grid with luxury property cards:
  - Card 1: Residência Alphaville - R$ 8.500.000 (6 suítes, 850m², 8 vagas)
  - Card 2: Villa Contemporânea Jardins - R$ 14.200.000 (5 suítes, 1.100m², piscina borda infinita)
  - Card 3: Cobertura Triplex Faria Lima - R$ 22.000.000 (4 suítes, vista 360°, heliponto)
  - Card 4: Mansão Lago Sul - R$ 18.900.000 (6 suítes, pier privativo, adega climatizada)

8. OFFER & ATENDIMENTO PERSONALIZADO
- Luxury offer card with glowing gold border:
  - Direct WhatsApp concierge channel
  - Customized property search report within 48h
  - Complete legal due diligence dossier
  - CTA Button: "Solicitar Atendimento Privado no WhatsApp"

9. GUARANTEE / COMPROMISSO DE TRANSPARÊNCIA
- 3D perspective animated seal with number "7" (7 dias de garantia ou compromisso de transparência total).

10. FAQ ACCORDION
- Interactive accordion items:
  1. Como funciona a curadoria de imóveis off-market?
  2. Há custos iniciais para a consultoria de busca?
  3. Como é garantido o sigilo da negociação?
  4. Vocês prestam assessoria jurídica em todas as etapas?
  5. Atendem em quais cidades e regiões?

11. MINIMAL LUXURY FOOTER
- Copyright Marcus Vance Consultoria Imobiliária, CRECI credenciado, WhatsApp link, smooth scroll to top.

JAVASCRIPT LOGIC
- Full Hero Carousel with automated timer, dot navigation, and fade transitions.
- IntersectionObserver for .reveal-up, .reveal-side, .reveal-media animations.
- FAQ Accordion with smooth height animation and aria-expanded state handling.
- WhatsApp redirect helper ensuring proper UTM / message formatting.
- History replaceState fix.

RECREATION RULES
- Deliver the entire code in a single standalone HTML document.
- Never use placeholder text, lorem ipsum, or empty brackets.
- Retain all color variables, typography scales, borders, box-shadows, and luxury animations.`;
