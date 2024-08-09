import { Button, ContentWithImage, Flex, Grid, Pattern, Section, Text } from '@near-pagoda/ui';

const images = {
  illustrations: {
    devHub: 'bafkreia5igkmp2pjnnxddpyz5sp6et7uowm6r3fk2ycxwca3aflzop2odq',
    horizon: 'bafkreihcolnwvwigzerbvweyg5ygeuxgo5fngfrowogytjst2v3qchujne',
    ndc: 'bafkreidx3swoxdm5t2gmibpheg5fuhjkgezacpn6u7iehkim3gcgemnsqi',
    funding: 'bafkreibj5poz4hg4acprnn4mo4ohn6hpku256gs2mvewo2nthzy65fvwiu',
  },
};

function returnImageSrc(cfid: string) {
  return `/images/ecosystem/${cfid}.png`;
}

export const EcosystemOverview = () => {
  return (
    <>
      <Section background="green-brand" style={{ textAlign: 'center' }}>
        <Pattern>
          <Flex gap="l" stack align="center">
            <Text as="h1" size="text-hero-l">
              Welcome to NEAR
            </Text>

            <Text size="text-l" weight={400}>
              Explore a vibrant ecosystem that supports developers, founders, and contributors.
            </Text>

            <Grid columns="1fr 1fr 1fr 1fr" columnsTablet="1fr 1fr">
              <Button href="/founders" label="Founders" variant="primary" size="large" />
              <Button href="/ai" label="NEAR AI" variant="primary" size="large" />
              <Button
                href="https://dev.near.org/devhub.near/widget/app"
                target="_blank"
                label="Developers"
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
            </Grid>
          </Flex>
        </Pattern>
      </Section>

      <Section gap="2xl" padding="hero" background="amber2">
        <Flex stack gap="l">
          <Text as="h2" size="text-hero-m">
            Building the open web together
          </Text>
          <Text size="text-2xl" weight={400} style={{ maxWidth: '808px' }}>
            Developers and Founders building on the B.O.S are at the center. The Ecosystem is supporting them with
            everything they need to succeed.
          </Text>
        </Flex>

        <ContentWithImage
          src={returnImageSrc(images.illustrations.devHub)}
          imageSide="right"
          alt="The DevHub logo, the characters / d / h ."
        >
          <Text size="text-xl" weight="500">
            DevHub: The community for developers.
          </Text>
          <Text>
            DevHub is a decentralized community where NEAR developers can share ideas, match solutions, and access
            support and funding.
          </Text>
          <div>
            <Button
              href="/devhub.near/widget/app?page=communities"
              target="_blank"
              label="Explore DevHub"
              variant="secondary"
              fill="outline"
              size="large"
            />
          </div>
        </ContentWithImage>

        <ContentWithImage
          src={returnImageSrc(images.illustrations.horizon)}
          imageSide="left"
          alt="The Near Horizon logo, a blue sunrise and the wordmark for Horizon"
        >
          <Text size="text-xl" weight="500">
            Founder Hub: A Resource for Founders
          </Text>
          <Text>Founder Hub is an early stage accelerator for Web3 founders to build, connect, and grow.</Text>
          <div>
            <Button
              href="/horizon"
              label="Explore Founder Hub"
              target="_blank"
              variant="secondary"
              fill="outline"
              size="large"
            />
          </div>
        </ContentWithImage>

        <ContentWithImage
          src={returnImageSrc(images.illustrations.ndc)}
          imageSide="right"
          alt="The NDC logo, the letters N, D, and C interconnected"
        >
          <Text size="text-xl" weight="500">
            NEAR Digital Collective (NDC): Decentralized Grassroots Governance
          </Text>
          <Text>The NDC is a grassroots, community-led movement to build decentralized governance on NEAR.</Text>
          <div>
            <Button
              href="https://app.neardc.org/"
              target="_blank"
              label="Explore the NDC"
              variant="secondary"
              fill="outline"
              size="large"
            />
          </div>
        </ContentWithImage>

        <ContentWithImage
          src={returnImageSrc(images.illustrations.funding)}
          imageSide="left"
          alt="The Ecosystem Funding Homepage logo"
        >
          <Text size="text-xl" weight="500">
            Funding & Amplification
          </Text>
          <Text>
            Building the Open Web together. Explore the NEAR Ecosystem groups that facilitate funding & provide support
            for a variety of focus areas.
          </Text>
          <div>
            <Button
              href="/ecosystem/get-funding"
              label="Ecosystem Funding"
              variant="secondary"
              fill="outline"
              size="large"
            />
          </div>
        </ContentWithImage>
      </Section>

      <Section padding="hero" background="green-brand">
        <Flex stack gap="xl" align="center" style={{ textAlign: 'center' }}>
          <Flex stack align="center" style={{ textAlign: 'center' }}>
            <Text size="text-3xl" weight="500">
              The blockchain for everyone
            </Text>

            <Text size="text-l" weight={400} style={{ maxWidth: '592px' }}>
              Blockchain has never been easier. Create your account and join a thriving community of visionaries. Help
              build a new Internet, where everyone counts.
            </Text>
          </Flex>

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
