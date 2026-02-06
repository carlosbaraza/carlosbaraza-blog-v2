import type { BlogPost } from "@/lib/types";
import { formatDate } from "@/lib/utils";
import { TagBadge } from "./TagBadge";
import { Prose } from "@/components/shared/Prose";

interface PostLayoutProps {
  post: BlogPost;
  children: React.ReactNode;
}

export function PostLayout({ post, children }: PostLayoutProps) {
  return (
    <article>
      <header className="mb-8">
        <time
          dateTime={post.datePublished}
          className="font-sans text-sm text-muted"
        >
          {formatDate(post.datePublished)}
        </time>

        <h1 className="font-serif text-3xl sm:text-4xl font-bold leading-tight mt-2 mb-4">
          {post.title}
        </h1>

        {post.tags.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <TagBadge key={tag} tag={tag} />
            ))}
          </div>
        ) : null}
      </header>

      <Prose>{children}</Prose>
    </article>
  );
}
