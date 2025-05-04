// app/sitemap.xml/route.ts

import { NextResponse } from "next/server";

const BASE_URL = "https://www.myawesomesite.com";

export async function GET() {
  // Example static and dynamic paths
  const staticPages = ["", "/about", "/contact"];
  const dynamicPages = await getDynamicSlugs(); // e.g., from DB or API

  const urls = [
    ...staticPages.map((page) => `${BASE_URL}${page}`),
    ...dynamicPages.map((slug) => `${BASE_URL}/blog/${slug}`),
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
    .map(
      (url) => `<url>
  <loc>${url}</loc>
  <lastmod>${new Date().toISOString()}</lastmod>
</url>`
    )
    .join("")}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}

async function getDynamicSlugs(): Promise<string[]> {
  // Replace with actual DB/API call
  return ["post-1", "post-2", "seo-optimized-post"];
}
