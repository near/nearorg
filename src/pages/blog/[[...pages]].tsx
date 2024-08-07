import type { GetServerSideProps } from 'next';
import { useCallback, useEffect } from 'react';

import { useDefaultLayout } from '@/hooks/useLayout';
import type { NextPageWithLayout } from '@/utils/types';

export const getServerSideProps = (async ({ resolvedUrl }) => {
  const blogParts = resolvedUrl.split('blog/');
  const blog_branch = 'https://near.org' === process.env.NEXT_PUBLIC_HOSTNAME ? 'main' : 'develop';
  let title = 'index.html';
  if (blogParts[1] !== title) {
    title = `${blogParts[1].substring(0, blogParts[1].indexOf('/'))}/index.html`;
  }
  const res = await fetch(
    `https://raw.githubusercontent.com/near/nearorg_marketing/${blog_branch}/public/blog/${title}`,
  ).catch((e) => {
    throw e;
  });

  const __html = await (await res.blob()).text();

  return { props: { bloghtml: { __html } } };
}) satisfies GetServerSideProps<{ bloghtml: any }>;

const StaticBlogPage: NextPageWithLayout = (props) => {
  const onBlogLinkClick = useCallback((event: any) => {
    const url = event.target.href;
    if (url) {
      event.preventDefault();
      window.location = url;
    }
  }, []);

  useEffect(() => {
    //this query fetches almost all links, except the clickable elements that are children of a tags
    // like document.querySelectorAll("h3[class^='headline_type-4']")
    document.querySelectorAll("a[href^='/blog").forEach((element) => {
      element.addEventListener('click', onBlogLinkClick);
    });

    return () => {
      document.querySelectorAll("a[href^='/blog").forEach((element) => {
        element.removeEventListener('click', onBlogLinkClick);
      });
    };
  }, [onBlogLinkClick]);

  return (
    <div className="gateway-page-container">
      <div dangerouslySetInnerHTML={props.bloghtml} />
    </div>
  );
};

StaticBlogPage.getLayout = useDefaultLayout;

export default StaticBlogPage;
