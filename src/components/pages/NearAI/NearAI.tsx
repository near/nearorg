/* eslint-disable @next/next/no-img-element */

import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import Link from 'next/link';
import styled from 'styled-components';

import { recordMouseEnter } from '@/utils/analytics';

import { Container } from '../../lib/Container';
import { Flex } from '../../lib/Flex';
import { Pattern, PatternContent } from '../../lib/Pattern';
import { Section } from '../../lib/Section';
import { H1 } from '../../lib/Text';
import { Wrapper } from '../../lib/Wrapper';
import { NearAIHome } from './NearAIHome';

const ContentWrapper = styled(Wrapper)`
  --near-green: #00ec97;
  display: flex;
  flex-direction: column;
  background-color: var(--background-color);
`;

const NavRoot = styled(NavigationMenu.Root)`
  height: 100%;

  > div {
    height: 100%;
  }
`;

const NavList = styled(NavigationMenu.List)`
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
`;
const NavTrigger = styled(NavigationMenu.Trigger)`
  all: unset;
  font: var(--text-s);
  color: var(--sand12);
  font-weight: 600;
  padding: 0 1rem;
  height: 40px;
  display: flex;
  align-items: center;
  border-radius: 100px;
  transition: all 200ms;

  &:hover,
  &:focus,
  &[data-state='open'] {
    background: var(--sand4);
  }
`;

const NavContent = styled(NavigationMenu.Content)`
  position: absolute;
  top: calc(100% - 1rem + 1px);
  left: 0;
  padding-top: 1rem;
  transform-origin: center top;
  animation: fadeIn 200ms;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(1, 0.5);
    }
    to {
      opacity: 1;
      transform: scale(1, 1);
    }
  }
`;

const NavItem = styled(NavigationMenu.Item)`
  display: flex;
  align-items: center;
  position: relative;
  height: 100%;

  &:last-child {
    ${NavContent} {
      left: unset;
      right: 0;
    }
  }
`;
const NavLink = styled(NavigationMenu.Link)`
  padding: 7px;
  margin-right: 12px;
  font: var(--text-s);
  color: var(--near-green);
  transition: color 200ms;
  white-space: nowrap;
  outline: none;

  &:hover,
  &:focus {
    color: var(--sand12);
    text-decoration: underline;
    text-underline-offset: 2px;
  }
`;
const Title = styled(H1)`
  color: var(--near-green);
`;

export const NearAI = () => {
  return (
    <ContentWrapper>
      <Section style={{ padding: '20px 0 0 0', color: 'white' }}>
        <Flex $alignItems="right" style={{ paddingRight: '2rem' }}>
          <NavRoot delayDuration={0} style={{ display: 'flex', marginLeft: 'auto' }}>
            <NavList>
              <NavItem key={'about'}>
                <NavTrigger onMouseEnter={recordMouseEnter}>
                  <NavLink asChild>
                    <Link href={'/about-nearai'}>ABOUT</Link>
                  </NavLink>
                </NavTrigger>
              </NavItem>
            </NavList>
          </NavRoot>
        </Flex>
        <Container $center>
          <Pattern style={{ height: '150px', minHeight: '150px' }}>
            <PatternContent style={{ color: 'white' }}>
              <Flex $gap="32px" $direction="column" $alignItems="center" style={{ margin: '2rem' }}>
                <Title style={{}}>NEAR AI</Title>

                {/*<Text $size="text-l" $mobileSize="text-base" style={{color: 'white'}}>*/}
                {/*  NEAR AI: Digital self-sovereignty for the creator economy.*/}
                {/*</Text>*/}
              </Flex>
            </PatternContent>
          </Pattern>
        </Container>
      </Section>
      <Container $center>
        <Section style={{ padding: 0, textAlign: 'left' }}>
          <NearAIHome />
        </Section>
      </Container>
      <Section style={{ padding: '20px 0 0 0' }}></Section>
    </ContentWrapper>
  );
};
