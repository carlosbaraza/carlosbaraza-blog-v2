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

export default function BuildingASaasBusinessFindingTheIdea() {
  return (
    <PostLayout post={post}>
      <p>
        Finding the right problem to solve is quite a difficult task for some
        people. I have build tens of projects in the past few years, and I have
        been reflecting a lot on the failures. There are some requirements to be
        met, that are critical to the kind of business I want to make:
      </p>

      <ul>
        <li>
          <strong>Niche market</strong>. But ideally with upscale potential to
          bigger markets.
        </li>
        <li>
          <strong>Online SaaS business</strong>. Physical products introduce
          another dimension of problems, limit the scaling potential and also
          restrict where you could live.
        </li>
        <li>
          <strong>Painful problem</strong>. If people are reaching out for
          solutions to their problem, it is more likely they&apos;d buy the
          service.
        </li>
        <li>
          <strong>Growing market</strong>. If the market is shrinking, it will be
          difficult to build a business around it.
        </li>
        <li>
          <strong>Market with money</strong>. Cheap customers will cause
          troubles, cost a lot in customer service and will not make for a good
          margin profitable business.
          <ul>
            <li>
              It&apos;s better to serve an audience that is used to pay for
              services.
            </li>
            <li>
              Consumers are usually less inclined to pay money for services or
              tools.
            </li>
            <li>
              B2B has longer sale cycles, but they understand that receiving
              value is worth paying for.
            </li>
          </ul>
        </li>
      </ul>

      <h2>Research tools</h2>

      <ul>
        <li>
          <a
            href="https://answerthepublic.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://answerthepublic.com/
          </a>{" "}
          - Great tool to know what other people are searching on Google.
        </li>
      </ul>
    </PostLayout>
  );
}
