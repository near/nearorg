/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';
import styled from 'styled-components';

import { useEvents } from '@/hooks/useEvents';
import { useLatestNews } from '@/hooks/useLatestNews';
import { useStatistics } from '@/hooks/useStatistics';
import { LUMA_NEAR_CALENDAR_ID } from '@/utils/constants';

import { Article, ArticleImage } from '../lib/Article';
import { Button } from '../lib/Button';
import { Card, CardThumbnail } from '../lib/Card';
import { Container } from '../lib/Container';
import { ContentWithImage } from '../lib/ContentWithImage';
import { Flex } from '../lib/Flex';
import { Grid } from '../lib/Grid';
import { IconCircle } from '../lib/IconCircle';
import { Pattern, PatternContent } from '../lib/Pattern';
import { Section } from '../lib/Section';
import { H1, H2, Text } from '../lib/Text';
import { Wrapper } from '../lib/Wrapper';

const Teams = styled.div`
  width: 100%;
`;

const LogoLinksWrapper = styled.div`
  margin-top: 40px;
  width: 100%;
  position: relative;

  @media (max-width: 1170px) {
    &::before {
      content: '';
      display: block;
      position: absolute;
      right: 0;
      top: 0;
      width: 40px;
      height: 100%;
      background: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));
    }
  }
`;

const LogoLinks = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 60px;
  padding: 16px 24px;

  a {
    display: block;
    height: 24px;
    color: var(--sand10);

    img {
      display: block;
      margin: 0 auto;
      height: 100%;
    }
  }

  @media (max-width: 800px) {
    gap: 40px;
  }
`;

const Stats = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 80px;

  div {
    p:first-child {
      font-family: 'FK Grotesk';
      font-size: 100px;
      font-weight: 500;
      line-height: 100%;
      letter-spacing: -1.5px;
    }
    p:last-child {
      font-size: 20px;
      font-weight: 400;
      line-height: 130%;
      letter-spacing: 0.3px;
    }
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 80px;
  }
`;

const images = {
  apps: {
    bosAllStars: 'bafkreicgnsizdxoc436tbln3ucqo45hdauumd7if4gltrqh3tbxgosi3q4',
    bosHacks: 'bafkreicpbijnii55242f7wcs6xnjf3ocyuyuguts6r6kkfz745g3jjudam',
    nui: 'bafkreiefq7qqug2f657fdb5fyuaf5uesybwn7qu3ebxvmo47dhcsxu27vm',
  },
  community: {
    devHub: 'bafkreifdsmtvi7mpovau5asmaabibk6cvtqvujuunjjlazqov32wng34q4',
    horizon: 'bafkreiguqynoybtr6esvnyetcaayke5gsh5ex7lk4efjgunnyw6unszin4',
    ndc: 'bafkreigqrtvkwu4uzjzg7nrv3ivsb2uthvcozici34loxumkpekz7weyly',
  },
  illustrations: {
    betterWayToBuild: 'bafkreib6sp7aoovferwg4zfvekhxxmp6hdp4u7f2bgxupebntrfgrmjhbe',
    code: 'bafkreig2anu2f6j6kh7i26k2x7z75d72bn4vtsp2dusiin5pahwbjd3rvi',
    components: 'bafkreiecfsfxzubbayv27se2pr2xcz4rugp5a5kscsfz5lvjykiomt3a4u',
    dapps: 'bafkreihhuffoky3qywxmnnr7z7r2gdtjfab6tbx7f7ml2xvwldx76ggrni',
    fastAuth: 'bafkreib5rowa6ujusqvk6xr4qo2bnoazwvraozrl56taejqypemd5mc75y',
    gateways: 'bafkreibvfggs2ea6e7fp4apfeaccjlcnpovzr73fwnxxkuvcnmpkkzqiwm',
    placeholder: 'bafkreid7abzwnzk3qrniq7mnnl4blhka7k5nk62m3u7afqnqdxowmrkdu4',
  },
  logos: {
    alibaba: 'bafkreibjmnm5mu5sdauregztl2bsin2a633gdfmrydviyqkyf5rpjfbg64',
    arbitrum: 'bafkreibff556aanawcdwlpbelqnzns35gqmxcsll5k4acyynyrvibcljpu',
    cosmose: 'bafkreifx5onoiyip7mwogdnzmv7ilirkw2fyzvegrvxbmzf6bcbzuwbmbu',
    dropt: 'bafkreihjdirbdiuoiqlcmpp7gnjnvkm3bfol7mtetyaldtgnvgrprpdbba',
    eigenLayer: 'bafkreid44xmemwrym532jybhwqwrvlbzchxfxyrkcivns5qtmpeym7cmbe',
    icc: 'bafkreibygllbcqh3e3qkcrim2noa4wwev36af34rk6gw2rpogp53lwkbg4',
    google: 'bafkreie7ewwxbvcv4hgztuj5uwk5i4siirqnxbo2c5g2nt72iaty6lnpje',
    optimism: 'bafkreidwitx5hu6hivyn3exi34moyea7livf6zfqk2dcny3z62ive7fpou',
    polygon: 'bafkreig5ubh27cnjindiujnmyrwa2uft24bcrmgibzwlma4nqsommrcd4u',
    marblex: 'bafkreigaqwyom4knnvjdvsgmfbef5adp5k6no4prdudiog3pypiqddoyum',
    sailgp: 'bafkreifoxofuz4mkoopodvrdb44g5lva4w5p46iexccovj4c62x6ihoj2i',
    shemaroo: 'bafkreigoulx5h4u43xj4332bidnkn4dzbw5qgrcar6wf7yoewnrxfyjfle',
    sweatcoin: 'bafkreigztaapfbvnfzrw4oap6zi7us4drcbx2wt3broi4n3u4nzfyrtxcy',
  },
};

