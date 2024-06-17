import { MetaTags } from '@/components/MetaTags';
import { NearAIAbout } from '@/components/pages/NearAI/NearAIAbout';
import type { NextPageWithLayout } from '@/utils/types';
import { useDefaultLayout } from '@/hooks/useLayout';

const NearAIPage: NextPageWithLayout = () => {
  return (
    <>
      <MetaTags title="NEAR AI" description="NEAR AI: Digital self-sovereignty for the creator economy." />

        <NearAIAbout />
    </>
  );
};
NearAIPage.getLayout = useDefaultLayout;
export default NearAIPage;
