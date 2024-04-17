/* eslint-disable @next/next/no-img-element */

import styled from 'styled-components';

import { Button } from '../lib/Button';
import { Flex } from '../lib/Flex';
import { Grid } from '../lib/Grid';
import { Text } from '../lib/Text';

const Wrapper = styled.div`
  --section-gap: 162px;
  --large-gap: 82px;
  --medium-gap: 48px;
  padding: calc(var(--section-gap) / 2) 0 0;
  position: relative;

  @media (max-width: 900px) {
    --section-gap: 60px;
    --large-gap: 48px;
    --medium-gap: 24px;

    .arrows-image {
      display: none;
    }
  }
`;

const H1 = styled.h1`
  font: var(--text-hero);
  text-align: center;
  letter-spacing: -0.015em;
  color: var(--sand12);
  margin: 0;
  max-width: 960px;

  @media (max-width: 900px) {
    font: var(--text-2xl);
    font-weight: 600;
  }
`;

const Section = styled.div<{
  $gap?: string;
  $center?: boolean;
  $background?: string;
}>`
  display: flex;
  padding: calc(var(--section-gap) / 2);
  gap: ${(p) => p.$gap ?? 'var(--medium-gap)'};
  flex-direction: column;
  align-items: ${(p) => (p.$center ? 'center' : undefined)};
  justify-content: ${(p) => (p.$center ? 'center' : undefined)};
  text-align: ${(p) => (p.$center ? 'center' : undefined)};
  background: ${(p) => p.$background};

  @media (max-width: 900px) {
    padding-left: var(--medium-gap);
    padding-right: var(--medium-gap);
  }
`;

const Card = styled.div<{
  $direction?: string;
  $gap?: string;
  $padding?: string;
  $border?: string;
  $center?: boolean;
  $background?: string;
}>`
  display: flex;
  flex-direction: ${(p) => p.$direction ?? 'column'};
  gap: ${(p) => p.$gap ?? '24px'};
  width: 100%;
  padding: ${(p) => p.$padding ?? '32px'};
  border-radius: 8px;
  border: ${(p) => p.$border ?? '1px solid var(--sand4)'};
  align-items: ${(p) => (p.$center ? 'center' : 'flex-star')};
  justify-content: ${(p) => (p.$center ? 'center' : undefined)};
  text-align: ${(p) => (p.$center ? 'center' : undefined)};
  background: ${(p) => p.$background ?? 'var(--sand1)'};
`;

const SocialIcon = styled.i<{
  $size?: string;
  $align?: string;
  $color?: string;
}>`
  font-size: ${(p) => p.$size ?? '30px'};
  text-align: ${(p) => p.$align};
  color: ${(p) => p.$color};
`;

