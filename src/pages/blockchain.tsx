import { MetaTags } from '@/components/MetaTags';
import { Blockchain } from '@/components/pages/Blockchain';
import { useDefaultLayout } from '@/hooks/useLayout';
import type { NextPageWithLayout } from '@/utils/types';

const BlockchainPage: NextPageWithLayout = () => {
  return (
    <>
      <MetaTags
        title="NEAR | Blockchain"
        description="Created with simplicity in mind. NEAR is built from the ground up to be performant, secure, scalable, and eco-friendly."
      />

      <Blockchain />
    </>
  );
};

BlockchainPage.getLayout = useDefaultLayout;

export default BlockchainPage;
