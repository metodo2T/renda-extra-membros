export interface ProfileData {
  name: string;
  role: string;
  tagline: string;
  avatarUrl: string;
  location: string;
  statusText: string;
  isAvailable: boolean;
  whatsappNumber: string; // formatted without spaces/special chars, e.g. 5511999999999
  instagramUsername: string;
  linkedinUrl: string;
  youtubeUrl: string;
  email: string;
  stats: {
    investedAmount: string; // e.g. "R$ +12M"
    activeClients: string;  // e.g. "120+"
    averageROAS: string;    // e.g. "4.8x"
    satisfactionRate: string; // e.g. "99%"
  };
  certifications: {
    metaPartner: boolean;
    googlePartner: boolean;
    certifiedYear: string;
  };
}

export type PlatformBrand = 'meta' | 'google' | 'hybrid' | 'strategy' | 'audit' | 'mentorship';

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  platform: PlatformBrand;
  badge: string;
  highlightText: string;
  description: string;
  features: string[];
  deliverables: string[];
  targetAudience: string;
  ctaText: string;
  whatsappPreFilledMessage: string;
  themeGradient: {
    bgFrom: string;
    bgTo: string;
    borderColor: string;
    glowColor: string;
    accentColor: string;
  };
  iconType: 'meta' | 'google' | 'consulting' | 'funnel' | 'audit' | 'mentorship';
  statsHighlight?: {
    metric: string;
    label: string;
  };
}

export interface CaseStudy {
  id: string;
  clientNiche: string;
  nicheTag: string;
  platform: 'Meta Ads' | 'Google Ads' | 'Meta & Google Ads';
  title: string;
  initialState: string;
  resultAchieved: string;
  metrics: {
    label: string;
    before: string;
    after: string;
  }[];
  quote: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  avatar: string;
  text: string;
  rating: number;
  niche: string;
  resultBadge: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface ROICalculatorInput {
  monthlyBudget: number;
  niche: 'ecommerce' | 'local_services' | 'b2b_leads' | 'infoproducts';
  averageTicket: number;
}

export interface ROICalculatorResult {
  estimatedImpressions: number;
  estimatedClicks: number;
  estimatedLeadsOrSales: number;
  estimatedRevenue: number;
  estimatedROAS: number;
}
