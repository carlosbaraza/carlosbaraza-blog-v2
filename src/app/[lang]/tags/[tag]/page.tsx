import { notFound } from "next/navigation";
import { allPosts } from "@/content/blog";
import { PostCard } from "@/components/blog/PostCard";
import { getAllTags, getPostsByTag, displayTag } from "@/lib/utils";
import type { Metadata } from "next";
import { isValidLocale } from "@/lib/i18n";
import { t } from "@/lib/translations";

interface TagPageProps {
  params: Promise<{ tag: string; lang: string }>;
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
  const { tag, lang: langParam } = await props.params;
  const lang = isValidLocale(langParam) ? langParam : ("en" as const);
  const posts = getPostsByTag(allPosts, tag);

  if (posts.length === 0) {
    notFound();
  }

  return (
    <>
      <h1 className="font-serif text-3xl font-bold mb-8">
        {t(lang, "tags.tagged")}: {displayTag(tag)}
      </h1>
      <div>
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} lang={lang} />
        ))}
      </div>
    </>
  );
}
