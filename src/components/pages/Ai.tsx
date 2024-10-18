import { Article, Button, Card, Flex, Grid, IconCircle, Section, Text } from '@near-pagoda/ui';

import { useEvents } from '@/hooks/useEvents';
import { NEAR_AI_URL } from '@/utils/constants';
import { LUMA_NEAR_AI_CALENDAR_ID, LUMA_NEAR_HZN_CALENDAR_ID } from '@/utils/constants';

import { LogoLinks } from '../LogoLinks';
import s from './Ai.module.scss';

const ecosystemTeams = [
  {
    url: 'https://www.bitte.ai',
    name: 'Bitte',
    image: '/images/ai/bitte.png',
    height: '28px',
  },
  {
    url: 'https://cosmose.ai',
    name: 'Cosmose',
    image: '/images/ai/cosmose.png',
    height: '28px',
  },
  {
    url: 'https://www.exabits.ai',
    name: 'Exabits',
    image: '/images/ai/exabits.png',
    height: '28px',
  },
  {
    url: 'https://hyperbolic.xyz',
    name: 'Hyperbolic',
    image: '/images/ai/hyperbolic.png',
    height: '28px',
  },
  {
    url: 'https://jutsu.ai',
    name: 'Jutsu',
    image: '/images/ai/jutsu.png',
    height: '22px',
  },
  {
    url: 'https://www.masa.ai',
    name: 'Masa',
    image: '/images/ai/masa.png',
    height: '28px',
  },
  {
    url: 'https://mizu.global',
    name: 'Mizu',
    image: '/images/ai/mizu.png',
    height: '28px',
  },
  {
    url: 'https://nevermined.io',
    name: 'Nevermined',
    image: '/images/ai/nevermined.png',
    height: '28px',
  },
  {
    url: 'https://nillion.com',
    name: 'Nillion',
    image: '/images/ai/nillion.png',
    height: '28px',
  },
  {
    url: 'https://cryptopond.xyz',
    name: 'Pond',
    image: '/images/ai/pond.png',
    height: '28px',
  },
  {
    url: 'https://www.ringfence.ai',
    name: 'Ringfence',
    image: '/images/ai/ringfence.png',
    height: '28px',
  },
];

const getInvolvedItems = [
  {
    name: 'Are you an early stage AI Founder?',
    description: 'Apply for the next NEAR Horizon AI Incubator cohort.',
    icon: 'ph-lightbulb-filament',
    url: 'https://www.hzn.xyz',
    target: '_blank',
  },
  {
    name: 'Are you interested in a partnership with us?',
    description: 'Get in touch with us to discuss!',
    icon: 'ph-handshake',
    url: 'https://airtable.com/appc0ZVhbKj8hMLvH/pagsVjkk5LZ66MbJm/form',
    target: '_blank',
  },
  {
    name: 'Are you an AI researcher?',
    description: 'Check out the NEAR AI R&D.',
    icon: 'ph-magnifying-glass',
    url: NEAR_AI_URL,
    target: '_blank',
  },
  {
    name: 'Just want to learn more about User-Owned AI?',
    description: 'Check out NEAR AI Office Hours.',
    icon: 'ph-video',
    url: 'https://www.youtube.com/playlist?list=PL9tzQn_TEuFWMuPiQOXhaE5lpOTnxLPZY',
    target: '_blank',
  },
];

const developerResources = [
  {
    name: 'Build an on chain agent plugin with Bitte',
    icon: 'ph-book-open-text',
    url: 'https://docs.bitte.ai/agents/introduction',
    target: '_blank',
  },
  {
    name: 'Yield/Resume Functionality on NEAR Smart Contracts to build agents',
    icon: 'ph-github-logo',
    url: 'https://github.com/gagdiez/yield-resume',
    target: '_blank',
  },
  {
    name: 'PyNEAR Library',
    icon: 'ph-github-logo',
    url: 'https://github.com/pvolnov/py-near',
    target: '_blank',
  },
  {
    name: 'Lower Level Python Library',
    icon: 'ph-github-logo',
    url: 'https://github.com/kevinheavey/pyonear',
    target: '_blank',
  },
  {
    name: 'Using NEAR as a DA Layer',
    icon: 'ph-github-logo',
    url: 'https://github.com/Nuffle-Labs/data-availability',
    target: '_blank',
  },
];

