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

export default function StoicJournalPage() {
  return (
    <PostLayout post={post}>
      <p>
        <img
          src="/content/images/2020/07/stoic-journal-banner.png"
          alt="Stoic Journal Logo"
        />
      </p>

      <p>
        Lately, and following a distressful situation, I discovered the{" "}
        <a href="https://en.wikipedia.org/wiki/Stoicism">stoic practices</a>{" "}
        through some interesting books on the topic like &quot;A Guide to the
        Good Life: The Ancient Art of Stoic Joy&quot; (really good book). I read
        other classics like Marco Aurelius and Seneca.
      </p>

      <p>
        After all this knowledge absorption, it was time to put it into practice.
        I decided to start practicing some of these teachings by keeping a daily
        journal of my progress.
      </p>

      <p>
        However, I found that there was no app that fit my specific needs, so I
        did what I do best, which is building a product. This time, I decided to
        build an iOS and Android app in maximum one week.
      </p>

      <p>
        For this project, I chose React Native, as I already know web, JavaScript
        and React pretty well. The project was completed successfully and
        published to both app stores.
      </p>

      <p>
        The entire codebase is open sourced and you can find it in at{" "}
        <a href="https://github.com/carlosbaraza/stoic-journal">
          carlosbaraza/stoic-journal
        </a>
        .
      </p>

      <h2>The app is actually being used!</h2>

      <p>
        Without any kind of promotion, I got some user to download the app. This
        is an interesting thing, given that I put zero effort in promoting the
        application, apart from publishing it to the marketplaces.
      </p>

      <p>
        <img
          src="/content/images/2020/07/Screenshot-2020-07-08-at-20.08.11.png"
          alt="Android active users"
        />
      </p>

      <h2>Unexpected feedback</h2>

      <p>
        I never intended this project to be used by anyone but me, but I published
        it just in case other people would find it useful.
      </p>

      <p>
        <img
          src="/content/images/2020/07/Screenshot-2020-07-08-at-19.46.18.png"
          alt="Feedback on Apple App Store"
        />
      </p>

      <p>
        <img
          src="/content/images/2020/07/Screenshot-2020-07-08-at-19.50.30.png"
          alt="Feedback on Android Play Store"
        />
      </p>

      <h2>People are ruthless</h2>

      <p>
        This is the main take away from this altruistic experiment, some people
        will hammer you with negative feedback, even when you give them free
        things and time.
      </p>

      <p>As an example, check out these two reviews:</p>

      <p>
        <img
          src="/content/images/2020/07/Screenshot-2020-07-08-at-19.53.24.png"
          alt="Negative feedback happens"
        />
      </p>

      <h2>Apple App Store</h2>

      <p>
        <a href="https://apps.apple.com/us/app/stoic-journal/id1500807777">
          Stoic Journal in the Apple App Store
        </a>
      </p>

      <p>Become a better version of yourself</p>

      <ul>
        <li>Keep track of your moral and personal progress</li>
        <li>Make Chrysippus proud</li>
        <li>Daily questions</li>
        <li>Secure journal, your data will never leave your phone</li>
        <li>Learn about stoicism</li>
      </ul>

      <figure>
        <img
          src="/content/images/2020/07/Screenshot-2020-07-08-at-19.44.31.png"
          alt="Apple App store listing"
        />
        <figcaption>Apple App store listing</figcaption>
      </figure>

      <h2>Android Play Store</h2>

      <p>
        <a href="https://play.google.com/store/apps/details?id=com.baraza.stoicjournal">
          Stoic Journal - Daily ethical notes - Apps on Google Play
        </a>
      </p>

      <h2>Dedicated landing page</h2>

      <p>
        <a href="https://stoicjournal.baraza.io/">
          https://stoicjournal.baraza.io/
        </a>
      </p>

      <h2>Lessons learned</h2>

      <ul>
        <li>It is good to build quick and deliver fast.</li>
        <li>
          Building things that you are interested in resonates better with the
          audience.
        </li>
        <li>
          There will always be haters. It is important to be extra clear that this
          is an altruistic act to slightly deter them.
        </li>
        <li>
          Free of charge still requires maintenance, which takes time and is not
          free.
        </li>
      </ul>
    </PostLayout>
  );
}
