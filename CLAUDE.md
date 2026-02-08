
# Design System

Direction: FT editorial authority + modern art gallery curation. Warm whites, serif-forward typography, generous spacing.

## Typography
- **Display (headings):** Playfair Display via `font-display` / `--font-playfair-display` — all h1–h4, post titles, section titles
- **Body (prose):** Source Serif 4 via `font-serif` / `--font-source-serif`
- **UI (nav, dates, tags):** Inter via `font-sans` / `--font-inter`
- **Nav links:** uppercase, `tracking-wider`, `text-xs`
- **Prose headings:** h2 `2.25rem`, h3 `1.75rem`, h4 `1.375rem` with negative letter-spacing
- **Prose max-width:** 720px

## Colors
- **Light:** bg `#FFFBF7` (warm broken white), text `#1C1917`, accent `#9B1B30` (deep red), border `#E8E3DC`
- **Dark:** bg `#0D0B09` (near-black warm tint), text `#F5F0EB`, accent `#E8485C` (coral), border `#2A2624`

## Logo & Favicon
- **Wordmark:** inline SVG (`Logo.tsx`) — "Carlos Baraza" with decorative flourish, `fill: currentColor` for auto light/dark
- **Icon monogram:** inline SVG (`IconLogo.tsx`) — standalone flourish, centered in navbar
- **Favicon:** "B" on peach `#FFE6D5` background, rounded corners (20% radius, 4x supersampled)
- Source assets in `assets/logo/export/`

## Navbar
- 3-column grid: wordmark left, icon center (`h-10/h-14`), nav + controls right
- Sticky, backdrop blur, thin bottom border, `h-20/h-24`

## Blog Layout
- Magazine grid: first post featured (horizontal 2-col with 16:9 hero), rest in 1/2/3-col responsive grid
- Post cards: hover image scale + title color transition, `featured` prop variant
- Container `max-w-6xl`, footer matches

## Article Pages
- Hero image: `max-w-5xl`, `aspect-[21/9]`, static import with blur placeholder (falls back to `post.images[0]` string URL)
- Title: centered, Playfair Display `text-4xl/5xl/6xl`, uppercase tracked date, centered tags
- Hero images colocated next to `page.tsx` as static imports

## Action Buttons (gallery-label style)
- Pill-shaped with `rounded-full`, thin `border-border` outline, split by `divide-x divide-border`
- Uppercase `tracking-widest` at `text-[11px]` — gallery-label aesthetic
- Stroke-only SVG icons (`fill-none stroke-current stroke-2`), `h-3 w-3`
- Icons at 40% opacity, fade to 100% on hover (`opacity-40 group-hover:opacity-100`)
- Hover: text shifts from `text-muted` to `text-text`, background lifts to `bg-surface`
- Smooth `transition-all duration-300`
- Reference implementation: `MarkdownActions.tsx` — use this pattern for any future inline action buttons

## Blog Post File Structure

Every blog post lives in `src/app/blog/(YYYY-MM-DD-slug)/slug/` and **must** have these files:

| File | Purpose |
|------|---------|
| `page.tsx` | Next.js page component — JSX content wrapped in `<PostLayout>`, exports `metadata` |
| `meta.ts` | Post metadata (`BlogPost` type): title, slug, dates, tags, draft, summary, images |
| `content.md` | Markdown equivalent of the post content with YAML frontmatter |
| `hero.png` | *(optional)* Colocated hero image for static import with blur placeholder |

### Markdown endpoint
All posts are accessible as raw markdown at `/blog/slug-name.md` via the `[slug]/route.ts` catch-all route handler. This reads `content.md` from the matching post directory and serves it with `Content-Type: text/markdown`.

### content.md format
```
---
title: "Post Title"
slug: post-slug
date_published: "ISO 8601 date"
date_updated: "ISO 8601 date"
tags: ["tag1", "tag2"]
draft: false
summary: "Short description"
images: ["/content/images/path/to/image.jpg"]
---

Markdown body content...
```

### When adding a new post
1. Create the route group directory: `src/app/blog/(YYYY-MM-DD-slug)/slug/`
2. Create `meta.ts` with `BlogPost` metadata
3. Create `page.tsx` with JSX content inside `<PostLayout post={post}>`
4. Create `content.md` with the same content as markdown + YAML frontmatter
5. *(optional)* Add `hero.png` and `import heroImage from "./hero.png"` in page.tsx
6. Register the post in `src/content/blog/index.ts`

## RSS Feed
- Route handler at `src/app/feed.xml/route.ts` generates RSS 2.0 XML from `allPosts`
- Autodiscovery via `<link rel="alternate">` in root layout metadata
- RSS icon shown alongside social icons in Footer, AuthorCard, and About page