const news = [
  {
    name: 'User owned AI is NEAR',
    image: '/images/ai/news/user-owned-ai.png',
    url: 'https://pages.near.org/blog/user-owned-ai-is-near/',
  },
  {
    name: 'NEAR AI Announcement',
    image: '/images/ai/news/announcement.jpeg',
    url: 'https://x.com/near_ai/status/1803164313122652192',
  },
  {
    name: 'Opening AI with Funding on Potlock',
    image: '/images/ai/news/potlock-funding.webp',
    url: 'https://blog.potlock.org/crafting-the-future-of-democratized-ai-through-public-goods-funding-95c3a04fd7ea',
  },
  {
    name: 'NEAR Foundation Launches Incubation Program to Build Infrastructure for User-Owned AI',
    image: '/images/ai/news/near-ai-horizon.png',
    url: 'https://pages.near.org/blog/near-foundation-launches-ai-incubation-program/',
  },
  {
    name: 'User Owned AI Stack',
    image: '/images/ai/news/user-owned-ai-stack.png',
    url: 'https://x.com/ilblackdragon/status/1802996246841327932',
  },
  {
    name: 'NEAR at NVIDIA GTC 2024',
    image: '/images/ai/news/nvidia.webp',
    url: 'https://pages.near.org/blog/nvidia-gtc-2024/',
  },
  {
    name: 'Announcing AI-PGF',
    image: '/images/ai/news/ai-pgf-grants.webp',
    url: 'https://paragraph.xyz/@potlock/ai-pgf-building-driverless-grants',
  },
  {
    name: 'NEAT Partners with the Graph',
    image: '/images/ai/news/neat-graph-partners.png',
    url: 'https://medium.com/nearprotocol/neat-partners-with-the-graph-to-build-decentralized-indexer-network-for-ai-on-near-1b0b9f2d469b',
  },
];

