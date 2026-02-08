import { readFile, readdir } from "fs/promises";
import { join } from "path";
import { allPosts } from "@/content/blog";

const blogDir = join(process.cwd(), "src/app/blog");

async function findContentPath(slug: string): Promise<string | null> {
  const entries = await readdir(blogDir);
  const folder = entries.find(
    (entry) => entry.startsWith("(") && entry.endsWith(`-${slug})`)
  );
  if (!folder) return null;
  return join(blogDir, folder, slug, "content.md");
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  if (!slug.endsWith(".md")) {
    return new Response("Not Found", { status: 404 });
  }

  const realSlug = slug.slice(0, -3);
  const contentPath = await findContentPath(realSlug);

  if (!contentPath) {
    return new Response("Not Found", { status: 404 });
  }

  try {
    const content = await readFile(contentPath, "utf-8");
    return new Response(content, {
      headers: {
        "Content-Type": "text/markdown; charset=utf-8",
      },
    });
  } catch {
    return new Response("Not Found", { status: 404 });
  }
}

export function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: `${post.slug}.md`,
  }));
}
