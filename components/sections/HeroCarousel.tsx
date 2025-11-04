"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const heroImages = [
  {
    url: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=1600&h=900&fit=crop",
    alt: "Cyclist in action on mountain trail",
  },
  {
    url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&h=900&fit=crop",
    alt: "Professional bike fitting studio",
  },
  {
    url: "https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=1600&h=900&fit=crop",
    alt: "Cyclist riding road bike",
  },
  {
    url: "https://images.unsplash.com/photo-1475666675596-cca2035b3d79?w=1600&h=900&fit=crop",
    alt: "Mountain biking adventure",
  },
];

export function HeroCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <div className="relative w-full">
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {heroImages.map((image, index) => (
            <CarouselItem key={index}>
              <div className="relative h-[50vh] md:h-[70vh] lg:h-[85vh] w-full">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${image.url})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
                <div className="relative z-10 flex h-full items-center justify-center">
                  <div className="text-center text-white">
                    <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
                      Cycle Science
                    </h1>
                    <p className="mt-4 text-xl sm:text-2xl md:text-3xl font-light">
                      Expert Bike Fitting & Custom Insoles
                    </p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 hidden md:flex" />
        <CarouselNext className="right-4 hidden md:flex" />
      </Carousel>
    </div>
  );
}
