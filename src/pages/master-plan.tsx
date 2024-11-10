import { MetaTags } from '@/components/MetaTags';
import { NearAIHome } from '@/components/pages/NearAI/NearAIHome';
import PageWrapper from '@/components/pages/NearAI/PageWrapper';

const MasterPlanPage = () => {
  return (
    <PageWrapper withAnimation={true}>
      <MetaTags title="Near AI - Master Plan" />
      <NearAIHome />
    </PageWrapper>
  );
};

export default MasterPlanPage;