<!-- NEXT-AGENTS-MD-START -->[Next.js Docs Index]|root: ./.next-docs|STOP. What you remember about Next.js is WRONG for this project. Always search docs and read before any task.|If docs missing, run this command first: npx @next/codemod agents-md --output CLAUDE.md|01-app:{04-glossary.mdx}|01-app/01-getting-started:{01-installation.mdx,02-project-structure.mdx,03-layouts-and-pages.mdx,04-linking-and-navigating.mdx,05-server-and-client-components.mdx,06-cache-components.mdx,07-fetching-data.mdx,08-updating-data.mdx,09-caching-and-revalidating.mdx,10-error-handling.mdx,11-css.mdx,12-images.mdx,13-fonts.mdx,14-metadata-and-og-images.mdx,15-route-handlers.mdx,16-proxy.mdx,17-deploying.mdx,18-upgrading.mdx}|01-app/02-guides:{analytics.mdx,authentication.mdx,backend-for-frontend.mdx,caching.mdx,ci-build-caching.mdx,content-security-policy.mdx,css-in-js.mdx,custom-server.mdx,data-security.mdx,debugging.mdx,draft-mode.mdx,environment-variables.mdx,forms.mdx,incremental-static-regeneration.mdx,instrumentation.mdx,internationalization.mdx,json-ld.mdx,lazy-loading.mdx,local-development.mdx,mcp.mdx,mdx.mdx,memory-usage.mdx,multi-tenant.mdx,multi-zones.mdx,open-telemetry.mdx,package-bundling.mdx,prefetching.mdx,production-checklist.mdx,progressive-web-apps.mdx,public-static-pages.mdx,redirecting.mdx,sass.mdx,scripts.mdx,self-hosting.mdx,single-page-applications.mdx,static-exports.mdx,tailwind-v3-css.mdx,third-party-libraries.mdx,videos.mdx}|01-app/02-guides/migrating:{app-router-migration.mdx,from-create-react-app.mdx,from-vite.mdx}|01-app/02-guides/testing:{cypress.mdx,jest.mdx,playwright.mdx,vitest.mdx}|01-app/02-guides/upgrading:{codemods.mdx,version-14.mdx,version-15.mdx,version-16.mdx}|01-app/03-api-reference:{07-edge.mdx,08-turbopack.mdx}|01-app/03-api-reference/01-directives:{use-cache-private.mdx,use-cache-remote.mdx,use-cache.mdx,use-client.mdx,use-server.mdx}|01-app/03-api-reference/02-components:{font.mdx,form.mdx,image.mdx,link.mdx,script.mdx}|01-app/03-api-reference/03-file-conventions/01-metadata:{app-icons.mdx,manifest.mdx,opengraph-image.mdx,robots.mdx,sitemap.mdx}|01-app/03-api-reference/03-file-conventions:{default.mdx,dynamic-routes.mdx,error.mdx,forbidden.mdx,instrumentation-client.mdx,instrumentation.mdx,intercepting-routes.mdx,layout.mdx,loading.mdx,mdx-components.mdx,not-found.mdx,page.mdx,parallel-routes.mdx,proxy.mdx,public-folder.mdx,route-groups.mdx,route-segment-config.mdx,route.mdx,src-folder.mdx,template.mdx,unauthorized.mdx}|01-app/03-api-reference/04-functions:{after.mdx,cacheLife.mdx,cacheTag.mdx,connection.mdx,cookies.mdx,draft-mode.mdx,fetch.mdx,forbidden.mdx,generate-image-metadata.mdx,generate-metadata.mdx,generate-sitemaps.mdx,generate-static-params.mdx,generate-viewport.mdx,headers.mdx,image-response.mdx,next-request.mdx,next-response.mdx,not-found.mdx,permanentRedirect.mdx,redirect.mdx,refresh.mdx,revalidatePath.mdx,revalidateTag.mdx,unauthorized.mdx,unstable_cache.mdx,unstable_noStore.mdx,unstable_rethrow.mdx,updateTag.mdx,use-link-status.mdx,use-params.mdx,use-pathname.mdx,use-report-web-vitals.mdx,use-router.mdx,use-search-params.mdx,use-selected-layout-segment.mdx,use-selected-layout-segments.mdx,userAgent.mdx}|01-app/03-api-reference/05-config/01-next-config-js:{adapterPath.mdx,allowedDevOrigins.mdx,appDir.mdx,assetPrefix.mdx,authInterrupts.mdx,basePath.mdx,browserDebugInfoInTerminal.mdx,cacheComponents.mdx,cacheHandlers.mdx,cacheLife.mdx,compress.mdx,crossOrigin.mdx,cssChunking.mdx,devIndicators.mdx,distDir.mdx,env.mdx,expireTime.mdx,exportPathMap.mdx,generateBuildId.mdx,generateEtags.mdx,headers.mdx,htmlLimitedBots.mdx,httpAgentOptions.mdx,images.mdx,incrementalCacheHandlerPath.mdx,inlineCss.mdx,isolatedDevBuild.mdx,logging.mdx,mdxRs.mdx,onDemandEntries.mdx,optimizePackageImports.mdx,output.mdx,pageExtensions.mdx,poweredByHeader.mdx,productionBrowserSourceMaps.mdx,proxyClientMaxBodySize.mdx,reactCompiler.mdx,reactMaxHeadersLength.mdx,reactStrictMode.mdx,redirects.mdx,rewrites.mdx,sassOptions.mdx,serverActions.mdx,serverComponentsHmrCache.mdx,serverExternalPackages.mdx,staleTimes.mdx,staticGeneration.mdx,taint.mdx,trailingSlash.mdx,transpilePackages.mdx,turbopack.mdx,turbopackFileSystemCache.mdx,typedRoutes.mdx,typescript.mdx,urlImports.mdx,useLightningcss.mdx,viewTransition.mdx,webVitalsAttribution.mdx,webpack.mdx}|01-app/03-api-reference/05-config:{02-typescript.mdx,03-eslint.mdx}|01-app/03-api-reference/06-cli:{create-next-app.mdx,next.mdx}|02-pages/01-getting-started:{01-installation.mdx,02-project-structure.mdx,04-images.mdx,05-fonts.mdx,06-css.mdx,11-deploying.mdx}|02-pages/02-guides:{analytics.mdx,authentication.mdx,babel.mdx,ci-build-caching.mdx,content-security-policy.mdx,css-in-js.mdx,custom-server.mdx,debugging.mdx,draft-mode.mdx,environment-variables.mdx,forms.mdx,incremental-static-regeneration.mdx,instrumentation.mdx,internationalization.mdx,lazy-loading.mdx,mdx.mdx,multi-zones.mdx,open-telemetry.mdx,package-bundling.mdx,post-css.mdx,preview-mode.mdx,production-checklist.mdx,redirecting.mdx,sass.mdx,scripts.mdx,self-hosting.mdx,static-exports.mdx,tailwind-v3-css.mdx,third-party-libraries.mdx}|02-pages/02-guides/migrating:{app-router-migration.mdx,from-create-react-app.mdx,from-vite.mdx}|02-pages/02-guides/testing:{cypress.mdx,jest.mdx,playwright.mdx,vitest.mdx}|02-pages/02-guides/upgrading:{codemods.mdx,version-10.mdx,version-11.mdx,version-12.mdx,version-13.mdx,version-14.mdx,version-9.mdx}|02-pages/03-building-your-application/01-routing:{01-pages-and-layouts.mdx,02-dynamic-routes.mdx,03-linking-and-navigating.mdx,05-custom-app.mdx,06-custom-document.mdx,07-api-routes.mdx,08-custom-error.mdx}|02-pages/03-building-your-application/02-rendering:{01-server-side-rendering.mdx,02-static-site-generation.mdx,04-automatic-static-optimization.mdx,05-client-side-rendering.mdx}|02-pages/03-building-your-application/03-data-fetching:{01-get-static-props.mdx,02-get-static-paths.mdx,03-forms-and-mutations.mdx,03-get-server-side-props.mdx,05-client-side.mdx}|02-pages/03-building-your-application/06-configuring:{12-error-handling.mdx}|02-pages/04-api-reference:{06-edge.mdx,08-turbopack.mdx}|02-pages/04-api-reference/01-components:{font.mdx,form.mdx,head.mdx,image-legacy.mdx,image.mdx,link.mdx,script.mdx}|02-pages/04-api-reference/02-file-conventions:{instrumentation.mdx,proxy.mdx,public-folder.mdx,src-folder.mdx}|02-pages/04-api-reference/03-functions:{get-initial-props.mdx,get-server-side-props.mdx,get-static-paths.mdx,get-static-props.mdx,next-request.mdx,next-response.mdx,use-params.mdx,use-report-web-vitals.mdx,use-router.mdx,use-search-params.mdx,userAgent.mdx}|02-pages/04-api-reference/04-config/01-next-config-js:{adapterPath.mdx,allowedDevOrigins.mdx,assetPrefix.mdx,basePath.mdx,bundlePagesRouterDependencies.mdx,compress.mdx,crossOrigin.mdx,devIndicators.mdx,distDir.mdx,env.mdx,exportPathMap.mdx,generateBuildId.mdx,generateEtags.mdx,headers.mdx,httpAgentOptions.mdx,images.mdx,isolatedDevBuild.mdx,onDemandEntries.mdx,optimizePackageImports.mdx,output.mdx,pageExtensions.mdx,poweredByHeader.mdx,productionBrowserSourceMaps.mdx,proxyClientMaxBodySize.mdx,reactStrictMode.mdx,redirects.mdx,rewrites.mdx,serverExternalPackages.mdx,trailingSlash.mdx,transpilePackages.mdx,turbopack.mdx,typescript.mdx,urlImports.mdx,useLightningcss.mdx,webVitalsAttribution.mdx,webpack.mdx}|02-pages/04-api-reference/04-config:{01-typescript.mdx,02-eslint.mdx}|02-pages/04-api-reference/05-cli:{create-next-app.mdx,next.mdx}|03-architecture:{accessibility.mdx,fast-refresh.mdx,nextjs-compiler.mdx,supported-browsers.mdx}|04-community:{01-contribution-guide.mdx,02-rspack.mdx}<!-- NEXT-AGENTS-MD-END -->
