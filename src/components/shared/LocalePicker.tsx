"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { locales, localeNames } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";

interface LocalePickerProps {
  lang: Locale;
}

export function LocalePicker({ lang }: LocalePickerProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Close on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  function buildHref(locale: Locale) {
    // Replace /{currentLang}/... with /{newLocale}/...
    const segments = pathname.split("/");
    if (segments[1] && locales.includes(segments[1] as Locale)) {
      segments[1] = locale;
    }
    return segments.join("/") || `/${locale}`;
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="rounded-md p-2 text-text-secondary hover:text-text transition-colors flex items-center gap-1"
        aria-label={localeNames[lang]}
      >
        {/* Globe icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
        <span className="font-sans text-[10px] font-semibold uppercase tracking-wider">
          {lang}
        </span>
      </button>

      {open ? (
        <div className="absolute right-0 top-full mt-2 min-w-[140px] border border-border rounded-lg bg-bg shadow-lg overflow-hidden z-50">
          {locales.map((locale) => (
            <a
              key={locale}
              href={buildHref(locale)}
              onClick={() => setOpen(false)}
              className={`flex items-center gap-3 px-4 py-2.5 font-sans text-xs uppercase tracking-wider transition-colors ${
                locale === lang
                  ? "text-text bg-surface font-semibold"
                  : "text-text-secondary hover:text-text hover:bg-surface/50"
              }`}
            >
              <span className="text-sm">
                {locale === "en" ? "EN" : "ES"}
              </span>
              <span className="normal-case tracking-normal text-[11px]">
                {localeNames[locale]}
              </span>
            </a>
          ))}
        </div>
      ) : null}
    </div>
  );
}
