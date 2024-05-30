import { NearAILayout } from '@/components/layouts/NearAILayout';
import { MetaTags } from '@/components/MetaTags';
import { NearAIPlaceholder } from '@/components/pages/NearAI/NearAIPlaceholder';
import type { NextPageWithLayout } from '@/utils/types';

const NearAIPage: NextPageWithLayout = () => {
  return (
    <>
      <MetaTags title="NEAR AI" description="NEAR AI: Digital self-sovereignty for the creator economy." />

      <NearAILayout>
        <NearAIPlaceholder />
      </NearAILayout>
    </>
  );
};
export default NearAIPage;
