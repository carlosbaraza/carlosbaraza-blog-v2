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

export default function AngelsInTheHousePage() {
  return (
    <PostLayout post={post}>
      <p>
        <strong>
          Freelance project. Angular, Node, Meteor. Web application, iOS app and
          Android app.
        </strong>
      </p>

      <p>
        Length: <strong>3 months + maintenance for 2 years</strong>.
      </p>

      <p>
        As part of a new venture, I developed a fully featured experience for an
        online luxury concierge. Users could use the app to schedule tasks: call
        taxi, pickup something, buy flights, buy flowers, etc.
      </p>

      <ul>
        <li>Design</li>
        <li>Web application</li>
        <li>iOS application</li>
        <li>Android application</li>
        <li>Custom CRM to manage clients</li>
        <li>
          Custom CMS to manage the type of tasks that users can ask for,
          depending on their subscription.
        </li>
      </ul>

      <h2>Screenshots:</h2>

      <p>
        <img
          src="/content/images/2020/07/angels-in-the-house.jpg"
          alt="AngelsInTheHouse.com screenshot"
        />
      </p>
    </PostLayout>
  );
}
