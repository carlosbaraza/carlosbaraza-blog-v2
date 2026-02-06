import Link from "next/link";
import { siteConfig } from "@/content/site-config";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { MobileNav } from "./MobileNav";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/95 backdrop-blur supports-[backdrop-filter]:bg-bg/80">
      <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="font-serif text-xl font-bold text-text hover:text-accent transition-colors"
        >
          {siteConfig.title}
        </Link>

        <div className="flex items-center gap-1">
          {/* Desktop nav */}
          <nav className="hidden sm:flex items-center gap-6 mr-2">
            {siteConfig.navigation.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-sans text-sm font-medium text-text-secondary hover:text-text transition-colors"
              >
                {link.title}
              </Link>
            ))}
          </nav>

          <ThemeToggle />
          <MobileNav links={siteConfig.navigation} />
        </div>
      </div>
    </header>
  );
}
