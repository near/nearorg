/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async () => {
    return [
      {
        source: '/signup',
        destination:
          'https://discovery-devnetwork.vercel.app/signup',
        permanent: true,
      },
      {
        source: '/data-availability',
        destination:
          'https://discovery-devnetwork.vercel.app/data-availability',
        permanent: true,
      },
      {
        source: '/open-web-applications',
        destination:
          'https://discovery-devnetwork.vercel.app/open-web-applications',
        permanent: true,
      },
      {
        source: '/fast-auth-and-relayers',
        destination:
          'https://discovery-devnetwork.vercel.app/fast-auth-and-relayers',
        permanent: true,
      },
      {
        source: '/data-infrastructure',
        destination:
          'https://discovery-devnetwork.vercel.app/data-infrastructure',
        permanent: true,
      },
      {
        source: '/ecosystem',
        destination:
          'https://discovery-devnetwork.vercel.app/ecosystem',
        permanent: true,
      },
      {
        source: '/sandbox',
        destination:
          'https://discovery-devnetwork.vercel.app/sandbox',
        permanent: true,
      },
      {
        source: '/onboarding',
        destination:
          'https://discovery-devnetwork.vercel.app/onboarding',
        permanent: true,
      },
      {
        source: '/:path/widget/:slug',
        destination:
          'https://discovery-devnetwork.vercel.app/:path/component/:slug',
        permanent: true,
      },
      {
        source: '/horizon',
        destination:
          'https://discovery-devnetwork.vercel.app/horizon/component/homePage',
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
