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

export default function IsWindowsAnOptionForDevelopersIn2019Page() {
  return (
    <PostLayout post={post}>
      <p>
        <img
          src="/content/images/downloaded_images/Is-Windows-an-option-for-developers-in-2019-/1-c5ch8FSmmEqjjzSISSLhNw.jpeg"
          alt=""
        />
      </p>

      <p>Ubuntu running on WSL (Windows Subsystem for Linux)</p>

      <p>
        <em>TL;DR: Yes...n...yes, but please continue reading.</em>
      </p>

      <p>
        As you may all know, developers are a social tribe that is well known
        for using MacBooks with stickers on them. There are multiple reasons for
        this, but the key one, in my opinion, is that OSX is a POSIX-compatible
        operating system, which means that it is very similar to GNU/Linux or
        UNIX.
      </p>

      <p>
        98% of web servers are GNU/Linux servers according to{" "}
        <a
          href="https://web.archive.org/web/20151004225123/http://www.w3cook.com:80/os/summary"
          target="_blank"
          rel="noopener noreferrer"
        >
          W3Cook
        </a>
        . As Linus Torvalds stated{" "}
        <a
          href="https://www.realworldtech.com/forum/?threadid=183440&curpostid=183486"
          target="_blank"
          rel="noopener noreferrer"
        >
          here about the x86 vs ARM dispute
        </a>
        , developers want to develop in a similar environment they will be
        running the production deployment of the program. OSX is not GNU/Linux,
        but its unique proposition has traditionally been a combination of:
      </p>

      <ul>
        <li>UNIX-like environment</li>
        <li>
          Commercial tools (e.g. Adobe Suite, which is not available for
          GNU/Linux)
        </li>
        <li>Highly stable computers oriented to professionals</li>
      </ul>

      <h2>What about Windows?</h2>

      <p>
        Windows has traditionally been a difficult development environment,
        except if you program for Windows (e.g. gaming industry or .NET). If
        your work depended on NodeJS, Python, Ruby, Docker, Bash or many other
        tools, working with Windows was a nightmare. You could do the job dual
        booting into Linux or using a Linux VM, but it was troublesome and not a
        neat experience.
      </p>

      <p>
        Microsoft realized this was an issue and in 2016 they launched WSL
        (Windows Subsystem for Linux). In a nutshell, they wrote a small Linux
        kernel, running on top of Windows OS. You could then install your
        favorite distribution on top of Windows, and it would integrate pretty
        well with the rest of the operating system.
      </p>

      <h2>Is WSL actually ready for developers?</h2>

      <p>
        I recently bought a high-specced machine (
        <a
          href="https://amzn.to/2Ye533d"
          target="_blank"
          rel="noopener noreferrer"
        >
          Razer Blade 15 w/i7-8750H and RTX 2080 US
        </a>
        ,{" "}
        <a
          href="https://amzn.to/2JrBQhN"
          target="_blank"
          rel="noopener noreferrer"
        >
          UK link
        </a>
        ) for 2/3 of a MacBook Pro price and set on the quest of making a great
        development experience. You can follow the progress in{" "}
        <a
          href="https://github.com/carlosbaraza/dotfiles"
          target="_blank"
          rel="noopener noreferrer"
        >
          my dotfiles repository
        </a>
        .
      </p>

      <p>
        I tested it for 2 weeks, and my conclusion is that you can totally use
        it for development.
      </p>

      <p>But... it was painful.</p>

      <h2>Would I recommend most developers to migrate to Windows?</h2>

      <p>
        No, and the reason is simple. If you want a seamless experience with
        anything, you should stick to the most common user path because it has
        been time-proofed.
      </p>

      <p>
        Unless most developers start migrating to Windows, it will continue to
        be painful and it will slow you down. Ultimately, programming is our
        job, and one hour wasted debugging a Windows/WSL related issue is an
        hour you did not get paid or an hour you could have invested in more
        productive tasks.
      </p>

      <h2>Most annoying issues I encountered</h2>

      <ul>
        <li>
          You are on your own... None of your colleagues would have encountered
          your problems and most of the guidelines are written with OSX/Linux in
          mind, not your custom WSL setup.
        </li>
        <li>
          You never know if an issue is Windows related, Linux related, or even
          some software running on Windows like the Windows Defender Firewall.
        </li>
        <li>
          Key bindings... Sounds stupid, and you&apos;d probably get used to it
          after some time. As a Software Engineer, your key bindings and
          shortcuts are very important for productivity. It was very annoying
          realizing you did not copy the text because you didn&apos;t use ctrl
          or you need to use end key, pg up, pg down to move around text
          documents. The list of shortcuts that change is quite long and I found
          this a massive slowdown. I ended up using{" "}
          <a
            href="https://github.com/carlosbaraza/dotfiles/blob/master/windows/magic-keyboard.ahk"
            target="_blank"
            rel="noopener noreferrer"
          >
            an AutoHotkey script to map all my Magic Keyboard keys to Windows
            equivalents
          </a>
          .
        </li>
        <li>
          Lack of GPU acceleration on WSL (top requested WSL feature). One of
          the reasons for my migration to Windows was Deep Learning. Apple does
          not include Nvidia cards in MacBooks, and most Machine Learning
          libraries are optimized using Cuda, which is Nvidia&apos;s proprietary
          graphics card programming SDK. However, my surprise was that WSL does
          not support GPU acceleration, so you can only run libraries compiled
          for Windows. Many libraries like the OpenAI gym don&apos;t support
          Windows, so in the end, Windows turned out to be pretty useless and a
          dual boot with GNU/Linux was required.
        </li>
        <li>
          VSCode is not completely integrated with WSL and many extensions give
          you troubles, so I ended up running VSCode on WSL using an XServer.
          But then, the experience wasn&apos;t as polished.
        </li>
        <li>
          Duplication... you basically need to duplicate much of your
          configuration. For example, you need to configure GIT in WSL and
          Windows. In a way, managing WSL feels a bit like managing a VM and it
          is not completely integrated with Windows.
        </li>
        <li>
          WSL can read Windows files, but Windows can&apos;t read WSL files or
          bugs will happen if you try to do so.
        </li>
        <li>
          Terminal emulators are buggy, slow or unpolished. I tried many
          terminal emulators and none of them work as well as iTerm2 for OSX. I
          ended up using ConEMU and Hyper, but none of them really satisfy me.
        </li>
        <li>
          Bugs. There are many bugs related to WSL. For example, I encountered
          one running NVM (Node version manager), that sometimes would
          completely halt the initialization of the terminal session. I fixed it
          by delaying NVM load{" "}
          <a
            href="https://github.com/carlosbaraza/dotfiles/blob/master/windows/.zshrc#L20-L40"
            target="_blank"
            rel="noopener noreferrer"
          >
            until I required Node
          </a>
          . However, it took me a few hours to figure out what happened,
          debugging all the scripts running on my .zshrc.
        </li>
        <li>
          Windows high DPI screens support sucks. I have a 4k screen and
          everything looks very small. There is an Accessibility option to
          increase the size of the windows. However, when you do that, most of
          the applications look very blurry and it is even more annoying.
        </li>
        <li>
          The text is rendered very poorly in Windows, creating a kind of
          chromatic aberration around it. Coming from an Apple MacBook, this
          turned out to be quite annoying, because I didn&apos;t know if my
          design looked bad or if it was just Windows messing up with it.
        </li>
      </ul>

      <p>
        <img
          src="/content/images/downloaded_images/Is-Windows-an-option-for-developers-in-2019-/1-uQrOtlvdq5F3Bi4PV86OHw.png"
          alt=""
        />
      </p>

      <p>
        Text rendered poorly on Windows (e.g. the vertical lines have a strange
        &quot;chromatic aberration&quot;)
      </p>

      <ul>
        <li>
          Windows{" "}
          <a
            href="https://chocolatey.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chocolatey
          </a>{" "}
          is better than no command line dependency manager, but{" "}
          <a
            href="https://brew.sh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Homebrew
          </a>{" "}
          is a stronger piece of software. Chocolatey misses many packages and
          many other packages are published multiple times with different names.
          Versioning is quite inconsistent too. Multiple times I ended up
          installing software with the UI Installers.
        </li>
      </ul>

      <h2>Final note</h2>

      <p>
        Microsoft has made great efforts to support the needs of developers and
        creators, but as of 2019, I think OSX is still a stronger option for
        developers.
      </p>

      <p>
        I decided to come back to my MacBook Pro 2015 and use a Cloud provider
        for my Machine Learning experiments.
      </p>

      <p>
        The good news is that there is still some room for improvement, and we
        know that Microsoft is working on it, so this may change in 2020.
      </p>

      <p>
        In the meantime, if you want to give it a try, you can have a look at{" "}
        <a
          href="https://github.com/carlosbaraza/dotfiles"
          target="_blank"
          rel="noopener noreferrer"
        >
          my dotfiles, where I tried to document my progress in this attempt.
        </a>
      </p>

      <p>
        <em>
          P.S. <strong>Unfortunately</strong> and{" "}
          <strong>unintentionally</strong>, I managed to get in the Windows vs
          OSX war. I am by no means an Apple fanboy, I am just a practical
          developer that wants to get work done as efficiently as possible. And
          this article is a reflection upon my own experience trying to migrate
          from OSX to Windows.
        </em>
      </p>
    </PostLayout>
  );
}
