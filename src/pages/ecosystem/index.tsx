import { MetaTags } from '@/components/MetaTags';
import { EcosystemOverview } from '@/components/pages/EcosystemOverview';
import { useDefaultLayout } from '@/hooks/useLayout';
import type { NextPageWithLayout } from '@/utils/types';

const EcosystemOverviewPage: NextPageWithLayout = () => {
  return (
    <>
      <MetaTags
        title="NEAR | Ecosystem"
        description="Explore a vibrant ecosystem that supports developers, founders, and contributors."
      />

      <EcosystemOverview />
    </>
  );
};

EcosystemOverviewPage.getLayout = useDefaultLayout;

export default EcosystemOverviewPage;
