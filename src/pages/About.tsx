import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
  Code2,
  Palette,
  Globe,
  BookOpen,
  Coffee,
  Heart,
  Award,
  Users,
} from 'lucide-react';

import Layout from '@/components/layout/Layout';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeader from '@/components/ui/SectionHeader';

const skills = {
  frontend: ['React', 'Vue.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  backend: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'GraphQL', 'REST APIs'],
  tools: ['Git', 'Docker', 'AWS', 'Vercel', 'Figma', 'VS Code'],
  other: ['Agile/Scrum', 'CI/CD', 'Testing', 'Performance', 'Accessibility', 'SEO'],
};

const timeline = [
  {
    year: '2023 - Present',
    title: 'Senior Software Engineer',
    company: 'Tech Solutions Inc.',
    description:
      'Leading frontend development for enterprise applications. Mentoring junior developers and driving technical decisions.',
  },
  {
    year: '2021 - 2023',
    title: 'Software Engineer',
    company: 'Digital Agency',
    description:
      'Built scalable web applications for various clients. Specialized in React and Node.js development.',
  },
  {
    year: '2019 - 2021',
    title: 'Junior Developer',
    company: 'Startup Hub',
    description:
      'Started my professional journey building MVPs and learning best practices in software development.',
  },
  {
    year: '2015 - 2019',
    title: 'Computer Science Degree',
    company: 'University of Armenia',
    description:
      'Studied computer science fundamentals, algorithms, and software engineering principles.',
  },
];

const values = [
  {
    icon: Award,
    title: 'Quality First',
    description:
      'I never compromise on code quality. Clean, tested, and well-documented code is the foundation of sustainable software.',
  },
  {
    icon: BookOpen,
    title: 'Continuous Learning',
    description:
      'Technology evolves rapidly. I dedicate time every day to learning new tools, techniques, and best practices.',
  },
  {
    icon: Users,
    title: 'User-Centric Design',
    description:
      'Beautiful code means nothing if users cannot enjoy it. I always prioritize the end-user experience.',
  },
  {
    icon: Heart,
    title: 'Collaboration',
    description:
      'The best solutions come from diverse perspectives. I value teamwork and open communication.',
  },
];

const About = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <AnimatedSection>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 via-transparent to-accent/10 rounded-3xl blur-2xl" />
                <motion.img
                  src="/profile-photo.jpg"
                  alt="Armen Hovhannisyan"
                  className="relative rounded-2xl shadow-premium-lg w-full max-w-md mx-auto"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </AnimatedSection>

            {/* Content */}
            <AnimatedSection delay={0.2}>
              <div className="space-y-6">
                <h1 className="heading-display">{t('about.title')}</h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t('about.subtitle')}
                </p>

                <div className="prose prose-lg text-muted-foreground">
                  <p>
                    My journey in software development began in the beautiful city of
                    Gyumri, Armenia. What started as a curiosity about how websites work
                    has evolved into a passionate career building digital solutions that
                    impact thousands of users.
                  </p>
                  <p>
                    I believe in writing clean, maintainable code and creating experiences
                    that users love. Every project is an opportunity to learn something
                    new and push the boundaries of what's possible.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            title="My Values"
            subtitle="The principles that guide my work and professional relationships"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="card-premium text-center h-full"
                >
                  <div className="w-14 h-14 mx-auto mb-6 rounded-xl bg-accent/10 flex items-center justify-center">
                    <value.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <SectionHeader
            title="Skills & Technologies"
            subtitle="The tools and technologies I work with daily"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, items], index) => (
              <AnimatedSection key={category} delay={index * 0.1}>
                <div className="card-premium">
                  <div className="flex items-center gap-3 mb-4">
                    {category === 'frontend' && <Code2 className="w-5 h-5 text-accent" />}
                    {category === 'backend' && <Globe className="w-5 h-5 text-accent" />}
                    {category === 'tools' && <Coffee className="w-5 h-5 text-accent" />}
                    {category === 'other' && <Palette className="w-5 h-5 text-accent" />}
                    <h3 className="font-serif text-lg font-semibold capitalize">
                      {category}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 bg-secondary text-sm rounded-lg text-muted-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            title="Experience & Education"
            subtitle="My professional journey and academic background"
          />

          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ x: 8 }}
                  className="relative pl-8 pb-12 last:pb-0 border-l-2 border-border hover:border-accent transition-colors"
                >
                  <div className="absolute left-0 top-0 w-4 h-4 -translate-x-1/2 rounded-full bg-accent" />

                  <div className="card-premium ml-4">
                    <span className="text-sm font-medium text-accent">
                      {item.year}
                    </span>
                    <h3 className="font-serif text-xl font-semibold mt-1">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground font-medium mt-1">
                      {item.company}
                    </p>
                    <p className="text-muted-foreground text-sm mt-3">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
