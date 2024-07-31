import { MetaTags } from '@/components/MetaTags';
import { ChainAbstraction } from '@/components/pages/ChainAbstraction';
import { useDefaultLayout } from '@/hooks/useLayout';
import type { NextPageWithLayout } from '@/utils/types';

const ChainAbstractionPage: NextPageWithLayout = () => {
  return (
    <>
      <MetaTags title="NEAR | Chain Abstraction" description="One account, any chain. Powered by Chain Signatures." />

      <ChainAbstraction />
    </>
  );
};

ChainAbstractionPage.getLayout = useDefaultLayout;

export default ChainAbstractionPage;
