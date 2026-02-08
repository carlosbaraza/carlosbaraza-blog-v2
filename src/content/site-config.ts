import type { SiteConfig } from "@/lib/types";

export const siteConfig: SiteConfig = {
  title: "Carlos Baraza",
  author: "Carlos Baraza",
  description:
    "Writing about agentic coding workflows, AI strategy, and building products.",
  siteUrl: "https://carlosbaraza.com",
  socialBanner: "/static/images/twitter-card.jpg",
  social: {
    github: "https://github.com/carlosbaraza",
    twitter: "https://x.com/carlosbaraza",
    youtube: "https://youtube.com/carlosbaraza",
    linkedin: "https://www.linkedin.com/in/carlos-baraza",
  },
  navigation: [
    { href: "/blog", title: "Blog" },
    { href: "/projects", title: "Projects" },
    { href: "/about", title: "About me" },
  ],
};
