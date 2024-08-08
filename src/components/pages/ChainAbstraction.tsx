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
    height: '26px',
    imageUrl: '/images/chain-abstraction/validators/pagoda.png',
    name: 'Pagoda',
    url: 'https://www.pagoda.co/',
  },

  {
    height: '26px',
    imageUrl: '/images/chain-abstraction/validators/luganodes.png',
    name: 'Luganodes',
    url: 'https://www.luganodes.com/',
  },
  {
    height: '30px',
    imageUrl: '/images/chain-abstraction/validators/the-lifted-initiative.png',
    name: 'The Lifted Initiative',
    url: 'https://liftedinit.org/',
  },
  {
    height: '26px',
    imageUrl: '/images/chain-abstraction/validators/infstones.png',
    name: 'InfStones',
    url: 'https://infstones.com/',
  },
  {
    height: '26px',
    imageUrl: '/images/chain-abstraction/validators/staking4all.png',
    name: 'Staking4All',
    url: 'https://www.staking4all.org/',
  },
  {
    height: '26px',
    imageUrl: '/images/chain-abstraction/validators/node-monster.png',
    name: 'Node Monster',
    url: 'https://node.monster/',
  },
  {
    height: '30px',
    imageUrl: '/images/chain-abstraction/validators/black-sand.png',
    name: 'Black Sand Technologies',
    url: 'https://blacksand.xyz/',
  },
  {
    height: '26px',
    imageUrl: '/images/chain-abstraction/validators/aurora.png',
    name: 'Aurora',
    url: 'https://aurora.dev/',
  },
];

const featuredDapps = [
  {
    name: 'Allstake',
    description:
      'Allstake pioneers meshed restaking, enabling users to natively restake a wide range of assets on multiple chains including NEAR, Solana, Bitcoin, Ethereum, Ton, and more.',
    imageUrl: '/images/chain-abstraction/dapps/all-stake.png',
    url: 'https://allstake.org/',
  },
  {
    name: 'Sweat Economy',
    description:
      'SWEAT is an ecosystem that captures the value of physical movement for tens of millions of users. By pioneering NEAR’s Chain Signatures, SWEAT is setting a new standard for multi-chain experiences on a global scale.',
    imageUrl: '/images/chain-abstraction/dapps/sweat-wallet.png',
    url: 'https://sweateconomy.com/',
  },
  {
    name: 'Defuse',
    description:
      'Defuse is a scalable, multi-chain DeFi infrastructure that facilitates the creation and trading of financial instruments with minimized centralization risks, while unifying liquidity across crypto ecosystems.',
    imageUrl: '/images/chain-abstraction/dapps/defuse.png',
    url: 'https://defuse.org',
  },
  {
    name: 'Bitte',
    description: 'Smart accounts with on-chain AI.',
    imageUrl: '/images/chain-abstraction/dapps/bitte-wallet.png',
    url: 'https://bitte.ai/',
  },
  {
    name: 'Here Wallet',
    description:
      'HERE Wallet is a self-custodial mobile, web, and Telegram crypto wallet with over 15 million users. HERE supports accounts over HOT Protocol, a decentralized MPC network built with the NEAR Chain Abstraction stack.',
    imageUrl: '/images/chain-abstraction/dapps/here-wallet.png',
    url: 'https://www.herewallet.app/',
  },
];

