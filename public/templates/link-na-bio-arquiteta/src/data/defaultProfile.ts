import { ProfileData } from '../types';

export const DEFAULT_PROFILE: ProfileData = {
  welcome: "BEM-VINDO",
  name: "Débora",
  surname: "Mendes",
  profession: "ARQUITETA",
  bioSummary: "Arquitetura autoral, design de interiores residenciais e consultorias de alto padrão.",
  location: "São Paulo, SP - Brasil",
  // Profile picture provided by user
  heroImage: "https://i.postimg.cc/CLxCF5b5/attractive-shy-girl-sitting-alone-holding-herself-knees-nude-stylish-makeup-curly-long-hairstyle-bla.jpg",
  avatarImage: "https://i.postimg.cc/CLxCF5b5/attractive-shy-girl-sitting-alone-holding-herself-knees-nude-stylish-makeup-curly-long-hairstyle-bla.jpg",
  whatsappNumber: "5511999998888",
  instagramHandle: "@deboramendes.arq",
  email: "contato@deboramendes.com.br",
  socialLinks: [
    {
      platform: "instagram",
      label: "Instagram",
      url: "https://instagram.com/deboramendes.arq"
    },
    {
      platform: "whatsapp",
      label: "Atendimento VIP",
      url: "https://wa.me/5511999998888"
    },
    {
      platform: "email",
      label: "E-mail Profissional",
      url: "mailto:contato@deboramendes.com.br"
    },
    {
      platform: "website",
      label: "Solicitar Orçamento",
      url: "https://deboramendes.com.br"
    }
  ],
  cards: [
    {
      id: "card-1",
      title: "Projeto Arquitetônico",
      description: "Projetos residenciais e comerciais exclusivos, do conceito à aprovação e acompanhamento executivo da obra.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600",
      link: "https://wa.me/5511999998888?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Projeto%20Arquitetônico.",
      style: "light"
    },
    {
      id: "card-3",
      title: "Design de Interiores",
      description: "Transformação completa de ambientes com detalhamento de marcenaria, iluminação, revestimentos e decoração.",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=600",
      link: "https://wa.me/5511999998888?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Design%20de%20Interiores.",
      style: "taupe"
    },
    {
      id: "card-4",
      title: "Kit Projeto & 3D",
      description: "Pacote completo com imagens 3D fotorrealistas, memorial descritivo e lista de compras e fornecedores.",
      image: "",
      ebookImage: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=500",
      tabletImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=500",
      phoneImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=500",
      link: "https://wa.me/5511999998888?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Kit%20Projeto%203D.",
      style: "beige"
    },
    {
      id: "card-5",
      title: "Consultoria Express",
      description: "Orientação rápida e direcionada para renovar a decoração e layout do seu espaço com soluções práticas.",
      image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80&w=600",
      link: "https://wa.me/5511999998888?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20Consultoria%20Express.",
      style: "light"
    }
  ]
};
