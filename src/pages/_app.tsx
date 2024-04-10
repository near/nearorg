import '@/styles/reset.css';
import '@/styles/theme.css';
import '@/styles/globals.css';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';

import type { NextPageWithLayout } from '@/utils/types';

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <Head>
        <link rel="icon" href="favicon.ico" />
        <link rel="manifest" href="manifest.json" />

        {/* TODO: Do we need this canonical link tag? */}
        {/* <link rel="canonical" href={`${process.env.NEXT_PUBLIC_HOSTNAME}${router.asPath}`} key="canonical" /> */}
      </Head>

      <Script id="phosphor-icons" src="https://unpkg.com/@phosphor-icons/web@2.0.3" async />

      {getLayout(<Component {...pageProps} />)}
    </>
  );
}
