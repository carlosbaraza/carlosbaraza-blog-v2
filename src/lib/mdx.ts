import { readFile, readdir } from "fs/promises";
import { join } from "path";
import type { Locale } from "./i18n";

const blogDir = join(process.cwd(), "src/app/[lang]/blog");

async function findPostDir(slug: string): Promise<string | null> {
  const entries = await readdir(blogDir);
  const folder = entries.find(
    (entry) => entry.startsWith("(") && entry.endsWith(`-${slug})`)
  );
  if (!folder) return null;
  return join(blogDir, folder, slug);
}

export async function getPostContent(
  slug: string,
  lang: Locale
): Promise<string | null> {
  const postDir = await findPostDir(slug);
  if (!postDir) return null;

  // Try locale-specific MDX first, then fall back to English MDX, then content.md
  const candidates = [
    join(postDir, `content.${lang}.mdx`),
    ...(lang !== "en" ? [join(postDir, "content.en.mdx")] : []),
    join(postDir, "content.md"),
  ];

  for (const candidate of candidates) {
    try {
      const content = await readFile(candidate, "utf-8");
      // Strip YAML frontmatter
      const stripped = content.replace(/^---[\s\S]*?---\n*/, "");
      return stripped;
    } catch {
      // Try next candidate
    }
  }

  return null;
}
