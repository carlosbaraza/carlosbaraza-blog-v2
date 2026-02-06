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

export default function ColleagueLostRootAccessPage() {
  return (
    <PostLayout post={post}>
      <p>
        Today we were trying to set up a CI runner in a the machine of one of my
        colleagues, who is going on holidays. He would let the machine available,
        so we could have an extra test runner for one of our projects.
      </p>

      <p>
        In order to set up the runner, we created a user in the machine and set
        up the environment. After some set up we realised it would be better to
        use an existing user in the machine. Now is when my friend decided to
        remove the unnecessary user (via command line) and accidentally deleted
        the user and the admin group on the machine (WTF!!!).
      </p>

      <p>
        After this unfortunate accident, everything got complicated because
        recreating the group was impossible without root access (provided to the
        user via the admin group). Plus, the actual OSX user management tool
        freezes due to the missing group. Using the Time Machine to recover a
        previous state was also not possible without admin access.
      </p>

      <p>
        Later, after some panic and online research, we found out that it is
        possible to restart an Apple machine in Single User mode, holding cmd + s
        during the power up. This shortcut boot the system up and logs in as
        root, displaying the shell prompt. From this point on, it is just a
        matter of restoring the default admin group.
      </p>

      <ol>
        <li>
          Mount the filesystem: <code>/sbin/mount -uw /</code>
        </li>
        <li>
          Start opendirectoryd:{" "}
          <code>
            launchctl load
            /System/Library/LaunchDaemons/com.apple.opendirectoryd.plist
          </code>
        </li>
        <li>
          Create <em>admin</em> group: <code>dscl . create /Groups/admin</code>
        </li>
        <li>
          <code>dscl . create /Groups/admin gid 80</code>
        </li>
        <li>
          <code>
            dscl . create /Groups/admin RealName &quot;Administrators&quot;
          </code>
        </li>
        <li>
          Reatach your user to admin:{" "}
          <code>dseditgroup -o edit -a myuser -t user admin</code>
        </li>
        <li>
          Confirm that the user is attached to the group:{" "}
          <code>dseditgroup -L admin</code>
        </li>
        <li>Reboot and fix the mess from the normal OSX session.</li>
      </ol>

      <p>
        Fortunately, the machine did not have FileVault 2 enabled or firmware
        password and we could solve this issue without the awkward moment of
        reporting that you deleted the admin group by mistake.
      </p>

      <p>
        As a note for the future, set a firmware password and enable FileVault2
        if you want to avoid some eventual thief or unauthorised person to
        escalate privileges in your machine and access your non-encrypted data.
      </p>
    </PostLayout>
  );
}