const images = {
  arrows: 'bafkreifdzknpkboed3jmm4rgtbg3mqaocziagtjbznfp6o3hvgd5ix6brm.svg',
  logoDevHub: 'bafkreif4i3opjuumiq3djbyta74somrjsjzhlvd3zgrhknmh32iv4qgcgi.jpeg',
  logoHorizon: 'bafkreietp2ohevk7v3w6bb66u5rrgstfnqgx75w7xal5foraimv4jxijh4.png',
  logoGlobeDao: 'bafkreih6n3ukibgnb4cge3u44aorabmfvejzlpqjrjl6cnbht5rlegc2cu.jpeg',
  logoMetaPool: 'bafkreicj5zrz2oj2apb5balxtepk32nzxm5t5gywcznr6w2azxkpfd3uye.avif',
  logoMetaWeb: 'bafkreigalzrrkjyq755e45ryvrpragroneda3373assctbrnwjmgb4fzwe.webp',
  logoNearGamingDAO: 'bafkreicpwgvxgjzifbci2omgtlbdail5a7rjpdyrjbpiwfklpwlgvuog7m.jpeg',
  logoNearWeek: 'bafkreiblac35httjgnc2dmn2ym67fb3emwlsvmwp4ky6xvo4fmtreb2dei.png',
  logoOnboardDao: 'bafkreicf2rsgrxi76icaxbegjnxc62uumeqqc23rfxfr67boaht3faoz4i.jpeg',
  logoPotlock: 'bafkreie7kmpb2urjargjp3wh2kkoah26zfa7y52j6s5rnftwuqtm4garkm.jpeg',
  logoSheNear: 'bafkreidlrjnin7ikyepbaontctigs7f6nrltph7jspeavyutbviouj66ua.png',
  logoMintBase: 'bafkreia3zulk3xrmwc6grqcpxavzug6odwgkwzd5magctxvq4jvalbnkcy.svg',
  logoNDC: 'bafkreihmznoqcsq2ivkjck2iqpyaojmmrusma2pqapjwlvop2i7oyoebyu.svg',
  logoLyric: 'bafkreicjhngar5ybinywhql3msk6tqi5cckngaf2zywjeuw65umkoqtq34.webp',
  logoCreativeDao: 'bafkreictzvvz2irr7tr7fhkdne2i7xpr4mf7x5b5i2vhgoqdswb73lbyyu.svg',
  logoMarketingDao: 'bafybeigtcsnc4s5qyrzqm2qmuffaezeyheaetqn5w3nvlzi4syltedmzqm.png',
  logoToronto: 'bafkreiftfra7wwdwivl2w4v6or6dwycjpswhpjnxxdr7nuhrfnlippxc34.jpeg',
  logoAfrica: 'bafkreiblt2ydxlgfywigkpsl2uon24fhayozfcbdlzcokkf57eaehpqehu.jpeg',
  logoBrasil: 'bafkreifa7pytkthujigpqlgsw2bxgvgpfpvm2jhrext3hetihglgwurjiq.jpeg',
  logoKorea: 'bafkreifvp5gfpxmavmmcdh7ni2e7zpmggs7xdltiuwbhbsvrxoqn4hm7oi.jpeg',
  flagKenia: 'bafkreib4flzpg3emzmsyw2dro5hcnsnqqfrfk7gd2dvvsjks2xcvo5rbxa.webp',
  logoIndia: 'bafkreifn2vipi5tq43z5mmbbplrhedeuoh7c2w6d73kfxbdlzbzu4waava.jpeg',
  flagBalcans: 'bafkreicz6eqbngpv44endjeddfudaaooyw63iuzgmlog4stzrnpdkje4vi.webp',
  logoVietnam: 'bafkreibbtoqgmygctqgx4n4ofqhm635p7km4f3q5mwb6w2pj3j3l5l3dkq.png',
  flagUSA: 'bafkreicsmgaejlbmzvfbawdayiqljbxzi62tmvvktoveubuljijib6ezd4.svg',
};

const fundingCards = [
  {
    key: 'ecosystem_grants',
    iconClassName: 'ph ph-circles-three-plus',
    iconColor: 'violet7',
    content: 'Ecosystem Funding Outlets',
  },
  {
    key: 'accelerators_and_incubators',
    iconClassName: 'ph ph-trend-up',
    iconColor: 'violet8',
    content: 'Accelerators & Incubators',
  },
  {
    key: 'community_led_dao',
    iconClassName: 'ph ph-users-four',
    iconColor: 'red7',
    content: 'Community-led DAOs',
  },
  {
    key: 'regional_hubs',
    iconClassName: 'ph ph-planet',
    iconColor: 'cyan7',
    content: 'Regional hubs',
  },
];

const ecosystemGrantCards = [
  {
    image: images.logoNDC,
    title: 'Near Digital Collective',
    content: 'The NDC empowers builders to create sustainable impact in Web3',
    href: 'https://app.neardc.org/',
  },
  {
    image: images.logoDevHub,
    title: 'DevHub',
    content: 'Funding & support for developers & builders',
    href: '/devhub.near/widget/app',
  },
  {
    image: images.logoPotlock,
    title: 'Potlock',
    content: 'Decentralized public goods funding',
    href: 'https://app.potlock.org/',
  },
  {
    image: images.logoMetaPool,
    title: 'MetaPool Grants',
    content: 'For MetaPool growth initiatives focused on Defi, Education, TVL Generation, and Brand Awareness',
    href: 'https://docs.metapool.app/master/meta-pool-ecosystem/vote/grants',
  },
  {
    image: images.logoSheNear,
    title: 'She is Near',
    content: 'Comprehensive support for women-led projects and Web3 influencers',
    href: 'https://gov.near.org/c/community/she-is-near/145',
  },
  {
    image: images.logoGlobeDao,
    title: 'Globe DAO',
    content: 'Supports regional projects and communities with resources and collaboration',
    href: 'https://gov.near.org/c/community/globe/112',
  },
  {
    image: images.logoMintBase,
    title: 'Mintbase',
    content: 'Aimed at supporting projects building in NFTs',
    href: 'https://github.com/mintbase/Grants-Program#1-application',
  },
];