const featuredApps = [
  {
    name: 'BOS All-Stars',
    accountId: 'hack.near',
    description: 'Ranking starred components',
    image: images.apps.bosAllStars,
    url: 'https://dev.near.org/near/widget/ComponentDetailsPage?src=hack.near/widget/widgets.rank',
    target: '_blank',
  },
  {
    name: 'BOS Hacks',
    accountId: 'ndcplug.near',
    description: 'The 2 week B.O.S Hackathon on B.O.S',
    image: images.apps.bosHacks,
    url: 'https://dev.near.org/near/widget/ComponentDetailsPage?src=ndcplug.near/widget/BOSHACKS.Index',
    target: '_blank',
  },
  {
    name: 'NUI',
    accountId: 'nearui.near',
    description: ' A growing collection of beautifully designed B.O.S widgets - your building blocks for creating...',
    image: images.apps.nui,
    url: 'https://dev.near.org/near/widget/ComponentDetailsPage?src=nearui.near/widget/index',
    target: '_blank',
  },
];

const web3Teams2 = [
  {
    url: 'https://dropt.io',
    name: 'Dropt',
    image: images.logos.dropt,
    height: '35px',
  },
  {
    url: 'https://sailgp.com',
    name: 'Sail GP',
    image: images.logos.sailgp,
    height: '16px',
  },
  {
    url: 'https://www.shemarooent.com',
    name: 'Shemaroo',
    image: images.logos.shemaroo,
    height: '38px',
  },
  {
    url: 'https://www.marblex.io',
    name: 'Marblex',
    image: images.logos.marblex,
    height: '16px',
  },
  {
    url: 'https://polygon.technology/polygon-cdk',
    name: 'Polygon',
    image: images.logos.polygon,
    height: '38px',
  },
  {
    url: 'https://sweatco.in',
    name: 'Sweatcoin',
    image: images.logos.sweatcoin,
    height: '24px',
  },
];

