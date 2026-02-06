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

export default function DeepHashTransformationUsingLambdasPage() {
  return (
    <PostLayout post={post}>
      <p>
        Today I had the need in my job of implementing a similar behaviour of
        what Rails hash method .deep_symbolize_keys does. Here is a possible
        implementation of a deep recursive hash transformation, using recursive
        lambdas.
      </p>
    </PostLayout>
  );
}
