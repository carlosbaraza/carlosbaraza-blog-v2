"use client";

import { useState } from "react";
import type { Locale } from "@/lib/i18n";
import { t } from "@/lib/translations";

interface MarkdownActionsProps {
  slug: string;
  lang?: Locale;
}

export function MarkdownActions({ slug, lang = "en" }: MarkdownActionsProps) {
  const [copied, setCopied] = useState(false);

  const mdUrl = `/blog/${slug}.md`;

  async function handleCopy() {
    try {
      const res = await fetch(mdUrl);
      const text = await res.text();
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.open(mdUrl, "_blank");
    }
  }

  return (
    <div className="inline-flex items-center border border-border rounded-full overflow-hidden divide-x divide-border">
      <a
        href={mdUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-2 px-4 py-1.5 font-sans text-[11px] uppercase tracking-widest text-muted hover:text-text hover:bg-surface transition-all duration-300"
        title="View as Markdown"
      >
        <span className="font-medium">{t(lang, "md.view")}</span>
        <svg
          viewBox="0 0 24 24"
          className="h-3 w-3 fill-none stroke-current stroke-2 opacity-40 group-hover:opacity-100 transition-opacity duration-300"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
          />
        </svg>
      </a>
      <button
        onClick={handleCopy}
        className="group inline-flex items-center gap-2 px-4 py-1.5 font-sans text-[11px] uppercase tracking-widest text-muted hover:text-text hover:bg-surface transition-all duration-300 cursor-pointer"
        title="Copy Markdown to clipboard"
      >
        {copied ? (
          <>
            <svg
              viewBox="0 0 24 24"
              className="h-3 w-3 fill-none stroke-current stroke-2"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
            <span className="font-medium">{t(lang, "md.copied")}</span>
          </>
        ) : (
          <>
            <svg
              viewBox="0 0 24 24"
              className="h-3 w-3 fill-none stroke-current stroke-2 opacity-40 group-hover:opacity-100 transition-opacity duration-300"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75m11.25-3h-9.75A1.125 1.125 0 007.125 4.875v12.75c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125z"
              />
            </svg>
            <span className="font-medium">{t(lang, "md.copy")}</span>
          </>
        )}
      </button>
    </div>
  );
}
