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

export default function Aws4curlPage() {
  return (
    <PostLayout post={post}>
      <p>
        All the code is available at{" "}
        <a
          href="https://github.com/carlosbaraza/aws4curl"
          target="_blank"
          rel="noopener noreferrer"
        >
          carlosbaraza/aws4curl
        </a>
        .
      </p>

      <h2>aws4curl</h2>

      <p>
        <a
          href="https://travis-ci.org/carlosbaraza/aws4curl"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://travis-ci.org/carlosbaraza/aws4curl.svg?branch=master"
            alt="Build Status"
          />
        </a>
      </p>

      <p>
        <code>curl</code>, but with AWS Signature Version 4
      </p>

      <h2>Installation</h2>

      <pre>
        <code>{`npm i -g aws4curl`}</code>
      </pre>

      <h2>Usage</h2>

      <pre>
        <code>{`usage: aws4curl [aws4curl options] [curl options]

aws4curl options:
  --aws-region AWS Region to sign requests with (required)
  --aws-service AWS Service (required)

AWS Credentials:
Environment variables AWS_ACCESS_KEY and AWS_SECRET_KEY must be defined.
If AWS_SESSION_TOKEN is available, it will be used to generate the header
"X-Amz-Security-Token"

curl options:
  Every flag and argument will be passed to your installed curl`}</code>
      </pre>

      <h2>Contributing</h2>

      <p>
        Thank you for checking this project out! The project is MIT licensed and
        every contribution is welcomed.
      </p>
    </PostLayout>
  );
}
