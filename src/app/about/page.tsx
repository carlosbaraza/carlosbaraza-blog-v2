import Image from "next/image";
import { author, authorBio } from "@/content/author";
import { SocialIcons } from "@/components/shared/SocialIcons";
import { Prose } from "@/components/shared/Prose";
import { Logo } from "@/components/shared/Logo";
import heroImage from "@/../public/images/placeholder.png";

export const metadata = {
  title: "About",
  description: `About ${author.name} - ${author.occupation} at ${author.company}`,
};

export default function AboutPage() {
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
            className="w-full h-full object-cover filter-[grayscale(1)_sepia(.3)_saturate(2)_hue-rotate(-40deg)]"
            priority
          />
        </div>
      </div>

      <header className="max-w-4xl mx-auto mb-12 text-center">
        <p className="font-sans text-xs uppercase tracking-wider text-muted">
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
        <p>
          I&apos;ve been writing code since I was a kid. These days, I write it
          alongside AI agents &mdash; and honestly, I think that&apos;s the most
          exciting shift in software since the internet itself.
        </p>
        <p>
          I&apos;m the CTO at{" "}
          <a
            href="https://inpractise.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            InPractise
          </a>
          , where I&apos;ve spent years building products with React, Next.js,
          and Node. Before that, I shipped software at Bloomberg, Expedia, and
          DAZN. But what I&apos;m most focused on now is how AI agents are
          changing the way we build &mdash; and how teams can actually adopt
          them without the hype.
        </p>
        <p>
          I write about agentic coding workflows, share what works (and what
          doesn&apos;t), and help companies think through their AI and agent
          strategy. If you&apos;re figuring out how to bring agents into your
          engineering org, that&apos;s exactly the kind of problem I love
          working on.
        </p>
        <p>
          When I&apos;m not building or writing, I&apos;m probably woodworking,
          playing music, or being used as a climbing frame by my two little
          ones.
        </p>
      </Prose>

      {/* Resume */}
      <div className="max-w-[720px] mx-auto mt-20">
        <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-text mb-4">
          Resume
        </h2>
        <p className="font-serif text-text-secondary mb-2">
          Senior Full Stack Engineer &middot; London, UK
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
            label: "Leadership",
            skills: ["Technical Strategy & Architecture", "Product Vision"],
          },
          {
            label: "Web Development",
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
            label: "AI & Agents",
            skills: [
              "LLM-Powered Agents",
              "Agentic Coding Workflows",
              "PyTorch",
              "Deep Learning",
            ],
          },
          {
            label: "General",
            skills: [
              "Polyglot \u2014 whatever my agents can parse",
              "Cloud & Infrastructure",
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
          Experience
        </h3>

        <div className="flex flex-col gap-12">
          <div>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
              <h4 className="font-display text-xl font-bold text-text">
                inpractise.com
              </h4>
              <span className="font-sans text-xs text-muted tracking-wide">
                2019 &ndash; Present
              </span>
            </div>
            <p className="font-sans text-sm font-medium text-text-secondary mb-2">
              CTO and Lead Engineer
            </p>
            <p className="font-serif text-text-secondary leading-relaxed">
              Architected the tech stack and developed the product. React, Node,
              Next, Docker, PostgreSQL, GraphQL.
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
              Senior Software Engineer &middot; London
            </p>
            <p className="font-serif text-text-secondary leading-relaxed">
              Built web monitoring and management tool for an important
              financial process. TypeScript, React, Node, Kubernetes, SQL
              Server.
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
              Senior Software Engineer / DevOps / SRE &middot; London
            </p>
            <p className="font-serif text-text-secondary leading-relaxed">
              Built multiple applications (React, Node, Next, GraphQL, Apollo)
              hosted on AWS. Golang, TypeScript, Serverless (Lambda).
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
              Senior Software Engineer &middot; London
            </p>
            <p className="font-serif text-text-secondary leading-relaxed">
              Highly optimised and resilient server side rendered React/Node
              application. Redux, Docker, AWS, SEO/SEM, A/B Testing.
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
              Senior Software Engineer &middot; London
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
              Software Engineer &middot; Luxembourg
            </p>
          </div>
        </div>

        <div className="border-t border-border mt-16" />

        {/* Education */}
        <h3 className="font-sans text-xs font-medium uppercase tracking-wider text-muted mt-16 mb-10">
          Education
        </h3>

        <div className="flex flex-col gap-8">
          <div>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
              <h4 className="font-display text-xl font-bold text-text">
                B.Eng. Industrial Electronics and Automation
              </h4>
              <span className="font-sans text-xs text-muted tracking-wide">
                2009 &ndash; 2013
              </span>
            </div>
            <p className="font-serif text-text-secondary">
              University of Castilla-La Mancha, Spain
            </p>
          </div>

          <div>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
              <h4 className="font-display text-xl font-bold text-text">
                Web Development
              </h4>
              <span className="font-sans text-xs text-muted tracking-wide">
                2012 &ndash; 2013
              </span>
            </div>
            <p className="font-serif text-text-secondary">
              Waterford Institute of Technology (WIT), Ireland
            </p>
          </div>
        </div>

        <div className="border-t border-border mt-16" />

        {/* Languages */}
        <h3 className="font-sans text-xs font-medium uppercase tracking-wider text-muted mt-16 mb-10">
          Languages
        </h3>

        <div className="flex flex-col gap-4 mb-16">
          <div className="flex items-baseline gap-3">
            <span className="font-display text-lg font-bold text-text w-24 shrink-0">
              English
            </span>
            <span className="font-serif text-text-secondary">
              Very fluent. Lived in London for 7+ years. C1. First Certificate
              of Cambridge.
            </span>
          </div>
          <div className="flex items-baseline gap-3">
            <span className="font-display text-lg font-bold text-text w-24 shrink-0">
              French
            </span>
            <span className="font-serif text-text-secondary">
              Fluent. Lived in France for 4 years. B2. DELF.
            </span>
          </div>
          <div className="flex items-baseline gap-3">
            <span className="font-display text-lg font-bold text-text w-24 shrink-0">
              Spanish
            </span>
            <span className="font-serif text-text-secondary">Native.</span>
          </div>
        </div>
      </div>
    </article>
  );
}
