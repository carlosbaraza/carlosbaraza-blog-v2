import Link from "next/link";
import { projects } from "@/content/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";

export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section className="py-8">
      <div className="flex items-baseline justify-between mb-12">
        <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
          Featured Projects
        </h2>
        <Link
          href="/projects"
          className="font-sans text-xs uppercase tracking-wider text-accent hover:text-accent-hover transition-colors"
        >
          All projects &rarr;
        </Link>
      </div>

      <div className="flex flex-col gap-16">
        {featured.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
