import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight, Linkedin, ThumbsUp, MessageCircle, Share2, Bookmark } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeader from '@/components/ui/SectionHeader';

const linkedInPosts = [
  {
    id: 1,
    content: "🚀 Excited to share that I've just completed a major redesign of our e-commerce platform, resulting in a 40% increase in conversion rates! The key was focusing on user experience and performance optimization. #WebDevelopment #UX",
    likes: 234,
    comments: 45,
    shares: 12,
    date: '2 days ago',
  },
  {
    id: 2,
    content: "💡 5 TypeScript tips that will make your code cleaner and more maintainable:\n\n1. Use discriminated unions\n2. Leverage template literal types\n3. Master conditional types\n4. Embrace utility types\n5. Type guards are your friends\n\n#TypeScript #Programming",
    likes: 567,
    comments: 89,
    shares: 156,
    date: '1 week ago',
  },
  {
    id: 3,
    content: "🎉 Thrilled to announce that our team won first place at the TechFest Hackathon! We built an AI-powered accessibility tool that helps visually impaired users navigate websites. Proud of what we accomplished in just 48 hours!",
    likes: 892,
    comments: 123,
    shares: 245,
    date: '2 weeks ago',
  },
];

const LinkedInSection = () => {
  const { t } = useTranslation();

  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeader
          title={t('home.linkedin.title')}
          subtitle={t('home.linkedin.subtitle')}
        />

        <div className="grid md:grid-cols-3 gap-6">
          {linkedInPosts.map((post, index) => (
            <AnimatedSection key={post.id} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                className="card-premium h-full flex flex-col"
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#0A66C2] flex items-center justify-center">
                    <Linkedin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">Armen Hovhannisyan</h4>
                    <p className="text-xs text-muted-foreground">{post.date}</p>
                  </div>
                </div>

                {/* Content */}
                <p className="text-sm text-foreground/90 flex-1 whitespace-pre-line mb-4">
                  {post.content}
                </p>

                {/* Stats */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <ThumbsUp className="w-4 h-4" />
                      {post.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="w-4 h-4" />
                      {post.comments}
                    </span>
                    <span className="flex items-center gap-1">
                      <Share2 className="w-4 h-4" />
                      {post.shares}
                    </span>
                  </div>
                  <Bookmark className="w-4 h-4 text-muted-foreground" />
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4} className="mt-10 text-center">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            View on LinkedIn
            <ArrowRight className="w-4 h-4" />
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default LinkedInSection;
