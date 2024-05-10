/* eslint-disable @next/next/no-img-element */

import { Article, ArticleImage } from '../lib/Article';
import { Button } from '../lib/Button';
import { Card, CardThumbnail } from '../lib/Card';
import { Container } from '../lib/Container';
import { ContentWithImage } from '../lib/ContentWithImage';
import { Flex } from '../lib/Flex';
import { Grid } from '../lib/Grid';
import { Pattern, PatternContent } from '../lib/Pattern';
import { Section } from '../lib/Section';
import { H1, H2, Text } from '../lib/Text';
import { Wrapper } from '../lib/Wrapper';

const images = {
  apps: {
    bosAllStars: 'bafkreicgnsizdxoc436tbln3ucqo45hdauumd7if4gltrqh3tbxgosi3q4',
    bosHacks: 'bafkreicpbijnii55242f7wcs6xnjf3ocyuyuguts6r6kkfz745g3jjudam',
    nui: 'bafkreiefq7qqug2f657fdb5fyuaf5uesybwn7qu3ebxvmo47dhcsxu27vm',
  },
  gateways: {
    jutsu: 'bafkreidgj5ifofjgka2uw6vx4mvjy7t3vvo7cpgalsfbkdngbnmceeff5a',
    mantle: 'bafkreibm257cmmv4uceo5ebn3evcsnygc36frlshkt7jzpg36os2oyjqly',
    zkevm: 'bafkreiagpsnpoljzjeqgt7n74lnmt5crgrka6kuqw56vmnrldmx4ziu67y',
  },
  illustrations: {
    buildingBlocks: 'bafkreicoahoojfqqowcoeipizv4ogsjgsqtwzu4yhwgq7n3q4emxfj3wrq',
    gateways: 'bafkreifbr6xiittgl6f4ovubbgjtwmv3chishfzyjxjzj5ugpcyflubakm',
  },
};

const exampleGateways = [
  {
    title: 'Mantle Gateway',
    description:
      'Streamlines access to top Mantle apps via a single interface and enhances user experience (UX) and project visibility.',
    url: 'https://bos.fusionx.finance/',
    image: images.gateways.mantle,
  },
  {
    title: 'Jutsu.ai',
    description:
      'A gateway for developers to increase productivity and achieve cost-effective on-chain deployment, straight from their browser.',
    url: 'https://jutsu.ai/',
    image: images.gateways.jutsu,
  },
  {
    title: 'zkEVM',
    description:
      'Polygon zkEVM increases accessibility and discoverability for zkEVM developers and users on the open web.',
    url: 'https://bos.quickswap.exchange/',
    image: images.gateways.zkevm,
  },
];

const featuredApps = [
  {
    name: 'BOS All-Stars',
    accountId: 'hack.near',
    description: 'Ranking starred components',
    image: images.apps.bosAllStars,
    url: '/near/widget/ComponentDetailsPage?src=hack.near/widget/widgets.rank',
  },
  {
    name: 'BOS Hacks',
    accountId: 'ndcplug.near',
    description: 'The 2 week B.O.S Hackathon on B.O.S',
    image: images.apps.bosHacks,
    url: '/near/widget/ComponentDetailsPage?src=ndcplug.near/widget/BOSHACKS.Index',
  },
  {
    name: 'NUI',
    accountId: 'nearui.near',
    description: 'A growing collection of beautifully designed B.O.S widgets - your building blocks for creating...',
    image: images.apps.nui,
    url: '/near/widget/ComponentDetailsPage?src=nearui.near/widget/index',
  },
];

function returnImageSrc(cfid: string) {
  return `/images/open-web-applications/${cfid}.png`;
}

