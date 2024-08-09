import { Container, Text } from '@near-pagoda/ui';

import type { NextPageWithLayout } from '@/utils/types';

const BlockedPage: NextPageWithLayout = () => {
  return (
    <Container>
      <Text size="text-xl">near.org is not currently available in your region.</Text>
    </Container>
  );
};

export default BlockedPage;
