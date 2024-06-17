// code from [[...pages]].tsx adapted to pass in bloghtml instead of fetching it by url.
import { useCallback, useEffect } from 'react';

import type { NextPageWithLayout } from '@/utils/types';

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
    <>
      <div dangerouslySetInnerHTML={props.bloghtml} />
      <hr />
    </>
  );
};

export default StaticBlogPage;
