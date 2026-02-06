import Link from "next/link";
import { normalizeTag, displayTag } from "@/lib/utils";

interface TagBadgeProps {
  tag: string;
}

export function TagBadge({ tag }: TagBadgeProps) {
  return (
    <Link
      href={`/tags/${normalizeTag(tag)}`}
      className="inline-block font-sans text-xs font-medium uppercase tracking-wide text-accent hover:text-accent-hover transition-colors"
    >
      {displayTag(tag)}
    </Link>
  );
}
