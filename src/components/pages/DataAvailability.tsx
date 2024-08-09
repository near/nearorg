/* eslint-disable @next/next/no-img-element */

import { Button, ContentWithImage, Flex, Pattern, Section, Text } from '@near-pagoda/ui';

import { LogoLinks } from '../lib/LogoLinks';

type Team = {
  url: string;
  name: string;
  image: string;
  filter?: string;
  height: string;
};

interface TeamSection {
  title: string;
  teams: Team[];
}

const images = {
  illustrations: {
    l2: 'bafkreiaqqz44yzagdcj3ubd3uteh2guh7fhbktdg26fw52bti5onu6zsxm',
    dac: 'bafkreifkselhtl5p2lwjzzpzii6xcdkywwn47gxzulhir7vtn52hv4g5oe',
  },
  logos: {
    caldera: 'bafkreib4iwhvtg3hutal3sacnehne7iiispxtzxsucl6yb7j6vtfjdsmou',
    dymension: 'bafkreifyazhbdnbckyieag6a4ezm7mchncln4uoxv3x7v5uvcnewtz5shu',
    fluent: 'bafkreiblc2o3x5uwjm4kiywzxkhpulykfmmvulvdqhy4odh6huzlzb4pi4',
    movementLabs: 'bafkreifeghlktv3jscosqr6653jky2k4ti7vgyssgzc4tsxbznhboh3pyy',
    polygon: 'bafkreig5ubh27cnjindiujnmyrwa2uft24bcrmgibzwlma4nqsommrcd4u',
    arbitrum: 'bafkreibff556aanawcdwlpbelqnzns35gqmxcsll5k4acyynyrvibcljpu',
    starknet: 'starknet',
    vistara: 'bafkreiecvztsb3iiyhh4lfjfzgh2xdvfoacl5izgw4keowjfmff44o7fdi',
    altlayer: 'bafkreig3mrzesoettretv2dhnxtgy22wubasgifzx4smybyldzbk35e3fm',
    optimism: 'bafkreidwitx5hu6hivyn3exi34moyea7livf6zfqk2dcny3z62ive7fpou',
    zeeve: 'bafkreigwtxjuraug4l2rltpoy4wau6gaom6e52fwgyqfpdsh2t6voe6ypm',
    web3Game: 'bafkreidbmy27gngqsz5opzy5dbhd7jdrnzt5r2e5grcpiad77zgjc4e6ki',
    gatewayFm: 'bafkreiga33qbg5c4ffckdk7d4fnwc54ydafn4o3b3oucnabcd2mcq4s5ve',
    ankr: 'bafkreiaxqdtshibxuivqus3btgpx66z2mamse6idhoklp2ghwru5jxf4l4',
    fraxFinance: 'bafkreihsgo2ikwgfcjt4dbj3fv5srychvyw23disz4rimp3zwgxnfchs3q',
    particleNetwork: 'bafkreic7mcnt67qn4444u5zwbiuujl56vq2yomznqj2jjwcko7p3fhwiam',
  },
};

function returnImageSrc(cfid: string) {
  return `/images/data-availability/${cfid}.png`;
}

const web3Teams1 = [
  {
    url: 'https://docs.arbitrum.io/inside-anytrust#data-availability-servers',
    name: 'Arbitrum',
    image: returnImageSrc(images.logos.arbitrum),
    height: '29px',
  },
  {
    url: 'https://polygon.technology/polygon-cdk',
    name: 'Polygon',
    image: returnImageSrc(images.logos.polygon),
    height: '29px',
  },
  {
    url: 'https://docs.starknet.io/documentation/architecture_and_concepts/Network_Architecture/on-chain-data',
    name: 'Starknet',
    image: returnImageSrc(images.logos.starknet),
    height: '29px',
  },
  {
    url: 'https://movementlabs.xyz',
    name: 'Movement Labs',
    image: returnImageSrc(images.logos.movementLabs),
    height: '24px',
  },
  {
    url: 'https://docs.optimism.io',
    name: 'Optimism',
    image: returnImageSrc(images.logos.optimism),
    height: '24px',
  },
];

const web3Teams2 = [
  {
    url: 'https://docs.altlayer.io/altlayer-documentation/core-features-of-altlayers-in-house-rollup-stack/modular',
    name: 'Altlayer',
    image: returnImageSrc(images.logos.altlayer),
    height: '29px',
  },
  {
    url: 'https://docs.caldera.xyz/about/alternative-da',
    name: 'Caldera',
    image: returnImageSrc(images.logos.caldera),
    height: '28px',
  },
  {
    url: 'https://docs.dymension.xyz/build/adv-guide/roller-adv/da-light-client',
    name: 'Dymension',
    image: returnImageSrc(images.logos.dymension),
    height: '28px',
  },
  {
    url: 'https://www.zeeve.io/blog/zeeve-raas-partners-with-near-da-to-power-ethereum-rollup-builders-with-efficient-data-availability',
    name: 'Zeeve',
    image: returnImageSrc(images.logos.zeeve),
    height: '29px',
  },
  {
    url: 'https://gateway.fm',
    name: 'Gateway',
    image: returnImageSrc(images.logos.gatewayFm),
    height: '29px',
  },
  {
    url: 'https://www.ankr.com/docs/scaling-services-rollups/data-availability/nearda',
    name: 'Ankr',
    image: returnImageSrc(images.logos.ankr),
    height: '28px',
  },
];

