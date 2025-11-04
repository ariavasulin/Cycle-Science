"use client";

import { useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, DollarSign } from "lucide-react";

export function SquareBookingEmbed() {
  useEffect(() => {
    // Placeholder for Square script loading
    // In production, you would load the Square script here:
    // const script = document.createElement('script');
    // script.src = 'https://square.site/appointments/...';
    // document.body.appendChild(script);
  }, []);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-4">
              Book Your Appointment
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Select your service, choose a time, and get ready to optimize your cycling experience
            </p>
          </div>

          {/* Booking Info Cards */}
          <div className="grid gap-6 md:grid-cols-3 mb-12">
            <Card>
              <CardHeader className="text-center pb-3">
                <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Flexible Scheduling</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription>
                  Choose from available time slots that work with your schedule
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center pb-3">
                <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10">
                  <Clock className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="text-lg">Duration Range</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription>
                  Services from 30 minutes to 5 hours based on your needs
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center pb-3">
                <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                  <DollarSign className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-lg">Pricing</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription>
                  Services range from $60 to $600 based on complexity
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Square Embed Placeholder */}
          <Card className="border-2">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Select a Service</CardTitle>
                <a
                  href="#"
                  className="text-sm text-primary hover:underline"
                >
                  My Bookings
                </a>
              </div>
            </CardHeader>
            <CardContent>
              <div className="min-h-[600px] flex items-center justify-center bg-muted/30 rounded-lg border-2 border-dashed border-muted-foreground/25">
                <div className="text-center p-8 max-w-md">
                  <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                    <Calendar className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Square Booking Widget</h3>
                  <p className="text-muted-foreground mb-6">
                    This is a placeholder for the Square Appointments booking widget.
                    In production, the actual Square booking interface will be embedded here.
                  </p>
                  <div className="text-sm text-left space-y-2 bg-muted/50 p-4 rounded-lg">
                    <p className="font-semibold">To integrate Square:</p>
                    <ol className="list-decimal list-inside space-y-1 text-muted-foreground">
                      <li>Create a Square account</li>
                      <li>Set up Square Appointments</li>
                      <li>Get your booking widget embed code</li>
                      <li>Replace this placeholder with the embed</li>
                    </ol>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Service Categories Note */}
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Can't find what you're looking for?{" "}
              <a href="mailto:info@cyclescience.com" className="text-primary hover:underline">
                Contact us
              </a>{" "}
              for custom fitting solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
