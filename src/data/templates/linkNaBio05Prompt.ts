export const linkNaBio05Prompt = `Build a full landing page for "Bruno César - Método 2T | Link na Bio" using plain HTML, CSS, and vanilla JavaScript. Recreate the existing page with 100% visual fidelity: a dark luxury aesthetic (#030303 canvas), amber/gold accents (#d97706), vibrant WhatsApp green conversion buttons (#25D366), glassmorphism header, smooth scroll navigation, looping stats counters, interactive city cards, curriculum grid, service showcase cards, and animated FAQ accordions.

PAGE IDENTITY
- Page title: "Link na Bio - Transforme seu Instagram"
- Meta description: "Estratégias práticas de Tráfego Pago + Orgânico + IA para escalar seu negócio."
- Language: pt-BR.
- Page type: High-converting bio link / mobile-first sales & event agenda landing page.
- Visual style: Dark luxury modern theme, deep obsidian background (#030303), glassmorphic elements, amber glow flares (#d97706), high-contrast white display typography, subtle borders (rgba(255,255,255,0.1)), and emerald green action triggers (#25D366).
- Overall background: Deep #030303 solid canvas with radial glow spots (rgba(217,119,6,0.2)).
- Primary font stack: Google Fonts Montserrat (weights 400, 500, 600, 700, 800) and Playfair Display (italic serif accent).
- Core fidelity rule: Output a single complete HTML file containing all HTML structure, embedded CSS inside a <style> tag, and embedded vanilla JavaScript inside a <script> tag. Preserve all grid layouts, responsive padding, animations, hover effects, and interactive behaviors.

ASSETS DE IMAGEM E VÍDEO
Use exact asset links. Do not use generic placeholders or placeholder image services:

1. Cover Hero Video
- Type: Video (mp4/mov)
- Link: https://res.cloudinary.com/dvhswjuep/video/upload/q_auto/f_auto/v1779321196/copy_F5D17F38-5E6F-43C3-9DDA-CFF7B95EB43F_potnx4.mov
- Appears in: Hero header cover section
- Details: Autoplay, loop, muted, playsinline video background, height 250px (mobile) to 350px (desktop), overlaid with dark gradient fade (from-[#030303]/10 to-[#030303]).
- Render: object-fit: cover, object-position: center 20%.

2. Profile Avatar Image
- Type: Image (jpg)
- Link: https://i.postimg.cc/qMnYYdg4/IMG_5745.jpg
- Appears in: Header hero section, overlapping cover video
- Details: Circular avatar (128x128px mobile, 160x160px desktop), 4px border #030303, scale 110%, dark shadow drop.
- Render: object-fit: cover, object-position: center 20%.

3. City Card - Cascavel/PR (Available)
- Type: Image (jpg)
- Link: https://i.postimg.cc/Nf4S8g3H/istockphoto-1872366972-612x612.jpg
- Appears in: Próximas Turmas Presenciais section (Card 1)
- Details: Aspect ratio 16/8, opacity 80%, hover scale effect, action tag "Garanta sua vaga".

4. City Card - Balneário Camboriú/SC (Available)
- Type: Image (jpg)
- Link: https://i.postimg.cc/rwmPpCF3/360-F-592430747-Yt-Wr-HAf0RFrf-WEvdr-FEi-Smcv-Zo-ZG442N.jpg
- Appears in: Próximas Turmas Presenciais section (Card 2)
- Details: Aspect ratio 16/8, opacity 80%, hover scale effect, action tag "Garanta sua vaga".

5. City Card - Campinas/SP (Sold Out / Locked)
- Type: Image (jpg)
- Link: https://i.postimg.cc/kX9r7bbj/240-F-358616030-cq-Cg-ZVgq-URfmov-KNBa9rvvs-U7jt-Bfrd7.jpg
- Appears in: Próximas Turmas Presenciais section (Card 3)
- Details: Grayscale opacity 40%, lock icon overlay badge in center, action tag "Esgotado", disabled link.

6. City Card - Foz do Iguaçu/PR (Sold Out / Locked)
- Type: Image (jpg)
- Link: https://i.postimg.cc/8kR3Xz0c/istockphoto-488388458-612x612.jpg
- Appears in: Próximas Turmas Presenciais section (Card 4)
- Details: Grayscale opacity 40%, lock icon overlay badge in center, action tag "Esgotado", disabled link.

7. City Card - Maringá/PR (Sold Out / Locked)
- Type: Image (jpg)
- Link: https://i.postimg.cc/TY8dg1Wt/360-F-1915916746-q5e3gs-X6u-Vcb-Zl-Njh-Lmxnvv2j3o-JKy-EE.jpg
- Appears in: Próximas Turmas Presenciais section (Card 5)
- Details: Grayscale opacity 40%, lock icon overlay badge in center, action tag "Esgotado", disabled link.

8. Section Image - Turma Presencial Photo
- Type: Image (jpg)
- Link: https://i.postimg.cc/hjbJ6mmM/IMG-2224.jpg
- Appears in: "Conheça O Método 2T Presencial" section
- Details: Aspect ratio 4/3, rounded 12px, classroom photo with students, subtle border rgba(255,255,255,0.1).

9. Service 1 Image - Curso Online Método 2T
- Type: Image (jpg)
- Link: https://i.postimg.cc/J7cDR1FQ/Copia-de-Copia-de-REV-PV-MODELO-02.jpg
- Appears in: Nossos Serviços section
- Details: Aspect ratio 21/9 (mobile) to 16/9 (desktop), object-position: center 15%.

10. Service 2 Image - Delivery Lucrativo
- Type: Image (jpg)
- Link: https://i.postimg.cc/Xv0nh8nT/IMG-5950.jpg
- Appears in: Nossos Serviços section
- Details: Aspect ratio 21/9 (mobile) to 16/9 (desktop), object-position: center.

11. Service 3 Image - Contrate Nossa Agência
- Type: Image (jpg)
- Link: https://i.postimg.cc/5N5KrzyZ/142b363d-279c-4ca8-9ff1-d6396398510e.jpg
- Appears in: Nossos Serviços section
- Details: Aspect ratio 21/9 (mobile) to 16/9 (desktop), object-position: center.

DEPENDENCIES & HEAD
- Use pure standard HTML5, CSS3, and vanilla JS only. No React/Vue dependencies required.
- Include Lucide Icons via inline SVG icons.
- Mandatory script in <head> to normalize router path:
  <script>history.replaceState(null, '', '/');</script>
- Google Fonts import link in <head>:
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,400;1,400&display=swap" rel="stylesheet">

GLOBAL STYLES & DESIGN TOKENS
:root {
  --bg-primary: #030303;
  --bg-header: rgba(6, 6, 6, 0.85);
  --bg-card: #0a0a0a;
  --bg-card-alt: #080808;
  --accent-amber: #d97706;
  --accent-amber-light: #ffb259;
  --accent-amber-glow: #ffedb3;
  --whatsapp-green: #25D366;
  --whatsapp-dark: #128C7E;
  --whatsapp-hover: #20bd5a;
  --text-main: #f4f4f5;
  --text-muted: #a1a1aa;
  --text-dark: #71717a;
  --border-subtle: rgba(255, 255, 255, 0.1);
  --border-dark: rgba(39, 39, 42, 0.8);
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 24px;
  --radius-full: 9999px;
  --max-content-width: 1000px;
  --max-reading-width: 700px;
}

SECTION ORDER & STRUCTURE
1. Fixed Header & Navigation Bar (Dual bar: top branding + WhatsApp CTA, bottom smooth-scroll nav menu)
2. Hero Header (Looping cover video + profile avatar + name + tagline)
3. Animated Stats Counter Section (Edições Presenciais, Alunos Formados)
4. Próximas Turmas Presenciais (5 city cards: 2 active with WhatsApp links, 3 locked sold-out)
5. Conheça O Método 2T Presencial (Animated title flare, classroom photo, description copy, 2-column curriculum/bonus breakdown)
6. Nossos Serviços (3 showcase cards with images, descriptions, and CTA buttons)
7. Perguntas Frequentes (FAQ) (Interactive accordions with single-active state)
8. Footer (CNPJ: 59.341546/0001-59 & Copyright statement)

JAVASCRIPT & ANIMATION BEHAVIOR
- Looping Counters Engine (requestAnimationFrame continuous loop 0 -> Target -> Pause 1.5s -> Restart).
- Smooth Scroll Navigation with header offset calculation.
- FAQ Accordion with height animation and chevron rotation.
`;
