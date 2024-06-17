/* eslint-disable @next/next/no-img-element */

import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import Link from 'next/link';
import styled from 'styled-components';

import { recordMouseEnter } from '@/utils/analytics';

import { Container } from '../../lib/Container';
import { Flex } from '../../lib/Flex';
import { Pattern, PatternContent } from '../../lib/Pattern';
import { Section } from '../../lib/Section';
import { H1, Text } from '../../lib/Text';
import { Wrapper } from '../../lib/Wrapper';

const ContentWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: column;
`;
const Title = styled(H1)`
  color: var(--near-green);
`;

export const NearAIAbout = () => {
  return (
    <ContentWrapper>
      <Section style={{ padding: '20px 0 0 0', color: 'white' }}>
        <Container $center>
          <Pattern style={{ height: '500px', minHeight: '150px' }}>
            <PatternContent style={{ color: 'white' }}>
              <Flex $gap="32px" $direction="column" $alignItems="center" style={{ margin: '2rem' }}>
                <Text $size="text-l" $mobileSize="text-base" style={{ color: 'var(--near-green)' }}>
                  NEAR.AI is an open source R&D effort within the NEAR Foundation, led by NEAR Protocol co-founders Alex
                  Skidanov and Illia Polosukhin.
                </Text>
                <Text $size="text-l" $mobileSize="text-base" style={{ color: 'white', textAlign: 'left' }}>
                  NEAR.AI is building towards Open Source AGI (artificial general intelligence) in 3 phases:
                  <ul>
                    <li>Teaching machines to code: AI Developer</li>
                    <li>Use AI Developer to teach machines to do research: AI Researcher</li>
                    <li>Use AI Researcher to advance science towards AGI that is owned by all</li>
                  </ul>
                </Text>
              </Flex>
            </PatternContent>
          </Pattern>
        </Container>
      </Section>
      <Section style={{ padding: '20px 0 0 0' }}></Section>
    </ContentWrapper>
  );
};
