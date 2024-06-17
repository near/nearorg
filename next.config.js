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
        source: '/privacy',
        destination: `${appGatewayHostname}/privacy`,
        permanent: false,
      },

    ];
  },
  rewrites: async () => [
    {
      source: '/api/analytics/:path*',
      destination: 'https://near.dataplane.rudderstack.com/:path*',
    },
    {
      source: '/blog/:path*',
      destination: '/blog/:path*/index.html',
    },
  ],
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
