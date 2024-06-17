import { MetaTags } from '@/components/MetaTags';
import { useDefaultLayout } from '@/hooks/useLayout';
import type { NextPageWithLayout } from '@/utils/types';
import { NearAIPlaceholder } from '@/components/pages/NearAI/NearAIPlaceholder';

const HomePage: NextPageWithLayout = () => {
  return (
    <>
      <MetaTags title="NEAR AI" description="NEAR AI: Digital self-sovereignty for the creator economy." />

      <NearAIPlaceholder />
    </>
  );
};


export default HomePage;
