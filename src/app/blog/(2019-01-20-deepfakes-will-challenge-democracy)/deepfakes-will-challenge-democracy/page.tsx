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

export default function DeepfakesWillChallengeDemocracyPage() {
  return (
    <PostLayout post={post}>
      <blockquote>
        <p>
          Democracies will have to accept an uncomfortable truth: in order to
          survive the threat of deepfakes, they are going to have to learn how
          to live with lies.
        </p>
      </blockquote>

      <p>
        <strong>Deepfakes</strong> are fake clips of people that look
        indistinguishable from real clips. The technology allows changing the
        face of a person, the voice, the facial expression, and even the body
        movements.{" "}
        <a
          href="https://en.wikipedia.org/wiki/Generative_adversarial_network"
          target="_blank"
          rel="noopener noreferrer"
        >
          Generative Adversarial Networks (GANs)
        </a>
        , a type of artificial neural networks, are used to create these clips.
        The technology which once was only available to Hollywood now is
        available for pretty much everyone with a laptop and some knowledge in
        the machine learning field. And soon it might be even more accessible
        when applications are developed to apply it.
      </p>

      <p>
        Some researchers are working on tools to fight the disinformation and
        detect deep fakes. One method would be to detect unusual patterns in the
        picture, blinking or face movements. However, fake detection methods
        must evolve in parallel with faking technologies.
      </p>

      <p>
        Check out this Bloomberg compilation of deep fakes and let your
        imagination run wild imagining all the potential evil applications of
        this technology:
      </p>

      <p>
        <em>
          This article is part of our development team tradition of sharing a
          fact of the day during standup.
        </em>
      </p>

      <p>
        <strong>Resource</strong>:{" "}
        <a
          href="https://www.foreignaffairs.com/articles/world/2018-12-11/deepfakes-and-new-disinformation-war"
          target="_blank"
          rel="noopener noreferrer"
        >
          Deepfakes and new disinformation war
        </a>
      </p>
    </PostLayout>
  );
}
