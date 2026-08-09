export interface SocialLink {
  id: string;
  name: string;
  icon: 'behance' | 'whatsapp' | 'youtube' | 'instagram' | 'tiktok' | 'globe';
  url: string;
}

export interface BioLink {
  id: string;
  title: string;
  highlightText?: string;
  subtitle: string;
  icon: 'whatsapp' | 'globe' | 'youtube' | 'tiktok' | 'instagram';
  url: string;
  primary?: boolean;
}

export interface CarouselSlide {
  id: string;
  titlePrefix: string;
  titleBold: string;
  subtitle: string;
  laptopImage: string;
  accentColor?: string;
}

export interface ProfileData {
  namePrefix: string;
  nameBold: string;
  role: string;
  avatarUrl: string;
  whatsappNumber: string;
  whatsappMessage: string;
  websiteUrl: string;
  youtubeUrl: string;
  tiktokUrl: string;
  instagramUrl: string;
  behanceUrl: string;
  footerBrand: string;
  footerCopyright: string;
}
