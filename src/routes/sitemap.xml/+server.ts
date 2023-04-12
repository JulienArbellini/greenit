export async function GET() {
  const urls = ["https://tesla.birdi.ng/"];

  const pages = [
    {
      loc: `${urls[0]}`,
      changefreq: "monthly",
      priority: 1,
    },
    {
      loc: `${urls[0]}` + "model-s",
      changefreq: "monthly",
      priority: 0.7,
    },
    {
      loc: `${urls[0]}` + "model-3",
      changefreq: "monthly",
      priority: 0.7,
    },
    {
      loc: `${urls[0]}` + "model-x",
      changefreq: "monthly",
      priority: 0.7,
    },
    {
      loc: `${urls[0]}` + "model-y",
      changefreq: "monthly",
      priority: 0.7,
    },
  ];

  const sitemap = pages
    .map(
      (page) => `
      <url>
        <loc>${page.loc}</loc>
        <changefreq>${page.changefreq}</changefreq>
        <priority>${page.priority}</priority>
      </url>
      `
    )
    .join("");

  return new Response(
    `
      <?xml version="1.0" encoding="UTF-8" ?>
      <urlset
        xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="https://www.w3.org/1999/xhtml"
        xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
        xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
      >
      ${sitemap}
      </urlset>`.trim(),
    {
      headers: {
        "Content-Type": "application/xml",
      },
    }
  );
}
