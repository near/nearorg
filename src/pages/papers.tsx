import { MetaTags } from '@/components/MetaTags';
import { Papers } from '@/components/pages/Papers';
import { useDefaultLayout } from '@/hooks/useLayout';
import type { NextPageWithLayout } from '@/utils/types';

const PapersPage: NextPageWithLayout = () => {
  return (
    <>
      <MetaTags title="NEAR | Papers" description="Join us as we dive deep into our technology." />

      <Papers />
    </>
  );
};

PapersPage.getLayout = useDefaultLayout;

export default PapersPage;
