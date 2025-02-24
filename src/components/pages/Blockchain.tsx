import { Button, Card, ContentWithImage, Flex, Grid, IconCircle, Pattern, Section, Text } from '@near-pagoda/ui';

const communityItems = [
  {
    name: 'Validators',
    description:
      'Run your own node or chunk validator and become a part of a decentralized community safeguarding the protocol.',
    icon: 'ph-tree-structure',
    url: 'https://docs.near.org/concepts/basics/validators',
    target: '_blank',
  },
  {
    name: 'NEAR Enhancement Proposals',
    description:
      'Engage in discussions about changes to the protocol’s specifications and standards. Share your voice in shaping NEAR’s future.',
    icon: 'ph-chats-circle',
    url: 'https://github.com/near/NEPs',
    target: '_blank',
  },
  {
    name: 'Nightshade 2.0',
    description: 'Introducing Stateless Validation and Greater Scalability',
    icon: 'ph-map-trifold',
    url: '/blog/nightshade-2-launches-on-near-mainnet-introducing-stateless-validation',
    target: '_blank',
  },
];

const images = {
  illustrations: {
    developers: 'bafkreiaccoujoiwowiypzjyobdqyfeqweu32htcswc3ojvnesvtwfs5acm',
    endUsers: 'bafkreifew3ibskmcxicoa7bffleekg6kn3cwswyg5ht5shifbii6elwp2a',
    technicalMarvel: 'bafkreieqsmwsffgrodbek3gbtjvxtwspkenesl6fivzrblxzojclba6dfa',
  },
};

function returnImageSrc(cfid: string) {
  return `/images/blockchain/${cfid}.png`;
}

