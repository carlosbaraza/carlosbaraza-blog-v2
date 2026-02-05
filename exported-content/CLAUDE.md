# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with the exported content in this directory.

## What This Is

This directory contains all content and assets extracted from the carlosbaraza.com blog (a Next.js 12 + Tailwind CSS project), decoupled from the framework. Everything needed to rebuild the site in a different framework is here.

## Directory Structure

```
exported-content/
  CLAUDE.md              # This file
  url-index.md           # Complete URL map of every page with source files
  site-config.json       # Site metadata, social links, navigation, analytics config
  siteMetadata.js        # Original Next.js site config (JS module)
  projectsData.ts        # Original projects data (TypeScript)
  headerNavLinks.ts      # Original navigation links (TypeScript)
  logo.svg               # Site logo SVG
  references-data.bib    # Bibliography/citations data

  blog/                  # All 48 blog posts (MDX format)
  authors/               # Author profiles (MDX format)
  pages/                 # Markdown descriptions of each static page
  assets/
    static/              # Site-wide assets (favicons, logos, images)
    content/             # Blog post images and project screenshots
```

## File Descriptions

### `url-index.md`
Master reference listing every URL on the site mapped to its source file. Includes static pages (5), published blog posts (44), and draft posts (4). Use this to set up routing in the new project.

### `site-config.json`
Framework-agnostic JSON version of the site configuration. Contains: title, author, description, social links, analytics IDs, newsletter provider, comment system, navigation links, and redirects.

### `blog/` (48 MDX files)
Blog posts in MDX (Markdown + JSX) format. Each file has YAML frontmatter with these fields:
- `title` (required) - Post title
- `date_published` (required) - ISO date string. **Note: the field is `date_published`, not `date`**
- `tags` (required) - Array of tag strings
- `slug` - URL slug; if absent, derived from filename by stripping the date prefix
- `draft` - Boolean; 4 posts are drafts (dated 1970-01-01)
- `summary` - Short description (nullable)
- `authors` - Array referencing files in `authors/` (defaults to `["default"]`)
- `layout` - Layout template name (defaults to `PostLayout`)
- `images`, `canonicalUrl`, `date_updated` - Optional

Blog post URLs are at the **root level**: `/{slug}` (e.g., `carlosbaraza.com/stoic-journal`), NOT under `/blog/`.

File naming convention: `YYYY-MM-DD-slug-text.mdx`

### `authors/default.mdx`
The primary (and only) author profile. Contains Carlos Baraza's bio and full resume including work experience, skills, education, and languages. Frontmatter has: `name`, `avatar`, `occupation`, `company`, `companyUrl`, `email`, `github`, `twitter`, `youtube`, `linkedin`, `bio`.

### `pages/` (5 markdown files)
Descriptions of each static page with their URL, what they displayed, and what data they consumed:

- **`homepage.md`** (`/`) - Landing page with hero banner (background: `banner.jpeg`), author card with avatar and social links, latest 5 blog posts, and featured projects grid.
- **`about.md`** (`/about`) - Renders `authors/default.mdx` through the AuthorLayout template. Shows full resume.
- **`projects.md`** (`/projects`) - Project showcase. Full list of 12 projects with descriptions, URLs, and image paths. 4 projects are marked `featured`.
- **`blog-listing.md`** (`/blog`) - Paginated listing of all published posts sorted newest first.
- **`tags.md`** (`/tags`) - Lists all unique tags with post counts. Individual tag pages at `/tags/{tag}`.

### `assets/static/` (~96 files)
Site-wide static assets from `public/static/`:
- `favicons/` - Full favicon set (ico, png, svg, webmanifest)
- `images/` - Core images (avatar, banner, social card, logo)
- `images/logo/` - Logo in 12 sizes (8w to 4096w) x 6 variants (brain, brain-outline, brain-outline-white, logo, logo-outline, logo-white) + SVG + AI source
- `images/canada/` - Sample images

### `assets/content/` (~124 files)
Blog post images and project screenshots from `public/content/`:
- `images/` - Root-level project screenshots (inpractise, dashvar, focuskeep)
- `images/2020/07/` - Bulk of images: project photos, logos, screenshots
- `images/2020/10/` - Finance article images
- `images/2020/12/` - Book cover images, COVID letters
- `images/2021/05/` - Company logos, avatars, book covers
- `images/2021/06/` - Photo
- `images/2021/08/` - Database diagrams
- `images/2021/12/` - Ideation article images
- `images/downloaded_images/` - Images organized by post (WebAssembly guide, OSX Split View, Quadruino, ShareLaTeX, PaaS article, Windows dev article, web stack article)

## Image Path Mapping

In the original project, images were served from two public directories:
- `/static/...` -> `assets/static/...`
- `/content/...` -> `assets/content/...`

When importing into a new project, update image references in MDX files accordingly.

## MDX Processing Notes

The original project used `mdx-bundler` (esbuild-based) with these remark/rehype plugins:
- **remark-gfm** - GitHub Flavored Markdown (tables, strikethrough, etc.)
- **remark-math** + **rehype-katex** - LaTeX math rendering
- **rehype-prism-plus** - Syntax highlighting with line numbers
- **remark-footnotes** - Inline footnotes
- **rehype-citation** - Bibliography citations (uses `references-data.bib`)
- **rehype-autolink-headings** + **rehype-slug** - Anchor links on headings

MDX files may use JSX components: `Image`, `TOCInline`, `BlogNewsletterForm`, and custom `a`/`pre` elements.

## Theme & Styling Notes

- Dark mode support via `class` strategy (Tailwind `darkMode: "class"`)
- Primary color: `slate` palette
- Gray color: `neutral` palette
- Font: Inter (self-hosted via Fontsource)
- Preact replaces React in production builds
