/* eslint-disable @next/next/no-img-element */

import { Container } from '../lib/Container';
import { Flex } from '../lib/Flex';
import { Pattern, PatternContent } from '../lib/Pattern';
import { Section } from '../lib/Section';
import { H1, Text } from '../lib/Text';
import { Wrapper } from '../lib/Wrapper';

export const NearAI = () => {
  return (
    <Wrapper>
      <Section $backgroundColor="#9797FF" style={{ padding: '72px 0' }}>
        <Container $center>
          <Pattern style={{ minHeight: '200px' }}>
            <PatternContent>
              <Flex $gap="32px" $direction="column" $alignItems="center" style={{ margin: '2rem' }}>
                <H1>NEAR AI</H1>

                <Text $size="text-l" $mobileSize="text-base">
                  NEAR AI: Digital self-sovereignty for the creator economy.
                </Text>
              </Flex>
            </PatternContent>
          </Pattern>
        </Container>
      </Section>
    </Wrapper>
  );
};
