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

export default function MigrateOsxToWindowsPage() {
  return (
    <PostLayout post={post}>
      <p>
        Lately, I am particularly interested in Machine Learning. GPUs are used
        for training the ML models quickly. However, MacBooks don&apos;t have
        good GPUs and therefore, I am considering a change of laptop.
      </p>

      <p>
        But that means switching from OSX to Windows or Linux. Some proprietary
        software (Adobe Suite) is only available for Windows/OSX, and it forces
        me to chose Windows. However, I would miss so much the UNIX shell and
        the GNU ecosystem.
      </p>

      <p>
        However, I think it is a good time for the OS switch. Two major pieces
        of software allow developers to enjoy a native GNU experience under
        Windows:
      </p>

      <ul>
        <li>
          <a
            href="https://en.wikipedia.org/wiki/Windows_Subsystem_for_Linux"
            target="_blank"
            rel="noopener noreferrer"
          >
            WSL (Windows Subsystem for Linux)
          </a>
          , which is a compatibility layer for running Linux binary executables
          natively on Windows 10. This means that the original set of tools
          coming from Ubuntu/Debian can be run natively in Windows. Node can be
          run natively as well on top of WSL.
        </li>
        <li>
          <a
            href="https://store.docker.com/editions/community/docker-ce-desktop-windows"
            target="_blank"
            rel="noopener noreferrer"
          >
            Docker
          </a>{" "}
          allows containers to be run on Windows.
        </li>
      </ul>

      <p>
        The time of Cygwin, Powershell (and all of those API imitating
        libraries) is over. The WSL ecosystem is mature and allows running
        native GNU/Linux software in Windows.
      </p>

      <p>
        In a few weeks, I will buy a new laptop, and I will let you know my
        experience, the good and the ugly.
      </p>
    </PostLayout>
  );
}
