import { CtaSection } from '../CtaSection';
import { Button } from '../lib/Button';
import { Container } from '../lib/Container';
import { ContentWithImage } from '../lib/ContentWithImage';
import { Flex } from '../lib/Flex';
import { Grid } from '../lib/Grid';
import { Pattern, PatternContent } from '../lib/Pattern';
import { Section } from '../lib/Section';
import { H1, H2, Text } from '../lib/Text';
import { Wrapper } from '../lib/Wrapper';

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
    <Wrapper>
      <Section $backgroundColor="#00EC97" style={{ padding: '72px 0' }}>
        <Container $center>
          <Pattern>
            <PatternContent>
              <Flex $gap="32px" $direction="column" $alignItems="center">
                <H1>Welcome to NEAR</H1>

                <Text $size="text-l" $mobileSize="text-base">
                  Explore a vibrant ecosystem that supports developers, founders, and contributors.
                </Text>

                <Grid $gap="16px" $columns="1fr 1fr 1fr 1fr" $mobileColumns="1fr 1fr">
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
            </PatternContent>
          </Pattern>
        </Container>
      </Section>

      <Section $backgroundColor="#F2F1EA">
        <Container>
          <Flex $direction="column" $gap="24px">
            <H2>Building the open web together</H2>
            <Text $size="text-2xl" $mobileSize="text-l" style={{ maxWidth: '808px' }}>
              Developers and Founders building on the B.O.S are at the center. The Ecosystem is supporting them with
              everything they need to succeed.
            </Text>
          </Flex>

          <ContentWithImage
            src={returnImageSrc(images.illustrations.devHub)}
            imageSide="right"
            alt="The DevHub logo, the characters / d / h ."
          >
            <Text $size="text-xl" $mobileSize="text-l" $weight="500">
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
            <Text $size="text-xl" $mobileSize="text-l" $weight="500">
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
            <Text $size="text-xl" $mobileSize="text-l" $weight="500">
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
            <Text $size="text-xl" $mobileSize="text-l" $weight="500">
              Funding & Amplification
            </Text>
            <Text>
              Building the Open Web together. Explore the NEAR Ecosystem groups that facilitate funding & provide
              support for a variety of focus areas.
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
        </Container>
      </Section>

      <CtaSection backgroundColor="#00EC97" />
    </Wrapper>
  );
};
