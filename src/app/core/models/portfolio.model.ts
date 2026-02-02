export interface SiteConfig {
  designerName: string;
  tagline: string;
  bio: string;
  email: string;
  phone: string;
  location: string;
  resumeUrl: string;
  social: SocialLinks;
  theme: ThemeConfig;
  darkMode: boolean;
}

export interface SocialLinks {
  behance?: string;
  dribbble?: string;
  instagram?: string;
  linkedin?: string;
  twitter?: string;
  github?: string;
}

export interface ThemeConfig {
  primary: string;
  background: string;
  backgroundDark: string;
  text: string;
  textDark: string;
  accent: string;
}

export interface Category {
  id: string;
  title: string;
  icon: string;
  description: string;
  items: PortfolioItem[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  images: string[];
  videoUrl?: string;
  tools: string[];
  figmaLink?: string;
  adobeLinks: AdobeLinks;
  tags: string[];
  featured: boolean;
  year: number;
}

export interface AdobeLinks {
  ai?: string;
  psd?: string;
  ae?: string;
  xd?: string;
}

export interface PortfolioData {
  site: SiteConfig;
  skills: string[];
  categories: Category[];
}
