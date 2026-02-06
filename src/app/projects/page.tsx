import { projects } from "@/content/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";

export const metadata = {
  title: "Projects",
  description: "Projects and side hustles by Carlos Baraza.",
};

export default function ProjectsPage() {
  return (
    <>
      <h1 className="font-serif text-3xl font-bold mb-8">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </>
  );
}
