import Link from "next/link";
import { allPosts } from "@/content/blog";
import { PostCard } from "@/components/blog/PostCard";
import type { Locale } from "@/lib/i18n";
import { localePath } from "@/lib/i18n";
import { t } from "@/lib/translations";

interface LatestPostsProps {
  lang?: Locale;
}

export function LatestPosts({ lang = "en" }: LatestPostsProps) {
  const latestPosts = allPosts.slice(0, 5);

  return (
    <section className="py-8">
      <div className="flex items-baseline justify-between mb-12">
        <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
          {t(lang, "home.latestPosts")}
        </h2>
        <Link
          href={localePath("/blog", lang)}
          className="font-sans text-xs uppercase tracking-wider text-accent hover:text-accent-hover transition-colors"
        >
          {t(lang, "home.allPosts")} &rarr;
        </Link>
      </div>

      <div className="flex flex-col gap-16">
        {latestPosts.map((post) => (
          <PostCard key={post.slug} post={post} featured lang={lang} />
        ))}
      </div>
    </section>
  );
}
