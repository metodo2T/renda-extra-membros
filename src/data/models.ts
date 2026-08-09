import { stayflowHeroPrompt } from './templates/stayflowHeroPrompt';
import { protocoloReelsPrompt } from './templates/protocoloReelsPrompt';
import { pagina06Prompt } from './templates/pagina06Prompt';
import { pagina07Prompt } from './templates/pagina07Prompt';
import { violaoDoZeroPrompt } from './templates/violaoDoZeroPrompt';
import { psicologaClinicaPrompt } from './templates/psicologaClinicaPrompt';
import { projetoTreinoEmCasaPrompt } from './templates/projetoTreinoEmCasaPrompt';
import { gestorDeTrafegoPrompt } from './templates/gestorDeTrafegoPrompt';
import { linkNaBio05Prompt } from './templates/linkNaBio05Prompt';
import { linkNaBioAdvogadoPrompt } from './templates/linkNaBioAdvogadoPrompt';
import { linkNaBioArquitetaPrompt } from './templates/linkNaBioArquitetaPrompt';
import { linkNaBioNetflixPrompt } from './templates/linkNaBioNetflixPrompt';

export interface Question {
  id: string;
  label: string;
  placeholder?: string;
  type: 'text' | 'textarea';
}

export interface LandingModel {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  htmlPreview?: string;
  downloadUrl?: string;
  promptId?: string;
  indicatedFor?: string;
  questions?: Question[];
  generatePrompt?: (answers: Record<string, string>) => string;
}

