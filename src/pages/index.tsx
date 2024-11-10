import { MetaTags } from '@/components/MetaTags';
import CTASection from '@/components/pages/NearAI/CTASection';
import FeaturesSection from '@/components/pages/NearAI/FeaturesSection';
import HeroSection from '@/components/pages/NearAI/HeroSection';
import PageWrapper from '@/components/pages/NearAI/PageWrapper';
import ProductSection from '@/components/pages/NearAI/ProductSection';
import VisionSection from '@/components/pages/NearAI/VisionSection';

const LandingPage = () => {
  return (
    <PageWrapper withAnimation={true}>
      <MetaTags title="NEAR AI" description="NEAR AI: Digital self-sovereignty for the creator economy." />
      <HeroSection />
      <VisionSection />
      <ProductSection />
      <FeaturesSection />
      <CTASection />
    </PageWrapper>
  );
};
// LandingPage.getLayout = useDefaultLayout;

export default LandingPage;
