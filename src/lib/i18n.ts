export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "English",
  es: "Espanol",
};

const localeMap: Record<Locale, string> = {
  en: "en-US",
  es: "es-ES",
};

export function isValidLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function localePath(path: string, locale: Locale): string {
  return `/${locale}${path.startsWith("/") ? path : `/${path}`}`;
}

export function toDateLocale(locale: Locale): string {
  return localeMap[locale];
}
