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
      const tr = post.translations?.es;
      const title = tr?.title ?? post.title;
      const summary = tr?.summary ?? post.summary;
      const url = `${siteConfig.siteUrl}/es/blog/${post.slug}`;
      return `    <item>
      <title>${escapeXml(title)}</title>
      <link>${url}</link>
      <guid>${url}</guid>
      <pubDate>${new Date(post.datePublished).toUTCString()}</pubDate>${
        summary
          ? `\n      <description>${escapeXml(summary)}</description>`
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
    <link>${siteConfig.siteUrl}/es</link>
    <description>${escapeXml(siteConfig.description)}</description>
    <language>es</language>
    <lastBuildDate>${new Date(posts[0]?.datePublished ?? Date.now()).toUTCString()}</lastBuildDate>
    <atom:link href="${siteConfig.siteUrl}/feed-es.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}
