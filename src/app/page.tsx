import { HeroSection } from "@/components/home/HeroSection";
import { AuthorCard } from "@/components/home/AuthorCard";
import { LatestPosts } from "@/components/home/LatestPosts";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AuthorCard />
      <LatestPosts />
      <FeaturedProjects />
    </>
  );
}
