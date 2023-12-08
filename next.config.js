/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async () => {
    return [
      {
        source: '/signup',
        destination:
          'https://dev.near.org/signup',
        permanent: true,
      },
      {
        source: '/signin',
        destination:
          'https://dev.near.org/signin',
        permanent: true,
      },
      {
        source: '/data-availability',
        destination:
          'https://dev.near.org/data-availability',
        permanent: true,
      },
      {
        source: '/open-web-applications',
        destination:
          'https://dev.near.org/open-web-applications',
        permanent: true,
      },
      {
        source: '/fast-auth-and-relayers',
        destination:
          'https://dev.near.org/fast-auth-and-relayers',
        permanent: true,
      },
      {
        source: '/data-infrastructure',
        destination:
          'https://dev.near.org/data-infrastructure',
        permanent: true,
      },
      {
        source: '/ecosystem',
        destination:
          'https://dev.near.org/ecosystem',
        permanent: true,
      },
      {
        source: '/sandbox',
        destination:
          'https://dev.near.org/sandbox',
        permanent: true,
      },
      {
        source: '/onboarding',
        destination:
          'https://dev.near.org/onboarding',
        permanent: true,
      },
      {
        source: '/:path/widget/:slug',  // TODO Update these to replace 'widget' with 'component' with corresponding change in near-discovery
        destination:
          'https://dev.near.org/:path/widget/:slug',
        permanent: true,
      },
      {
        source: '/horizon',
        destination:
          'https://dev.near.org/horizon/widget/homePage',
        permanent: true,
      },
      {
        source: '/brand',
        destination:
          'https://pages.near.org/brand',
        permanent: true,
      }
    ]
  },
  rewrites: async () => {
    return [
      {
        source: '/',
        destination: '/index.html',
      },
      {
        source: '/:path',
        destination: '/:path/index.html',
      },
      {
        source: '/blog',
        destination: '/blog/page/2/index.html',
      },
      {
        source: '/blog/:path*',
        destination: '/blog/:path*/index.html',
      },
      {
        source: '/learn/:path*',
        destination: '/learn/:path*/index.html',
      },
      {
        source: '/near-events/:path*',
        destination: '/near-events/:path*/index.html',
      },
      {
        source: '/case-studies/:path*',
        destination: '/case-studies/:path*/index.html',
      },
      {
        source: '/use-cases/:path*',
        destination: '/use-cases/:path*/index.html',
      },
      {
        source: '/coverages/:path*',
        destination: '/coverages/:path*/index.html',
      },
      {
        source: '/events/:path*',
        destination: '/events/:path*/index.html',
      },
      {
        source: '/ecosystem/:path*',
        destination: '/ecosystem/:path*/index.html',
      },
      {
        source: '/developers/:path*',
        destination: '/developers/:path*/index.html',
      },
      {
        source: '/papers/:path*',
        destination: '/papers/:path*/index.html',
      },
      {
        source: '/press-releases/:path*',
        destination: '/press-releases/:path*/index.html',
      },
    ]
  },
}

module.exports = nextConfig
