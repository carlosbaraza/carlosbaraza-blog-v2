import { notFound } from "next/navigation";
import { allPosts } from "@/content/blog";
import { PostCard } from "@/components/blog/PostCard";
import { getAllTags, getPostsByTag, displayTag, normalizeTag } from "@/lib/utils";
import type { Metadata } from "next";

interface TagPageProps {
  params: Promise<{ tag: string }>;
}

export async function generateStaticParams() {
  const tags = getAllTags(allPosts);
  return [...tags.keys()].map((tag) => ({ tag }));
}

export async function generateMetadata(props: TagPageProps): Promise<Metadata> {
  const { tag } = await props.params;
  return {
    title: `Posts tagged "${displayTag(tag)}"`,
    description: `All blog posts tagged with ${displayTag(tag)}.`,
  };
}

export default async function TagPage(props: TagPageProps) {
  const { tag } = await props.params;
  const posts = getPostsByTag(allPosts, tag);

  if (posts.length === 0) {
    notFound();
  }

  return (
    <>
      <h1 className="font-serif text-3xl font-bold mb-8">
        Tagged: {displayTag(tag)}
      </h1>
      <div>
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </>
  );
}
