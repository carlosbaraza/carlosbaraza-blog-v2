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

export default function WebassemblyLondonMeetupPage() {
  return (
    <PostLayout post={post}>
      <h2>WebAssembly London</h2>

      <p>London, GB</p>

      <p>
        215 <em>Members</em>
      </p>

      <p>
        WebAssembly (WASM, WA), along with JavaScript, are the languages for the
        web. WebAssembly is a compile target that allows highly optimized
        applications to run in the browser. ...
      </p>

      <p>
        <a
          href="https://www.meetup.com/WebAssembly-London/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check out this Meetup Group &rarr;
        </a>
      </p>
    </PostLayout>
  );
}