const acceleratorsCards = [
  {
    image: images.logoHorizon,
    title: 'HZN Accelerator Application',
    content:
      'Join the 8-week equity-free accelerator that provides multi-faceted support for early stage web3 projects.',
    href: 'https://www.hzn.xyz/hzn',
  },
  {
    image: images.logoLyric,
    title: 'Lyric Ventures',
    content: 'An incubator focused on B2B projects',
    href: 'https://lyrik.ventures',
  },
  {
    image: images.logoMetaWeb,
    title: 'MetaWeb',
    content: 'Venture capital and Incubator',
    href: 'https://www.metaweb.vc',
  },
  {
    image: images.logoNearWeek,
    title: 'NEARWEEK',
    content: 'Amplification of twitter posts, newsletters, marketing campaigns, etc.',
    href: 'https://nearweek.com/',
  },
];

const communityDaoCards = [
  {
    image: images.logoNearGamingDAO,
    title: 'Near Gaming DAO',
    content: 'Focused on the development of the NEAR gaming ecosystem',
    href: 'https://gov.near.org/c/community/gaming/146',
  },
  {
    image: images.logoOnboardDao,
    title: 'Onboard DAO',
    content: 'Supporting collaboration & development of wallet and onboarding infrastructure',
    href: 'https://onboarddao.super.site/funding-guide-onboard-dao',
  },
  {
    image: images.logoMarketingDao,
    title: 'Marketing DAO',
    content:
      'Grants for marketing support initiatives providing comprehensive founders support via PR agency, influencers, working hours, building marketing strategies and more',
    href: '/ndcdev.near/widget/MDAO.App?page=home',
  },
  {
    image: images.logoCreativeDao,
    title: 'Creative DAO',
    content: 'Funding for creative projects, guilds and DAOs',
    href: 'https://gov.near.org/c/creatives/creatives-dao/61?_gl=1*1fhalxr*_ga*OTkzODQ3NDEwLjE2NzI4MjM3NjE.*_ga_9GWCXQJ62J*MTY3MjkxMDg2My40LjAuMTY3MjkxMDg2My4wLjAuMA..',
  },
  {
    image: images.logoDevHub,
    title: 'DevHub',
    content: 'The decentralized home base for NEAR builders',
    href: '/devhub.near/widget/app',
  },
];

const regionalHubCards = [
  {
    image: images.logoAfrica,
    title: 'Africa',
    href: 'https://twitter.com/nearafrica_',
    content: '',
  },
  {
    image: images.flagBalcans,
    title: 'Balkans',
    href: 'https://nearbalkans.org',
    content: '',
  },
  {
    image: images.flagUSA,
    title: 'Banyan',
    href: 'https://twitter.com/Banyan_NEAR',
    content: '',
  },
  {
    image: images.logoBrasil,
    title: 'Brasil',
    href: 'https://twitter.com/near_brazil',
    content: '',
  },
  {
    image: images.logoIndia,
    title: 'India',
    href: 'https://twitter.com/NearIndia',
    content: '',
  },
  {
    image: images.flagKenia,
    title: 'Kenya',
    href: 'https://sankore2.com',
    content: '',
  },
  {
    image: images.logoKorea,
    title: 'Korea',
    href: 'https://twitter.com/NearKoreaHub',
    content: '',
  },
  {
    image: images.logoToronto,
    title: 'Toronto',
    href: 'https://twitter.com/NEAR_Toronto',
    content: '',
  },
  {
    image: images.logoVietnam,
    title: 'Vietnam',
    href: 'https://nearvietnamhub.org',
    content: '',
  },
];

const fundingHugeCards = [
  {
    key: 'ecosystem_grants_huge_card',
    id: 'ecosystem_grants',
    iconClassName: 'ph ph-circles-three-plus',
    iconColor: 'violet7',
    title: 'Ecosystem Grants',
    content: 'For projects and start-ups building in web 3.0',
    cards: ecosystemGrantCards,
  },
  {
    key: 'accelerators_and_incubators_huge_card',
    id: 'accelerators_and_incubators',
    iconClassName: 'ph ph-trend-up',
    iconColor: 'violet8',
    title: 'Accelerators and Incubators',
    content: 'For projects and start-ups looking to join an incubator or accelerator',
    cards: acceleratorsCards,
  },
  {
    key: 'community_led_dao_huge_card',
    id: 'community_led_dao',
    iconClassName: 'ph ph-users-four',
    iconColor: 'red7',
    title: 'Community-led DAOs',
    content: 'Decentralized communities that support the growth of the ecosystem',
    cards: communityDaoCards,
  },
  {
    key: 'regional_hubs_huge_card',
    id: 'regional_hubs',
    iconClassName: 'ph ph-planet',
    iconColor: 'cyan7',
    title: 'Regional hubs',
    content: 'If a project is based in the following regions they should apply via their respective Regional Hub.',
    cards: regionalHubCards,
  },
];

