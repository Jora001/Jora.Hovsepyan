import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedSection from '@/components/ui/AnimatedSection';

const CTASection = () => {
  const { t } = useTranslation();

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/5" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center">
            {/* Icon */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', duration: 0.6 }}
              className="w-16 h-16 mx-auto mb-8 rounded-2xl bg-accent/10 flex items-center justify-center"
            >
              <Sparkles className="w-8 h-8 text-accent" />
            </motion.div>

            {/* Heading */}
            <h2 className="heading-display mb-6">
              {t('home.cta.title')}
            </h2>

            {/* Subheading */}
            <p className="body-large mb-10 max-w-xl mx-auto">
              {t('home.cta.subtitle')}
            </p>

            {/* CTA Button */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link to="/contact" className="btn-accent text-base px-8 py-4">
                {t('home.cta.button')}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CTASection;
