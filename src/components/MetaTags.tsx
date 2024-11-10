import Head from 'next/head';

type Props = {
  title?: string;
  description?: string;
  image?: string | null;
};

export function MetaTags(props: Props) {
  return (
    <Head>
      <title>{props.title ?? 'NEAR AI - Building the world&apos;s best truly open AI'}</title>
      <meta
        name="description"
        content={
          props.description ??
          'Join the community building the user-owned future of AI. NEAR AI is focused on creating privacy-preserving, open-source AI that benefits users, not corporations.'
        }
      />

      {/* OpenGraph Tags */}
      <meta property="og:title" content="NEAR AI - Building the world's best truly open AI" />
      <meta
        property="og:description"
        content="Join the community building the user-owned future of AI. NEAR AI is focused on creating privacy-preserving, open-source AI that benefits users, not corporations."
      />
      <meta property="og:url" content="https://near.ai" />
      <meta property="og:site_name" content="NEAR AI" />
      <meta property="og:type" content="website" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="NEAR AI - Building the world's best truly open AI" />
      <meta
        name="twitter:description"
        content="Join the community building the user-owned future of AI. NEAR AI is focused on creating privacy-preserving, open-source AI that benefits users, not corporations."
      />
      <meta name="twitter:creator" content="@near_ai" />

      {/* Theme and SEO */}
      <meta name="theme-color" content="#00EB9A" />
      <meta name="robots" content="index, follow" />

      <link rel="canonical" href="https://near.ai" />
    </Head>
  );
}
