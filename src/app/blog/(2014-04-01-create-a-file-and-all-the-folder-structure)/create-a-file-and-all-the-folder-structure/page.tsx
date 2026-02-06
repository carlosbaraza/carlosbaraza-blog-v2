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

export default function CreateFileAndFolderStructurePage() {
  return (
    <PostLayout post={post}>
      <p>
        Today I had to deal with a small problem in Rails 2.3.18. It was how to
        receive on an API a XML file via JSON with the content of the file in
        Base64. In order to complete the task, I had to create the file, decode
        the content, write it in the file and move the file to another folder.
      </p>

      <p>
        To create the file in{" "}
        <code>{`"{{RAILSROOT}}/tmp/aaa/"`}</code>, first we have to
        create the folder structure:
      </p>

      <pre>
        <code className="language-ruby">{`file_dir = Rails.root.join(['tmp', 'aifmd', 'received_files'])
FileUtils.mkdir_p(file_dir)`}</code>
      </pre>

      <p>
        <code>mkdir_p</code> will create all the folder structure if the folders
        do not exists yet.
      </p>

      <p>
        Then, to create the file, we give it a name. In my case, just the
        current time in iso8601 format. We need to get rid of the colons (:), as
        they are not allowed as a character for a file name.
      </p>

      <pre>
        <code className="language-ruby">{`# The parameter to iso8601 give you the number of decimals. To reduce possible collisions, I gave it 2 decimals.
file_name = "#\{Time.now.iso8601(2).gsub(':','')}.xml"
# Open a new file with writing rights
file_path = [file_dir, file_name].join('/')
tmp_file = File.open(file_path, 'w+')
# Write on the file the decoded content of the xml.
decoded_file_content = Base64.decode64(params[:file_content])
tmp_file.write(decoded_file_content)`}</code>
      </pre>

      <ul>
        <li>
          <a
            href="http://ruby-doc.org/stdlib-1.8.7/libdoc/base64/rdoc/Base64.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation of Base64 (Ruby 1.8.7)
          </a>
        </li>
        <li>
          <a
            href="http://ruby-doc.org/core-1.8.7/File.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation of File (Ruby 1.8.7)
          </a>
        </li>
      </ul>
    </PostLayout>
  );
}
