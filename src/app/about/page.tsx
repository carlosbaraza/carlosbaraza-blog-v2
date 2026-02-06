import { author, authorBio } from "@/content/author";
import { SocialIcons } from "@/components/shared/SocialIcons";
import { Prose } from "@/components/shared/Prose";

export const metadata = {
  title: "About",
  description: `About ${author.name} - ${author.occupation} at ${author.company}`,
};

export default function AboutPage() {
  return (
    <>
      <div className="flex flex-col sm:flex-row items-start gap-8 mb-10">
        <img
          src={author.avatar}
          alt={author.name}
          className="h-32 w-32 rounded-full object-cover"
        />
        <div>
          <h1 className="font-serif text-3xl font-bold">{author.name}</h1>
          <p className="font-sans text-sm text-muted mt-1">
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
          <SocialIcons
            github={author.github}
            twitter={author.twitter}
            youtube={author.youtube}
            linkedin={author.linkedin}
            email={author.email}
            className="mt-3"
          />
        </div>
      </div>

      <Prose>
        {authorBio.split("\n\n").map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}

        <h2>Resume</h2>

        <h3>Senior Full Stack Engineer</h3>
        <p>London, UK</p>
        <ul>
          <li>
            Email:{" "}
            <a href="mailto:work@carlosbaraza.com">work@carlosbaraza.com</a>
          </li>
          <li>
            Website:{" "}
            <a href="https://carlosbaraza.com">carlosbaraza.com</a>
          </li>
          <li>
            LinkedIn:{" "}
            <a href="https://linkedin.com/in/carlos-baraza">
              linkedin.com/in/carlos-baraza
            </a>
          </li>
          <li>
            Github:{" "}
            <a href="https://github.com/carlosbaraza">
              github.com/carlosbaraza
            </a>
          </li>
        </ul>

        <h3>Skills</h3>
        <ul>
          <li>TypeScript and JavaScript</li>
          <li>React, NextJS, Node, Vue, Svelte</li>
          <li>UX/UI design, Adobe Suite, Figma</li>
          <li>TDD, BDD, Jest and Mocha</li>
          <li>
            Dev Ops: Docker, GNU/Linux, AWS, GCP, Kubernetes, Serverless,
            Firebase, Heroku, DigitalOcean
          </li>
          <li>
            Databases: SQL (PostgreSQL, SQL Server). NoSQL (Mongo, DynamoDB).
            GraphQL
          </li>
          <li>Rust, Python, Golang, Ruby and WebAssembly</li>
          <li>Machine Learning: PyTorch, Keras, scikit, TensorFlow</li>
          <li>Agile principles and good professional soft skills</li>
        </ul>

        <hr />

        <h2>Experience</h2>

        <h3>inpractise.com</h3>
        <p>
          <strong>CTO and Lead Engineer</strong>. 10/2019 to present.
        </p>
        <ul>
          <li>
            Architected the tech stack and developed the product. React, Node,
            Next, Docker, PostgreSQL, GraphQL.
          </li>
        </ul>

        <h3>Bloomberg</h3>
        <p>
          <strong>Senior Software Engineer</strong>. London, 01/2020 to 01/2021
        </p>
        <ul>
          <li>TypeScript, React, Node, Kubernetes, SQL Server.</li>
          <li>
            Built web monitoring and management tool for an important financial
            process
          </li>
        </ul>

        <h3>DAZN (Perform)</h3>
        <p>
          <strong>Senior Software Engineer / DevOps / SRE</strong>. London,
          04/2018 to 10/2019
        </p>
        <ul>
          <li>
            React, Node, Golang, TypeScript, AWS (many services), Serverless
            (Lambda)
          </li>
          <li>
            Built multiple applications (React, Node, Next, GraphQL, Apollo).
            Hosted on AWS.
          </li>
        </ul>

        <h3>HomeAway / VRBO (Expedia)</h3>
        <p>
          <strong>Senior Software Engineer</strong>. London, 11/2016 to 03/2018
        </p>
        <ul>
          <li>
            React, Webpack, Redux, Node, Docker, AWS, SEO/SEM, SSR, A/B Testing
          </li>
          <li>
            Highly optimised and resilient server side rendered React/Node
            application
          </li>
        </ul>

        <h3>Hire Space</h3>
        <p>
          <strong>Senior Software Engineer</strong>. London, 03/2016 to 10/2016
        </p>

        <h3>Kneip S.A.</h3>
        <p>
          <strong>Software Engineer</strong>. Luxembourg, 03/2014 to 03/2016
        </p>

        <hr />

        <h2>Education</h2>

        <h3>B.Eng. Industrial Electronics and Automation Engineering</h3>
        <p>University of Castilla-La Mancha, Spain, 2009 to 2013</p>

        <h3>Web development</h3>
        <p>Waterford Institute of Technology (WIT), Ireland, 2012 to 2013</p>

        <hr />

        <h2>Languages</h2>
        <ul>
          <li>
            <strong>English</strong>: Very fluent. Lived in London for 7+ years.
            C1. First Certificate of Cambridge
          </li>
          <li>
            <strong>French</strong>: Fluent. Lived in France for 4 years. B2.
            DELF.
          </li>
          <li>
            <strong>Spanish</strong>: Native
          </li>
        </ul>
      </Prose>
    </>
  );
}
