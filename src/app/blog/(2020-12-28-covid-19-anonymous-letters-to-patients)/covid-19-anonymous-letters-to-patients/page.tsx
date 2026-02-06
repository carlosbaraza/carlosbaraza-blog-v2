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

export default function Covid19AnonymousLettersToPatientsPage() {
  return (
    <PostLayout post={post}>
      <p>
        At the height of the COVID-19 pandemic cases in April 2020, a couple of
        doctors and me started a non-profit project with the aim to make some
        people patients feel better. They were isolated in the intensive care
        unit and we thought that some anonymous letters from people wishing them
        luck and strength could make them feel slightly better.
      </p>

      <p>
        I built a website to collect letters, and we started delivering them to
        people. In total, we collected more than{" "}
        <strong>3000 anonymous letters</strong>. And it made a bit of an impact,
        although most of the positive impact was on people writing the letters.
        Unfortunately, later we learned that patients what actually wanted was to
        see their loved ones, not to read an anonymous letter.
      </p>

      <p>
        It was a great project to contribute my two cents to easing the pandemic
        effects.
      </p>

      <p>
        Some images and video from the project (
        <a
          href="https://twitter.com/con_tu_carta"
          target="_blank"
          rel="noopener noreferrer"
        >
          @con_tu_carta
        </a>
        ):
      </p>

      <p>
        <img
          src="/content/images/2020/12/0d52020f213bd58ecd52a096df3e96b6.JPG"
          alt=""
        />
      </p>

      <p>
        <img
          src="/content/images/2020/12/59ec43531b7989076fcc7b4a5f7b5ea7.JPG"
          alt=""
        />
      </p>
    </PostLayout>
  );
}
