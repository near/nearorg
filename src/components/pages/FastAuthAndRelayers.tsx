import { Button, ContentWithImage, Flex, Pattern, Section, Text } from '@near-pagoda/ui';

const images = {
  illustrations: {
    fastAuth: 'bafkreidkr2s4fdnnm4f3xduwgnywyfwes3p6rtmpzac5l6xufpdivdvrva',
    relayers: 'bafkreibtzosgikkencpjv35bjdc2iyz4mwxo7qcb6irnsb4gwiljvshhne',
  },
};

function returnImageSrc(cfid: string) {
  return `/images/fast-auth-and-relayers/${cfid}.png`;
}

export const FastAuthAndRelayers = () => {
  return (
    <>
      <Section background="cyan9" style={{ textAlign: 'center' }}>
        <Pattern>
          <Flex gap="l" stack align="center">
            <Text as="h1" size="text-hero-l">
              Secure & simple onboarding
            </Text>

            <Text size="text-l" weight={400}>
              No seed phrase, no gas, no friction. Bring users on chain in seconds with FastAuth and Relayers.
            </Text>
          </Flex>
        </Pattern>
      </Section>

      <Section gap="2xl" padding="hero" background="amber2">
        <Flex stack gap="l">
          <Text as="h2" size="text-hero-m" style={{ maxWidth: '1016px' }}>
            FastAuth: Web3 applications, familiar login
          </Text>
          <Text size="text-2xl" weight={400} style={{ maxWidth: '808px' }}>
            Creating a crypto wallet is not for everyone. With FastAuth, leverage the power of Web3 without compromising
            on user experience.
          </Text>
        </Flex>

        <ContentWithImage
          src={returnImageSrc(images.illustrations.fastAuth)}
          imageSide="left"
          alt="A line drawing of a key hole and the near logo set behind the FastAuth sign-in window"
        >
          <Flex stack gap="xl">
            <Flex stack>
              <Text size="text-xl" weight="500">
                Familiar login
              </Text>
              <Text>
                Forget recovery phrases, FastAuth seamlessly links your users&apos; emails directly to NEAR accounts.
              </Text>
            </Flex>

            <Flex stack>
              <Text size="text-xl" weight="500">
                One Digital ID
              </Text>
              <Text>
                Your users only need one email for FastAuth account login or recovery across all devices and
                applications.
              </Text>
            </Flex>

            <Flex stack>
              <Text size="text-xl" weight="500">
                Simple & secure
              </Text>
              <Text>
                FastAuth accounts are kept safe through multi-party computation (MPC) on a decentralized network.
              </Text>
            </Flex>

            <div>
              <Button
                href="https://docs.near.org/tools/fastauth-sdk"
                target="_blank"
                label="Read FastAuth Docs"
                variant="secondary"
                fill="outline"
                size="large"
              />
            </div>
          </Flex>
        </ContentWithImage>
      </Section>

      <Section gap="2xl" padding="hero" background="black">
        <Flex stack gap="l">
          <Text as="h2" size="text-hero-m" color="white">
            Relayers: no crypto, no problem
          </Text>
          <Text size="text-2xl" color="white" weight={400} style={{ maxWidth: '808px' }}>
            Obtaining cryptocurrencies to pay for transactions is the main hurdle to Web3 adoption. Use relayers to
            cover costs for your users.
          </Text>
        </Flex>

        <ContentWithImage
          src={returnImageSrc(images.illustrations.relayers)}
          imageSide="right"
          alt="A line drawing of the Relayer pathway starting at the user, to the transaction with the developer, and the developer paying the gas fee to NEAR"
        >
          <Flex stack gap="xl">
            <Flex stack>
              <Text color="white" size="text-xl" weight="500">
                Cover gas for your users
              </Text>
              <Text color="white">
                Let your users make transactions in NEAR without crypto by covering for their gas.
              </Text>
            </Flex>

            <Flex stack>
              <Text color="white" size="text-xl" weight="500">
                Set your limits
              </Text>
              <Text color="white">
                Easily configure a wide array of permissions and expenditure rules to keep your budget in line.
              </Text>
            </Flex>

            <Flex stack>
              <Text color="white" size="text-xl" weight="500">
                Native support
              </Text>
              <Text color="white">
                Relayers are based on meta-transactions, which are built-in at the protocol level.
              </Text>
            </Flex>

            <div>
              <Button
                href="https://github.com/near/pagoda-relayer-rs/tree/main#pagoda-relayer"
                target="_blank"
                label="Read Relayer Docs"
                variant="affirmative"
                size="large"
              />
            </div>
          </Flex>
        </ContentWithImage>
      </Section>

      <Section gap="2xl" padding="hero" background="cyan9">
        <Flex stack gap="xl" align="center">
          <Flex stack align="center" style={{ textAlign: 'center' }}>
            <Text size="text-3xl" weight="500" style={{ maxWidth: '600px' }}>
              Get ready to embrace mass adoption
            </Text>

            <Text size="text-l" weight={400} style={{ maxWidth: '600px' }}>
              No seed phrase, no gas. Bring users on chain in seconds with FastAuth and Relayers.
            </Text>
          </Flex>

          <Flex gap="l" wrap align="center" justify="center">
            <Button
              href="https://docs.near.org/tools/fastauth-sdk"
              target="_blank"
              label="FastAuth"
              variant="secondary"
              size="large"
            />

            <Button
              href="https://github.com/near/pagoda-relayer-rs/tree/main#pagoda-relayer"
              target="_blank"
              label="Relayers"
              variant="primary"
              size="large"
            />
          </Flex>
        </Flex>
      </Section>
    </>
  );
};