export const models: LandingModel[] = [
  // ==========================================
  // PÁGINAS COMPLETAS
  // ==========================================
  {
    id: 'pagina-01',
    name: 'Página 01 - Comercial e Vendas (StayFlow)',
    category: 'Páginas Completas',
    description: 'Página comercial de alta conversão com vídeo hero neon-green, mão holográfica e trilho horizontal sticky de entregáveis.',
    image: 'https://res.cloudinary.com/dalwymbky/image/upload/v1782324118/fundooferta_hqmgrb.png',
    htmlPreview: '/templates/stayflow-hero/index.html',
    downloadUrl: '/templates/stayflow-hero/index.html',
    promptId: 'pagina-01',
    indicatedFor: `🎯 Profissionais mais indicados:
- Vendedores, Closers, Consultores, Mentores e Equipes Comerciais.
- Treinamentos de Negociação, Prospecção e Fechamento de Vendas.
- Infoprodutos de Alta Conversão com estética Dark Glassmorphism e Neon Green.

🚀 Objetivos e Estratégias:
- Hero com vídeo em tela cheia e tipografia editorial Instrument Serif.
- Efeito Word Reveal sincronizado ao scroll em títulos e textos de dor.
- Vitrine de 5 painéis de serviço com efeito radial hover e card destaque com brilho cônico giratório.
- Seção de método com mão holográfica 3D flutuante e cards com revelação progressiva.
- Trilho horizontal sticky com paginação inteligente e suporte a arrastar no mobile.
- Bloco de oferta com feixe de luz verde e selo 3D de garantia incondicional de 7 dias.`,
    generatePrompt: () => stayflowHeroPrompt
  },
  {
    id: 'pagina-02',
    name: 'Página 02 - Criação de Conteúdo e IA (Protocolo Reels)',
    category: 'Páginas Completas',
    description: 'Página de alta conversão para produtos de Reels e IA, com textura quadriculada, Nohemi e botões com sombras rígidas.',
    image: 'https://res.cloudinary.com/dalwymbky/image/upload/v1782350418/imgvideo_dsgbm0.png',
    htmlPreview: '/templates/protocolo-reels/index.html',
    downloadUrl: '/templates/protocolo-reels/index.html',
    promptId: 'pagina-02',
    indicatedFor: `🎯 Profissionais mais indicados:
- Criadores de Conteúdo, Infoprodutores e Especialistas em Instagram / Reels.
- Vendedores de Produtos Low Ticket (R$ 19 a R$ 97) e Ferramentas com IA.
- Negócios Digitais que utilizam automação no direct para gerar vendas no piloto automático.

🚀 Objetivos e Estratégias:
- Fundo em textura quadriculada creme off-white (#F3F7F2) com tipografia Nohemi e azul-marinho profundo.
- Botão CTA Teal com gradiente, pulse effect e chip de ícone embutido.
- Fita Navy Ticker de alta autoridade com pílulas informativas.
- Comparativo claro de dores e frustrações do mercado tradicional vs Protocolo IA.
- Grade de Método em 3 passos com ícones e entregáveis de oferta detalhados.
- Garantia de 7 dias e sanfona de Perguntas Frequentes (FAQ) interativa.`,
    generatePrompt: () => protocoloReelsPrompt
  },
  {
    id: 'pagina-03',
    name: 'Página 03 - Social Media e IA (Social IA Pro)',
    category: 'Páginas Completas',
    description: 'Social IA Pro - Foco em agilidade, prompts prontos e escala para criadores de conteúdo e agências.',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=600&auto=format&fit=crop',
    htmlPreview: '/templates/pagina-06/index.html',
    downloadUrl: '/templates/pagina-06/index.html',
    promptId: 'pagina-03',
    indicatedFor: `🎯 Profissionais mais indicados:
- Social Medias, Managers e Agências: para produtos focados em rotina e escala.
- Designers e Produtores de Conteúdo.
- Infoprodutores e Criadores de Cursos.

🚀 Objetivos e Estratégias:
- Apresentação de Pilares Práticos (O que ganha)
- Destaque para Entregáveis Imediatos (Prompts, Módulos)
- Apelo Visual Moderno, Futurista e Dinâmico com Vídeo no Hero
- Máxima Fidelidade Visual no Google IA Studio`,
    generatePrompt: () => pagina06Prompt
  },
  {
    id: 'pagina-04',
    name: 'Página 04 - Jurídico e Prática Penal (Prisões Preventivas)',
    category: 'Páginas Completas',
    description: 'Treinamento Jurídico com Vídeo Hero da Justiça, Sticky Word Reveal e Cards de Processo em GSAP.',
    image: 'https://res.cloudinary.com/dalwymbky/image/upload/v1783170030/i1_k3q50x.jpg',
    htmlPreview: '/templates/pagina-07/index.html',
    downloadUrl: '/templates/pagina-07/index.html',
    promptId: 'pagina-04',
    indicatedFor: `🎯 Profissionais mais indicados:
- Advogados Criminalistas, Professores e Mentores de Prática Jurídica.
- Treinamentos e Cursos Especializados em Audiência de Custódia e Direito Penal.
- Infoprodutos de Alta Autoridade e Estética Editorial Refinada.

🚀 Objetivos e Estratégias:
- Hero com Vídeo em Loop da Estátua da Justiça e Efeito Sticky Blur
- Leitura Imersiva com Revelação de Palavras ao Rolar a Página (Word Reveal)
- Seção de Processo com Trilhos Centrais e Movimento de 3 Cards com GSAP/ScrollTrigger
- Seção de Resultados com Imagem Clássica de Balança de Cobre e 4 Destaques
- Card de Oferta Minimalista com Preço Parcelado e CTA Dourado`,
    generatePrompt: () => pagina07Prompt
  },
  {
    id: 'pagina-05',
    name: 'Página 05 - Música e Instrumentos (Violão do Zero)',
    category: 'Páginas Completas',
    description: 'Página de alta conversão para curso de violão com ondas pontilhadas 3D WebGL no Hero, Degular e cards com efeito lamp glow.',
    image: 'https://res.cloudinary.com/dalwymbky/image/upload/v1782391166/garantia_gqpidc.svg',
    htmlPreview: '/templates/violao-do-zero/index.html',
    downloadUrl: '/templates/violao-do-zero/index.html',
    promptId: 'pagina-05',
    indicatedFor: `🎯 Profissionais mais indicados:
- Professores de Música, Instrumentistas, Escolas de Violão, Guitarra e Canto.
- Infoprodutos Low Ticket e Cursos Online de Instrumentos para Iniciantes.
- Produtores de Conteúdo Musical que desejam uma estética Dark moderna com roxo vibrante.

🚀 Objetivos e Estratégias:
- Hero interativo com malha de pontos ondulantes 3D via Three.js (WebGL Procedural).
- Tipografia Degular sofisticada em contraste com fundo preto/berinjela (#0D0816).
- Carrossel infinito de depoimentos com marquee suave e avaliação por estrelas.
- Bloco de comparativo Antes vs Depois com revelação animada no scroll.
- Seção de método em 3 passos com feixes de luz cônica e efeito de lâmpada ativa (Lamp Glow).
- Grade de entregáveis com ícones customizados e cantos iluminados no hover.
- Card de ancoragem de valor e oferta irresistível por R$ 49 com selo 3D de garantia incondicional.`,
    generatePrompt: () => violaoDoZeroPrompt
  },
  {
    id: 'pagina-06',
    name: 'Página 06 - Saúde e Bem-Estar (Psicóloga Clínica)',
    category: 'Páginas Completas',
    description: 'Página de alta autoridade para psicóloga clínica com vídeo hero arredondado em tela cheia, glassmorphism e metodologia em 4 passos.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    htmlPreview: '/templates/psicologa-clinica/index.html',
    downloadUrl: '/templates/psicologa-clinica/index.html',
    promptId: 'pagina-06',
    indicatedFor: `🎯 Profissionais mais indicados:
- Psicólogos Clínicos, Terapeutas, Psicanalistas, Psiquiatras e Especialistas em Saúde Mental.
- Clínicas de Psicologia, Desenvolvimento Pessoal, Inteligência Emocional e Mindfulness.
- Profissionais da Saúde que buscam um posicionamento acolhedor, humanizado e de alta credibilidade.

🚀 Objetivos e Estratégias:
- Hero imersivo com vídeo 1080p em loop dentro de moldura suave com cantos arredondados.
- Cartão de vidro translúcido (Glassmorphism) com badge de atendimento online/presencial e CRP visível.
- Grade de serviços clínicos categorizados (ansiedade, relacionamentos, luto, autoestima e terapia de casal).
- Banner de CTA em verde floresta com iluminação radial suave e gatilho de acolhimento.
- Seção de Metodologia em 4 etapas guiadas (do primeiro contato até a alta terapêutica).
- Faixa de Manifesto Terapêutico e biografia institucional "Quem Sou Eu" com destaques de formação e pós-graduação.`,
    generatePrompt: () => psicologaClinicaPrompt
  },
  {
    id: 'pagina-07',
    name: 'Página 07 - Fitness e Emagrecimento (Projeto Treino em Casa)',
    category: 'Páginas Completas',
    description: 'Página fitness dark com halos verdes/lime, tipografia Petrona e Jersey 10, cards glassmorphism com ícones pixelados e oferta de R$ 49.',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
    htmlPreview: '/templates/projeto-treino-em-casa/index.html',
    downloadUrl: '/templates/projeto-treino-em-casa/index.html',
    promptId: 'pagina-07',
    indicatedFor: `🎯 Profissionais mais indicados:
- Personal Trainers, Instrutores de Calistenia, Treinadores e Especialistas em Fitness em Casa.
- Infoprodutos Low Ticket de Emagrecimento, Definição, Desafios 30 Dias e Hábitos Saudáveis.
- Cursos e Aplicativos com foco em consistência, treinos curtos (15-30 min) e rotina sem academia.

🚀 Objetivos e Estratégias:
- Hero editorial refinado com tipografia Petrona e contrastes elegantes sem fotos poluídas.
- Identidade visual dark minimalista inspirada em Nuxt/Tailwind com halos verdes/lime desfocados (#76b545 / #a8d15f).
- Badges e títulos de seção em tipografia pixel display "Jersey 10".
- Grade comparativa Antes vs Depois com cards translúcidos vermelhos (dores) e verdes (resultados).
- Seção de conquistas em 4 semanas e 3 passos metodológicos com bordas gradientes interativas.
- Ícones em estilo pixel art via máscaras CSS puras sem dependência de imagens externas pesadas.
- Bloco de oferta de alta conversão de R$ 147 por R$ 49 com garantia incondicional de 7 dias e sanfona de FAQ.`,
    generatePrompt: () => projetoTreinoEmCasaPrompt
  },
  {
    id: 'pagina-08',
    name: 'Página 08 - Tráfego Pago e Performance (Gestor de Tráfego)',
    category: 'Páginas Completas',
    description: 'Página dark cinematográfica com tipografia Kanit em gradiente, estátua 3D no hero, marquee duplo e cards de processo sticky empilhados.',
    image: 'https://res.cloudinary.com/dalwymbky/image/upload/v1783952002/hero_dimpqc.png',
    htmlPreview: '/templates/gestor-de-trafego/index.html',
    downloadUrl: '/templates/gestor-de-trafego/index.html',
    promptId: 'pagina-08',
    indicatedFor: `🎯 Profissionais mais indicados:
- Gestores de Tráfego Pago, Consultores de Performance, Media Buyers e Especialistas em Aquisição.
- Agências de Lançamento, Co-produção, Negócios Locais, E-commerce e Infoprodutores.
- Profissionais que buscam autoridade cinematográfica e fechamento de contratos de alta retenção.

🚀 Objetivos e Estratégias:
- Hero cinematográfico com estátua clássica 3D que acompanha o cursor do mouse e headline impactante em gradiente.
- Marquee duplo responsivo com movimento reativo ao scroll do usuário.
- Seção "Sobre" com revelação gradual de caracteres conforme a rolagem da tela.
- Seção "Serviços" em alto contraste branco com números gigantes, hover animado e títulos em verde.
- Seção "Como Funciona" com 3 cards de metodologia sticky em pilha tridimensional contínua.
- Rodapé de conversão direta com CTA de diagnóstico e layout 100% responsivo.`,
    generatePrompt: () => gestorDeTrafegoPrompt
  },

  // ==========================================
  // LINK NA BIO
  // ==========================================
  {
    id: 'link-na-bio-01',
    name: 'Link da Bio 01 - Tráfego Pago e Vendas (Bruno César)',
    category: 'Link na Bio',
    description: 'Bruno César - Método 2T com Vídeo Hero, Cidades Presenciais, Serviços e FAQ.',
    image: 'https://i.postimg.cc/qMnYYdg4/IMG_5745.jpg',
    htmlPreview: '/templates/link-na-bio-05/index.html',
    downloadUrl: '/templates/link-na-bio-05/index.html',
    promptId: 'link-na-bio-01',
    indicatedFor: `🎯 Profissionais mais indicados:
- Especialistas em Tráfego Pago, Gestores de Anúncios e Mentores de Vendas.
- Produtores de Eventos Presenciais, Workshops e Imersões Regionais.
- Agências de Marketing Digital, Social Medias e Treinamentos Corporativos.

🚀 Objetivos e Estratégias:
- Capa com Vídeo Hero em Loop contínuo e Avatar sobreposto de autoridade
- Header Fixo Glassmorphism com Navegação Suave (Smooth Scroll)
- Contadores Numéricos Animados em Loop Infinito (30+ Edições / 1.000+ Alunos)
- Grid de Cidades para Turmas Presenciais com Vagas Ativas e Esgotadas (Lock Badge)
- Grade Curricular/Bônus e Vitrine de Serviços e Cursos
- Sanfona de Perguntas Frequentes (FAQ) Interativa`,
    generatePrompt: () => linkNaBio05Prompt
  },
  {
    id: 'link-na-bio-02',
    name: 'Link da Bio 02 - Advocacia e Direito Penal (Dr. Jorge Hunky)',
    category: 'Link na Bio',
    description: 'Dr. Jorge Hunky - Bio luxo escura com avatar duplo, phone mockup 3D e agendamento.',
    image: 'https://i.postimg.cc/ZKBR0JMh/Chat-GPT-Image-2-de-ago-de-2026-16-58-06.png',
    htmlPreview: '/templates/link-na-bio-advogado/index.html',
    downloadUrl: '/templates/link-na-bio-advogado/index.html',
    promptId: 'link-na-bio-02',
    indicatedFor: `🎯 Profissionais mais indicados:
- Advogados, Escritórios de Advocacia, Consultores Jurídicos e Defensores.
- Profissionais que necessitam de presença mobile de altíssima autoridade e sofisticação.

🚀 Objetivos e Estratégias:
- Capa com banner sombreado superior e avatar com anel duplo iluminado.
- Card de Agendamento direto para WhatsApp com estilo oficial verde.
- Card Portal do Cliente com Mockup 3D de iPhone e barra de progresso.
- Card Escritório com botão integrado ao Google Maps.
- Modais interativos com visual pop-up para navegação de rotas e contato.`,
    generatePrompt: () => linkNaBioAdvogadoPrompt
  },
  {
    id: 'link-na-bio-03',
    name: 'Link da Bio 03 - Arquitetura e Interiores (Débora Mendes)',
    category: 'Link na Bio',
    description: 'Débora Mendes - Bio editorial sofisticada em tons neutros, cards 3D interativos e gaveta de menu.',
    image: 'https://i.postimg.cc/CLxCF5b5/attractive-shy-girl-sitting-alone-holding-herself-knees-nude-stylish-makeup-curly-long-hairstyle-bla.jpg',
    htmlPreview: '/templates/link-na-bio-arquiteta/index.html',
    downloadUrl: '/templates/link-na-bio-arquiteta/index.html',
    promptId: 'link-na-bio-03',
    indicatedFor: `🎯 Profissionais mais indicados:
- Arquitetos, Designers de Interiores, Paisagistas e Engenheiros.
- Estúdios de Design e Marcas de Decoração de Alto Padrão.

🚀 Objetivos e Estratégias:
- Estética editorial minimalista em tons orgânicos taupe e bege.
- Cards com efeito 3D Tilt ao passar o mouse ou mover o dedo.
- Mockup multi-dispositivo (Livro 3D + Tablet + Smartphone) para apresentação de projetos.
- Menu lateral gaveta deslizante (Slide-out drawer).`,
    generatePrompt: () => linkNaBioArquitetaPrompt
  },
  {
    id: 'link-na-bio-04',
    name: 'Link da Bio 04 - Infoproduto e Tráfego (Estilo Netflix)',
    category: 'Link na Bio',
    description: 'Estilo Streaming Netflix com episódios, barra de progresso, percentual de match e CTA WhatsApp.',
    image: 'https://i.postimg.cc/MKQH4wrR/Bruno-Ce-sar-jpg-(1).jpg',
    htmlPreview: '/templates/link-na-bio-netflix/index.html',
    downloadUrl: '/templates/link-na-bio-netflix/index.html',
    promptId: 'link-na-bio-04',
    indicatedFor: `🎯 Profissionais mais indicados:
- Gestores de Tráfego, Especialistas em Escala, Afiliados e Produtores Digitais.
- Profissionais que buscam retenção e alta diferenciação visual usando o tema Netflix.

🚀 Objetivos e Estratégias:
- Capa série original com badge "TOP 1 HOJE" e glow vermelho característico.
- Seção "Continuar Assistindo" em formato de episódios com barras de progresso.
- Selos de "99% Match", durações estimadas e botão de reprodução em hover.
- Rodapé estilizado com monograma cinematográfico.`,
    generatePrompt: () => linkNaBioNetflixPrompt
  }
];
