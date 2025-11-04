import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroCarousel } from "@/components/sections/HeroCarousel";
import { FeetMatterCTA } from "@/components/sections/FeetMatterCTA";
import { ServicesTeaserStrip } from "@/components/sections/ServicesTeaserStrip";
import { NewsletterSignup } from "@/components/sections/NewsletterSignup";
import { LocationPanel } from "@/components/sections/LocationPanel";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroCarousel />
        <FeetMatterCTA />
        <ServicesTeaserStrip />
        <NewsletterSignup />
        <LocationPanel />
      </main>
      <Footer />
    </div>
  );
}