export const Ai = () => {
  const { events, hasMoreEvents } = useEvents([LUMA_NEAR_AI_CALENDAR_ID, LUMA_NEAR_HZN_CALENDAR_ID]);
  return (
    <>
      <section className={s.aiSection}>
        <div className={s.aiContainer}>
          <div className={s.aiPattern}>
            <div className={s.aiPatternContent}>
              <Flex gap="l" stack justify="center" align="center">
                <h1 className={s.heroText}>
                  User -<br /> Owned
                </h1>
                <div className={s.heroImage} />
                <Text size="text-l" weight={400}>
                  The intersection of AI x Web3 is NEAR
                </Text>
                <Flex wrap align="center" justify="center">
                  <Button
                    href="https://airtable.com/appc0ZVhbKj8hMLvH/pagsVjkk5LZ66MbJm/form"
                    target="_blank"
                    label="Work with us"
                    variant="secondary"
                    fill="outline"
                    size="large"
                  />
                  <Button href={NEAR_AI_URL} target="_blank" label="NEAR AI R&D" variant="primary" size="large" />
                </Flex>
              </Flex>
            </div>
          </div>
        </div>
      </section>

      <Section background="amber2" padding="hero" gap="2xl">
        <Flex stack gap="l">
          <Text as="h2" size="text-hero-m">
            NEAR is the home for AI x Web3 Builders
          </Text>
          <Text size="text-2xl" weight={400} style={{ maxWidth: '808px' }}>
            Whether {`it's`} expertise, mindshare, adoption, developer experience, AI infrastructure, institutional
            support, funding, or the mission of supporting user-owned AI, NEAR Protocol is becoming the go-to choice for
            those building at the intersection of AI and Web3.
          </Text>
        </Flex>

        <Flex stack gap="l">
          <Text as="h3">The Origin Story</Text>
          <Text style={{ maxWidth: '808px' }}>
            Illia Polosukhin co-founded{' '}
            <a style={{ color: 'var(--violet8)', fontWeight: 600 }} href="https://near.ai" target="_blank">
              NEAR.ai
            </a>{' '}
            as a machine learning company after his time at Google{' '}
            <a
              style={{ color: 'var(--violet8)', fontWeight: 600 }}
              href="https://proceedings.neurips.cc/paper_files/paper/2017/file/3f5ee243547dee91fbd053c1c4a845aa-Paper.pdf"
              target="_blank"
            >
              pioneering Transformers
            </a>
            . The goal of{' '}
            <a style={{ color: 'var(--violet8)', fontWeight: 600 }} href="https://near.ai" target="_blank">
              NEAR.ai
            </a>{' '}
            was to train models using computer science students globally. However, for micro-transactions, no blockchain
            or traditional payment processor worked. As a result, NEAR Protocol was born as a blockchain that scales
            with microtransactions and familiar onboarding, solving the cold-start onramp, key management, and account
            usability problems.
          </Text>
        </Flex>

        <iframe
          src="https://www.youtube.com/embed/cRvtA_-jV2Q?si=M_1mP4QAVKfwUBj4&amp;start=7922"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          style={{ border: 0, aspectRatio: '16 / 9', width: '100%' }}
        ></iframe>

        <Text as="h2" size="text-hero-m">
          {`NEAR’s`} AI Landscape Covers All Infrastructure for Intersection of AI x Web3
        </Text>

        <Flex stack>
          <img src="/images/ai/ai-stack.png" alt="ai-stack" />
        </Flex>

        <LogoLinks label="Ecosystem" logos={ecosystemTeams} />
      </Section>

      <Section background="violet-brand" padding="hero" gap="2xl">
        <Text as="h2" size="text-hero-m">
          NEAR is the Best Chain for Builders
        </Text>

        <Grid columns="1fr 1fr" gap="2xl">
          <Flex stack gap="s">
            <Text as="h4">Top dev experience</Text>
            <Text color="sand12" size="text-s">
              Build smart contracts with Rust, JavaScript or Wasm, or Solidity with Aurora
            </Text>
          </Flex>

          <Flex stack gap="s">
            <Text as="h4">Onboard and abstract existing user base</Text>
            <Text color="sand12" size="text-s">
              Create accounts for existing user base & Pay for transaction on behalf of users with progressive self
              custody
            </Text>
          </Flex>

          <Flex stack gap="s">
            <Text as="h4">Multi-chain account abstraction</Text>
            <Text color="sand12" size="text-s">
              Leverage NEAR as infrastructure to interact with assets on any chain
            </Text>
          </Flex>

          <Flex stack gap="s">
            <Text as="h4">Data availability layer</Text>
            <Text color="sand12" size="text-s">
              Cheapest in the industry and trusted by world class rollups{' '}
              <a
                href="http://nearmodular.com"
                target="_blank"
                style={{ fontWeight: 600, color: 'currentcolor', textDecoration: 'underline' }}
              >
                nearmodular.com
              </a>
            </Text>
          </Flex>
        </Grid>
      </Section>

      <Section background="black" padding="hero" gap="2xl">
        <Flex stack gap="l">
          <Text as="h2" size="text-hero-m" color="white">
            Get Involved
          </Text>
          <Text size="text-2xl" color="white" weight={400} style={{ maxWidth: '808px' }}>
            Interested in joining the User-Owned AI movement? Find ways to get in touch below.
          </Text>
        </Flex>

        <Grid columns="1fr 1fr" columnsPhone="1fr" gap="l">
          {getInvolvedItems.map((item) => (
            <Card
              background="black"
              border="sand11"
              padding="l"
              gap="l"
              href={item.url}
              target={item.target}
              key={item.name}
            >
              <IconCircle icon={<i className={`ph-duotone ${item.icon}`} />} />

              <Flex stack>
                <Text size="text-xl" weight="500" color="white">
                  {item.name}
                </Text>
                <Text size="text-s" color="white">
                  {item.description}
                </Text>
              </Flex>
            </Card>
          ))}
        </Grid>
      </Section>

      <Section background="sand12" padding="hero" gap="2xl">
        <Flex align="center" justify="space-between">
          <Text as="h2" size="text-hero-m" color="white">
            NEAR AI Developer Resources
          </Text>
        </Flex>

        <Grid columns="1fr 1fr" columnsPhone="1fr" gap="l">
          {developerResources.map((item) => (
            <Card background="sand12" border="sand11" gap="l" href={item.url} target={item.target} key={item.name}>
              <Flex align="center">
                <div style={{ flexShrink: 0 }}>
                  <IconCircle icon={<i className={`ph-duotone ${item.icon}`} />} />
                </div>

                <Text size="text-l" weight="500" color="white">
                  {item.name}
                </Text>
              </Flex>
            </Card>
          ))}
        </Grid>
      </Section>

      <Section background="white" padding="hero" gap="2xl">
        <Flex align="center" justify="space-between">
          <Text as="h2" size="text-hero-m">
            NEAR AI News
          </Text>
        </Flex>

        <Grid columns="1fr 1fr 1fr" columnsTablet="1fr 1fr" columnsPhone="1fr" gap="xl">
          {news.length > 0 ? (
            news.map((item) => (
              <Article key={item.url} href={item.url} target="_blank" src={item.image} alt={item.name}>
                <Text color="sand12" size="text-l" weight="500" as="h3">
                  {item.name}
                </Text>
              </Article>
            ))
          ) : (
            <Text color="sand12" size="text-l" weight="500">
              No recent news
            </Text>
          )}
        </Grid>
      </Section>

      <Section background="violet-brand" padding="hero" gap="2xl">
        <Flex stack gap="l">
          <Flex align="center" justify="space-between">
            <Text as="h2" size="text-hero-m">
              Upcoming NEAR AI Events
            </Text>
            {hasMoreEvents && (
              <Button href="https://lu.ma/edgeAGI" target="_blank" label="View All" variant="secondary" size="small" />
            )}
          </Flex>
          <Text size="text-2xl" weight="400" style={{ maxWidth: '808px' }}>
            Join us at conferences, meetups, and more as we gather across the globe to discuss the future of User-Owned
            AI.
          </Text>
        </Flex>

        <Grid columns="1fr 1fr 1fr" columnsTablet="1fr 1fr" columnsPhone="1fr" gap="l">
          {events.length > 0 ? (
            events.map((event) => (
              <Article
                key={event.title + event.date}
                href={event.url}
                target="_blank"
                src={event.thumbnail}
                alt={event.title}
              >
                <Text color="sand12" size="text-l" weight="500" as="h3">
                  {event.title}
                </Text>
                <Flex align="center" gap="l" style={{ minWidth: 0 }}>
                  <Flex align="center" gap="s">
                    <i className="ph-bold ph-calendar-blank" style={{ color: 'var(--sand12)' }} />
                    <Text color="sand12" size="text-s" style={{ whiteSpace: 'nowrap' }}>
                      {event.date}
                    </Text>
                  </Flex>
                  <Flex align="center" gap="s" style={{ minWidth: 0 }}>
                    <i className="ph-bold ph-map-pin-line" style={{ color: 'var(--sand12)' }} />
                    <Text
                      color="sand12"
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
            ))
          ) : (
            <Text color="sand12" size="text-l" weight="500">
              No upcoming events
            </Text>
          )}
        </Grid>
      </Section>
    </>
  );
};
