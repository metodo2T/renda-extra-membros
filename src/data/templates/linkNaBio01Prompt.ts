export const linkNaBio01Prompt = `Build a full landing page for "NOME DA PROFISSIONAL - Link na Bio Estética Avançada" using plain HTML, CSS, and vanilla JavaScript. Recreate the existing page with maximum visual fidelity: an elegant editorial beauty/health link-in-bio page with warm neutral champagne tones, delicate serif typography, personal presentation card with gradient portrait overlay, stacked service cards with thumbnails and pulsing WhatsApp CTA buttons, 2-column clinic features grid, quote block, FAQ accordion, location card with Google Maps button, and minimalist social footer.

PAGE IDENTITY
- Page title: "NOME DA PROFISSIONAL | Link da Bio"
- Meta description: "Página profissional de Link da Bio de NOME DA PROFISSIONAL - ESTÉTICA AVANÇADA. Conheça meus serviços, procedimentos, mentoria e agende pelo WhatsApp."
- Language: pt-BR.
- Page type: Link in Bio / Mobile Landing Page for Aesthetics, Health, and Premium Practitioners.
- Visual style: Elegant luxury editorial, soft champagne cream (#FAF8F5, #F5F0EB), warm taupe and mocha borders (#E8E0D5, #D4C5B3), deep espresso charcoal typography (#2A2521, #4A4039), polished WhatsApp emerald (#25D366), refined serif headings and light sans-serif body.

ASSETS
- Main Profile Photo: "https://i.postimg.cc/zfKkpZnt/pexels-ofarias-g-530112232-37728722.jpg"
- Service Card 1 (Harmonização Facial & Botox): "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=800&auto=format&fit=crop"
- Service Card 2 (Bioestimuladores de Colágeno): "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=800&auto=format&fit=crop"
- Service Card 3 (Limpeza de Pele & Peelings): "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop"
- Service Card 4 (Mentoria para Profissionais): "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop"

CORE FIDELITY RULES
- Output a single complete HTML file containing all HTML, embedded CSS in a <style> tag, and embedded vanilla JavaScript in a <script> tag.
- Include the routing fix script inside <head>: history.replaceState(null, '', '/');
- Mobile viewport simulator styling: max-width 480px centered on desktop with soft background wallpaper, or responsive full-width container.
- Preserve all WhatsApp links with formatted URL query strings.

DEPENDENCIES & HEAD
- Preconnect: https://fonts.googleapis.com, https://fonts.gstatic.com
- Fonts:
  - Cormorant Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600
  - Inter:wght@300;400;500;600
- Lucide Icons CDN: <script src="https://unpkg.com/lucide@latest"></script>

DESIGN TOKENS & CSS VARIABLES
:root {
  --bg-color: #FAF8F5;
  --card-bg: #FFFFFF;
  --card-bg-warm: #F5F0EB;
  --card-bg-rose: #F9F2EE;
  --primary-text: #2A2521;
  --secondary-text: #685E55;
  --accent-gold: #C2A078;
  --accent-gold-hover: #AF8B62;
  --border-color: #E8E0D5;
  --border-subtle: #F0EAE1;
  --wa-green: #25D366;
  --wa-green-dark: #1EBE5D;
  --shadow-sm: 0 4px 12px rgba(42, 37, 33, 0.04);
  --shadow-md: 0 8px 24px rgba(42, 37, 33, 0.08);
  --shadow-lg: 0 16px 40px rgba(42, 37, 33, 0.12);
  --radius-sm: 12px;
  --radius-md: 20px;
  --radius-lg: 28px;
  --font-serif: 'Cormorant Garamond', Georgia, serif;
  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}

SECTIONS BREAKDOWN

1. MINIMAL HEADER
- Brand name: "NOME DA PROFISSIONAL", subtitle "ESTÉTICA AVANÇADA".
- Quick WhatsApp "Agendar" pill button with icon.

2. EDITORIAL PRESENTATION CARD (SOBRE MIM)
- Large portrait photo with dark gradient overlay, displaying practitioner name and specialty in delicate white serif typography.
- "Sobre mim" text block: "Especialista em estética avançada e saúde da pele. Unindo ciência, sensibilidade e tecnologia de ponta para realçar sua beleza natural com segurança, elegância e protocolos 100% personalizados."

3. SERVICES & PROCEDURES (STACKED CARDS)
- Card 1: Harmonização Facial & Botox
  - Thumbnail image, description of treatments, emerald WhatsApp button "Agendar pelo WhatsApp".
- Card 2: Bioestimuladores de Colágeno
  - Warm beige background (#F5F0EB), thumbnail image, treatment description, WhatsApp button.
- Card 3: Limpeza de Pele & Peelings
  - Soft rose background (#F9F2EE), thumbnail image, description, WhatsApp button.
- Card 4: Mentoria VIP para Profissionais
  - Premium dark/champagne card for mentoring or specialized training, WhatsApp button.

4. CLINIC HIGHLIGHTS / DIFERENCIAIS
- 4 Grid Pills with subtle icons:
  - Atendimento Humanizado & Exclusivo
  - Produtos de Primeira Linha (FDA & Anvisa)
  - Ambiente Aconchegante e Privativo
  - Protocolos Científicos Personalizados

5. QUOTE BLOCK
- "A beleza autêntica não busca padrões, <em>revela a harmonia única que já existe em você.</em>"

6. FAQ ACCORDION
- Q1: Como funciona a primeira consulta de avaliação?
- Q2: Os procedimentos são dolorosos?
- Q3: Quais as formas de pagamento aceitas?
- Q4: Em quanto tempo vejo os resultados?

7. LOCATION & CONTACT
- Address & Clinic hours card.
- "Como Chegar" button opening Google Maps link.

8. MINIMAL FOOTER
- Instagram, WhatsApp, E-mail links.
- Copyright & All rights reserved.

JAVASCRIPT LOGIC
- IntersectionObserver for smooth fade-in / upward reveal of cards on scroll.
- Interactive FAQ accordion toggle.
- Lucide icons initialize: lucide.createIcons().
- History replaceState fix.

RECREATION RULES
- Deliver the entire code in a single standalone HTML document.
- Never use placeholder text, lorem ipsum, or empty brackets.
- Keep the exact proportions, shadows, and smooth mobile padding.`;
