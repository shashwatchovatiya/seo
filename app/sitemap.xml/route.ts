// app/sitemap.xml/route.ts

import { NextResponse } from "next/server";

const BASE_URL = "https://wio.io";

export async function GET() {
  const staticPages = [
    { url: "", priority: 1.0 },
    { url: "/about", priority: 0.8 },
    { url: "/contact", priority: 0.6 },
    { url: "/features", priority: 0.7 },
    { url: "/pricing", priority: 0.7 },
    { url: "/help", priority: 0.5 },
  ];

  const dynamicPages = await getDynamicSlugs();

  const urls = [
    ...staticPages.map((page) => ({
      loc: `${BASE_URL}${page.url}`,
      priority: page.priority,
      changefreq: "weekly",
      lastmod: new Date().toISOString(),
    })),
    ...dynamicPages.map((slug) => ({
      loc: `${BASE_URL}/blog/${slug}`,
      priority: 0.6,
      changefreq: "weekly",
      lastmod: new Date().toISOString(),
    })),
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `<url>
  <loc>${url.loc}</loc>
  <lastmod>${url.lastmod}</lastmod>
  <changefreq>${url.changefreq}</changefreq>
  <priority>${url.priority}</priority>
</url>`
  )
  .join("\n")}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}

// Example dynamic blog pages
async function getDynamicSlugs(): Promise<string[]> {
  return ["post-1", "secure-banking-tips", "investment-guide"];
}
