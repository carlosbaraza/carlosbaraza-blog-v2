import Link from "next/link";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { LocalePicker } from "@/components/shared/LocalePicker";
import { MobileNav } from "./MobileNav";
import { Logo } from "@/components/shared/Logo";
import { IconLogo } from "@/components/shared/IconLogo";
import type { Locale } from "@/lib/i18n";
import { localePath } from "@/lib/i18n";
import { getNavigation } from "@/lib/translations";

interface HeaderProps {
  lang?: Locale;
}

export function Header({ lang = "en" }: HeaderProps) {
  const navigation = getNavigation(lang);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/95 backdrop-blur supports-[backdrop-filter]:bg-bg/80">
      <div className="grid grid-cols-3 h-20 sm:h-24 items-center px-6 sm:px-8 lg:px-12">
        {/* Left: Logo wordmark */}
        <Link
          href={localePath("/", lang)}
          className="text-text hover:text-accent transition-colors"
        >
          <Logo className="h-6 sm:h-8" />
        </Link>

        {/* Center: Icon */}
        <div className="flex justify-center">
          <Link
            href={localePath("/", lang)}
            className="text-text hover:text-accent transition-colors"
          >
            <IconLogo className="h-10 sm:h-14 relative -left-2" />
          </Link>
        </div>

        {/* Right: Nav + controls */}
        <div className="flex items-center justify-end gap-1">
          <nav className="hidden md:flex items-center gap-8 mr-4">
            {navigation.map((link) => (
              <Link
                key={link.href}
                href={localePath(link.href, lang)}
                className="whitespace-nowrap font-sans text-xs font-medium uppercase tracking-wider text-text-secondary hover:text-text transition-colors"
              >
                {link.title}
              </Link>
            ))}
          </nav>

          <span className="hidden md:inline-flex">
            <LocalePicker lang={lang} />
          </span>
          <ThemeToggle />
          <MobileNav links={navigation} lang={lang} />
        </div>
      </div>
    </header>
  );
}
