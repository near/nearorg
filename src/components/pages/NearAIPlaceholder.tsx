/* eslint-disable @next/next/no-img-element */

import { Container } from '../lib/Container';
import { Section } from '../lib/Section';
import { Text } from '../lib/Text';
import { Wrapper } from '../lib/Wrapper';

export const NearAIPlaceholder = () => {
  return (
    <Wrapper>
      <Section
        $backgroundColor="#9797FF"
        style={{
          padding: '72px 0',
          height: '100vh',
          background: 'linear-gradient(to bottom,transparent,rgb(250, 250, 250)) rgb(210, 219, 220)',
        }}
      >
        <Container $center style={{ height: '100%' }}>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Text $mobileSize="text-base">Coming (back) soon...</Text>
            <Text $mobileSize="text-base" style={{ opacity: '0.5' }}>
              0de65393967d695638c1d0acdb080d878332ff36728d36e0ac4bd5d00e9f44e6
            </Text>
          </div>
        </Container>
      </Section>
    </Wrapper>
  );
};
