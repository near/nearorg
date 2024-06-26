import React from 'react';
import styled from 'styled-components';

import { AccordionMenu } from './AccordionMenu';

type Props = {
  isVisible: boolean;
  onCloseMenu: () => void;
};

const Wrapper = styled.div<{
  $visible: boolean;
}>`
  position: fixed;
  top: calc(var(--nav-height) + var(--banner-nav-offset-height, 0px));
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10000;
  display: ${(p) => (p.$visible ? 'block' : 'none')};
  transition: 200ms;
  background: var(--white);
  border-top: 1px solid var(--sand6);
  overflow: auto;
  scroll-behavior: smooth;
  overscroll-behavior: contain;
  transform-origin: center top;
  animation: fadeIn 200ms;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(1, 0);
    }
    to {
      opacity: 1;
      transform: scale(1, 1);
    }
  }
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px;
  min-height: calc(100% + 1px);

  /*
    The +1px for "min-height" allows "overscroll-behavior: contain;" on the <Wrapper>
    to prevent the <body> from scrolling. Setting "overflow: hidden;" on the <body> would
    break the "position: sticky;" behavior of the navigation - that's why we need to
    use this hack instead.

    https://stackoverflow.com/a/48954092
  */
`;

export function Menu(props: Props) {
  return (
    <Wrapper $visible={props.isVisible}>
      <InnerWrapper>
        <AccordionMenu onCloseMenu={props.onCloseMenu} />
      </InnerWrapper>
    </Wrapper>
  );
}
