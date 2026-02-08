import { siteConfig } from "@/content/site-config";
import { author } from "@/content/author";
import { SocialIcons } from "@/components/shared/SocialIcons";

export function Footer() {
  return (
    <footer className="border-t border-border mt-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col items-center gap-4">
          <SocialIcons
            github={siteConfig.social.github}
            twitter={siteConfig.social.twitter}
            youtube={siteConfig.social.youtube}
            linkedin={siteConfig.social.linkedin}
            email={author.email}
            rss="/feed.xml"
          />
          <p className="font-sans text-sm text-muted">
            &copy; {new Date().getFullYear()} {siteConfig.author}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
