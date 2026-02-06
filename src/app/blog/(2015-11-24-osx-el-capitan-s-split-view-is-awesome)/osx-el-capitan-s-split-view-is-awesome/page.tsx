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

export default function OsxElCapitanSplitViewPage() {
  return (
    <PostLayout post={post}>
      <p>
        Personally, I think that Apple should work on a unified operating system
        and discontinue the development of iOS (The new iPad PRO is an attempt of
        giving continuity to iOS). iOS doesn&apos;t work for professionals like
        developers or photographers. It&apos;s a very limited operating system,
        within which everything has to be controlled by Apple, in order to
        publish software.
      </p>

      <p>
        OSX, however, it&apos;s an awesome operating system, although it&apos;s
        lately differing too much from POSIX. In my opinion, it just needs a new
        responsive and mobile oriented face (and of course, this is a big work).
        I believe they should work on the operating system that will replace them
        all, like Microsoft has been doing Windows 10. This would let us finally
        use real photoshop or development tools in our iPad.
      </p>

      <p>
        Anyway, I like Apple products and I found myself very comfortable using
        the latest version of OSX El Capitan. Although I did not have high
        expectations, there is a feature I use everyday and makes me very happy
        :).
      </p>

      <p>
        The new Split View for fullscreen applications is quite handy for
        developers. You could have a terminal in one side and your favorite IDE
        on the other side. Or you could have your IDE and you browser. This is my
        currently preferred development environment.
      </p>

      <p>
        <img
          src="/content/images/downloaded_images/OSX-El-Capitan-s-Split-View-is-awesome/0-xNfCXU4zmr8-J1b8.png"
          alt=""
        />
      </p>

      <p>
        To change the focus between split panes, I use the custom OSX shortcut
        option + backtick:
      </p>

      <p>
        <img
          src="/content/images/downloaded_images/OSX-El-Capitan-s-Split-View-is-awesome/0-439whRESBHAA24yG.png"
          alt=""
        />
      </p>

      <p>
        This became a very comfortable environment for development purposes.
      </p>
    </PostLayout>
  );
}
