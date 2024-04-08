import { type ReactNode } from "react";
import styled from "styled-components";

import { Navigation } from "../navigation/Navigation";

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
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: stretch;
  align-items: stretch;
  min-width: 0;
`;

export function DefaultLayout({ children }: Props) {
  return (
    <Wrapper>
      <Navigation />
      <Content>{children}</Content>
    </Wrapper>
  );
}
