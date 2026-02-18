import { BlogPost, BlogPostTranslations } from '@/types/blog';
import type { StaticImageData } from 'next/image';

export function getImageUrl(image: StaticImageData | string): string {
  return typeof image === 'string' ? image : image.src;
}

export function getBlogPostTranslation(
  post: BlogPost,
  language: string
): BlogPostTranslations & { title: string; excerpt: string } {
  const lang = (language === 'nl' || language === 'en' || language === 'fr') ? language : 'nl';
  return post.translations[lang];
}

export function getLocalizedBlogPost(post: BlogPost, language: string) {
  const translation = getBlogPostTranslation(post, language);
  return {
    ...post,
    ...translation,
    author: {
      ...post.author,
      ...translation.author
    }
  };
}
