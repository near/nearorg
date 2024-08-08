/* eslint-disable @next/next/no-img-element */

import { Article, Button, Card, Flex, Grid, IconCircle, Section, Text } from '@near-pagoda/ui';
import Link from 'next/link';
import styled from 'styled-components';

import { useEvents } from '@/hooks/useEvents';
import { NEAR_AI_URL } from '@/utils/constants';
import { LUMA_NEAR_AI_CALENDAR_ID, LUMA_NEAR_HZN_CALENDAR_ID } from '@/utils/constants';

const HeroText = styled.h1`
  font: var(--text-hero-l);
  color: var(--white);
  text-transform: uppercase;
  letter-spacing: 12.8px;
  text-align: left;
  margin: 0;

  @media (max-width: 1120px) {
    text-align: center;
    font-size: 32px;

    br {
      display: none;
    }
  }

  @media (max-width: 900px) {
    font-size: 48px;
  }

  @media (max-width: 400px) {
    letter-spacing: 6px;
  }
`;

const HeroImage = styled.div`
  background: url('/images/ai/hero-section-mobile.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 354px;

  @media (min-width: 1120px) {
    display: none;
  }

  @media (max-width: 798px) {
    background-position: center;
  }
`;

const AiSection = styled.section`
  background-color: #9797ff;
  background-image: url('/images/ai/hero-section.png');
  background-position: center top;
  background-repeat: no-repeat;
  background-size: 100% 687px;
  overflow: hidden;
  padding: 72px 0;
  position: relative;

  @media (max-width: 900px) {
    padding: var(--section-gap) 24px;
  }

  @media (max-width: 1440px) {
    background-size: 1536px 687px;
  }
  @media (max-width: 1120px) {
    background-image: none;
    padding: 56px 0 36px;
  }

  @media (min-width: 1120px) {
    min-height: 543px;
  }
`;

const AiPattern = styled.div`
  align-items: center;
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAYAAAA8AXHiAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGeSURBVHgB7doxTisxEAbgeY/mvQro6NiSDo6QkpJbcA2OwjWooKQMJ2DpKENJBV7FEYoBeQSIZr9PGk2cItWvsdfZnSBjKHVf6rnUbdD1N8g4K7VX6jhIEaycofaTIEWwcoam0yFYOYe179WiQ7Byhk8+8wnB6munlHNWgmD1tUGyFSYIVl8bJFcOCYLV106s/aBrJ2hNE+qo1GmpRanz2J5aB6X+x/oQv/l+FWz5E/O1iHU4pom0W/u0/uoZahnrgN2VGuv6Jpidl1+o2T5BznkrfKj9MdZT6l9836r+3k2pq1KXMVNz3gpbU7hOmj49AQ7x/lJ0WWsK5xhv2+AYkHQR29vbddDluqFvbNZPQZdg9S07az4gWH3tHZVgJQhW3xjb4XIZyo+Z3nffHN79CZ1gYuXc1b4KEytFsHLGptMhWDlj7Q9BimDlbJ4Ex4AftggHdwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIpXoUVLSWulnzoAAAAASUVORK5CYII=');
  background-position: center top;
  background-repeat: repeat;
  background-size: 75px 75px;
  display: flex;
  min-height: 540px;
  width: 100%;

  @media (min-width: 1120px), (max-width: 600px) {
    background: none;
    min-height: unset;
  }
`;

const AiPatternContent = styled.div`
  align-items: center;
  background: #9797ff;
  display: flex;
  margin: 185px 0 0;
  max-width: 808px;
  min-height: 260px;
  padding: 1rem;

  @media (max-width: 1120px) {
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    padding: 1rem 0;
  }
`;

export const AiContainer = styled.div<{
  $center?: boolean;
  $gap?: string;
}>`
  display: flex;
  max-width: 1224px;
  margin: 0 auto;
  gap: ${(p) => p.$gap ?? 'var(--section-gap)'};
  flex-direction: column;
  align-items: ${(p) => (p.$center ? 'center' : undefined)};
  justify-content: ${(p) => (p.$center ? 'center' : undefined)};
  text-align: ${(p) => (p.$center ? 'center' : undefined)};
`;

const LogoLinks = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding-bottom: var(--gap-l);
  gap: var(--gap-xl);

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
      <AiSection>
        <AiContainer>
          <AiPattern>
            <AiPatternContent>
              <Flex gap="l" stack justify="center" align="center">
                <HeroText>
                  User -<br /> Owned
                </HeroText>

                <HeroImage />

                <Text size="text-l" weight={400}>
                  The intersection of AI x Web3 is NEAR
                </Text>

                <Flex>
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
            </AiPatternContent>
          </AiPattern>
        </AiContainer>
      </AiSection>

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

        <Flex stack gap="xl">
          <Text
            size="text-xs"
            weight="700"
            color="sand11"
            style={{
              textTransform: 'uppercase',
              letterSpacing: '2px',
              padding: '0 24px',
              textAlign: 'center',
            }}
          >
            Ecosystem
          </Text>

          <LogoLinks>
            {ecosystemTeams.map((team) => (
              <Link href={team.url} target="_blank" title={team.name} style={{ height: team.height }} key={team.name}>
                <img src={team.image} alt={team.name} />
              </Link>
            ))}
          </LogoLinks>
        </Flex>
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

      <Section background="violet6" padding="hero" gap="2xl">
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
