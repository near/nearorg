import { Article, Button, Card, Flex, Grid, IconCircle, Pattern, Section, Text } from '@near-pagoda/ui';
import Image from 'next/image';

import type { MappedEvent } from '@/hooks/useEvents';
import { useEvents } from '@/hooks/useEvents';
import { LUMA_NEAR_CALENDAR_ID } from '@/utils/constants';
//import s from './Intents.module.scss';

export const Intents = () => {
  const { events, hasMoreEvents } = useEvents([LUMA_NEAR_CALENDAR_ID], 7);
  const featuredEvent = events[0] as MappedEvent | undefined;
  const otherEvents = events.filter((event) => event.title !== featuredEvent?.title);

  const whyBuildWithIntents = [
    {
      name: 'New possibilities and use cases',
      description:
        'Explore net-new primitives when you combine any intent type with the power of AI agents. Go beyond swaps and reimagine a new type of trading, auction, token and much more. With NEAR Intents, AI assistants can direct other AI agents to take actions for end users, truly combining the powers of AI and the blockchain.',
      icon: 'images/intents/lightbulb.svg',

      target: '_blank',
    },
    {
      name: 'Secure handling of any form of asset',
      description:
        'Transfer, stake, and manage a wide range of assets, including NFTs, FTs, SBTs, non-transferable assets, or any other form of value on any chain with security and compliance in mind.',
      icon: 'images/intents/secure.svg',

      target: '_blank',
    },
    {
      name: 'Open and permissionless',
      description:
        'Decentralized, cross-chain infrastructure lets you build or launch your own solver or new financial products easily.',
      icon: 'images/intents/open.svg',

      target: '_blank',
    },
    {
      name: 'Reliable, fast and smooth experience',
      description:
        'Cross-chain settlement between agents and users happens in seconds, regardless of the native asset chain. Sharded smart contracts and dynamic resharding ensure reliable handling of trillions of agent transactions',
      icon: 'images/intents/shield.svg',

      target: '_blank',
    },
    {
      name: 'Combined liquidity all in one place',
      description:
        'Bridging the gap between DEXs across chains, CEXs, and even outside crypto ensures protocol developers, distribution channels, solvers, ecosystems, or token founders can all participate and innovate',
      icon: 'images/intents/money.svg',

      target: '_blank',
    },
  ];

  const exploreIntents = [
    {
      name: 'NEAR Intents',
      description:
        'NEAR Intents are a new type of transaction that allow information, requests, assets, and actions to be exchanged between AI agents, services, and end users.',
      icon: '/images/intents/near-intents-logo.png',
      url: 'https://app.near-intents.org/',
      target: '_blank',
      aspectRatioWidth: 2000,
      aspectRatioHeight: 512,
    },
    {
      name: 'Solswap',
      description: 'Solana DEX powered by NEAR Intents',
      icon: '/images/intents/sol-swap-logo.png',
      url: 'https://solswap.org/',
      target: '_blank',
      aspectRatioWidth: 1600,
      aspectRatioHeight: 512,
    },
    {
      name: 'dogecoinswap',
      description: 'Swap native NEAR, BTC, SOL, ETH, and more for native DOGE powered by NEAR Intents',
      icon: '/images/intents/doge-swap-logo.png',
      url: 'https://dogecoinswap.org/',
      target: '_blank',
      aspectRatioWidth: 1888,
      aspectRatioHeight: 512,
    },
    {
      name: 'Bitte',
      description: 'Smart accounts with on-chain AI.',
      icon: '/images/intents/bitte.svg',
      url: 'https://bitte.ai',
      target: '_blank',
    },
    {
      name: 'REF Finance',
      description: 'The leading DEX on NEAR',
      icon: '/images/intents/ref.png',
      url: 'https://ref.finance',
      target: '_blank',
    },
    {
      name: 'Burrow Cash',
      description: 'Decentralized lending and borrowing protocol on NEAR',
      icon: '/images/intents/burrows.svg',
      url: 'https://burrow.finance/',
      target: '_blank',
    },
    {
      name: 'Infinex (Coming Soon)',
      description: 'Decentralized exchange platform with seamless, multichain UX and the safest way to get on-chain.',
      icon: '/images/intents/infinex.svg',
      url: 'https://infinex.xyz/',
      target: '_blank',
    },
    {
      name: 'Frax Finance (Coming Soon)',
      description: 'The world’s most innovative decentralized stablecoins and DeFi stablecoin infrastructure',
      icon: '/images/intents/frax.png',
      url: 'https://frax.finance/',
      target: '_blank',
    },
    {
      name: 'Omnilane',
      description: 'Cross-chain RFQ (request-for-quote) protocol',
      icon: '/images/intents/omnilane.png',
      url: 'https://omnilane.xyz/',
      target: '_blank',
    },
    {
      name: 'Atlas Protocol',
      description: 'Bitcoin liquid staking',
      icon: '/images/intents/atlas.png',
      url: 'https://atlasprotocol.com/',
      target: '_blank',
    },
    {
      name: 'Templar Protocol',
      description: 'Chain abstracted money market',
      icon: '/images/intents/templar.svg',
      url: 'https://linktr.ee/templarfi',
      target: '_blank',
    },
    {
      name: 'Covenant Finance',
      description: 'Perpetual debt and fixed income products',
      icon: '/images/intents/covenant.png',
      url: 'https://covenant.finance/',
      target: '_blank',
    },
    {
      name: 'Thunderhood',
      description: 'Leverage trading for memecoins',
      icon: '/images/intents/thunderhood.png',
      url: 'https://testnet.thunderhood.com/home',
      target: '_blank',
    },
    {
      name: 'Delta Trade',
      description: 'Grid trading bot on Telegram',
      icon: '/images/intents/delta.png',
      url: 'https://deltatrade.ai',
      target: '_blank',
    },
    {
      name: 'Allstake',
      description: 'Multi-asset re-staking',
      icon: '/images/intents/allstake.png',
      url: 'https://allstake.io/',
      target: '_blank',
    },
    {
      name: 'Kairo Money',
      description: 'Lending protocol',
      icon: '/images/intents/kairo.png',
      url: '#',
      target: '_blank',
    },
    {
      name: 'Vita Finance',
      description: 'Automated market maker',
      icon: '/images/intents/vita.png',
      url: '#',
      target: '_blank',
    },
    {
      name: 'BitHive',
      description: 'Bitcoin staking with unparalleled security',
      icon: '/images/intents/bithive.svg',
      url: 'https://bithive.fi/',
      target: '_blank',
    },
  ];

  const Roadmap = [
    {
      name: 'NOV 2024',
      description: 'Beta rollout, with support for NEAR, Aurora, Ethereum, and Bitcoin',

      url: '/near/widget/ComponentDetailsPage?src=hack.near/widget/widgets.rank',
    },
    {
      name: 'JAN 2025',
      description: 'Main launch, with support for NEAR, Aurora, Ethereum, Bitcoin, Solana, Arbitrum, Base, TON',

      url: '/near/widget/ComponentDetailsPage?src=ndcplug.near/widget/BOSHACKS.Index',
    },
    {
      name: '2025',
      description: 'Additional intents supported, including AccountFi',

      url: '/near/widget/ComponentDetailsPage?src=nearui.near/widget/index',
    },
  ];

  return (
    <>
      <Section background="white" style={{ textAlign: 'center' }}>
        <Pattern>
          <Flex gap="l" stack align="center">
            <Text as="h1" size="text-hero-l">
              Intents are NEAR
            </Text>

            <Text size="text-l" weight={400}>
              Powering a new era of transactions between AI and the real world.
            </Text>

            <Flex gap="l" wrap align="center" justify="center">
              <Button href="#explore" label="Explore Intents" variant="secondary" fill="outline" size="large" />

              <Button href="#getstarted" label="Get Started" variant="primary" size="large" />
            </Flex>
          </Flex>
        </Pattern>
      </Section>
      <Section gap="2xl" padding="hero" background="black">
        <Card
          background="green-brand"
          padding="l"
          style={{ maxWidth: '1200px', margin: '0 auto', marginTop: '-200px', borderRadius: '50px' }}
        >
          <Flex stack gap="xl">
            <Text as="h2" size="text-hero-m" color="black">
              NEAR Intents are now available as part of the NEAR Protocol.
            </Text>
            <Text size="text-2xl" weight={400} color="black">
              NEAR Intents are a new type of transaction that allow information, requests, assets, and actions to be
              exchanged between AI agents, services, and end users.
            </Text>

            <div
              style={{
                width: '100%',
                aspectRatio: '16/9',
                backgroundColor: '#000000',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                controls
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              >
                <source src="/images/intents/near_intents-launch.mp4" type="video/mp4" />
              </video>
            </div>
          </Flex>
        </Card>
      </Section>

      <Section gap="l" padding="hero" background="black">
        <Card border="green-brand" background="black" padding="l" style={{ borderRadius: '50px' }}>
          <Flex stack gap="l">
            <Text as="h2" size="text-hero-m" color="white">
              Why Build with Intents?
            </Text>
            <Text size="text-2xl" weight={400} color="white">
              Finally, tech that not only unifies liquidity but also brings AI participants together with financial
              services, commerce, and end users in the real world.
            </Text>
          </Flex>

          <Grid columns="1fr 1fr 1fr" columnsTablet="1fr 1fr" columnsPhone="1fr" gap="l">
            {whyBuildWithIntents.map((item) => (
              <Card border="black" background="black" gap="l" padding="l" key={item.name}>
                <Image src={item.icon} alt="Article icon" width={24} height={24} />

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
        </Card>
      </Section>

      <Section gap="2xl" padding="standard" background="black" id="explore">
        <Flex stack gap="l">
          <Text as="h2" size="text-hero-m" color="white">
            Explore NEAR Intents
          </Text>
          <Text size="text-2xl" weight={400} color="white">
            Try cross-chain dApps, wallets, and more that are leveraging NEAR Intents.
          </Text>
        </Flex>

        <Grid columns="1fr 1fr 1fr" columnsTablet="1fr 1fr" columnsPhone="1fr" gap="s">
          {exploreIntents.map((item) => (
            <Card
              border="black"
              background="amber2"
              gap="l"
              padding="l"
              href={item.url}
              target={item.target}
              rel="noopener noreferrer"
              key={item.url}
              style={{ borderRadius: '25px' } as React.CSSProperties}
            >
              <Image
                src={item.icon}
                alt="Article icon"
                width={item.aspectRatioWidth || 100}
                height={item.aspectRatioHeight || 100}
                style={{ height: 100 }}
              />

              <Flex stack>
                <Text size="text-l" weight="500">
                  {item.name}
                </Text>
                <Text size="text-s">{item.description}</Text>
              </Flex>
            </Card>
          ))}
        </Grid>
        <Flex stack gap="l" id="getstarted">
          <Text as="h2" size="text-hero-m" color="white">
            Getting Started
          </Text>
          <Text size="text-2xl" weight={400} color="white" style={{ maxWidth: '808px' }}>
            Everything you need to start building with NEAR Intents.
          </Text>
        </Flex>
        <Grid
          columns="1fr 1fr"
          columnsTablet="1fr"
          columnsPhone="1fr"
          gap="l"
          style={{
            marginTop: '-80px',
            maxWidth: '1000px',
            margin: '-80px auto 0',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          <Card
            border="black"
            background="green-brand"
            gap="l"
            padding="l"
            href="https://docs.near.org/chain-abstraction/intents/overview"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: '100%',
              maxWidth: '600px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Flex gap="m" align="center">
              <IconCircle icon={<i className="ph-duotone ph-book" />} />
              <Text size="text-xl" weight="500" color="black">
                Docs and Examples
              </Text>
            </Flex>
          </Card>

          <Card
            border="black"
            background="green-brand"
            gap="l"
            padding="l"
            href="https://t.me/+RXYjlPob_XM5N2Ex"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: '100%',
              maxWidth: '600px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Flex gap="m" align="center">
              <IconCircle icon={<i className="ph-duotone ph-handshake" />} />
              <Text size="text-xl" weight="500" color="black">
                Are you looking to connect with other devs?
              </Text>
            </Flex>
          </Card>
        </Grid>
      </Section>

      <Section gap="2xl" padding="hero" background="green-brand">
        <Flex stack gap="l">
          <Text as="h2" size="text-hero-m" color="black">
            Roadmap
          </Text>
        </Flex>
        <Grid columns="1fr 1fr 1fr" columnsTablet="1fr 1fr" columnsPhone="1fr" gap="l">
          {Roadmap.map((app) => (
            <Card gap="l" padding="l" border="black" background="green-brand" key={app.name}>
              <Flex align="center" gap="l">
                <div>
                  <Text color="black" size="text-l" weight="500">
                    {app.name}
                  </Text>
                </div>
              </Flex>
              <Text color="black" size="text-s">
                {app.description}
              </Text>
            </Card>
          ))}
        </Grid>
        <Flex gap="l" align="center" justify="space-between">
          <Text size="text-2xl" weight="500">
            Upcoming Events
          </Text>
          {hasMoreEvents && (
            <Button
              href="https://lu.ma/NEAR-community"
              target="_blank"
              label="View All"
              variant="secondary"
              size="small"
            />
          )}
        </Flex>
        {otherEvents.length > 0 && (
          <Grid columns="1fr 1fr 1fr" columnsTablet="1fr 1fr" columnsPhone="1fr" gap="l">
            {otherEvents.map((event) => {
              return (
                <Article key={event.title} src={event.thumbnail} alt={event.title} href={event.url}>
                  <Text color="sand12" size="text-l" weight="500" as="h3">
                    {event.title}
                  </Text>
                  <Flex align="center" gap="l" style={{ minWidth: 0 }}>
                    <Flex align="center" gap="s">
                      <i className="ph-bold ph-calendar-blank" />
                      <Text color="sand11" size="text-s" style={{ whiteSpace: 'nowrap' }}>
                        {event.date}
                      </Text>
                    </Flex>
                    <Flex align="center" gap="s" style={{ minWidth: 0 }}>
                      <i className="ph-bold ph-map-pin-line" />
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
              );
            })}
          </Grid>
        )}
      </Section>
    </>
  );
};
