import Link from "next/link";
import type { BlogPost } from "@/lib/types";
import { formatDate } from "@/lib/utils";
import { TagBadge } from "./TagBadge";

interface PostCardProps {
  post: BlogPost;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <article className="py-6 border-b border-border last:border-b-0">
      <div className="flex flex-col gap-2">
        <time
          dateTime={post.datePublished}
          className="font-sans text-sm text-muted"
        >
          {formatDate(post.datePublished)}
        </time>

        <h3 className="font-serif text-xl font-bold leading-snug">
          <Link
            href={`/blog/${post.slug}`}
            className="text-text hover:text-accent transition-colors"
          >
            {post.title}
          </Link>
        </h3>

        {post.tags.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <TagBadge key={tag} tag={tag} />
            ))}
          </div>
        ) : null}

        {post.summary ? (
          <p className="font-serif text-text-secondary leading-relaxed line-clamp-2">
            {post.summary}
          </p>
        ) : null}
      </div>
    </article>
  );
}
