import { ProfileData, ServiceItem, CaseStudy, Testimonial, FAQItem } from '../types';

export const INITIAL_PROFILE_DATA: ProfileData = {
  name: "Lucas Silveira",
  role: "Gestor de Tráfego Pago & Performance",
  tagline: "Especialista em escala de vendas através de Meta Ads e Google Ads. Transformo investimento em anúncios em ROI previsível.",
  avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800",
  location: "São Paulo, SP - Atendimento Global",
  statusText: "Disponível para novos projetos",
  isAvailable: true,
  whatsappNumber: "5511998765432",
  instagramUsername: "lucassilveira.ads",
  linkedinUrl: "https://linkedin.com",
  youtubeUrl: "https://youtube.com",
  email: "contato@lucassilveira.com.br",
  stats: {
    investedAmount: "R$ 12.5M+",
    activeClients: "140+",
    averageROAS: "5.2x",
    satisfactionRate: "98.8%",
  },
  certifications: {
    metaPartner: true,
    googlePartner: true,
    certifiedYear: "2026",
  },
};

export const INITIAL_SERVICES: ServiceItem[] = [
  {
    id: "meta-ads",
    title: "Gestão de Meta Ads",
    subtitle: "Anúncios no Facebook, Instagram e WhatsApp Ads",
    category: "Anúncios Sociais",
    platform: "meta",
    badge: "Meta Business Partner",
    highlightText: "Gere desejo, autoridade e vendas constantes no Instagram e Facebook.",
    description: "Gestão completa das suas campanhas no Meta Ads. Criamos uma estrutura sólida com teste contínuo de públicos, ofertas e criativos para escalar seu faturamento de forma consistente.",
    features: [
      "Implementação avançada de API de Conversões (CAPI) e Pixel Meta",
      "Testes sistemáticos A/B de criativos, vídeos e textos",
      "Funil completo: Atração (Topo), Nutrição (Meio) e Conversão (Base)",
      "Anúncios direcionados para WhatsApp, Direct e Landing Pages",
      "Remarketing inteligente para recuperar carrinhos e visitantes"
    ],
    deliverables: [
      "Dashboard em tempo real de performance",
      "Relatórios semanais com análise detalhada de métricas",
      "Reunião mensal de alinhamento e planejamento de escala",
      "Direcionamento criativo para produção de novos anúncios"
    ],
    targetAudience: "E-commerces, Negócios Locais, Prestadores de Serviços e Infoprodutores que desejam tráfego qualificado diariamente.",
    ctaText: "Quero Escalar no Meta Ads",
    whatsappPreFilledMessage: "Olá Lucas! Tenho interesse na Gestão de Meta Ads (Facebook & Instagram) para meu negócio. Gostaria de entender como podemos trabalhar juntos.",
    themeGradient: {
      bgFrom: "from-blue-600/20",
      bgTo: "to-cyan-500/10",
      borderColor: "border-blue-500/40",
      glowColor: "rgba(6, 104, 225, 0.3)",
      accentColor: "#0081FB"
    },
    iconType: "meta",
    statsHighlight: {
      metric: "4.8x - 8.2x",
      label: "ROAS Médio Alcançado"
    }
  },
  {
    id: "google-ads",
    title: "Gestão de Google Ads",
    subtitle: "Pesquisa, YouTube, Shopping e Performance Max",
    category: "Tráfego de Intenção",
    platform: "google",
    badge: "Google Premier Partner",
    highlightText: "Apareça exatamente para quem já está buscando o seu produto ou serviço.",
    description: "Captura do cliente no exato momento da decisão de compra. Dominamos campanhas na Rede de Pesquisa do Google, Google Shopping, YouTube Ads e Performance Max para maximizar conversões.",
    features: [
      "Seleção criteriosa de palavras-chave de altíssima intenção de compra",
      "Negativação diária de termos irrelevantes para evitar desperdício de verba",
      "Configuração perfeita de Rastreamento de Conversão no Google Analytics 4 (GA4)",
      "Anúncios em vídeo atraentes no YouTube Ads para construir autoridade",
      "Campanhas de Google Shopping otimizadas para Margem e ROAS"
    ],
    deliverables: [
      "Configuração e estruturação da conta do zero ou otimização de conta existente",
      "Instalação de Tag Manager e GA4 com eventos customizados",
      "Relatórios claros focado em Custo por Aquisição (CPA) e ROI",
      "Acompanhamento constante das alterações do algoritmo Google"
    ],
    targetAudience: "Empresas B2B, Clínicas, Advogados, Imobiliárias, E-commerces e Negócios Locais que precisam de demanda qualificada imediata.",
    ctaText: "Dominar o Google Ads",
    whatsappPreFilledMessage: "Olá Lucas! Gostaria de uma proposta para Gestão de Google Ads. Preciso capturar clientes que estão buscando meu serviço/produto.",
    themeGradient: {
      bgFrom: "from-blue-500/20 via-red-500/10",
      bgTo: "to-emerald-500/10",
      borderColor: "border-emerald-500/40",
      glowColor: "rgba(66, 133, 244, 0.3)",
      accentColor: "#4285F4"
    },
    iconType: "google",
    statsHighlight: {
      metric: "-42%",
      label: "Redução Média de CPA"
    }
  },
  {
    id: "consultoria",
    title: "Consultoria de Tráfego Pago",
    subtitle: "Diagnóstico 360°, Ajustes Estratégicos & Plano de Ação",
    category: "Acompanhamento Estratégico",
    platform: "hybrid",
    badge: "Orientação 1-a-1",
    highlightText: "Descubra os gargalos invisíveis que estão fazendo você perder dinheiro em anúncios.",
    description: "Uma imersão profunda na sua conta de anúncios e estrutura de vendas para identificar exatamente onde está o travamento do seu crescimento e traçar o mapa da escala.",
    features: [
      "Análise minuciosa de contas de anúncios, ofertas e landing pages",
      "Identificação de vazamento de verba e rastreamentos incorretos",
      "Plano tático passo a passo de otimização e expansão de orçamento",
      "Encontro ao vivo individual de 2 horas com gravação e material complementar",
      "Suporte via WhatsApp por 30 dias para acompanhar a implementação"
    ],
    deliverables: [
      "Gravação completa da reunião de consultoria em alta definição",
      "PDF executivo com o Diagnóstico Estratégico e Plano de Ação",
      "Templates de criativos e copys validadas para seu nicho",
      "Checklist de verificação de tags e pixels"
    ],
    targetAudience: "Gestores, Empresários ou equipes internas de marketing que já anunciam mas estagnaram no crescimento ou estão com ROAS baixo.",
    ctaText: "Agendar Consultoria Estratégica",
    whatsappPreFilledMessage: "Olá Lucas! Quero agendar uma Consultoria de Tráfego Pago para analisar minhas campanhas e desenhar um plano de escala.",
    themeGradient: {
      bgFrom: "from-purple-600/20",
      bgTo: "to-indigo-500/10",
      borderColor: "border-purple-500/40",
      glowColor: "rgba(147, 51, 234, 0.3)",
      accentColor: "#A855F7"
    },
    iconType: "consulting",
    statsHighlight: {
      metric: "30 Dias",
      label: "Acompanhamento Direto"
    }
  },
  {
    id: "estrategia-vendas",
    title: "Criação de Estratégias de Vendas",
    subtitle: "Arquitetura de Funis, Copys e Ofertas Irresistíveis",
    category: "Funis de Conversão",
    platform: "strategy",
    badge: "Funis de Alto Ticket",
    highlightText: "Tráfego sem uma oferta forte e funil alinhado é desperdício de verba.",
    description: "Não adianta apenas rodar anúncios: criamos a arquitetura completa de vendas do seu negócio, alinhando a promessa, a página, os roteiros de anúncios e o fluxo de fechamento no comercial.",
    features: [
      "Mapeamento do Jornada do Consumidor e Personas Compradoras",
      "Desenvolvimento de ângulos de anúncios e copys altamente persuasivas",
      "Estruturação de funis de vendas (Lead Magnet, VSL, Direto p/ Comercial)",
      "Roteiros para equipe de vendas e atendentes de WhatsApp",
      "Otimização da taxa de conversão (CRO) da página de destino"
    ],
    deliverables: [
      "Documento Mestre da Estratégia de Vendas e Posicionamento",
      "Roteiros prontos para gravação de criativos em vídeo e imagens",
      "Fluxograma do Funil de Conversão e jornadas de retargeting",
      "Scripts de vendas no WhatsApp calibrados para fechar leads dos anúncios"
    ],
    targetAudience: "Empresas que querem aumentar o valor do ticket médio, melhorar a taxa de conversão do comercial e vender todos os dias.",
    ctaText: "Criar Minha Estratégia de Vendas",
    whatsappPreFilledMessage: "Olá Lucas! Gostaria de construir uma Estratégia de Vendas e Funil completo para meu negócio escalar o faturamento.",
    themeGradient: {
      bgFrom: "from-amber-500/20",
      bgTo: "to-emerald-500/10",
      borderColor: "border-amber-500/40",
      glowColor: "rgba(245, 158, 11, 0.3)",
      accentColor: "#F59E0B"
    },
    iconType: "funnel",
    statsHighlight: {
      metric: "+180%",
      label: "Aumento Média de Conversão"
    }
  },
  {
    id: "auditoria",
    title: "Auditoria de Campanhas",
    subtitle: "Raio-X de Contas com Foco em Estancar Sangramentos",
    category: "Diagnóstico Rápido",
    platform: "audit",
    badge: "Análise Criptográfica",
    highlightText: "Descubra se sua agência ou gestor atual está realmente entregando o máximo potencial.",
    description: "Uma análise cirúrgica das suas contas no Meta Ads e Google Ads. Avaliamos a saúde técnica do rastreamento, qualidade das segmentações, estrutura das campanhas e desperdícios orçamentários.",
    features: [
      "Verificação minuciosa de perda de dados pós-iOS e bloqueios de privacidade",
      "Avaliação da distribuição de orçamento por topo, meio e base de funil",
      "Audit de sobreposição de públicos e concorrência interna de leilão",
      "Pontuação técnica de anúncios, índices de qualidade e relevância",
      "Relatório com pontuação de 0 a 100 da saúde da sua conta"
    ],
    deliverables: [
      "Relatório em vídeo gravado explicando ponto a ponto cada erro e acerto",
      "Scorecard técnico de segurança e eficiência da conta de anúncios",
      "Plano imediato de 5 ações corretivas para aplicar nas próximas 24 horas"
    ],
    targetAudience: "Empresários que suspeitam que estão rasgando dinheiro ou que não confiam nos números apresentados pelos relatórios atuais.",
    ctaText: "Solicitar Auditoria da Minha Conta",
    whatsappPreFilledMessage: "Olá Lucas! Quero uma Auditoria de Campanhas para avaliar a saúde das minhas contas de tráfego e identificar desperdícios.",
    themeGradient: {
      bgFrom: "from-rose-600/20",
      bgTo: "to-orange-500/10",
      borderColor: "border-rose-500/40",
      glowColor: "rgba(244, 63, 94, 0.3)",
      accentColor: "#F43F5E"
    },
    iconType: "audit",
    statsHighlight: {
      metric: "24h - 48h",
      label: "Prazo de Entrega do Raio-X"
    }
  },
  {
    id: "mentoria",
    title: "Mentoria para Negócios",
    subtitle: "Treinamento & Acompanhamento Continuo para Equipes e Gestores",
    category: "Aceleração Executiva",
    platform: "mentorship",
    badge: "Mentoria VIP",
    highlightText: "Capacite sua equipe interna de marketing com as metodologias mais avançadas do mercado.",
    description: "Para empresas que desejam ter seu próprio departamento de tráfego interno com alta performance, ou gestores que buscam dar um salto na carreira e atender grandes contas.",
    features: [
      "Encontros semanais ao vivo em grupo reduzido ou 1-a-1 dedicado",
      "Revisão de campanhas reais dos mentorados e validação de estratégias",
      "Acesso ao acervo de frameworks, dashboards em Looker Studio e checklists",
      "Canal exclusivo no WhatsApp com resposta em até 4 horas em dias úteis",
      "Certificado e indicação para parceiros de negócios"
    ],
    deliverables: [
      "Acesso por 3 ou 6 meses com encontros semanais ao vivo",
      "SOPs (Procedimentos Operacionais Padrão) para o time de tráfego",
      "Planilhas de precificação, BI e mensuração de ROI",
      "Comunidade privada de networking de alto nível"
    ],
    targetAudience: "Empresas com time próprio de tráfego, agências que querem escalar equipe ou gestores de tráfego querendo subir de nível.",
    ctaText: "Candidatar-me para a Mentoria",
    whatsappPreFilledMessage: "Olá Lucas! Gostaria de saber mais informações sobre a Mentoria para Negócios e Treinamento de Equipe.",
    themeGradient: {
      bgFrom: "from-violet-600/20",
      bgTo: "to-cyan-500/10",
      borderColor: "border-violet-500/40",
      glowColor: "rgba(139, 92, 246, 0.3)",
      accentColor: "#8B5CF6"
    },
    iconType: "mentorship",
    statsHighlight: {
      metric: "1-a-1",
      label: "Acompanhamento Prático"
    }
  }
];

