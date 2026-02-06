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

export default function CheapSimpleEncryptedPaasForAllYourSideProjects() {
  return (
    <PostLayout post={post}>
      <h2>What is the problem?</h2>

      <p>
        As a web engineer, I need a cheap semi-professional playground where I
        could deploy all my side-projects and scale them if I really need to
        (never).
      </p>

      <p>
        I often found myself slowed down and overwhelmed by the dev ops I needed
        to perform just to start a new project. Creating a new project was
        usually bringing many negative unconscious thoughts, imagining all the
        dev ops steps I needed to complete just to get started: set up VPS,
        configure DNS, configure Nginx, reread how to configure Nginx, configure
        Let&apos;s Encrypt, set up production environment, pay the new increased
        bill... The result was a cumbersome feeling of procrastination.
      </p>

      <p>
        I needed a platform that allowed me to hack something quickly and deploy
        it in a kind of professional environment, so I could start showing it off
        to my friends/Hacker News/Twitter/Reddit/nameit immediately.
      </p>

      <h2>Requirements:</h2>

      <ul>
        <li>Cheap: less than $15/month for all my side projects.</li>
        <li>Extremely simple to deploy new project: No dev ops needed.</li>
        <li>
          No technology stack enforced. Usually Node.js backend + SPA in the
          frontend. However, I like trying new things, and therefore I want the
          freedom to use whatever random language or technology that caught my eye
          that day.
        </li>
        <li>TLS Encryption (free, of course).</li>
        <li>Domain names for each project.</li>
      </ul>

      <h2>What I came up with:</h2>

      <p>
        <img
          src="/content/images/downloaded_images/Cheap---Simple---Encrypted-PaaS-for-all-your-side-projects/1-silDUZvr7KVuQODmI3ic4w.png"
          alt=""
        />
      </p>

      <h2>New project process</h2>

      <p>
        These are the needed steps to deploy a new project once you completed the
        initial configuration (below).
      </p>

      <ol>
        <li>
          Create a new container from your repository in GitHub or BitBucket
        </li>
        <li>Expose the port 80.</li>
        <li>
          Assign it the following environment variables to the container:
        </li>
      </ol>

      <ul>
        <li>
          LETSENCRYPT_HOST=newcoolproject.appy.land: Used to register the
          certificate. Usually the same than VIRTUAL_HOST.
        </li>
        <li>
          VIRTUAL_HOST=newcoolproject.appy.land: host to be used to access the
          app.
        </li>
        <li>
          LETSENCRYPT_EMAIL=myemail@appy.land: Used to register the certificate.
          You will receive alerts and other useful information in this email.
        </li>
      </ul>

      <p>
        That&apos;s it. You are done. The certificate will be automatically
        generated and all the encrypted traffic will be redirected to the
        container.
      </p>

      <hr />

      <p>
        If you don&apos;t use a wildcard{" "}
        <em>CNAME (*.appy.land),</em> like I do. You just need to point a CNAME
        to the <em>nginx-proxy</em> service endpoint.
      </p>

      <p>
        <img
          src="/content/images/downloaded_images/Cheap---Simple---Encrypted-PaaS-for-all-your-side-projects/1-DAkjKjGORsBWfhBolz4_4A.png"
          alt=""
        />
      </p>

      <h2>Initial configuration</h2>

      <p>
        Have you ever heard of Docker Cloud? Docker Cloud allows you to
        orchestrate containers from a simple UI.
      </p>
    </PostLayout>
  );
}
