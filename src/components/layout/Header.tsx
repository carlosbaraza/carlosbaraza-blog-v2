import Link from "next/link";
import { siteConfig } from "@/content/site-config";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { MobileNav } from "./MobileNav";
import { Logo } from "@/components/shared/Logo";
import { IconLogo } from "@/components/shared/IconLogo";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/95 backdrop-blur supports-[backdrop-filter]:bg-bg/80">
      <div className="grid grid-cols-3 h-20 sm:h-24 items-center px-6 sm:px-8 lg:px-12">
        {/* Left: Logo wordmark */}
        <Link
          href="/"
          className="text-text hover:text-accent transition-colors"
        >
          <Logo className="h-6 sm:h-8" />
        </Link>

        {/* Center: Icon */}
        <div className="flex justify-center">
          <Link
            href="/"
            className="text-text hover:text-accent transition-colors"
          >
            <IconLogo className="h-10 sm:h-14" />
          </Link>
        </div>

        {/* Right: Nav + controls */}
        <div className="flex items-center justify-end gap-1">
          <nav className="hidden md:flex items-center gap-8 mr-4">
            {siteConfig.navigation.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="whitespace-nowrap font-sans text-xs font-medium uppercase tracking-wider text-text-secondary hover:text-text transition-colors"
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
