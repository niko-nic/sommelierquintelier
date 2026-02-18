import { useRoute, Link } from 'wouter';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import { blogPosts } from '@/data/blogPosts';
import { getLocalizedBlogPost, getImageUrl } from '@/utils/blogHelpers';
import { HreflangTags } from '@/components/HreflangTags';
import { TableOfContents } from '@/components/blog/TableOfContents';
import { BlogPostingSchema } from '@/components/seo/BlogPostingSchema';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';

// Helper function to parse bold text
function parseBoldText(text: string) {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}

// Helper function to create URL-friendly IDs from section titles
function createSectionId(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

export default function BlogPost() {
  const { t, i18n } = useTranslation();
  const [, params] = useRoute('/blog/:slug');
  
  const post = blogPosts.find(p => p.slug === params?.slug);

  if (!post) {
    return (
      <>
        <Helmet>
          <html lang={i18n.language} />
          <title>Artikel niet gevonden - Sommelier.quintelier</title>
        </Helmet>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 py-24">
            <div className="container mx-auto px-6 lg:px-8 text-center">
              <h1 className="text-4xl font-medium mb-4">{t('blog.notFound')}</h1>
              <Link href="/blog">
                <Button variant="outline" className="gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  {t('blog.backToBlog')}
                </Button>
              </Link>
            </div>
          </main>
          <Footer />
        </div>
      </>
    );
  }

  const localizedPost = getLocalizedBlogPost(post, i18n.language);
  const relatedPosts = post.relatedPosts
    ? blogPosts.filter(p => post.relatedPosts?.includes(p.slug))
    : [];

  // Generate table of contents sections with IDs
  const tocSections = localizedPost.content.sections.map(section => ({
    title: section.title,
    id: createSectionId(section.title)
  }));

  return (
    <>
      <Helmet>
        <html lang={i18n.language} />
        <title>{localizedPost.title} - Sommelier.quintelier</title>
        <meta name="description" content={localizedPost.seo.metaDescription} />
        <meta name="keywords" content={localizedPost.seo.keywords.join(', ')} />
        
        <meta property="og:title" content={`${localizedPost.title} - Sommelier.quintelier`} />
        <meta property="og:description" content={localizedPost.seo.metaDescription} />
        <meta property="og:image" content={getImageUrl(post.featuredImage)} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://sommelierquintelier.com/blog/${post.slug}`} />
        <link rel="canonical" href={`https://sommelierquintelier.com/blog/${post.slug}`} />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${localizedPost.title} - Sommelier.quintelier`} />
        <meta name="twitter:description" content={localizedPost.seo.metaDescription} />
        <meta name="twitter:image" content={getImageUrl(post.featuredImage)} />
        
        <meta property="article:published_time" content={post.date} />
        <meta property="article:author" content={post.author.name} />
        <meta property="article:section" content={post.category} />
        {localizedPost.seo.keywords.map(keyword => (
          <meta key={keyword} property="article:tag" content={keyword} />
        ))}
      </Helmet>
      <HreflangTags path={`/blog/${post.slug}`} />
      <BlogPostingSchema 
        slug={post.slug}
        title={localizedPost.title}
        description={localizedPost.seo.metaDescription}
        excerpt={localizedPost.excerpt}
        featuredImage={getImageUrl(post.featuredImage)}
        datePublished={post.date}
        author={{
          name: post.author.name,
          bio: localizedPost.author.bio
        }}
        category={post.category}
        keywords={localizedPost.seo.keywords}
        readTime={post.readTime}
        content={localizedPost.content}
      />
      <BreadcrumbSchema 
        items={[
          { name: 'Home', url: 'https://sommelierquintelier.com/' },
          { name: t('breadcrumbs.blog'), url: 'https://sommelierquintelier.com/blog' },
          { name: localizedPost.title, url: `https://sommelierquintelier.com/blog/${post.slug}` }
        ]} 
      />

      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 py-24">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto mb-8">
              <Breadcrumbs 
                items={[
                  { label: t('breadcrumbs.blog'), href: '/blog' },
                  { label: localizedPost.title }
                ]} 
              />
            </div>
            
            <div className="max-w-4xl mx-auto">
              <Link href="/blog">
                <Button variant="ghost" className="gap-2 mb-6" data-testid="button-back-to-blog">
                  <ArrowLeft className="h-4 w-4" />
                  {t('blog.backToBlog')}
                </Button>
              </Link>

              <div className="mb-8">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <Badge variant="secondary" className="text-sm" data-testid="badge-category">
                    {t(`blog.categories.${post.category}`)}
                  </Badge>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span data-testid="text-date">{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span data-testid="text-read-time">{post.readTime} {t('blog.readTime')}</span>
                  </div>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6" data-testid="heading-title">
                  {localizedPost.title}
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed" data-testid="text-excerpt">
                  {localizedPost.excerpt}
                </p>
              </div>

              <div className="h-64 md:h-96 mb-12 overflow-hidden">
                <img 
                  src={getImageUrl(post.featuredImage)} 
                  alt={localizedPost.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                  data-testid="img-featured"
                />
              </div>
            </div>

            <div className="grid lg:grid-cols-[1fr_300px] gap-12 max-w-7xl mx-auto">
              <article className="min-w-0">
                <div className="prose prose-lg max-w-none mb-12">
                  <p id="article-intro" className="lead text-lg leading-relaxed" data-testid="text-intro">
                    {parseBoldText(localizedPost.content.intro)}
                  </p>
                </div>

                <Card className="mb-12 bg-muted/50">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-light mb-6">{t('blog.summary')}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {Object.entries(localizedPost.content.keyTakeaways).map(([key, value]) => (
                        <div key={key} className="flex flex-col">
                          <dt className="font-medium text-sm text-muted-foreground mb-1">{key}</dt>
                          <dd className="text-base" data-testid={`takeaway-${key.toLowerCase()}`}>{parseBoldText(value as string)}</dd>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <div className="space-y-12 mb-16">
                  {localizedPost.content.sections.map((section, index) => {
                    const sectionId = tocSections[index].id;
                    return (
                      <section key={index} id={sectionId} data-testid={`section-${index}`}>
                        <h2 className="text-3xl font-light mb-6">{section.title}</h2>
                        <div className="prose prose-lg max-w-none">
                          {section.content.split('\n\n').map((paragraph, pIndex) => {
                            if (paragraph.startsWith('**') && paragraph.includes('**:')) {
                              const parts = paragraph.split('\n');
                              return (
                                <div key={pIndex} className="space-y-2 my-6">
                                  {parts.map((part, partIndex) => {
                                    if (part.startsWith('**') && part.includes('**:')) {
                                      const [label, ...rest] = part.split('**:');
                                      const cleanLabel = label.replace(/\*\*/g, '');
                                      return (
                                        <p key={partIndex} className="mb-2">
                                          <strong>{cleanLabel}:</strong> {parseBoldText(rest.join(':'))}
                                        </p>
                                      );
                                    }
                                    return <p key={partIndex}>{parseBoldText(part)}</p>;
                                  })}
                                </div>
                              );
                            }
                            return <p key={pIndex}>{parseBoldText(paragraph)}</p>;
                          })}
                        </div>
                        {section.image && (
                          <div className="mt-6 overflow-hidden">
                            <img 
                              src={section.image} 
                              alt={section.title}
                              className="w-full h-auto"
                              loading="lazy"
                              decoding="async"
                            />
                          </div>
                        )}
                      </section>
                    );
                  })}
            </div>

            <Separator className="my-16" />

            <Card className="mb-16">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <img 
                    src={getImageUrl(post.author.image)} 
                    alt={post.author.name}
                    className="w-20 h-20 rounded-full object-cover"
                    loading="lazy"
                    data-testid="img-author"
                  />
                  <div className="flex-1">
                    <h3 className="text-2xl font-medium mb-2" data-testid="text-author-name">
                      {post.author.name}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed" data-testid="text-author-bio">
                      {localizedPost.author.bio}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {relatedPosts.length > 0 && (
              <div>
                <h2 className="text-3xl font-light mb-8">{t('blog.relatedArticles')}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {relatedPosts.map((relatedPost) => {
                    const localizedRelatedPost = getLocalizedBlogPost(relatedPost, i18n.language);
                    return (
                      <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                        <Card className="hover-elevate cursor-pointer transition-transform hover:-translate-y-1 h-full" data-testid={`card-related-${relatedPost.slug}`}>
                          <CardContent className="p-0">
                            <div className="h-32 overflow-hidden">
                              <img 
                                src={getImageUrl(relatedPost.featuredImage)} 
                                alt={localizedRelatedPost.title}
                                className="w-full h-full object-cover"
                                loading="lazy"
                              />
                            </div>
                            <div className="p-6">
                              <div className="flex items-center gap-2 mb-2">
                                <Badge variant="secondary" className="text-xs">
                                  {t(`blog.categories.${relatedPost.category}`)}
                                </Badge>
                                <span className="text-xs text-muted-foreground">
                                  {relatedPost.readTime} {t('blog.minutes')}
                                </span>
                              </div>
                              <h4 className="text-lg font-medium mb-2">{localizedRelatedPost.title}</h4>
                              <p className="text-sm text-muted-foreground line-clamp-2">
                                {localizedRelatedPost.excerpt}
                              </p>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
              </article>

              <TableOfContents sections={tocSections} />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
