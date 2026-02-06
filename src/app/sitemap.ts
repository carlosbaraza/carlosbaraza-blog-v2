import type { MetadataRoute } from "next";
import { allPosts } from "@/content/blog";
import { getAllTags } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://carlosbaraza.com";

  const staticPages: MetadataRoute.Sitemap = [
    { url: siteUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteUrl}/projects`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/tags`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.5 },
  ];

  const blogPages: MetadataRoute.Sitemap = allPosts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.dateUpdated ?? post.datePublished),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const tags = getAllTags(allPosts);
  const tagPages: MetadataRoute.Sitemap = [...tags.keys()].map((tag) => ({
    url: `${siteUrl}/tags/${tag}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.4,
  }));

  return [...staticPages, ...blogPages, ...tagPages];
}
