import { MetaTags } from '@/components/MetaTags';
import { Home } from '@/components/pages/Home';
import { useDefaultLayout } from '@/hooks/useLayout';
import type { NextPageWithLayout } from '@/utils/types';

const HomePage: NextPageWithLayout = () => {
  return (
    <>
      <MetaTags
        title="NEAR | Blockchains, Abstracted"
        description="NEAR is the chain abstraction stack, empowering builders to create apps that scale to billions of users and across all blockchains."
      />

      <Home />
    </>
  );
};

HomePage.getLayout = useDefaultLayout;

export default HomePage;
