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

export default function HomeAwayExpediaPage() {
  return (
    <PostLayout post={post}>
      <p>
        Role: <strong>Senior Software Engineer</strong>
      </p>

      <p>Length: ~2 years</p>

      <p>Web performance, React, Node, JavaScript, AWS, Docker.</p>

      <ul>
        <li>
          Front-end stack: React + Redux + Webpack. Mostly vanilla JS and CSS to
          reduce bundle size.
        </li>
        <li>
          Back-end stack: Node.JS (Server rendered React + Hapi) + Scala
        </li>
        <li>
          Greenfield project: programmatic marketing tool which builds landing
          pages for each destination in the world.
        </li>
        <li>Thousands of page views per day</li>
        <li>Browser support: &gt;1% and IE 10+</li>
        <li>
          High-performance application. Google PageSpeed Insights and Lighthouse
          should score a minimum of 95 out of 100 in mobile and desktop
        </li>
      </ul>
    </PostLayout>
  );
}
