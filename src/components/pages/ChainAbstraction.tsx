/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';
import styled from 'styled-components';

import { useEvents } from '@/hooks/useEvents';
import { LUMA_NEAR_CALENDAR_ID } from '@/utils/constants';

import { Article, ArticleImage } from '../lib/Article';
import { Button } from '../lib/Button';
import { Card } from '../lib/Card';
import { Container } from '../lib/Container';
import { Flex } from '../lib/Flex';
import { Grid } from '../lib/Grid';
import { IconCircle } from '../lib/IconCircle';
import { Pattern, PatternContent } from '../lib/Pattern';
import { Section } from '../lib/Section';
import { H1, H2, Text } from '../lib/Text';
import { Wrapper } from '../lib/Wrapper';

const validators = [
  {
    height: '24px',
    imageUrl: '/images/chain-abstraction/validators/pagoda.png',
    name: 'Pagoda',
    url: '#',
  },
  {
    height: '26px',
    imageUrl: '/images/chain-abstraction/validators/aurora.png',
    name: 'Aurora',
    url: '#',
  },
  {
    height: '24px',
    imageUrl: '/images/chain-abstraction/validators/luganodes.png',
    name: 'Luganodes',
    url: '#',
  },
  {
    height: '24px',
    imageUrl: '/images/chain-abstraction/validators/infstones.png',
    name: 'Infstones',
    url: '#',
  },
  {
    height: '26px',
    imageUrl: '/images/chain-abstraction/validators/staking4all.png',
    name: 'Staking 4 All',
    url: '#',
  },
  {
    height: '24px',
    imageUrl: '/images/chain-abstraction/validators/node-monster.png',
    name: 'Node Monster',
    url: '#',
  },
  {
    height: '26px',
    imageUrl: '/images/chain-abstraction/validators/black-sand.png',
    name: 'Black Sand Technologies',
    url: '#',
  },
];

const featuredDapps = [
  {
    name: 'AllStake',
    description:
      'Allstake pioneers meshed restaking, enabling users to natively restake a wide range of assets on multiple chains including NEAR, Solana, Bitcoin, Ethereum, Ton, and more.',
    imageUrl: '/images/chain-abstraction/dapps/all-stake.png',
    url: '#',
  },
  {
    name: 'Sweat Wallet',
    description:
      'SWEAT is an ecosystem that captures the value of physical movement for tens of millions of users. By pioneering NEAR’s Chain Signatures, SWEAT is setting a new standard for multi-chain experiences on a global scale.',
    imageUrl: '/images/chain-abstraction/dapps/sweat-wallet.png',
    url: '#',
  },
  {
    name: 'Defuse',
    description:
      'Defuse is a scalable, multi-chain DeFi infrastructure that facilitates the creation and trading of financial instruments with minimized centralization risks, while unifying liquidity across crypto ecosystems.',
    imageUrl: '/images/chain-abstraction/dapps/defuse.png',
    url: '#',
  },
  {
    name: 'Bitte Wallet',
    description: 'Smart accounts with on-chain AI.',
    imageUrl: '/images/chain-abstraction/dapps/bitte-wallet.png',
    url: '#',
  },
  {
    name: 'Here Wallet',
    description:
      'HERE Wallet is a self-custodial mobile, web, and Telegram crypto wallet with over 15 million users. HERE supports accounts over HOT Protocol, a decentralized MPC network built with the NEAR Chain Abstraction stack.',
    imageUrl: '/images/chain-abstraction/dapps/here-wallet.png',
    url: '#',
  },
];

const upcomingDapps = [
  {
    name: 'Omnilane',
    description:
      'The definitive cross-chain swap solution using MPC technology. Bridgeless, swap native assets faster and securely between Bitcoin, Solana, TON, Near, and EVM blockchains without MEV attacks or slippage.',
    imageUrl: '/images/chain-abstraction/dapps/omnilane.png',
    url: '#',
  },
  {
    name: 'Atlas',
    description: 'Liquid staking on Bitcoin via Chain Signatures',
    imageUrl: '/images/chain-abstraction/dapps/atlas.png',
    url: '#',
  },
  {
    name: 'Redacted',
    description:
      'Multichain lending protocol. Use any asset on any chain as collateral: BTC, DOGE, XRP, SOL, TON, and more',
    imageUrl: '/images/chain-abstraction/dapps/redacted.png',
    url: '#',
  },
  {
    name: 'Paras',
    description: 'The first high-throughput Bitcoin Runes marketplace. Settle trades in seconds',
    imageUrl: '/images/chain-abstraction/dapps/paras.png',
    url: '#',
  },
  {
    name: 'DeltaTrade',
    description:
      'Delta Trade is a decentralized trading protocol that enhances user capabilities with sophisticated on-chain trading strategies such as Grid Trading, DCA, Rebalancing Grid, MultiChain Support, OrderBook, Full Platform Market Making, and AI Powered Strategy.',
    imageUrl: '/images/chain-abstraction/dapps/delta-trade.png',
    url: '#',
  },
];