const web3Teams = [
  {
    url: 'https://alibabacloud.com/',
    name: 'Alibaba',
    image: images.logos.alibaba,
    height: '38px',
  },
  {
    url: 'https://docs.arbitrum.io/inside-anytrust#data-availability-servers',
    name: 'Arbitrum',
    image: images.logos.arbitrum,
    height: '38px',
  },
  {
    url: 'https://cosmose.co',
    name: 'Cosmose AI',
    image: images.logos.cosmose,
    height: '38px',
  },
  {
    url: 'https://docs.eigenlayer.xyz/eigenda-guides/eigenda-overview',
    name: 'EigenLayer',
    image: images.logos.eigenLayer,
    height: '38px',
  },
  {
    url: 'https://google.com',
    name: 'Google',
    image: images.logos.google,
    height: '38px',
  },
  {
    url: 'https://www.icc-cricket.com',
    name: 'ICC',
    image: images.logos.icc,
    height: '24px',
  },
];

const web3TeamsCombined = [...web3Teams, ...web3Teams2];

const learnItems = [
  {
    name: 'Docs',
    description: 'Read the NEAR documentation and learn to build and publish blockchain applications.',
    icon: 'ph-file-doc',
    url: 'https://docs.near.org',
    target: '_blank',
  },
  {
    name: 'Blog',
    description: 'The latest news about the NEAR protocol and innovations from the community.',
    icon: 'ph-newspaper-clipping',
    url: '/blog',
  },
  {
    name: 'Learn Center',
    description: 'Starter kit to learn about blockchain technology, web3, and the NEAR protocol.',
    icon: 'ph-book-open-text',
    url: 'https://dev.near.org/learn',
    target: '_blank',
  },
];

const communityItems = [
  {
    name: 'DevHub',
    description:
      'DevHub is a decentralized community where NEAR developers can share ideas, match solutions, and access support and funding.',
    image: images.community.devHub,
    url: 'https://dev.near.org/devhub.near/widget/app?page=communities',
    target: '_blank',
  },
  {
    name: 'Horizon',
    description: 'Horizons is an early stage accelerator for Web3 founders to build, connect, and grow.',
    image: images.community.horizon,
    url: '/horizon',
    target: '_blank',
  },
  {
    name: 'Near Digital Collective (NDC)',
    description: 'The NDC is a grassroots, community-led movement to build decentralized governance on NEAR.',
    image: images.community.ndc,
    url: 'https://app.neardc.org/',
    target: '_blank',
  },
];

function returnImageSrc(cfid: string) {
  return `/images/home/${cfid}.png`;
}

