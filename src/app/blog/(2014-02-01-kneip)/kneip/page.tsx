import type { Metadata } from "next";
import { PostLayout } from "@/components/blog/PostLayout";
import { post } from "./meta";

export const metadata: Metadata = {
  title: post.title,
  description: post.summary,
  openGraph: {
    title: post.title,
    description: post.summary,
    type: "article",
    publishedTime: post.datePublished,
    modifiedTime: post.dateUpdated,
    images: post.images,
  },
};

export default function KneipPage() {
  return (
    <PostLayout post={post}>
      <p>
        Role: <strong>Software Engineer</strong>
      </p>

      <p>
        Length: <strong>2 years. 02/2014-02/2016</strong>
      </p>

      <p>
        <strong>JavaScript, Ruby on Rails, PostgreSQL, Python</strong>
      </p>

      <p>
        Kneip is one of the fund data management leaders. Kneip has 300
        employees. It provides software solutions and support for fund managers.
      </p>

      <ul>
        <li>
          Developed features for AIFMD regulation in Fundlook. These features
          were sold for millions of euros to our clients.
        </li>
        <li>
          Developed or maintained internal JavaScript (Node.JS, Express.JS and
          Angular.JS), Ruby on Rails and Django applications (e.g.
          fundlook.kneip.com, fundweblibrary.com and lacotebleue.kneip.com).
        </li>
        <li>
          Engineered and developed an internal monitoring tool with Node and
          Angular that will save the company days on looking for issues.
        </li>
        <li>
          Developed Kneip&apos;s web browser extension (Google Chrome).
        </li>
        <li>
          Designed and implemented JSON and SOAP REST APIs, asynchronous worker
          jobs, input data file handlers, CMS and multiple report generators.
        </li>
        <li>
          Helped other team members with BDD practices, to ensure they were
          always followed. Continuous integration workflows. Mostly using
          Cucumber, RSpec and Mocha.
        </li>
        <li>
          CI tweaks and improvements (e.g. developer tools to get a screenshot,
          HTML snapshot and logs of the failing scenarios/specs). This saved
          hours troubleshooting failures on the CI.
        </li>
        <li>
          Dockerization of services/web applications, in order to reduce
          environment-related issues.
        </li>
        <li>Ticket management with Jira. GITflow-based branching model</li>
        <li>Managed deployments to staging environments.</li>
        <li>
          Contributed to open source projects used in Kneip&apos;s software.
        </li>
        <li>
          Applied UX design principles to deliver appealing web user interfaces.
          User experience was always the priority during the development.
        </li>
      </ul>
    </PostLayout>
  );
}
