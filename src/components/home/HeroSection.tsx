import { siteConfig } from "@/content/site-config";

export function HeroSection() {
  return (
    <section className="py-12 sm:py-16">
      <h1 className="font-serif text-4xl sm:text-5xl font-bold leading-tight tracking-tight text-text">
        {siteConfig.title}
      </h1>
      <p className="mt-4 font-serif text-lg text-text-secondary leading-relaxed max-w-xl">
        {siteConfig.description}
      </p>
    </section>
  );
}
