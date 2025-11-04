import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Clock, DollarSign } from "lucide-react";

const services = [
  {
    title: "The Comprehensive",
    description: "Our most thorough bike fitting service. Complete biomechanical assessment, detailed adjustments, and follow-up support to ensure optimal performance and comfort.",
    duration: "2.5-3 hours",
    priceRange: "$350",
    features: ["Full biomechanical analysis", "Video gait analysis", "Comprehensive adjustments", "Follow-up consultation"],
  },
  {
    title: "3 Bike Comprehensive",
    description: "Perfect for multi-discipline cyclists. Get all three of your bikes professionally fitted in one extended session.",
    duration: "4-5 hours",
    priceRange: "$600",
    features: ["Three bike fittings", "Cross-discipline optimization", "Position transfer", "Detailed documentation"],
  },
  {
    title: "Performance Package",
    description: "Designed for competitive cyclists seeking every advantage. Includes advanced aerodynamic positioning and power optimization.",
    duration: "3 hours",
    priceRange: "$400",
    features: ["Aero position optimization", "Power meter analysis", "Wind tunnel data integration", "Racing position refinement"],
  },
  {
    title: "Road/MTB Conversion",
    description: "Switching disciplines? We'll help you transition your fit from road to mountain bike or vice versa while maintaining optimal biomechanics.",
    duration: "1.5 hours",
    priceRange: "$200",
    features: ["Discipline-specific adjustments", "Position translation", "Terrain considerations", "Equipment recommendations"],
  },
  {
    title: "Consultation",
    description: "Expert advice on bike setup, equipment selection, or injury prevention. Perfect for quick assessments and recommendations.",
    duration: "30-60 minutes",
    priceRange: "$60-$120",
    features: ["Expert assessment", "Equipment advice", "Setup recommendations", "Injury prevention tips"],
  },
  {
    title: "Pre-Purchase Fitting",
    description: "Planning to buy a new bike? We'll help you determine the perfect size and geometry before you invest.",
    duration: "1 hour",
    priceRange: "$150",
    features: ["Body measurements", "Geometry recommendations", "Size determination", "Brand/model suggestions"],
  },
  {
    title: "Strict Fit",
    description: "Focused fitting session targeting specific issues or adjustments. Ideal for minor tweaks and problem-solving.",
    duration: "1 hour",
    priceRange: "$120",
    features: ["Targeted adjustments", "Problem diagnosis", "Quick solutions", "Setup validation"],
  },
  {
    title: "Follow Up Service",
    description: "Post-fitting check-in to fine-tune your position after you've had time to adapt. Included free within 30 days of comprehensive fit.",
    duration: "30-45 minutes",
    priceRange: "$60",
    features: ["Position refinement", "Comfort assessment", "Minor adjustments", "Progress check"],
  },
  {
    title: "Saddle Fitting",
    description: "Specialized saddle selection and positioning service using pressure mapping technology to ensure optimal comfort and performance.",
    duration: "1 hour",
    priceRange: "$100",
    features: ["Pressure mapping", "Saddle selection", "Optimal positioning", "Comfort optimization"],
  },
  {
    title: "SIDAS Insole Fitting",
    description: "Custom heat-molded SIDAS insoles for superior foot support, power transfer, and all-day comfort.",
    duration: "45 minutes",
    priceRange: "$150-$200",
    features: ["Heat molding process", "Custom arch support", "Enhanced power transfer", "Reduced foot fatigue"],
  },
];

export function ServicesGrid() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the service that best fits your needs. All fittings include expert analysis
            and personalized recommendations.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary flex flex-col"
            >
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-base mt-2">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="mr-2 h-4 w-4 text-primary" />
                    <span>{service.duration}</span>
                  </div>
                  <div className="flex items-center text-sm font-semibold text-foreground">
                    <DollarSign className="mr-2 h-4 w-4 text-primary" />
                    <span>{service.priceRange}</span>
                  </div>
                </div>

                <ul className="space-y-2 mb-6 flex-1">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-start">
                      <span className="mr-2 text-primary">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button asChild className="w-full mt-auto">
                  <Link href="/book">Book Now</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
