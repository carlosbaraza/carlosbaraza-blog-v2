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

export default function IndustrialRobotArmSimulatorVideoPage() {
  return (
    <PostLayout post={post}>
      <figure>
        <div className="relative w-full h-0 pb-[56.25%]">
          <iframe
            src="https://www.youtube.com/embed/fa7GwwA3498"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
          ></iframe>
        </div>
        <figcaption>Industrial Robot Arm Simulator</figcaption>
      </figure>

      <p>
        Built with: Matlab, Control theory, Robotics, Linear Algebra, UI,
        Industrial Robotics.
      </p>

      <p>
        Project developed as side-project for the course on Industrial Robotics
        at the University of Castilla-La Mancha.
      </p>

      <p>
        The entire framework and robot simulator was written by me in Matlab
        scripting language. The inverse kinetic transform equations were solved
        manually using linear algebra techniques for the ABB IRB2400 robot.
      </p>

      <h2>Screenshot</h2>

      <p>
        <img
          src="/content/images/2020/07/industrial-robot-arm-simulator-preview.jpg"
          alt="Industrial Robot Arm Simulator"
        />
      </p>
    </PostLayout>
  );
}
