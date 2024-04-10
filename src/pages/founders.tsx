import { MetaTags } from '@/components/MetaTags';
import { Founders } from '@/components/pages/Founders';
import { useDefaultLayout } from '@/hooks/useLayout';
import type { NextPageWithLayout } from '@/utils/types';

const FoundersPage: NextPageWithLayout = () => {
  return (
    <>
      <MetaTags
        title="NEAR | FounderHub"
        description="FounderHub is a one-stop shop for Founders building with the near ecosystem."
      />

      <Founders />
    </>
  );
};

FoundersPage.getLayout = useDefaultLayout;

export default FoundersPage;
