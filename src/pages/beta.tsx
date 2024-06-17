import { MetaTags } from '@/components/MetaTags';
import { useDefaultLayout } from '@/hooks/useLayout';
import type { NextPageWithLayout } from '@/utils/types';
import { NearAIHome } from '@/components/pages/NearAI/NearAIHome';

const HomePage: NextPageWithLayout = () => {
  return (
    <>
      <MetaTags title="NEAR AI" description="NEAR AI: Digital self-sovereignty for the creator economy." />

      <NearAIHome />
    </>
  );
};

HomePage.getLayout = useDefaultLayout;

export default HomePage;