const upcomingDapps = [
  {
    name: 'Omnilane',
    description:
      'The definitive cross-chain swap solution using MPC technology. Bridgeless, swap native assets faster and securely between Bitcoin, Solana, TON, Near, and EVM blockchains without MEV attacks or slippage.',
    imageUrl: '/images/chain-abstraction/dapps/omnilane.png',
    url: 'https://omnilane.xyz/',
  },
  {
    name: 'Atlas',
    description: 'Liquid staking on Bitcoin via Chain Signatures',
    imageUrl: '/images/chain-abstraction/dapps/atlas.png',
    url: 'https://x.com/_atlasprotocol',
  },
  {
    name: 'Redacted',
    description:
      'Multichain lending protocol. Use any asset on any chain as collateral: BTC, DOGE, XRP, SOL, TON, and more',
    imageUrl: '/images/chain-abstraction/dapps/redacted.png',
    url: '',
  },
  {
    name: 'Paras',
    description: 'The first high-throughput Bitcoin Runes marketplace. Settle trades in seconds',
    imageUrl: '/images/chain-abstraction/dapps/paras.png',
    url: 'https://paras.id',
  },
  {
    name: 'DeltaTrade',
    description:
      'Delta Trade is a decentralized trading protocol that enhances user capabilities with sophisticated on-chain trading strategies such as Grid Trading, DCA, Rebalancing Grid, MultiChain Support, OrderBook, Full Platform Market Making, and AI Powered Strategy.',
    imageUrl: '/images/chain-abstraction/dapps/delta-trade.png',
    url: 'https://www.deltatrade.ai/',
  },
];

const learnItems = [
  // {
  //   name: 'Technical Deep Dive',
  //   description: 'A breakdown of the technical ins and outs of Chain Signatures.',
  //   icon: 'ph-article',
  //   url: 'https://medium.com/@ProximityFi/a-first-look-at-chain-signatures-cross-chain-without-bridges-81c8421d153c',
  //   target: '_blank',
  // },
  {
    name: 'Docs & Examples',
    description: 'Official documentation and code examples for Chain Signatures',
    icon: 'ph-file-doc',
    url: 'https://docs.near.org/concepts/abstraction/chain-signatures',
    target: '_blank',
  },
  {
    name: 'Getting Started Guide',
    description: "An easy starter's guide written for developers, by developers.",
    icon: 'ph-book-open-text',
    url: 'https://docs.near.org/build/chain-abstraction/chain-signatures',
    target: '_blank',
  },
  {
    name: 'Multichain Gas Relayer',
    description:
      'How the Multichain Gas Relayer enables gas abstraction for Chain Signatures products and their users.',
    icon: 'ph-book-open-text',
    url: 'https://docs.near.org/build/chain-abstraction/multichain-gas-relayer/getting-started',
    target: '_blank',
  },
];

