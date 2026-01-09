import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Code2, Server, MessageSquare, GraduationCap, ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeader from '@/components/ui/SectionHeader';

const services = [
  {
    icon: Code2,
    title: 'Frontend Development',
    description: 'Building responsive, performant, and accessible web applications using modern frameworks like React, Vue, and Next.js.',
    features: ['React & Vue.js', 'TypeScript', 'Responsive Design', 'Performance Optimization', 'Accessibility'],
    price: 'From $80/hr',
  },
  {
    icon: Server,
    title: 'Software Engineering',
    description: 'Designing and implementing scalable software solutions with clean architecture and industry best practices.',
    features: ['System Design', 'API Development', 'Database Design', 'Code Review', 'Technical Documentation'],
    price: 'From $100/hr',
  },
  {
    icon: MessageSquare,
    title: 'Technical Consulting',
    description: 'Providing expert guidance on technology choices, architecture decisions, and development strategies.',
    features: ['Tech Stack Selection', 'Architecture Review', 'Best Practices', 'Team Training', 'Technical Audit'],
    price: 'From $120/hr',
  },
  {
    icon: GraduationCap,
    title: 'Mentoring',
    description: 'Helping aspiring developers grow their skills through personalized guidance and practical projects.',
    features: ['1-on-1 Sessions', 'Code Reviews', 'Career Guidance', 'Project Feedback', 'Interview Prep'],
    price: 'From $60/hr',
  },
];

const Services = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-custom text-center">
          <AnimatedSection>
            <h1 className="heading-display mb-6">{t('services.title')}</h1>
            <p className="body-large max-w-2xl mx-auto">
              {t('services.subtitle')}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="card-premium h-full flex flex-col"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                      <service.icon className="w-7 h-7 text-accent" />
                    </div>
                    <span className="text-sm font-semibold text-accent">{service.price}</span>
                  </div>

                  {/* Content */}
                  <h3 className="font-serif text-2xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8 flex-1">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm">
                        <Check className="w-4 h-4 text-accent flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom">
          <SectionHeader
            title="How I Work"
            subtitle="A streamlined process to ensure successful project delivery"
            light
          />

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Understanding your goals, requirements, and vision for the project.' },
              { step: '02', title: 'Planning', description: 'Creating a detailed roadmap with milestones and deliverables.' },
              { step: '03', title: 'Development', description: 'Building your solution with regular updates and feedback loops.' },
              { step: '04', title: 'Delivery', description: 'Deploying, testing, and ensuring everything works perfectly.' },
            ].map((item, index) => (
              <AnimatedSection key={item.step} delay={index * 0.1}>
                <div className="text-center">
                  <div className="text-5xl font-serif font-bold text-accent/30 mb-4">{item.step}</div>
                  <h3 className="font-serif text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-primary-foreground/70 text-sm">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <AnimatedSection>
            <h2 className="heading-section mb-6">Ready to Start Your Project?</h2>
            <p className="body-large max-w-xl mx-auto mb-8">
              Let's discuss how I can help bring your ideas to life with high-quality software solutions.
            </p>
            <Link to="/contact" className="btn-accent">
              Let's Talk
              <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
