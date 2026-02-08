import Link from "next/link";
import { normalizeTag, displayTag } from "@/lib/utils";

interface TagBadgeProps {
  tag: string;
  linked?: boolean;
}

const tagClassName =
  "inline-block font-sans text-xs font-medium uppercase tracking-wide text-accent hover:text-accent-hover transition-colors";

export function TagBadge({ tag, linked = true }: TagBadgeProps) {
  if (!linked) {
    return <span className={tagClassName}>{displayTag(tag)}</span>;
  }

  return (
    <Link
      href={`/tags/${normalizeTag(tag)}`}
      className={tagClassName}
    >
      {displayTag(tag)}
    </Link>
  );
}
