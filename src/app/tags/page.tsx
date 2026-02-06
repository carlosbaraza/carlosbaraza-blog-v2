import Link from "next/link";
import { allPosts } from "@/content/blog";
import { getAllTags, displayTag } from "@/lib/utils";

export const metadata = {
  title: "Tags",
  description: "Browse blog posts by topic.",
};

export default function TagsPage() {
  const tags = getAllTags(allPosts);
  const sortedTags = [...tags.entries()].sort((a, b) => b[1] - a[1]);

  return (
    <>
      <h1 className="font-serif text-3xl font-bold mb-8">Tags</h1>
      <div className="flex flex-wrap gap-3">
        {sortedTags.map(([tag, count]) => (
          <Link
            key={tag}
            href={`/tags/${tag}`}
            className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 font-sans text-sm text-text hover:border-accent/40 hover:text-accent transition-colors"
          >
            {displayTag(tag)}
            <span className="text-xs text-muted">({count})</span>
          </Link>
        ))}
      </div>
    </>
  );
}
