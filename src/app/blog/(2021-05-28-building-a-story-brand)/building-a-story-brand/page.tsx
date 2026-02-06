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

export default function BuildingAStoryBrand() {
  return (
    <PostLayout post={post}>
      <p>
        This article is a book summary of{" "}
        <a
          href="https://www.amazon.co.uk/Building-Storybrand-Clarify-Message-Customers/dp/0718033329"
          target="_blank"
          rel="noopener noreferrer"
        >
          &quot;Building a Story Brand&quot; by Donald Miller
        </a>
        .
      </p>

      <p>
        Stories are very powerful. They have been the one of the key ways of
        passing down information through generations. I recently attended a
        course on Roman history, and stories are one of the key elements that
        made the Roman empire and its culture. Even the{" "}
        <a
          href="https://en.wikipedia.org/wiki/Founding_of_Rome"
          target="_blank"
          rel="noopener noreferrer"
        >
          founding of Rome by Romulus and Remus
        </a>{" "}
        was a memorable story to every Roman citizen during the entire history of
        the empire.
      </p>

      <p>
        The book &quot;Building a Story Brand&quot; focuses on the idea of
        applying the general shape of a story to a brand. This can completely
        transform the emotional reaction from customers towards a brand.
      </p>

      <h2>What is the prototypical story?</h2>

      <p>
        The character desires something, but that something is hard to get.
        That&apos;s the problem. When the character is on the verge of giving up,
        a guide appears. This guide provides a plan and calls the character to
        take action. The character then avoids failure and manages to get that
        something s/he initially desired.
      </p>

      <h2>A story has multiple parts</h2>

      <ul>
        <li>Hero</li>
        <li>Problem or Villain</li>
        <li>Guide</li>
        <li>Plan</li>
        <li>Calls to action</li>
        <li>Failure</li>
        <li>Success</li>
      </ul>

      <h2>Hero</h2>

      <ul>
        <li>
          Customers are the heroes of the story. The customer is always right,
          and the customer is always the hero of the story.
        </li>
        <li>Concentrate in one desire.</li>
      </ul>

      <h3>Hero, bad example</h3>

      <p>
        A luxury resort website shows pictures of the front desk, restaurant and
        the story of the resort.
      </p>

      <h3>Hero, good example</h3>

      <p>
        The luxury resort discovers that relaxation is what customers want. The
        page text is mostly removed and pictures of people relaxing and getting
        massages are added to the page. This focuses on the hero, the customer,
        which desire is to relax in the luxurious resort.
      </p>

      <h2>Problem or Villain</h2>

      <ul>
        <li>
          Just mentioning the customer problems, they will engage more. People
          feel understood. Communicating awareness of the difficulties
          communicates understanding.
        </li>
        <li>Internal or external.</li>
        <li>External problem: house needs painting.</li>
        <li>Internal problem: shame for having an ugly house.</li>
        <li>
          Internal problems are very powerful. E.g. A house painter focuses on
          the embarrassment someone would owning the ugliest house in the block.
        </li>
        <li>
          External products sell better when couples with solutions to internal
          problems.
        </li>
      </ul>

      <h3>Problem. Bad example:</h3>

      <p>
        Time management app focuses on features and look and feel of the app.
      </p>

      <h3>Problem. Good Example:</h3>

      <p>Time management app would display distractions as a villain.</p>

      <h2>Guide</h2>

      <p>
        At some point in every story, the hero gets into trouble and when it is
        about to give up, a guide shows up. For example, Yoda to Luke Skywalker
        in Star Wars or Gandalf to Frodo in Lord of the Rings.
      </p>

      <ul>
        <li>
          The brand is the guide. The customer is the hero in trouble.
        </li>
        <li>Display empathy and authority.</li>
        <li>
          Empathy is crucial. It displays understanding of the frustration and it
          is the founding element of a trusting relationship. Without a trusted
          relationship, the advice will not be taken seriously.
        </li>
      </ul>

      <h3>Guide Example</h3>

      <p>
        A brand states that 125000 users are satisfied with the service. It
        displays awards it received.
      </p>

      <h2>Plan</h2>

      <p>
        Now, your company is stablished as a guide and the customer trust you and
        your authoritative judgement. However, buying and committing is risky,
        and a good plan of action can influence positively.
      </p>

      <h3>Process plan</h3>

      <p>
        Show customers what to do. Show customers how to buy a product and how to
        use it, decreasing risk and confusion.
      </p>

      <h4>Process plan. Bad Example:</h4>

      <p>
        Online shop selling garage storage system doesn&apos;t give indications
        on dimensions or how to know if the storage system will fit in your
        garage. The customer finds it risky because they might buy something that
        would not work for him.
      </p>

      <h4>Process plan. Good Example:</h4>

      <p>
        Online shop selling garage storage system clearly indicates the process
        to follow. First, measure your space. Then, order parts that match your
        space. Finally, install the system with basic tools in a few minutes.
      </p>

      <h3>Agreement plan</h3>

      <p>
        Offer customers an agreement that removes their fear of buying the
        product. An example would be a used-card dealer that promises that no
        customer would leave with a bad car or fooled.
      </p>

      <h2>Calls to action</h2>

      <p>
        Once you have convinced customers to buy, you need a bold clear call to
        action: &quot;Get It Now&quot;, &quot;Register&quot; or
        &quot;Purchase&quot;.
      </p>

      <ul>
        <li>Be bold and direct</li>
        <li>Repeat the call to action multiple times</li>
        <li>Ideally, one call to action per page</li>
      </ul>

      <h2>Failure</h2>

      <p>
        Further motivate customers reminding them what they will lose if the
        don&apos;t.
      </p>

      <h3>Failure. Example:</h3>

      <p>
        A financial advisor would like to show how unlike other financial-service
        providers, you will always meet clients personally. You will also not hit
        them with hidden fees.
      </p>

      <h2>Success</h2>

      <p>
        Show your customers how your product will transform their lives by
        sharing a vision.
      </p>

      <h3>Success Example:</h3>

      <p>
        For instance, Nike doesn&apos;t simply sell quality footwear and athletic
        gear. It promises an entire lifestyle – one filled with inspiration and
        drive and glory.
      </p>

      <h2>Takeaway</h2>

      <p>
        The book is great and showcases the importance of thinking about the
        brand as part of the life of it&apos;s customers. A customer centric
        approach to branding, and a powerful one because it fits the brand in a
        story structure, which has induced emotions and captivated people through
        out history.
      </p>
    </PostLayout>
  );
}
