import { MetaTags } from '@/components/MetaTags';
import { EcosystemGetFunding } from '@/components/pages/EcosystemGetFunding';
import { useDefaultLayout } from '@/hooks/useLayout';
import type { NextPageWithLayout } from '@/utils/types';

const EcosystemGetFundingPage: NextPageWithLayout = () => {
  return (
    <>
      <MetaTags
        title="NEAR | Get Funding"
        description="Get funded while building on the Blockchain Operating System for an Open Web. The NEAR ecosystem offers multiple funding options to support initiatives aimed at decentralizing, growing, and innovating on NEAR."
      />

      <EcosystemGetFunding />
    </>
  );
};

EcosystemGetFundingPage.getLayout = useDefaultLayout;

export default EcosystemGetFundingPage;
