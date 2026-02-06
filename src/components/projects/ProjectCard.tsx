import type { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const isExternal =
    project.href.startsWith("http://") || project.href.startsWith("https://");

  return (
    <a
      href={project.href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="group block rounded-lg border border-border p-5 hover:border-accent/40 transition-colors bg-surface"
    >
      {project.imgSrc ? (
        <img
          src={project.imgSrc}
          alt={project.title}
          className="mb-4 rounded-md w-full h-40 object-cover"
        />
      ) : null}

      <h3 className="font-serif text-lg font-bold text-text group-hover:text-accent transition-colors">
        {project.title}
      </h3>
      <p className="mt-1 font-serif text-sm text-text-secondary leading-relaxed">
        {project.description}
      </p>
    </a>
  );
}
