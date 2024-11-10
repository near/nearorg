import { MetaTags } from '@/components/MetaTags';
import { Intents } from '@/components/pages/Intents';
import { useDefaultLayout } from '@/hooks/useLayout';
import type { NextPageWithLayout } from '@/utils/types';

const IntentsPage: NextPageWithLayout = () => {
  return (
    <>
      <MetaTags
        title="NEAR | Intents"
        description="Build with NEAR. Intents is a one-stop shop for building with NEAR."
      />

      <Intents />
    </>
  );
};

IntentsPage.getLayout = useDefaultLayout;

export default IntentsPage;
