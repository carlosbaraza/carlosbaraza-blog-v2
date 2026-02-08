import { HeroSection } from "@/components/home/HeroSection";
import { LatestPosts } from "@/components/home/LatestPosts";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { isValidLocale } from "@/lib/i18n";

export default async function HomePage(props: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: langParam } = await props.params;
  const lang = isValidLocale(langParam) ? langParam : ("en" as const);

  return (
    <>
      <HeroSection lang={lang} />
      <LatestPosts lang={lang} />
      <FeaturedProjects lang={lang} />
    </>
  );
}
