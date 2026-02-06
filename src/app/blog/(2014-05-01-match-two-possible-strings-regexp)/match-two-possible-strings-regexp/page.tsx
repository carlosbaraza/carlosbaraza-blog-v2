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

export default function MatchTwoPossibleStringsRegexpPage() {
  return (
    <PostLayout post={post}>
      <p>
        Just a little example of the use of Ruby Regular expresions: matching
        two given possible strings with one.
      </p>

      <p>
        Status will be closed only if status was reopened or opened. This allow
        as to create some workflows on the code, for example.
      </p>
    </PostLayout>
  );
}
