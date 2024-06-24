import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import Link from 'next/link';
import type { MouseEventHandler } from 'react';
import styled from 'styled-components';

import { recordMouseEnter } from '@/utils/analytics';

import { navigationCategories } from '../categories';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  z-index: 1;
  padding: 0 1rem;
  height: var(--nav-height);
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
  &:focus-visible,
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

const Container = styled.div`
  display: flex;
  padding: 12px 0;
  transform-origin: center top;
  background: var(--white);
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.06);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  max-height: calc(100dvh - var(--nav-height));
  overflow: auto;
  scroll-behavior: smooth;
  overscroll-behavior: contain;
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

const Section = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 24px 0;
  min-width: 200px;
`;

const SectionTitle = styled.p`
  font: var(--text-xs);
  color: var(--sand10);
  font-weight: 450;
  padding: 12px 0;
  letter-spacing: 0.24px;
  margin: 0;
`;

const Icon = styled.i`
  font-weight: 'bold';
  font-size: 18px;
  color: #868682;
  margin-top: -0.3em;
`;

const NavSection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3px;
  align-items: center;
`;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const NearAiLink = styled(NavLink)`
  all: unset;
  display: flex;
  align-items: center;
  font: var(--text-s);
  color: var(--sand12);
  font-weight: 600;
  border-radius: 100px;
  padding: 0 1rem;
  transition: all 200ms;
  height: 40px;
  cursor: pointer;
  position: relative;

  &:hover,
  &:focus {
    background: var(--sand4);
    color: var(--sand12);
    text-decoration: none;
    text-underline-offset: unset;
  }

  i {
    position: absolute;
    top: 4px;
    right: 5px;
    color: #9797ff;
  }
`;

export const MainNavigationMenu = () => {
  const navTriggerClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    const target = event.target as HTMLButtonElement;

    if (target.getAttribute('data-state') === 'open') {
      // When a nav trigger is already open and then clicked, we ignore the click to keep the nav dropdown open
      event.preventDefault();
      event.stopPropagation();
    }
  };

  return (
    <Wrapper>
      <NavRoot delayDuration={0}>
        <NavList>
          {/* TODO: Enable this when the Near AI page is ready */}
          {/* <NavItem>
            <NearAiLink asChild>
              <Link href="/ai">
                Near AI
                <i className="ph-fill ph-star-four" />
              </Link>
            </NearAiLink>
          </NavItem> */}
          {navigationCategories
            .filter((category) => category.visible === 'all' || category.visible === 'desktop')
            .map((category) => (
              <NavItem key={category.title}>
                <NavTrigger onMouseEnter={recordMouseEnter} onClick={navTriggerClick}>
                  {category.title}
                </NavTrigger>

                <NavContent>
                  <Container>
                    {category.sections.map((section) => (
                      <Section key={section.title}>
                        {section.title && <SectionTitle>{section.title}</SectionTitle>}

                        {section.links.map((link) => (
                          <NavSection key={link.title}>
                            <Icon className={link.icon} />
                            <NavLink asChild>
                              <Link href={link.url} target={link.url.indexOf('http') === 0 ? '_blank' : undefined}>
                                {link.title}
                              </Link>
                            </NavLink>
                          </NavSection>
                        ))}
                      </Section>
                    ))}
                  </Container>
                </NavContent>
              </NavItem>
            ))}
        </NavList>
      </NavRoot>
    </Wrapper>
  );
};
