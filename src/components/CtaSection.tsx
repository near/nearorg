import { CREATE_ACCOUNT_URL } from '@/utils/constants';

import { Button } from './lib/Button';
import { Container } from './lib/Container';
import { Flex } from './lib/Flex';
import { Section } from './lib/Section';
import { Text } from './lib/Text';

type Props = {
  backgroundColor?: string;
};

export const CtaSection = ({ backgroundColor = 'rgb(97, 229, 226)' }: Props) => {
  return (
    <Section $backgroundColor={backgroundColor}>
      <Container>
        <Flex $direction="column" $gap="50px" $alignItems="center">
          <Flex $direction="column" $gap="20px" $alignItems="center" style={{ textAlign: 'center' }}>
            <Text $size="text-3xl" $weight="500">
              The blockchain for everyone
            </Text>

            <Text $size="text-l" $mobileSize="text-l" style={{ maxWidth: '592px' }}>
              Blockchain has never been easier. Create your account and join a thriving community of visionaries. Help
              build a new Internet, where everyone counts.
            </Text>
          </Flex>

          <Flex $gap="24px" $wrap="$wrap" $alignItems="center" $justifyContent="center">
            <Button
              href="https://docs.near.org/concepts/welcome"
              target="_blank"
              label="Read Docs"
              variant="primary"
              size="large"
            />
          </Flex>
        </Flex>
      </Container>
    </Section>
  );
};
