import type { StaticImageData } from "next/image";
import Image from "next/image";
import type { BlogPost } from "@/lib/types";
import type { Locale } from "@/lib/i18n";
import { formatDate } from "@/lib/utils";
import { TagBadge } from "./TagBadge";
import { MarkdownActions } from "./MarkdownActions";
import { LanguageSwitcher } from "./LanguageSwitcher";

interface PostLayoutProps {
  post: BlogPost;
  children: React.ReactNode;
  heroImage?: StaticImageData;
  lang?: Locale;
}

export function PostLayout({ post, children, heroImage, lang = "en" }: PostLayoutProps) {
  const fallbackHero = post.images?.[0];
  const t = post.translations?.[lang];
  const title = t?.title ?? post.title;
  const hasTranslations =
    post.translations && Object.keys(post.translations).length > 0;

  return (
    <article>
      {heroImage ? (
        <div className="max-w-6xl mx-auto mb-10">
          <div className="aspect-[16/9] overflow-hidden rounded-[50px] md:rounded-[100px]">
            <Image
              src={heroImage}
              alt={title}
              placeholder="blur"
              className="w-full object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1024px"
              priority
            />
          </div>
        </div>
      ) : fallbackHero ? (
        <div className="max-w-6xl mx-auto mb-10">
          <div className="aspect-[16/9] overflow-hidden rounded-[50px] md:rounded-[100px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={fallbackHero}
              alt={title}
              className="w-full object-cover"
            />
          </div>
        </div>
      ) : null}

      <header className="max-w-5xl mx-auto mb-12 text-center">
        <time
          dateTime={post.datePublished}
          className="font-sans text-xs uppercase tracking-wider text-muted"
        >
          {formatDate(post.datePublished, lang)}
        </time>

        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mt-4 mb-10">
          {title}
        </h1>

        {post.tags.length > 0 ? (
          <div className="flex flex-wrap justify-center gap-2">
            {post.tags.map((tag) => (
              <TagBadge key={tag} tag={tag} lang={lang} />
            ))}
          </div>
        ) : null}

        <div className="flex justify-center items-center gap-3 mt-6 flex-wrap">
          <MarkdownActions slug={post.slug} lang={lang} />
          {hasTranslations ? (
            <LanguageSwitcher slug={post.slug} currentLocale={lang} />
          ) : null}
        </div>
      </header>

      <div className="prose mx-auto">{children}</div>
    </article>
  );
}
