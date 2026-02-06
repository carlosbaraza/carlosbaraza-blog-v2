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

export default function NeverSplitTheDifferenceBookNotes() {
  return (
    <PostLayout post={post}>
      <h2>Negotiating tactics:</h2>

      <ul>
        <li>
          Mirror
          <ul>
            <li>
              Literally repeat what someone says with a question. Then pause and
              let the person elaborate.
            </li>
          </ul>
        </li>
        <li>
          Label
          <ul>
            <li>
              It seems like you are not happy with the current situation. Then
              pause and let the person elaborate.
            </li>
          </ul>
        </li>
        <li>
          Silence
          <ul>
            <li>Let the person elaborate.</li>
          </ul>
        </li>
        <li>
          Voice tones:
          <ul>
            <li>
              Deep CALM late night voice: use it to make direct points and
              don&apos;t hesitate. Don&apos;t leave room for the other person to
              fight the point because it is not a question.
              <ul>
                <li>I&apos;m in, he is out.</li>
              </ul>
            </li>
            <li>
              Friendly voice with a smile: default voice for everything but
              points
            </li>
            <li>Angry or aggressive voice: never use it.</li>
          </ul>
        </li>
        <li>
          Trying to get person to say &quot;that&apos;s right&quot;, not
          &quot;you are right&quot;.
          <ul>
            <li>Never argue. Calm deep voice.</li>
            <li>
              Effective pauses: silence to encourage the other party to keep
              talking.
            </li>
            <li>
              Minimal encouragements: Say &quot;aha&quot;, &quot;ok&quot;,
              &quot;yes&quot; to acknowledge that you are listening.
            </li>
            <li>Mirroring: Repeat what the other person said.</li>
            <li>
              Labelling: Name feelings.
              <ul>
                <li>It all seems so tragically unfair</li>
                <li>I can now see why you sound so angry</li>
              </ul>
            </li>
            <li>
              Paraphrase: Repeat what the person just said in your own words.
              <ul>
                <li>
                  This shows that you are really paying attention and not just
                  repeating the words.
                </li>
              </ul>
            </li>
            <li>
              Summarise:
              <ul>
                <li>Paraphrase + Labelling = Summary</li>
                <li>
                  Repeat what the other person said in your own words and label
                  the feelings and emotions.
                </li>
                <li>Really actively listen and summarise everything.</li>
                <li>
                  When someone is faced with a good summary, the only possible
                  answer is &quot;that&apos;s right&quot;.
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>

      <h2>Bend their reality:</h2>

      <ul>
        <li>Find the black swan piece of information.</li>
        <li>
          Don&apos;t compromise.
          <ul>
            <li>
              Meeting half way often leads to bad deals from both sides.
            </li>
          </ul>
        </li>
        <li>
          Create a deadline.
          <ul>
            <li>
              Approaching deadlines often force people to compromise and take
              decisions that are against their best interest.
            </li>
          </ul>
        </li>
        <li>
          The F bomb, the word &quot;Fair&quot; is an emotional word used to
          force someone into a compromise and gain concessions
          <ul>
            <li>
              When someone says &quot;that&apos;s fair&quot; to you, ask them
              &quot;Could you explain how am I mistreating you?&quot;
            </li>
          </ul>
        </li>
        <li>
          When making an offer, anchor the emotions by first mentioning an
          extreme example of how bad it will be.
          <ul>
            <li>
              Examples:
              <ul>
                <li>
                  This is going to be terrible, you are not going to like it.
                </li>
                <li>You really will not like this...</li>
                <li>I&apos;m sorry father, for I have sinned...</li>
              </ul>
            </li>
            <li>The real offer will then seem much more reasonable.</li>
          </ul>
        </li>
        <li>
          People are more afraid of losing than winning.
          <ul>
            <li>
              Make sure the counterpart know what they will lose if they take no
              action.
            </li>
          </ul>
        </li>
      </ul>

      <h2>Negotiating numbers:</h2>

      <ul>
        <li>Set extreme number to make actual offer reasonable</li>
        <li>
          Give exact numbers, not finished in 0.
          <ul>
            <li>127k-143k, instead of 110k</li>
            <li>
              Exact numbers look less flexible and make it look like you made
              some calculations
            </li>
          </ul>
        </li>
        <li>
          Give ranges, being the lower end of the range your expected rate.
          <ul>
            <li>
              They will probably choose the lower end of the range, but they will
              feel great because they saved from the higher end of the range.
            </li>
          </ul>
        </li>
        <li>
          Ask for non monetary compensations:
          <ul>
            <li>
              What does the person have that would be valuable to me but cheap to
              them?
            </li>
            <li>
              Examples:
              <ul>
                <li>1 extra week of holidays</li>
                <li>Relocation package</li>
                <li>Company car</li>
                <li>Courses</li>
                <li>Remote work</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          Define success and metrics during negotiation
          <ul>
            <li>Free for your boss.</li>
            <li>Planned salary raise when you meet the target</li>
            <li>
              &quot;What does it take to be successful here?&quot;
              <ul>
                <li>
                  He will give a detail explanation. It will spark he&apos;s
                  interest in your success. You gain an unofficial mentor.
                </li>
                <li>Your boss will have a stake on you.</li>
                <li>
                  Sell yourself and your success to your boss, as a way for them
                  to validate their own intelligence and success within the
                  company.
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </PostLayout>
  );
}
