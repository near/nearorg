import { Flex } from '@/components/lib/Flex';
import { recordMouseEnter } from '@/utils/analytics';
import Link from 'next/link';
import styled from 'styled-components';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';


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
    //color: var(--sand12);
    font-weight: 600;
    padding: 0 1rem;
    height: 40px;
    display: flex;
    align-items: center;
    border-radius: 100px;
    transition: all 200ms;
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
        text-decoration: underline;
        text-underline-offset: 2px;
    }
`;

export const SimpleNavigationMenu = () => {
  return (
    <Flex $gap="32px" $direction="column" $alignItems="center" style={{ margin: '2rem' }}>

      {/*<Text $size="text-l" $mobileSize="text-base" style={{color: 'white'}}>*/}
      {/*  NEAR AI: Digital self-sovereignty for the creator economy.*/}
      {/*</Text>*/}
      <Flex $alignItems="right" style={{ paddingRight: '2rem' }}>
        <NavRoot delayDuration={0} style={{ display: 'flex', marginLeft: 'auto' }}>
          <NavList>
            <NavItem key={'home'}>
              <NavTrigger onMouseEnter={recordMouseEnter}>
                <NavLink asChild>
                  <Link href={'/beta'} style={{fontSize: '2rem'}}>NEAR AI</Link>
                </NavLink>
              </NavTrigger>
            </NavItem>
            <NavItem key={'aiOfficeHours'}>
              <NavTrigger onMouseEnter={recordMouseEnter}>
                <NavLink asChild>
                  <Link href={'https://www.youtube.com/watch?v=ye_2k7dxtCE&list=PL9tzQn_TEuFWMuPiQOXhaE5lpOTnxLPZY'}
                  target="_blank">AI
                    Office Hours</Link>
                </NavLink>
              </NavTrigger>
            </NavItem>
            <NavItem key={'about'}>
              <NavTrigger onMouseEnter={recordMouseEnter}>
                <NavLink asChild>
                  <Link href={'/about'}>About</Link>
                </NavLink>
              </NavTrigger>
            </NavItem>
          </NavList>
        </NavRoot>
      </Flex>
    </Flex>);
};