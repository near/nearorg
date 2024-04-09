/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  redirects: async () => {
    return [
      // Please keep redirects in alphabetical order based on `source`:

      {
        source: '/applications',
        destination: 'https://dev.near.org/applications',
        permanent: true,
      },
      {
        source: '/blog/getting-started-with-the-near-wallet',
        destination: 'https://wallet.near.org',
        permanent: true,
      },
      {
        source: '/brand',
        destination: 'https://pages.near.org/brand',
        permanent: true,
      },
      {
        source: '/components',
        destination: 'https://dev.near.org/components',
        permanent: true,
      },
      {
        source: '/consensus',
        destination: 'https://nearconsensus2023.splashthat.com/',
        permanent: false,
      },
      {
        source: '/da',
        destination: '/data-availability',
        permanent: true,
      },
      {
        source: '/developer-governance',
        destination: 'https://neardevgov.org/',
        permanent: false,
      },
      {
        source: '/docs',
        destination: 'https://docs.near.org',
        permanent: true,
      },
      {
        source: '/ethcc',
        destination: 'https://www.eventbrite.com/e/near-ethcc-tickets-655229297467',
        permanent: false,
      },
      {
        source: '/ethdenver',
        destination: 'https://pages.near.org/ethdenver2024',
        permanent: true,
      },
      {
        source: '/files/:slug',
        destination: 'https://discovery-domain.org/papers/:slug.pdf',
        permanent: false,
      },
      {
        source: '/gateways',
        destination: 'https://dev.near.org/gateways',
        permanent: true,
      },
      {
        source: '/horizon',
        destination: 'https://dev.near.org/nearhorizon.near/component/HomePage',
        permanent: true,
      },
      {
        source: '/nearcon23.near/widget/Index',
        destination: 'https://nearcon.app',
        permanent: true,
      },
      {
        source: '/onboarding',
        destination: 'https://dev.near.org/onboarding',
        permanent: true,
      },
      {
        source: '/papers/:slug',
        destination: 'https://discovery-domain.org/papers/:slug.pdf',
        permanent: false,
      },
      {
        source: '/people',
        destination: 'https://dev.near.org/people',
        permanent: true,
      },
      {
        source: '/pitch',
        destination: 'https://nearpitchfestconsensus.splashthat.com/',
        permanent: false,
      },
      {
        source: '/sandbox',
        destination: 'https://dev.near.org/sandbox',
        permanent: true,
      },
      {
        source: '/signin',
        destination: 'https://dev.near.org/applications?requestAuth=1',
        permanent: false,
      },
      {
        source: '/signup',
        destination: 'https://dev.near.org/applications?requestAuth=1&createAccount=1',
        permanent: false,
      },
      {
        source: '/stackoverflow',
        destination:
          'https://dev.near.org/near/widget/NearOrg.HomePage?utm_source=stack&utm_medium=podcast&utm_campaign=stackoverflow_evergreen_bos_awareness',
        permanent: false,
      },
      {
        source: '/stakewars',
        destination: 'https://github.com/near/stakewars-iv',
        permanent: false,
      },
      {
        source: '/validators',
        destination: 'https://pages.near.org/validators',
        permanent: true,
      },

      // Handle dynamic widget/component path redirects:

      {
        source: '/:path/component/:slug',
        destination: 'https://dev.near.org/:path/component/:slug',
        permanent: true,
      },
      {
        source: '/:path/widget/:slug',
        destination: 'https://dev.near.org/:path/widget/:slug',
        permanent: true,
      },
    ];
  },
  rewrites: async () => {
    return [
      {
        source: '/blog',
        destination: '/build/blog/page/2/index.html',
      },
      {
        source: '/blog/:path*',
        destination: '/build/blog/:path*/index.html',
      },
    ];
  },
};

module.exports = nextConfig;
