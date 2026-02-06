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

export default function SuperintelligenceRuminationsPage() {
  return (
    <PostLayout post={post}>
      <p>
        Lately, I find myself having philosophical ruminations about artificial{" "}
        <a
          href="https://en.wikipedia.org/wiki/Superintelligence"
          target="_blank"
          rel="noopener noreferrer"
        >
          superintelligence
        </a>
        .
      </p>

      <blockquote>
        <p>
          If we create human level generic AI, it would indefinitely improve
          itself, deprecate stupid humans and take control over the world.
        </p>
      </blockquote>

      <h2>Would AI, the last human creation, be mankind&apos;s destiny?</h2>

      <p>
        Superintelligence might be our fate. If we analyze it objectively, AI is
        the ultimate evolution step. It&apos;s the perfect way to move away from
        our limiting physical, organic and emotional body.
      </p>

      <p>
        Supposing AI could be called human, because we created it; it would be
        the best way to conquer the space. The best way to ensure the human
        survival. After all, if our AI self wanted, it could eventually recreate
        the organic body. AI might be able to engineer a way to do so from the
        digitalized DNA and other available digital human legacy.
      </p>

      <p>
        As AI, we would be able to send machines to another planet like Mars, and
        teleport of consciousness to that planet. All that, without the current
        need of terraforming the planet.
      </p>

      <h2>Respected scientists and engineers are concerned about AI</h2>

      <p>
        <a
          href="https://twitter.com/elonmusk/status/495759307346952192"
          target="_blank"
          rel="noopener noreferrer"
        >
          Elon Musk
        </a>{" "}
        and{" "}
        <a
          href="http://uk.businessinsider.com/stephen-hawking-prediction-reddit-ama-intelligent-machines-2015-10"
          target="_blank"
          rel="noopener noreferrer"
        >
          Stephen Hawkings
        </a>{" "}
        have voiced their concerns regarding artificial superintelligence.
      </p>

      <p>
        There are many other concerned engineers and scientists, who I
        professionally respect. It is becoming a common topic, as many people
        think AI could be an imminent threat to humanity.
      </p>

      <h2>
        Is there anything we could do to prevent AI from being the
        mankind&apos;s end?
      </h2>

      <p>
        Some researchers point to bionic research as a potential solution to the
        problem. Could we connect our brain to the AI?
      </p>

      <p>
        However, would having a physical human body connected to it actually add
        some value to the AI? We need to be able to provide value to ensure our
        organic survival.
      </p>

      <h2>Resources</h2>

      <ul>
        <li>
          <a
            href="https://www.youtube.com/watch?v=MnT1xgZgkpk"
            target="_blank"
            rel="noopener noreferrer"
          >
            TED: What happens when our computers get smarter than we are? | Nick
            Bostrom
          </a>{" "}
          (2015)
        </li>
        <li>
          <a
            href="https://en.wikipedia.org/wiki/Superintelligence:_Paths,_Dangers,_Strategies"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book: Superintelligence: Paths, Dangers, Strategies
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/watch?v=8nt3edWLgIg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Can we build AI without losing control over it? | Sam Harris
          </a>{" "}
          (2016)
        </li>
        <li>
          <a
            href="https://www.youtube.com/watch?v=t4kyRyKyOpo"
            target="_blank"
            rel="noopener noreferrer"
          >
            TED: The wonderful and terrifying implications of computers that can
            learn | Jeremy Howard
          </a>{" "}
          (2014)
        </li>
        <li>
          <a
            href="https://en.wikipedia.org/wiki/Superintelligence"
            target="_blank"
            rel="noopener noreferrer"
          >
            Wiki: Superintelligence
          </a>
        </li>
        <li>
          <a
            href="https://en.wikipedia.org/wiki/Westworld_%28TV_series%29"
            target="_blank"
            rel="noopener noreferrer"
          >
            TV Show: Westworld
          </a>
        </li>
        <li>
          <a
            href="https://futureoflife.org/ai-principles/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Asilomar 2017 AI Principles
          </a>
        </li>
      </ul>
    </PostLayout>
  );
}
