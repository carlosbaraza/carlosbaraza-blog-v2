import { allPosts } from "@/content/blog";
import { PostCard } from "@/components/blog/PostCard";
import { Pagination } from "@/components/blog/Pagination";

const POSTS_PER_PAGE = 10;

export const metadata = {
  title: "Blog",
  description: "All blog posts by Carlos Baraza.",
};

export default async function BlogPage(props: {
  searchParams: Promise<{ page?: string }>;
}) {
  const searchParams = await props.searchParams;
  const page = Math.max(1, Number(searchParams.page) || 1);
  const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);
  const currentPage = Math.min(page, totalPages);
  const start = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = allPosts.slice(start, start + POSTS_PER_PAGE);

  return (
    <>
      <h1 className="font-sans uppercase font-thin tracking-[10px] text-xl text-center mb-12">
        Every Post
      </h1>

      <div className="flex flex-col gap-16">
        {paginatedPosts.map((post) => (
          <PostCard key={post.slug} post={post} featured />
        ))}
      </div>

      {totalPages > 1 ? (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          basePath="/blog"
        />
      ) : null}
    </>
  );
}
