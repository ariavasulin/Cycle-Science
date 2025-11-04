import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SquareBookingEmbed } from "@/components/sections/SquareBookingEmbed";
import { LocationPanel } from "@/components/sections/LocationPanel";

export const metadata = {
  title: "Book Appointment - Cycle Science",
  description: "Schedule your bike fitting or custom insole appointment. Choose from our range of services and book a time that works for you.",
};

export default function BookPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <SquareBookingEmbed />
        <LocationPanel />
      </main>
      <Footer />
    </div>
  );
}
