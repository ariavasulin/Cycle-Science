import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cycle Science - Professional Bike Fitting & Custom Insoles",
  description: "Expert bike fitting services and custom SIDAS insoles in Burlingame, CA. Personalized cycling solutions for optimal performance and comfort.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
