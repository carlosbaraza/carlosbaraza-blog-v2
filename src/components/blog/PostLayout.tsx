import type { StaticImageData } from "next/image";
import Image from "next/image";
import type { BlogPost } from "@/lib/types";
import { formatDate } from "@/lib/utils";
import { TagBadge } from "./TagBadge";
import { MarkdownActions } from "./MarkdownActions";
import { Prose } from "@/components/shared/Prose";

interface PostLayoutProps {
  post: BlogPost;
  children: React.ReactNode;
  heroImage?: StaticImageData;
}

export function PostLayout({ post, children, heroImage }: PostLayoutProps) {
  const fallbackHero = post.images?.[0];

  return (
    <article>
      {heroImage ? (
        <div className="max-w-5xl mx-auto mb-10">
          <div className="aspect-[21/9] overflow-hidden rounded-sm">
            <Image
              src={heroImage}
              alt={post.title}
              placeholder="blur"
              className="w-full h-full object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1024px"
              priority
            />
          </div>
        </div>
      ) : fallbackHero ? (
        <div className="max-w-5xl mx-auto mb-10">
          <div className="aspect-[21/9] overflow-hidden rounded-sm">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={fallbackHero}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      ) : null}

      <header className="max-w-4xl mx-auto mb-12 text-center">
        <time
          dateTime={post.datePublished}
          className="font-sans text-xs uppercase tracking-wider text-muted"
        >
          {formatDate(post.datePublished)}
        </time>

        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mt-4 mb-6">
          {post.title}
        </h1>

        {post.tags.length > 0 ? (
          <div className="flex flex-wrap justify-center gap-2">
            {post.tags.map((tag) => (
              <TagBadge key={tag} tag={tag} />
            ))}
          </div>
        ) : null}

        <div className="flex justify-center mt-4">
          <MarkdownActions slug={post.slug} />
        </div>
      </header>

      <Prose>{children}</Prose>
    </article>
  );
}
