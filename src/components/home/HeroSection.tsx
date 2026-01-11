import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight, Linkedin, Github, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const { t } = useTranslation();
  const roles = t('hero.roles', { returnObjects: true }) as string[];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section className="min-h-[calc(100vh-5rem)] flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/30 to-background" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div className="order-2 lg:order-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 text-accent" />
              Gyumri, Armenia
            </div>

            <p className="text-lg text-muted-foreground">
              {t('hero.greeting')}
            </p>

            <h1 className="heading-display">
              {t('Jora Hovsepyan')}
            </h1>

            <div className="h-10 overflow-hidden">
              <motion.div
                key={currentRole}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-2xl md:text-3xl font-serif font-medium text-gradient"
              >
                {roles[currentRole]}
              </motion.div>
            </div>

            <p className="body-large max-w-xl">
              {t('hero.description')}
            </p>

            <div className="flex gap-4 pt-4">
              <Link to="/portfolio" className="btn-accent">
                {t('hero.cta.portfolio')}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/contact" className="btn-outline">
                {t('hero.cta.contact')}
              </Link>
            </div>

            <div className="flex gap-4 pt-6">
              <SocialLink href="https://www.linkedin.com/in/jora-hovsepyan-459149265/" label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </SocialLink>
              <SocialLink href="https://github.com/Jora001" label="GitHub">
                <Github className="w-5 h-5" />
              </SocialLink>
              <SocialLink href="mailto:jorahovsepyan425@gmail.com?subject=Hello Jora&body=Hi!" label="Email">
                <Mail className="w-5 h-5" />
              </SocialLink>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <motion.div
              className="relative w-[360px] h-[360px]"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.03 }}
            >

              <svg
                className="absolute inset-0"
                viewBox="0 0 360 360"
              >
                <defs>
                  <linearGradient id="ringGradient" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#6366f1" />
                    <stop offset="50%" stopColor="#22d3ee" />
                    <stop offset="100%" stopColor="#6366f1" />
                  </linearGradient>
                </defs>

                <motion.circle
                  cx="180"
                  cy="180"
                  r="168"
                  fill="none"
                  stroke="url(#ringGradient)"
                  strokeWidth="3"
                  strokeDasharray="8 14"
                  initial={{ strokeDashoffset: 400 }}
                  animate={{ strokeDashoffset: 0 }}
                  transition={{ duration: 3, ease: "easeOut" }}
                />

                <motion.circle
                  cx="180"
                  cy="180"
                  r="168"
                  fill="none"
                  stroke="url(#ringGradient)"
                  strokeWidth="3"
                  strokeDasharray="1 22"
                  animate={{ rotate: 360 }}
                  transform-origin="50% 50%"
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
              </svg>

              {/* IMAGE */}
              <motion.div
                className="absolute inset-6 rounded-full overflow-hidden shadow-premium-lg border-4 border-background"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              >
                <motion.img
                  src="/public/assets/jor.jpg"
                  alt="Jora Hovsepyan - Software Engineer"
                  className="w-full h-full object-cover rounded-full"
                />
              </motion.div>

              {/* STATUS */}
              <motion.div
                className="absolute -right-4 -bottom-4 bg-card rounded-xl shadow-premium px-4 py-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                <div className="flex items-center gap-2">
                  <motion.div
                    className="w-3 h-3 bg-green-500 rounded-full"
                    animate={{ scale: [1, 1.4, 1] }}
                    transition={{ duration: 1.2, repeat: Infinity }}
                  />
                  <span className="text-sm font-medium">
                    Available for work
                  </span>
                </div>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

const SocialLink = ({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    whileHover={{ scale: 1.1, y: -2 }}
    whileTap={{ scale: 0.95 }}
    className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
  >
    {children}
  </motion.a>
);

export default HeroSection;