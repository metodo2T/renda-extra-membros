export type CardStyle = 'light' | 'taupe' | 'beige';

export interface BioCard {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  style: CardStyle;
  tag?: string;
  badge?: string;
  notebookScreenImage?: string; // For Card 2 Essence
  ebookImage?: string;          // For Card 4 Combo Kit
  tabletImage?: string;         // For Card 4 Combo Kit
  phoneImage?: string;          // For Card 4 Combo Kit
}

export interface SocialLink {
  platform: 'instagram' | 'whatsapp' | 'email' | 'website' | 'linkedin' | 'youtube';
  label: string;
  url: string;
}

export interface ProfileData {
  welcome: string;
  name: string;
  surname: string;
  profession: string;
  bioSummary?: string;
  location?: string;
  heroImage: string;
  avatarImage?: string;
  whatsappNumber?: string;
  instagramHandle?: string;
  email?: string;
  socialLinks: SocialLink[];
  cards: BioCard[];
}
