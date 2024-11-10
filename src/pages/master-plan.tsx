import { MetaTags } from '@/components/MetaTags';
import PageWrapper from '@/components/pages/NearAI/PageWrapper';
import { NearAIHome } from '@/components/pages/NearAI/NearAIHome';

const MasterPlanPage = () => {
  return (
    <PageWrapper withAnimation={true}>
      <MetaTags title="Near AI - Master Plan" />
      <NearAIHome />
    </PageWrapper>
  );
};

export default MasterPlanPage;