export const OpenWebApplications = () => {
  return (
    <Wrapper>
      <Section $backgroundColor="#9797FF" style={{ padding: '72px 0' }}>
        <Container $center>
          <Pattern>
            <PatternContent>
              <Flex $gap="32px" $direction="column" $alignItems="center">
                <H1>Building an open web</H1>

                <Text $size="text-l" $mobileSize="text-base">
                  Contribute to building a web where users own their data, voices count, and everyone can be fairly
                  rewarded for their effort.
                </Text>
              </Flex>
            </PatternContent>
          </Pattern>
        </Container>
      </Section>

      <Section $backgroundColor="#F2F1EA">
        <Container>
          <Flex $direction="column" $gap="24px">
            <H2>Gateways: the doors to an open web</H2>
            <Text $size="text-2xl" $mobileSize="text-l" style={{ maxWidth: '808px' }}>
              Create multi-chain open web applications that feature seamless user onboarding.
            </Text>
          </Flex>

          <ContentWithImage
            src={returnImageSrc(images.illustrations.gateways)}
            imageSide="left"
            alt="A browser window and a console window with the code snippet # Quick-start your own gateway npx create-near-app@latest alongside the logos for React JS, Ethereum, Polygon, and NEAR."
          >
            <Flex $direction="column" $gap="60px">
              <Flex $direction="column" $gap="24px">
                <Text $size="text-xl" $mobileSize="text-l" $weight="500">
                  Supercharge the open web
                </Text>
                <Text>Augment your open web applications with thousands of composable multi-chain components.</Text>
              </Flex>

              <Flex $direction="column" $gap="24px">
                <Text $size="text-xl" $mobileSize="text-l" $weight="500">
                  Seamless onboarding
                </Text>
                <Text>
                  Empower users to login using only their email. Eliminate all onboarding friction to facilitate mass
                  adoption.
                </Text>
              </Flex>

              <Flex $direction="column" $gap="24px">
                <Text $size="text-xl" $mobileSize="text-l" $weight="500">
                  Social from the get-go
                </Text>
                <Text>
                  Easily add social components to your app and keep your audience engaged through web push
                  notifications.
                </Text>
              </Flex>

              <div>
                <Button
                  href="https://github.com/near/create-near-app"
                  target="_blank"
                  label="Create Your App"
                  variant="secondary"
                  fill="outline"
                  size="large"
                />
              </div>
            </Flex>
          </ContentWithImage>

          <Flex $direction="column" $gap="60px">
            <Flex $direction="column" $gap="24px">
              <Text $size="text-xl" $mobileSize="text-l" $weight="500">
                Example Gateways
              </Text>

              <Flex $gap="24px" $alignItems="flex-end" $mobileStack $mobileAlignItems="flex-start">
                <Text style={{ maxWidth: '598px', marginRight: 'auto' }}>
                  See how developers are using gateways to create rich multi-chain, open web applications
                </Text>
                <Button
                  href="/gateways"
                  label="Explore Gateways"
                  variant="secondary"
                  target="_blank"
                  fill="outline"
                  size="large"
                />
              </Flex>
            </Flex>

            <Grid $columns="1fr 1fr 1fr" $gap="24px" $mobileGap="48px">
              {exampleGateways.map((gateway) => (
                <Article key={gateway.title} href={gateway.url} target="_blank">
                  <ArticleImage>
                    <img src={returnImageSrc(gateway.image)} alt={gateway.title} />
                  </ArticleImage>
                  <Text $size="text-l" $weight="500" as="h3">
                    {gateway.title}
                  </Text>
                  <Text>{gateway.description}</Text>
                </Article>
              ))}
            </Grid>
          </Flex>
        </Container>
      </Section>

      <Section $backgroundColor="#000000">
        <Container>
          <Flex $direction="column" $gap="24px">
            <H2 style={{ color: 'var(--white)', maxWidth: '1015px' }}>
              Components: the building blocks of an open web
            </H2>
            <Text $size="text-2xl" $mobileSize="text-l" color="white" style={{ maxWidth: '808px' }}>
              Explore, use, and share the building blocks for open web applications.
            </Text>
          </Flex>

          <ContentWithImage
            src={returnImageSrc(images.illustrations.buildingBlocks)}
            imageSide="left"
            alt="Two chat bubbles alongside two component windows from the NEAR gateway"
          >
            <Flex $direction="column" $gap="60px">
              <Flex $direction="column" $gap="24px">
                <Text color="white" $size="text-xl" $mobileSize="text-l" $weight="500">
                  10,000 components and climbing
                </Text>
                <Text color="white">
                  Use an ever-growing library of components, providing functionality ranging from Social to DeFi and
                  beyond.
                </Text>
              </Flex>

              <Flex $direction="column" $gap="24px">
                <Text color="white" $size="text-xl" $mobileSize="text-l" $weight="500">
                  Decentralized frontends made simple
                </Text>
                <Text color="white">
                  Use JSX syntax and a React-like library to easily build decentralized frontends using composable
                  components.
                </Text>
              </Flex>

              <Flex $direction="column" $gap="24px">
                <Text color="white" $size="text-xl" $mobileSize="text-l" $weight="500">
                  Secured on-chain
                </Text>
                <Text color="white">
                  All components are stored on a NEAR contract, making frontends highly reliable and
                  censorship-resistant
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
                  className="darkButton"
                />
              </div>
            </Flex>
          </ContentWithImage>

          <Flex $direction="column" $gap="60px">
            <Flex $direction="column" $gap="24px">
              <Text color="white" $size="text-xl" $mobileSize="text-l" $weight="500">
                A new and more open web
              </Text>

              <Flex $gap="24px" $alignItems="flex-end" $mobileStack $mobileAlignItems="flex-start">
                <Text color="white" style={{ maxWidth: '598px', marginRight: 'auto' }}>
                  Break out of siloed, single-chain experiences and expand your reach, all while getting the best of
                  {`NEAR's`} speed, low cost, and scalability.
                </Text>
                <Button
                  href="/components"
                  label="Explore Components"
                  target="_blank"
                  variant="secondary"
                  fill="outline"
                  size="large"
                  className="darkButton"
                />
              </Flex>
            </Flex>

            <Grid $columns="1fr 1fr 1fr" $gap="24px">
              {featuredApps.map((app) => (
                <Card $clickable $dark as="a" href={app.url} key={app.name} target="_blank">
                  <Flex $alignItems="center" $gap="24px">
                    <CardThumbnail>
                      <img src={returnImageSrc(app.image)} alt={app.name} />
                    </CardThumbnail>
                    <div>
                      <Text color="white" $size="text-l" $weight="500">
                        {app.name}
                      </Text>
                      <Text color="white" $size="text-s">
                        @{app.accountId}
                      </Text>
                    </div>
                  </Flex>
                  <Text color="white" $size="text-s">
                    {app.description}
                  </Text>
                </Card>
              ))}
            </Grid>
          </Flex>
        </Container>
      </Section>

      <Section $backgroundColor="#9797FF">
        <Container>
          <Flex $direction="column" $gap="50px" $alignItems="center">
            <Flex $direction="column" $gap="20px" $alignItems="center" style={{ textAlign: 'center' }}>
              <Text $size="text-3xl" $weight="500" style={{ maxWidth: '600px' }}>
                Start your journey with an open web
              </Text>

              <Text $size="text-l" $mobileSize="text-l" style={{ maxWidth: '600px' }}>
                Build quickly with awesome resources and thousands of composable components. Join a thriving community
                of developers building an open web.
              </Text>
            </Flex>

            <Flex $gap="24px" $wrap="wrap" $alignItems="center" $justifyContent="center">
              <Button
                href="https://docs.near.org/bos/overview"
                label="Read Docs"
                variant="secondary"
                size="large"
                target="_blank"
              />

              <Button href="/components" label="Explore Components" target="_blank" variant="primary" size="large" />
            </Flex>
          </Flex>
        </Container>
      </Section>
    </Wrapper>
  );
};
