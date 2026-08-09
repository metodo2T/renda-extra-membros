export const model2BasePrompt = `Build a full landing page using plain HTML, CSS, and vanilla JavaScript. Recreate the existing page with maximum visual fidelity. This is not a generic landing page: it is a static recreation of a Nuxt/Tailwind-style page with a black/lime glass visual system, huge blurred glow fields, Petrona editorial hero typography, Jersey 10 pixel labels, Iconify-style pixel mask icons, masked gradient borders, pulsing green CTA rings, and scroll reveal animations.

PAGE IDENTITY
- Page title: [ADAPT TITLE]
- Meta keywords: [ADAPT KEYWORDS]
- Language: pt-BR.
- Page type: long-form sales page.
- Visual style: dark CSS-only productivity page, black base, lime/emerald glow halos, glass cards, pixel icons, serif hero headline, pixel display section labels, green CTAs, masked border highlights, and quiet scroll motion.
- Overall background: #070707, with fixed emerald/lime radial glows behind the whole page.
- Primary fonts: DM Sans for body/UI; Petrona for hero and the final serif line; Jersey 10 for pixel labels; Shadows Into Light loaded as a support face.
- Core fidelity rule: port the original visual recipe and exact DOM/layering behavior. Do not ask the builder to invent a new design. The page must look like the original Nuxt/Tailwind export, with no visible photos, videos, product mockups, navbar, footer, testimonials, or extra sections.

ASSETS DE IMAGEM E VIDEO
Esta pagina nao usa imagens ou videos visiveis no corpo da landing page. Nao invente imagens, videos, mockups, banco de imagens ou midia gerada. A composicao visual deve ser recriada com CSS, fontes, gradientes, blur glows, SVGs inline, data-URIs e icones por mascara.

Fonts and external CSS:
1. DM Sans (WOFF/WOFF2 variable)
2. Petrona (WOFF/WOFF2 variable)
3. Jersey 10 (weight 400)
4. Shadows Into Light (weight 400)
5. Iconify-style CSS mask icons

DEPENDENCIES
- Plain HTML, CSS and vanilla JavaScript only.
- No framework is required, preserve Tailwind utility-class feel.
- No image runtime, no video runtime, no carousel library, no WebGL renderer.
- Use IntersectionObserver for reveal animations.
- Use native <details> / <summary> for FAQ.
- Use CSS keyframes for CTA pulse rings.
- Respect prefers-reduced-motion.

GLOBAL STYLES
- html: normal scrolling, no horizontal overflow.
- body: margin 0; background #070707; color #fff; font-family "DM Sans"...
- Root page wrapper: <div class="craveless-bg"><div class="min-h-screen text-white font-sans overflow-x-hidden">...</div></div>
- Font helper classes: .font-serif, .font-pixel, .font-handwritten

DESIGN TOKENS
- --juicy-dark: #070707
- --juicy-card-bg: #1c1b1b
- --juicy-card-dark: #181818
- Green accents: #4ade80, #22c55e, #16a34a, #10b981, #059669, #76b545, #a8d15f.
- Glass card background: rgba(28,27,27,.4).
- Dark card gradient: linear-gradient(to bottom right, rgba(24,24,24,.80), rgba(24,24,24,.60)).
- Main masked border overlay: background: linear-gradient(135deg, rgba(134,239,172,.4) 0%, rgba(255,255,255,.25) 15%, rgba(255,255,255,.1) 30%, transparent 50%); -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); -webkit-mask-composite: xor; mask-composite: exclude;

SECTION ORDER
1. Hero
2. Before / After Comparison
3. Four-Week Outcomes
4. Results Unlock / Support Materials
5. How It Works
6. Deliverables
7. Offer / Pricing
8. Guarantee
9. FAQ
10. Final CTA

REUSABLE COMPONENTS
- Fixed Background Glow Field: mandatory 500px and 800px circles with #76b545 / #a8d15f behind all sections.
- Green CTA Button: gradient, box-shadow inset, text-shadow, pulse animation (ctaPulseRing).
- Glass Card With Masked Border.
- Border Gradient Method Card.
- Iconify Pixel Icons (inline).
- Scroll Reveal System (IntersectionObserver, .scroll-reveal classes).

SECTIONS TO BUILD (YOU MUST ADAPT THE COPY FOR THE NEW PRODUCT BELOW, BUT KEEP THE EXACT SAME STRUCTURAL CSS, GRIDS AND SECTION LOGIC):
- Section 1: Hero (Centered text, H1 in Petrona, subtitle, CTA)
- Section 2: Before / After Comparison (2 cards, red/green glows)
- Section 3: Four-Week Outcomes (Grid of 3 glass cards)
- Section 4: Results Unlock (Grid of 3 small cards)
- Section 5: How It Works (3 cards with gradient borders)
- Section 6: Deliverables (Grid of cards with icons)
- Section 7: Offer / Pricing (Old price, new price, CTA)
- Section 8: Guarantee (Heart icon, 7 or 30 days)
- Section 9: FAQ (Native details/summary)
- Section 10: Final CTA
`;
