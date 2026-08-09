export const linkNaBioArquitetaPrompt = `Build a full landing page for "Débora Mendes | Arquitetura & Design de Interiores" using plain HTML, CSS, and vanilla JavaScript. Recreate the existing page with maximum visual fidelity: a luxury editorial mobile-first bio page with warm neutral palette, high-contrast typography, interactive 3D perspective cards, device mockups, and slide-out menu.

PAGE IDENTITY
- Page title: "Débora Mendes | Arquitetura & Design de Interiores"
- Meta description: "Débora Mendes - Arquitetura autoral, design de interiores residenciais e consultorias de alto padrão."
- Language: pt-BR.
- Page type: Luxury Bio Link / Portfolio & Architecture Services Landing Page.
- Visual style: Minimalist Editorial, Warm Neutral Luxury, Soft Organic Tones, 3D Interactive Hover Cards, High-Contrast Typography.
- Overall background: Global dark background \`#1A1817\` for desktop framing, with an inner centered container in \`#FAF9F6\` (off-white cream) simulating a mobile screen container (max-width: 420px, rounded corners 24px, subtle border \`#383431\` and heavy drop shadow).
- Primary font stack: 'Italiana', 'Playfair Display' (serif-editorial italic headers) and 'Montserrat' (sans-clean body/labels) loaded via Google Fonts.
- Core fidelity rule: Output a single complete HTML file containing all HTML, embedded CSS in a <style> tag, and embedded vanilla JavaScript in a <script> tag. Preserve all layout grids, typography clamps, animations, 3D card perspectives, and interactive behaviors.

ASSETS DE IMAGEM E VIDEO
Use exatamente estes assets por link. Não use placeholders nem banco de imagens genérico.

1. Foto de Perfil Hero Header:
- Tipo: Imagem (Portrait Editorial)
- Link: https://i.postimg.cc/CLxCF5b5/attractive-shy-girl-sitting-alone-holding-herself-knees-nude-stylish-makeup-curly-long-hairstyle-bla.jpg
- Aparece em: Seção Hero (Header topo da página)
- Detalhes: Enquadramento vertical, proporção 3:4, iluminação quente e tom editorial nude/marrom.
- Renderização: object-fit: cover, object-position: top center, largura 100%, gradiente escuro de sobreposição na base para legibilidade do texto.

2. Thumbnail Card 1 - Projeto Arquitetônico:
- Tipo: Imagem
- Link: https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600
- Aparece em: Card 1 (Lado direito, thumbnail vertical)
- Detalhes: Fachada arquitetônica moderna e atemporal.
- Renderização: object-fit: cover, dimensão 70px x 80px (sm: 78px x 86px), bordas arredondadas à direita (border-radius: 10px).

3. Thumbnail Card 2 - Design de Interiores:
- Tipo: Imagem
- Link: https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=600
- Aparece em: Card 2 (Lado direito, thumbnail vertical)
- Detalhes: Ambiente de sala de estar minimalista com iluminação natural.
- Renderização: object-fit: cover, dimensão 70px x 80px (sm: 78px x 86px), bordas arredondadas à direita (border-radius: 10px).

4. Assets Multi-Device Mockup - Card 3 (Kit Projeto & 3D):
- Tipo: Composição de 3 Imagens (Mockup de Ebook, Tablet e Smartphone)
- Links:
  - Ebook/Livro: https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=500
  - Tablet: https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=500
  - Smartphone: https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=500
- Aparece em: Card 3 (Lado esquerdo em composição 3D sobreposta)
- Renderização: Molduras simulando aparelhos com sombras suaves, inclinação e z-index em camadas.

5. Thumbnail Card 4 - Consultoria Express:
- Tipo: Imagem
- Link: https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80&w=600
- Aparece em: Card 4 (Lado direito, thumbnail vertical)
- Detalhes: Detalhamento de interiores e acabamentos nobres.
- Renderização: object-fit: cover, dimensão 70px x 80px, bordas arredondadas à direita.

DEPENDENCIES & HEAD
- Plain HTML5, CSS3 puro e vanilla JavaScript ES6.
- Inclusão mandatória no <head>:
  <script>history.replaceState(null, '', '/');</script>
- Imports de fontes Google Fonts:
  https://fonts.googleapis.com/css2?family=Italiana&family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Playfair+Display:ital,wght@0,400;0,600;1,400;1,600&display=swap

GLOBAL STYLES & DESIGN TOKENS
- Variáveis CSS :root exatas:
  --bg-canvas: #FAF9F6;
  --bg-desktop: #1A1817;
  --card-white: #FFFFFF;
  --card-taupe: #52433B;
  --card-beige: #7A675B;
  --border-light: #C8BFB8;
  --text-dark: #3D3530;
  --text-title-brown: #5C4B40;
  --text-muted: #524842;
  --accent-gold: #D4AF37;
  --radius-card: 16px;
  --max-width-mobile: 420px;
- Box-sizing: border-box universal (*, ::before, ::after).
- Efeito 3D nos Cards:
  - Container [perspective: 1000px].
  - Elemento do card: transform-style: preserve-3d; transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1).
  - Sombra 3D (.shadow-editorial-3d): 0 12px 28px -4px rgba(45, 38, 33, 0.18), 0 4px 10px -2px rgba(0, 0, 0, 0.1), inset 0 1px 0 0 rgba(255, 255, 255, 0.35);
  - Estado Hover: transform: scale(1.025) translateY(-4px) rotateX(-3deg) rotateY(2deg);

SECTION ORDER
1. Hero Header Section (Fotografia principal, Badge BEM-VINDO, Nome & Sobrenome, Botão do Instagram @deboramendes.arq e Ícone do Menu Hamburguer).
2. Seção de Subtítulo Bio (Bio Resumida, Especialidade e Localização).
3. Seção de Cards de Serviços 3D (4 Cards Interativos com 3D Perspective e Tilt):
   - Card 1: Projeto Arquitetônico (Card Branco com thumbnail à direita)
   - Card 2: Design de Interiores (Card Taupe Escuro com thumbnail à direita)
   - Card 3: Kit Projeto & 3D (Card Bege Médio com Multi-Device Mockup à esquerda)
   - Card 4: Consultoria Express (Card Branco com thumbnail à direita)
4. Footer Section (Localização, Links sociais com ícones do Instagram, WhatsApp, E-mail e Copyright).
5. Menu Gaveta Lateral Slide-out (Modal interativo que desliza da direita ao clicar no menu).

REUSABLE COMPONENTS

- Componente: Badge / Pill "BEM-VINDO"
  - Estilo: Fundo translúcido (rgba(255, 255, 255, 0.2)), efeito backdrop-filter blur 8px, borda 1px branca translúcida (rgba(255,255,255,0.3)), texto em caixa alta, tracking 0.2em, tamanho 10px, cor branca.

- Componente: Card 3D de Serviço (.bio-card-3d)
  - Estrutura: flex, align-items center, overflow hidden, min-height 96px, padding 16px, border-radius 16px.
  - Variações de Cor:
    - Light: Fundo #FFFFFF, Borda #C8BFB8, Título #5C4B40, Descrição #524842.
    - Taupe: Fundo #52433B, Borda transparente, Título #FFFFFF, Descrição rgba(255,255,255,0.92).
    - Beige: Fundo #7A675B, Borda transparente, Título #FFFFFF, Descrição rgba(255,255,255,0.95).
  - Animação Interativa: Efeito 3D com inclinação nos eixos X e Y no hover, elevação no eixo Z e ampliação de sombra.

- Componente: Multi-Device Mockup (Card 3)
  - Composição sobreposta de 3 dispositivos (Livro/Ebook, Tablet e Celular) com imagens reais do portfólio.
  - Posicionado à esquerda do card, com rotação sutil de -6deg e perspectiva de profundidade.

SECTIONS BREAKDOWN (DETALHAMENTO DE CADA SEÇÃO)

SECTION 1: HERO HEADER
- Tags: <header class="relative w-full overflow-hidden">
- Background: Imagem de perfil da Débora Mendes com gradiente de escurecimento suave da metade para baixo (background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)).
- Elementos Superiores:
  - Canto Superior Esquerdo: Badge "BEM-VINDO" estilizado em pill translúcida.
  - Canto Superior Direito: Botão circular do Menu Hamburguer (linhas minimalistas para abrir a gaveta lateral).
- Elementos Inferiores do Hero:
  - H1: "Débora Mendes" (Fonte Serif Editorial 'Italiana'/'Playfair Display', tamanho 2.6rem, cor branca com font-weight leve no sobrenome Mendes em itálico).
  - Tag da Profissão: "ARQUITETA" em caixa alta, cor dourada/bege claro (#E5D0AC), letter-spacing 0.25em, fonte Montserrat 11px.
  - Botão de Ação rápida: Pill com link direto para o Instagram "@deboramendes.arq" com ícone suave.

SECTION 2: SUBTÍTULO BIO & LOCALIZAÇÃO
- Espaçamento: mt-6 sm:mt-8 pb-4px, alinhamento centralizado.
- Parágrafo Bio: "Arquitetura autoral, design de interiores residenciais e consultorias de alto padrão."
- Estilo: Fonte Montserrat 12px, cor #524842, line-height 1.6, max-width 320px centralizado.

SECTION 3: CARDS DE SERVIÇOS EM 3D
- Layout: Container flex col com gap de 18px, padding horizontal 20px, com regra CSS [perspective: 1000px].

- CARD 1:
  - Título: "Projeto Arquitetônico"
  - Descrição: "Projetos residenciais e comerciais exclusivos, do conceito à aprovação e acompanhamento executivo da obra."
  - Estilo: Light (Branco com borda sutil #C8BFB8).
  - Thumbnail: Foto da Fachada Arquitetônica à direita.

- CARD 2:
  - Título: "Design de Interiores"
  - Descrição: "Transformação completa de ambientes com detalhamento de marcenaria, iluminação, revestimentos e decoração."
  - Estilo: Taupe Escuro (#52433B).
  - Thumbnail: Foto de Sala de Estar em Interiores à direita.

- CARD 3:
  - Título: "Kit Projeto & 3D"
  - Descrição: "Pacote completo com imagens 3D fotorrealistas, memorial descritivo e lista de compras e fornecedores."
  - Estilo: Bege Médio Quente (#7A675B).
  - Ilustração: Multi-Device Mockup 3D à esquerda.

- CARD 4:
  - Título: "Consultoria Express"
  - Descrição: "Orientação rápida e direcionada para renovar a decoração e layout do seu espaço com soluções práticas."
  - Estilo: Light (Branco com borda sutil #C8BFB8).
  - Thumbnail: Foto de Detalhes de Interiores à direita.

SECTION 4: FOOTER & LINKS SOCIAIS
- Elementos:
  - Indicador de Localização: "São Paulo, SP • Brasil" com ícone de pin.
  - Ícones de Redes Sociais: Botões circulares minimalistas para Instagram, WhatsApp e E-mail.
  - Copyright: "© 2026 Débora Mendes Arquitetura. Todos os direitos reservados."

SECTION 5: GAVETA MENU LATERAL (MENU DRAWER)
- Modal fixo overlay com backdrop-blur (rgba(0,0,0,0.5)).
- Painel deslizando da direita (transform: translateX(100%) -> translateX(0)).
- Conteúdo: Nome do Atelier, links diretos de navegação (Serviços, Sobre a Arquiteta, Portfólio, Agendar Reunião via WhatsApp) e botão fechar (X).

JAVASCRIPT & ANIMATION BEHAVIOR
- Efeito 3D Tilt nos Cards via Vanilla JavaScript:
  - Eventos mousemove e touchmove calculam a posição X/Y em relação ao centro do card e aplicam dinamismo no transform: rotateX() rotateY().
  - Eventos mouseleave/touchend resetam suavemente a rotação para o estado de repouso.
- Animação de Scroll Reveal (IntersectionObserver):
  - Observa a entrada dos cards na viewport com atraso incremental (stagger delay 0.09s), aplicando transição de opacity 0 -> 1, translateY(40px -> 0) e rotateX(18deg -> 0deg).
- Controle da Gaveta de Menu (Slide-out Drawer):
  - Manipulação de classes ativas .is-open para controlar visibilidade, acessibilidade aria-hidden e trava de scroll no body.

RECREATION RULES
- Retorne apenas o código HTML completo em um único arquivo, com todo o CSS dentro de <style> e JavaScript dentro de <script>.
- Mantenha 100% da hierarquia de elementos, classes, nomenclatura das copys e estilo visual intactos.`;