export const INITIAL_CASE_STUDIES: CaseStudy[] = [
  {
    id: "case-1",
    clientNiche: "E-commerce de Moda Feminina",
    nicheTag: "E-commerce",
    platform: "Meta & Google Ads",
    title: "De R$ 85 mil para R$ 420 mil/mês mantendo ROAS de 6.4x",
    initialState: "Conta com ROAS 2.1x travada no orçamento de R$ 15 mil/mês devido a sobreposição de públicos e criativos desatualizados.",
    resultAchieved: "Reestruturação do Pixel CAPI, criação de esteira de criativos em vídeo e implementação de campanhas de Google PMax integradas.",
    metrics: [
      { label: "Faturamento Mensal", before: "R$ 85.000", after: "R$ 420.000" },
      { label: "ROAS Médio", before: "2.1x", after: "6.4x" },
      { label: "Custo por Aquisição (CPA)", before: "R$ 68,00", after: "R$ 29,50" }
    ],
    quote: "O Lucas não apenas gerenciou o tráfego, ele entendeu nossa margem e reestruturou toda nossa estratégia de vendas no e-commerce!"
  },
  {
    id: "case-2",
    clientNiche: "Clínica de Odontologia Estética",
    nicheTag: "Negócio Local",
    platform: "Google Ads",
    title: "310+ Agendamentos Qualificados no WhatsApp por Mês",
    initialState: "Anúncios no Google gastando R$ 4.000/mês trazendo curioso e pesquisas por 'dentista gratuito'.",
    resultAchieved: "Filtro severo de palavras-chave de alto ticket (Lentes de Contato, Implantes) e landing page com taxa de conversão de 28%.",
    metrics: [
      { label: "Leads no WhatsApp", before: "38 / mês", after: "312 / mês" },
      { label: "Custo por Lead (CPL)", before: "R$ 105,00", after: "R$ 18,20" },
      { label: "Taxa de Comparecimento", before: "45%", after: "82%" }
    ],
    quote: "Nossa agenda estourou e tivemos que contratar mais dois dentistas para dar conta do volume vindo do Google!"
  },
  {
    id: "case-3",
    clientNiche: "Empresa de Software B2B (SaaS)",
    nicheTag: "B2B / Tech",
    platform: "Meta & Google Ads",
    title: "Redução de 58% no CAC e Dobro de Demos Agendadas",
    initialState: "Dificuldade para alcançar tomadores de decisão (CEOs e Diretores) com campanhas genéricas no LinkedIn e Facebook.",
    resultAchieved: "Combinação de Google Search focado em dores específicas do nicho + Retargeting no Instagram com depoimentos de clientes.",
    metrics: [
      { label: "Custo de Aquisição (CAC)", before: "R$ 890", after: "R$ 370" },
      { label: "Demos por Mês", before: "24", after: "78" },
      { label: "LTV / CAC Ratio", before: "2.8x", after: "7.1x" }
    ],
    quote: "A previsibilidade que o Lucas trouxe para o nosso funil B2B nos permitiu captar nossa nova rodada de investimento com folga."
  }
];

