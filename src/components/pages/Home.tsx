import { Article, Button, Card, CardThumbnail, Flex, Grid, Pattern, Section, Text } from '@near-pagoda/ui';

import { useEvents } from '@/hooks/useEvents';
import { useLatestNews } from '@/hooks/useLatestNews';
import { useStatistics } from '@/hooks/useStatistics';
import { LUMA_NEAR_CALENDAR_ID } from '@/utils/constants';

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
  home: {
    blockchain: 'blockchain_button.png',
    ai: 'ai_button.png',
    chainabstraction: 'chainabstraction_button.png',
    intents: 'intents_button.png',
  },
};

const featuredApps: {
  accountId: string;
  image: string;
  name: string;
  description: string;
  url: string;
  target: string;
}[] = [];

const learnItems = [
  {
    name: 'Docs',
    description: 'Read the NEAR documentation and learn to build and publish blockchain applications.',
    icon: '/images/home/doc_icon.png',
    url: 'https://docs.near.org',
    target: '_blank',
  },
  {
    name: 'Blog',
    description: 'The latest news about the NEAR protocol and innovations from the community.',
    icon: '/images/home/blog_icon.png',
    url: '/blog',
  },
  {
    name: 'Learn Center',
    description: 'Starter kit to learn about blockchain technology, web3, and the NEAR protocol.',
    icon: '/images/home/learn_icon.png',
    url: 'https://dev.near.org/learn',
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
    <>
      <Section gap="2xl" background="white" style={{ textAlign: 'center', padding: '12px' }}>
        <Pattern contentMaxWidth="648px">
          <Flex gap="l" stack align="center">
            <Text as="h1" size="text-hero-l">
              The Blockchain for AI
            </Text>

            <Flex>
              <Button href="https://docs.near.org" target="_blank" label="Read Docs" variant="secondary" size="large" />
              <Button
                href="https://dev.near.org"
                target="_blank"
                label="Start Building"
                variant="primary"
                fill="outline"
                size="large"
              />
            </Flex>
          </Flex>
        </Pattern>
      </Section>

      <Section gap="s" background="black" style={{ padding: '12px' }}>
        <Flex
          stack
          style={{
            maxWidth: '66%',
            margin: '0 auto',
            backgroundColor: 'var(--green-brand)',
            borderRadius: '50px',
            padding: '48px',
            marginTop: '-100px',
          }}
        >
          {/* Header section */}
          <Flex stack gap="l" style={{ marginBottom: '48px' }}>
            <Text as="h2" size="text-3xl">
              Scalable. AI-Native. Cross-Chain.
            </Text>
            <Text size="text-l">
              Combining the best of sharded scaling, AI-native transactions, and cross-chain functionality, NEAR
              delivers a user-focused, decentralized ecosystem at global scale.
            </Text>
          </Flex>

          {/* Two columns section */}
          <Grid columns="1fr 1fr" columnsPhone="1fr" gap="xl" style={{ marginBottom: '48px' }}>
            <Flex stack gap="l" style={{ height: '100%', justifyContent: 'space-between' }}>
              <div>
                <Text size="text-xl" weight="500">
                  The All-in-One AI & Blockchain Infrastructure
                </Text>
                <Text color="sand12">
                  AI developers and Web3 builders can create AI-driven applications, automate transactions, and build
                  financial or commerce tools without fragmented ecosystems.
                </Text>
              </div>
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

            <Flex stack gap="l" style={{ height: '100%', justifyContent: 'space-between' }}>
              <div>
                <Text size="text-xl" weight="500">
                  Scalable & Ready for {`AI's`} Growth
                </Text>
                <Text color="sand12">
                  As AI-powered systems take on billions of financial and commercial interactions, NEAR ensures that the
                  network can support global AI adoption without slowdowns or high costs.
                </Text>
              </div>
              <div>
                <Button
                  href="/applications"
                  label="Explore Applications"
                  variant="secondary"
                  fill="outline"
                  size="large"
                  target="_blank"
                />
              </div>
            </Flex>
          </Grid>

          {/* Featured apps grid */}
          <Grid columns="1fr 1fr 1fr" columnsTablet="1fr 1fr" columnsPhone="1fr" gap="l">
            {featuredApps.map((app) => (
              <Card
                href={app.url}
                key={app.name}
                target={app.target}
                border="sand12"
                background="green-brand"
                padding="l"
                gap="l"
              >
                <Flex align="center" gap="l">
                  <CardThumbnail src={returnImageSrc(app.image)} alt={app.name} />
                  <div>
                    <Text size="text-l" weight="500">
                      {app.name}
                    </Text>
                    <Text size="text-s" color="sand12">
                      @{app.accountId}
                    </Text>
                  </div>
                </Flex>
                <Text size="text-s" color="sand12">
                  {app.description}
                </Text>
              </Card>
            ))}
          </Grid>
        </Flex>
      </Section>

      <Section background="black" gap="s" style={{ padding: '12px' }}>
        <Flex
          stack
          style={{
            maxWidth: '66%',
            margin: '0 auto',
            backgroundColor: 'var(--color-black)',
            borderRadius: '50px',
            padding: '24px',
          }}
        >
          {/* Header section */}
          <Flex stack gap="s" style={{ marginBottom: '24px' }}>
            <Text as="h2" size="text-3xl" color="white">
              AI and Web3 development made easy
            </Text>
            <Text color="white">
              By integrating AI-driven features, chain abstraction, and a sharded, scalable infrastructure, NEAR
              continues to expand its core components. Enabling secure, user-focused applications at every stage.
            </Text>
          </Flex>

          {/* Two columns section */}
          <Grid columns="1fr 1fr" columnsPhone="1fr" gap="xl">
            <Flex stack gap="l" style={{ height: '100%', justifyContent: 'space-between' }}>
              <div>
                <img
                  src="/images/home/build_faster.png"
                  alt="Build Faster"
                  style={{
                    width: '100%',
                    height: '120px',
                    marginBottom: '24px',
                  }}
                />
                <Text size="text-xl" weight="500" color="white">
                  Build faster with Javascript & familiar developer tools.
                </Text>
                <Text color="white">
                  Spend less time learning and more time building with the tools you already know and love.
                </Text>
              </div>
              <div>
                <Button
                  href="https://docs.near.org"
                  target="_blank"
                  label="Explore Docs"
                  variant="affirmative"
                  size="large"
                />
              </div>
            </Flex>

            <Flex stack gap="l" style={{ height: '100%', justifyContent: 'space-between' }}>
              <div>
                <img
                  src="/images/home/discover_web3.png"
                  alt="Discover Web3"
                  style={{
                    width: '100%',
                    height: '120px',
                    marginBottom: '24px',
                  }}
                />
                <Text size="text-xl" weight="500" color="white">
                  AI integration
                </Text>
                <Text color="white">
                  • AI agents manage assets and services autonomously
                  <br />
                  • Chain abstraction streamlines cross-network execution
                  <br />
                  • Comprehensive documentation and community resources speed up development
                  <br />
                </Text>
              </div>
              <div>
                <Button href="https://near.ai" label="Explore AI" variant="affirmative" size="large" target="_blank" />
              </div>
            </Flex>
          </Grid>
        </Flex>
      </Section>
      <Section gap="s" background="black" style={{ padding: '24px' }}>
        <Flex
          style={{
            maxWidth: '66%',
            margin: '0 auto',
          }}
        >
          <Grid columns="1fr 1fr 1fr 1fr" columnsTablet="1fr 1fr" columnsPhone="1fr 1fr" gap="none">
            {[
              { name: 'AI', image: images.home.ai, url: '/ai' },
              { name: 'Chain Abstraction', image: images.home.chainabstraction, url: '/chain-abstraction' },
              { name: 'Intents', image: images.home.intents, url: '/intents' },
              { name: 'Blockchain', image: images.home.blockchain, url: '/blockchain' },
            ].map((item) => (
              <a
                key={item.name}
                href="#"
                style={{
                  display: 'block',
                  width: '100%',
                  overflow: 'hidden',
                }}
              >
                <img
                  src={`/images/home/${item.image}`}
                  alt={item.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    borderColor: 'white',
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderRadius: '24px',
                  }}
                />
              </a>
            ))}
          </Grid>
        </Flex>
      </Section>

      <Section gap="s" background="black" style={{ padding: '12px' }}>
        <Flex
          stack
          gap="s"
          style={{
            maxWidth: '66%',
            margin: '0 auto',
            backgroundColor: 'var(--color-black)',
            borderRadius: '50px',
            padding: '24px',
          }}
        >
          <Text as="h2" size="text-3xl" color="white">
            Be part of a global open source community.
          </Text>

          <Grid columns="1fr 1fr 1fr" columnsTablet="1fr" gap="s">
            <div
              style={{
                backgroundColor: 'var(--green-brand)',
                padding: '32px',
                borderRadius: '24px',
                textAlign: 'center',
              }}
            >
              <Text size="text-hero-m" color="sand12">
                {statistics.totalDevelopers}
              </Text>
              <Text color="sand12">Developers</Text>
            </div>

            <div
              style={{
                backgroundColor: 'var(--green-brand)',
                padding: '32px',
                borderRadius: '24px',
                textAlign: 'center',
              }}
            >
              <Text size="text-hero-m" color="sand12">
                {statistics.totalComponents}
              </Text>
              <Text color="sand12">OSS Components</Text>
            </div>

            <div
              style={{
                backgroundColor: 'var(--green-brand)',
                padding: '32px',
                borderRadius: '24px',
                textAlign: 'center',
              }}
            >
              <Text size="text-hero-m" color="sand12">
                {statistics.totalApps}
              </Text>
              <Text color="sand12">Applications</Text>
            </div>
          </Grid>
        </Flex>
      </Section>

      <Section gap="s" background="green-brand" padding="hero" style={{ padding: '12px' }}>
        <Flex
          stack
          gap="s"
          style={{
            maxWidth: '66%',
            margin: '0 auto',
            backgroundColor: 'var(--color-black)',
            borderRadius: '50px',
            padding: '24px',
            width: '100%',
          }}
        >
          <Flex stack gap="s">
            <Flex align="center">
              <Text size="text-3xl" weight="600">
                Learn, connect, & collaborate.
              </Text>
            </Flex>

            <Text style={{ maxWidth: '600px', color: 'black' }}>
              Explore resources, join the community, and collaborate with builders shaping the future of AI and
              blockchain.
            </Text>
          </Flex>

          <Grid columns="1fr 1fr 1fr" columnsTablet="1fr 1fr" columnsPhone="1fr" gap="s">
            {learnItems.map((item) => (
              <Card
                padding="l"
                background="green-brand"
                border="black"
                href={item.url}
                target={item.target}
                key={item.name}
              >
                <img
                  src={item.icon}
                  alt={`${item.name} Icon`}
                  style={{
                    width: '24px',
                    height: '24px',
                  }}
                />

                <Flex stack>
                  <Text size="text-l" weight="500">
                    {item.name}
                  </Text>
                  <Text size="text-s" color="black">
                    {item.description}
                  </Text>
                </Flex>
              </Card>
            ))}
          </Grid>
        </Flex>

        {/* News Section */}
        <Flex
          stack
          gap="s"
          style={{
            maxWidth: '66%',
            margin: '0 auto',
            backgroundColor: 'var(--color-black)',
            borderRadius: '50px',
            padding: '24px',
            width: '100%',
          }}
        >
          <Flex stack gap="s">
            <Flex align="center">
              <Text size="text-3xl" weight="600">
                News
              </Text>
            </Flex>

            <Flex gap="l" align="end" stack="phone">
              <Text style={{ maxWidth: '600px', marginRight: 'auto', color: 'black' }}>
                Catch up on the latest news and announcements from around the ecosystem.
              </Text>

              <Button
                href="/nearweekapp.near/widget/nearweek.com"
                label="All News"
                variant="secondary"
                fill="outline"
                size="large"
                target="_blank"
              />
            </Flex>
          </Flex>

          <Grid columns="1fr 1fr 1fr" columnsTablet="1fr 1fr" columnsPhone="1fr" gap="l">
            {news.map((post) => (
              <Article
                key={post.title + post.createdAt}
                href={post.url}
                target="_blank"
                src={post.thumbnail}
                alt={post.title}
              >
                <Text
                  size="text-l"
                  weight="500"
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
                <Text color="sand11" size="text-s">
                  {new Date(post.createdAt).toLocaleString(undefined, {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </Text>
              </Article>
            ))}
          </Grid>
        </Flex>

        {/* Events Section */}
        <Flex
          stack
          gap="s"
          style={{
            maxWidth: '66%',
            margin: '0 auto',
            backgroundColor: 'var(--color-black)',
            borderRadius: '50px',
            padding: '24px',
            width: '100%',
          }}
        >
          <Flex stack gap="s">
            <Flex align="center">
              <Text size="text-3xl" weight="600">
                Upcoming Events
              </Text>
            </Flex>

            <Flex gap="l" align="end" stack="phone">
              <Text style={{ maxWidth: '600px', marginRight: 'auto', color: 'black' }}>
                Join us at conferences, meetups, and more as we gather across the globe.
              </Text>

              <Button href="/events" label="All Events" variant="secondary" fill="outline" size="large" />
            </Flex>
          </Flex>

          <Grid columns="1fr 1fr 1fr" columnsTablet="1fr 1fr" columnsPhone="1fr" gap="l">
            {events.map((event) => (
              <Article
                key={event.title + event.date}
                href={event.url}
                target="_blank"
                src={event.thumbnail}
                alt={event.title}
              >
                <Text size="text-l" weight="500" as="h3">
                  {event.title}
                </Text>
                <Flex stack gap="s" style={{ minWidth: 0 }}>
                  <Flex align="center" gap="s">
                    <i className="ph-bold ph-calendar-blank" style={{ color: 'var(--white)' }} />
                    <Text color="sand11" size="text-s" style={{ whiteSpace: 'nowrap' }}>
                      {event.date}
                    </Text>
                  </Flex>

                  <Flex align="center" gap="s">
                    <i className="ph-bold ph-map-pin-line" style={{ color: 'var(--white)' }} />
                    <Text
                      color="sand11"
                      size="text-s"
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
      </Section>
    </>
  );
};
