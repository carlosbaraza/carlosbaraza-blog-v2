import Image from "next/image";
import { author } from "@/content/author";
import { SocialIcons } from "@/components/shared/SocialIcons";
import { Logo } from "@/components/shared/Logo";
import heroImage from "@/../public/images/placeholder.png";

export function HeroSection() {
  return (
    <section>
      <div className="max-w-5xl mx-auto">
        <div className="aspect-[21/9] overflow-hidden rounded-[50px] md:rounded-[100px]">
          <Image
            src={heroImage}
            alt={author.name}
            placeholder="blur"
            className="w-full h-full object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1024px"
            priority
          />
        </div>
      </div>

      <div className="flex justify-center -mt-16 sm:-mt-20 mb-8 relative z-10">
        <div className="h-32 w-32 sm:h-40 sm:w-40 rounded-full overflow-hidden border-4 border-bg shadow-xl">
          <Image
            src={author.avatar}
            alt={author.name}
            width={160}
            height={160}
            className="w-full h-full object-cover filter-[grayscale(1)_sepia(.2)_saturate(2)_hue-rotate(-30deg)]"
            priority
          />
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center mb-16">
        <Logo className="h-10 sm:h-14 mx-auto mb-4" />
        <p className="font-serif text-lg sm:text-xl text-text-secondary leading-relaxed max-w-2xl mx-auto mb-6">
          Writing about agentic coding workflows, AI strategy, and building
          products. CTO, engineer, and occasional woodworker.
        </p>
        <SocialIcons
          github={author.github}
          twitter={author.twitter}
          youtube={author.youtube}
          linkedin={author.linkedin}
          email={author.email}
          rss="/feed.xml"
          className="justify-center"
        />
      </div>
    </section>
  );
}
