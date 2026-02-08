import { author } from "@/content/author";
import { SocialIcons } from "@/components/shared/SocialIcons";

export function AuthorCard() {
  return (
    <section className="flex flex-col sm:flex-row items-start gap-6 py-8 border-y border-border">
      <img
        src={author.avatar}
        alt={author.name}
        className="h-24 w-24 rounded-full object-cover"
      />
      <div className="flex flex-col gap-2">
        <h2 className="font-serif text-xl font-bold">{author.name}</h2>
        <p className="font-sans text-sm text-muted">
          {author.occupation} at{" "}
          <a
            href={author.companyUrl}
            className="text-accent hover:text-accent-hover transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            {author.company}
          </a>
        </p>
        <p className="font-serif text-text-secondary leading-relaxed">
          {author.bio}
        </p>
        <SocialIcons
          github={author.github}
          twitter={author.twitter}
          youtube={author.youtube}
          linkedin={author.linkedin}
          email={author.email}
          rss="/feed.xml"
          className="mt-1"
        />
      </div>
    </section>
  );
}
