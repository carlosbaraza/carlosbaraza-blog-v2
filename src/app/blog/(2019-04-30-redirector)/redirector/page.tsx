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

export default function RedirectorPage() {
  return (
    <PostLayout post={post}>
      <p>
        Redirect traffic depending on origin. Very simple. The code is open
        source at{" "}
        <a
          href="https://github.com/carlosbaraza/redirector"
          target="_blank"
          rel="noopener noreferrer"
        >
          carlosbaraza/redirector
        </a>
      </p>

      <h2>Adding a new URL</h2>

      <ol>
        <li>Add new redirect to map</li>
        <li>Add domain to dokku</li>
      </ol>

      <h2>License</h2>

      <p>MIT</p>
    </PostLayout>
  );
}