export const Blockchain = () => {
  return (
    <>
      <Section background="green-brand" style={{ textAlign: 'center' }}>
        <Pattern>
          <Flex gap="l" stack align="center">
            <Text as="h1" size="text-hero-l">
              The blockchain built for an open web
            </Text>

            <Text size="text-l" weight={400}>
              Created with simplicity in mind. NEAR is built from the ground up to be performant, secure, scalable, and
              eco-friendly.
            </Text>
          </Flex>
        </Pattern>
      </Section>

      <Section background="amber2" gap="2xl" padding="hero">
        <Flex stack gap="l">
          <Text as="h2" size="text-hero-m">
            NEAR, the blockchain for end-users
          </Text>
          <Text weight={400} size="text-2xl" style={{ maxWidth: '808px' }}>
            NEAR brings users to the main stage, setting up Web3 for mass adoption.
          </Text>
        </Flex>

        <ContentWithImage
          src={returnImageSrc(images.illustrations.endUsers)}
          imageSide="left"
          alt="A line drawing of a user avatar and the NEAR logo set behind the Create Account screen from FastAuth"
        >
          <Flex stack gap="xl">
            <Flex stack>
              <Text size="text-xl" weight="500">
                Named addresses
              </Text>
              <Text>
                Ditch the random numbers and embrace user-friendly addresses that are easy to recall. Become
                {`'yourself.near'`}.
              </Text>
            </Flex>

            <Flex stack>
              <Text size="text-xl" weight="500">
                Unique key stream
              </Text>
              <Text>
                Accounts support multiple keys, each with distinct permissions. Give apps access to your account,
                ensuring your funds remain secure.
              </Text>
            </Flex>

            <Flex stack>
              <Text size="text-xl" weight="500">
                Inexpensive, blazing fast, and reliable
              </Text>
              <Text>
                Every day more than 1M transactions are completed, with an avg. block time of 1.2 second and an avg. fee
                of $0.0001.
              </Text>
            </Flex>

            <div>
              <Button
                href="https://dev.near.org"
                target="_blank"
                label="Start Building"
                variant="secondary"
                fill="outline"
                size="large"
              />
            </div>
          </Flex>
        </ContentWithImage>

        <Flex stack gap="l">
          <Text as="h2" size="text-hero-m">
            NEAR, the blockchain for developers
          </Text>
          <Text size="text-2xl" style={{ maxWidth: '808px' }}>
            NEAR empowers developers to build open web apps and onboard users to Web3.
          </Text>
        </Flex>

        <ContentWithImage
          src={returnImageSrc(images.illustrations.developers)}
          imageSide="right"
          alt="A line drawing of two diamonds with arrows pointing toward each other set behind a console window with a code snippet"
        >
          <Flex stack gap="xl">
            <Flex stack>
              <Text size="text-xl" weight="500">
                Smart contracts
              </Text>
              <Text>
                {`NEAR's`} WebAssembly runtime lets you craft smart contracts using well-known languages such as
                Javascript and Rust.
              </Text>
            </Flex>

            <Flex stack>
              <Text size="text-xl" weight="500">
                Built-in account abstraction
              </Text>
              <Text>Cover gas fees for your users using built-in meta-transactions.</Text>
            </Flex>

            <Flex stack>
              <Text size="text-xl" weight="500">
                Built-in developer incentive
              </Text>
              <Text>Every time code runs on a smart contract, the contract developer earns 30% of the burned gas.</Text>
            </Flex>

            <div>
              <Button
                href="https://dev.near.org"
                target="_blank"
                label="Start Building"
                variant="secondary"
                fill="outline"
                size="large"
              />
            </div>
          </Flex>
        </ContentWithImage>
      </Section>

      <Section background="black" gap="2xl" padding="hero">
        <Flex stack gap="l">
          <Text as="h2" size="text-hero-m" color="white">
            NEAR, a technical marvel
          </Text>
          <Text weight={400} size="text-2xl" color="white" style={{ maxWidth: '808px' }}>
            Built on years of research, NEAR&apos;s efficient and robust protocol stands as a true marvel of modern
            technology.
          </Text>
        </Flex>

        <ContentWithImage
          src={returnImageSrc(images.illustrations.technicalMarvel)}
          imageSide="left"
          alt="A line drawing of a leaf, a flower, and two data towers all interconnected"
        >
          <Flex stack gap="xl">
            <Flex stack>
              <Text color="white" size="text-xl" weight="500">
                Horizontal scaling with sharding
              </Text>
              <Text color="white">
                {`NEAR's`} sharded design enables limitless scaling and robust resistance to traffic spikes.
              </Text>
            </Flex>

            <Flex stack>
              <Text color="white" size="text-xl" weight="500">
                Environmentally friendly
              </Text>
              <Text color="white">
                Thanks to its proof-of-stake nature, NEAR consumes in a year the same energy that Bitcoin consumes in 3
                minutes.
              </Text>
            </Flex>

            <Flex stack>
              <Text color="white" size="text-xl" weight="500">
                A chain you can trust
              </Text>
              <Text color="white">10 million blocks created in a span of two years with 100% uptime.</Text>
            </Flex>
          </Flex>
        </ContentWithImage>

        <Flex stack gap="l">
          <Text as="h2" size="text-hero-m" color="white">
            Built for and by the community
          </Text>
          <Text weight={400} size="text-2xl" color="white" style={{ maxWidth: '808px' }}>
            An ever evolving protocol with an active community of contributors. Join us and help shape the future of the
            web.
          </Text>
          <img src="/images/blockchain/nightshade20-blog.png" alt="Nightshade" />
        </Flex>

        <Grid columns="1fr 1fr 1fr" columnsTablet="1fr 1fr" columnsPhone="1fr" gap="l">
          {communityItems.map((item) => (
            <Card
              border="sand11"
              background="black"
              gap="l"
              padding="l"
              href={item.url}
              target={item.target}
              key={item.name}
            >
              <IconCircle icon={<i className={`ph-duotone ${item.icon}`} />} />

              <Flex stack>
                <Text size="text-l" weight="500" color="white">
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

      <Section background="green-brand" gap="xl" padding="hero">
        <Flex stack gap="l" align="center" style={{ textAlign: 'center' }}>
          <Text size="text-3xl" weight="500">
            The blockchain for everyone
          </Text>

          <Text size="text-l" style={{ maxWidth: '592px' }}>
            Blockchain has never been easier. Create your account and join a thriving community of visionaries. Help
            build a new Internet, where everyone counts.
          </Text>
        </Flex>

        <Flex gap="l" wrap align="center" justify="center">
          <Button href="https://dev.near.org" target="_blank" label="Start Building" variant="secondary" size="large" />

          <Button
            href="https://docs.near.org/concepts/welcome"
            target="_blank"
            label="Read Docs"
            variant="primary"
            size="large"
          />
        </Flex>
      </Section>
    </>
  );
};