export const INITIAL_TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Mariana Costa",
    company: "Lumière Beachwear",
    role: "Fundadora & CEO",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
    text: "O trabalho do Lucas dividiu nossa empresa em antes e depois. Nós tentamos 3 agências diferentes que prometiam mundos e fundos, mas só com ele tivemos transparência real e ROAS acima de 5x constante.",
    rating: 5,
    niche: "E-commerce",
    resultBadge: "ROAS 6.4x"
  },
  {
    id: "test-2",
    name: "Dr. Rodrigo Mendes",
    company: "Instituto de Odontologia Avançada",
    role: "Diretor Clínico",
    avatar: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=200",
    text: "Excelente profissional! Pontual nas reuniões, explica tudo de forma simples sem 'juridiquês' do tráfego. Hoje nosso maior canal de clientes novos é 100% o Google Ads gerenciado por ele.",
    rating: 5,
    niche: "Saúde & Estética",
    resultBadge: "+300 Leads/mês"
  },
  {
    id: "test-3",
    name: "Fernando Viana",
    company: "Nexum ERP",
    role: "Head de Marketing",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    text: "A consultoria de tráfego pago mudou a visão do nosso time. Em apenas 2 horas de reunião ele encontrou um erro de rastreamento no GA4 que nos fazia perder milhares de reais em atribuição.",
    rating: 5,
    niche: "Software B2B",
    resultBadge: "Economia de R$ 45k"
  }
];

