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

export default function IdeationFindingAGoodBusinessIdea() {
  return (
    <PostLayout post={post}>
      <p>
        <img
          src="/content/images/2021/12/Ideation-finding-a-good-business-idea-1.png"
          alt=""
        />
      </p>

      <p>
        What makes for a good business idea? How can we find good ideas in the
        modern world, where everything seems to be solved already?
      </p>

      <p>
        As a serial entrepreneur, researching this topic is very close to my
        heart, and I would like to share what I have discovered with you, so you
        could leverage the experience I gained wasting time years pursuing the
        wrong thing.
      </p>

      <h2>TL;DR;</h2>

      <ul>
        <li>Start with problem instead of an idea</li>
        <li>
          Find problems
          <ul>
            <li>
              Scratch your own itch. What small problems do you have?
            </li>
            <li>
              Active research
              <ul>
                <li>
                  Find interesting topics to you. Hobbies? Work? Family and
                  friends?
                </li>
                <li>
                  Find problems for each topic. Where does the audience hang out?
                  Find what people complain about.
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          Selecting &quot;good&quot; problems
          <ul>
            <li>
              Real consumer need. Painful or painless problem? People pay when
              they feel emotions, especially negative emotions. Ask people if
              they would commit to pay now if you build the tool.
            </li>
            <li>
              Market trend. Is the market growing or shrinking? Growing markets
              are better because the pie is getting bigger.
            </li>
            <li>
              Estimate market size and competition. Checking if incumbent
              business exist and are successful is my rule of thumb.
            </li>
            <li>
              A good problem for you. Are you passionate about it? Can you build
              it? Imagine your life solving the problem, growing business and
              with a successful business.
            </li>
          </ul>
        </li>
      </ul>

      <h2>Start with problem instead of an idea</h2>

      <p>
        A business idea is nothing without{" "}
        <a
          href="https://www.investopedia.com/terms/b/business.asp"
          target="_blank"
          rel="noopener noreferrer"
        >
          business
        </a>
        . Business and the economy as a whole is something we created as humans
        to make our lives better, therefore business is about solving human
        problems. We can infer that an idea needs to solve a problem to become a
        business.
      </p>

      <p>
        EVERYTHING in the business should be about solving problems in an
        effective and efficient manner. And it all starts with an idea... I mean,
        a problem.
      </p>

      <p>
        Ideation is arguably the most important part of your early startup.
        It&apos;s about finding a problem that people have and trying to solve
        it. Don&apos;t focus on the idea, because you can&apos;t predict what
        people will like and how they will react. Instead, find a problem that
        already exists in your area of interest and try to solve it.
      </p>

      <p>
        People don&apos;t care about you, your business or your idea, they care
        about how could you help them.
      </p>

      <h2>Finding problems</h2>

      <p>
        Remember, the goal is to find a good problem, not an idea or a business
        model just yet. By the end of this exercise you should have a list of
        problems that you could scrutinize to find the right business problem for
        you to solve.
      </p>

      <p>
        You can repeat this exercise as many times and for as long as you need or
        want, because it is a great exercise for the mind, and potentially
        something that will render you a positive, fulfilling and overall great
        lifestyle.
      </p>

      <h3>Finding problems: Scratch your own itch</h3>

      <p>
        In order to build a successful business, you will need to provide a lot
        of value to your audience. If you start an idea in a market you
        don&apos;t fully understand or like, it is quite likely that you will not
        provide all the value you could if you were genuinely interested.
      </p>

      <p>
        Look for pain points in your own life: work, household, relationships,
        hobbies, etc. Pay close attention to the small details that makes your
        life harder than it should, and write down anything you find.
      </p>

      <p>
        Example: You start learning a language, but you realize that you spend
        hours looking for useful resources and studying grammar rules, and it is
        frustrating! Write the problem down before you forget.
      </p>

      <h3>Finding problems: Active research</h3>

      <p>
        Beware: This method requires sitting down to think and write! But
        don&apos;t let that deter you, cause the insights you will get could be
        amazing.
      </p>

      <p>
        You will need to repeat the following process for many topics that you
        are interested in. You are a unique human, and have a unique combination
        of interests that you can leverage to make for a great business.
      </p>

      <h4>1. Find interesting topics</h4>

      <p>
        Write down a list of topics you are interested on, because you will spend
        a lot of time thinking about the topic when you finally pick one.
      </p>

      <ul>
        <li>What are your hobbies?</li>
        <li>What activities do you enjoy?</li>
        <li>What is your profession?</li>
        <li>Where do you live?</li>
        <li>Where do you go out?</li>
        <li>What products do you use?</li>
        <li>
          Look at your friends&apos; lives. What are they interested on?
        </li>
        <li>
          ...you get the gist, write any topics that you could be interested on
        </li>
      </ul>

      <h4>2. Find problems for each topic</h4>

      <p>
        For each topic, you will need to find problems people currently. Answer
        the following questions:
      </p>

      <ul>
        <li>
          Where do people in that audience hang out?
          <ul>
            <li>
              Forums, Reddit, Twitter, YouTube, Instagram, LinkedIn... or even
              real life.
            </li>
            <li>Use forums and social media.</li>
          </ul>
        </li>
        <li>
          What do they complain about?
          <ul>
            <li>Take notes and look for complain patterns</li>
            <li>
              You can read about what people complain about, ask them questions
              or join discussions on the topic you are interested in. For
              example, if you want to create a new website for programmers, then
              go to Stack Overflow and ask questions about problems you face as a
              programmer.
            </li>
          </ul>
        </li>
        <li>
          If you know the topic or know someone that knows the topic
          <ul>
            <li>
              What problems do you face? For example, if you are a developer and
              want to create a new website builder, then look at the problems
              that other developers have when creating websites and try to solve
              them with your product.
            </li>
            <li>
              What problems do they face? For example, if you want to create an
              app that will help people find apartments in their city, then ask
              your friends about the problems they face when looking for an
              apartment.
            </li>
          </ul>
        </li>
      </ul>

      <p>
        By the end of your research, you should have a list of problems people
        have in multiple topics you are interested on. You just need to find a
        problem that would make for a good business.
      </p>

      <h2>Selecting &quot;good&quot; problems</h2>

      <p>
        Now that you have a list of problems, we need to discover how good each
        of this problems actually fit a business model. Not every problem can
        actually make for a great business, and that is the unfortunate reality
        of the capitalist world we live in. For a business to exist, it needs to
        make money. This is especially true for small business startups that
        still exist in survival mode.
      </p>

      <p>
        When your company becomes a billion dollar company, you can dedicate a
        part of your resources to noble problems that could not be solved by
        startups without a business model.
      </p>

      <p>
        There are thousands of things you could look at to scrutinize the
        problems, and you will develop your own framework over time. However, I
        concentrate on a few things that I have observed to be important.
      </p>

      <h3>Real consumer need. Painful or painless problem?</h3>

      <p>
        People pay for their negative emotions to subside. No one likes
        frustration, anger, sadness, loneliness... or working. We can understand
        what triggers these emotions and solve it for them. For example, they
        will love to pay for a frustrating and repetitive piece of work to be
        automated.
      </p>

      <h4>Painful problems</h4>

      <p>
        People pay to solve painful problems because they want the pain to cease.
        We exist embodied in an organism that feels and suffers, and that
        determines a lot of our behaviour. Pay attention to hard emotional words
        when people describe the problem.
      </p>

      <p>
        For example, people pay for a gym membership because they want to lose
        weight and look better. If you create an app that will help people lose
        weight by using different methods (for example, by tracking their
        calories), then you have a good problem.
      </p>

      <h4>Painless problems</h4>

      <p>
        People don&apos;t pay to solve painless problems, even if they are still
        problems to them. If the reaction of someone to a problem is &quot;meh,
        don&apos;t care that much&quot;, they will never pay for a service.
        Notice that everyone is different, and there could be a niche audience
        hidden to your eyes that actually feel pain when they encounter the
        problem.
      </p>

      <p>
        For example, people don&apos;t pay for an app that will help them find
        new music or movies to watch on Netflix because they can do it themselves
        without paying anything. If you create an app that will help people find
        new music or movies to watch on Netflix, then you have a bad problem.
      </p>

      <h4>Your wallet or your life</h4>

      <p>
        If you notice someone is describing the problem, ask her directly if she
        would pay to get the problem solved. However, someone saying she would
        pay for it is not the same than actually paying... so you could ask her
        if she would pay now if you contractually promise to solve the problem,
        only if they give you money now.
      </p>

      <p>
        This is pretty aggressive, but if some customers agree to sign, it would
        be a clear validation of the business potential because some people are
        willing to commit to solve the problem soon, even if there is no solution
        yet. You don&apos;t really need to actually take their money at this
        stage, because the goal is to get honest feedback from the customer by
        getting her in the position of actually thinking if she want to pay or
        not for the problem getting solved.
      </p>

      <h3>Market trend. Is the market growing or shrinking?</h3>

      <p>
        Riding the wave would make your life much easier. If the market is
        growing, it means the pie is bigger every day, which would make room for
        many new businesses coming to the space. In an emerging market, it is
        likely that some problems are still not completely solved, and that is
        where you come!
      </p>

      <p>Try to get an idea of where is the market going:</p>

      <ul>
        <li>
          Looking for trends on{" "}
          <a
            href="https://trends.google.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Trends
          </a>
          .
        </li>
        <li>Are new businesses being created?</li>
        <li>Are the news talking about it?</li>
        <li>People excited about it?</li>
      </ul>

      <p>
        <img
          src="/content/images/2021/12/Screenshot-2021-12-08-at-18.45.45.png"
          alt=""
        />
      </p>

      <p>
        Shrinking markets are generally harder because incumbent businesses are
        already established and the problems are generally solved. This does not
        mean that there could not be a new business in the block changing the
        status quo.
      </p>

      <h3>Market size and competition</h3>

      <h4>Finding incumbent businesses</h4>

      <p>
        A common rule of thumb I use is to find incumbent competitor businesses.
        Contrary to what some people think, which is that your business idea
        should not exist already and that it should be completely innovative,
        finding other businesses should give you some peace of mind. It could
        mean that someone has managed to make people pay for getting the problem
        solved, which is great news for you. You just need a small part of that
        market pie.
      </p>

      <h4>How big is the market</h4>

      <p>
        Estimate how many people could have the problem. Then imagine how much
        could they pay on average. Multiplying both numbers should give you an
        estimation of what the total market size could be.
      </p>

      <p>
        This metric is especially important if you plan on scaling the business,
        because some financing options are generally only available to big
        markets that could scale a business to millions in revenue.
      </p>

      <p>
        However, don&apos;t look at this metric in isolation. Small niche markets
        with painful problems could be amazing for a small business and make for
        a great lifestyle.
      </p>

      <h4>How valuable would solving this problem be to the world?</h4>

      <p>
        This is an important question to my eyes, because it will give you a
        mission. It will be faith, and a reason that will push you to the limits
        in order to pursue the mission.
      </p>

      <h4>How difficult is it to reach your audience?</h4>

      <p>
        With your current skills and knowledge, would you be able to reach your
        audience? Can you estimate how much would it cost in time and money to
        reach someone with the problem? This will define a part of the CAC
        (Customer Acquisition Cost).
      </p>

      <h3>A good problem to have (for you)</h3>

      <h4>Are you passionate about the problem?</h4>

      <p>
        If the business works, you will spend thousands of hours working and
        thinking about this problem. It would be make it much easier if you
        genuinely enjoyed the topic.
      </p>

      <p>
        I also think that it is possible to build a business on a topic you
        don&apos;t completely enjoy if you have a lot of self-control and work
        ethic.
      </p>

      <h4>Imagine your life solving the problem</h4>

      <p>
        Think carefully about how would building a business around the problem
        would feel within your life context: your goals, people in your life,
        your values, etc.
      </p>

      <p>Imagine it a different stages of the business:</p>

      <ul>
        <li>
          Beginning: Just starting the company and trying to figure something
          out.
        </li>
        <li>Growing: Hiring and building a bigger business</li>
        <li>
          Success: Your company has become the incumbent and a successful company
          in the space.
        </li>
      </ul>

      <h4>Can you solve the problem?</h4>

      <p>
        Do you have the skills required to solve the problem? Would you be able
        to hire and manage someone that solved the problem for you otherwise?
      </p>

      <p>
        Estimate how much time and capital would it take to build a solution for
        the problem. The lower the better, although low barriers of entry could
        mean more competition. Ideally, you want to find a problem with a low
        barrier of entry for you but high for other people.
      </p>

      <p>
        Example 1: If you are a developer, you have the advantage of having
        lower capital requirements for building a SaaS solution.
      </p>

      <p>
        Example 2: If you have deep knowledge in a market that most people
        don&apos;t understand, you would have a big advantage, because people
        would have to study extensively to break into the market.
      </p>

      <h4>How likely is it that the business succeeds?</h4>

      <p>
        This is a tricky question, because it is extremely difficult to estimate
        ahead of time if you could build a viable business or not. But sometimes,
        you get a feeling that a business would be simpler to pull off than
        another one for you. You can compare with how you feel about other
        problems.
      </p>

      <h2>Take action! Your action points</h2>

      <ul>
        <li>
          For a week, write down one problem you experience every day (7
          problems)
        </li>
        <li>
          Research 5 topics you enjoy
          <ul>
            <li>Hobbies? Activities?</li>
            <li>Where does the audience hang out?</li>
            <li>What do they complain about?</li>
          </ul>
        </li>
        <li>
          Estimate if each problem is a good problem to solve or not
        </li>
      </ul>

      <p>
        You can stay focused during your research using my forever free and Open
        Source focus tracking tool:{" "}
        <a
          href="https://focuskeep.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          focuskeep.com
        </a>
        .{" "}
        <a
          href="https://github.com/carlosbaraza/focuskeep"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub repository for focuskeep
        </a>
        .
      </p>

      <figure>
        <img
          src="/content/images/focuskeep.png"
          alt="FocusKeep screenshot"
        />
        <figcaption className="text-center">
          Track daily work routine with blocks of focused time. Pomodoro
          technique. Forever free.
        </figcaption>
      </figure>

      <p>
        You can stay focused during your research using my forever free and Open
        Source focus tracking tool: focuskeep.com
      </p>

      <h2>Resources</h2>

      <ul>
        <li>
          <a
            href="https://trends.google.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://trends.google.com/
          </a>{" "}
          - Super useful tool to find if a topic is trending or not.
        </li>
        <li>
          <a
            href="https://answerthepublic.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://answerthepublic.com/
          </a>{" "}
          - Great tool to know what other people are searching on Google.
        </li>
        <li>
          Book classics: Zero to One, Lean Startup, The $100 Startup, The
          innovator&apos;s dilemma, Traction, Building a Story Brand.
        </li>
        <li>
          <a
            href="https://www.indiehackers.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.indiehackers.com/
          </a>{" "}
          - Great community of indie entrepreneurs
        </li>
        <li>
          Podcasts: Indie Hackers, Indie Bites, Side Hustle School, My First
          Million, The Tropical MBA.
        </li>
        <li>
          <a
            href="https://leanstack.com/lean-canvas"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://leanstack.com/lean-canvas
          </a>{" "}
          - One page business model framework once you have chosen a problem to
          work on
        </li>
      </ul>

      <p>
        <img
          src="/content/images/2021/12/lean-canvas.png"
          alt="lean-canvas.png"
        />
      </p>

      <p>
        <a
          href="https://leanstack.com/lean-canvas"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lean Canvas
        </a>
        : One page business plan. Simple and effective when you are ready to move
        to the next stage of your business journey.
      </p>
    </PostLayout>
  );
}
