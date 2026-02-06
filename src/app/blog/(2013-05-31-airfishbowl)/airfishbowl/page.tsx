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

export default function AirfishbowlPage() {
  return (
    <PostLayout post={post}>
      <figure>
        <div className="relative w-full h-0 pb-[56.25%]">
          <iframe
            src="https://www.youtube.com/embed/KqrJAN3hXBI"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
          ></iframe>
        </div>
        <figcaption>AirFishBowl - Demo (June 2013)</figcaption>
      </figure>

      <p>Web driven flying robot. uControllers, Python, JavaScript.</p>

      <p>
        Engineering Bachelor Degree&apos;s final year project. Flying robot +
        Raspberry Pi with Django web app + Mobile application + wireless
        communication among them.
      </p>
    </PostLayout>
  );
}
