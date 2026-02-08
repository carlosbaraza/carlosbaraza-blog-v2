import { readFile, readdir } from "fs/promises";
import { join } from "path";
import { allPosts } from "@/content/blog";
import { isValidLocale } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";

const blogDir = join(process.cwd(), "src/app/[lang]/blog");

async function findContentPath(slug: string, lang: Locale): Promise<string | null> {
  const entries = await readdir(blogDir);
  const folder = entries.find(
    (entry) => entry.startsWith("(") && entry.endsWith(`-${slug})`)
  );
  if (!folder) return null;

  const postDir = join(blogDir, folder, slug);

  // Try locale-specific MDX first, then English MDX, then content.md
  const candidates = [
    join(postDir, `content.${lang}.mdx`),
    ...(lang !== "en" ? [join(postDir, "content.en.mdx")] : []),
    join(postDir, "content.md"),
  ];

  for (const candidate of candidates) {
    try {
      await readFile(candidate, "utf-8");
      return candidate;
    } catch {
      // Try next
    }
  }

  return null;
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string; lang: string }> }
) {
  const { slug, lang: langParam } = await params;
  const lang: Locale = isValidLocale(langParam) ? langParam : "en";

  if (!slug.endsWith(".md")) {
    return new Response("Not Found", { status: 404 });
  }

  const realSlug = slug.slice(0, -3);
  const contentPath = await findContentPath(realSlug, lang);

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
