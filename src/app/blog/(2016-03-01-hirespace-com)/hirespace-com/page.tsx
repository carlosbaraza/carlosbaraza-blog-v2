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

export default function HireSpacePage() {
  return (
    <PostLayout post={post}>
      <p>
        Role: <strong>Senior Full Stack Engineer</strong>.
      </p>

      <p>Length: ~6 months.</p>

      <p>JavaScript, Meteor, .NET, C#.</p>

      <p>
        HireSpace.com is the UK&apos;s leading venue marketplace. Our business
        model is similar to Airbnb, with the difference that we advertise
        venues, instead of apartments.
      </p>

      <ul>
        <li>
          Lead Engineer and line manager in an Agile team of 5 engineers, closely
          working with two product managers and one QA Specialist.
        </li>
        <li>
          300+ commits in a back office application used to manage our bookings
          and our customer base. The web application is built using Meteor
          (Node), Blaze and React.
        </li>
        <li>
          Developed the referral, rewards and promo schemas; and integrated them
          with all our systems. These features brought more than 150 enquiries.
        </li>
        <li>
          Developed multiple features for hirespace.com, and
          venues.hirespace.com (admin section for venue managers). Both built
          using ASP.NET and Angular.JS.
        </li>
        <li>
          As a full stack engineer I have done a lot of dev ops: set up automated
          builds for multiple projects in Team City, migrated entire production
          to a more stable provider, set up new deployment scripts, configured
          DNSs, configured servers, configured cron jobs, improved email
          deliverability migrating to Amazon SES (between other changes).
        </li>
        <li>
          Developed a venue proposal application using React + Meteor. A
          salesman would select venues from our data base and prepare an
          interactive proposal for the customer. The customer would interact with
          sales through the proposal application, providing feedback until
          finally she books a venues with us.
        </li>
        <li>
          Contributed to creating a very united team of engineers. We have all
          become good friends, meeting out of office hours for events, meetups,
          dinner, arcades, etc.
        </li>
        <li>
          Improved the engineering process: reconfigured Jira for an improved
          workflow and better reports, facilitated systematic standups, grooming
          sessions, planning, retrospectives and realistic sprints. These changes
          boosted team performance and most importantly, team happiness; because
          at the end of the sprints, we felt that we had accomplished the goals
          we had for the sprint.
        </li>
      </ul>
    </PostLayout>
  );
}
