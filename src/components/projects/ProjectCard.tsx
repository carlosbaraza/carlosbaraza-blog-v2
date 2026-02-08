import Image from "next/image";
import type { Project } from "@/lib/types";
import { NoiseDistortionImage } from "@/components/shared/NoiseDistortionImage";
import placeholderImage from "@/../public/images/placeholder.png";
import type { Locale } from "@/lib/i18n";
import { localePath } from "@/lib/i18n";
import { t } from "@/lib/translations";

interface ProjectCardProps {
  project: Project;
  lang?: Locale;
}

export function ProjectCard({ project, lang = "en" }: ProjectCardProps) {
  const tr = project.translations?.[lang];
  const title = tr?.title ?? project.title;
  const description = tr?.description ?? project.description;
  const isExternal =
    project.href.startsWith("http://") || project.href.startsWith("https://");
  const href = isExternal ? project.href : localePath(project.href, lang);

  return (
    <article className="group">
      <a
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="block"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
          <NoiseDistortionImage
            groupHover
            className="relative aspect-[16/9] overflow-hidden rounded-[50px] bg-surface"
          >
            {project.imgSrc ? (
              <Image
                src={project.imgSrc}
                alt={project.title}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            ) : (
              <Image
                src={placeholderImage}
                alt=""
                placeholder="blur"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            )}
          </NoiseDistortionImage>

          <div className="flex flex-col justify-center">
            <h3 className="font-display text-3xl sm:text-4xl font-bold leading-[1.15] tracking-tight text-text group-hover:text-accent transition-colors mb-4">
              {title}
            </h3>

            <p className="font-serif text-text-secondary leading-relaxed line-clamp-3">
              {description}
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
                {t(lang, "projects.externalLink")}
              </span>
            ) : null}
          </div>
        </div>
      </a>
    </article>
  );
}
