import { HeroSection } from "@/components/home/HeroSection";
import { LatestPosts } from "@/components/home/LatestPosts";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <LatestPosts />
      <FeaturedProjects />
    </>
  );
}
