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

export default function OptionalParametersDefaultParametersRubyPage() {
  return (
    <PostLayout post={post}>
      <p>
        Do you fully understand what will happen if I define a method like this?
      </p>

      <p>
        <strong>Note:</strong> This method definition will fail in{" "}
        <em>Ruby 1.8.7</em> or lower, as it is not allowed to list optional
        parameters in the middle of the list (The last parameter &quot;e&quot;
        should be moved somewhere before the optional parameter &quot;*p&quot;
        and the default-valued parameters).
      </p>

      <p>If then we call the method in irb:</p>

      <pre>
        <code>{`# Can not call with less parameters than the number of mandatory parameters
irb(main):009:0> my_method(1,2)
ArgumentError: wrong number of arguments (2 for 3+)
  from (irb):1:in \`my_method'
  from (irb):9
  from /usr/bin/irb:12:in \`<main>'

# First mandatory parameters are assigned
irb(main):010:0> my_method(1,2,3)
a: 1, b: 2, c: 15, d: 35, p: [], e: 3

# Then the first default-valued parameter gets a value.
irb(main):011:0> my_method(1,2,3,4)
a: 1, b: 2, c: 3, d: 35, p: [], e: 4

# Then both default-valued parameters get a value.
irb(main):012:0> my_method(1,2,3,4,5)
a: 1, b: 2, c: 3, d: 4, p: [], e: 5

# Finally the optional parameter get values within an Array object. irb(main):013:0> my_method(1,2,3,4,5,6)
a: 1, b: 2, c: 3, d: 4, p: [5], e: 6

irb(main):014:0> my_method(1,2,3,4,5,6,7)
a: 1, b: 2, c: 3, d: 4, p: [5, 6], e: 7`}</code>
      </pre>

      <p>
        So, to sum up, the order in which ruby assign the parameter is:
      </p>

      <ol>
        <li>
          Mandatory parameters. In our case &apos;a&apos;, &apos;b&apos; and
          &apos;e&apos;
        </li>
        <li>
          Parameters with default value, but keeping the order in the method
          definition. If the last parameter defined is mandatory, the last
          parameter given to the method call will be the last mandatory parameter
          value, not the first parameter with default value.
        </li>
        <li>
          Finally, if all the parameters (mandatory and with default value) have
          a value, all the next given values will be included in the Array of the
          optional parameter (&apos;p&apos; in our case).
        </li>
      </ol>

      <p>
        Just as a final note, there are two things that will cause a syntax
        error:
      </p>

      <ul>
        <li>More than one optional parameters in a method definition.</li>
        <li>
          Default value parameter listed after the optional parameter.
        </li>
      </ul>

      <p>
        <em>Cheers and happy rubying!</em>
      </p>
    </PostLayout>
  );
}
