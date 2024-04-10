import { MetaTags } from '@/components/MetaTags';
import { Events } from '@/components/pages/Events';
import { useDefaultLayout } from '@/hooks/useLayout';
import type { NextPageWithLayout } from '@/utils/types';

const EventsPage: NextPageWithLayout = () => {
  return (
    <>
      <MetaTags
        title="NEAR | Events"
        description="Join NEAR for one of our upcoming in-person, virtual, or hybrid events."
      />

      <Events />
    </>
  );
};

EventsPage.getLayout = useDefaultLayout;

export default EventsPage;
