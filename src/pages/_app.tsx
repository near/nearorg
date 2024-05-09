import '@/styles/reset.css';
import '@/styles/theme.css';
import '@/styles/globals.css';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Script from 'next/script';
import { useEffect } from 'react';

import { CookiePrompt } from '@/components/CookiePrompt';
import { useClickTracking } from '@/hooks/useClickTracking';
import { usePageAnalytics } from '@/hooks/usePageAnalytics';
import { init as initializeAnalytics, setReferrer } from '@/utils/analytics';
import type { NextPageWithLayout } from '@/utils/types';

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  usePageAnalytics();
  useClickTracking();
  const router = useRouter();

  useEffect(() => {
    router.events.on('routeChangeStart', () => {
      //save a reference to the currentl URL before the route change event completes
      setReferrer(window.location.href);
    });
  });

  useEffect(() => {
    initializeAnalytics();
  }, []);

  return (
    <>
      <Head>
        <link rel="icon" href="favicon.ico" />
        <link rel="manifest" href="manifest.json" />

        {/* TODO: Do we need this canonical link tag? */}
        {/* <link rel="canonical" href={`${process.env.NEXT_PUBLIC_HOSTNAME}${router.asPath}`} key="canonical" /> */}
      </Head>

      <Script id="phosphor-icons" src="https://unpkg.com/@phosphor-icons/web" async />

      {getLayout(<Component {...pageProps} />)}

      <CookiePrompt />
    </>
  );
}
