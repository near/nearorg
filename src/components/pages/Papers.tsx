import { CtaSection } from '../CtaSection';
import { Card } from '../lib/Card';
import { Container } from '../lib/Container';
import { Flex } from '../lib/Flex';
import { Grid } from '../lib/Grid';
import { IconCircle } from '../lib/IconCircle';
import { Pattern, PatternContent } from '../lib/Pattern';
import { Section } from '../lib/Section';
import { H1, Text } from '../lib/Text';
import { Wrapper } from '../lib/Wrapper';

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
    <Wrapper>
      <Section $backgroundColor="#61E5E2" style={{ padding: '72px 0' }}>
        <Container $center>
          <Pattern>
            <PatternContent>
              <Flex $gap="32px" $direction="column" $alignItems="center">
                <H1>Papers</H1>

                <Text $size="text-l" $mobileSize="text-base">
                  Join us as we dive deep into our technology.
                </Text>
              </Flex>
            </PatternContent>
          </Pattern>
        </Container>
      </Section>

      <Section $backgroundColor="#F2F1EA">
        <Container>
          <Grid $columns="1fr 1fr 1fr" $gap="24px">
            {papersDocs.map((item) => (
              <Card key={item.name} as="a" href={item.url} target={item.target} rel="noopener noreferrer">
                <IconCircle>
                  <i className={`ph-duotone ${item.icon}`} />
                </IconCircle>

                <Flex $direction="column" $gap="16px">
                  <Text $size="text-l" $weight="500">
                    {item.name}
                  </Text>
                  <Text $size="text-s">{item.description}</Text>
                </Flex>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>

      <CtaSection />
    </Wrapper>
  );
};
