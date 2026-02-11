export type Project = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  image: string;
  link?: string;
  featured: boolean;
  role?: string;
  duration?: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  featured: boolean;
  readingTime?: string;
};

export type Service = {
  title: string;
  description: string;
  icon: string;
  highlights: string[];
};

export type Testimonial = {
  quote: string;
  name: string;
  position: string;
  company?: string;
};

export type SiteConfig = {
  name: string;
  title: string;
  description: string;
  url: string;
  email: string;
  socials: { platform: string; url: string }[];
  navigation: { label: string; href: string }[];
};