export const Home = () => {
  const { statistics } = useStatistics();
  const { events } = useEvents([LUMA_NEAR_CALENDAR_ID]);
  const { news } = useLatestNews();

  return (
    <Wrapper>
      <Section style={{ padding: '72px 0' }} $backgroundColor="var(--white)">
        <Container $center>
          <Pattern>
            <PatternContent $maxWidth="648px">
              <Flex $gap="32px" $direction="column" $alignItems="center">
                <H1>Blockchains, Abstracted.</H1>

                <Text $size="text-l" $mobileSize="text-base">
                  NEAR is the chain abstraction stack, empowering builders to create apps that scale to billions of
                  users and across all blockchains.
                </Text>

                <Flex $gap="24px">
                  <Button
                    href="https://docs.near.org"
                    target="_blank"
                    label="Read Docs"
                    variant="secondary"
                    fill="outline"
                    size="large"
                  />
                  <Button
                    href="https://dev.near.org"
                    target="_blank"
                    label="Start Building"
                    variant="affirmative"
                    size="large"
                  />
                </Flex>
              </Flex>
            </PatternContent>
          </Pattern>

          <Teams>
            <Text
              $size="text-xs"
              $weight="700"
              $color="sand11"
              style={{
                textTransform: 'uppercase',
                letterSpacing: '2px',
                padding: '0 24px',
              }}
            >
              Trusted by forward thinking teams
            </Text>

            <LogoLinksWrapper>
              <LogoLinks>
                {web3TeamsCombined.map((team) => (
                  <Link
                    href={team.url}
                    target="_blank"
                    title={team.name}
                    style={{ height: team.height }}
                    key={team.name}
                  >
                    <img src={returnImageSrc(team.image)} alt={team.name} />
                  </Link>
                ))}
              </LogoLinks>
            </LogoLinksWrapper>
          </Teams>
        </Container>
      </Section>

      <Section $backgroundColor="#00EC97">
        <Container>
          <Flex $direction="column" $gap="24px">
            <H2>{`There's`} a better way to build.</H2>
            <Text $size="text-2xl" $mobileSize="text-l" style={{ maxWidth: '808px' }}>
              Imagine if the online experiences we use every day were more transparent and resilient – shaped and
              controlled by their creators and users.
            </Text>
          </Flex>

          <Grid $columns="1fr 1fr" $gap="var(--section-gap)">
            <img src={returnImageSrc(images.illustrations.betterWayToBuild)} alt="There's a better way to build" />

            <Flex $direction="column" $gap="var(--section-gap)">
              <Flex $direction="column" $gap="24px">
                <Text $size="text-xl" $mobileSize="text-l" $weight="500">
                  Truly developer owned.
                </Text>
                <Text>
                  Today, developers access web services through centralized providers in exchange for control of their
                  data and assets. In contrast, Web3 services are public and open source, and you alone hold the keys to
                  your data.
                </Text>
                <div>
                  <Button
                    href="https://dev.near.org"
                    target="_blank"
                    label="Join Near Developers"
                    variant="secondary"
                    fill="outline"
                    size="large"
                  />
                </div>
              </Flex>

              <Flex $direction="column" $gap="24px">
                <Text $size="text-xl" $mobileSize="text-l" $weight="500">
                  Application hosting with zero setup, fewer costs, & less headaches.
                </Text>
                <Text>
                  No more jumping through hoops to reach your audience. {`Near's`} Blockchain Operating System (B.O.S)
                  enables you to host and serve your applications entirely on the blockchain, eliminating reliance on
                  traditional web hosting services.
                </Text>
                <div>
                  <Button
                    href="https://docs.near.org"
                    target="_blank"
                    label="Read Docs"
                    variant="secondary"
                    fill="outline"
                    size="large"
                  />
                </div>
              </Flex>
            </Flex>
          </Grid>

          <Flex $direction="column" $gap="60px">
            <Flex $direction="column" $gap="24px">
              <Text $size="text-xl" $mobileSize="text-l" $weight="500">
                A new & more open digital economy.
              </Text>

              <Flex $gap="24px" $alignItems="flex-end" $mobileStack $mobileAlignItems="flex-start">
                <Text style={{ maxWidth: '598px', marginRight: 'auto' }}>
                  Develop unique and powerful ways to earn, transact, and exercise digital ownership through online
                  experiences accessible to anyone with an internet connection.
                </Text>
                <Button
                  href="/applications"
                  label="Explore Applications"
                  variant="secondary"
                  fill="outline"
                  size="large"
                  target="_blank"
                />
              </Flex>
            </Flex>

            <Grid $columns="1fr 1fr 1fr" $gap="24px">
              {featuredApps.map((app) => (
                <Card
                  $clickable
                  as="a"
                  href={app.url}
                  style={{ borderColor: 'var(--sand12)' }}
                  key={app.name}
                  target={app.target}
                >
                  <Flex $alignItems="center" $gap="24px">
                    <CardThumbnail>
                      <img src={returnImageSrc(app.image)} alt={app.name} />
                    </CardThumbnail>
                    <div>
                      <Text $size="text-l" $weight="500">
                        {app.name}
                      </Text>
                      <Text $size="text-s">@{app.accountId}</Text>
                    </div>
                  </Flex>
                  <Text $size="text-s">{app.description}</Text>
                </Card>
              ))}
            </Grid>
          </Flex>
        </Container>
      </Section>

      <Section $backgroundColor="#000000">
        <Container>
          <Flex $direction="column" $gap="24px">
            <H2 style={{ color: 'var(--white)' }}>Web3 development made easy</H2>
            <Text $size="text-2xl" $mobileSize="text-l" $color="white" style={{ maxWidth: '808px' }}>
              Build great applications without the hassle of deciding between platforms, finding the right tools, or
              learning new programming languages.
            </Text>
          </Flex>

          <ContentWithImage
            imageSide="left"
            src={returnImageSrc(images.illustrations.code)}
            alt="Illustration of a console with javascript code above the Javascript and Rust logos, surrounded by brackets"
          >
            <>
              <Text $size="text-xl" $mobileSize="text-l" $weight="500" $color="white">
                Build faster with <span style={{ color: '#00EC97' }}>Javascript</span> & familiar developer tools.
              </Text>
              <Text $color="white">
                Spend less time learning and more time building with the tools you already know and love.
              </Text>
              <div>
                <Button
                  href="https://docs.near.org"
                  target="_blank"
                  label="Explore Docs"
                  variant="affirmative"
                  fill="outline"
                  size="large"
                  className="darkButton"
                />
              </div>
            </>
          </ContentWithImage>

          <ContentWithImage
            imageSide="right"
            src={returnImageSrc(images.illustrations.components)}
            alt="Illustration of the UI listing of a component with buttons to view details or open. Below it are images of checkboxes"
          >
            <>
              <Text $size="text-xl" $mobileSize="text-l" $weight="500" $color="white">
                Stop reinventing the wheel and leverage over{' '}
                <span style={{ color: '#00EC97' }}>{statistics.totalComponents}</span> Web3 components.
              </Text>
              <Text $color="white">
                Open-source components built with public blockchain data allow you to create rich user experiences
                without wasting time on backend configuration.
              </Text>
              <div>
                <Button
                  href="/components"
                  label="Explore Components"
                  variant="affirmative"
                  target="_blank"
                  size="large"
                  className="darkButton"
                />
              </div>
            </>
          </ContentWithImage>

          <ContentWithImage
            src={returnImageSrc(images.illustrations.dapps)}
            imageSide="left"
            alt="Illustration of the UI listing of an application with buttons to open, fork, view source, or discuss. Behind it there are images of code brackets and a git-fork icon. "
          >
            <>
              <Text $size="text-xl" $mobileSize="text-l" $weight="500" $color="white">
                Discover Web3 Open Source
              </Text>
              <Text $color="white">
                Everything on B.O.S. is easy to discover and open source by default. See what others have built, learn
                faster, and gain inspiration.
              </Text>
              <div>
                <Button
                  href="/applications"
                  label="Explore Applications"
                  variant="affirmative"
                  size="large"
                  className="darkButton"
                  target="_blank"
                />
              </div>
            </>
          </ContentWithImage>
        </Container>
      </Section>

      <Section $backgroundColor="#F2F1EA">
        <Container>
          <Flex $direction="column" $gap="24px">
            <H2>Greater discoverability. Easier onboarding.</H2>
            <Text $size="text-2xl" $mobileSize="text-l" style={{ maxWidth: '808px' }}>
              Current Web3 experiences are siloed & inaccessible. They don’t have to be.
            </Text>
          </Flex>

          <ContentWithImage
            src={returnImageSrc(images.illustrations.gateways)}
            imageSide="left"
            alt="Illustration of a search bar above two buttons for GitHub and Deploy"
          >
            <>
              <Text $size="text-xl" $mobileSize="text-l" $weight="500">
                Deploy anywhere, get discovered everywhere.
              </Text>
              <Text>
                Move beyond siloed, single-chain experiences and stop compromising your reach, all while getting the
                best of
                {`NEAR's`} speed, low cost, and scalability.
              </Text>
              <div>
                <Button
                  href="/gateways"
                  label="Explore Gateways"
                  target="_blank"
                  variant="secondary"
                  fill="outline"
                  size="large"
                />
              </div>
            </>
          </ContentWithImage>

          <ContentWithImage
            src={returnImageSrc(images.illustrations.fastAuth)}
            imageSide="right"
            alt="Illustration of the FastAuth UI showing the stage allowing user to connect their account to a dApp."
          >
            <>
              <Text $size="text-xl" $mobileSize="text-l" $weight="500">
                Onboard new users in seconds, no crypto required.
              </Text>
              <Text>
                With FastAuth, onboarding to your decentralized application is even faster and easier than traditional
                web authentication.
              </Text>
              <div>
                <Button
                  href="https://docs.near.org/tools/fastauth-sdk"
                  label="Try FastAuth"
                  variant="secondary"
                  fill="outline"
                  size="large"
                  target="_blank"
                />
              </div>
            </>
          </ContentWithImage>
        </Container>
      </Section>

      <Section $backgroundColor="#00EC97">
        <Container>
          <H2 style={{ maxWidth: '1000px' }}>Be part of a global open source community.</H2>

          <Stats>
            <div>
              <Text>{statistics.totalDevelopers}</Text>
              <Text>Developers</Text>
            </div>

            <div>
              <Text>{statistics.totalComponents}</Text>
              <Text>OSS Components</Text>
            </div>

            <div>
              <Text>{statistics.totalApps}</Text>
              <Text>Applications</Text>
            </div>
          </Stats>
        </Container>
      </Section>

      <Section $backgroundColor="#161615" style={{ '--sand11': '#A1A09A' } as any}>
        <Container>
          <Flex $direction="column" $gap="24px">
            <H2 style={{ color: 'var(--white)' }}>Learn, connect, & collaborate.</H2>
            <Text $size="text-2xl" $mobileSize="text-l" $color="white" style={{ maxWidth: '808px' }}>
              Join a vibrant community of innovators and builders creating a more open web.
            </Text>
          </Flex>

          <Flex $direction="column" $gap="24px" $mobileGap="48px">
            <Flex $direction="column" $gap="24px">
              <Flex $alignItems="center" $gap="12px">
                <i className="ph-duotone ph-book-open-text" style={{ color: 'var(--white)', fontSize: '32px' }} />
                <Text $size="text-xl" $weight="600" $color="white">
                  Learn
                </Text>
              </Flex>

              <Flex $gap="24px" $alignItems="flex-end" $mobileStack $mobileAlignItems="flex-start">
                <Text style={{ maxWidth: '393px', marginRight: 'auto' }} $color="white">
                  Everything you need to know about NEAR from ongoing developments to the latest updates.
                </Text>
              </Flex>
            </Flex>

            <Grid $columns="1fr 1fr 1fr" $gap="24px">
              {learnItems.map((item) => (
                <Card $clickable $dark as="a" href={item.url} target={item.target} key={item.name}>
                  <IconCircle>
                    <i className={`ph-duotone ${item.icon}`} />
                  </IconCircle>

                  <Flex $direction="column" $gap="16px">
                    <Text $size="text-l" $weight="500" $color="white">
                      {item.name}
                    </Text>
                    <Text $size="text-s" $color="white">
                      {item.description}
                    </Text>
                  </Flex>
                </Card>
              ))}
            </Grid>
          </Flex>

          <Flex $direction="column" $gap="24px" $mobileGap="48px">
            <Flex $direction="column" $gap="24px">
              <Flex $alignItems="center" $gap="12px">
                <i className="ph-duotone ph-users-three" style={{ color: 'var(--white)', fontSize: '32px' }} />
                <Text $size="text-xl" $weight="600" $color="white">
                  Community
                </Text>
              </Flex>

              <Flex $gap="24px" $alignItems="flex-end" $mobileStack $mobileAlignItems="flex-start">
                <Text style={{ maxWidth: '393px', marginRight: 'auto' }} $color="white">
                  Connect with people to help you on your journey across the open web.
                </Text>

                <Button
                  href="/ecosystem"
                  label="Explore the Ecosystem"
                  variant="affirmative"
                  size="large"
                  className="darkButton"
                />
              </Flex>
            </Flex>

            <Grid $columns="1fr 1fr 1fr" $gap="24px">
              {communityItems.map((item) => (
                <Card $clickable $dark key={item.name} as="a" href={item.url} target={item.target}>
                  <CardThumbnail>
                    <img src={returnImageSrc(item.image)} alt={item.name} />
                  </CardThumbnail>

                  <Flex $direction="column" $gap="16px">
                    <Text $size="text-l" $weight="500" $color="white">
                      {item.name}
                    </Text>
                    <Text $size="text-s" $color="white">
                      {item.description}
                    </Text>
                  </Flex>
                </Card>
              ))}
            </Grid>
          </Flex>

          <Flex $direction="column" $gap="24px" $mobileGap="48px">
            <Flex $direction="column" $gap="24px">
              <Flex $alignItems="center" $gap="12px">
                <i className="ph-duotone ph-newspaper" style={{ color: 'var(--white)', fontSize: '32px' }} />
                <Text $size="text-xl" $weight="600" $color="white">
                  News
                </Text>
              </Flex>

              <Flex $gap="24px" $alignItems="flex-end" $mobileStack $mobileAlignItems="flex-start">
                <Text style={{ maxWidth: '393px', marginRight: 'auto' }} $color="white">
                  Catch up on the latest news and announcements from around the ecosystem.
                </Text>

                <Button
                  href="/nearweekapp.near/widget/nearweek.com"
                  label="All News"
                  variant="affirmative"
                  size="large"
                  className="darkButton"
                  target="_blank"
                />
              </Flex>
            </Flex>

            <Grid $columns="1fr 1fr 1fr" $gap="24px" $mobileGap="48px">
              {news.map((post) => (
                <Article key={post.title + post.createdAt} href={post.url} target="_blank">
                  <ArticleImage>
                    <img src={post.thumbnail} alt={post.title} />
                  </ArticleImage>
                  <Text $color="sand11" $size="text-s">
                    {new Date(post.createdAt).toLocaleString(undefined, {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </Text>
                  <Text
                    $color="white"
                    $size="text-l"
                    $weight="500"
                    as="h3"
                    style={{
                      display: '-webkit-box',
                      maxWidth: '100%',
                      WebkitLineClamp: '2',
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {post.title}
                  </Text>
                </Article>
              ))}
            </Grid>
          </Flex>

          <Flex $direction="column" $gap="24px" $mobileGap="48px">
            <Flex $direction="column" $gap="24px">
              <Flex $alignItems="center" $gap="12px">
                <i className="ph-duotone ph-calendar-blank" style={{ color: 'var(--white)', fontSize: '32px' }} />
                <Text $size="text-xl" $weight="600" $color="white">
                  Events
                </Text>
              </Flex>

              <Flex $gap="24px" $alignItems="flex-end" $mobileStack $mobileAlignItems="flex-start">
                <Text style={{ maxWidth: '393px', marginRight: 'auto' }} $color="white">
                  Join us at conferences, meetups, and more as we gather across the globe.
                </Text>

                <Button href="/events" label="All Events" variant="affirmative" size="large" className="darkButton" />
              </Flex>
            </Flex>

            <Grid $columns="1fr 1fr 1fr" $gap="24px" $mobileGap="48px">
              {events.map((event) => (
                <Article key={event.title + event.date} href={event.url} target="_blank" style={{ minWidth: 0 }}>
                  <ArticleImage>
                    <img src={event.thumbnail} alt={event.title} />
                  </ArticleImage>
                  <Text $color="white" $size="text-l" $weight="500" as="h3">
                    {event.title}
                  </Text>
                  <Flex $alignItems="center" $gap="32px" style={{ minWidth: 0 }}>
                    <Flex $alignItems="center" $gap="8px">
                      <i className="ph-bold ph-calendar-blank" style={{ color: 'var(--white)' }} />
                      <Text $color="sand11" $size="text-s" style={{ whiteSpace: 'nowrap' }}>
                        {event.date}
                      </Text>
                    </Flex>
                    <Flex $alignItems="center" $gap="8px" style={{ minWidth: 0 }}>
                      <i className="ph-bold ph-map-pin-line" style={{ color: 'var(--white)' }} />
                      <Text
                        $color="sand11"
                        $size="text-s"
                        style={{
                          whiteSpace: 'nowrap',
                          minWidth: 0,
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                        }}
                      >
                        {event.location}
                      </Text>
                    </Flex>
                  </Flex>
                </Article>
              ))}
            </Grid>
          </Flex>
        </Container>
      </Section>
    </Wrapper>
  );
};
