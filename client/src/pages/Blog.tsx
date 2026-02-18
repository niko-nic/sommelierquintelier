import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Search, Clock, Sparkles } from 'lucide-react';
import { blogPosts } from '@/data/blogPosts';
import { getLocalizedBlogPost, getImageUrl } from '@/utils/blogHelpers';
import { HreflangTags } from '@/components/HreflangTags';
import rieslingImage from '@assets/stock_images/white_wine_glass_cha_f4c1bae7.jpg';

export default function Blog() {
  const { t, i18n } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredPosts = blogPosts.filter((post) => {
    const localizedPost = getLocalizedBlogPost(post, i18n.language);
    const matchesSearch = localizedPost.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      localizedPost.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = [
    { value: 'all', label: t('blog.categories.all') },
    { value: 'druiven', label: t('blog.categories.druiven') },
    { value: 'tips', label: t('blog.categories.tips') },
    { value: 'service', label: t('blog.categories.service') }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <>
      <Helmet>
        <html lang={i18n.language} />
        <title>Blog - Sommelier.quintelier</title>
        <meta name="description" content="Lees onze artikelen over wijn, druivensoorten en culinaire expertise. Ontdek alles over Riesling, Merlot, Cabernet Sauvignon en meer." />
        <meta property="og:title" content="Blog - Sommelier.quintelier" />
        <meta property="og:description" content="Lees onze artikelen over wijn, druivensoorten en culinaire expertise." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sommelierquintelier.com/blog" />
        <meta property="og:image" content={rieslingImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <link rel="canonical" href="https://sommelierquintelier.com/blog" />
      </Helmet>
      <HreflangTags path="/blog" />

      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 py-32">
          <div className="container mx-auto px-6 lg:px-8">
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Breadcrumbs items={[{ label: t('breadcrumbs.blog') }]} />
            </motion.div>
            
            <motion.div 
              className="text-center mb-20"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.h1 
                className="text-5xl md:text-6xl font-serif mb-6"
                variants={fadeInUp}
              >
                Blog
              </motion.h1>
              
              <motion.div 
                className="flex items-center justify-center gap-4 my-8"
                variants={fadeInUp}
              >
                <div className="h-px w-12 md:w-20 bg-gradient-to-r from-transparent to-primary/40" />
                <Sparkles className="w-4 h-4 text-primary/50" />
                <div className="h-px w-12 md:w-20 bg-gradient-to-l from-transparent to-primary/40" />
              </motion.div>
              
              <motion.p 
                className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
                variants={fadeInUp}
              >
                {t('blog.subtitle')}
              </motion.p>
              
              <motion.div 
                className="max-w-2xl mx-auto relative mb-6 mt-8"
                variants={fadeInUp}
              >
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Zoek artikelen..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12"
                  data-testid="input-blog-search"
                />
              </motion.div>

              <motion.div 
                className="flex flex-wrap justify-center gap-2"
                variants={fadeInUp}
              >
                {categories.map((category) => (
                  <Badge
                    key={category.value}
                    variant={selectedCategory === category.value ? 'default' : 'outline'}
                    className="cursor-pointer hover-elevate px-4 py-2"
                    onClick={() => setSelectedCategory(category.value)}
                    data-testid={`filter-category-${category.value}`}
                  >
                    {category.label}
                  </Badge>
                ))}
              </motion.div>
            </motion.div>

            {filteredPosts.length === 0 ? (
              <motion.div 
                className="text-center py-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-muted-foreground text-lg">Geen artikelen gevonden</p>
              </motion.div>
            ) : (
              <motion.div 
                key={`${selectedCategory}-${searchQuery}`}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
              >
                {filteredPosts.map((post) => {
                  const localizedPost = getLocalizedBlogPost(post, i18n.language);
                  return (
                    <motion.div key={post.id} variants={cardVariants}>
                      <Link href={`/blog/${post.slug}`}>
                        <Card className="hover-elevate cursor-pointer transition-transform hover:-translate-y-1 h-full" data-testid={`card-blog-${post.slug}`}>
                          <CardContent className="p-0 flex flex-col h-full">
                            <div className="h-48 overflow-hidden">
                              <img 
                                src={getImageUrl(post.featuredImage)} 
                                alt={localizedPost.title}
                                className="w-full h-full object-cover"
                                loading="lazy"
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
                              <p className="text-sm text-muted-foreground mb-3">{post.date}</p>
                              <h3 className="text-xl font-medium mb-3">{localizedPost.title}</h3>
                              <p className="text-muted-foreground line-clamp-3 flex-1">{localizedPost.excerpt}</p>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    </motion.div>
                  );
                })}
              </motion.div>
            )}
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
