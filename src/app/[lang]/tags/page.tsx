import Link from "next/link";
import { allPosts } from "@/content/blog";
import { getAllTags, displayTag } from "@/lib/utils";
import { isValidLocale, localePath } from "@/lib/i18n";
import { t } from "@/lib/translations";

export const metadata = {
  title: "Tags",
  description: "Browse blog posts by topic.",
};

export default async function TagsPage(props: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: langParam } = await props.params;
  const lang = isValidLocale(langParam) ? langParam : ("en" as const);
  const tags = getAllTags(allPosts);
  const sortedTags = [...tags.entries()].sort((a, b) => b[1] - a[1]);

  return (
    <>
      <h1 className="font-serif text-3xl font-bold mb-8">{t(lang, "tags.title")}</h1>
      <div className="flex flex-wrap gap-3">
        {sortedTags.map(([tag, count]) => (
          <Link
            key={tag}
            href={localePath(`/tags/${tag}`, lang)}
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
