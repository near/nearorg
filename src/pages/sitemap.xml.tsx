function generateSiteMap() {
    return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
    xmlns:xhtml="http://www.w3.org/1999/xhtml"
    xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
    xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
    <url>
        <loc>${process.env.NEXT_PUBLIC_HOSTNAME}/</loc>
        <lastmod>2024-06-17</lastmod>
    </url>
    </urlset>`;
}

type SiteMap = {
  props: object;
};

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export function getServerSideProps({ res }: { res: any }): SiteMap {
  const sitemap = generateSiteMap();

  res.setHeader('Content-Type', 'text/xml');

  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
