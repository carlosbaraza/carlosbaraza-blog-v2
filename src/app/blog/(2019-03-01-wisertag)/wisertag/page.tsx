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

export default function WisertagPage() {
  return (
    <PostLayout post={post}>
      <p>
        <img
          src="/content/images/2020/07/wisertag-logo.png"
          alt="Wisertag Logo and Banner"
        />
      </p>

      <p>
        I am a stubborn to-be entrepreneur. I am always looking for potential
        ideas to build and try. This is a quick reflection over a side-hustle
        that unfortunately didn&apos;t succeed.
      </p>

      <h2>Getting excited</h2>

      <p>
        One day, I went to buy some sushi at a Wasabi franchise. What was my
        surprise when they asked me to scan a QR code after paying to collect
        reward points. At that exact point I thought, QR and NFC are cool, and I
        should facilitate the access to these technologies lagging behind in the
        west.
      </p>

      <h2>Pivot #1: Loyalty cards</h2>

      <p>
        It sounded like a great idea to have loyalty cards where a
        cafe/restaurant customer would scan a QR/NFC code and collect stamps to
        get discounts.
      </p>

      <h4>Time invested: Not that much.</h4>

      <h4>ROI: &pound;0</h4>

      <h4>Customers: 0</h4>

      <h4>Take aways:</h4>

      <ul>
        <li>
          Built a product before actually having any customers. Only based on
          some existing competitors in the space and the franchise Wasabi using a
          similar product.
        </li>
        <li>
          It is CRITICAL to find customers as soon as possible. Motivation will
          quickly drop, specially if all your effort building something is not
          valued by anyone.
        </li>
        <li>
          Tried cold door selling the product once. I was scared because I never
          did sales, and it took real courage to enter a cafe and pitch my idea
          to a random waiter there. They pretty much kicked me out (with good
          manners). That was a terrible experience, but I learned that sales was
          important and difficult to master.
        </li>
        <li>
          <strong>Validate soon. Sell more.</strong>
        </li>
      </ul>

      <p>
        <img
          src="/content/images/2020/07/parallax-slides2-phones.png"
          alt=""
        />
      </p>

      <h2>Pivot #2: Smart plant label</h2>

      <p>
        Given that I usually struggle with patience to stick to a non validated
        idea, I decided to explore something else that interested me.
      </p>

      <p>
        I love plants, and I have tens of them at home (seriously, my house is
        like a jungle, greenery all over the place :)). I would like to build
        something that helped customers to keep their plants alive, giving them
        care details. A simple label that plant shops could put on the plant and
        assign to a specific species.
      </p>

      <h4>Time invested: A lot</h4>

      <h4>ROI: &pound;500</h4>

      <h4>Customers: 2</h4>

      <h4>Take aways:</h4>

      <ul>
        <li>Invest less time on MVP.</li>
        <li>Better SaaS than physical products.</li>
        <li>
          Manufacturing in China is unreliable. They make a lot of mistakes and
          it is difficult to communicate unless you have a big budget.
        </li>
        <li>
          Sales is critical. I should invest 50% of time on sales, at least.
          This time around I did better than earlier and managed to sell
          something, but it was not good enough. This is a challenge for
          Engineers-Entrepreneurs.
        </li>
        <li>
          Sell before building anything to validate the idea early.
        </li>
      </ul>

      <p>
        <img
          src="/content/images/2020/07/Wisertag-Plants-Ttag--5MP--2-1.jpg"
          alt=""
        />
      </p>

      <p>Final manufactured product in China.</p>

      <p>
        <img src="/content/images/2020/07/IMG_0957.jpg" alt="" />
      </p>

      <p>
        <img src="/content/images/2020/07/IMG_0774.jpg" alt="" />
      </p>

      <p>
        <img src="/content/images/2020/07/IMG_0763.jpg" alt="" />
      </p>

      <p>
        <img src="/content/images/2020/07/IMG_0652.jpg" alt="" />
      </p>

      <p>
        <img src="/content/images/2020/07/IMG_0585-Edit.jpg" alt="" />
      </p>

      <p>
        <img src="/content/images/2020/07/IMG_0703.jpg" alt="" />
      </p>

      <p>
        <img src="/content/images/2020/07/Wisertag-Plant-1.jpg" alt="" />
      </p>

      <p>First batch (initial and hand-made MVP). Sold 40.</p>

      <p>
        <img
          src="/content/images/2020/07/parallax-slides-plant-center.png"
          alt=""
        />
      </p>

      <p>The plant UI when the QR code is scanned</p>

      <p>
        <img
          src="/content/images/2020/07/Wisertag-Plants-Ttag--5MP--8.jpg"
          alt=""
        />
      </p>

      <p>
        <img
          src="/content/images/2020/07/Wisertag-Plants-Ttag--5MP--7.jpg"
          alt=""
        />
      </p>

      <p>
        <img
          src="/content/images/2020/07/Wisertag-Plants-Ttag--5MP--6.jpg"
          alt=""
        />
      </p>

      <p>
        <img
          src="/content/images/2020/07/Wisertag-Plants-Ttag--5MP--5.jpg"
          alt=""
        />
      </p>

      <p>
        <img
          src="/content/images/2020/07/Wisertag-Plants-Ttag--5MP--2.jpg"
          alt=""
        />
      </p>

      <p>
        <img
          src="/content/images/2020/07/Wisertag-Plants-Ttag--5MP--3.jpg"
          alt=""
        />
      </p>

      <p>
        <img
          src="/content/images/2020/07/Wisertag-Plants-Ttag--5MP--4.jpg"
          alt=""
        />
      </p>

      <p>
        <img
          src="/content/images/2020/07/Wisertag-Plants-Ttag--5MP--1.jpg"
          alt=""
        />
      </p>

      <p>Manufactured smart labels in China.</p>

      <h2>WebSummit 2019</h2>

      <p>
        We applied to WebSummit 2019 in Lisbon (Portugal), and we got accepted
        to participate in it as an Alpha company (less than 500k investment).
        This is a great experience and we met a lot of interesting people, even
        some potential investors and partners.
      </p>

      <p>
        <img src="/content/images/2020/07/IMG_20191106_173106.jpg" alt="" />
      </p>

      <p>
        <img src="/content/images/2020/07/IMG_20191106_163024.jpg" alt="" />
      </p>

      <p>
        <img src="/content/images/2020/07/IMG_20191106_163124.jpg" alt="" />
      </p>

      <p>Wisertag at WebSummit 2019. Lisbon (Portugal).</p>

      <h2>The motivation decline</h2>

      <p>
        After WebSummit, I found a new role at Bloomberg and I also started
        working at another startup (InPractise.com). This, along with the lack
        of potential customers and partners, meant that Wisertag was forgotten
        and parked to the side.
      </p>

      <p>
        Eventually... I took the executive decision of throwing away all the
        plant label stock, which was taking valuable space in my small London
        apartment.
      </p>

      <p>
        That was a sad moment, but also a liberation, and it proved that
        I&apos;m ready to move on and face a new challenge.
      </p>

      <h2>Pivot #3: Dead cat bounce, COVID-19 restaurant menus</h2>

      <p>
        After the COVID-19 pandemic started, I had too much time to think. I
        then decided to reuse the name and try selling a simple product to
        create restaurant menus with a QR code the restaurants could print. This
        time around, I wouldn&apos;t build it first.
      </p>

      <h4>Time invested: Not much.</h4>

      <h4>ROI: &pound;0</h4>

      <h4>Customers: 0, but multiple prospects.</h4>

      <h4>Take aways:</h4>

      <ul>
        <li>
          Changed the landing page to accommodate the new idea (checkout image
          bellow).
        </li>
        <li>
          Built a TripAdvisor email scraper for restaurants and collected around
          20k emails for restaurants.
        </li>
        <li>
          Sent email to 2k restaurants in Spain, and got a few prospects.
        </li>
        <li>
          I got the feeling that it was not resonating that much, and I decided
          to drop the project before wasting any more time.
        </li>
        <li>
          I am happy that I didn&apos;t spent much time on this, this time
          around. This was a quick way to validate the idea, before building
          anything.
        </li>
      </ul>

      <p>
        <img
          src="/content/images/2020/07/www.wisertag.com_-Laptop-with-MDPI-screen--1.png"
          alt=""
        />
      </p>

      <p>Landing page after Wisertag.com latest pivot</p>

      <h2>Lessons learned</h2>

      <ul>
        <li>
          <strong>Don&apos;t build before selling.</strong> Only allowed to build
          a landing page to sell and pitch the idea.
        </li>
        <li>
          <strong>Minimise time to validation</strong>. Wasted effort should be
          minimised.
        </li>
        <li>
          <strong>
            Get at least 10 actual customers interested in the product before
            building anything.
          </strong>
        </li>
        <li>
          <strong>Validate soon. Sell more.</strong>
        </li>
        <li>
          Physical products are hard. Manufacturing adds an extra complexity
          layer to the build process.
        </li>
      </ul>

      <p>
        Wisertag was a great experience for me. It was an attempt to build a
        business. This time I didn&apos;t succeed, but there will be other
        opportunities.
      </p>
    </PostLayout>
  );
}
