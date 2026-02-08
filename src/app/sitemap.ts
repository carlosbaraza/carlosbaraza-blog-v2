import type { MetadataRoute } from "next";
import { allPosts } from "@/content/blog";
import { getAllTags } from "@/lib/utils";
import { locales } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://carlosbaraza.com";

  const entries: MetadataRoute.Sitemap = [];

  for (const lang of locales) {
    const prefix = `${siteUrl}/${lang}`;

    entries.push(
      { url: prefix, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
      { url: `${prefix}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
      { url: `${prefix}/projects`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
      { url: `${prefix}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
      { url: `${prefix}/tags`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.5 },
    );

    for (const post of allPosts) {
      entries.push({
        url: `${prefix}/blog/${post.slug}`,
        lastModified: new Date(post.dateUpdated ?? post.datePublished),
        changeFrequency: "monthly" as const,
        priority: 0.6,
      });
    }

    const tags = getAllTags(allPosts);
    for (const tag of tags.keys()) {
      entries.push({
        url: `${prefix}/tags/${tag}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.4,
      });
    }
  }

  return entries;
}
