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

export default function UnicornContributorPage() {
  return (
    <PostLayout post={post}>
      <p>
        Simple CLI tool to complete your GitHub contribution bar. NodeJS.
      </p>
    </PostLayout>
  );
}
