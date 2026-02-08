import Image from "next/image";
import type { Project } from "@/lib/types";
import placeholderImage from "@/../public/images/placeholder.png";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const isExternal =
    project.href.startsWith("http://") || project.href.startsWith("https://");

  return (
    <article className="group">
      <a
        href={project.href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="block"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
          <div className="relative aspect-[16/9] overflow-hidden rounded-sm bg-surface">
            {project.imgSrc ? (
              <Image
                src={project.imgSrc}
                alt={project.title}
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            ) : (
              <Image
                src={placeholderImage}
                alt=""
                placeholder="blur"
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            )}
          </div>

          <div className="flex flex-col justify-center">
            <h3 className="font-display text-3xl sm:text-4xl font-bold leading-[1.15] tracking-tight text-text group-hover:text-accent transition-colors mb-4">
              {project.title}
            </h3>

            <p className="font-serif text-text-secondary leading-relaxed line-clamp-3">
              {project.description}
            </p>

            {isExternal ? (
              <span className="inline-flex items-center gap-1.5 mt-4 font-sans text-xs uppercase tracking-wider text-muted">
                <svg
                  viewBox="0 0 24 24"
                  className="h-3 w-3 fill-none stroke-current stroke-2"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
                External link
              </span>
            ) : null}
          </div>
        </div>
      </a>
    </article>
  );
}
