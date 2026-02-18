export interface BlogPostTranslations {
  title: string;
  excerpt: string;
  author: {
    bio: string;
  };
  seo: {
    metaDescription: string;
    keywords: string[];
  };
  content: {
    intro: string;
    keyTakeaways: {
      [key: string]: string;
    };
    sections: Array<{
      title: string;
      content: string;
      image?: string;
    }>;
  };
}

import type { StaticImageData } from 'next/image';

export interface BlogPost {
  id: string;
  slug: string;
  featuredImage: StaticImageData | string;
  date: string;
  author: {
    name: string;
    image: StaticImageData | string;
  };
  category: 'druiven' | 'tips' | 'service';
  readTime: number;
  translations: {
    nl: BlogPostTranslations;
    en: BlogPostTranslations;
    fr: BlogPostTranslations;
  };
  relatedPosts?: string[];
}
