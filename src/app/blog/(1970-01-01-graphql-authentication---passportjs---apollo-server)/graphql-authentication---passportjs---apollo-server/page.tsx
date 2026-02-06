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

export default function GraphqlAuthenticationPassportjsApolloServer() {
  return (
    <PostLayout post={post}>
      <p>
        <a
          href="http://www.passportjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          PassportJS
        </a>{" "}
        is a great and mature library that supports many authentication methods.
        Therefore, it makes sense to use it.
      </p>

      <p>
        However, PassportJS is using good old classic REST. Now we are faced with
        the question: should we handle authentication using GraphQL or keep using
        PassportJS?
      </p>

      <p>
        Authentication can be handled separately adding a middleware checking
        authentication before every resolver. This way we can focus our GraphQL
        effort on more meaningful things.
      </p>

      <p>Resources:</p>

      <ul>
        <li>
          Example using Express middleware and Passport:{" "}
          <a
            href="https://dev.to/hasusozam/passport-jwt-with-graphql-3gdj"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://dev.to/hasusozam/passport-jwt-with-graphql-3gdj
          </a>
        </li>
        <li>
          Example of authentication directly on GraphQL:{" "}
          <a
            href="https://github.com/Volst/graphql-authentication"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/Volst/graphql-authentication
          </a>
        </li>
        <li>
          AccountsJS: Full Stack Authentication framework for JS using GraphQL{" "}
          <a
            href="https://github.com/accounts-js/accounts"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/accounts-js/accounts
          </a>
        </li>
      </ul>
    </PostLayout>
  );
}
