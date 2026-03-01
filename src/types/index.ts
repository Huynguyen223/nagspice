export interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
  altText: string;
}

export interface Product {
  id: string;
  name: string;
  fobPrice: string;
  categoryId: string;
  image: string;
  altText: string;
  specifications: string[];
  isFeatured: boolean;
}

export interface HeroData {
  headline: string;
  subheadline: string;
  ctaText: string;
  backgroundImage: string;
}

export interface Certification {
  id: string;
  name: string;
  logo: string;
}

export interface CompanyInfo {
  title: string;
  description: string;
  features: string[];
  image: string;
  altText: string;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  altText: string;
}
