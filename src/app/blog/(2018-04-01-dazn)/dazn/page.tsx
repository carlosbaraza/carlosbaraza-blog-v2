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

export default function DaznPage() {
  return (
    <PostLayout post={post}>
      <p>
        Role: <strong>Full Stack Software Engineer. SRE (Site Reliability Engineer)</strong>.
      </p>

      <p>Length: ~2 years.</p>

      <p>
        JavaScript, Node, React, AWS, Docker, Serverless, Lambda, DynamoDB, S3,
        CloudFront, Elastic Search, Terraform, DevOps, TDD, BDD, Mocha, AVA,
        Mobx.
      </p>

      <p>Developed multiple projects:</p>

      <ul>
        <li>A code linter analysing every commit on the GitHub organisation</li>
        <li>The help and my account sections</li>
        <li>NPM repository with NPMJS clone</li>
        <li>A CLI tool used by all the engineers (written in Golang)</li>
        <li>
          Many AWS projects to enable seamless multi-cloud and multi-account
        </li>
        <li>Worked on the platform team and a development team</li>
      </ul>
    </PostLayout>
  );
}
