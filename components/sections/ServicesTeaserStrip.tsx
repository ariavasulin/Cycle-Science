import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Bike, Footprints } from "lucide-react";

export function ServicesTeaserStrip() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Personalized solutions for optimal cycling performance and comfort
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          {/* Bike Fitting Services */}
          <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Bike className="h-10 w-10 text-primary" />
              </div>
              <CardTitle className="text-2xl md:text-3xl">Bike Fitting Services</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="text-base mb-6 leading-relaxed">
                Comprehensive bike fitting solutions tailored to your body, riding style, and goals.
                From performance optimization to injury prevention, we ensure every aspect of your
                bike setup is perfect.
              </CardDescription>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                <li>• The Comprehensive Fit</li>
                <li>• Performance Package</li>
                <li>• Road/MTB Conversion</li>
                <li>• Saddle Fitting</li>
              </ul>
              <Button asChild className="w-full">
                <Link href="/services">View All Fitting Services</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Custom Insoles */}
          <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-secondary">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                <Footprints className="h-10 w-10 text-secondary" />
              </div>
              <CardTitle className="text-2xl md:text-3xl">Custom Insoles</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="text-base mb-6 leading-relaxed">
                SIDAS custom insoles provide the perfect foundation for power transfer and comfort.
                Heat-molded to your unique foot shape, these insoles enhance performance and reduce
                fatigue on every ride.
              </CardDescription>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                <li>• Heat-molded custom fit</li>
                <li>• Enhanced power transfer</li>
                <li>• Reduced foot fatigue</li>
                <li>• Improved comfort</li>
              </ul>
              <Button asChild className="w-full" variant="secondary">
                <Link href="/services">Learn About SIDAS Insoles</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
