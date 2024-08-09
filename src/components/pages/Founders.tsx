import { Button } from '../lib/Button';
import { Card } from '../lib/Card';
import { Container } from '../lib/Container';
import { ContentWithImage } from '../lib/ContentWithImage';
import { Flex } from '../lib/Flex';
import { Grid } from '../lib/Grid';
import { IconCircle } from '../lib/IconCircle';
import { Pattern, PatternContent } from '../lib/Pattern';
import { Section } from '../lib/Section';
import { H2, Text } from '../lib/Text';
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
    name: 'Builder Perks',
    description: (
      <>
        {`We've`} curated a growing collection of curated resources and over $500K in discounts for HZN Founders.
        <br />
        <br />
        Interested in having your product listed as a perk? Send us a message at: <b>Horizon@near.foundation</b>
      </>
    ),
    icon: 'ph-hammer',
    url: 'https://www.notion.so/near-horizon/Builder-Perks-cb5e5f55870c4c5da6bf9f72fbae35a9',
    target: '_blank',
  },
  {
    name: 'Token Launch Hub',
    description:
      'Discover detailed support and education on token launches with three free courses designed to enhance your understanding of incentive design and successful token launch strategies.',
    icon: 'ph ph-users-three',
    url: 'https://neartokenhub.com',
    target: '_blank',
  },
];

const ecosystemCommunityResources = [
  {
    name: 'HZN AI Incubator Application',
    description:
      "Building in Web3 and AI. Apply to NEAR Horizon’s AI incubator and contribute to NEAR's User-Owned AI vision.",
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
              <Flex $gap="32px" $direction="column" $alignItems="center">
                <H2>Welcome to NEAR, the best place to build Web3 projects</H2>

                <Text $size="text-base" $mobileSize="text-l" style={{ maxWidth: '808px' }}>
                  From idea to launch, the NEAR FounderHub guides you every step of the way. Get the tailored resources,
                  support, and community you need to launch and scale your Web3 project on NEAR.
                </Text>

                <Flex $gap="16px" $wrap="wrap" $justifyContent="center" $alignItems="center">
                  <Button
                    href="https://near-horizon.notion.site/NEAR-Founder-Hub-Content-Database-d69fcf11613443128fa249fe9fa069f0"
                    target="_blank"
                    label="Resources"
                    variant="primary"
                    size="large"
                  />
                  <Button
                    href="https://airtable.com/appc0ZVhbKj8hMLvH/pagsVjkk5LZ66MbJm/form"
                    target="_blank"
                    label="Connect"
                    variant="primary"
                    size="large"
                  />
                  <Button
                    href="https://www.hzn.xyz/hzn"
                    target="_blank"
                    label="AI Incubator"
                    variant="primary"
                    size="large"
                  />
                </Flex>
              </Flex>
            </PatternContent>
          </Pattern>
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

      <Section $backgroundColor="#161615">
        <Container>
          <Flex $direction="column" $gap="24px">
            <H2 style={{ color: 'var(--white)' }}>Join the User-Owned AI Mission</H2>
          </Flex>

          <ContentWithImage
            src={returnImageSrc('bafkreib55qq67nbthwpkzqx2upjnecwnrutpo3q26zjqt3wz3n5iw4o6da')}
            imageSide="left"
            alt="The HZN logo."
          >
            <Flex $direction="column" $gap="32px">
              <Text $size="text-xl" $mobileSize="text-l" $weight="500" color="white">
                {`Apply to NEAR's HZN AI Incubator`}
              </Text>
              <Text color="white" style={{ maxWidth: '496px' }}>
                Put the power of AI where it belongs, in the hands of Users. Apply to be part of NEAR Foundation’s
                strategic vision to build a User-Owned AI ecosystem that provides alternatives to the corporate-owned,
                centralized AI.
              </Text>
              <Flex>
                <Button
                  href="https://www.hzn.xyz/hzn"
                  target="_blank"
                  label="Apply Now"
                  variant="affirmative"
                  fill="outline"
                  size="large"
                />
              </Flex>
            </Flex>
          </ContentWithImage>
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

      <Section $backgroundColor="#00EC97">
        <Container>
          <Flex $direction="column" $gap="24px" $alignItems="center">
            <Text $size="text-3xl" $weight="500" style={{ maxWidth: '808px', textAlign: 'center' }}>
              Get in Touch
            </Text>
            <Text $size="text-xl" style={{ maxWidth: '658px', textAlign: 'center' }}>
              Reach out to us to provide your feedback or to ask for specific support.
            </Text>
            <Button
              href="https://linktr.ee/joinNEARcommunity"
              label="Connect"
              target="_blank"
              variant="primary"
              size="large"
            />
          </Flex>
        </Container>
      </Section>
    </Wrapper>
  );
};
