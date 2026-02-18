import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Clock } from 'lucide-react';
import { Link } from 'wouter';
import { blogPosts } from '@/data/blogPosts';
import { getLocalizedBlogPost, getImageUrl } from '@/utils/blogHelpers';

export function BlogSection() {
  const { t, i18n } = useTranslation();

  const featuredPosts = blogPosts.slice(0, 3);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div 
          className="flex items-center justify-between mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-light">Blog</h2>
          <Link href="/blog">
            <Button variant="ghost" className="group" data-testid="button-view-all-blog">
              <span className="uppercase tracking-wider mr-2">{t('blog.allArticles')}</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {featuredPosts.map((post) => {
            const localizedPost = getLocalizedBlogPost(post, i18n.language);
            return (
              <motion.div key={post.id} variants={cardVariants}>
                <Link href={`/blog/${post.slug}`}>
                  <Card 
                    className="hover-elevate cursor-pointer transition-transform hover:-translate-y-1 h-full" 
                    data-testid={`card-blog-preview-${post.id}`}
                  >
                  <CardContent className="p-0 flex flex-col h-full">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={getImageUrl(post.featuredImage)} 
                        alt={localizedPost.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="secondary" className="text-xs">
                          {t(`blog.categories.${post.category}`)}
                        </Badge>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          <span>{post.readTime} {t('blog.minutes')}</span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{post.date}</p>
                      <h3 className="text-xl font-medium mb-3">{localizedPost.title}</h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3 flex-1">{localizedPost.excerpt}</p>
                      <div className="flex items-center text-sm font-medium text-primary">
                        <span className="uppercase tracking-wider">{t('blog.readMore')}</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
