import { Button, Card, Flex, Grid, IconCircle, Pattern, Section, Text } from '@near-pagoda/ui';

const papersDocs = [
  {
    name: 'The NEAR White Paper',
    description:
      'This document describes the approach NEAR takes to designing and implementing the core technology of its system.',
    icon: 'ph-file-doc',
    url: '/papers/the-official-near-white-paper',
    target: '_blank',
  },
  {
    name: 'Nightshade',
    description:
      'This document outlines the general approach to blockchain sharding, the major problems that need to be overcome, including state validity and data availability problems, and presents Nightshade, the solution NEAR Protocol is built upon that addresses those issues.',
    icon: 'ph-file-doc',
    url: '/papers/nightshade',
    target: '_blank',
  },
  {
    name: 'Doomslug',
    description:
      'Doomslug: block confirmation with single round of communication, and a finality gadget with guaranteed liveness',
    icon: 'ph-file-doc',
    url: '/papers/doomslug',
    target: '_blank',
  },
];

export const Papers = () => {
  return (
    <>
      <Section background="cyan9" style={{ textAlign: 'center' }}>
        <Pattern>
          <Flex gap="l" stack align="center">
            <Text as="h1" size="text-hero-l">
              Papers
            </Text>

            <Text size="text-l" weight={400}>
              Join us as we dive deep into our technology.
            </Text>
          </Flex>
        </Pattern>
      </Section>

      <Section gap="2xl" padding="hero" background="amber2">
        <Grid columns="1fr 1fr 1fr" columnsTablet="1fr 1fr" columnsPhone="1fr" gap="l">
          {papersDocs.map((item) => (
            <Card
              border="sand11"
              background="amber2"
              gap="l"
              padding="l"
              key={item.name}
              href={item.url}
              target={item.target}
              rel="noopener noreferrer"
            >
              <IconCircle icon={<i className={`ph-duotone ${item.icon}`} />} />

              <Flex stack>
                <Text size="text-l" weight="500">
                  {item.name}
                </Text>
                <Text size="text-s">{item.description}</Text>
              </Flex>
            </Card>
          ))}
        </Grid>
      </Section>

      <Section padding="hero" background="cyan9">
        <Flex stack gap="xl" align="center" style={{ textAlign: 'center' }}>
          <Flex stack align="center" style={{ textAlign: 'center' }}>
            <Text size="text-3xl" weight="500">
              The blockchain for everyone
            </Text>

            <Text size="text-l" weight={400} style={{ maxWidth: '592px' }}>
              Blockchain has never been easier. Create your account and join a thriving community of visionaries. Help
              build a new Internet, where everyone counts.
            </Text>
          </Flex>

          <Button href="https://docs.near.org/" target="_blank" label="Read Docs" variant="primary" size="large" />
        </Flex>
      </Section>
    </>
  );
};
