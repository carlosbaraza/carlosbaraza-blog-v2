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

export default function SoftwareAutomationPage() {
  return (
    <PostLayout post={post}>
      <p>
        Today, I had to automate the migration of{" "}
        <a
          href="https://inpractise.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          inpractise.com
        </a>
        &apos;s video provider from Contentful to Vimeo. The process implied
        downloading every video (around 500) and re-uploading it to Vimeo. Then
        linking the video to the corresponding article.
      </p>

      <p>
        We thought of hiring someone to do this task, but as an engineer, I
        decided to write a small script to do this task instead. This is a
        tedious task that would be error prone, and subcontracting it would not
        be scalable.
      </p>

      <p>
        Every time I write these kind of automation scripts, it feels like I am
        teaching a robot to do something I want to do. It is a good exercise to
        realise the actual power of software engineering.
      </p>

      <p>
        There is one bottleneck though: &quot;Can I type the rules for the
        task?&quot;. Not all the problems actually fit this description, but some
        like migrating to Vimeo does look like a problem I could define.
      </p>

      <p>
        I think there are other kinds of problems in which you can tell if the
        result is correct or not, but you can&apos;t really explain how to do the
        task. I believe that would be one of the domains for machine learning
        (i.e. image recognition).
      </p>

      <p>
        And I&apos;m sure there are problems in which you can&apos;t tell if the
        outcome is good or not, and you can&apos;t explain how to do the task
        either. What technology would allow us to tackle these problems? Is it
        reinforcement learning? Are humans still required for those problems?
      </p>

      <p>Just a quick random reflection on software automation.</p>
    </PostLayout>
  );
}
