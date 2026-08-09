export const linkNaBio02Prompt = `Build a full landing page for "Duda Silva | Social Media & Digital Branding" using plain HTML, CSS, and vanilla JavaScript. Recreate the existing page with maximum visual fidelity: a modern, minimalist Link-in-Bio page with an infinite scrolling marquee cover banner, floating profile avatar, "Sobre Mim" bio card, styled interactive links, and glassmorphism headers.

PAGE IDENTITY
- Page title: "Duda Silva | Social Media Specialist"
- Meta description: "Especialista em transformar a presença digital de marcas com estratégias de conteúdo visual, design marcante e posicionamento de alto impacto."
- Language: pt-BR.
- Page type: Link-in-Bio / Personal Portfolio & Service Gateway Page.
- Visual style: Light luxury modern aesthetic, soft purple tint background (#f8f6fb), crisp typography, smooth infinite marquee header, rounded cards (rounded-3xl), subtle radial backdrop glows, high contrast text (#12001a / #2e1065).
- Overall background: #f8f6fb (textured light canvas with radial gradient purple accents).
- Primary font stack: 'Montserrat', sans-serif (Google Fonts).
- Core fidelity rule: Output a single complete HTML file containing all HTML, embedded CSS in a <style> tag, and embedded vanilla JavaScript in a <script> tag. Preserve all layout grids, typography clamps, animations, and interactive behaviors.

ASSETS DE IMAGEM E VIDEO
Use exatamente estes assets por link. Não use placeholders nem banco de imagens genérico.

1. Profile Avatar Image:
- Tipo: imagem
- Link: https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400
- Aparece em: Seção ProfileHeader (foto de perfil circular com anel gradiente roxo)
- Detalhes: 1:1 ratio, circular overflow-hidden, border-4 border-white, shadow-2xl.

2. Cover Marquee Banner Image 1:
- Tipo: imagem
- Link: https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600
- Aparece em: Marquee da capa ("Social Media Strategy")
- Detalhes: Card com rounded-xl, border border-purple-400/30, visual de design abstrato 3D.

3. Cover Marquee Banner Image 2:
- Tipo: imagem
- Link: https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=600
- Aparece em: Marquee da capa ("Branding & Identity")
- Detalhes: Card com rounded-xl, border border-purple-400/30, amostras de paleta de cores.

4. Cover Marquee Banner Image 3:
- Tipo: imagem
- Link: https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=600
- Aparece em: Marquee da capa ("Content Creation")
- Detalhes: Card com rounded-xl, arte gráfica e tipografia.

5. Cover Marquee Banner Image 4:
- Tipo: imagem
- Link: https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=600
- Aparece em: Marquee da capa ("Feed Aesthetics")
- Detalhes: Card com rounded-xl, estúdio e workspace.

6. Cover Marquee Banner Image 5:
- Tipo: imagem
- Link: https://images.unsplash.com/photo-1542744094-3a31b272c490?auto=format&fit=crop&q=80&w=600
- Aparece em: Marquee da capa ("Digital Marketing")
- Detalhes: Card com rounded-xl, analytics de marketing.

7. Cover Marquee Banner Image 6:
- Tipo: imagem
- Link: https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=600
- Aparece em: Marquee da capa ("Visual Assets")
- Detalhes: Card com rounded-xl, protótipo de produto.

DEPENDENCIES & HEAD
- Plain HTML, CSS e vanilla JavaScript apenas.
- Script de roteamento no <head>:
  <script>history.replaceState(null, '', '/');</script>
- Google Fonts:
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400&display=swap" rel="stylesheet">

GLOBAL STYLES & DESIGN TOKENS
- Variáveis CSS :root exatas:
  --bg: #f8f6fb;
  --card-bg: rgba(255, 255, 255, 0.9);
  --text-primary: #2e1065;
  --text-secondary: #582788;
  --accent-purple: #7e22ce;
  --border-purple: #e9d5ff;
  --radius-card: 1.5rem;
  --max-width: 28rem; (448px - mobile-first max container)
- Box-sizing: border-box universal (*, ::before, ::after).
- Smooth scrolling behavior: html { scroll-behavior: smooth; }

SECTION ORDER
1. Sticky Header Bar (Logotipo minimalista "MS" e nome no canto esquerdo)
2. Profile Cover Marquee (Banner carrossel infinito sem sombras com cards de portfólio)
3. Profile Avatar & Identity (Foto de perfil sobreposta, nome "Duda Silva", cargo "Social Media")
4. Section "Sobre Mim" (Card de apresentação)
5. Heading "Links que vão te ajudar" (Com espaçamento mt-10/mt-12)
6. Interactive Links List (Botões de links estilizados)
7. Minimalist Footer (Copyright e marca)

REUSABLE COMPONENTS

- Componente: Sticky Header
  - Position sticky, top: 0, z-index: 40.
  - Background: rgba(255, 255, 255, 0.8), backdrop-filter: blur(12px).
  - Border-bottom: 1px solid #f3e8ff.
  - Conteúdo alinhado à esquerda (\`justify-start\`), contendo circulo de avatar com inicial "MS" em gradiente e nome/subtítulo.

- Componente: Infinite Marquee Banner
  - Width: 100vw, alinhado ao centro com \`left: 50%; transform: translateX(-50%)\`.
  - Altura: 208px em mobile (52rem/52px responsive), 256px em telas sm/md.
  - Animação CSS @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
  - Animação contínua e linear (duration 25s, infinite).

- Componente: Card "Sobre Mim"
  - Elemento container: \`bg-white/90 border border-purple-200 rounded-3xl p-6 shadow-xl shadow-purple-950/5\`.
  - Título: \`text-purple-950 text-2xl font-light\` com o destaque \`font-extrabold\`.
  - Parágrafo com destaques em negrito nas palavras-chave ("Maria Eduarda", "Social Media").

- Componente: Link Button Item
  - Container clicável com gradiente suave, borda fina roxa, efeito hover scale (\`hover:scale-[1.015]\`), flexbox interno com ícone de destaque à esquerda, título/descrição ao centro e seta à direita.

SECTIONS BREAKDOWN (DETALHAMENTO DE CADA SEÇÃO)

- SECTION 1: HEADER
  - Header fixo no topo com efeito blur e logo MS.
  - Nome: \`Duda Silva\` / Subtítulo: \`Social Media\`.

- SECTION 2 & 3: PROFILE & COVER BANNER
  - Banner de largura total (100vw) com faixa contínua de imagens de trabalhos em carrossel.
  - Foto de perfil: Foto circular com anel branco e sombra elevada sobreposta ao banner.
  - Nome principal: "Duda Silva".
  - Subtítulo: "Social Media".

- SECTION 4: SOBRE MIM
  - Card centralizado: "Sou Maria Eduarda, atuo como Social Media especialista em transformar a presença digital de marcas. Crio estratégias de conteúdo visual, design marcante e posicionamento de alto impacto para atrair e engajar seu público ideal."

- SECTION 5: HEADING DE LINKS
  - Título: "Links que vão te ajudar" (H2 text-xl sm:text-2xl).

- SECTION 6: LISTA DE LINKS
  - Coleção de 4 botões estilizados direcionando para WhatsApp, Portfólio, Agendamento e Serviços.

- SECTION 7: FOOTER
  - Footer clean com copyright "© 2026 Duda Silva. Todos os direitos reservados."

JAVASCRIPT & ANIMATION BEHAVIOR
- Marquee infinito em CSS/JS com duplicação automática da array de imagens.
- Animação de transição suave em cliques e expansão de detalhes.
- Efeito hover e active nos botões para toque mobile responsivo.

RECREATION RULES
- Retorne apenas o código HTML completo em um único arquivo, com todo o CSS dentro de <style> e JavaScript dentro de <script>.
- Mantenha 100% da hierarquia de elementos, classes e estilo visual intactos.`;
