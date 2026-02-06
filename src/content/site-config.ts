import type { SiteConfig } from "@/lib/types";

export const siteConfig: SiteConfig = {
  title: "Build, Launch, Repeat",
  author: "Carlos Baraza",
  description:
    "Side hustle newsletter. Humble insights of a lifetime building online products. I write software and other philosophical stuff.",
  siteUrl: "https://carlosbaraza.com",
  socialBanner: "/static/images/twitter-card.jpg",
  social: {
    github: "https://github.com/carlosbaraza",
    twitter: "https://twitter.com/carlosbaraza",
    youtube: "https://youtube.com/carlosbaraza",
    linkedin: "https://www.linkedin.com/in/carlos-baraza",
  },
  navigation: [
    { href: "/blog", title: "Blog" },
    { href: "/projects", title: "Projects" },
    { href: "/about", title: "About me" },
  ],
};
