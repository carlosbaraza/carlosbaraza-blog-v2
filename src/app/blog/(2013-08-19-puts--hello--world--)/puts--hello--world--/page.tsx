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

export default function PutsHelloWorldPage() {
  return (
    <PostLayout post={post}>
      <p>
        To start, I would like to tell a brief story about the origin of this
        blog. This blog was originally created as a common project from really
        good friends. We were engineering students (that&apos;s the origin of
        engineering term <code>flux</code>, which is both, a chemical used for
        soldering and the fluids flux). As we were living together in the same
        apartment, we called it <code>fluxflat</code>. We had always plenty of
        new ideas for multiple projects, and as a result we decided to create a
        blog together, in order to share some of those ideas.
      </p>

      <p>
        My name is Carlos, and I am an Electronic Engineer, but really passionate
        about the WWW. Currently, I am working in Luxembourg at an IT company,
        creating services for the fund industry. We mainly develop web
        applications for different products. The web technology I am currently
        working on with is Ruby on Rails. For this reason, I would like to greet
        everyone in Ruby.
      </p>

      <p>
        I will update this blog with cool web tricks, tutorials, and of course,
        with all my new projects.
      </p>

      <p>
        Finally, I want to express that any technology lover is completely
        welcome to post here, especially my friends living in Austria and
        Germany.
      </p>

      <p>Engineerly yours,</p>
      <p>Carlos.</p>
    </PostLayout>
  );
}
