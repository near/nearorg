import type { GetServerSideProps } from 'next';
import { useCallback, useEffect } from 'react';

import { useDefaultLayout } from '@/hooks/useLayout';
import type { NextPageWithLayout } from '@/utils/types';

export const getServerSideProps = (async ({ resolvedUrl }) => {
  const remoteUrl = `https://pages.near.org${resolvedUrl}`;
  const res = await fetch(remoteUrl).catch((e) => {
    throw e;
  });

  const html = await (await res.blob()).text();

  const replacedHtml = replaceAll(html);

  return { props: { bloghtml: { __html: replacedHtml } } };
}) satisfies GetServerSideProps<{ bloghtml: any }>;

function searchAndReplace(content: string, searchString: string, replacementString: string): string {
  const regex = new RegExp(searchString, 'g');
  return content.replace(regex, replacementString);
}

function replaceAll(bloghtml: string): string {
  bloghtml = searchAndReplace(bloghtml, '\\/wp\\-content', 'https://pages.near.org/wp-content');
  bloghtml = searchAndReplace(bloghtml, 'https:\\/\\/pages\\.near\\.org\\/', '/');
  bloghtml = searchAndReplace(bloghtml, '="\\/wp\\-content', '="https://pages.near.org/wp-content');
  bloghtml = searchAndReplace(bloghtml, '="\\/wp\\-includes', '="https://pages.near.org/wp-includes');
  bloghtml = searchAndReplace(bloghtml, '\\?paged=', 'page/');
  bloghtml = searchAndReplace(
    bloghtml,
    '=https:\\/\\/s3\\-eu\\-west\\-2\\.amazonaws\\.com\\/lawcom\\-prod\\-storage\\-11jsxou24uy7q\\/uploads\\/2022\\/07\\/Digital\\-Assets\\-Consultation\\-Paper\\-Law\\-Commission\\-1\\.pdf',
    '',
  );

  return bloghtml;
}

const StaticBlogPage: NextPageWithLayout = (props) => {
  const onBlogLinkClick = useCallback((event: any) => {
    const url = event.target.href;
    if (url) {
      // keeps /blog links from opening in a new window
      event.preventDefault();
      window.location = url;
    }
  }, []);

  useEffect(() => {
    //this query fetches almost all links, except the clickable elements that are children of a tags
    // like document.querySelectorAll("h3[class^='headline_type-4']")
    document.querySelectorAll("a[href^='/blog']").forEach((element) => {
      element.addEventListener('click', onBlogLinkClick);
    });

    // Remove the footer element
    const footerElement = document.querySelector('.gateway-page-container .near-global-footer');
    if (footerElement) {
      footerElement.remove();
    }

    // Remove the top nav element (only shows up on `/blog/tag/*` pages)
    const topNavElement = document.querySelector('.gateway-page-container nr-subnav');
    if (topNavElement) {
      topNavElement.remove();
    }

    return () => {
      document.querySelectorAll("a[href^='/blog']").forEach((element) => {
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
