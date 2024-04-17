import { CREATE_ACCOUNT_URL } from '@/utils/constants';

import { Button } from '../lib/Button';
import { Card } from '../lib/Card';
import { Container } from '../lib/Container';
import { ContentWithImage } from '../lib/ContentWithImage';
import { Flex } from '../lib/Flex';
import { Grid } from '../lib/Grid';
import { IconCircle } from '../lib/IconCircle';
import { Pattern, PatternContent } from '../lib/Pattern';
import { Section } from '../lib/Section';
import { H1, H2, Text } from '../lib/Text';
import { Wrapper } from '../lib/Wrapper';

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
    name: 'Roadmap',
    description: 'Follow the public roadmap and contribute to building the ecosystem',
    icon: 'ph-map-trifold',
    url: '/blog/near-q2-protocol-roadmap-update',
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
    <Wrapper>
      <Section $backgroundColor="#00EC97" style={{ padding: '72px 0' }}>
        <Container $center>
          <Pattern>
            <PatternContent>
              <Flex $gap="32px" $direction="column" $alignItems="center">
                <H1>The blockchain built for an open web</H1>

                <Text $size="text-l" $mobileSize="text-base">
                  Created with simplicity in mind. NEAR is built from the ground up to be performant, secure, scalable,
                  and eco-friendly.
                </Text>
              </Flex>
            </PatternContent>
          </Pattern>
        </Container>
      </Section>

      <Section $backgroundColor="#F2F1EA">
        <Container>
          <Flex $direction="column" $gap="24px">
            <H2>NEAR, the blockchain for end-users</H2>
            <Text $size="text-2xl" $mobileSize="text-l" style={{ maxWidth: '808px' }}>
              NEAR brings users to the main stage, setting up Web3 for mass adoption.
            </Text>
          </Flex>

          <ContentWithImage
            src={returnImageSrc(images.illustrations.endUsers)}
            imageSide="left"
            alt="A line drawing of a user avatar and the NEAR logo set behind the Create Account screen from FastAuth"
          >
            <Flex $direction="column" $gap="60px">
              <Flex $direction="column" $gap="24px">
                <Text $size="text-xl" $mobileSize="text-l" $weight="500">
                  Named addresses
                </Text>
                <Text>
                  Ditch the random numbers and embrace user-friendly addresses that are easy to recall. Become
                  {`'yourself.near'`}.
                </Text>
              </Flex>

              <Flex $direction="column" $gap="24px">
                <Text $size="text-xl" $mobileSize="text-l" $weight="500">
                  Unique key stream
                </Text>
                <Text>
                  Accounts support multiple keys, each with distinct permissions. Give apps access to your account,
                  ensuring your funds remain secure.
                </Text>
              </Flex>

              <Flex $direction="column" $gap="24px">
                <Text $size="text-xl" $mobileSize="text-l" $weight="500">
                  Inexpensive, blazing fast, and reliable
                </Text>
                <Text>
                  Every day more than 1M transactions are completed, with an avg. block time of 1.2 second and an avg.
                  fee of $0.0001.
                </Text>
              </Flex>

              <div>
                <Button
                  href={CREATE_ACCOUNT_URL}
                  label="Create Account"
                  variant="secondary"
                  fill="outline"
                  size="large"
                />
              </div>
            </Flex>
          </ContentWithImage>

          <Flex $direction="column" $gap="24px">
            <H2>NEAR, the blockchain for developers</H2>
            <Text $size="text-2xl" $mobileSize="text-l" style={{ maxWidth: '808px' }}>
              NEAR empowers developers to build open web apps and onboard users to Web3.
            </Text>
          </Flex>

          <ContentWithImage
            src={returnImageSrc(images.illustrations.developers)}
            imageSide="right"
            alt="A line drawing of two diamonds with arrows pointing toward each other set behind a console window with a code snippet"
          >
            <Flex $direction="column" $gap="60px">
              <Flex $direction="column" $gap="24px">
                <Text $size="text-xl" $mobileSize="text-l" $weight="500">
                  Smart contracts
                </Text>
                <Text>
                  {`NEAR's`} WebAssembly runtime lets you craft smart contracts using well-known languages such as
                  Javascript and Rust.
                </Text>
              </Flex>

              <Flex $direction="column" $gap="24px">
                <Text $size="text-xl" $mobileSize="text-l" $weight="500">
                  Built-in account abstraction
                </Text>
                <Text>Cover gas fees for your users using built-in meta-transactions.</Text>
              </Flex>

              <Flex $direction="column" $gap="24px">
                <Text $size="text-xl" $mobileSize="text-l" $weight="500">
                  Built-in developer incentive
                </Text>
                <Text>
                  Every time code runs on a smart contract, the contract developer earns 30% of the burned gas.
                </Text>
              </Flex>

              <div>
                <Button
                  href="https://docs.near.org/concepts/welcome"
                  target="_blank"
                  label="Start Building"
                  variant="secondary"
                  fill="outline"
                  size="large"
                />
              </div>
            </Flex>
          </ContentWithImage>
        </Container>
      </Section>

      <Section $backgroundColor="#000000">
        <Container>
          <Flex $direction="column" $gap="24px">
            <H2 style={{ color: 'var(--white)' }}>NEAR, a technical marvel</H2>
            <Text $size="text-2xl" $mobileSize="text-l" color="white" style={{ maxWidth: '808px' }}>
              Built on years of research, NEAR&apos;s efficient and robust protocol stands as a true marvel of modern
              technology.
            </Text>
          </Flex>

          <ContentWithImage
            src={returnImageSrc(images.illustrations.technicalMarvel)}
            imageSide="left"
            alt="A line drawing of a leaf, a flower, and two data towers all interconnected"
          >
            <Flex $direction="column" $gap="60px">
              <Flex $direction="column" $gap="24px">
                <Text color="white" $size="text-xl" $mobileSize="text-l" $weight="500">
                  Horizontal scaling with sharding
                </Text>
                <Text color="white">
                  {`NEAR's`} sharded design enables limitless scaling and robust resistance to traffic spikes.
                </Text>
              </Flex>

              <Flex $direction="column" $gap="24px">
                <Text color="white" $size="text-xl" $mobileSize="text-l" $weight="500">
                  Environmentally friendly
                </Text>
                <Text color="white">
                  Thanks to its proof-of-stake nature, NEAR consumes in a year the same energy that Bitcoin consumes in
                  3 minutes.
                </Text>
              </Flex>

              <Flex $direction="column" $gap="24px">
                <Text color="white" $size="text-xl" $mobileSize="text-l" $weight="500">
                  A chain you can trust
                </Text>
                <Text color="white">10 million blocks created in a span of two years with 100% uptime.</Text>
              </Flex>
            </Flex>
          </ContentWithImage>

          <Flex $direction="column" $gap="24px">
            <H2 style={{ color: 'var(--white)', maxWidth: '600px' }}>Built for and by the community</H2>
            <Text $size="text-2xl" $mobileSize="text-l" color="white" style={{ maxWidth: '808px' }}>
              An ever evolving protocol with an active community of contributors. Join us and help shape the future of
              the web.
            </Text>
          </Flex>

          <Grid $columns="1fr 1fr 1fr" $gap="24px">
            {communityItems.map((item) => (
              <Card $clickable $dark as="a" href={item.url} target={item.target} key={item.name}>
                <IconCircle>
                  <i className={`ph-duotone ${item.icon}`} />
                </IconCircle>

                <Flex $direction="column" $gap="16px">
                  <Text $size="text-l" $weight="500" color="white">
                    {item.name}
                  </Text>
                  <Text $size="text-s" color="white">
                    {item.description}
                  </Text>
                </Flex>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>

      <Section $backgroundColor="#00EC97">
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
              <Button href={CREATE_ACCOUNT_URL} label="Create Account" variant="secondary" size="large" />

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
    </Wrapper>
  );
};
