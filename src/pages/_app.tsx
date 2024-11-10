import '@/styles/reset.css';
import '@/styles/theme.css';
import '@/styles/globals.css';

import { Analytics } from '@vercel/analytics/next';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';

import { CookiePrompt } from '@/components/CookiePrompt';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Analytics />
      <Head>
        <link rel="icon" href="favicon.ico" />
        <link rel="manifest" href="manifest.json" />

        {/* TODO: Do we need this canonical link tag? */}
        {/* <link rel="canonical" href={`${process.env.NEXT_PUBLIC_HOSTNAME}${router.asPath}`} key="canonical" /> */}
      </Head>

      <Script id="phosphor-icons" src="https://unpkg.com/@phosphor-icons/web" async />

      <Component {...pageProps} />

      <CookiePrompt />
    </>
  );
}
