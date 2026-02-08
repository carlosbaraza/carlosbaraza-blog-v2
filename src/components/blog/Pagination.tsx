import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { t } from "@/lib/translations";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  basePath: string;
  lang?: Locale;
}

export function Pagination({
  currentPage,
  totalPages,
  basePath,
  lang = "en",
}: PaginationProps) {
  const hasPrev = currentPage > 1;
  const hasNext = currentPage < totalPages;

  return (
    <nav
      className="flex items-center justify-between pt-24 font-sans text-sm"
      aria-label="Pagination"
    >
      {hasPrev ? (
        <Link
          href={
            currentPage === 2 ? basePath : `${basePath}?page=${currentPage - 1}`
          }
          className="text-accent uppercase tracking-wider hover:text-accent-hover transition-colors"
        >
          &larr; {t(lang, "pagination.previous")}
        </Link>
      ) : (
        <span className="text-muted uppercase tracking-wider">
          &larr; {t(lang, "pagination.previous")}
        </span>
      )}

      <span className="text-muted uppercase tracking-wider">
        {t(lang, "pagination.page")} {currentPage} {t(lang, "pagination.of")} {totalPages}
      </span>

      {hasNext ? (
        <Link
          href={`${basePath}?page=${currentPage + 1}`}
          className="text-accent uppercase tracking-wider hover:text-accent-hover transition-colors"
        >
          {t(lang, "pagination.next")} &rarr;
        </Link>
      ) : (
        <span className="text-muted uppercase tracking-wider">{t(lang, "pagination.next")} &rarr;</span>
      )}
    </nav>
  );
}
