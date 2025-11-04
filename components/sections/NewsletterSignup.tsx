"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for newsletter signup logic
    console.log("Newsletter signup:", email);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail("");
    }, 3000);
  };

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center rounded-full bg-primary/10 p-3 mb-6">
            <Mail className="h-8 w-8 text-primary" />
          </div>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            Stay in the Loop
          </h2>

          <p className="text-lg text-muted-foreground mb-8">
            Get the latest updates on bike fitting tips, special offers, and cycling insights
            delivered straight to your inbox.
          </p>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-12 text-base"
              />
              <Button type="submit" size="lg" className="h-12 px-8 whitespace-nowrap">
                Sign Up
              </Button>
            </form>
          ) : (
            <div className="rounded-lg bg-primary/10 p-4 text-primary font-medium">
              Thanks for subscribing! Check your email to confirm.
            </div>
          )}

          <p className="text-sm text-muted-foreground mt-4">
            By signing up, you agree to receive marketing emails from Cycle Science.
            You can unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
