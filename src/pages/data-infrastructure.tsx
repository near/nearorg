import { MetaTags } from '@/components/MetaTags';
import { DataInfrastructure } from '@/components/pages/DataInfrastructure';
import { useDefaultLayout } from '@/hooks/useLayout';
import type { NextPageWithLayout } from '@/utils/types';

const DataInfrastructurePage: NextPageWithLayout = () => {
  return (
    <>
      <MetaTags
        title="NEAR | Data Infrastructure"
        description="Choose the data solution that fits your needs. Access and monitor on-chain data through public datasets, or scaffold your own infrastructure."
      />

      <DataInfrastructure />
    </>
  );
};

DataInfrastructurePage.getLayout = useDefaultLayout;

export default DataInfrastructurePage;
