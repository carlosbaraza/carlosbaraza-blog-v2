"use client";

import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { locales, localeNames } from "@/lib/i18n";

interface LanguageSwitcherProps {
  slug: string;
  currentLocale: Locale;
}

export function LanguageSwitcher({ slug, currentLocale }: LanguageSwitcherProps) {
  return (
    <div className="inline-flex items-center border border-border rounded-full overflow-hidden divide-x divide-border">
      {/* Globe icon */}
      <span className="inline-flex items-center px-3 py-1.5 text-muted">
        <svg
          viewBox="0 0 24 24"
          className="h-3 w-3 fill-none stroke-current stroke-2 opacity-60"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
          />
        </svg>
      </span>

      {locales.map((locale) => {
        const isActive = locale === currentLocale;
        return (
          <Link
            key={locale}
            href={`/${locale}/blog/${slug}`}
            className={`group inline-flex items-center px-3 py-1.5 font-sans text-[11px] uppercase tracking-widest transition-all duration-300 ${
              isActive
                ? "text-text bg-surface font-bold"
                : "text-muted hover:text-text hover:bg-surface font-medium"
            }`}
            title={localeNames[locale]}
          >
            {locale.toUpperCase()}
          </Link>
        );
      })}
    </div>
  );
}
