/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';
import styled from 'styled-components';

import { useLatestAiEvents } from '@/hooks/useLatestAiEvents';
import { NEAR_AI_URL } from '@/utils/constants';

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

const HeroText = styled(H1)`
  font: var(--text-hero);
  text-transform: uppercase;
  letter-spacing: 12.8px;
  text-align: left;

  @media (max-width: 1120px) {
    text-align: center;
    font-size: 32px;

    br {
      display: none;
    }
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

const AiSection = styled(Section)`
  padding: 72px 0;
  background-image: url('/images/ai/hero-section.png');
  background-size: 100% 687px;
  background-repeat: no-repeat;
  background-position: center top;

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

const AiPattern = styled(Pattern)`
  @media (min-width: 1120px), (max-width: 600px) {
    background: none;
    min-height: unset;
  }
`;

const AiPatternContent = styled(PatternContent)`
  align-items: start;
  margin: 185px 0 0;

  @media (max-width: 1120px) {
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    padding: 1rem 0;
  }
`;

const Teams = styled.div`
  width: 100%;
`;

const LogoLinksWrapper = styled.div`
  margin-top: 40px;
  width: 100%;
  position: relative;
`;

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

const ecosystemTeams = [
  {
    url: 'https://www.bitte.ai',
    name: 'Bitte',
    image: '/images/ai/bitte.png',
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
];

const stackItems = [
  {
    icon: 'ph-wrench',
    text: 'Developer Tooling & Agent Frameworks',
    color: 'var(--violet3)',
  },
  {
    icon: 'ph-lock',
    text: 'Security & Observability',
    color: 'var(--violet4)',
  },
  {
    icon: 'ph-database',
    text: 'Data Platforms',
    color: 'var(--violet5)',
  },
  {
    icon: 'ph-cpu',
    text: 'Compute & Cloud Providers',
    color: 'var(--violet6)',
  },
  {
    icon: 'ph-brain',
    text: 'Model Training & Inference',
    color: 'var(--violet7)',
  },
  {
    icon: 'ph-stack',
    text: 'Foundational Models',
    color: 'var(--violet9)',
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

const Icon = styled.i`
  color: var(--black);
  font-size: 32px;
`;

const StackItem = styled(Flex)<{ $backgroundColor: string }>`
  align-items: center;
  padding: 32px 24px;
  gap: 32px;
  background: ${(p) => p.$backgroundColor};
  border-radius: 8px;
`;

export const Ai = () => {
  const { events } = useLatestAiEvents();
  return (
    <Wrapper>
      <AiSection $backgroundColor="#9797FF">
        <Container $center>
          <AiPattern>
            <AiPatternContent>
              <Flex $gap="32px" $direction="column" $justifyContent="center" $alignItems="center">
                <HeroText style={{ color: 'var(--white)' }}>
                  User -<br /> Owned
                </HeroText>

                <HeroImage />

                <Text $size="text-l" $mobileSize="text-base">
                  The intersection of AI x Web3 is NEAR
                </Text>

                <Flex $gap="24px">
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
        </Container>
      </AiSection>

      <Section $backgroundColor="#F2F1EA">
        <Container>
          <Flex $direction="column" $gap="24px">
            <H2>AI x Web3 Stack</H2>
            <Text $size="text-2xl" $mobileSize="text-l" style={{ maxWidth: '808px' }}>
              Bringing AI and Web3 together to enable a user-owned internet that guarantees privacy and ownership of
              data and assets, where everyone can be a builder.
            </Text>
          </Flex>

          <Flex $direction="column" $gap="12px">
            {stackItems.map((item) => (
              <StackItem $backgroundColor={item.color} key={item.text}>
                <Icon className={`ph-bold ${item.icon}`} />
                <Text $size="text-xl" $weight="500">
                  {item.text}
                </Text>
              </StackItem>
            ))}
          </Flex>

          <Teams>
            <Text
              $size="text-xs"
              $weight="700"
              $color="sand11"
              style={{
                textTransform: 'uppercase',
                letterSpacing: '2px',
                padding: '0 24px',
                textAlign: 'center',
              }}
            >
              Ecosystem
            </Text>

            <LogoLinksWrapper>
              <LogoLinks>
                {ecosystemTeams.map((team) => (
                  <Link
                    href={team.url}
                    target="_blank"
                    title={team.name}
                    style={{ height: team.height }}
                    key={team.name}
                  >
                    <img src={team.image} alt={team.name} />
                  </Link>
                ))}
              </LogoLinks>
            </LogoLinksWrapper>
          </Teams>
        </Container>
      </Section>

      <Section $backgroundColor="#000000">
        <Container>
          <Flex $direction="column" $gap="24px">
            <H2 style={{ color: 'var(--white)' }}>Get Involved</H2>
            <Text $size="text-2xl" $mobileSize="text-l" $color="white" style={{ maxWidth: '808px' }}>
              Interested in joining the User-Owned AI movement? Find ways to get in touch below.
            </Text>
          </Flex>

          <Grid $columns="1fr 1fr" $gap="24px">
            {getInvolvedItems.map((item) => (
              <Card $clickable $dark as="a" href={item.url} target={item.target} key={item.name}>
                <IconCircle>
                  <i className={`ph-duotone ${item.icon}`} />
                </IconCircle>

                <Flex $direction="column" $gap="16px">
                  <Text $size="text-xl" $weight="500" $color="white">
                    {item.name}
                  </Text>
                  <Text $size="text-s" $color="white">
                    {item.description}
                  </Text>
                </Flex>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>

      <Section $backgroundColor="var(--violet6)">
        <Container>
          <Flex $direction="column" $gap="24px">
            <H2>Upcoming NEAR AI Events</H2>
            <Text $size="text-2xl" $mobileSize="text-l" style={{ maxWidth: '808px' }}>
              Join us at conferences, meetups, and more as we gather across the globe to discuss the future of
              User-Owned AI.
            </Text>
          </Flex>

          <Grid $columns="1fr 1fr 1fr" $gap="24px" $mobileGap="48px">
            {events.length > 0 ? (
              events.map((event) => (
                <Article key={event.title + event.date} href={event.url} target="_blank" style={{ minWidth: 0 }}>
                  <ArticleImage>
                    <img src={event.thumbnail} alt={event.title} />
                  </ArticleImage>
                  <Text $color="sand12" $size="text-l" $weight="500" as="h3">
                    {event.title}
                  </Text>
                  <Flex $alignItems="center" $gap="32px" style={{ minWidth: 0 }}>
                    <Flex $alignItems="center" $gap="8px">
                      <i className="ph-bold ph-calendar-blank" style={{ color: 'var(--sand12)' }} />
                      <Text $color="sand12" $size="text-s" style={{ whiteSpace: 'nowrap' }}>
                        {event.date}
                      </Text>
                    </Flex>
                    <Flex $alignItems="center" $gap="8px" style={{ minWidth: 0 }}>
                      <i className="ph-bold ph-map-pin-line" style={{ color: 'var(--sand12)' }} />
                      <Text
                        $color="sand12"
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
              ))
            ) : (
              <Text $color="sand12" $size="text-l" $weight="500">
                No upcoming events
              </Text>
            )}
          </Grid>
        </Container>
      </Section>
    </Wrapper>
  );
};
