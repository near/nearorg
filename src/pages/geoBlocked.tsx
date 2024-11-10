import type { NextPage } from 'next';
import styled from 'styled-components';

import { Text } from '@/components/lib/Text';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem 1rem;
`;

const BlockedPage: NextPage = () => {
  return (
    <Container>
      <Text $size="text-xl">near.ai is not currently available in your region.</Text>
    </Container>
  );
};

export default BlockedPage;
