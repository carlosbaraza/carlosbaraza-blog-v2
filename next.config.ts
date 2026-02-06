import type { NextConfig } from "next";

// All published blog post slugs that need redirects from old root-level URLs
// Format: [oldSlug, newSlug] for changed slugs, or just string for unchanged
const publishedSlugs = [
  "industrial-robot-arm-simulator-video",
  "airfishbowl",
  "puts--hello--world--",
  "kneip",
  "request-object-in-rails-2-3-18",
  "create-a-file-and-all-the-folder-structure",
  "quadruino-is-back",
  "optional-parameters-and-default-parameters----ruby-1-9--",
  "sharelatex",
  "quadruino-video",
  "deep-hash-transformation-using-lambdas",
  "how-my-colleague-almost-lost-root-access-in-his-own-machine",
  "osx-el-capitan-s-split-view-is-awesome",
  "angelsinthehouse-com",
  "hirespace-com",
  "homeaway-expedia",
  "superintelligence-ruminations",
  "designed-the-official-logo-for-webassembly",
  "unicorn-contributor",
  "dazn",
  "is-it-a-good-time-for-developers-to-migrate-from-osx-to-windows-",
  "webassembly-london-meetup",
  "deepfakes-will-challenge-democracy",
  "wisertag",
  "is-windows-an-option-for-developers-in-2019-",
  "aws4curl",
  "hopefully-simple-webassembly-starting-guide",
  "redirector",
  "upwork--the-worst-platform-for-software-engineers-",
  "stoic-journal",
  "software-automation",
  "should-i-buy-the-dip",
  "covid-19-anonymous-letters-to-patients",
  "loonshots-book-notes",
  "webpack-bundle-analysis-resources",
  "typescript-string-to-number",
  "building-a-story-brand",
  "cause-and-effect-fallacies",
  "never-split-the-difference-book-notes",
  "database-design-course",
  "ideation-finding-a-good-business-idea",
  // Slugs that were cleaned up during migration (old slug → new slug)
  "match-two-possible-strings-regexp",
  "digital-nomads-first-world-citizens",
  "meteor-up-let-s-encrypt-tls",
];

// Slugs that changed during migration - old URLs need to redirect to new slugs
const changedSlugs: [string, string][] = [
  ["match-two-possible-strings--regexp-", "match-two-possible-strings-regexp"],
  ["digital-nomads--first-world-citizens-", "digital-nomads-first-world-citizens"],
  ["meteor-up---let-s-encrypt-tls", "meteor-up-let-s-encrypt-tls"],
];

const nextConfig: NextConfig = {
  output: "standalone",
  async redirects() {
    // Standard redirects: /{slug} -> /blog/{slug}
    const blogRedirects = publishedSlugs.map((slug) => ({
      source: `/${slug}`,
      destination: `/blog/${slug}`,
      permanent: true,
    }));

    // Extra redirects for old slugs that changed during migration
    const changedSlugRedirects = changedSlugs.map(([oldSlug, newSlug]) => ({
      source: `/${oldSlug}`,
      destination: `/blog/${newSlug}`,
      permanent: true,
    }));

    return [
      ...blogRedirects,
      ...changedSlugRedirects,
      {
        source: "/resume",
        destination: "/about",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
