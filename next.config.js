const appGatewayHostname = 'https://dev.near.org'; // This will probably change to "apps.near.org"

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  redirects: async () => {
    return [
      {
        source: '/about',
        destination: `/`,
        permanent: false,
      },
      {
        source: '/beta',
        destination: `/`,
        permanent: false,
      },
      {
        source: '/nearai-master-plan',
        destination: `/master-plan`,
        permanent: false,
      },
    ];
  },
  rewrites: async () => [],
  headers: async () => [
    {
      source: '/:path*',
      headers: [
        {
          key: 'Referrer-Policy',
          value: 'strict-origin-when-cross-origin',
        },
      ],
    },
  ],
};

module.exports = nextConfig;
