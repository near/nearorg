import { type ReactNode } from 'react';
import styled from 'styled-components';

import { Container } from '@/components/lib/Container';
import { Section } from '@/components/lib/Section';
import Navbar from '@/components/pages/NearAI/Navbar';

interface Props {
  children: ReactNode;
}

const Wrapper = styled.div`
  display: flex;
  justify-content: stretch;
  align-items: stretch;
  flex-direction: column;
  min-height: 100vh;
  min-width: 0;
  --background-color: black;
  --color: white;
  color: var(--color);
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: stretch;
  align-items: stretch;
  min-width: 0;
  background-color: black;
`;

export function DefaultLayout({ children }: Props) {
  return (
    <Wrapper>
      <Navbar />

      <Content>
        <Container $center>
          <Section style={{ padding: 0, textAlign: 'left' }}>{children}</Section>
        </Container>
      </Content>
    </Wrapper>
  );
}
