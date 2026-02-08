import Link from "next/link";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  basePath: string;
}

export function Pagination({
  currentPage,
  totalPages,
  basePath,
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
          &larr; Previous
        </Link>
      ) : (
        <span className="text-muted uppercase tracking-wider">
          &larr; Previous
        </span>
      )}

      <span className="text-muted uppercase tracking-wider">
        Page {currentPage} of {totalPages}
      </span>

      {hasNext ? (
        <Link
          href={`${basePath}?page=${currentPage + 1}`}
          className="text-accent uppercase tracking-wider hover:text-accent-hover transition-colors"
        >
          Next &rarr;
        </Link>
      ) : (
        <span className="text-muted uppercase tracking-wider">Next &rarr;</span>
      )}
    </nav>
  );
}
