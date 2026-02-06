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

export default function ShouldIBuyTheDipPage() {
  return (
    <PostLayout post={post}>
      <p>
        For quite some time I&apos;ve been monitoring the markets, and waiting
        for a dip to invest my cash. However, a few weeks ago I decided to put
        this assumption to the test. Is buying the dip the best I could do with
        my hard earned cash?
      </p>

      <h2>The context</h2>

      <ul>
        <li>
          Like most employees, I have a salary and some yearly disposable income
          to dedicate to my long term savings or investments. Concretely, I have
          about <strong>£20000 a year to dedicate to my investments</strong>.
        </li>
        <li>
          I decided to <strong>invest only on indexes</strong>, because I got
          burned with individual stocks (and crypto) multiple times (a.k.a. I am
          a terrible investor).
        </li>
        <li>
          <strong>Long term investments only</strong>. Monitoring the market
          daily/hourly is a massive drain of energy and time that I could
          dedicate to generate more cash to invest.
        </li>
      </ul>

      <h2>The scenarios</h2>

      <ul>
        <li>
          Buy daily same amount (Hardcore{" "}
          <a
            href="https://www.investopedia.com/terms/d/dollarcostaveraging.asp"
            target="_blank"
            rel="noopener noreferrer"
          >
            dollar cost averaging strategy
          </a>
          )
        </li>
        <li>
          Buy monthly same amount (Simple{" "}
          <a
            href="https://www.investopedia.com/terms/d/dollarcostaveraging.asp"
            target="_blank"
            rel="noopener noreferrer"
          >
            dollar cost averaging strategy
          </a>
          )
        </li>
        <li>
          Buy yearly same amount (Extremely simple{" "}
          <a
            href="https://www.investopedia.com/terms/d/dollarcostaveraging.asp"
            target="_blank"
            rel="noopener noreferrer"
          >
            dollar cost averaging strategy
          </a>
          )
        </li>
        <li>
          Buy the dip (My own{" "}
          <em>
            shitty-wait-for-it-and-spend-shit-tons-of-time-monitoring strategy
          </em>
          )
        </li>
      </ul>

      <p>
        I used Python +{" "}
        <a
          href="https://github.com/mementum/backtrader"
          target="_blank"
          rel="noopener noreferrer"
        >
          Backtrader library
        </a>{" "}
        to simulate my scenarios, and these were the results investing on the SPY
        ETF, ignoring commission fees because my broker offers zero commission
        transactions.
      </p>

      <p>
        <img src="/content/images/2020/10/index-strategies.jpg" alt="" />
      </p>

      <h2>Conclusion</h2>

      <p>
        This experiment was quite revealing for me, because it showed me that the
        return of investment (ROI) for spending 27 years monitoring the markets
        daily could easily be negative, compared with a hands-off strategy like
        dollar cost averaging monthly to the SPY.
      </p>

      <p>
        If previous return history is an indicative of future returns, the extra
        time dedicated to monitoring the market without a clear edge is a waste
        of time, which is also a waste of money.
      </p>

      <p>
        <strong>
          The main takeaway is don&apos;t try to beat the market, just invest at
          set intervals on some diversified indexes, and don&apos;t look back,
          regardless of what the market does. Spend the extra time generating
          more cash to invest, and the magic of compounding and dollar cost
          averaging will do the rest.
        </strong>
      </p>

      <p>
        <a
          href="https://twitter.com/carlosbaraza"
          target="_blank"
          rel="noopener noreferrer"
        >
          Follow me on Twitter @carlosbaraza
        </a>{" "}
        if you like this type of content and I&apos;ll make more.
      </p>

      <p>Other notes:</p>

      <ul>
        <li>
          The difference between investing daily, monthly and even yearly is
          pretty much negligible long term. Short term, it makes a bigger
          difference, being daily the best approach if your broker offers zero
          commissions.
        </li>
        <li>
          This strategy depends on the market continuing appreciating. If the
          market was ever to reverse permanently, this strategy, and pretty much
          every strategy would fail.
        </li>
      </ul>

      <h2>Disclaimer</h2>

      <p>
        I am not a professional investor, nor a financial advisor, and arguably
        not even a good amateur investor. This is just a simple experiment I run
        because I waste a lot of time and energy monitoring the market.
      </p>
    </PostLayout>
  );
}
