import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center space-y-4">
          {/* Logo */}
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary">
            <span className="text-2xl font-bold text-primary-foreground">CS</span>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-6">
            <Link
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label="Instagram"
            >
              <Instagram className="h-6 w-6" />
            </Link>
            <Link
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label="Facebook"
            >
              <Facebook className="h-6 w-6" />
            </Link>
            <Link
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label="Twitter"
            >
              <Twitter className="h-6 w-6" />
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Cycle Science. All rights reserved.
          </p>

          {/* Additional Links */}
          <div className="flex space-x-4 text-sm">
            <Link href="#" className="text-muted-foreground hover:text-primary">
              Privacy Policy
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
