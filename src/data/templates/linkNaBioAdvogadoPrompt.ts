export const linkNaBioAdvogadoPrompt = `Build a full landing page for "Dr. Jorge Hunky | Advogado Criminalista" using plain HTML, CSS, and vanilla JavaScript. Recreate the existing page with maximum visual fidelity: a dark luxury mobile-first bio-link application container with custom cover photo top shading, rounded double-ring profile avatar, verified blue badge, high-contrast white bio cards, rotated iPhone mockup widget for active case tracking, WhatsApp green CTA button, Google Maps red CTA button, pop-up modal system with scheduling options, and social links.

PAGE IDENTITY
- Page title: "Dr. Jorge Hunky | Advogado Criminalista"
- Meta description: "Dr. Jorge Hunky - Defesa técnica especializada, atuação em crimes de alta complexidade e acompanhamento em todas as instâncias."
- Language: pt-BR
- Page type: Bio Link / Portfolio & Lead Generation Mobile Web App.
- Visual style: Dark luxury editorial, modern legal portfolio, high-contrast card interface, glassmorphism overlays, subtle dark gradients (#151E23 to #070A0C), refined typography pairing (Plus Jakarta Sans & Playfair Display), custom SVG icons, rounded borders (22px radius cards, 36px mobile frame), interactive hover states, and smooth modal transitions.
- Overall background: #06090B with a centered 430px mobile canvas container featuring linear-gradient(165deg, #151E23 0%, #0E1418 50%, #070A0C 100%).
- Primary font stack: 'Plus Jakarta Sans', 'Playfair Display', Verdana, sans-serif via Google Fonts.
- Core fidelity rule: Output a single complete HTML file containing all HTML, embedded CSS in a <style> tag, and embedded vanilla JavaScript in a <script> tag. Preserve all layout grids, typography clamps, animations, and interactive behaviors.

ASSETS DE IMAGEM E VIDEO
Use exatamente estes assets por link. Não use placeholders nem banco de imagens genérico.
1. Imagem de Capa (Cover Banner Top)
   - Tipo: Imagem
   - Link: https://i.postimg.cc/ZKBR0JMh/Chat-GPT-Image-2-de-ago-de-2026-16-58-06.png
   - Aparece em: Div .profile-cover
   - Detalhes: Imagem com visual corporativo e jurídico, topo com sombreamento escuro em gradiente.
   - Renderização: .profile-cover-img, width: 100%, height: auto, object-fit: cover. Pseudo-elemento ::after com sombreamento no topo (linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 100%) e altura de 80px).

2. Imagem de Perfil (Avatar)
   - Tipo: Imagem
   - Link: https://i.postimg.cc/XJMyLpB0/pexels-pavel-danilyuk-8112114-(1).jpg
   - Aparece em: Header .profile-header -> .avatar-wrapper -> img.avatar-img
   - Detalhes: Fotografia de alta resolução do advogado criminalista em trajes formais.
   - Renderização: Circulo 96px x 96px, border-radius: 50%, border: 3px solid #FFFFFF, object-position: center 15%. Envolvido por anel externo .avatar-ring (inset: -4px, border: 2px solid rgba(255, 255, 255, 0.9)).

3. Imagem Card 01 - Agendamentos
   - Tipo: Imagem
   - Link: https://i.postimg.cc/3JJXq0N4/pexels-pavel-danilyuk-8112113.jpg
   - Aparece em: #cardAgendamentos .card-media-bg
   - Detalhes: Foto do advogado analisando documentos legais.
   - Renderização: Width 100%, Height 100%, object-fit: cover, border-radius: 12px. Bloco da direita com largura de 36%.

4. Imagem Hero Modal 01 - Agendamentos
   - Tipo: Imagem
   - Link: https://i.postimg.cc/kgRbrQm4/pexels-pavel-danilyuk-8112203.jpg
   - Aparece em: Modal de Agendamentos (.modal-img-hero)
   - Detalhes: Foto de consulta jurídica e assinatura de papéis.
   - Renderização: Height 160px, border-radius: 16px, object-fit: cover.

5. Imagem Hero Modal 02 - Portal do Cliente
   - Tipo: Imagem
   - Link: https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=600
   - Aparece em: Modal Portal do Cliente (.modal-img-hero)
   - Detalhes: Balança da justiça e livros jurídicos clássicos.
   - Renderização: Height 160px, border-radius: 16px, object-fit: cover.

6. Imagem Card 03 & Modal 03 - Escritório Salvador
   - Tipo: Imagem
   - Link: https://i.postimg.cc/SN6WjL5R/60338b1c2d01354595d756b5678a215b.jpg
   - Aparece em: #cardConsultorio .card-media-bg e Modal de Localização (.modal-img-hero)
   - Detalhes: Fotografia de recepção de escritório de advocacia criminal de alto padrão.
   - Renderização: object-fit: cover, object-position: center 40%, border-radius: 12px.

DEPENDENCIES & HEAD
- Plain HTML, CSS e vanilla JavaScript apenas.
- Sem frameworks (React/Vue/Tailwind) para a renderização do HTML puro.
- Meta tags completas: charset UTF-8, viewport responsive (width=device-width, initial-scale=1.0), title, description, e referrerpolicy="no-referrer".
- Inclusão mandatória do script defensivo de roteamento dentro do <head>:
  try { history.replaceState(null, '', '/'); } catch (e) {}

GLOBAL STYLES & DESIGN TOKENS
Variáveis CSS :root exatas:
:root {
  --bg-main: #0E1418;
  --bg-gradient-start: #151E23;
  --bg-gradient-end: #070A0C;
  --card-bg: #FFFFFF;
  --card-text-title: #000000;
  --card-text-body: #444444;
  --btn-black: #000000;
  --btn-black-hover: #262626;
  --verified-badge-bg: #0095F6;
  --verified-badge-icon: #FFFFFF;
  --border-radius-card: 22px;
  --max-width-mobile: 430px;
}
Box-sizing: border-box universal (*, ::before, ::after).
Body: background-color: #06090B, font-family: 'Plus Jakarta Sans', sans-serif, color: #FFFFFF, overflow-x: hidden.
Classe body.no-scroll: overflow: hidden.
Estrutura de Enquadramento Desktop: .desktop-frame flexbox centralizado, min-height: 100vh, padding 24px 12px.
Container Mobile .mobile-container: max-width: 430px, border-radius: 36px em telas >480px, box-shadow: 0 30px 70px rgba(0,0,0,0.95), 0 0 0 1px rgba(255,255,255,0.12).

SECTION ORDER
1. Cover Photo Banner (.profile-cover) com sombreamento gradiente preto na borda superior.
2. Header Profile Section (.profile-header) com avatar sobreposto, anel de brilho, handle do Instagram, selo azul verificado, nome principal e biografia.
3. Social Icons Row (.social-icons-row) com botões circulares interativos para Instagram e WhatsApp.
4. Cards Stack (.cards-stack):
   - Card 1: Agendamentos (com imagem lateral e botão verde do WhatsApp).
   - Card 2: Portal do Cliente (com Phone Mockup rotacionado em 3D e painel de defesa).
   - Card 3: Escritório Salvador (com foto da recepção e botão vermelho do Google Maps).
5. Modal Overlay System (#modalOverlay e #modalContainer) para pop-ups interativos com detalhes, pills de opção e botões CTA.

REUSABLE COMPONENTS
Reusable Bio Card (.bio-card)
Estrutura: Container flexível com width: 100%, min-height: 155px, background-color: #FFFFFF, border-radius: 22px, padding: 20px 18px, border: 1px solid rgba(255, 255, 255, 0.8), sombra 0 16px 35px -4px rgba(0,0,0,0.4).
Hover state: transform: translateY(-4px) scale(1.015), sombra aumentada.
Lado Esquerdo (.card-content-left): Largura 58%, título 1.25rem em negrito, subtítulo 11px em fonte Verdana, e botão de ação em pílula.

Botão de Ação do Card (.card-action-btn)
Padrão: background-color: #000000, texto branco 12px, font-weight 600, padding 9px 18px, border-radius: 999px.
Variação Agendamentos (#cardAgendamentos): background-color: #25D366 (Verde WhatsApp oficial), sombra com brilho verde rgba(37, 211, 102, 0.35).
Variação Escritório (#cardConsultorio): background-color: #EA4335 (Vermelho Google Maps oficial), sombra com brilho vermelho rgba(234, 67, 53, 0.35).

Mobile Phone Mockup (Widget do Card Portal do Cliente)
Wrapper: .phone-mockup-wrapper posicionado na direita (right: 12px, bottom: -22px), dimensões 116px x 175px, background: #000000, border-radius: 18px, borda 3px solid #333333, rotação -3deg.
Tela do iPhone (.phone-screen): Fundo #121212, notch superior de 32px, widget "Painel Criminal" com barra de progresso 100% cheia e cartão de "Defesa Criminal & HC - Petição protocolada".

Pop-up Modal System (.modal-overlay e .modal-container)
Overlay: position: fixed, inset: 0, background: rgba(0, 0, 0, 0.85), backdrop-filter: blur(8px), z-index 999.
Container: background: #FFFFFF, max-width: 390px, border-radius: 28px, padding 24px 22px, cor de texto preta.
Animação: transform: scale(0.92) translateY(15px) -> scale(1) translateY(0) e opacidade transition 0.3s cubic-bezier.

SECTIONS BREAKDOWN (DETALHAMENTO DE CADA SEÇÃO)

SECTION 01: COVER PHOTO BANNER
Div HTML: <div class="profile-cover">
Imagem: <img src="https://i.postimg.cc/ZKBR0JMh/Chat-GPT-Image-2-de-ago-de-2026-16-58-06.png" class="profile-cover-img" />
Efeito CSS: Pseudo-elemento profile-cover::after aplicando gradiente preto escuro no topo da capa para criar uma transição suave.

SECTION 02: HEADER PROFILE & SOCIAL ROW
Avatar Wrapper (.avatar-wrapper): Margem superior negativa de -48px para sobrepor a foto de capa, anel externo duplo (.avatar-ring), e foto circular 96px x 96px.
Handle Instagram (.handle-row): @drjorgehunky.adv acompanhado do selo azul de verificado (.verified-badge) contendo ícone SVG de check.
Nome Principal (.profile-name): Dr. Jorge Hunky <span>| Advogado Criminalista</span> (Tamanho 1.45rem, font-weight 700).
Biografia (.profile-bio): Defesa técnica especializada, atuação em crimes de alta complexidade e habeas corpus (13px, cor #D6D6D6).
Ícones Sociais (.social-icons-row):
Botão Instagram: <a href="https://instagram.com" class="social-link-btn"> com SVG oficial.
Botão WhatsApp: <a href="https://wa.me/5571999999999..." class="social-link-btn"> com SVG oficial.

SECTION 03: CARDS STACK
Card 1 - Agendamentos (#cardAgendamentos)
Título: Agendamentos
Subtítulo: Marque uma consulta criminal on-line ✦ (Fonte: Verdana)
Botão: Agendar consulta com ícone SVG do WhatsApp e fundo verde #25D366.
Mídia Lateral: Imagem https://i.postimg.cc/3JJXq0N4/pexels-pavel-danilyuk-8112113.jpg dentro de um bloco com largura de 36% e cantos arredondados (12px).
Clique: Abre o modal de Agendamentos.

Card 2 - Portal do Cliente / Atuação Criminal (#cardAppNutri)
Título: Portal do Cliente
Subtítulo: Acompanhe seus processos e habeas corpus em tempo real ✦ (Fonte: Verdana)
Botão: Acessar portal com ícone SVG de seta diagnonal.
Mídia Lateral: iPhone Mockup rotacionado com visual escuro, notch superior, indicadores de progresso de caso ("Painel Criminal" e "Defesa Criminal & HC").
Clique: Abre o modal de Portal do Cliente & Áreas de Atuação.

Card 3 - Escritório Salvador (#cardConsultorio)
Título: Escritório
Subtítulo: Edifício Paulo Ioneda, sala 0909<br/>Rua Ioneda, 222. Salvador. (Fonte: Verdana)
Botão: Abrir no maps com ícone SVG oficial do pin de mapa e fundo vermelho #EA4335.
Mídia Lateral: Imagem da recepção https://i.postimg.cc/SN6WjL5R/60338b1c2d01354595d756b5678a215b.jpg com object-position: center 40%.
Clique: Abre o modal de Localização & Rotas.

SECTION 04: MODAL POP-UPS (CONTEÚDO DINÂMICO VIA JAVASCRIPT)
Modal 1 - Agendamentos On-line
Badge: DEFESA CRIMINAL E URGÊNCIA
Heading: Agendamentos On-line
Hero Image: https://i.postimg.cc/kgRbrQm4/pexels-pavel-danilyuk-8112203.jpg
Texto: "Atendimento presencial e on-line com total sigilo. Análise técnica de inquéritos, atuação em flagrantes, habeas corpus e defesa especializada em todas as instâncias."
Opções (Pills):
"⚖️ Consulta Criminal On-line" (Sub: "Videochamada reservada • Atendimento nacional e emergencial")
"📍 Atendimento Presencial" (Sub: "Escritório Salvador • Edifício Paulo Ioneda")
CTA Principal: Botão preto Falar com Dr. Jorge Hunky no WhatsApp direcionando para link do WhatsApp.

Modal 2 - Portal do Cliente
Badge: ÁREAS DE ATUAÇÃO CRIMINAL
Heading: Portal do Cliente
Hero Image: https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=600
Texto: "Defesa em crimes financeiros, lavagem de dinheiro, crimes contra a vida, atuação perante os Tribunais Superiores (STJ e STF) e acompanhamento em flagrantes e inquéritos policiais."
Opções (Pills):
"📜 Crimes Financeiros & Colarinho Branco" (Sub: "Atuação estratégica em investigações complexas")
"🚨 Prisões, Flagrantes & Habeas Corpus" (Sub: "Atendimento emergencial 24 horas")
CTA Principal: Botão preto Solicitar Análise de Caso no WhatsApp.

Modal 3 - Escritório Salvador
Badge: LOCALIZAÇÃO & ATENDIMENTO
Heading: Escritório Salvador
Hero Image: https://i.postimg.cc/SN6WjL5R/60338b1c2d01354595d756b5678a215b.jpg
Texto: "<strong>Edifício Paulo Ioneda, Sala 0909</strong><br/>Rua Ioneda, 222 • Salvador - BA<br/><br/>Estacionamento corporativo com manobrista. Atendimento com hora marcada e plantão criminal de emergência."
Opções (Pills):
"🗺️ Google Maps" (Sub: "Navegar com rotas do Google") -> Link Google Maps.
"🚗 Waze" (Sub: "Navegar com GPS Waze") -> Link Waze.
CTA Principal: Botão preto Dúvidas de Acesso pelo WhatsApp.

JAVASCRIPT & ANIMATION BEHAVIOR
Gerenciador do Modal:
Função openModal(html): Injeta o HTML dentro de #modalContent, adiciona a classe .active em #modalOverlay, e insere a classe no-scroll no <body> para travar a rolagem de fundo.
Função closeModal(): Remove a classe .active e a classe no-scroll.
Event listeners para clique no botão fechar (#closeModalBtn) e clique fora do modal (e.target === modalOverlay).
Event Listeners nos Cards:
Clique em #cardAgendamentos invoca openModal() com a estrutura do Modal 1.
Clique em #cardAppNutri invoca openModal() com a estrutura do Modal 2.
Clique em #cardConsultorio invoca openModal() com a estrutura do Modal 3.

RECREATION RULES
Retorne apenas o código HTML completo em um único arquivo, com todo o CSS dentro de <style> e JavaScript dentro de <script>.
Mantenha 100% da hierarquia de elementos, classes e estilo visual intactos.`;