const learnItems = [
  {
    name: 'Technical Deep Dive',
    description: 'A breakdown of the technical ins and outs of Chain Signatures.',
    icon: 'ph-article',
    url: '#',
    target: '_blank',
  },
  {
    name: 'Docs & Examples',
    description: 'Official documentation and code examples for Chain Signatures',
    icon: 'ph-file-doc',
    url: '#',
    target: '_blank',
  },
  {
    name: 'Getting Started Guide',
    description: "An easy starter's guide written for developers, by developers.",
    icon: 'ph-book-open-text',
    url: '#',
    target: '_blank',
  },
  {
    name: 'Multichain Gas Relayer ',
    description:
      'How the Multichain Gas Relayer enables gas abstraction for Chain Signatures products and their users.',
    icon: 'ph-book-open-text',
    url: '#',
    target: '_blank',
  },
];

const LogoLinks = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 60px;
  padding: 16px 24px;

  a {
    display: block;
    height: 24px;
    color: var(--sand10);

    img {
      display: block;
      margin: 0 auto;
      height: 100%;
    }
  }

  @media (max-width: 800px) {
    gap: 40px;
  }
`;

const DappIcon = styled.img`
  display: block;
  width: 72px;
  border-radius: 8px;
`;

export const ChainAbstraction = () => {
  const { events } = useEvents([LUMA_NEAR_CALENDAR_ID]);

  return (
    <Wrapper>
      <Section $backgroundColor="#61E5E2" style={{ padding: '72px 0' }}>
        <Container $center>
          <Pattern>
            <PatternContent>
              <Flex $gap="32px" $direction="column" $alignItems="center">
                <H1 style={{ textWrap: 'initial' }}>Chain Abstraction is NEAR</H1>

                <Text $size="text-l" $mobileSize="text-base">
                  One account, any chain. Powered by Chain Signatures.
                </Text>

                <Flex $gap="16px" $wrap="wrap" $justifyContent="center" $alignItems="center">
                  <Button href="#" label="Build With Us" variant="secondary" fill="outline" size="large" />
                  <Button href="#" label="Explore dApps" variant="secondary" fill="outline" size="large" />
                  <Button href="#" label="Get Started" variant="primary" size="large" />
                </Flex>
              </Flex>
            </PatternContent>
          </Pattern>
        </Container>
      </Section>

      <Section $backgroundColor="#fff">
        <Container>
          <Flex $direction="column" $gap="64px">
            <Flex $direction="column" $gap="24px">
              <H2 style={{ maxWidth: '1016px' }}>Chain Signatures are now live on mainnet</H2>
              <Text $size="text-2xl" $mobileSize="text-l" style={{ maxWidth: '808px' }}>
                Chain Signatures are a decentralized MPC network enabling NEAR accounts, including smart contracts, to
                sign and execute transactions across any chain.
              </Text>
            </Flex>

            <video controls>
              <source src="/videos/example.webm" type="video/webm" />
            </video>
          </Flex>

          <Flex $direction="column" $alignItems="center" $gap="24px">
            <Text
              $size="text-xs"
              $weight="700"
              $color="sand11"
              style={{
                textTransform: 'uppercase',
                letterSpacing: '2px',
                padding: '0 24px',
              }}
            >
              Network Validators
            </Text>

            <LogoLinks>
              {validators.map((validator) => (
                <Link
                  href={validator.url}
                  target="_blank"
                  title={validator.name}
                  style={{ height: validator.height }}
                  key={validator.name}
                >
                  <img src={validator.imageUrl} alt={validator.name} />
                </Link>
              ))}
            </LogoLinks>
          </Flex>
        </Container>
      </Section>

      <Section $backgroundColor="#083A40">
        <Container>
          <Flex $direction="column" $gap="24px">
            <H2 style={{ color: 'var(--white)' }}>Why build with Chain Signatures?</H2>
            <Text $size="text-2xl" $mobileSize="text-l" style={{ maxWidth: '808px' }} $color="white">
              The tech to realize chain abstraction. Let users go anywhere, fast, without the hassle.
            </Text>
          </Flex>

          <Grid $columns="1fr 1fr 1fr" $gap="48px">
            <Flex $direction="column" $gap="24px">
              <Text $size="text-l" $color="white" $weight="600">
                True multichain coverage
              </Text>

              <Text $color="white" $size="text-s">
                Build real multichain dApps that can interact with EVM, non-EVM, and even non-smart contract chains
                without bridges
              </Text>
            </Flex>

            <Flex $direction="column" $gap="24px">
              <Text $size="text-l" $color="white" $weight="600">
                Instant chain support
              </Text>

              <Text $color="white" $size="text-s">
                Instantly add support for any new chain without the need for native integration every time
              </Text>
            </Flex>

            <Flex $direction="column" $gap="24px">
              <Text $size="text-l" $color="white" $weight="600">
                Single state layer
              </Text>

              <Text $color="white" $size="text-s">
                Manage assets or states on any chain with a single smart contract on NEAR
              </Text>
            </Flex>

            <Flex $direction="column" $gap="24px">
              <Text $size="text-l" $color="white" $weight="600">
                Fast finality for cross-chain transactions
              </Text>

              <Text $color="white" $size="text-s">
                Cross-chain transactions in the speed of one NEAR block (2-3 seconds)
              </Text>
            </Flex>

            <Flex $direction="column" $gap="24px">
              <Text $size="text-l" $color="white" $weight="600">
                One account, any chain
              </Text>

              <Text $color="white" $size="text-s">
                Control any externally owned account (EOA) on any chain from a single NEAR account
              </Text>
            </Flex>

            <Flex $direction="column" $gap="24px">
              <Text $size="text-l" $color="white" $weight="600">
                Gas Abstraction
              </Text>

              <Text $color="white" $size="text-s">
                The Multichain Gas Relayer eliminates the need for users to acquire native gas tokens separately when
                making cross-chain transactions
              </Text>
            </Flex>
          </Grid>
        </Container>
      </Section>

      <Section $backgroundColor="#fff">
        <Container>
          <Flex $direction="column" $gap="24px">
            <H2>Explore dApps</H2>
            <Text $size="text-2xl" $mobileSize="text-l" style={{ maxWidth: '808px' }}>
              Discover truly multichain dApps powered by Chain Signatures.
            </Text>
          </Flex>

          <Flex $direction="column" $gap="36px">
            <Flex $direction="column" $gap="12px">
              <Text $size="text-xl" $weight="600">
                Featured dApps
              </Text>
              <Text style={{ maxWidth: '393px' }}>
                Discover the first live projects with Chain Signatures functionality.
              </Text>
            </Flex>

            <Grid $columns="1fr 1fr 1fr" $gap="24px">
              {featuredDapps.map((item) => (
                <Card as="a" href={item.url} target="_blank" rel="noopener noreferrer" key={item.name} $clickable>
                  <Flex $direction="column" $gap="16px">
                    <DappIcon src={item.imageUrl} alt={item.name} />

                    <Text $size="text-l" $weight="500">
                      {item.name}
                    </Text>
                    <Text $size="text-s">{item.description}</Text>
                  </Flex>
                </Card>
              ))}
            </Grid>
          </Flex>

          <Flex $direction="column" $gap="36px">
            <Flex $direction="column" $gap="12px">
              <Text $size="text-xl" $weight="600">
                Upcoming dApps
              </Text>
              <Text style={{ maxWidth: '393px' }}>More Chain Signatures-powered omnichain dApps coming very soon.</Text>
            </Flex>

            <Grid $columns="1fr 1fr 1fr" $gap="24px">
              {upcomingDapps.map((item) => (
                <Card as="a" href={item.url} target="_blank" rel="noopener noreferrer" key={item.name} $clickable>
                  <Flex $direction="column" $gap="16px">
                    <DappIcon src={item.imageUrl} alt={item.name} />

                    <Text $size="text-l" $weight="500">
                      {item.name}
                    </Text>
                    <Text $size="text-s">{item.description}</Text>
                  </Flex>
                </Card>
              ))}
            </Grid>
          </Flex>
        </Container>
      </Section>

      <Section $backgroundColor="#161615" style={{ '--sand11': '#A1A09A' } as any}>
        <Container>
          <Flex $direction="column" $gap="24px">
            <H2 style={{ color: 'var(--white)' }}>Getting Started</H2>
            <Text $size="text-2xl" $mobileSize="text-l" $color="white" style={{ maxWidth: '808px' }}>
              Everything you need to start building with Chain Signatures.
            </Text>
          </Flex>

          <Flex $direction="column" $gap="24px" $mobileGap="48px">
            <Flex $direction="column" $gap="24px">
              <Flex $alignItems="center" $gap="12px">
                <i className="ph-duotone ph-book-open-text" style={{ color: 'var(--white)', fontSize: '32px' }} />
                <Text $size="text-xl" $weight="600" $color="white">
                  Learn
                </Text>
              </Flex>

              <Flex $gap="24px" $alignItems="flex-end" $mobileStack $mobileAlignItems="flex-start">
                <Text style={{ maxWidth: '393px', marginRight: 'auto' }} $color="white">
                  Technical docs, examples, and guides for developers.
                </Text>
              </Flex>
            </Flex>

            <Grid $columns="1fr 1fr 1fr" $gap="24px">
              {learnItems.map((item) => (
                <Card $clickable $dark as="a" href={item.url} target={item.target} key={item.name}>
                  <IconCircle>
                    <i className={`ph-duotone ${item.icon}`} />
                  </IconCircle>

                  <Flex $direction="column" $gap="16px">
                    <Text $size="text-l" $weight="500" $color="white">
                      {item.name}
                    </Text>
                    <Text $size="text-s" $color="white">
                      {item.description}
                    </Text>
                  </Flex>
                </Card>
              ))}
            </Grid>
          </Flex>

          <Flex $direction="column" $gap="24px" $mobileGap="48px">
            <Flex $direction="column" $gap="24px">
              <Flex $alignItems="center" $gap="12px">
                <i className="ph-duotone ph-video" style={{ color: 'var(--white)', fontSize: '32px' }} />
                <Text $size="text-xl" $weight="600" $color="white">
                  Media
                </Text>
              </Flex>

              <Flex $gap="24px" $alignItems="flex-end" $mobileStack $mobileAlignItems="flex-start">
                <Text style={{ maxWidth: '393px', marginRight: 'auto' }} $color="white">
                  Blogposts, talks, and community calls for all things Chain Signatures.
                </Text>
              </Flex>
            </Flex>

            <Grid $columns="1fr 1fr 1fr" $gap="24px">
              <Card></Card>
              <Card></Card>
              <Card></Card>
            </Grid>
          </Flex>
        </Container>
      </Section>

      <Section $backgroundColor="#083A40" style={{ '--sand11': '#EDEDEC' } as any}>
        <Container>
          <Flex $direction="column" $gap="24px">
            <H2 style={{ color: 'var(--white)' }}>Get Involved</H2>
            <Text $size="text-2xl" $mobileSize="text-l" $color="white" style={{ maxWidth: '808px' }}>
              Building with Chain Signatures? Get technical, advisory, financial support, and more.
            </Text>
          </Flex>

          <Grid $columns="1fr 1fr" $gap="24px">
            <Card $clickable $dark as="a" href="#" $borderColor="var(--cyan11)">
              <IconCircle>
                <i className="ph-duotone ph-lightbulb-filament" />
              </IconCircle>

              <Flex $direction="column" $gap="16px">
                <Text $size="text-l" $weight="500" $color="white">
                  Are you interested in Chain Signatures?
                </Text>
                <Text $size="text-s" $color="white">
                  Fill out our interest form and let us know how we might help!
                </Text>
              </Flex>
            </Card>

            <Card $clickable $dark as="a" href="#" $borderColor="var(--cyan11)">
              <IconCircle>
                <i className="ph-duotone ph-users-three" />
              </IconCircle>

              <Flex $direction="column" $gap="16px">
                <Text $size="text-l" $weight="500" $color="white">
                  Are you looking to connect with other devs?
                </Text>
                <Text $size="text-s" $color="white">
                  Join our NEAR Chain Abstraction Dev Group on Telegram.
                </Text>
              </Flex>
            </Card>
          </Grid>
        </Container>
      </Section>

      <Section $backgroundColor="#61E5E2">
        <Container>
          <Flex $direction="column" $gap="24px">
            <H2>Upcoming Events</H2>
            <Text $size="text-2xl" $mobileSize="text-l" style={{ maxWidth: '808px' }}>
              Join us at conferences, meetups, and more as we gather across the globe to discuss Chain Signatures.
            </Text>
          </Flex>

          <Grid $columns="1fr 1fr 1fr" $gap="24px" $mobileGap="48px">
            {events.map((event) => (
              <Article key={event.title + event.date} href={event.url} target="_blank" style={{ minWidth: 0 }}>
                <ArticleImage>
                  <img src={event.thumbnail} alt={event.title} />
                </ArticleImage>
                <Text $size="text-l" $weight="500" as="h3">
                  {event.title}
                </Text>
                <Flex $alignItems="center" $gap="32px" style={{ minWidth: 0 }}>
                  <Flex $alignItems="center" $gap="8px">
                    <i className="ph-bold ph-calendar-blank" />
                    <Text $color="sand11" $size="text-s" style={{ whiteSpace: 'nowrap' }}>
                      {event.date}
                    </Text>
                  </Flex>
                  <Flex $alignItems="center" $gap="8px" style={{ minWidth: 0 }}>
                    <i className="ph-bold ph-map-pin-line" />
                    <Text
                      $color="sand11"
                      $size="text-s"
                      style={{
                        whiteSpace: 'nowrap',
                        minWidth: 0,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}
                    >
                      {event.location}
                    </Text>
                  </Flex>
                </Flex>
              </Article>
            ))}
          </Grid>
        </Container>
      </Section>
    </Wrapper>
  );
};
