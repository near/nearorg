import { NearAILayout } from '@/components/layouts/NearAILayout';
import { MetaTags } from '@/components/MetaTags';
import { NearAI } from '@/components/pages/NearAI';
import type { NextPageWithLayout } from '@/utils/types';

const NearAIPage: NextPageWithLayout = () => {
  return (
    <>
      <MetaTags title="NEAR AI" description="NEAR AI: Digital self-sovereignty for the creator economy." />

      <NearAILayout>
        <NearAI />
      </NearAILayout>
    </>
  );
};
export default NearAIPage;
