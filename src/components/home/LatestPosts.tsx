import Link from "next/link";
import { allPosts } from "@/content/blog";
import { PostCard } from "@/components/blog/PostCard";

export function LatestPosts() {
  const latestPosts = allPosts.slice(0, 5);

  return (
    <section className="py-8">
      <div className="flex items-baseline justify-between mb-12">
        <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
          Latest Posts
        </h2>
        <Link
          href="/blog"
          className="font-sans text-xs uppercase tracking-wider text-accent hover:text-accent-hover transition-colors"
        >
          All posts &rarr;
        </Link>
      </div>

      <div className="flex flex-col gap-16">
        {latestPosts.map((post) => (
          <PostCard key={post.slug} post={post} featured />
        ))}
      </div>
    </section>
  );
}
