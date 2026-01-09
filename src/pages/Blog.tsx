import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Calendar, Clock, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import AnimatedSection from '@/components/ui/AnimatedSection';

const blogPosts = [
  {
    id: 1,
    title: 'Building Scalable React Applications: Best Practices in 2024',
    excerpt: 'Learn the essential patterns and practices for building React applications that scale. From state management to code organization, this guide covers it all.',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop',
    category: 'tech',
    date: 'Dec 15, 2024',
    readTime: 8,
    tags: ['React', 'Best Practices', 'Architecture'],
  },
  {
    id: 2,
    title: 'From Junior to Senior: My 5-Year Journey in Tech',
    excerpt: 'Reflecting on my career progression, the challenges I faced, lessons learned, and advice for developers looking to grow in their careers.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop',
    category: 'career',
    date: 'Nov 28, 2024',
    readTime: 12,
    tags: ['Career', 'Growth', 'Mentorship'],
  },
  {
    id: 3,
    title: 'TypeScript Tips That Will Make Your Code Cleaner',
    excerpt: 'Discover powerful TypeScript features and patterns that will help you write more maintainable and type-safe code in your projects.',
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&auto=format&fit=crop',
    category: 'tech',
    date: 'Nov 10, 2024',
    readTime: 6,
    tags: ['TypeScript', 'Programming', 'Tips'],
  },
  {
    id: 4,
    title: 'Why I Moved Back to Gyumri: Finding Balance in Tech',
    excerpt: 'A personal story about choosing quality of life over big city opportunities and how remote work has changed the game for developers.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop',
    category: 'personal',
    date: 'Oct 22, 2024',
    readTime: 10,
    tags: ['Remote Work', 'Life', 'Armenia'],
  },
  {
    id: 5,
    title: 'Mastering CSS Grid: A Complete Visual Guide',
    excerpt: 'Everything you need to know about CSS Grid, from basic concepts to advanced techniques with practical examples and visualizations.',
    image: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&auto=format&fit=crop',
    category: 'tech',
    date: 'Oct 5, 2024',
    readTime: 15,
    tags: ['CSS', 'Web Development', 'Tutorial'],
  },
  {
    id: 6,
    title: 'Preparing for Technical Interviews: A Practical Guide',
    excerpt: 'My approach to technical interview preparation, including resources, practice strategies, and tips for handling different interview formats.',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&auto=format&fit=crop',
    category: 'career',
    date: 'Sep 18, 2024',
    readTime: 9,
    tags: ['Interviews', 'Career', 'Tips'],
  },
];

const categories = [
  { id: 'all', label: 'All' },
  { id: 'tech', label: 'Technology' },
  { id: 'career', label: 'Career' },
  { id: 'personal', label: 'Personal' },
];

const Blog = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredPosts = activeCategory === 'all'
    ? blogPosts
    : blogPosts.filter((p) => p.category === activeCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-custom text-center">
          <AnimatedSection>
            <h1 className="heading-display mb-6">{t('blog.title')}</h1>
            <p className="body-large max-w-2xl mx-auto">
              {t('blog.subtitle')}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Categories & Posts */}
      <section className="section-padding">
        <div className="container-custom">
          {/* Categories */}
          <AnimatedSection className="mb-12">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((cat) => (
                <motion.button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                    activeCategory === cat.id
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary text-muted-foreground hover:bg-secondary/80'
                  }`}
                >
                  {cat.label}
                </motion.button>
              ))}
            </div>
          </AnimatedSection>

          {/* Posts Grid */}
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Link to={`/blog/${post.id}`}>
                    <motion.div
                      whileHover={{ y: -8 }}
                      className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-premium transition-all h-full flex flex-col"
                    >
                      {/* Image */}
                      <div className="relative overflow-hidden aspect-video">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="badge-accent">{post.category}</span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 flex flex-col flex-1">
                        {/* Meta */}
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {post.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {post.readTime} {t('blog.readTime')}
                          </span>
                        </div>

                        <h3 className="font-serif text-xl font-semibold mb-3 group-hover:text-accent transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4 flex-1 line-clamp-3">
                          {post.excerpt}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="flex items-center gap-1 px-2 py-1 bg-secondary text-xs rounded-md text-muted-foreground"
                            >
                              <Tag className="w-3 h-3" />
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Read More */}
                        <span className="inline-flex items-center gap-2 text-accent font-medium text-sm group-hover:gap-3 transition-all">
                          {t('blog.readMore')}
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </motion.div>
                  </Link>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
