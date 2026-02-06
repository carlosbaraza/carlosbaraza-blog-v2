import Link from "next/link";
import { projects } from "@/content/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";

export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section className="py-8">
      <div className="flex items-baseline justify-between mb-6">
        <h2 className="font-serif text-2xl font-bold">Featured Projects</h2>
        <Link
          href="/projects"
          className="font-sans text-sm text-accent hover:text-accent-hover transition-colors"
        >
          All projects &rarr;
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {featured.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
