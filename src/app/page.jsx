import HeroSection from "@/components/home/HeroSection";
import CollectionsSection from "@/components/home/CollectionsSection";
import BrideStorySection from "@/components/home/BrideStorySection";
import FeaturedSection from "@/components/home/FeaturedSection";
import EditorialBanner from "@/components/home/EditorialBanner";
import ShowroomSection from "@/components/home/ShowroomSection";

export default function HomePage() {
  return (
    <div style={{ backgroundColor: "var(--cream)" }}>
      {/* 1. Cinematic Hero matching reference */}
      <HeroSection />

      {/* 2. Our Collections with 5 Category Cards & circular maroon button */}
      <CollectionsSection />

      {/* 3. "Every Bride Has a Story" editorial section */}
      <BrideStorySection />

      {/* 4. Featured Lehengas selection */}
      <FeaturedSection />

      {/* 5. Editorial banner with bride looking down in blush veil */}
      <EditorialBanner />

      {/* 6. "Visit Our Showroom" section */}
      <ShowroomSection />

      {/* Responsive layout styles */}
      
    </div>
  );
}
