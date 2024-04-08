// import { HomePagePort } from "@/components/bos-ports/HomePagePort";
import { MetaTags } from "@/components/MetaTags";
import { useDefaultLayout } from "@/hooks/useLayout";
import type { NextPageWithLayout } from "@/utils/types";

const HomePage: NextPageWithLayout = () => {
  return (
    <>
      <MetaTags
        title="NEAR | Blockchains, Abstracted"
        description="NEAR is the chain abstraction stack, empowering builders to create apps that scale to billions of users and across all blockchains."
      />

      <h1>Home Page: WIP</h1>

      {/* <HomePagePort /> */}
    </>
  );
};

HomePage.getLayout = useDefaultLayout;

export default HomePage;
