/* eslint-disable @next/next/no-img-element */

import { Button, Card, CardThumbnail, Flex, Grid, IconCircle, Pattern, Section, Text } from '@near-pagoda/ui';

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

const sections = [
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
      <Section background="white" style={{ textAlign: 'center' }}>
        <Pattern>
          <Flex gap="l" stack align="center">
            <Text as="h1" size="text-hero-l">
              Get Funded. Build the Future.
            </Text>

            <Text size="text-l" weight={400}>
              The NEAR ecosystem offers multiple funding options to support initiatives aimed at decentralizing,
              growing, and innovating on NEAR.
            </Text>
          </Flex>
        </Pattern>
      </Section>

      {sections.map((section) => (
        <Section gap="xl" key={section.key} id={section.id}>
          <Flex stack align="center">
            <IconCircle icon={<i className={section.iconClassName} />} color={section.iconColor as any} />
            <Text size="text-3xl" color="sand12">
              {section.title}
            </Text>
            <Text size="text-l" weight={400} color="sand12">
              {section.content}
            </Text>
          </Flex>

          <Grid columns="1fr 1fr" columnsPhone="1fr" gap="l">
            {section.cards.map((item) => (
              <Card padding="l" key={item.image}>
                <Flex gap="l">
                  <CardThumbnail src={returnImageSrc(item.image)} alt={item.title} />

                  <Flex stack>
                    <Flex stack gap="s">
                      <Text size="text-l" color="sand12" weight="600" style={{ textAlign: 'left' }}>
                        {item.title}
                      </Text>
                      {item.content && (
                        <Text color="sand12" size="text-s" style={{ textAlign: 'left' }}>
                          {item.content}
                        </Text>
                      )}
                    </Flex>
                    {item.href ? (
                      <div>
                        <Button
                          href={item.href}
                          label="Learn more"
                          variant="primary"
                          fill="outline"
                          size="small"
                          target="_blank"
                        />
                      </div>
                    ) : (
                      <Text color="sand12" style={{ textAlign: 'left' }} weight="600">
                        Comming Soon
                      </Text>
                    )}
                  </Flex>
                </Flex>
              </Card>
            ))}
          </Grid>
        </Section>
      ))}

      <Section gap="l" padding="hero" background="amber2" style={{ textAlign: 'center' }}>
        <Text size="text-3xl" color="sand12">
          What funding program is best for me?
        </Text>
        <Text size="text-xl" color="sand12" weight={400} style={{ maxWidth: '662px', margin: '0 auto' }}>
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
    </>
  );
};
