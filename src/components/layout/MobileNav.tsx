"use client";

import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import type { Locale } from "@/lib/i18n";
import { localePath } from "@/lib/i18n";

interface MobileNavProps {
  links: { href: string; title: string }[];
  lang?: Locale;
}

export function MobileNav({ links, lang = "en" }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Animate in after portal mounts
  useEffect(() => {
    if (isOpen) {
      // Trigger transition on next frame
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setVisible(true));
      });
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleClose = useCallback(() => {
    setVisible(false);
    // Wait for transition to finish before unmounting
    setTimeout(() => setIsOpen(false), 300);
  }, []);

  const drawer = isOpen
    ? createPortal(
        <div className="fixed inset-0 z-[9999]">
          {/* Backdrop */}
          <div
            className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
              visible ? "opacity-100" : "opacity-0"
            }`}
            onClick={handleClose}
          />

          {/* Drawer */}
          <nav
            className={`absolute right-0 top-0 h-full w-72 bg-bg border-l border-border shadow-2xl p-8 transition-transform duration-300 ease-out ${
              visible ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex justify-end mb-12">
              <button
                onClick={handleClose}
                className="rounded-md p-2 text-text-secondary hover:text-text transition-colors"
                aria-label="Close menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            <ul className="flex flex-col gap-6">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={localePath(link.href, lang)}
                    onClick={handleClose}
                    className="block font-sans text-sm font-medium uppercase tracking-wider text-text-secondary hover:text-text transition-colors py-1"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>,
        document.body
      )
    : null;

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden rounded-md p-2 text-text-secondary hover:text-text transition-colors"
        aria-label="Open menu"
      >
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
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>

      {mounted ? drawer : null}
    </>
  );
}
