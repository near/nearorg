import { MetaTags } from '@/components/MetaTags';
import { OpenWebApplications } from '@/components/pages/OpenWebApplications';
import { useDefaultLayout } from '@/hooks/useLayout';
import type { NextPageWithLayout } from '@/utils/types';

const OpenWebApplicationsPage: NextPageWithLayout = () => {
  return (
    <>
      <MetaTags
        title="NEAR | Open Web Applications"
        description="Contribute to building a web where users own their data, voices count, and everyone can be fairly rewarded for their effort."
      />

      <OpenWebApplications />
    </>
  );
};

OpenWebApplicationsPage.getLayout = useDefaultLayout;

export default OpenWebApplicationsPage;
