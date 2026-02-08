import Image from "next/image";
import { author, authorBio } from "@/content/author";
import { SocialIcons } from "@/components/shared/SocialIcons";
import { Prose } from "@/components/shared/Prose";
import { Logo } from "@/components/shared/Logo";
import heroImage from "@/../public/images/placeholder.png";
import { isValidLocale } from "@/lib/i18n";
import { t } from "@/lib/translations";

export const metadata = {
  title: "About",
  description: `About ${author.name} - ${author.occupation} at ${author.company}`,
};

export default async function AboutPage(props: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: langParam } = await props.params;
  const lang = isValidLocale(langParam) ? langParam : ("en" as const);

  return (
    <article>
      <div className="max-w-5xl mx-auto">
        <div className="aspect-[21/9] overflow-hidden rounded-[50px] md:rounded-[100px]">
          <Image
            src={heroImage}
            alt={author.name}
            placeholder="blur"
            className="w-full h-full object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1024px"
            priority
          />
        </div>
      </div>

      {/* Avatar overlapping hero */}
      <div className="flex justify-center -mt-16 sm:-mt-20 mb-8 relative z-10">
        <div className="h-32 w-32 sm:h-40 sm:w-40 rounded-full overflow-hidden border-4 border-bg shadow-xl">
          <Image
            src={author.avatar}
            alt={author.name}
            width={160}
            height={160}
            className="w-full h-full object-cover filter-[grayscale(1)_sepia(.2)_saturate(2)_hue-rotate(-30deg)]"
            priority
          />
        </div>
      </div>

      <header className="max-w-4xl mx-auto mb-12 text-center">
        <p className="font-sans text-xs uppercase tracking-wider text-muted">
          {author.occupation} {t(lang, "about.occupationAt")}{" "}
          <a
            href={author.companyUrl}
            className="text-accent hover:text-accent-hover transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            {author.company}
          </a>
        </p>

        <h1 className="mt-4 mb-6">
          <Logo className="h-10 sm:h-14 mx-auto" />
          <span className="sr-only">Carlos Baraza</span>
        </h1>

        <SocialIcons
          github={author.github}
          twitter={author.twitter}
          youtube={author.youtube}
          linkedin={author.linkedin}
          email={author.email}
          rss="/feed.xml"
          className="justify-center"
        />
      </header>

      <Prose>
        <p>{t(lang, "about.bio1")}</p>
        <p>
          {t(lang, "about.bio2Prefix")}{" "}
          <a
            href="https://inpractise.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            InPractise
          </a>
          {t(lang, "about.bio2Suffix")}
        </p>
        <p>{t(lang, "about.bio3")}</p>
        <p>{t(lang, "about.bio4")}</p>
      </Prose>

      {/* Resume */}
      <div className="max-w-[720px] mx-auto mt-20">
        <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-text mb-4">
          {t(lang, "about.resume")}
        </h2>
        <p className="font-serif text-text-secondary mb-2">
          {t(lang, "about.subtitle")}
        </p>

        <div className="flex flex-wrap gap-x-6 gap-y-1 font-sans text-sm text-muted mb-12">
          <a
            href="mailto:work@carlosbaraza.com"
            className="hover:text-text transition-colors"
          >
            work@carlosbaraza.com
          </a>
          <a
            href="https://carlosbaraza.com"
            className="hover:text-text transition-colors"
          >
            carlosbaraza.com
          </a>
          <a
            href="https://linkedin.com/in/carlos-baraza"
            className="hover:text-text transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/carlosbaraza"
            className="hover:text-text transition-colors"
          >
            GitHub
          </a>
        </div>

        {/* Skills */}
        {[
          {
            label: t(lang, "about.skills.leadership"),
            skills: [
              t(lang, "about.skill.techStrategy"),
              t(lang, "about.skill.productVision"),
            ],
          },
          {
            label: t(lang, "about.skills.webdev"),
            skills: [
              "React",
              "Next.js",
              "Node.js",
              "Full-Stack",
              "UX/UI Design",
              "PostgreSQL",
            ],
          },
          {
            label: t(lang, "about.skills.ai"),
            skills: [
              t(lang, "about.skill.llm"),
              t(lang, "about.skill.agentic"),
              t(lang, "about.skill.pytorch"),
              t(lang, "about.skill.deepLearning"),
            ],
          },
          {
            label: t(lang, "about.skills.general"),
            skills: [
              t(lang, "about.skill.polyglot"),
              t(lang, "about.skill.cloud"),
            ],
          },
        ].map((group) => (
          <div key={group.label} className="mb-8">
            <h3 className="font-sans text-xs font-medium uppercase tracking-wider text-muted mb-3">
              {group.label}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="inline-block font-sans text-xs px-3 py-1 rounded-full border border-border text-text-secondary"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}

        <div className="border-t border-border" />

        {/* Experience */}
        <h3 className="font-sans text-xs font-medium uppercase tracking-wider text-muted mt-16 mb-10">
          {t(lang, "about.experience")}
        </h3>

        <div className="flex flex-col gap-12">
          <div>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
              <h4 className="font-display text-xl font-bold text-text">
                inpractise.com
              </h4>
              <span className="font-sans text-xs text-muted tracking-wide">
                2019 &ndash; {t(lang, "about.present")}
              </span>
            </div>
            <p className="font-sans text-sm font-medium text-text-secondary mb-2">
              {t(lang, "about.inpractise.role")}
            </p>
            <p className="font-serif text-text-secondary leading-relaxed">
              {t(lang, "about.inpractise.desc")}
            </p>
          </div>

          <div>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
              <h4 className="font-display text-xl font-bold text-text">
                Bloomberg
              </h4>
              <span className="font-sans text-xs text-muted tracking-wide">
                2020 &ndash; 2021
              </span>
            </div>
            <p className="font-sans text-sm font-medium text-text-secondary mb-2">
              {t(lang, "about.bloomberg.role")}
            </p>
            <p className="font-serif text-text-secondary leading-relaxed">
              {t(lang, "about.bloomberg.desc")}
            </p>
          </div>

          <div>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
              <h4 className="font-display text-xl font-bold text-text">
                DAZN (Perform)
              </h4>
              <span className="font-sans text-xs text-muted tracking-wide">
                2018 &ndash; 2019
              </span>
            </div>
            <p className="font-sans text-sm font-medium text-text-secondary mb-2">
              {t(lang, "about.dazn.role")}
            </p>
            <p className="font-serif text-text-secondary leading-relaxed">
              {t(lang, "about.dazn.desc")}
            </p>
          </div>

          <div>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
              <h4 className="font-display text-xl font-bold text-text">
                HomeAway / VRBO (Expedia)
              </h4>
              <span className="font-sans text-xs text-muted tracking-wide">
                2016 &ndash; 2018
              </span>
            </div>
            <p className="font-sans text-sm font-medium text-text-secondary mb-2">
              {t(lang, "about.homeaway.role")}
            </p>
            <p className="font-serif text-text-secondary leading-relaxed">
              {t(lang, "about.homeaway.desc")}
            </p>
          </div>

          <div>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
              <h4 className="font-display text-xl font-bold text-text">
                Hire Space
              </h4>
              <span className="font-sans text-xs text-muted tracking-wide">
                2016
              </span>
            </div>
            <p className="font-sans text-sm font-medium text-text-secondary">
              {t(lang, "about.hirespace.role")}
            </p>
          </div>

          <div>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
              <h4 className="font-display text-xl font-bold text-text">
                Kneip S.A.
              </h4>
              <span className="font-sans text-xs text-muted tracking-wide">
                2014 &ndash; 2016
              </span>
            </div>
            <p className="font-sans text-sm font-medium text-text-secondary">
              {t(lang, "about.kneip.role")}
            </p>
          </div>
        </div>

        <div className="border-t border-border mt-16" />

        {/* Education */}
        <h3 className="font-sans text-xs font-medium uppercase tracking-wider text-muted mt-16 mb-10">
          {t(lang, "about.education")}
        </h3>

        <div className="flex flex-col gap-8">
          <div>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
              <h4 className="font-display text-xl font-bold text-text">
                {t(lang, "about.edu.degree")}
              </h4>
              <span className="font-sans text-xs text-muted tracking-wide">
                2009 &ndash; 2013
              </span>
            </div>
            <p className="font-serif text-text-secondary">
              {t(lang, "about.edu.uni")}
            </p>
          </div>

          <div>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
              <h4 className="font-display text-xl font-bold text-text">
                {t(lang, "about.edu.webdev")}
              </h4>
              <span className="font-sans text-xs text-muted tracking-wide">
                2012 &ndash; 2013
              </span>
            </div>
            <p className="font-serif text-text-secondary">
              {t(lang, "about.edu.wit")}
            </p>
          </div>
        </div>

        <div className="border-t border-border mt-16" />

        {/* Languages */}
        <h3 className="font-sans text-xs font-medium uppercase tracking-wider text-muted mt-16 mb-10">
          {t(lang, "about.languages")}
        </h3>

        <div className="flex flex-col gap-4 mb-16">
          <div className="flex items-baseline gap-3">
            <span className="font-display text-lg font-bold text-text w-24 shrink-0">
              {t(lang, "about.lang.english")}
            </span>
            <span className="font-serif text-text-secondary">
              {t(lang, "about.lang.englishDesc")}
            </span>
          </div>
          <div className="flex items-baseline gap-3">
            <span className="font-display text-lg font-bold text-text w-24 shrink-0">
              {t(lang, "about.lang.french")}
            </span>
            <span className="font-serif text-text-secondary">
              {t(lang, "about.lang.frenchDesc")}
            </span>
          </div>
          <div className="flex items-baseline gap-3">
            <span className="font-display text-lg font-bold text-text w-24 shrink-0">
              {t(lang, "about.lang.spanish")}
            </span>
            <span className="font-serif text-text-secondary">
              {t(lang, "about.lang.spanishDesc")}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
