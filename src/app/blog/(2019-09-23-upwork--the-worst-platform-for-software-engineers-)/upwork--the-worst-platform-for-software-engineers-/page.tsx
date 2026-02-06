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

export default function UpworkWorstPlatformForSoftwareEngineersPage() {
  return (
    <PostLayout post={post}>
      <p>
        Many years ago, I created an account on Upwork. However, I never used it
        because I always had direct customers or full-time roles as a Software
        Engineer.
      </p>

      <p>
        Recently, I decided to update my profile and find some side contracts on
        the platform. I spent multiple hours completing my profile:
      </p>

      <ul>
        <li>
          Introducing every single piece of my job history in the platform
        </li>
        <li>Links to all my projects</li>
        <li>Description of each item</li>
        <li>ID verification</li>
        <li>Certification verification</li>
      </ul>

      <p>
        Finally, I decided to apply for some contracts. However, I wanted to
        find contracts in the UK, therefore I had to verify my location sending a
        copy of my Passport and a utility bill.
      </p>

      <p>
        After hours setting up my profile... I started applying for contracts.
      </p>

      <p>
        However, what is my surprise when I get a notification saying that my
        account had been suspended because I had &quot;altered or
        falsified&quot; my own documents. W...T...F...
      </p>

      <p>This is the complete email I received:</p>

      <blockquote>
        <p>
          <strong>Ali</strong> (Upwork Help Center) Sep 23, 12:09 PM WEST
          <br />
          Hello Carlos Baraza,
          <br />
          After reviewing the documents you submitted to verify your identity,
          we&apos;ve determined that some materials were falsified or altered.
          <br />
          As a result, we&apos;ve been forced to permanently deactivate your
          Upwork account, and you won&apos;t be allowed to open a new one.
          <br />
          We are sorry to have to take this step, but we have a zero-tolerance
          policy toward false documentation. Your actions are viewed as a
          serious violation of our{" "}
          <a
            href="https://www.upwork.com/legal/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Upwork User Agreement
          </a>
          .
          <br />
          We fully understand how this may affect you, and we made this decision
          only after careful consideration. Because our decision is final and
          cannot be reversed, please know we are unlikely to respond to
          correspondence from you regarding this matter.
          <br />
          Regards,
          <br />
          Upwork Identity Team
        </p>
      </blockquote>

      <p>
        However, I did not upload any falsified or altered documents. Therefore,
        I decided to open another support ticket, because this was a total
        misunderstanding. On this second support ticket, I included:
      </p>

      <ul>
        <li>My scanned passport</li>
        <li>Bank statement</li>
        <li>Company name</li>
        <li>VAT number</li>
        <li>Full address and utility bill</li>
        <li>LinkedIn URL</li>
      </ul>

      <p>This is what they answered back to me:</p>

      <blockquote>
        <p>
          <strong>Jamaica Corbita</strong> (Upwork Help Center) Sep 23, 5:30 PM
          WEST
          <br />
          Hello Carlos,
          <br />
          Thank you for contacting Upwork Support.
          <br />
          Unfortunately, your account has been permanently suspended. This
          suspension is due to violations on your account, or an account you are
          associated with.
          <br />
          While we regret having to take this step, the{" "}
          <a
            href="https://www.upwork.com/legal/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Terms of Service
          </a>{" "}
          violation(s) were simply too serious, and we are not able to reverse
          this decision.
          <br />
          Please know we are unlikely to respond to further correspondence
          regarding this matter. We wish you well in your future endeavors.
          <br />
          Regards,
          <br />
          Jamaica
          <br />
          Upwork Support |{" "}
          <a
            href="http://support.upwork.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            support.upwork.com
          </a>
        </p>
      </blockquote>

      <h2>Other issues with the platform</h2>

      <ul>
        <li>
          Rates are very low. This is extremely challenging if you live in a
          city like London, UK. We just can&apos;t accept a $5.00/hour rate.
        </li>
        <li>
          You can not reach out to clients directly, because you risk getting
          banned for not using the platform. I get it, they don&apos;t want to
          be left out so they can get their fee. However, working at a team
          implies joining their Slack, Skype, Teams and others.
        </li>
        <li>
          Their fee is really high (20%). What do they do to deserve that fee?
          Just to maintain a simple web application and a chat?
        </li>
      </ul>

      <h2>Avoid Upwork</h2>

      <p>
        Upwork doesn&apos;t respect or care about the freelancers that actually
        bring value to their own platform.
      </p>

      <p>
        As a freelancer, you really don&apos;t want to depend on one platform
        that can close your account whenever they feel like it, without giving
        you any other explanation or chances to appeal.
      </p>

      <p>Alternatives:</p>

      <ul>
        <li>Other platforms like Toptal, RemoteOK, AngelList, etc.</li>
        <li>
          Search for clients on other channels like Social Media, Forums,
          Communities. Think about where your clients hang out and go there.
        </li>
      </ul>
    </PostLayout>
  );
}
