import { allPosts } from "@/content/blog";
import { siteConfig } from "@/content/site-config";

export function GET() {
  const posts = allPosts.sort(
    (a, b) =>
      new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime()
  );

  const escapeXml = (str: string) =>
    str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&apos;");

  const items = posts
    .map((post) => {
      const url = `${siteConfig.siteUrl}/blog/${post.slug}`;
      return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${url}</link>
      <guid>${url}</guid>
      <pubDate>${new Date(post.datePublished).toUTCString()}</pubDate>${
        post.summary
          ? `\n      <description>${escapeXml(post.summary)}</description>`
          : ""
      }${
        post.tags.length > 0
          ? post.tags
              .map((tag) => `\n      <category>${escapeXml(tag)}</category>`)
              .join("")
          : ""
      }
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(siteConfig.title)}</title>
    <link>${siteConfig.siteUrl}</link>
    <description>${escapeXml(siteConfig.description)}</description>
    <language>en</language>
    <lastBuildDate>${new Date(posts[0]?.datePublished ?? Date.now()).toUTCString()}</lastBuildDate>
    <atom:link href="${siteConfig.siteUrl}/feed.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}
