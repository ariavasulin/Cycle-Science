import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MissionStatement } from "@/components/sections/MissionStatement";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { NewsletterSignup } from "@/components/sections/NewsletterSignup";

export const metadata = {
  title: "Services - Cycle Science",
  description: "Explore our comprehensive bike fitting services and custom SIDAS insole solutions. Expert analysis and personalized recommendations for every cyclist.",
};

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <MissionStatement />
        <ServicesGrid />
        <NewsletterSignup />
      </main>
      <Footer />
    </div>
  );
}
