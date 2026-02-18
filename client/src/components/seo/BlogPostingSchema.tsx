import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

interface BlogPostingSchemaProps {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  featuredImage: string;
  datePublished: string;
  dateModified?: string;
  author: {
    name: string;
    bio: string;
  };
  category: string;
  keywords: string[];
  readTime: number;
  content: {
    intro: string;
    sections: Array<{
      title: string;
      content: string;
    }>;
  };
}

export function BlogPostingSchema({
  slug,
  title,
  description,
  excerpt,
  featuredImage,
  datePublished,
  dateModified,
  author,
  category,
  keywords,
  readTime,
  content
}: BlogPostingSchemaProps) {
  const { i18n } = useTranslation();

  // Calculate approximate word count from content
  const calculateWordCount = () => {
    const introWords = content.intro.split(/\s+/).length;
    const sectionWords = content.sections.reduce((total, section) => {
      return total + section.content.split(/\s+/).length;
    }, 0);
    return introWords + sectionWords;
  };

  const getFullArticleBody = () => {
    const sectionContent = content.sections
      .map(section => `${section.title}\n\n${section.content}`)
      .join('\n\n');
    return `${content.intro}\n\n${sectionContent}`;
  };

  const wordCount = calculateWordCount();
  const articleBody = getFullArticleBody();

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `https://sommelierquintelier.com/blog/${slug}#article`,
    "headline": title,
    "description": description,
    "abstract": excerpt,
    "image": {
      "@type": "ImageObject",
      "url": featuredImage,
      "width": 1200,
      "height": 630
    },
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "author": {
      "@type": "Person",
      "@id": "https://sommelierquintelier.com/#yentl",
      "name": author.name,
      "description": author.bio,
      "jobTitle": "Sommelier",
      "honorificPrefix": "Meilleur Sommelier de Belgique 2022"
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://sommelierquintelier.com/#organization"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://sommelierquintelier.com/blog/${slug}`
    },
    "articleSection": category,
    "keywords": keywords,
    "wordCount": wordCount,
    "timeRequired": `PT${readTime}M`,
    "inLanguage": i18n.language,
    "articleBody": articleBody,
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["#article-intro", "h1", "h2"]
    },
    "about": {
      "@type": "Thing",
      "name": "Wine",
      "description": "Fine wine expertise and consultancy"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}
