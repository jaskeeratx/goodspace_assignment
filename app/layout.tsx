import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FocusFlow — Deep Work Timer for Serious Professionals",
  description:
    "FocusFlow helps knowledge workers eliminate distractions, protect deep work time, and build lasting focus habits. 14-day free trial. No credit card required.",
  keywords: ["focus timer", "productivity app", "pomodoro", "deep work", "distraction blocker"],
  openGraph: {
    title: "FocusFlow — Deep Work Timer",
    description: "Eliminate distractions and build focus habits that last.",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "FocusFlow",
  applicationCategory: "ProductivityApplication",
  operatingSystem: "Web, iOS, Android",
  description:
    "A science-backed focus timer that helps knowledge workers build deep work habits, block distractions, and track concentration over time.",
  offers: {
    "@type": "Offer",
    price: "399",
    priceCurrency: "INR",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: "399",
      priceCurrency: "INR",
      billingDuration: "P1M",
      unitText: "month",
    },
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "1240",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
