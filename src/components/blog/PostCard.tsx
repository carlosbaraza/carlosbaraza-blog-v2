import Link from "next/link";
import Image from "next/image";
import type { BlogPost } from "@/lib/types";
import { formatDate } from "@/lib/utils";
import { TagBadge } from "./TagBadge";
import { NoiseDistortionImage } from "@/components/shared/NoiseDistortionImage";
import placeholderImage from "@/../public/images/placeholder.png";

interface PostCardProps {
  post: BlogPost;
  featured?: boolean;
}

function CardImage({ src, alt }: { src?: string; alt: string }) {
  if (src) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
    );
  }

  return (
    <Image
      src={placeholderImage}
      alt=""
      placeholder="blur"
      fill
      className="object-cover"
      sizes="(max-width: 1024px) 100vw, 50vw"
    />
  );
}

export function PostCard({ post, featured = false }: PostCardProps) {
  const imageUrl = post.images?.[0];

  if (featured) {
    return (
      <article className="group">
        <Link href={`/blog/${post.slug}`} className="block">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
            <NoiseDistortionImage groupHover className="relative aspect-[16/9] overflow-hidden rounded-[50px] bg-surface">
              <CardImage src={imageUrl} alt={post.title} />
            </NoiseDistortionImage>

            <div className="flex flex-col justify-center">
              <time
                dateTime={post.datePublished}
                className="font-sans text-xs uppercase tracking-wider text-muted mb-3"
              >
                {formatDate(post.datePublished)}
              </time>

              <h3 className="font-display text-3xl sm:text-4xl font-bold leading-[1.15] tracking-tight text-text group-hover:text-accent transition-colors mb-4">
                {post.title}
              </h3>

              {post.tags.length > 0 ? (
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <TagBadge key={tag} tag={tag} linked={false} />
                  ))}
                </div>
              ) : null}

              {post.summary ? (
                <p className="font-serif text-text-secondary leading-relaxed line-clamp-3">
                  {post.summary}
                </p>
              ) : null}
            </div>
          </div>
        </Link>
      </article>
    );
  }

  return (
    <article className="group">
      <Link href={`/blog/${post.slug}`} className="block">
        <NoiseDistortionImage groupHover className="relative aspect-[4/3] overflow-hidden rounded-sm bg-surface mb-4">
          <CardImage src={imageUrl} alt={post.title} />
        </NoiseDistortionImage>

        <time
          dateTime={post.datePublished}
          className="font-sans text-xs uppercase tracking-wider text-muted"
        >
          {formatDate(post.datePublished)}
        </time>

        <h3 className="font-display text-xl sm:text-2xl font-bold leading-snug tracking-tight text-text group-hover:text-accent transition-colors mt-2 mb-2">
          {post.title}
        </h3>

        {post.tags.length > 0 ? (
          <div className="flex flex-wrap gap-2 mb-2">
            {post.tags.map((tag) => (
              <TagBadge key={tag} tag={tag} linked={false} />
            ))}
          </div>
        ) : null}

        {post.summary ? (
          <p className="font-serif text-sm text-text-secondary leading-relaxed line-clamp-2">
            {post.summary}
          </p>
        ) : null}
      </Link>
    </article>
  );
}
