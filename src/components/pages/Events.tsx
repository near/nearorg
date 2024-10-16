import { Article, Button, Flex, Grid, Section, Text } from '@near-pagoda/ui';
import Link from 'next/link';

import type { MappedEvent } from '@/hooks/useEvents';
import { useEvents } from '@/hooks/useEvents';
import { LUMA_NEAR_CALENDAR_ID } from '@/utils/constants';

import s from './Events.module.scss';

export const Events = () => {
  const { events, hasMoreEvents } = useEvents([LUMA_NEAR_CALENDAR_ID], 7);
  const featuredEvent = events[0] as MappedEvent | undefined;
  const otherEvents = events.filter((event) => event.title !== featuredEvent?.title);

  return (
    <>
      <Section background="white" style={{ textAlign: 'center' }}>
        <div className={s.pattern}>
          <div className={s.patternContent}>
            <Flex gap="l" stack align="center" style={{ maxWidth: '470px' }}>
              <Text as="h1" size="text-hero-l">
                Events
              </Text>

              <Text size="text-l" weight={400}>
                Come together IRL and online, and be part of building the Open Web together.
              </Text>
            </Flex>
          </div>
        </div>
      </Section>

      {featuredEvent && (
        <Section gap="xl" background="white">
          <Text size="text-3xl" weight="500">
            Upcoming Event
          </Text>

          <Link className={s.coverCard} href={featuredEvent.url} target="_blank">
            <div className={s.coverCardImage}>
              <img src={featuredEvent.thumbnail} alt={featuredEvent.title} />
            </div>

            <Flex stack>
              <Text as="h3" clampLines={3} size="text-2xl" weight="500">
                {featuredEvent.title}
              </Text>

              <Text clampLines={7}>{featuredEvent.description}</Text>

              <Flex align="center" gap="l" style={{ minWidth: 0 }}>
                <Flex align="center" gap="s">
                  <i className="ph-bold ph-calendar-blank" />
                  <Text color="sand11" size="text-s" style={{ whiteSpace: 'nowrap' }}>
                    {featuredEvent.date}
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
                    {featuredEvent.location}
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Link>
        </Section>
      )}

      {otherEvents.length > 0 && (
        <Section gap="2xl" padding="hero" background="white">
          <Flex gap="l" align="center" justify="space-between">
            <Text size="text-2xl" weight="500">
              Our Events
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

          <Grid columns="1fr 1fr 1fr" columnsTablet="1fr 1fr" columnsPhone="1fr" gap="l">
            {otherEvents.map((event) => {
              return (
                <Article key={event.title} href={event.url} target="_blank" src={event.thumbnail} alt={event.title}>
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
        </Section>
      )}

      {otherEvents.length === 0 && (
        <Section background="white" style={{ textAlign: 'center' }}>
          <Flex stack gap="l" align="center">
            <Text size="text-2xl" weight="500">
              New events coming soon!
            </Text>
            <Text size="text-l" weight={400}>
              Subscribe to our Luma calendar to stay up to date with our events.
            </Text>

            <Button
              label="Subscribe"
              variant="primary"
              size="large"
              href="https://lu.ma/NEAR-community"
              target="_blank"
            />
          </Flex>
        </Section>
      )}

      <Section padding="hero" background="violet-brand">
        <Flex stack gap="l" align="center" style={{ textAlign: 'center' }}>
          <Text size="text-2xl" weight="500">
            Hosting an event?
          </Text>

          <Text size="text-l" weight={400} style={{ maxWidth: '808px' }}>
            Do you want your NEAR community event posted here? Submit your event details via Luma to be considered.
          </Text>

          <Button
            label="Submit Event"
            variant="primary"
            size="large"
            href="https://lu.ma/NEAR-community"
            target="_blank"
          />
        </Flex>
      </Section>
    </>
  );
};
