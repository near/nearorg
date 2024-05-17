/* eslint-disable @next/next/no-img-element */

import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import Link from 'next/link';
import styled from 'styled-components';

import StaticBlogPage from '@/components/pages/NearAISingleBlog';
import { recordMouseEnter } from '@/utils/analytics';

import { Container } from '../lib/Container';
import { Flex } from '../lib/Flex';
import { Pattern, PatternContent } from '../lib/Pattern';
import { Section } from '../lib/Section';
import { H1, Text } from '../lib/Text';
import { Wrapper } from '../lib/Wrapper';

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
  color: var(--sand12);
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

export const NearAI = (props: any) => {
  return (
    <Wrapper>
      <Section $backgroundColor="#9797FF" style={{ padding: '20px 0 0 0' }}>
        <Flex $alignItems="right" style={{ paddingRight: '2rem' }}>
          <NavRoot delayDuration={0} style={{ display: 'flex', marginLeft: 'auto' }}>
            <NavList>
              <NavItem key={'About'}>
                <NavTrigger onMouseEnter={recordMouseEnter}>
                  <NavLink asChild>
                    <Link href={'https://near.org'}>About</Link>
                  </NavLink>
                </NavTrigger>
              </NavItem>
            </NavList>
          </NavRoot>
        </Flex>
        <Container $center>
          <Pattern style={{ height: '200px', minHeight: '200px' }}>
            <PatternContent>
              <Flex $gap="32px" $direction="column" $alignItems="center" style={{ margin: '2rem' }}>
                <H1>NEAR AI</H1>

                <Text $size="text-l" $mobileSize="text-base">
                  NEAR AI: Digital self-sovereignty for the creator economy.
                </Text>
              </Flex>
            </PatternContent>
          </Pattern>
        </Container>
      </Section>
      <Section style={{ padding: 0 }}>
        <StaticBlogPage bloghtml={props.bloghtml} /> {/*contains a hardcoded blog link*/}
      </Section>
      <Section $backgroundColor="#9797FF" style={{ padding: '20px 0 0 0' }}></Section>
    </Wrapper>
  );
};
