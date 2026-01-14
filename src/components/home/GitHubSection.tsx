import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Star, GitFork, Code2 } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeader from '@/components/ui/SectionHeader';

const githubRepos = [
  {
    id: 1,
    name: 'react-component-library',
    description: 'A comprehensive collection of reusable React components with TypeScript, Storybook documentation, and full test coverage.',
    language: 'TypeScript',
    languageColor: '#3178c6',
    stars: 1247,
    forks: 234,
    url: 'https://github.com/Jora001',
  },
  {
    id: 2,
    name: 'node-api-starter',
    description: 'Production-ready Node.js API boilerplate with Express, Prisma, JWT authentication, and comprehensive error handling.',
    language: 'JavaScript',
    languageColor: '#f1e05a',
    stars: 892,
    forks: 178,
    url: 'https://github.com/Jora001',
  },
  {
    id: 3,
    name: 'tailwind-premium-ui',
    description: 'Beautiful, accessible UI components built with Tailwind CSS. Dark mode support, animations, and customizable themes.',
    language: 'TypeScript',
    languageColor: '#3178c6',
    stars: 567,
    forks: 98,
    url: 'https://github.com/Jora001',
  },
  {
    id: 4,
    name: 'ai-content-tools',
    description: 'Open-source AI-powered content generation tools. Integrates with OpenAI, supports multiple languages and formats.',
    language: 'Python',
    languageColor: '#3572A5',
    stars: 2134,
    forks: 456,
    url: 'https://github.com',
  },
];

const GitHubSection = () => {
  const { t } = useTranslation();

  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container-custom">
        <SectionHeader
          title={t('home.github.title')}
          subtitle={t('home.github.subtitle')}
          light
        />

        {/* Stats Overview */}
        <AnimatedSection className="mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Repositories', value: '48+' },
              { label: 'Total Stars', value: '5.2k' },
              { label: 'Contributions', value: '2.8k' },
              { label: 'Followers', value: '890' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-xl bg-primary-foreground/5 backdrop-blur"
              >
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">{stat.value}</div>
                <div className="text-sm text-primary-foreground/60">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Repos Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {githubRepos.map((repo, index) => (
            <AnimatedSection key={repo.id} delay={index * 0.1}>
              <motion.a
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4 }}
                className="block p-6 rounded-xl bg-primary-foreground/5 backdrop-blur border border-primary-foreground/10 hover:border-accent/50 transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Code2 className="w-5 h-5 text-accent" />
                    <h4 className="font-semibold">{repo.name}</h4>
                  </div>
                  <Github className="w-5 h-5 text-primary-foreground/40" />
                </div>
                
                <p className="text-sm text-primary-foreground/70 mb-4 line-clamp-2">
                  {repo.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: repo.languageColor }}
                    />
                    <span className="text-sm text-primary-foreground/60">{repo.language}</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-primary-foreground/60">
                    <span className="flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      {repo.stars.toLocaleString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="w-4 h-4" />
                      {repo.forks}
                    </span>
                  </div>
                </div>
              </motion.a>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.5} className="mt-10 text-center">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-primary-foreground/20 text-primary-foreground font-medium hover:bg-primary-foreground/10 transition-colors"
          >
            View All on GitHub
            <ArrowRight className="w-4 h-4" />
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default GitHubSection;
