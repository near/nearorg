import { Button, Card, ContentWithImage, Flex, Grid, IconCircle, Pattern, Section, Text } from '@near-pagoda/ui';

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
    <>
      <Section background="green-brand" style={{ textAlign: 'center' }}>
        <Pattern>
          <Flex gap="l" stack align="center">
            <Text as="h1" size="text-hero-m">
              Welcome to NEAR, the best place to build Web3 projects
            </Text>

            <Text color="sand12" style={{ maxWidth: '808px' }}>
              From idea to launch, the NEAR FounderHub guides you every step of the way. Get the tailored resources,
              support, and community you need to launch and scale your Web3 project on NEAR.
            </Text>

            <Flex wrap justify="center" align="center">
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
        </Pattern>
      </Section>

      <Section gap="2xl" padding="hero" background="amber2">
        <Flex stack gap="l">
          <Text as="h2" size="text-hero-m">
            Self-Serve Resources
          </Text>
          <Text size="text-2xl" weight={400} style={{ maxWidth: '808px' }}>
            Tap into our curated resources: proven templates, expert insights, and a vibrant founder network.
          </Text>
        </Flex>

        <Grid columns="1fr 1fr 1fr" columnsTablet="1fr 1fr" columnsPhone="1fr" gap="l">
          {selfServeResources.map((item) => (
            <Card
              border="sand11"
              background="amber2"
              gap="l"
              padding="l"
              href={item.url}
              target={item.target}
              rel="noopener noreferrer"
              key={item.url}
            >
              <IconCircle icon={<i className={`ph-duotone ${item.icon}`} />} />

              <Flex stack>
                <Text size="text-l" weight="500">
                  {item.name}
                </Text>
                <Text size="text-s">{item.description}</Text>
              </Flex>
            </Card>
          ))}
        </Grid>
      </Section>

      <Section gap="2xl" padding="hero" background="sand12">
        <Text as="h2" size="text-hero-m" color="white">
          Join the User-Owned AI Mission
        </Text>

        <ContentWithImage
          src={returnImageSrc('bafkreib55qq67nbthwpkzqx2upjnecwnrutpo3q26zjqt3wz3n5iw4o6da')}
          imageSide="left"
          alt="The HZN logo."
        >
          <Flex stack gap="l">
            <Text size="text-xl" weight="500" color="white">
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
                size="large"
              />
            </Flex>
          </Flex>
        </ContentWithImage>
      </Section>

      <Section gap="2xl" padding="hero" background="white">
        <Flex stack gap="l">
          <Text as="h2" size="text-hero-m">
            Ecosystem Community Resources
          </Text>
          <Text size="text-2xl" weight={400} style={{ maxWidth: '808px' }}>
            Find your place within the ecosystem — your community is near.
          </Text>
        </Flex>

        <Grid columns="1fr 1fr 1fr" columnsTablet="1fr 1fr" columnsPhone="1fr" gap="l">
          {ecosystemCommunityResources.map((item) => (
            <Card
              border="sand11"
              background="white"
              gap="l"
              padding="l"
              href={item.url}
              target={item.target}
              rel="noopener noreferrer"
              key={item.url}
            >
              <IconCircle icon={<i className={`ph-duotone ${item.icon}`} />} />

              <Flex stack>
                <Text size="text-l" weight="500">
                  {item.name}
                </Text>
                <Text size="text-s">{item.description}</Text>
              </Flex>
            </Card>
          ))}
        </Grid>
      </Section>

      <Section gap="2xl" padding="hero" background="green-brand">
        <Flex stack gap="l" align="center">
          <Text size="text-3xl" weight="500" style={{ maxWidth: '808px', textAlign: 'center' }}>
            Get in Touch
          </Text>
          <Text size="text-xl" style={{ maxWidth: '658px', textAlign: 'center' }}>
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
      </Section>
    </>
  );
};
