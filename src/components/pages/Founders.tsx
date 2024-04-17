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

const selfServeResources = [
  {
    name: 'Content Repository',
    description:
      "Here you will find the templates, guides, and additional resources essential for a founder's journey.",
    icon: 'ph-article',
    url: 'https://near-horizon.notion.site/NEAR-Founder-Hub-Content-Database-d69fcf11613443128fa249fe9fa069f0',
    target: '_blank',
  },
  {
    name: 'Founder Co-Pilot',
    description:
      'Engage with interactive technical and business support to answer specific questions that you will likely encounter while building your product and company.',
    icon: 'ph-github-logo',
    url: 'https://near-cp-alpha.vercel.app',
    target: '_blank',
  },
  {
    name: 'Token Launch Resources',
    description: 'Discover detailed support to help you understand how to launch a token.',
    icon: 'ph-file-doc',
    url: '/papers/token-launch-checklist',
    target: '_blank',
  },
];

const ecosystemCommunityResources = [
  {
    name: 'HZN Accelerator Application',
    description:
      'Join the 8-week equity-free accelerator that provides multi-faceted support for early stage web3 projects.',
    icon: 'ph-article',
    url: 'https://www.hzn.xyz/hzn',
    target: '_blank',
  },
  {
    name: 'Funding Opportunities & Builder Communities',
    description:
      'Explore ecosystem funding opportunities and builder communities to find the right support for your projects.',
    icon: 'ph-article',
    url: '/ecosystem/get-funding',
  },
  {
    name: 'Founder Events',
    description: 'Discover the events that are revolutionizing how founders and builders find support in Web3.',
    icon: 'ph-calendar-plus',
    url: 'https://lu.ma/u/usr-5oZHY9dEDbDcaHY',
    target: '_blank',
  },
];

function returnImageSrc(cfid: string) {
  return `/images/founders/${cfid}.png`;
}

export const Founders = () => {
  return (
    <Wrapper>
      <Section $backgroundColor="#00EC97" style={{ padding: '72px 0' }}>
        <Container $center>
          <Pattern>
            <PatternContent>
              <Flex $direction="column" $alignItems="center">
                <H1>FounderHub</H1>
              </Flex>
            </PatternContent>
          </Pattern>
        </Container>
      </Section>

      <Section $backgroundColor="#ffffff">
        <Container $center>
          <Flex $direction="column" $gap="24px" $alignItems="center">
            <H2>Welcome to NEAR, the best place to build Web3 projects</H2>
            <Text $size="text-2xl" $mobileSize="text-l" style={{ maxWidth: '808px' }}>
              From idea to launch, the NEAR FounderHub guides you every step of the way. Get the tailored resources,
              support, and community you need to launch and scale your Web3 project on NEAR.
            </Text>
          </Flex>
        </Container>
      </Section>

      <Section $backgroundColor="#F2F1EA">
        <Container>
          <Flex $direction="column" $gap="24px">
            <H2>Self-Serve Resources</H2>
            <Text $size="text-2xl" $mobileSize="text-l" style={{ maxWidth: '808px' }}>
              Tap into our curated resources: proven templates, expert insights, and a vibrant founder network.
            </Text>
          </Flex>

          <Grid $columns="1fr 1fr 1fr" $gap="24px">
            {selfServeResources.map((item) => (
              <Card as="a" href={item.url} target={item.target} rel="noopener noreferrer" key={item.url}>
                <IconCircle>
                  <i className={`ph-duotone ${item.icon}`} />
                </IconCircle>

                <Flex $direction="column" $gap="16px">
                  <Text $size="text-l" $weight="500">
                    {item.name}
                  </Text>
                  <Text $size="text-s">{item.description}</Text>
                </Flex>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>

      <Section $backgroundColor="#ffffff">
        <Container>
          <Flex $direction="column" $gap="24px">
            <H2>Ecosystem Community Resources</H2>
            <Text $size="text-2xl" $mobileSize="text-l" style={{ maxWidth: '808px' }}>
              Find your place within the ecosystem — your community is near.
            </Text>
          </Flex>
          <Grid $columns="1fr 1fr 1fr" $gap="24px">
            {ecosystemCommunityResources.map((item) => (
              <Card as="a" href={item.url} target={item.target} rel="noopener noreferrer" key={item.url}>
                <IconCircle>
                  <i className={`ph-duotone ${item.icon}`} />
                </IconCircle>

                <Flex $direction="column" $gap="16px">
                  <Text $size="text-l" $weight="500">
                    {item.name}
                  </Text>
                  <Text $size="text-s">{item.description}</Text>
                </Flex>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>

      <Section $backgroundColor="#161615">
        <Container>
          <Flex $direction="column" $gap="24px">
            <H2 style={{ color: 'var(--white)' }}>Accelerate your Web3 journey</H2>
          </Flex>

          <ContentWithImage
            src={returnImageSrc('bafkreib55qq67nbthwpkzqx2upjnecwnrutpo3q26zjqt3wz3n5iw4o6da')}
            imageSide="left"
            alt="The HZN logo."
          >
            <Flex $direction="column" $gap="32px">
              <Text $size="text-xl" $mobileSize="text-l" $weight="500" color="white">
                HZN3 applications are open
              </Text>
              <Text color="white" style={{ maxWidth: '496px' }}>
                Over 50 projects have been accelerated through HZN, our equity-free accelerator and gone on to raise
                over $10M in external capital. Get the equity-free education, mentorship, and a network to take your
                project to the next level.
              </Text>
              <Flex>
                <Button
                  href="https://www.hzn.xyz/hzn"
                  target="_blank"
                  label="Apply Now"
                  variant="affirmative"
                  fill="outline"
                  size="large"
                  className="darkButton"
                />
              </Flex>
            </Flex>
          </ContentWithImage>
        </Container>
      </Section>

      <Section $backgroundColor="#00EC97">
        <Container>
          <Flex $direction="column" $gap="24px" $alignItems="center">
            <Text $size="text-3xl" $weight="500" style={{ maxWidth: '808px', textAlign: 'center' }}>
              Get in touch
            </Text>
            <Text $size="text-xl" style={{ maxWidth: '658px', textAlign: 'center' }}>
              Reach out to us to provide your feedback or to ask for specific support.
            </Text>
            <Button
              href="/contact-us"
              label="Contact Us"
              variant="primary"
              size="large"
            />
          </Flex>
        </Container>
      </Section>
    </Wrapper>
  );
};
