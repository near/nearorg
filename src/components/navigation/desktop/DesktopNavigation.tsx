import styled from 'styled-components';

import { SimpleNavigationMenu } from '@/components/navigation/desktop/SimpleNavigationMenu';

const Wrapper = styled.div`
  --nav-height: 75px;
  z-index: 1000;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  background-color: black;
    color: var(--near-green);
  height: var(--nav-height);
  //box-shadow: 0 1px 0 var(--sand6);
  padding: 0 1.75rem;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  margin: 0 auto;
  max-width: 1320px;
`;

export const DesktopNavigation = () => {
  return (
    <>
      <Wrapper>
        <Container>
          <SimpleNavigationMenu />
        </Container>
      </Wrapper>
    </>
  );
};
