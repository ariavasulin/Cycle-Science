import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Clock } from "lucide-react";

export function LocationPanel() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
              Visit Our Studio
            </h2>
            <p className="text-lg text-muted-foreground">
              Located in the heart of Burlingame, CA
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Map */}
            <div className="overflow-hidden rounded-lg border bg-muted">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.097395555555!2d-122.36666668469287!3d37.58433997979592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f9f5c5c5c5c5c%3A0x5c5c5c5c5c5c5c5c!2sBurlingame%2C%20CA!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Cycle Science Location Map"
              />
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Address</h3>
                      <p className="text-muted-foreground">
                        Cycle Science<br />
                        123 Bike Lane<br />
                        Burlingame, CA 94010
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary/10">
                      <Phone className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Contact</h3>
                      <p className="text-muted-foreground">
                        Phone: (650) 555-BIKE<br />
                        Email: info@cyclescience.com
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10">
                      <Clock className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Hours</h3>
                      <div className="text-muted-foreground space-y-1">
                        <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p>Saturday: 10:00 AM - 4:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