function returnImageSrc(image: string) {
  return `/images/ecosystem/get-funding/${image}`;
}

export const EcosystemGetFunding = () => {
  return (
    <>
      <Wrapper className="gateway-page-container">
        <Section $center>
          <Flex $gap="16px" $direction="column" $alignItems="center">
            <H1>Get Funded. Build the Future.</H1>
            <Text $size="text-xl" color="sand12" style={{ maxWidth: '662px' }}>
              The NEAR ecosystem offers multiple funding options to support initiatives aimed at decentralizing,
              growing, and innovating on NEAR.
            </Text>
          </Flex>
        </Section>

        <Section $center>
          <Flex $gap="16px" $direction="column" $alignItems="stretch" style={{ width: '100%' }}>
            <Text $size="text-3xl" color="sand12">
              Funding sources
            </Text>
            <Text $size="text-xl" color="sand12">
              {`We've`} helped hundreds of projects and teams realize their ideas, and bring them to market.
            </Text>
            <img
              src={returnImageSrc(images.arrows)}
              alt=""
              className="arrows-image"
              style={{ maxWidth: '890px', margin: '0 auto' }}
            />
            <Grid $columns="1fr 1fr 1fr 1fr" $gap="1rem">
              {fundingCards.map((item) => (
                <div className="col" key={item.key}>
                  <Card $center>
                    <a href={`#${item.key}`}>
                      <SocialIcon className={item.iconClassName} $color={`var(--${item.iconColor})`} />
                      <Text color="sand12">{item.content}</Text>
                    </a>
                  </Card>
                </div>
              ))}
            </Grid>
          </Flex>
        </Section>

        <Section $gap="32px">
          {fundingHugeCards.map((card) => (
            <Card $center key={card.key} id={card.id}>
              <SocialIcon className={card.iconClassName} $color={`var(--${card.iconColor})`} $size="32px" />
              <Text $size="text-3xl" color="sand12">
                {card.title}
              </Text>
              <Text $size="text-l" color="sand12">
                {card.content}
              </Text>
              <Grid $columns="1fr 1fr" $gap="2rem">
                {card.cards.map((item) => (
                  <div className="col" key={item.image}>
                    <Card $background="transparent" $border="none" $direction="row">
                      <img
                        src={returnImageSrc(item.image)}
                        alt={item.title}
                        className="img-fluid"
                        style={{
                          width: '80px',
                          height: '80px',
                          borderRadius: '50%',
                        }}
                      />
                      <Flex $gap="16px" $direction="column" $alignItems="start">
                        <Text $size="text-l" color="sand12" $weight="600" style={{ textAlign: 'left' }}>
                          {item.title}
                        </Text>
                        {item.content && (
                          <Text color="sand12" style={{ textAlign: 'left' }}>
                            {item.content}
                          </Text>
                        )}
                        {item.href ? (
                          <div>
                            <Button
                              href={item.href}
                              iconRight="ph-bold ph-arrow-up-right"
                              label="Learn more"
                              variant="primary"
                              fill="outline"
                              size="small"
                              target="_blank"
                            />
                          </div>
                        ) : (
                          <Text color="sand12" style={{ textAlign: 'left' }} $weight="600">
                            Comming Soon
                          </Text>
                        )}
                      </Flex>
                    </Card>
                  </div>
                ))}
              </Grid>
            </Card>
          ))}
        </Section>

        <Section $center>
          <Text $size="text-3xl" color="sand12">
            What funding program is best for me?
          </Text>
          <Text $size="text-xl" color="sand12" style={{ maxWidth: '662px' }}>
            There are several options to get financial support for your idea - whether it is a grant from an ecosystem
            fund, joining an accelerator, or getting venture support through our Ecosystem partners.
          </Text>
          <div>
            <Button
              href="https://www.nearbuilders.com/"
              label="Explore All Teams"
              variant="affirmative"
              size="large"
              target="_blank"
            />
          </div>
        </Section>
      </Wrapper>
    </>
  );
};
