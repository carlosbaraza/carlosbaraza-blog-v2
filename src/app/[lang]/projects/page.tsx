import { projects } from "@/content/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { isValidLocale } from "@/lib/i18n";
import { t } from "@/lib/translations";

export const metadata = {
  title: "Projects",
  description: "Projects and side hustles by Carlos Baraza.",
};

export default async function ProjectsPage(props: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: langParam } = await props.params;
  const lang = isValidLocale(langParam) ? langParam : ("en" as const);

  return (
    <>
      <h1 className="font-sans uppercase font-thin tracking-[10px] text-xl text-center mb-12">
        {t(lang, "projects.title")}
      </h1>

      <div className="flex flex-col gap-16">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} lang={lang} />
        ))}
      </div>
    </>
  );
}
