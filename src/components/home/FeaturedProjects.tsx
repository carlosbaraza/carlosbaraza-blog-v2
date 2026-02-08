import Link from "next/link";
import { projects } from "@/content/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";
import type { Locale } from "@/lib/i18n";
import { localePath } from "@/lib/i18n";
import { t } from "@/lib/translations";

interface FeaturedProjectsProps {
  lang?: Locale;
}

export function FeaturedProjects({ lang = "en" }: FeaturedProjectsProps) {
  const featured = projects.filter((p) => p.featured);

  return (
    <section className="py-8">
      <div className="flex items-baseline justify-between mb-12">
        <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
          {t(lang, "home.featuredProjects")}
        </h2>
        <Link
          href={localePath("/projects", lang)}
          className="font-sans text-xs uppercase tracking-wider text-accent hover:text-accent-hover transition-colors"
        >
          {t(lang, "home.allProjects")} &rarr;
        </Link>
      </div>

      <div className="flex flex-col gap-16">
        {featured.map((project) => (
          <ProjectCard key={project.title} project={project} lang={lang} />
        ))}
      </div>
    </section>
  );
}
