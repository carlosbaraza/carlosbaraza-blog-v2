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

export default function QuadruinoVideoPage() {
  return (
    <PostLayout post={post}>
      <figure>
        <div className="relative w-full h-0 pb-[56.25%]">
          <iframe
            src="https://www.youtube.com/embed/mw_cfODdlQY"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
          ></iframe>
        </div>
        <figcaption>Quadruino - Keep flying forward</figcaption>
      </figure>

      <p>
        <a
          href="http://www.quadruino.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Quadruino
        </a>{" "}
        is an open source drone dreamed by some friends living together during
        our university years. It served as an experimentation ground for multiple
        control theory/automation/electronic tests.
      </p>

      <p>
        If you consider the project interesting or you think I could help you
        with something, please leave a comment on the YouTube video.
      </p>
    </PostLayout>
  );
}
