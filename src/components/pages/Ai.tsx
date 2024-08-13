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
    url: 'https://www.hzn.xyz/hzn',
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
            AI x Web3 Stack
          </Text>
          <Text size="text-2xl" weight={400} style={{ maxWidth: '808px' }}>
            Bringing AI and Web3 together to enable a user-owned internet that guarantees privacy and ownership of data
            and assets, where everyone can be a builder.
          </Text>
        </Flex>

        <Flex stack>
          <img src="/images/ai/ai-stack.png" alt="ai-stack" />
        </Flex>

        <LogoLinks label="Ecosystem" logos={ecosystemTeams} />
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
