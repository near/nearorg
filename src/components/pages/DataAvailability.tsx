/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';
import styled from 'styled-components';

import { Button } from '../lib/Button';
import { Container } from '../lib/Container';
import { ContentWithImage } from '../lib/ContentWithImage';
import { Flex } from '../lib/Flex';
import { Pattern, PatternContent } from '../lib/Pattern';
import { Section } from '../lib/Section';
import { H1, H2, Text } from '../lib/Text';
import { Wrapper } from '../lib/Wrapper';

type Team = {
  url: string;
  name: string;
  image: string;
  grayscaleImage?: string;
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

const LogoText = styled.p<{
  $color?: string;
  $size?: string;
  $mobileSize?: string;
  $weight?: string;
}>`
  font: var(--${(p) => p.$size ?? 'text-base'});
  font-weight: ${(p) => p.$weight} !important;
  color: var(--${(p) => p.$color ?? 'sand12'});
  margin: 0;

  @media (max-width: 900px) {
    font: var(--${(p) => p.$mobileSize ?? p.$size ?? 'text-base'});
  }
`;

const LogoLinksWrapper = styled.div`
  margin-top: 40px;
  width: 100%;
  position: relative;
  text-align: center;

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

const LinkLogo = styled(Link)<{ $grayscale?: string }>`
  img {
    filter: ${(p) => p.$grayscale ?? 'none'};
  }
`;

const web3Teams1 = [
  {
    url: 'https://docs.arbitrum.io/inside-anytrust#data-availability-servers',
    name: 'Arbitrum',
    image: images.logos.arbitrum,
    height: '29px',
  },
  {
    url: 'https://polygon.technology/polygon-cdk',
    name: 'Polygon',
    image: images.logos.polygon,
    height: '29px',
  },
  {
    url: 'https://docs.starknet.io/documentation/architecture_and_concepts/Network_Architecture/on-chain-data',
    name: 'Starknet',
    image: images.logos.starknet,
    height: '29px',
  },
  {
    url: 'https://movementlabs.xyz',
    name: 'Movement Labs',
    image: images.logos.movementLabs,
    height: '24px',
  },
  {
    url: 'https://docs.optimism.io',
    name: 'Optimism',
    image: images.logos.optimism,
    height: '24px',
  },
];

const web3Teams2 = [
  {
    url: 'https://docs.altlayer.io/altlayer-documentation/core-features-of-altlayers-in-house-rollup-stack/modular',
    name: 'Altlayer',
    image: images.logos.altlayer,
    height: '29px',
  },
  {
    url: 'https://docs.caldera.xyz/about/alternative-da',
    name: 'Caldera',
    image: images.logos.caldera,
    height: '28px',
  },
  {
    url: 'https://docs.dymension.xyz/build/adv-guide/roller-adv/da-light-client',
    name: 'Dymension',
    image: images.logos.dymension,
    height: '28px',
  },
  {
    url: 'https://www.zeeve.io/blog/zeeve-raas-partners-with-near-da-to-power-ethereum-rollup-builders-with-efficient-data-availability',
    name: 'Zeeve',
    image: images.logos.zeeve,
    height: '29px',
  },
  {
    url: 'https://gateway.fm',
    name: 'Gateway',
    image: images.logos.gatewayFm,
    height: '29px',
  },
  {
    url: 'https://www.ankr.com/docs/scaling-services-rollups/data-availability/nearda',
    name: 'Ankr',
    image: images.logos.ankr,
    height: '28px',
  },
];

const web3Teams3 = [
  {
    url: 'https://web3games.com',
    name: 'Web3Game',
    image: images.logos.web3Game,
    height: '28px',
  },
  {
    url: 'https://frax.finance',
    name: 'Frax Finance',
    image: images.logos.fraxFinance,
    height: '28px',
  },
  {
    url: 'https://particle.network',
    name: 'Particle Network',
    image: images.logos.particleNetwork,
    grayscaleImage: 'grayscale(1) brightness(50%)',
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
    <Wrapper>
      <Section $backgroundColor="#F2F1EA" style={{ padding: '72px 0' }}>
        <Container $center>
          <Pattern>
            <PatternContent>
              <Flex $gap="32px" $direction="column" $alignItems="center">
                <H1>An efficient and robust data availability layer</H1>

                <Text $size="text-l" $mobileSize="text-base">
                  Simplify and lower costs in your rollup network by using NEAR as the Data Availability (DA) Layer in
                  your Rollup Stack
                </Text>

                <Flex $gap="24px" $wrap="wrap" $alignItems="center" $justifyContent="center">
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
            </PatternContent>
          </Pattern>
        </Container>
      </Section>

      <Section>
        {/* <Teams> */}

        <Flex $gap="16px" $direction="column" $alignItems="center" style={{ textAlign: 'center' }}>
          <Text $size="text-3xl" $weight="500" style={{ maxWidth: '600px' }}>
            Trusted by forward thinking teams
          </Text>

          {/* <TeamsList> */}
          {web3TeamsSections.map((section) => (
            <Flex $gap="16px" $direction="column" key={section.title.replace(/ /g, '_').toLowerCase()}>
              <LogoText
                $size="text-xs"
                $weight="700"
                $color="sand11"
                style={{
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  textAlign: 'center',
                  marginTop: '60px',
                }}
              >
                {section.title}
              </LogoText>
              <LogoLinksWrapper>
                <LogoLinks>
                  {section.teams.map((team) => (
                    <LinkLogo
                      href={team.url}
                      target="_blank"
                      title={team.name}
                      style={{ height: team.height, display: 'inline-block' }}
                      key={team.name}
                      $grayscale={team?.grayscaleImage ?? undefined}
                    >
                      <img src={returnImageSrc(team.image)} alt={team.name} />
                    </LinkLogo>
                  ))}
                </LogoLinks>
              </LogoLinksWrapper>
            </Flex>
          ))}
        </Flex>
      </Section>

      <Section>
        <Container>
          <Flex $direction="column" $gap="24px">
            <H2 style={{ maxWidth: '1016px' }}>A data availability layer compatible with L2 frameworks</H2>
            <Text $size="text-2xl" $mobileSize="text-l" style={{ maxWidth: '808px' }}>
              Plug {`NEAR's`} DA layer into your L2 framework and start publishing transaction data on a blockchain with
              a proven trajectory of 100% uptime over its lifetime.
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
            <Flex $direction="column" $gap="60px">
              <Flex $direction="column" $gap="24px">
                <Text $size="text-xl" $mobileSize="text-l" $weight="500">
                  Drastically reduce your costs
                </Text>
                <Text>
                  Storing rollup calldata on NEAR Protocol is approximately 8000x cheaper than storing the same amount
                  of data on Ethereum. Harness the power of {`NEAR's`} robust blockchain, optimized for speed,
                  scalability, and cost. Say goodbye to high DA fees and embrace a new era of cost-effective modular
                  blockchain solutions.
                </Text>
              </Flex>

              <Flex $direction="column" $gap="24px">
                <Text $size="text-xl" $mobileSize="text-l" $weight="500">
                  Easily validate proofs
                </Text>
                <Text>
                  Validate proofs effortlessly with {`NEAR's`} trustless off-chain light client. Seamlessly access and
                  verify the storage of rollup data on-chain. {`NEAR's`} developer-friendly interface allows for
                  convenient validation of blockchain transactions, enhancing transparency and trust in the system.
                </Text>
              </Flex>

              <Flex $direction="column" $gap="24px">
                <Text $size="text-xl" $mobileSize="text-l" $weight="500">
                  Simple to interact with
                </Text>
                <Text>
                  NEAR Protocol offers an RPC interface for the effortless retrieval of on-chain data from anywhere.
                  Accessing transaction data has never been easier. Experience the ease of {`NEAR's`} Data Availability
                  solution and unlock new potential for your Ethereum rollup.
                </Text>
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
        </Container>
      </Section>

      <Section $backgroundColor="#F2F1EA">
        <Container>
          <Flex $direction="column" $gap="50px" $alignItems="center">
            <Flex $direction="column" $gap="20px" $alignItems="center" style={{ textAlign: 'center' }}>
              <Text $size="text-3xl" $weight="500" style={{ maxWidth: '600px' }}>
                Get started with {`NEAR's`} data availability layer
              </Text>

              <Text style={{ maxWidth: '600px' }}>
                Efficiently store state data and commitments on a NEAR contract for your L2 rollup. Whether {`you're `}
                processing transactions or managing data on the blockchain layer, {`NEAR's`} Ethereum-compatible
                infrastructure offers unparalleled efficiency through our robust network of nodes. Enhance the
                functionality of your rollup and experience the future of modular blockchain technology with NEAR.
              </Text>
            </Flex>

            <Flex $gap="24px" $wrap="wrap" $alignItems="center" $justifyContent="center">
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
                href="https://${REPL_NEAR_URL}/blog/why-near-data-availability"
                target="_blank"
                label="Intro to NEAR DA"
                variant="secondary"
                fill="outline"
                size="large"
              />
            </Flex>
          </Flex>
        </Container>
      </Section>
    </Wrapper>
  );
};
