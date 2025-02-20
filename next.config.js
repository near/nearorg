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
      {
        source: '/shade',
        destination: `https://fringe-brow-647.notion.site/Based-Agents-19a09959836d8091bb8febb318cc09fd`,
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
