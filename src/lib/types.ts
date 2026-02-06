export interface BlogPost {
  title: string;
  slug: string;
  datePublished: string; // ISO 8601
  dateUpdated?: string;
  tags: string[];
  draft: boolean;
  summary?: string;
  images?: string[];
}

export interface Project {
  title: string;
  description: string;
  href: string;
  imgSrc?: string;
  featured?: boolean;
}

export interface Author {
  name: string;
  avatar: string;
  occupation: string;
  company: string;
  companyUrl: string;
  email: string;
  github: string;
  twitter: string;
  youtube: string;
  linkedin: string;
  bio: string;
}

export interface SiteConfig {
  title: string;
  author: string;
  description: string;
  siteUrl: string;
  socialBanner: string;
  social: {
    github: string;
    twitter: string;
    youtube: string;
    linkedin: string;
  };
  navigation: { href: string; title: string }[];
}
