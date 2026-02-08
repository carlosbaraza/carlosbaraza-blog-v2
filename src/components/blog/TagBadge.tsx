import Link from "next/link";
import { normalizeTag, displayTag } from "@/lib/utils";
import type { Locale } from "@/lib/i18n";
import { localePath } from "@/lib/i18n";

interface TagBadgeProps {
  tag: string;
  linked?: boolean;
  lang?: Locale;
}

const tagClassName =
  "inline-block font-sans text-xs font-medium uppercase tracking-wide text-accent hover:text-accent-hover transition-colors";

export function TagBadge({ tag, linked = true, lang = "en" }: TagBadgeProps) {
  if (!linked) {
    return <span className={tagClassName}>{displayTag(tag)}</span>;
  }

  return (
    <Link
      href={localePath(`/tags/${normalizeTag(tag)}`, lang)}
      className={tagClassName}
    >
      {displayTag(tag)}
    </Link>
  );
}