const mediaItems = [
  {
    name: 'Chain Abstracted Podcast',
    imageUrl: '/images/chain-abstraction/media/chain-abstracted-podcast.png',
    url: 'https://youtu.be/363tiDWblFQ?si=JFDBl0WWT9J4QRUO',
    target: '_blank',
  },
  {
    name: 'Cross-Chain Without Bridges',
    imageUrl: '/images/chain-abstraction/media/cross-chain-without-bridges.png',
    url: 'https://youtu.be/vOmq4DKZIAA?si=xA-zGJNMz-g-dkHH',
    target: '_blank',
  },
  // {
  //   name: 'Chain Signatures Mainnet Announcement Post',
  //   imageUrl: '/images/chain-abstraction/media/announcement-post.png',
  //   url: '#',
  //   target: '_blank',
  // },
  {
    name: 'Chain Signature Examples',
    imageUrl: '/images/chain-abstraction/media/chain-signature-examples.png',
    url: 'https://near.org/blog/unlocking-multichain-web3-with-near-chain-signatures/',
    target: '_blank',
  },
  {
    name: 'A First Look at Chain Signatures',
    imageUrl: '/images/chain-abstraction/media/first-look.png',
    url: 'https://medium.com/nearprotocol/a-first-look-at-chain-signatures-cross-chain-without-bridges-81c8421d153c',
    target: '_blank',
  },
  {
    name: 'DevHub: Chain Abstraction Community Call Playlist',
    imageUrl: '/images/chain-abstraction/media/dev-hub-community-playlist.png',
    url: 'https://youtube.com/playlist?list=PLrLLmjcJVAB9LOIB2oMVHWU4kjL7rZNrH&si=Mm8UGnLBDsVGmXaP',
    target: '_blank',
  },
  {
    name: 'DevHub: Chain Abstraction Playlist',
    imageUrl: '/images/chain-abstraction/media/dev-hub-abstraction-playlist.png',
    url: 'https://youtube.com/playlist?list=PLrLLmjcJVAB-hMq0mgAyzlOqccMHvQFys&si=-Hvrmp6GOsfMGrKF',
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
                  <Button
                    href="https://form.jotform.com/240777569453167"
                    target="_blank"
                    label="Build With Us"
                    variant="secondary"
                    fill="outline"
                    size="large"
                  />
                  <Button href="#dapps" label="Explore dApps" variant="secondary" fill="outline" size="large" />
                  <Button href="#get-started" label="Get Started" variant="primary" size="large" />
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
              <source src="/videos/chain-abstraction.mp4" type="video/mp4" />
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
                The{' '}
                <a
                  style={{ color: '#fff', fontWeight: 600, textDecoration: 'underline' }}
                  href="https://docs.near.org/build/chain-abstraction/multichain-gas-relayer/overview"
                  target="_blank"
                >
                  Multichain Gas Relayer
                </a>{' '}
                eliminates the need for users to acquire native gas tokens separately when making cross-chain
                transactions
              </Text>
            </Flex>
          </Grid>
        </Container>
      </Section>

      <Section $backgroundColor="#fff" id="dapps">
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
                <Card
                  as={item.url ? 'a' : undefined}
                  href={item.url || undefined}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={item.name}
                  $clickable={!!item.url}
                >
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

      <Section $backgroundColor="#161615" style={{ '--sand11': '#A1A09A' } as any} id="get-started">
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

            <Grid $columns="1fr 1fr 1fr" $gap="24px" $mobileGap="48px">
              {mediaItems.map((item) => (
                <Article key={item.name} href={item.url} target="_blank" style={{ minWidth: 0 }}>
                  <ArticleImage>
                    <img src={item.imageUrl} alt={item.name} />
                  </ArticleImage>
                  <Text $size="text-l" $weight="500" as="h3" $color="white">
                    {item.name}
                  </Text>
                </Article>
              ))}
            </Grid>
          </Flex>
        </Container>
      </Section>

      <Section $backgroundColor="#fff">
        <Container>
          <Flex $direction="column" $gap="24px">
            <H2>Roadmap</H2>
            <Text $size="text-2xl" $mobileSize="text-l" style={{ maxWidth: '808px' }}>
              Technical developments coming soon to Chain Signatures.
            </Text>
          </Flex>

          <Grid $columns="1fr 1fr 1fr" $gap="48px">
            <Flex $direction="column" $gap="24px">
              <Text $size="text-l" $weight="600">
                Q3 2024
              </Text>
              <Text $size="text-s">Mainnet launch (ECDSA support)</Text>
            </Flex>

            <Flex $direction="column" $gap="24px">
              <Text $size="text-l" $weight="600">
                Q4 2024
              </Text>
              <Text $size="text-s">EDDSA support (Solana, TON)</Text>
            </Flex>

            <Flex $direction="column" $gap="24px">
              <Text $size="text-l" $weight="600">
                2025
              </Text>
              <Text $size="text-s">Increase throughput to 300 tx/s</Text>
            </Flex>

            <Flex $direction="column" $gap="24px">
              <Text $size="text-l" $weight="600">
                2025
              </Text>
              <Text $size="text-s">40+ highly independent validator nodes</Text>
            </Flex>
          </Grid>
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
            <Card
              $clickable
              $dark
              as="a"
              href="https://form.jotform.com/240777569453167"
              target="_blank"
              $borderColor="var(--cyan11)"
            >
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

            <Card
              $clickable
              $dark
              as="a"
              href="https://t.me/+RXYjlPob_XM5N2Ex"
              target="_blank"
              $borderColor="var(--cyan11)"
            >
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