export const INITIAL_FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "Quanto preciso investir por mês em anúncios?",
    answer: "O valor recomendado varia conforme o seu modelo de negócio e objetivo. Para negócios locais e prestadores de serviço, recomendamos um investimento mínimo a partir de R$ 1.000 a R$ 1.500/mês nas plataformas de anúncios. Para e-commerces e infoprodutos que buscam escala nacional, o ponto de partida idéal costuma ser de R$ 3.000 a R$ 5.000/mês. Lembramos que a verba dos anúncios é paga diretamente para o Meta ou Google.",
    category: "Investimento"
  },
  {
    id: "faq-2",
    question: "Em quanto tempo começo a ver os primeiros resultados?",
    answer: "No Google Ads (Search), por ser uma rede de intenção direta, é muito comum receber os primeiros contatos já nos primeiros dias após a aprovação da campanha. No Meta Ads (Instagram e Facebook), os primeiros 3 a 7 dias são a fase de aprendizado dos algoritmos e testes de criativos. A partir da segunda e terceira semana, os dados se estabilizam e otimizamos o custo por lead/venda.",
    category: "Prazos"
  },
  {
    id: "faq-3",
    question: "Como funciona a contratação e o contrato de prestação de serviços?",
    answer: "Trabalhamos com modelo de contrato mensal transparente sem multas abusivas de fidelidade. Acreditamos na retenção de clientes pela entrega constante de resultados reais, não por amarras contratuais. Todo o processo de onboarding é simples, seguro e acompanhado por checklist.",
    category: "Contratação"
  },
  {
    id: "faq-4",
    question: "Qual a diferença entre Meta Ads e Google Ads? Qual devo escolher?",
    answer: "O Google Ads pega a demanda EXISTENTE (pessoas que já estão pesquisando 'comprar tênis de corrida' ou 'dentista em SP'). É ideal para conversão direta e intenção. Já o Meta Ads GERA DEMANDA (mostra um anúncio impactante para pessoas com interesse no seu nicho antes mesmo de pesquisarem). O ideal para a maioria dos negócios consolidados é a estratégia HÍBRIDA combinando ambas as ferramentas.",
    category: "Estratégia"
  },
  {
    id: "faq-5",
    question: "Vocês fazem a criação dos vídeos e banners dos anúncios?",
    answer: "Oferecemos o direcionamento criativo completo (roteiros persuasivos, orientações de gravação para celular e modelos de alta conversão). Para a gestão mensal, orientamos exatamente o que gravar ou fotos que precisamos. Caso não possua criativos, também possuímos pacotes adicionais com designers parceiros.",
    category: "Criativos"
  }
];
