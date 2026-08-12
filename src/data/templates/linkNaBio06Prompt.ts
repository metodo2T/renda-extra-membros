export const linkNaBio06Prompt = `Build a full landing page for "MARIA SANTOS - Social Media Bio Link Page" using plain HTML, CSS, and vanilla JavaScript. Recreate the existing page with maximum visual fidelity: a sleek, high-contrast light-purple Link-in-Bio mobile canvas with an infinite marquee portfolio cover banner, centered circular profile avatar, minimalist sticky header, "Sobre Mim" bio card, styled interactive link buttons, and responsive modal dialogs.

PAGE IDENTITY
- Page title: "MARIA SANTOS | Social Media & Visual Identity"
- Meta description: "Página de Links e Portfólio de Maria Santos, especialista em Social Media, Branding e Estratégia Digital."
- Language: pt-BR.
- Page type: Link-in-bio / Portfolio Showcase / Personal Branding Landing Page.
- Visual style: Clean light luxury with soft violet/purple accents, textured light background (#f8f6fb), continuous horizontal marquee animation, backdrop-blur sticky header, rounded-2xl / rounded-3xl cards with 1px purple borders, high contrast text (#1e0e2e, #3b0764, #581c87).
- Overall background: #f8f6fb (Radial gradient texture with #f3eef9).
- Primary font stack: 'Montserrat', sans-serif (Google Fonts weights: 300, 400, 500, 600, 700, 800, 900).
- Core fidelity rule: Output a single complete HTML file containing all HTML, embedded CSS in a <style> tag, and embedded vanilla JavaScript in a <script> tag. Preserve all layout grids, typography clamps, marquee keyframes, modals, and interactive behaviors.

ASSETS DE IMAGEM E VIDEO
Use exatamente estes assets por link. Não use placeholders nem banco de imagens genérico:

1. Foto de Perfil
- Tipo: Imagem (Avatar)
- Link: https://i.postimg.cc/BbDGqC6K/Posicionamento-de-Imagem.jpg
- Aparece em: Seção 2 (Header do Perfil) - Avatar circular centralizado
- Detalhes: Imagem portrait de alta qualidade, enquadramento facial/posicionamento profissional.
- Renderização: 'w-36 h-36 sm:w-44 sm:h-44 rounded-full object-cover border-4 border-white shadow-2xl', envolvida em um anel com gradiente e blur ('from-purple-600 via-fuchsia-500 to-purple-800').

2. Capa de Portfólio Marquee (6 imagens repetidas em loop infinito)
- Imagem 1: https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600 (Social Media Strategy)
- Imagem 2: https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=600 (Branding & Identity)
- Imagem 3: https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=600 (Content Creation)
- Imagem 4: https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=600 (Feed Aesthetics)
- Imagem 5: https://images.unsplash.com/photo-1542744094-3a31b272c490?auto=format&fit=crop&q=80&w=600 (Digital Marketing)
- Imagem 6: https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=600 (Visual Assets)
- Aparece em: Seção 2 (Full-width infinite horizontal scroll marquee cover)
- Renderização: 'w-[100vw] h-56 sm:h-68 md:h-80', cards de 'w-40 sm:w-56 md:w-64 h-full rounded-xl object-cover', movimento contínuo via CSS keyframes '@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }'.

DEPENDENCIES & HEAD
- Plain HTML5, CSS3 e Vanilla JavaScript.
- Script de roteamento mandatório no <head>:
  <script>history.replaceState(null, '', '/');</script>
- Google Fonts import:
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
- Lucide Icons (via CDN SVG ou inline SVGs para os ícones de link, fechar, ver mais e seta).

GLOBAL STYLES & DESIGN TOKENS
- Variáveis CSS :root:
  --bg: #f8f6fb;
  --card-bg: rgba(255, 255, 255, 0.9);
  --text-primary: #1e0e2e;
  --text-purple-dark: #3b0764;
  --text-purple-medium: #581c87;
  --accent-purple: #7e22ce;
  --accent-fuchsia: #c026d3;
  --border-color: rgba(233, 213, 255, 0.8);
  --radius-button: 9999px;
  --radius-card: 1.5rem;
  --max-width: 28rem; /* 448px (max-w-md) */
- Box-sizing: '* { box-sizing: border-box; margin: 0; padding: 0; }'
- Tipografia: Fonte 'Montserrat', sans-serif com suporte a pesos de 300 a 900.

SECTION ORDER
1. Sticky Minimalist Header
2. Profile Header (Cover Marquee Full-Width + Avatar Overlap + Nome "MARIA SANTOS" + Subtítulo "Social Media")
3. Card "Sobre Mim"
4. Título da Seção ("Links que vão te ajudar")
5. Lista de Botões de Link Interativos (Estratégia, Design de Feed, Identidade Visual, Tráfego Pago, Mentoria)
6. Footer Copyright ("© 2026 MARIA SANTOS. Todos os direitos reservados.")
7. Modais Interativos (Detalhamento do Link ao Clicar + Fechamento por backdrop/botão X)

REUSABLE COMPONENTS
- Botão de Link (LinkButton):
  - Card retangular arredondado ('rounded-2xl' / 'rounded-3xl'), background '#ffffff', border '1px solid rgba(233, 213, 255, 0.9)', shadow '0 10px 25px -5px rgba(58, 7, 100, 0.05)'.
  - Ícone à esquerda em badge circular roxa clara ('bg-purple-100 text-purple-700').
  - Título em bold ('font-bold text-purple-950 text-base sm:text-lg'), subtítulo curto ('text-xs sm:text-sm text-purple-800/80').
  - Ícone de seta à direita ('ArrowRight' ou chevron).
  - Hover: 'scale-[1.015]', border mais escuro ('border-purple-400'), shadow expandida.
- Modal Dialog Component:
  - Overlay escuro com backdrop-blur ('bg-black/60 backdrop-blur-sm fixed inset-0 z-50').
  - Card do modal centralizado, max-w-md, animação 'fade-in-scale' de entrada, botão fechar (X) no topo direito.

SECTIONS BREAKDOWN (DETALHAMENTO DE CADA SEÇÃO)

SECTION 1: STICKY MINIMALIST HEADER
- Elemento: '<header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-purple-100">'
- Layout: Container 'max-w-md mx-auto px-4 py-2.5 flex items-center justify-start'
- Conteúdo:
  - Logo/Iniciais: Círculo 28px ('w-7 h-7 rounded-full bg-gradient-to-tr from-purple-600 to-fuchsia-600 text-white text-xs font-black flex items-center justify-center') com o texto "MS".
  - Nome ao lado: '<span className="text-xs font-bold text-purple-950"><span className="font-light text-purple-800">MARIA</span> SANTOS</span>', subtítulo "Social Media".

SECTION 2: PROFILE HEADER
- Banner de Capa:
  - Container 'w-[100vw] relative left-1/2 -translate-x-1/2 h-56 sm:h-68 md:h-80 overflow-hidden bg-purple-950 border-b border-purple-200'.
  - Trilha de carrossel infinito CSS ('animate-marquee flex gap-3.5 opacity-90 h-full py-2.5').
- Avatar de Perfil:
  - Container posicionado sobrepondo a capa: 'relative group z-10 -mt-20 sm:-mt-24 md:-mt-28 mb-4'.
  - Anel brilhante com gradiente 'from-purple-600 via-fuchsia-500 to-purple-800' com efeito blur.
  - Foto em círculo 144px - 176px ('w-36 h-36 sm:w-44 sm:h-44 rounded-full border-4 border-white shadow-2xl object-cover').
  - Imagem: 'https://i.postimg.cc/BbDGqC6K/Posicionamento-de-Imagem.jpg'.
- Nome & Cargo:
  - 'H1': '<span className="font-light text-purple-900/80">MARIA</span> <span className="font-black text-purple-950">SANTOS</span>' (text-3xl sm:text-4xl).
  - 'Paragraph': "Social Media" (text-sm sm:text-base font-semibold text-purple-800/80).

SECTION 3: SOBRE MIM (ABOUT ME CARD)
- Card com fundo branco leitoso ('bg-white/90 border border-purple-200 rounded-3xl p-6 sm:p-7 shadow-xl shadow-purple-950/5 relative overflow-hidden my-6').
- Glow sutil de fundo: 'absolute top-0 right-0 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl'.
- Título: '<h3 className="text-purple-950 text-2xl sm:text-3xl"><span className="font-light text-purple-900/80">Sobre</span> <span className="font-extrabold text-purple-950">Mim</span></h3>'.
- Parágrafo: "Sou Maria Eduarda, atuo como Social Media especialista em transformar a presença digital de marcas. Crio estratégias de conteúdo visual, design marcante e posicionamento de alto impacto para atrair e engajar seu público ideal."

SECTION 4: TÍTULO DOS LINKS
- Container com espaçamento proporcional: 'mt-10 sm:mt-12 mb-6 text-center'.
- Heading: '<h2 className="text-xl sm:text-2xl tracking-wide text-purple-950"><span className="font-light text-purple-800/80">Links</span> <span className="font-bold text-purple-950">que vão te ajudar</span></h2>'.

SECTION 5: LISTA DE LINKS INTERATIVOS
Container 'flex flex-col gap-3.5 sm:gap-4':
1. "Estratégia de Conteúdo & Calêndario" -> Subtítulo: "Planejamento mensal sob medida para o seu nicho"
2. "Design de Feed & Identidade Visual" -> Subtítulo: "Estética profissional para elevar a sua marca"
3. "Gestão Completa de Redes Sociais" -> Subtítulo: "Do planejamento à publicação e análise de métricas"
4. "Mentoria de Posicionamento Digital" -> Subtítulo: "Aprenda a destacar seu perfil e vender todos os dias"
5. "Falar no WhatsApp Directo" -> Subtítulo: "Solicite um orçamento exclusivo instantaneamente"

SECTION 6: FOOTER COPYRIGHT
- Elemento: '<footer className="w-full mt-6 pt-6 pb-8 border-t border-purple-200/80 bg-gradient-to-b from-white/60 via-purple-50/50 to-purple-100/40 rounded-b-3xl text-center px-4">'
- Texto: '© 2026 MARIA SANTOS. Todos os direitos reservados.'

JAVASCRIPT & ANIMATION BEHAVIOR
- Carrossel Infinito (Marquee Animation):
  - CSS Keyframes:
    '''css
    @keyframes marquee {
      0% { transform: translateX(0%); }
      100% { transform: translateX(-50%); }
    }
    .animate-marquee {
      display: flex;
      width: max-content;
      animation: marquee 25s linear infinite;
    }
    .animate-marquee:hover {
      animation-play-state: paused;
    }
    '''
- Interação de Modais:
  - Event listener nos cards de link para abrir o modal com as informações do serviço e botão direto para o WhatsApp preenchido ('https://wa.me/5511999999999?text=...').
  - Fechamento ao clicar na tecla 'Escape', no botão fechar ou fora do container do modal.

RECREATION RULES
- Retorne apenas o código HTML completo em um único arquivo, com todo o CSS dentro de <style> e JavaScript dentro de <script>.
- Mantenha 100% da hierarquia de elementos, classes e estilo visual intactos.
`;
