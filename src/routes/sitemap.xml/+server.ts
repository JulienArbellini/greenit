export async function GET() {
  const urls = ["https://green-it.vercel.app/"];

  const sitemap = urls
    .map(
      (url) => `
      <url>
        <loc>${url}</loc>
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
