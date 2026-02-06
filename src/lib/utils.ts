import type { BlogPost } from "./types";

export function formatDate(iso: string): string {
  const date = new Date(iso);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function normalizeTag(tag: string): string {
  return tag
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

export function displayTag(tag: string): string {
  return tag
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function getPostsByTag(posts: BlogPost[], tag: string): BlogPost[] {
  const normalized = normalizeTag(tag);
  return posts.filter((post) =>
    post.tags.some((t) => normalizeTag(t) === normalized)
  );
}

export function getAllTags(posts: BlogPost[]): Map<string, number> {
  const tags = new Map<string, number>();
  for (const post of posts) {
    for (const tag of post.tags) {
      const key = normalizeTag(tag);
      tags.set(key, (tags.get(key) ?? 0) + 1);
    }
  }
  return tags;
}

export function estimateReadingTime(text: string): number {
  const words = text.split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}
