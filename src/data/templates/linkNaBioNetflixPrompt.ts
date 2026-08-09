export const linkNaBioNetflixPrompt = `Build a full landing page for "Bruno César - Gestor de Tráfego Pago (Netflix Style Link na Bio)" using plain HTML, CSS, and vanilla JavaScript. Recreate the existing page with maximum visual fidelity: a cinematic streaming-platform styled mobile link-in-bio page featuring Netflix signature red accents (#E50914), original series hero banner with parallax portrait, "TOP 1 HOJE" badge, WhatsApp meeting CTA button, "Continuar Assistindo" episode cards with progress bars, match percentages, episode durations, play button hover overlays, "Em Alta no Perfil" social section, and cinematic streaming footer.

PAGE IDENTITY
- Page title: "Gestor de Tráfego Pago | Meta Ads & Google Ads - Link na Bio"
- Meta description: "Especialista em escala de lançamentos com Meta Ads & Google Ads. ROI implacável e estratégias validadas."
- Language: pt-BR.
- Page type: Cinematic Streaming / Netflix-Themed Link in Bio Landing Page.
- Visual style: Netflix dark UI (#141414, #181818, #0B0F19), signature Netflix red highlights (#E50914), cinematic glow blur backdrops, bold Bebas Neue & Outfit typography, progress bars, episode cards with match indicators.

ASSETS
- Hero Profile Portrait: "https://i.postimg.cc/MKQH4wrR/Bruno-Ce-sar-jpg-(1).jpg"
- Episode 1 Image (Orçamentos): "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800"
- Episode 2 Image (Mentoria): "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800"
- Episode 3 Image (Comunidade): "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
- Episode 4 Image (Instagram): "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800"
- Episode 5 Image (Playlist do Gestor): "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800"

CORE FIDELITY RULES
- Output a single complete HTML file containing all HTML, embedded CSS in a <style> tag, and embedded vanilla JavaScript in a <script> tag.
- Include the routing fix script inside <head>: history.replaceState(null, '', '/');
- Maintain the exact Netflix red styling (#E50914), ambient red blur lights, progress bar indicators, match badges (e.g. "99% Match"), and episode numbering.
- Ensure all interactive episode cards open their designated links or modals.

DEPENDENCIES & HEAD
- Preconnect: https://fonts.googleapis.com, https://fonts.gstatic.com
- Fonts:
  - Bebas Neue
  - Outfit:wght@400;500;600;700;800;900
  - Plus Jakarta Sans:wght@400;500;600;700;800
- CSS Tailwind Play CDN: <script src="https://cdn.tailwindcss.com"></script>

DESIGN TOKENS & CSS STYLES
:root {
  --bg-netflix: #141414;
  --card-netflix: #181818;
  --red-netflix: #E50914;
  --red-glow: rgba(229, 9, 20, 0.4);
  --emerald-match: #34D399;
}
.font-condensed {
  font-family: 'Bebas Neue', sans-serif;
  letter-spacing: 0.05em;
}

SECTIONS BREAKDOWN

1. AMBIENT BACKGROUND GLOWS
- Fixed radial ambient lights in red and black behind the content container.

2. HERO "SÉRIE ORIGINAL" COVER CARD
- Container: Rounded 24px dark card with red ambient blur border.
- Top Badges:
  - Left: "N Série Original" (Netflix 'N' logo in red + white uppercase text).
  - Right: "TOP 1 HOJE" in red badge.
- Main Image: Parallax portrait of Bruno César with bottom fade into card background.
- Title & Role:
  - Title: "BRUNO CESAR" in massive bold serif/condensed font with drop shadow.
  - Subtitle: "Gestor de Tráfego para Infoprodutores" in red tracking-wider text.
  - Bio: "Especialista em escala de lançamentos com Meta Ads & Google Ads. ROI implacável e estratégias validadas."
- WhatsApp Action CTA:
  - Button in vibrant green (#25D366) with WhatsApp icon: "Agendar uma reunião".

3. SECTION "CONTINUAR ASSISTINDO"
- Header with red bar accent + "Continuar Assistindo" (T1 : 3 Ep).
- Episode 1 Card (ORÇAMENTOS):
  - Badge "N Ep. 1", "99% Match", "25 min".
  - Headline "ORÇAMENTOS": "Tenha uma gestão de anúncios profissional com foco em ROI".
  - Red progress bar at 85%.
  - Play button hover overlay.
- Episode 2 Card (MENTORIA):
  - Badge "N Ep. 2", "98% Match", "45 min".
  - Headline "MENTORIA": "Acelere seus resultados de maneira simples ao vivo".
  - Red progress bar at 60%.
- Episode 3 Card (COMUNIDADE):
  - Badge "N Ep. 3", "99% Match", "Indeterminado".
  - Headline "COMUNIDADE": "Entre para a comunidade VIP e exclusiva no Telegram".
  - Red progress bar at 40%.

4. SECTION "EM ALTA NO PERFIL"
- Header: Red bar accent + "Em Alta no Perfil" (Redes).
- Episode 4 Card (INSTAGRAM):
  - Badge "N Ep. 4", "97% Match", "Diário".
  - Headline "INSTAGRAM": "Diário e bastidores de anúncios no @brunocesar".
  - Red progress bar at 90%.
- Episode 5 Card (PLAYLIST DO GESTOR):
  - Badge "N Ep. 5", "99% Match", "Trilha Sonora".
  - Headline "PLAYLIST DO GESTOR": "Músicas de foco e concentração para impulsionar suas campanhas".
  - Red progress bar at 70%.

5. STREAMING FOOTER
- Monogram: "BC" in large condensed font.
- Subtitle: "Bruno Cesar • Gestão de Performance".

JAVASCRIPT LOGIC
- Card hover transformations and play icon scale.
- WhatsApp click handling.
- History replaceState fix.

RECREATION RULES
- Output a single complete HTML file with all CSS and JavaScript embedded.
- Ensure all card proportions, badges, progress bars, and streaming aesthetic elements are 100% complete.`;
