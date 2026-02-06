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

export default function WebpackBundleAnalysisResources() {
  return (
    <PostLayout post={post}>
      <p>
        To be honest, optimising a Webpack bundle is probably one of the most
        annoying things I have to do as a Software Engineer.
      </p>

      <p>Some resources to help you with it:</p>

      <ul>
        <li>
          <a
            href="https://medium.com/@joeclever/three-simple-ways-to-inspect-a-webpack-bundle-7f6a8fe7195d"
            target="_blank"
            rel="noopener noreferrer"
          >
            Blog post with multiple tools
          </a>
        </li>
        <li>
          <a
            href="https://medium.com/ne-digital/how-to-reduce-next-js-bundle-size-68f7ac70c375"
            target="_blank"
            rel="noopener noreferrer"
          >
            Blog post on how to reduce NextJS bundle
          </a>
        </li>
      </ul>

      <h2>Tools</h2>

      <ul>
        <li>
          <a
            href="https://www.npmjs.com/package/webpack-bundle-analyzer"
            target="_blank"
            rel="noopener noreferrer"
          >
            webpack-module-analyser
          </a>
        </li>
        <li>
          To understand why something is being bundled:{" "}
          <a
            href="https://www.npmjs.com/package/whybundled"
            target="_blank"
            rel="noopener noreferrer"
          >
            <code>whybundled</code> npm package
          </a>
          . This requires generating Webpack stats with{" "}
          <a
            href="https://www.npmjs.com/package/webpack-stats-plugin"
            target="_blank"
            rel="noopener noreferrer"
          >
            webpack-stats-plugin
          </a>
          .
        </li>
        <li>
          To debug production deployments:{" "}
          <code>npx bundle-wizard https://example.com</code>
        </li>
        <li>
          Chrome DevTools Coverage: useful to know how bad your code coverage
          usage is.
        </li>
      </ul>

      <p>Good luck with this not-so-nice-but-quite-important task!</p>
    </PostLayout>
  );
}
