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

export default function MyIdealWebStack() {
  return (
    <PostLayout post={post}>
      <p>
        <img
          src="/content/images/downloaded_images/My-ideal-web-stack/1-whcTChgJd5EZB3vkx5HsNg.png"
          alt=""
        />
      </p>

      <p>
        NAME (Next, Apollo, Mongo, Express) stack. My current ideal web stack.
      </p>

      <p>
        I have set on the quest of finding the current best web stack (as of
        mid-2019). This is just my humble opinion given my current knowledge of
        the field.
      </p>

      <p>
        <strong>Disclaimer:</strong> I do not intend to get into any dogmatic
        fights. I just found this stack particularly good, and I thought
        it&apos;d be worth sharing. If you are more productive in any other
        language or stack, please use that!
      </p>

      <p>
        The starting point of any stack decision should be a clear list of
        requirements it should satisfy. The decision depends on your situation
        and your company&apos;s situation.
      </p>

      <h2>My requirements</h2>

      <ul>
        <li>
          Developer speed, because I am a solo founder and the only developer.
        </li>
        <li>Quick prototyping.</li>
        <li>SSR (Server side rendering for SEO/SEM support).</li>
        <li>SPA: Single page application to create great experiences.</li>
        <li>
          Cheap and open source: because the project will most likely die anyway.
        </li>
      </ul>

      <h2>A bit of history</h2>

      <p>
        Up until a few years ago, my favorite tools for bootstrapping a new MVP
        were{" "}
        <a
          href="https://www.meteor.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Meteor
        </a>{" "}
        and{" "}
        <a
          href="https://github.com/facebook/create-react-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Create React App
        </a>
        . However, I am quite disappointed with the current situation with
        Meteor, as I think there are some big changes due to the platform to make
        it great again.
      </p>

      <p>
        My highest priority is development speed because I want to move forward
        quickly.
      </p>

      <h2>The NAME stack (because everything deserves a NAME)</h2>

      <p>
        After some research and experimentation, I have settled with:
      </p>

      <ul>
        <li>
          <a
            href="https://nextjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>NextJS</strong>
          </a>
          <strong>:</strong> Awesome support for SSR (which is a requirement if
          you want to optimize SEO/SEM). Quite opinionated, but still flexible.
        </li>
        <li>
          <a
            href="https://www.apollographql.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>Apollo</strong>
          </a>{" "}
          <strong>(</strong>
          <a
            href="https://graphql.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>GraphQL</strong>
          </a>
          <strong>):</strong> I use{" "}
          <a
            href="https://github.com/apollographql/apollo-server"
            target="_blank"
            rel="noopener noreferrer"
          >
            Apollo Server
          </a>{" "}
          and{" "}
          <a
            href="https://github.com/apollographql/apollo-client"
            target="_blank"
            rel="noopener noreferrer"
          >
            Apollo Client
          </a>{" "}
          to expose all the data my application needs. Check out{" "}
          <a
            href="https://github.com/zeit/next.js/tree/canary/examples/with-apollo"
            target="_blank"
            rel="noopener noreferrer"
          >
            with-apollo
          </a>{" "}
          Next example for Apollo Client integration.
        </li>
        <li>
          <a
            href="https://www.mongodb.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>MongoDB</strong>
          </a>
          <strong>:</strong> For the data layer, I chose MongoDB (NoSQL) because
          it is easier to get started with, at the expense of potentially having
          to deal with some data inconsistencies if the application survives long
          enough (migrations, associative tables, strict schema, etc).{" "}
          <a
            href="https://mongoosejs.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mongoose
          </a>{" "}
          library is quite powerful and allows some great schema configurations.
          An alternative was using an ORM like{" "}
          <a
            href="https://www.prisma.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Prisma
          </a>
          , but I decided to stick with MongoDB for being more mature and
          flexible than these new ORMs.
        </li>
        <li>
          <a
            href="https://expressjs.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>Express</strong>
          </a>
          : NextJS gives you the possibility to use a custom Express server (
          <a
            href="https://github.com/zeit/next.js/tree/canary/examples/custom-server-express"
            target="_blank"
            rel="noopener noreferrer"
          >
            check out the example
          </a>
          ). You can then expose an API along with the web application routes,
          directly using the one express server. I exposed a REST API for the
          user management with PassportJS, a GraphQL API endpoint, and the
          standard Next routes.
        </li>
        <li>
          <a
            href="https://www.typescriptlang.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>TypeScript</strong>
          </a>
          <strong>:</strong> It may slow you down a bit, but it is worth the
          extra safety it provides.
        </li>
        <li>
          <strong>Deployment</strong>:{" "}
          <a
            href="https://github.com/dokku/dokku"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dokku
          </a>
          . Open-source Docker-based PaaS. For just $10 you can set up your own
          Heroku-like PaaS in a droplet, and incubate all your side projects
          until one generates any money. Then you could transition to a more
          scalable solution if you need to.
        </li>
        <li>
          <strong>Headless CMS:</strong> This is an improvement I am considering
          if I ever have to create a project that needs to be maintained by
          non-technical people.{" "}
          <a
            href="https://strapi.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            Strapi
          </a>{" "}
          is a great open-source headless CMS, and it could accelerate
          development because you would spend less time writing APIs and CMS like
          functionality into your app.
        </li>
        <li>
          <strong>User and session management:</strong> Having to deal with
          passwords and sessions seems like a hurdle that no small company should
          have to deal with. It is a time-wasting and error-prone repetitive task
          that every company needs.{" "}
          <a
            href="http://www.passportjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            PassportJS
          </a>{" "}
          is fine, but I miss a stronger integration like the Accounts UI from
          Meteor. The project{" "}
          <a
            href="https://github.com/accounts-js/accounts"
            target="_blank"
            rel="noopener noreferrer"
          >
            AccountsJS
          </a>{" "}
          looks promising though, but it still requires some work. An{" "}
          <em>authentication-as-a-service</em> service like Auth0 or Firebase
          make this process easier because they could handle email verification,
          password resets, and many multiple OAuth providers like Google, Twitter,
          Facebook or GitHub. I chose{" "}
          <a
            href="https://firebase.google.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>Firebase</strong>
          </a>
          , because it integrates well with other Google tools like Google App
          Domains and groups, and I could potentially use other Firebase services
          in the future.
        </li>
      </ul>

      <h2>Show me the code</h2>

      <p>
        Please, check out my boilerplate and example repository (
        <a
          href="https://github.com/carlosbaraza/name-stack"
          target="_blank"
          rel="noopener noreferrer"
        >
          carlosbaraza/name-stack
        </a>
        ).
      </p>

      <p>
        Feel free to contribute to it! We could create a great boilerplate for
        modern applications.
      </p>

      <h2>What could be improved?</h2>

      <ul>
        <li>
          Simple getting started tools. My reference is Meteor, because I think
          they did a great job decrease time to launch and prototyping. However,
          at the time of writing the NAME stack requires quite a bit of
          configuration.
        </li>
        <li>
          User management is not ideal because I chose to delegate it to an{" "}
          <em>authentication-as-a-service</em> service. I lose control over the
          data and it locks me down to a tool, but apparently it is not that
          difficult to migrate out from Firebase.
        </li>
        <li>
          Glue and more glue: NextJS + Apollo + Mongo + Express + GraphQL +
          Firebase. It is quite annoying and frustrating spending time gluing
          tools together. But the worst is to realize that after an entire day of
          work, you didn&apos;t get any actual business logic done, only glued
          pieces together that you wished were glued out of the box for you. It
          has another important downside, and it is that it increases the moving
          parts. The more moving parts, the easier is that it breaks and the
          harder to maintain for a small company. Again, I&apos;d prefer a
          unified solution like Meteor.
        </li>
      </ul>

      <h2>But, is there anything good?</h2>

      <p>
        There are many positive aspects to this stack, and I&apos;ll name a few:
      </p>

      <ul>
        <li>
          Development speed is great because Next is a glorified{" "}
          <a
            href="https://github.com/facebook/create-react-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            create-react-app
          </a>
          . GraphQL is also quite fun and fast to work with.
        </li>
        <li>
          Good performance. A server-side rendered site would never be as fast as
          a pre-rendered static CDN hosted site. However, server-side rendered is
          way superior to Single Page Applications (SPA), because the client gets
          immediately the HTML for the site, and it can display and download
          assets while the full JS bundle loads. For most applications, the stock
          webserver is sufficient. If you happen to have enough traffic to hit
          the bottlenecks, you probably have enough resources to invest in a more
          scalable solution.
        </li>
        <li>
          Delegating user management to Firebase has the plus side that it is
          GDPR compliant, in case you distribute your tool in the EU.
        </li>
        <li>
          The technologies are already quite mature, and the community is
          thriving. It is very easy to find good examples around the web for all
          the technologies I used.
        </li>
        <li>
          Way more flexible than Meteor, and would make it simple to swap one
          component when a new technology comes in. Although, most side projects
          fail quite before they require a major technology bump. Therefore, time
          to market is still the most important thing.
        </li>
      </ul>

      <h2>Feedback, pleaaase</h2>

      <p>
        <strong>
          What are your thoughts about this stack? Any improvements you would
          suggest?
        </strong>
      </p>
    </PostLayout>
  );
}
