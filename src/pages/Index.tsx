import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import LinkedInSection from '@/components/home/LinkedInSection';
import GitHubSection from '@/components/home/GitHubSection';
import CTASection from '@/components/home/CTASection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturedProjects />
      <LinkedInSection />
      <GitHubSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
