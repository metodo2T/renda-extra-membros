import { BioLink, CarouselSlide, ProfileData } from './types';

export const initialProfileData: ProfileData = {
  namePrefix: 'MARIA',
  nameBold: 'SANTOS',
  role: 'Social Media',
  avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800',
  whatsappNumber: '5511999999999',
  whatsappMessage: 'Olá Maria, vim pelo seu Link na Bio e gostaria de um orçamento!',
  websiteUrl: 'https://mariasantos.design',
  youtubeUrl: 'https://youtube.com',
  tiktokUrl: 'https://tiktok.com',
  instagramUrl: 'https://instagram.com',
  behanceUrl: 'https://behance.net',
  footerBrand: 'Genius Creation',
  footerCopyright: 'Todos os direitos reservados',
};

export const initialBioLinks: BioLink[] = [
  {
    id: 'link-whatsapp',
    title: 'Orçamento',
    subtitle: 'Fale comigo no WhatsApp',
    icon: 'whatsapp',
    url: 'https://wa.me/5511999999999?text=Ol%C3%A1%20Maria%2C%20vim%20pelo%20seu%20Link%20na%20Bio%20e%20gostaria%20de%20um%20or%C3%A7amento!',
    primary: true,
  },
  {
    id: 'link-site',
    title: 'Meu site',
    subtitle: 'Acesse agora meu site',
    icon: 'globe',
    url: 'https://mariasantos.design',
  },
  {
    id: 'link-youtube',
    title: 'Youtube',
    subtitle: 'Se Inscreva no Canal',
    icon: 'youtube',
    url: 'https://youtube.com',
  },
  {
    id: 'link-tiktok',
    title: 'Tiktok',
    subtitle: 'Me siga no tiktok',
    icon: 'tiktok',
    url: 'https://tiktok.com',
  },
  {
    id: 'link-instagram',
    title: 'Instagram',
    subtitle: 'Me siga no instagram',
    icon: 'instagram',
    url: 'https://instagram.com',
  },
];

export const initialCarouselSlides: CarouselSlide[] = [
  {
    id: 'slide-sites',
    titlePrefix: 'Criação',
    titleBold: 'de Sites',
    subtitle: 'Um site acima da media para seu negócio.',
    laptopImage: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 'slide-branding',
    titlePrefix: 'Identidade',
    titleBold: 'Visual',
    subtitle: 'Sua marca com presença marcante e profissional.',
    laptopImage: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 'slide-social',
    titlePrefix: 'Artes para',
    titleBold: 'Redes Sociais',
    subtitle: 'Designs estratégicos que encantam e convertem.',
    laptopImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1000',
  },
];
