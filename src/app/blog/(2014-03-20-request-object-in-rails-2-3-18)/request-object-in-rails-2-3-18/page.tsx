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

export default function RequestObjectInRailsPage() {
  return (
    <PostLayout post={post}>
      <p>
        During the execution of an action in Rails we can access to all the
        parameter of the request via de request object. This object includes the
        following useful methods:
      </p>

      <ul>
        <li>
          <strong>headers</strong> &mdash; Returns a hash containing the headers
          associated with the request.
        </li>
        <li>
          <strong>body</strong> &mdash; Returns an StingIO with the body.
        </li>
        <li>
          <strong>host</strong> &mdash; The hostname used for this request.
        </li>
        <li>
          <strong>domain</strong> &mdash; The hostname without the first part
          (usually &quot;www&quot;).
        </li>
        <li>
          <strong>format</strong> &mdash; The content type requested by the
          client.
        </li>
        <li>
          <strong>method</strong> &mdash; The HTTP method used for the request.
        </li>
        <li>
          <strong>get?, post?, put?, delete?, head?</strong> &mdash; Returns true
          if the HTTP method is get/post/put/delete/head.
        </li>
        <li>
          <strong>port</strong> &mdash; The port number (integer) used for the
          request.
        </li>
        <li>
          <strong>protocol</strong> &mdash; The protocol used for the request.
        </li>
        <li>
          <strong>query_string</strong> &mdash; The query string part of the URL
          &mdash; everything after &quot;?&quot;.
        </li>
        <li>
          <strong>remote_ip</strong> &mdash; The IP address of the client.
        </li>
        <li>
          <strong>url</strong> &mdash; The entire URL used for the request.
        </li>
      </ul>

      <p>I found pretty useful the headers method to get headers like this:</p>

      <pre>
        <code>{`request.headers['CONTENT_TYPE']`}</code>
      </pre>

      <p>Also you can the raw body like follows:</p>

      <pre>
        <code>{`request.body.read`}</code>
      </pre>
    </PostLayout>
  );
}
