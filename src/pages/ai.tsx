import { MetaTags } from '@/components/MetaTags';
import { Ai } from '@/components/pages/Ai';
import { useDefaultLayout } from '@/hooks/useLayout';
import type { NextPageWithLayout } from '@/utils/types';

const AiPage: NextPageWithLayout = () => {
  return (
    <>
      <MetaTags title="NEAR | AI" description="NEAR AI" />

      <Ai />
    </>
  );
};

AiPage.getLayout = useDefaultLayout;

export default AiPage;
