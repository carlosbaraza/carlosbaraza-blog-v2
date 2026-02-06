import Link from "next/link";
import { allPosts } from "@/content/blog";
import { PostCard } from "@/components/blog/PostCard";

export function LatestPosts() {
  const latestPosts = allPosts.slice(0, 5);

  return (
    <section className="py-8">
      <div className="flex items-baseline justify-between mb-4">
        <h2 className="font-serif text-2xl font-bold">Latest Posts</h2>
        <Link
          href="/blog"
          className="font-sans text-sm text-accent hover:text-accent-hover transition-colors"
        >
          All posts &rarr;
        </Link>
      </div>
      <div>
        {latestPosts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
