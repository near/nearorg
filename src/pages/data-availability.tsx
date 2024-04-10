import { MetaTags } from '@/components/MetaTags';
import { DataAvailability } from '@/components/pages/DataAvailability';
import { useDefaultLayout } from '@/hooks/useLayout';
import type { NextPageWithLayout } from '@/utils/types';

const DataAvailabilityPage: NextPageWithLayout = () => {
  return (
    <>
      <MetaTags
        title="NEAR | Data Availability"
        description="Simplify and lower costs in your rollup network by using NEAR as the Data Availability (DA) Layer in your Rollup Stack."
      />

      <DataAvailability />
    </>
  );
};

DataAvailabilityPage.getLayout = useDefaultLayout;

export default DataAvailabilityPage;
