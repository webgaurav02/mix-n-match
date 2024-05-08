import { getServerSideSitemap } from 'next-sitemap'

export const getServerSideProps = async ({ res }) => {
  const sitemap = await getServerSideSitemap(req, res, {
    /* your configuration */
    pages: [
      // Add all your pages here
      { loc: 'https://event.onlybees.in/', changefreq: 'daily', priority: 1.0 },
    //   { loc: 'https://event.onlybees.in/about', changefreq: 'weekly', priority: 0.8 },
    //   { loc: 'https://event.onlybees.in/events', changefreq: 'weekly', priority: 0.9 },
      // Add more pages as needed
    ],
  })

  return {
    props: {
      ...sitemap,
    },
  }
}

export default function SiteMap() {}
