export const domineIaPrompt = `Build a full landing page for "Domine IA no Trabalho" using plain HTML, CSS, and vanilla JavaScript. Recreate the existing page with maximum visual fidelity: a high-converting tech productivity sales landing page featuring a cyber-space network background video in the hero, neon lime and violet accents, sticky scroll story statements, benefit cards with custom iconography, 3-phase horizontal step cards, card stack deliverables, pricing offer table with countdown badge, 7-day guarantee, and interactive FAQ accordion.

PAGE IDENTITY
- Page title: "[DOMINE IA NO TRABALHO] — Aumente sua produtividade e economize horas todos os dias"
- Meta description: "Aprenda a usar a inteligência artificial no seu dia a dia de forma simples, prática e com estratégia, para automatizar tarefas repetitivas e se destacar no mercado."
- Language: pt-BR.
- Page type: Tech & AI productivity course sales landing page.
- Visual style: Clean modern SaaS tech, high contrast dark & light sections, neon lime highlight (#D9FF5C), electric violet (#C0ADFF), soft ice blue (#B8DEFF), dark slate typography (#242426, #1A1A1C), off-white backgrounds (#FAFAFA, #FFFFFF).

ASSETS
- Hero Background Video: "https://assets.mixkit.co/videos/preview/mixkit-digital-network-connections-in-a-cyber-space-39824-large.mp4"
- Guarantee Shield Icon: SVG inline.
- Checkmark & Interface Icons: SVG inline (Lucide style, 2px stroke).

CORE FIDELITY RULES
- Output a single complete HTML file containing all HTML, embedded CSS in a <style> tag, and embedded vanilla JavaScript in a <script> tag.
- Include the routing fix script inside <head>: history.replaceState(null, '', '/');
- All CTA buttons must smooth scroll to "#preco" or checkout link.
- Preserve all animation data attributes (data-anim="scale-in", data-anim="slide-left", data-anim="slide-right") and IntersectionObserver logic.

DEPENDENCIES & HEAD
- Preconnect: https://fonts.googleapis.com, https://fonts.gstatic.com
- Fonts:
  - Inter:wght@400;500;600;700
  - Fragment Mono
- Initial script: document.documentElement.classList.add("js-ready");

DESIGN TOKENS & CSS VARIABLES
:root {
  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-mono: 'Fragment Mono', monospace;
  --bg-primary: #FAFAFA;
  --bg-surface: #FFFFFF;
  --text-main: #242426;
  --text-muted: #666666;
  --accent-lime: #D9FF5C;
  --accent-violet: #C0ADFF;
  --accent-blue: #B8DEFF;
  --accent-peach: #FAE9E6;
  --border-light: rgba(0, 0, 0, 0.08);
  --shadow-card: 0 4px 20px rgba(0, 0, 0, 0.04);
  --shadow-hover: 0 12px 32px rgba(0, 0, 0, 0.08);
  --radius-card: 16px;
  --radius-btn: 100px;
}

SECTIONS BREAKDOWN

1. MINIMALIST SITE HEADER
- Fixed / sticky top navbar with backdrop-blur.
- Logo: Sparkle icon + "[DOMINE IA]".
- Navigation links: O que muda, Como funciona, O que recebe, Para quem é, Dúvidas.
- Action CTA: "Garantir vaga" button with arrow icon.

2. HERO SECTION
- Background: Looping muted video of digital cyber space connections + subtle grid overlay.
- Main headline (scale-in animation):
  "Aumente sua produtividade no trabalho sem sufoco, mesmo começando do zero"
- Subheadline:
  "Aprenda a usar a inteligência artificial no seu dia a dia de forma simples, prática e com estratégia, para automatizar tarefas e não perder mais horas em rotinas repetitivas."
- CTA Container:
  - Big Accent Button: "Quero dominar a IA no trabalho" with right arrow.
  - Price highlight note: "Acesso por apenas R$ 47".

3. IDENTIFICATION / SPOTLIGHT GRID
- Eyebrow badge with info icon: "Você se identifica?".
- Section title: "Se você se sente sobrecarregado de tarefas no trabalho, mas não sabe como a IA pode te ajudar, isso é mais comum do que parece".
- 6 Spotlight cards with glowing dots:
  1. Sabe que a Inteligência Artificial está mudando tudo, mas ainda não começou a usar
  2. Tem medo de ficar desatualizado ou perder espaço profissional
  3. Não entende bem como usar prompts e ferramentas no seu setor
  4. Já tentou usar o ChatGPT ou outras IAs, mas achou as respostas genéricas e confusas
  5. Perde horas todos os dias respondendo e-mails, montando relatórios ou planilhas
  6. Quer ter mais tempo livre e se destacar com entregas muito mais rápidas

4. STICKY SCROLL STORY
- Fullscreen sticky text block with subtle radial glow:
  - Phrase 1: "Cada hora gasta em tarefas repetitivas é energia que a IA poderia economizar para você."
  - Phrase 2: "Sua produtividade do futuro começa agora. Ou não começa."

5. TRANSFORMATION BENEFITS
- Eyebrow badge: "Sua transformação".
- Section title: "O que muda quando você aprende a usar a IA do jeito certo".
- 4 Benefit cards with hover lift:
  1. "IA trabalhando por você": Automatize processos, resumos, e-mails e análises em poucos segundos.
  2. "Prompts estratégicos e precisos": Domine perguntas certas e obtenha respostas personalizadas e prontas.
  3. "Clareza sobre as melhores ferramentas": Descubra quais IAs usar para cada tipo de tarefa sem perder tempo.
  4. "Rotina sob seu controle": Reduza sua carga diária e ganhe mais tempo para o que importa.
- CTA Button: "Quero ter esses resultados".

6. HOW IT WORKS / SCROLL PHASE STEPS
- Eyebrow badge: "Simples e direto".
- Title: "Veja como funciona na prática".
- 3 Step panels:
  - 01: "Você aprende a lógica e os comandos de IA" (Fundamentos dos modelos e criação de comandos otimizados).
  - 02: "Você domina a automação de rotinas" (Aplicação em textos, planilhas, relatórios e tarefas reais).
  - 03: "Você cria seu ecossistema de produtividade" (Integração de ferramentas para trabalhar menos e entregar mais).

7. DELIVERABLES / STACK
- Eyebrow badge: "O que você recebe".
- 4 Stacked deliverable cards with pastel colored icon badges:
  - Lime (#D9FF5C): "Curso completo de IA no Trabalho, passo a passo"
  - Violet (#C0ADFF): "Biblioteca com mais de 100 Prompts Prontos"
  - Blue (#B8DEFF): "Guia prático das melhores ferramentas de IA"
  - Peach (#FAE9E6): "Materiais de apoio e templates executáveis"

8. IDEAL AUDIENCE
- Badge: "Feito para você".
- Checklist:
  - Quem quer economizar horas de trabalho semanal usando IA
  - Quem quer se destacar profissionalmente e entregar resultados superiores
  - Empresários, profissionais liberais e autônomos que querem otimizar processos
  - Quem quer começar do absoluto zero sem complicação técnica

9. OFFER / PRICING SECTION (#preco)
- Modern high-converting offer card:
  - Badge: "OFERTA ESPECIAL DE LANÇAMENTO"
  - Regular price: De ~R$ 197~ por apenas
  - Price: R$ 47 à vista ou parcelado
  - Features list with green checks
  - CTA Button: "Garantir Minha Vaga Agora"
  - Security badges: Compra Segura, Acesso Imediato, 7 Dias de Garantia.

10. 7-DAY GUARANTEE BLOCK
- 7 Dias de Garantia Incondicional: Se não economizar tempo e gostar do conteúdo, reembolso total com 1 clique.

11. FAQ ACCORDION
- Q1: Preciso entender de programação para fazer o curso? (Não, 100% focado em uso prático sem código).
- Q2: O curso serve para a minha área de atuação? (Sim, aplicável a escritórios, marketing, gestão, saúde, educação, etc).
- Q3: Quanto tempo tenho de acesso? (Acesso vitalício ou 1 ano com todas as atualizações).
- Q4: Como recebo o acesso? (Imediatamente por e-mail após a confirmação do pagamento).

12. MINIMALIST FOOTER
- Copyright Domine IA no Trabalho, termos de uso, políticas de privacidade, suporte.

JAVASCRIPT LOGIC
- IntersectionObserver animating elements with [data-anim] on scroll.
- Sticky story scroll opacity transition.
- FAQ Accordion toggle with smooth height opening/closing.
- Video retry and keep-alive playback.
- History replaceState fix.

RECREATION RULES
- Provide the complete, pristine single HTML file with no omissions or placeholders.
- Maintain full responsiveness across mobile, tablet, and desktop viewports.`;
