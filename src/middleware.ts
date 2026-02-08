import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { locales, defaultLocale, isValidLocale } from "@/lib/i18n";

function getPreferredLocale(request: NextRequest): string {
  // 1. Check cookie
  const cookie = request.cookies.get("NEXT_LOCALE")?.value;
  if (cookie && isValidLocale(cookie)) return cookie;

  // 2. Parse Accept-Language header
  const acceptLang = request.headers.get("accept-language");
  if (acceptLang) {
    const preferred = acceptLang
      .split(",")
      .map((part) => {
        const [lang, q] = part.trim().split(";q=");
        return { lang: lang.trim().split("-")[0].toLowerCase(), q: q ? parseFloat(q) : 1 };
      })
      .sort((a, b) => b.q - a.q);

    for (const { lang } of preferred) {
      if (isValidLocale(lang)) return lang;
    }
  }

  // 3. Default
  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the pathname already starts with a locale
  const pathnameLocale = locales.find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameLocale) {
    // Already has locale prefix — pass through with x-locale header
    const response = NextResponse.next();
    response.headers.set("x-locale", pathnameLocale);
    response.cookies.set("NEXT_LOCALE", pathnameLocale, {
      maxAge: 60 * 60 * 24 * 365,
      path: "/",
    });
    return response;
  }

  // No locale prefix — redirect to locale-prefixed path
  const locale = getPreferredLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;

  const response = NextResponse.redirect(url, 302);
  response.cookies.set("NEXT_LOCALE", locale, {
    maxAge: 60 * 60 * 24 * 365,
    path: "/",
  });
  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next (static files, images, HMR)
     * - static (public static assets)
     * - content (public content images)
     * - images (public images)
     * - favicon.ico
     * - feed.xml
     * - sitemap.xml
     * - robots.txt
     */
    "/((?!_next|static|content|images|favicon\\.ico|feed\\.xml|sitemap\\.xml|robots\\.txt).*)",
  ],
};
