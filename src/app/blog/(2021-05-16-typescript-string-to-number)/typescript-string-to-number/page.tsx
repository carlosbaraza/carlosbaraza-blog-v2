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

export default function TypescriptStringToNumber() {
  return (
    <PostLayout post={post}>
      <p>
        This article is part of my TypeScript series. Please, consider
        subscribing to my newsletter for tips on programming, entrepreneurship
        and design.
      </p>

      <p>
        I have noticed{" "}
        <a
          href="https://stackoverflow.com/questions/14667713/how-to-convert-a-string-to-number-in-typescript"
          target="_blank"
          rel="noopener noreferrer"
        >
          multiple
        </a>{" "}
        <a
          href="https://stackoverflow.com/questions/23437476/in-typescript-how-to-check-if-a-string-is-numeric"
          target="_blank"
          rel="noopener noreferrer"
        >
          questions
        </a>{" "}
        regarding how to convert a String value to a Number using TypeScript.
      </p>

      <p>
        The answer is that you can convert String to Numbers just the same way
        than JavaScript, using <code>parseInt(&quot;42&quot;)</code>,{" "}
        <code>parseFloat(&quot;42&quot;)</code>,{" "}
        <code>+&quot;42&quot;</code> or{" "}
        <code>Number(&quot;42&quot;)</code>.
      </p>

      <pre>
        <code className="language-typescript">{`const numberString: string = "42";

const number: number = parseInt(numberString);
const number: number = parseFloat(numberString);
const number: number = +numberString;
const number: number = Number(numberString);`}</code>
      </pre>

      <p>
        Multiple approaches return the same number type parsing a string number
      </p>

      <p>
        <a
          href="https://stackoverflow.com/questions/17106681/parseint-vs-unary-plus-when-to-use-which/17106702#17106702"
          target="_blank"
          rel="noopener noreferrer"
        >
          This StackOverflow answer
        </a>{" "}
        compares a multitude of alternative methods:
      </p>

      <p>
        <img
          src="/content/images/2021/05/number-parsing-comparison.png"
          alt=""
        />
      </p>

      <p>
        Finally, consider subscribing to my newsletter or following me on Twitter{" "}
        <a
          href="https://twitter.com/carlosbaraza"
          target="_blank"
          rel="noopener noreferrer"
        >
          @carlosbaraza
        </a>
        .
      </p>
    </PostLayout>
  );
}
