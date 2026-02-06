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

export default function WebAssemblyLogoPage() {
  return (
    <PostLayout post={post}>
      <p>
        <a
          href="https://github.com/carlosbaraza/web-assembly-logo"
          target="_blank"
          rel="noopener noreferrer"
        >
          Official repository for the WebAssembly Logo
          carlosbaraza/web-assembly-logo
        </a>
      </p>

      <p>
        <a
          href="https://github.com/WebAssembly/design/issues/980#issuecomment-278086797"
          target="_blank"
          rel="noopener noreferrer"
        >
          Some time ago
        </a>{" "}
        I submitted{" "}
        <a
          href="https://github.com/carlosbaraza/web-assembly-logo"
          target="_blank"
          rel="noopener noreferrer"
        >
          my proposal (link to the official repository)
        </a>{" "}
        for the{" "}
        <a
          href="https://github.com/WebAssembly/design/issues/980#issuecomment-278086797"
          target="_blank"
          rel="noopener noreferrer"
        >
          WebAssembly logo contest
        </a>
        .
      </p>

      <p>
        Today, I can say that it is the most voted logo with 1496 votes, and
        therefore it has become the official WebAssembly logo.
      </p>

      <p>
        <img
          src="/content/images/2020/07/1_YyGQeeF3miZhPQpjoc7hRQ.png"
          alt="Congratulation message"
        />
      </p>

      <p>
        I am still impressed that 1496 technical people around the world voted
        for my design. Thank you to everyone who voted for it!
      </p>

      <figure>
        <img
          src="/content/images/2020/07/web-assembly-logo-presentation.png"
          alt="Web Assembly Logo presentation"
        />
        <figcaption>The logo proposal presentation</figcaption>
      </figure>

      <p>
        Thanks to everyone who voted for the logo, I could add my two cents to
        the great{" "}
        <a
          href="https://github.com/WebAssembly/spec"
          target="_blank"
          rel="noopener noreferrer"
        >
          Web Assembly project
        </a>
        .
      </p>
    </PostLayout>
  );
}
