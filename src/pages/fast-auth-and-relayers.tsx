import { MetaTags } from '@/components/MetaTags';
import { FastAuthAndRelayers } from '@/components/pages/FastAuthAndRelayers';
import { useDefaultLayout } from '@/hooks/useLayout';
import type { NextPageWithLayout } from '@/utils/types';

const FastAuthAndRelayersPage: NextPageWithLayout = () => {
  return (
    <>
      <MetaTags
        title="NEAR | Fast Auth & Relayers"
        description="No seed phrase, no gas, no friction. Bring users on chain in seconds with FastAuth and Relayers."
      />

      <FastAuthAndRelayers />
    </>
  );
};

FastAuthAndRelayersPage.getLayout = useDefaultLayout;

export default FastAuthAndRelayersPage;
