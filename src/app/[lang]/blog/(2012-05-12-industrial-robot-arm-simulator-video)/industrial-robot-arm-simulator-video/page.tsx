import type { Metadata } from "next";
import { PostLayout } from "@/components/blog/PostLayout";
import { MdxContent } from "@/components/blog/MdxContent";
import { getPostContent } from "@/lib/mdx";
import { isValidLocale } from "@/lib/i18n";
import { post } from "./meta";

interface PageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const { lang: langParam } = await props.params;
  const lang = isValidLocale(langParam) ? langParam : ("en" as const);
  const tr = post.translations?.[lang];
  const title = tr?.title ?? post.title;
  const description = tr?.summary ?? post.summary;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: post.datePublished,
      modifiedTime: post.dateUpdated,
      images: post.images,
    },
  };
}

export default async function PostPage(props: PageProps) {
  const { lang: lp } = await props.params;
  const lang = isValidLocale(lp) ? lp : ("en" as const);
  const content = await getPostContent(post.slug, lang);

  return (
    <PostLayout post={post} lang={lang}>
      {content ? (
        <MdxContent source={content} />
      ) : (
        <p>Content not available.</p>
      )}
    </PostLayout>
  );
}
