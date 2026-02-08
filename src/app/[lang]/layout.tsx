import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { locales, isValidLocale } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang: langParam } = await params;
  const lang: Locale = isValidLocale(langParam) ? langParam : "en";

  return (
    <>
      <Header lang={lang} />
      <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 min-h-[calc(100vh-12rem)]">
        {children}
      </main>
      <Footer lang={lang} />
    </>
  );
}