const web3Teams3 = [
  {
    url: 'https://web3games.com',
    name: 'Web3Game',
    image: returnImageSrc(images.logos.web3Game),
    height: '28px',
  },
  {
    url: 'https://frax.finance',
    name: 'Frax Finance',
    image: returnImageSrc(images.logos.fraxFinance),
    height: '28px',
  },
  {
    url: 'https://particle.network',
    name: 'Particle Network',
    image: returnImageSrc(images.logos.particleNetwork),
    filter: 'grayscale(1) brightness(50%)',
    height: '29px',
  },
];

const web3TeamsSections: TeamSection[] = [
  {
    title: 'Frameworks',
    teams: web3Teams1,
  },
  {
    title: 'Rollups as a Service',
    teams: web3Teams2,
  },
  {
    title: 'Blockchains',
    teams: web3Teams3,
  },
];

export const DataAvailability = () => {
  return (
    <>
      <Section background="amber2" style={{ textAlign: 'center' }}>
        <Pattern>
          <Flex gap="l" stack align="center">
            <Text as="h1" size="text-hero-l">
              An efficient and robust data availability layer
            </Text>

            <Text size="text-l" weight={400}>
              Simplify and lower costs in your rollup network by using NEAR as the Data Availability (DA) Layer in your
              Rollup Stack
            </Text>

            <Flex gap="l" wrap align="center" justify="center">
              <Button
                href="https://docs.near.org/data-availability/welcome"
                target="_blank"
                label="Read Docs"
                variant="secondary"
                fill="outline"
                size="large"
              />

              <Button
                href="/blog/why-near-data-availability"
                target="_blank"
                label="Intro to NEAR DA"
                variant="primary"
                size="large"
              />

              <Button
                href="https://www.nearmodular.com"
                target="_blank"
                label="Costs Dashboard"
                variant="secondary"
                fill="outline"
                size="large"
              />
            </Flex>
          </Flex>
        </Pattern>
      </Section>

      <Section gap="2xl" padding="hero" background="white" style={{ textAlign: 'center' }}>
        <Text size="text-3xl" weight="500" style={{ maxWidth: '600px', margin: '0 auto' }}>
          Trusted by forward thinking teams
        </Text>

        {web3TeamsSections.map((section) => (
          <LogoLinks label={section.title} logos={section.teams} key={section.title.replace(/ /g, '_').toLowerCase()} />
        ))}
      </Section>

      <Section gap="2xl" padding="hero" background="white">
        <Flex stack gap="l">
          <Text as="h2" size="text-hero-m">
            A data availability layer compatible with L2 frameworks
          </Text>
          <Text size="text-2xl" weight={400} style={{ maxWidth: '808px' }}>
            Plug {`NEAR's`} DA layer into your L2 framework and start publishing transaction data on a blockchain with a
            proven trajectory of 100% uptime over its lifetime.
          </Text>
        </Flex>

        <img
          src={returnImageSrc(images.illustrations.dac)}
          alt="A data availability chart showing comparisons between NEAR, Celestia, Ethereum with proto-danksharding, and ethereum without proto-danksharding."
        />

        <ContentWithImage
          src={returnImageSrc(images.illustrations.l2)}
          imageSide="left"
          alt="A flow chart showing the relationships between the L2 and Data Availability (DA). On the L2, the Rollup node and Batcher feed into the NEAR Protocol on Data Availability. The proposal from the L2 feeds into Ethereum in the DA when then feeds back into the Rollup Node of the L2."
        >
          <Flex stack gap="xl">
            <Flex stack>
              <Text size="text-xl" weight="500">
                Drastically reduce your costs
              </Text>
              <Text>
                A trustless off-chain light client for NEAR provides easy access to validate that rollup data was stored
                on-chain.
              </Text>
            </Flex>

            <Flex stack>
              <Text size="text-xl" weight="500">
                Easily validate proofs
              </Text>
              <Text>
                A trustless off-chain light client for NEAR provides easy access to validate that rollup data was stored
                on-chain.
              </Text>
            </Flex>

            <Flex stack>
              <Text size="text-xl" weight="500">
                Simple to interact with
              </Text>
              <Text>NEAR readily provides an RPC to easily retrieve the on-chain data from anywhere</Text>
            </Flex>

            <div>
              <Button
                href="https://docs.near.org/data-availability/welcome"
                target="_blank"
                label="Bootstrap Your L2"
                variant="secondary"
                fill="outline"
                size="large"
              />
            </div>
          </Flex>
        </ContentWithImage>
      </Section>

      <Section gap="2xl" padding="hero" background="amber2">
        <Flex stack gap="xl" align="center">
          <Flex stack align="center" style={{ textAlign: 'center' }}>
            <Text size="text-3xl" weight="500" style={{ maxWidth: '600px' }}>
              Get started with {`NEAR's`} data availability layer
            </Text>

            <Text style={{ maxWidth: '600px' }}>
              Efficiently store state data and commitments on a NEAR contract for your L2 rollup.
            </Text>
          </Flex>

          <Flex gap="l" wrap align="center" justify="center">
            <Button
              href="https://docs.near.org/data-availability/welcome"
              target="_blank"
              label="Read Docs"
              variant="secondary"
              fill="outline"
              size="large"
            />

            <Button
              href="https://forms.gle/LWJoTpTiCbSheUL26"
              target="_blank"
              label="Get Updates"
              variant="primary"
              size="large"
            />

            <Button
              href="/blog/why-near-data-availability"
              target="_blank"
              label="Intro to NEAR DA"
              variant="secondary"
              fill="outline"
              size="large"
            />
          </Flex>
        </Flex>
      </Section>
    </>
  );
};
