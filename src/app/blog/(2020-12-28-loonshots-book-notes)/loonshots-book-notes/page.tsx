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

export default function LoonshotsBookNotesPage() {
  return (
    <PostLayout post={post}>
      <p>
        These are some of my notes on this interesting book, with interesting
        ideas on how to create a flourishing innovation driven organisation.
      </p>

      <ul>
        <li>
          <strong>Nurture innovation separating soldiers and research</strong>
          <ul>
            <li>
              Nokia failed to develop the iPhone because it was refused by
              management
            </li>
            <li>
              Big organisations become risk averse and employees have low stakes.
              They become soldiers and franchise operators.
            </li>
            <li>
              Startup employees have high stakes and win big. Innovators and risk
              taking.
            </li>
            <li>
              Radar was proposed to Navy multiple times before WWII, and they
              refused funding
            </li>
          </ul>
        </li>
        <li>
          <strong>
            Have a context structure with multiple stakeholders that could give
            the idea a shot
          </strong>
          <ul>
            <li>
              Kepler discovery of solar system happened in China but there was a
              single studio in town, the empire rulers. In Europe there were many
              small states willing to give scientific revolution a try.
            </li>
          </ul>
        </li>
        <li>
          <strong>
            Leaders could think they are holy heroes and hold the keys to the
            research lab, not letting some ideas flourish
          </strong>
          <ul>
            <li>Polaroid didn&apos;t research digital cameras</li>
          </ul>
        </li>
      </ul>
    </PostLayout>
  );
}
