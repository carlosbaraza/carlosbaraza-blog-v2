import { projects } from "@/content/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";

export const metadata = {
  title: "Projects",
  description: "Projects and side hustles by Carlos Baraza.",
};

export default function ProjectsPage() {
  return (
    <>
      <h1 className="font-display text-4xl sm:text-5xl font-bold text-center mb-12">
        Projects
      </h1>

      <div className="flex flex-col gap-16">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </>
  );
}
