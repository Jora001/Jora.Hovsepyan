import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Star, GitFork } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeader from '@/components/ui/SectionHeader';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce solution with React, Node.js, and PostgreSQL. Includes payment processing, inventory management, and analytics dashboard.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    category: 'web',
    github: 'https://github.com',
    demo: 'https://demo.com',
    stars: 128,
    forks: 45,
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A beautiful and intuitive task management application with real-time collaboration, drag-and-drop interfaces, and smart notifications.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&auto=format&fit=crop',
    tags: ['Vue.js', 'Firebase', 'Tailwind CSS'],
    category: 'web',
    github: 'https://github.com',
    demo: 'https://demo.com',
    stars: 89,
    forks: 23,
  },
  {
    id: 3,
    title: 'AI Content Generator',
    description: 'Leveraging OpenAI GPT to create high-quality content for blogs, social media, and marketing.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop',
    tags: ['Next.js', 'OpenAI', 'TypeScript'],
    category: 'web',
    github: 'https://github.com',
    demo: 'https://demo.com',
    stars: 256,
    forks: 78,
  },
  {
    id: 4,
    title: 'Mobile Fitness App',
    description: 'Cross-platform mobile app for tracking workouts, nutrition, and health metrics with personalized recommendations.',
    image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&auto=format&fit=crop',
    tags: ['React Native', 'Firebase', 'Health API'],
    category: 'mobile',
    github: 'https://github.com',
    demo: 'https://demo.com',
    stars: 156,
    forks: 34,
  },
  {
    id: 5,
    title: 'Dashboard UI Kit',
    description: 'A comprehensive UI kit for building modern dashboards with charts, tables, and data visualization components.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop',
    tags: ['Figma', 'React', 'Tailwind'],
    category: 'design',
    github: 'https://github.com',
    demo: 'https://demo.com',
    stars: 432,
    forks: 123,
  },
  {
    id: 6,
    title: 'Real-time Chat App',
    description: 'Feature-rich chat application with WebSocket support, file sharing, and end-to-end encryption.',
    image: 'https://images.unsplash.com/photo-1611746872915-64382b5c2a47?w=800&auto=format&fit=crop',
    tags: ['React', 'Socket.io', 'Node.js'],
    category: 'web',
    github: 'https://github.com',
    demo: 'https://demo.com',
    stars: 198,
    forks: 56,
  },
];

const filters = [
  { id: 'all', label: 'All' },
  { id: 'web', label: 'Web Apps' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'design', label: 'Design' },
];

const Portfolio = () => {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-custom text-center">
          <AnimatedSection>
            <h1 className="heading-display mb-6">{t('portfolio.title')}</h1>
            <p className="body-large max-w-2xl mx-auto">
              {t('portfolio.subtitle')}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Filters & Projects */}
      <section className="section-padding">
        <div className="container-custom">
          {/* Filters */}
          <AnimatedSection className="mb-12">
            <div className="flex flex-wrap justify-center gap-3">
              {filters.map((filter) => (
                <motion.button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                    activeFilter === filter.id
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary text-muted-foreground hover:bg-secondary/80'
                  }`}
                >
                  {filter.label}
                </motion.button>
              ))}
            </div>
          </AnimatedSection>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-premium transition-all"
                  >
                    {/* Image */}
                    <div className="relative overflow-hidden aspect-video">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      
                      {/* Hover Actions */}
                      <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all">
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 bg-white text-black py-2 rounded-lg text-sm font-medium hover:bg-white/90 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Demo
                        </a>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 bg-black/80 text-white py-2 rounded-lg text-sm font-medium hover:bg-black/70 transition-colors"
                        >
                          <Github className="w-4 h-4" />
                          Code
                        </a>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="font-serif text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-secondary text-xs font-medium rounded-md text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Stats */}
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Star className="w-4 h-4" />
                          {project.stars}
                        </span>
                        <span className="flex items-center gap-1">
                          <GitFork className="w-4 h-4" />
                          {project.forks}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
