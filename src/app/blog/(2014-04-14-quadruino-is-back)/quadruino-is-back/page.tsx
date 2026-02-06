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

export default function QuadruinoIsBackPage() {
  return (
    <PostLayout post={post}>
      <p>
        A few years ago (2010), just when the Quadcopter or drones were starting
        to rise, I decided to create an Open Source Quadcopter, as part of my
        robotics and automation passion. However, my economical situation at the
        moment didn&apos;t allow me to buy some of the for the moment expensive
        sensors and tools to build the whole thing.
      </p>

      <p>
        Even if by the time I didn&apos;t finish the project, I did enjoy thought
        so much playing with the Kalman filters and the PIDs with a
        microcontroller and Matlab. Making a rudimentary PCB for the gyro and
        accelerometers was not that fun, due to the calibration and isolation
        from vibrations of both sensors to work well.
      </p>

      <p>
        Anyway, finally, after some years... I finished the Quadruino. The
        hardware is mostly bought on the internet, because I don&apos;t want to
        rediscover the wheel again. I played already once with the estimators and
        the low level electronics, now I would like to focus on high level
        development for this new framework to work with.
      </p>

      <p>
        Yesterday was the second, but first official flight. Something went wrong
        with the quad after some minutes of flight and due to some instability, I
        could not hold it in the air and it fell from something like 10 meters to
        the ground, damaging one of the arms on the crash. Soon I will migrate
        the electronics to a better frame, with better isolation from the
        vibrations of the rotors.
      </p>

      <p>Some pics from yesterday:</p>

      <p>
        <img
          src="/content/images/downloaded_images/Quadruino-is-back/0-e7NnJe_eLjq8sRG4.jpg"
          alt=""
        />
      </p>

      <p>
        <img
          src="/content/images/downloaded_images/Quadruino-is-back/0-PRZnr-A0WYJK6R-w.jpg"
          alt=""
        />
      </p>

      <p>
        <img
          src="/content/images/downloaded_images/Quadruino-is-back/0-1-aWvFHmArb6utzE.jpg"
          alt=""
        />
      </p>

      <p>
        <img
          src="/content/images/downloaded_images/Quadruino-is-back/0-b2_rJMfqIICjk7qt.jpg"
          alt=""
        />
      </p>
    </PostLayout>
  );
}
