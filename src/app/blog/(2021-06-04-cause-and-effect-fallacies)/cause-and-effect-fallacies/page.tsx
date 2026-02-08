import type { Metadata } from "next";
import { PostLayout } from "@/components/blog/PostLayout";
import { post } from "./meta";
import heroImage from "./hero.png";

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

export default function CauseAndEffectFallacies() {
  return (
    <PostLayout post={post} heroImage={heroImage}>
      <p>
        Lately, I have been learning about formal and informal logic. Today, I
        will share some notes on cause-effect related fallacies, which are
        unfortunately very common in arguments.
      </p>

      <h2>Post hoc, ergo propter hoc</h2>

      <p>
        Just because B happens after A, it doesn&apos;t mean that A caused B.
      </p>

      <p>Example:</p>

      <ul>
        <li>
          My car has been working for 10 years. It just stopped working after I
          lent it to you last week, therefore you broke it.
        </li>
      </ul>

      <hr />

      <h2>Neglect of a common cause</h2>

      <p>
        A and B are correlated. It doesn&apos;t mean A causes B or B causes A.
        There could be a third reason C causing both.
      </p>

      <p>Example:</p>

      <ul>
        <li>
          Two symptoms happen in the same patient, but both are caused by a
          third condition.
        </li>
      </ul>

      <hr />

      <h2>Causal oversimplification</h2>

      <p>
        Take one factor and reach a conclusion using that only reason, ignoring
        all the other contributing factors.
      </p>

      <hr />

      <h2>Confusing of a necessary and a sufficient condition</h2>

      <p>
        Condition A is necessary for B if you can not have B without having had
        A.
      </p>

      <ul>
        <li>
          Oxygen is necessary for fire. This does not mean that everywhere there
          is oxygen there will also be fire.
        </li>
      </ul>

      <p>
        Condition A is sufficient for B if anytime there is B, there has also
        been A.
      </p>

      <ul>
        <li>
          Winning lottery is sufficient to become a millionaire. But not
          necessary to become a millionaire, as there are other ways.
        </li>
      </ul>

      <p>Example:</p>

      <ul>
        <li>
          I don&apos;t understand why the plant died. I watered it.
        </li>
        <li>Watering the plant is necessary but not sufficient.</li>
      </ul>

      <hr />

      <h2>Slippery slope fallacy (domino effect)</h2>

      <p>
        One small thing can follow a succession of fatal cause-effect chain,
        leading to a bad outcome.
      </p>

      <p>Examples:</p>

      <ul>
        <li>
          For want of a nail the shoe was lost. For want of a shoe the horse was
          lost. For want of a horse the rider was lost. For want of a rider the
          message was lost. For want of a message the battle was lost. For want
          of a battle the kingdom was lost. And all for the want of a horseshoe
          nail.
        </li>
        <li>
          One sip of beer can lead to wine, then to liquor, then to marijuana,
          then to heroin and then to the total ruin. Therefore, put down that
          drink.
        </li>
        <li>This sets a dangerous precedent...</li>
      </ul>

      <p>
        This topic is really interesting to me and I will continue to explore
        other fallacies and human biases in the future.
      </p>
    </PostLayout>
  );
}
