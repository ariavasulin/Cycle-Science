import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Footprints } from "lucide-react";

export function FeetMatterCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-secondary py-20 md:py-32">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptLTEwIDBjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-white">
            <div className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 mb-6">
              <Footprints className="mr-2 h-5 w-5" />
              <span className="text-sm font-semibold">SIDAS Partnership</span>
            </div>

            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
              Feet Matter
            </h2>

            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Your foundation for power, comfort, and performance. Experience the difference custom SIDAS insoles make in every pedal stroke.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="text-lg"
              >
                <Link href="/services">Learn More</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-lg bg-transparent text-white border-white hover:bg-white hover:text-primary"
              >
                <Link href="/book">Book Fitting</Link>
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="aspect-square overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm">
              <div
                className="h-full w-full bg-cover bg-center"
                style={{
                  backgroundImage: `url(https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&h=800&fit=crop)`,
                }}
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-accent/30 blur-3xl" />
            <div className="absolute -top-6 -left-6 h-32 w-32 rounded-full bg-secondary/30 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
