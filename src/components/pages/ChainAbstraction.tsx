import { Article, Button, Card, CardThumbnail, Flex, Grid, IconCircle, Pattern, Section, Text } from '@near-pagoda/ui';

import { useEvents } from '@/hooks/useEvents';
import { LUMA_NEAR_CALENDAR_ID } from '@/utils/constants';

import { LogoLinks } from '../LogoLinks';

const validators = [
  {
    height: '30px',
    image: '/images/chain-abstraction/validators/signetwork.svg',
    name: 'Sig Network',
    url: 'https://sig.network/',
  },

  {
    height: '26px',
    image: '/images/chain-abstraction/validators/luganodes.png',
    name: 'Luganodes',
    url: 'https://www.luganodes.com/',
  },
  {
    height: '30px',
    image: '/images/chain-abstraction/validators/the-lifted-initiative.png',
    name: 'The Lifted Initiative',
    url: 'https://liftedinit.org/',
  },
  {
    height: '26px',
    image: '/images/chain-abstraction/validators/infstones.png',
    name: 'InfStones',
    url: 'https://infstones.com/',
  },
  {
    height: '26px',
    image: '/images/chain-abstraction/validators/staking4all.png',
    name: 'Staking4All',
    url: 'https://www.staking4all.org/',
  },
  {
    height: '26px',
    image: '/images/chain-abstraction/validators/node-monster.png',
    name: 'Node Monster',
    url: 'https://node.monster/',
  },
  {
    height: '30px',
    image: '/images/chain-abstraction/validators/black-sand.png',
    name: 'Black Sand Technologies',
    url: 'https://blacksand.xyz/',
  },
  {
    height: '26px',
    image: '/images/chain-abstraction/validators/aurora.png',
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

export const ChainAbstraction = () => {
  const { events } = useEvents([LUMA_NEAR_CALENDAR_ID]);

  return (
    <>
      <Section background="cyan9" style={{ textAlign: 'center' }}>
        <Pattern>
          <Flex gap="l" stack align="center">
            <Text as="h1" size="text-hero-l" style={{ textWrap: 'initial' }}>
              Chain Abstraction is NEAR
            </Text>

            <Text size="text-l" weight={400}>
              One account, any chain. Powered by Chain Signatures.
            </Text>

            <Flex wrap justify="center" align="center">
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
        </Pattern>
      </Section>

      <Section background="white" gap="2xl" padding="hero">
        <Flex stack gap="xl">
          <Flex stack gap="l">
            <Text as="h2" size="text-hero-m" style={{ maxWidth: '1016px' }}>
              Chain Signatures are now live on mainnet
            </Text>
            <Text size="text-2xl" weight={400} style={{ maxWidth: '808px' }}>
              Chain Signatures are a decentralized MPC network enabling NEAR accounts, including smart contracts, to
              sign and execute transactions across any chain.
            </Text>
          </Flex>

          <video controls>
            <source src="/videos/chain-abstraction.mp4" type="video/mp4" />
          </video>
        </Flex>

        <LogoLinks label="Network Validators" logos={validators} />
      </Section>

      <Section gap="2xl" padding="hero" background="cyan12">
        <Flex stack gap="l">
          <Text as="h2" size="text-hero-m" color="white">
            Why build with Chain Signatures?
          </Text>
          <Text size="text-2xl" weight={400} color="white" style={{ maxWidth: '808px' }}>
            The tech to realize chain abstraction. Let users go anywhere, fast, without the hassle.
          </Text>
        </Flex>

        <Grid columns="1fr 1fr 1fr" columnsTablet="1fr 1fr" columnsPhone="1fr" gap="xl">
          <Flex stack>
            <Text size="text-l" color="white" weight="600">
              True multichain coverage
            </Text>

            <Text color="white" size="text-s">
              Build real multichain dApps that can interact with EVM, non-EVM, and even non-smart contract chains
              without bridges
            </Text>
          </Flex>

          <Flex stack>
            <Text size="text-l" color="white" weight="600">
              Instant chain support
            </Text>

            <Text color="white" size="text-s">
              Instantly add support for any new chain without the need for native integration every time
            </Text>
          </Flex>

          <Flex stack>
            <Text size="text-l" color="white" weight="600">
              Single state layer
            </Text>

            <Text color="white" size="text-s">
              Manage assets or states on any chain with a single smart contract on NEAR
            </Text>
          </Flex>

          <Flex stack>
            <Text size="text-l" color="white" weight="600">
              Fast finality for cross-chain transactions
            </Text>

            <Text color="white" size="text-s">
              Cross-chain transactions in the speed of one NEAR block (2-3 seconds)
            </Text>
          </Flex>

          <Flex stack>
            <Text size="text-l" color="white" weight="600">
              One account, any chain
            </Text>

            <Text color="white" size="text-s">
              Control any externally owned account (EOA) on any chain from a single NEAR account
            </Text>
          </Flex>
        </Grid>
      </Section>

      <Section gap="2xl" padding="hero" background="white" id="dapps">
        <Flex stack gap="l">
          <Text as="h2" size="text-hero-m">
            Explore dApps
          </Text>
          <Text size="text-2xl" weight={400} style={{ maxWidth: '808px' }}>
            Discover truly multichain dApps powered by Chain Signatures.
          </Text>
        </Flex>

        <Flex stack gap="l">
          <Flex stack>
            <Text size="text-xl" weight="600">
              Featured dApps
            </Text>
            <Text style={{ maxWidth: '393px' }}>
              Discover the first live projects with Chain Signatures functionality.
            </Text>
          </Flex>

          <Grid columns="1fr 1fr 1fr" columnsTablet="1fr 1fr" columnsPhone="1fr" gap="l">
            {featuredDapps.map((item) => (
              <Card
                border="sand11"
                padding="l"
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                key={item.name}
              >
                <CardThumbnail src={item.imageUrl} alt={item.name} />

                <Text size="text-l" weight="500">
                  {item.name}
                </Text>
                <Text size="text-s">{item.description}</Text>
              </Card>
            ))}
          </Grid>
        </Flex>

        <Flex stack gap="l">
          <Flex stack>
            <Text size="text-xl" weight="600">
              Upcoming dApps
            </Text>
            <Text style={{ maxWidth: '393px' }}>More Chain Signatures-powered omnichain dApps coming very soon.</Text>
          </Flex>

          <Grid columns="1fr 1fr 1fr" columnsTablet="1fr 1fr" columnsPhone="1fr" gap="l">
            {upcomingDapps.map((item) => (
              <Card
                border="sand11"
                padding="l"
                href={item.url || undefined}
                target="_blank"
                rel="noopener noreferrer"
                key={item.name}
              >
                <CardThumbnail src={item.imageUrl} alt={item.name} />

                <Text size="text-l" weight="500">
                  {item.name}
                </Text>
                <Text size="text-s">{item.description}</Text>
              </Card>
            ))}
          </Grid>
        </Flex>
      </Section>

      <Section gap="2xl" padding="hero" background="sand12" id="get-started">
        <Flex stack gap="l">
          <Text as="h2" size="text-hero-m" color="white">
            Getting Started
          </Text>
          <Text size="text-2xl" weight={400} color="white" style={{ maxWidth: '808px' }}>
            Everything you need to start building with Chain Signatures.
          </Text>
        </Flex>

        <Flex stack gap="l">
          <Flex stack gap="l">
            <Flex align="center">
              <i className="ph-duotone ph-book-open-text" style={{ color: 'var(--white)', fontSize: '32px' }} />
              <Text size="text-xl" weight="600" color="white">
                Learn
              </Text>
            </Flex>

            <Text color="white" style={{ maxWidth: '393px' }}>
              Technical docs, examples, and guides for developers.
            </Text>
          </Flex>

          <Grid columns="1fr 1fr 1fr" columnsTablet="1fr 1fr" columnsPhone="1fr" gap="l">
            {learnItems.map((item) => (
              <Card border="sand11" background="sand12" href={item.url} target={item.target} key={item.name}>
                <IconCircle icon={<i className={`ph-duotone ${item.icon}`} />} />

                <Flex stack>
                  <Text size="text-l" weight="500" color="white">
                    {item.name}
                  </Text>
                  <Text size="text-s" color="white">
                    {item.description}
                  </Text>
                </Flex>
              </Card>
            ))}
          </Grid>
        </Flex>

        <Flex stack gap="l">
          <Flex stack gap="l">
            <Flex align="center">
              <i className="ph-duotone ph-video" style={{ color: 'var(--white)', fontSize: '32px' }} />
              <Text size="text-xl" weight="600" color="white">
                Media
              </Text>
            </Flex>

            <Text color="white" style={{ maxWidth: '393px' }}>
              Blogposts, talks, and community calls for all things Chain Signatures.
            </Text>
          </Flex>

          <Grid columns="1fr 1fr 1fr" columnsTablet="1fr 1fr" columnsPhone="1fr" gap="l">
            {mediaItems.map((item) => (
              <Article key={item.name} href={item.url} target="_blank" src={item.imageUrl} alt={item.name}>
                <Text size="text-l" weight="500" as="h3" color="white">
                  {item.name}
                </Text>
              </Article>
            ))}
          </Grid>
        </Flex>
      </Section>

      <Section gap="2xl" padding="hero" background="white">
        <Flex stack gap="l">
          <Text as="h2" size="text-hero-m">
            Roadmap
          </Text>
          <Text size="text-2xl" weight={400} style={{ maxWidth: '808px' }}>
            Technical developments coming soon to Chain Signatures.
          </Text>
        </Flex>

        <Grid columns="1fr 1fr 1fr" columnsTablet="1fr 1fr" columnsPhone="1fr" gap="xl">
          <Flex stack>
            <Text size="text-l" weight="600">
              Q3 2024
            </Text>
            <Text size="text-s">Mainnet launch (ECDSA support)</Text>
          </Flex>

          <Flex stack>
            <Text size="text-l" weight="600">
              Q4 2024
            </Text>
            <Text size="text-s">EDDSA support (Solana, TON)</Text>
          </Flex>

          <Flex stack>
            <Text size="text-l" weight="600">
              2025
            </Text>
            <Text size="text-s">Increase throughput to 300 tx/s</Text>
          </Flex>

          <Flex stack>
            <Text size="text-l" weight="600">
              2025
            </Text>
            <Text size="text-s">40+ highly independent validator nodes</Text>
          </Flex>
        </Grid>
      </Section>

      <Section gap="2xl" padding="hero" background="cyan12">
        <Flex stack gap="l">
          <Text as="h2" size="text-hero-m" color="white">
            Get Involved
          </Text>
          <Text size="text-2xl" weight={400} color="white" style={{ maxWidth: '808px' }}>
            Building with Chain Signatures? Get technical, advisory, financial support, and more.
          </Text>
        </Flex>

        <Grid columns="1fr 1fr" columnsPhone="1fr" gap="l">
          <Card
            gap="l"
            padding="l"
            border="cyan11"
            background="cyan12"
            href="https://form.jotform.com/240777569453167"
            target="_blank"
          >
            <IconCircle color="cyan6" icon={<i className="ph-duotone ph-lightbulb-filament" />} />

            <Flex stack>
              <Text size="text-l" weight="500" color="white">
                Are you interested in Chain Signatures?
              </Text>
              <Text size="text-s" color="white">
                Fill out our interest form and let us know how we might help!
              </Text>
            </Flex>
          </Card>

          <Card
            gap="l"
            padding="l"
            border="cyan11"
            background="cyan12"
            href="https://t.me/+RXYjlPob_XM5N2Ex"
            target="_blank"
          >
            <IconCircle color="cyan6" icon={<i className="ph-duotone ph-users-three" />} />

            <Flex stack>
              <Text size="text-l" weight="500" color="white">
                Are you looking to connect with other devs?
              </Text>
              <Text size="text-s" color="white">
                Join our NEAR Chain Abstraction Dev Group on Telegram.
              </Text>
            </Flex>
          </Card>
        </Grid>
      </Section>

      <Section gap="2xl" padding="hero" background="cyan9">
        <Flex stack gap="l">
          <Text as="h2" size="text-hero-m">
            Upcoming Events
          </Text>
          <Text size="text-2xl" weight={400} style={{ maxWidth: '808px' }}>
            Join us at conferences, meetups, and more as we gather across the globe to discuss Chain Signatures.
          </Text>
        </Flex>

        <Grid columns="1fr 1fr 1fr" columnsTablet="1fr 1fr" columnsPhone="1fr" gap="l">
          {events.map((event) => (
            <Article
              key={event.title + event.date}
              href={event.url}
              target="_blank"
              src={event.thumbnail}
              alt={event.title}
            >
              <Text size="text-l" weight="500" as="h3">
                {event.title}
              </Text>
              <Flex align="center" gap="l" style={{ minWidth: 0 }}>
                <Flex align="center" gap="s">
                  <i className="ph-bold ph-calendar-blank" style={{ color: 'var(--sand12)' }} />
                  <Text color="sand11" size="text-s" style={{ whiteSpace: 'nowrap' }}>
                    {event.date}
                  </Text>
                </Flex>
                <Flex align="center" gap="s" style={{ minWidth: 0 }}>
                  <i className="ph-bold ph-map-pin-line" style={{ color: 'var(--sand12)' }} />
                  <Text
                    color="sand11"
                    size="text-s"
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
      </Section>
    </>
  );
};
