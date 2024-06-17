import type { GetServerSideProps } from 'next';

import { NearAILayout } from '@/components/layouts/NearAILayout';
import { MetaTags } from '@/components/MetaTags';
import { NearAI } from '@/components/pages/NearAI/NearAI';
import type { NextPageWithLayout } from '@/utils/types';

export const getServerSideProps = (async () => {
  const title = 'self-sovereignty-is-near-a-vision-for-our-ecosystem/index.html';

  const res = await fetch(`https://raw.githubusercontent.com/near/nearorg_marketing/main/public/blog/${title}`).catch(
    (e) => {
      throw e;
    },
  );

  const __html = await (await res.blob()).text();

  return { props: { bloghtml: { __html } } };
}) satisfies GetServerSideProps<{ bloghtml: any }>;

const NearAIPage: NextPageWithLayout = (props) => {
  return (
    <>
      <MetaTags title="NEAR AI" description="NEAR AI: Digital self-sovereignty for the creator economy." />

      <NearAILayout>
        <NearAI />
      </NearAILayout>
    </>
  );
};
export default NearAIPage;
