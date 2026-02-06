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

export default function DigitalNomadsPage() {
  return (
    <PostLayout post={post}>
      <p>
        For the latest years, I work as full-time Software Engineer in
        Luxembourg, France, and Ireland. Living abroad, far away from
        ones&apos; origin and country; is an unique experience, full of exciting
        emotional peeks and valleys.
      </p>

      <p>
        Languages are therefore a big part of my life, both computer-related
        programming languages and human-related communication codes. I love
        learning, and concretely learning languages. In order of preference, I
        speak JavaScript, English, Ruby, Web (HTML5 &amp; friends), French and
        Spanish.
      </p>

      <p>
        Since I was a child, I strongly believe internet was the inevitable
        revolution that would change how people live in this society. My entire
        professional career turns around this idea (
        <em>full stack web engineer</em>).
      </p>

      <p>
        However, there is something that I was expecting to happen and did not
        seem to have changed yet in Europe. People continue working on-site: in
        noisy open spaces, in cubicles, with long commutes&hellip; even though
        the internal communication actually happens by email, Jira, Slack,
        telephone, etc. The environment is most of the time too hostile to allow
        focusing on development and reaching your maximum efficiency, without
        getting disturbed every two minutes by some chitchat or someone touching
        your shoulder.
      </p>

      <p>
        Some months ago, I read about an exciting way of living that would make
        compatible both of my passions: web development and traveling the world I
        am citizen of. I am talking about the lifestyle known by the buzz words{" "}
        <em>digital nomad</em>.
      </p>

      <p>
        A digital nomad is a 21st century child, she is an ambitious and curious
        person who wants to learn and know. Digital nomads freelance and make a
        living online through platforms like{" "}
        <a
          href="http://www.toptal.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Toptal
        </a>
        . The philosophy is that a digital nomad does not build his life around
        his job, a digital nomad builds his job around his life. Being
        free(lancer) to live how and where you want brings you happiness, and
        therefore it boosts your performance.
      </p>

      <p>
        Though I am not a <em>digital nomad</em>, I work as a freelance in my
        spare time. Programming brings me joy, and freelancing allows me to work
        with multiple codebases, and it helps me to keep the learning curve I
        like to have.
      </p>

      <p>
        Every experience I have had as a freelance has been very rewarding. For
        this reason, I would love to take it to the next level, working within{" "}
        <a
          href="http://www.toptal.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Toptal
        </a>
        ; and concretely being part of{" "}
        <a
          href="http://www.toptal.com/web"
          target="_blank"
          rel="noopener noreferrer"
        >
          Toptal web freelancers group
        </a>
        .
      </p>

      <p>
        <a
          href="http://www.toptal.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Toptal
        </a>{" "}
        is a freelancing platform that has a strong technical screening process
        to filter freelancers. Only 3% of the total amount of applicants
        actually make it through. This process ensures that when a company looks
        for a freelancer, it will easily find a good match for its&apos; needs.
      </p>
    </PostLayout>
  );
}
