// app/layout.tsx
import { ReactNode } from "react";
import type { Metadata } from "next";
import Footer from "../(components)/Footer/Footer";
import HeaderPage from "../(components)/Header/HeaderPage";
import { StaticHospital } from "@/lib/fetchData";
import Script from "next/script";

export async function generateMetadata(): Promise<Metadata> {
  const hospital = StaticHospital();

  return {
    metadataBase: new URL("https://thankfulhelpinghand.org"),
    title:
      "Thankful Helping Hand Foundation | NGO in India | Donate for a Better Future",
    description:
      "Thankful Helping Hand Foundation is a registered NGO in India helping underprivileged people through education, healthcare, and social welfare programs.",
    keywords: [
      "Thankful Helping Hand Foundation",
      "NGO in India",
      "Charity",
      "Donate",
      "Education NGO",
      "Healthcare NGO",
      "Support needy people",
    ],
    icons: {
      icon: "/logo.gif",
    },
    openGraph: {
      title: "Thankful Helping Hand Foundation",
      description:
        "Support education, healthcare, and welfare initiatives across India.",
      url: "https://thankfulhelpinghand.org",
      siteName: "Thankful Helping Hand Foundation",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Thankful Helping Hand Foundation",
        },
      ],
      type: "website",
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title: "Thankful Helping Hand Foundation",
      description:
        "Support the Thankful Helping Hand Foundation — an NGO working for education, healthcare, and social development in India.",
      images: ["/og-image.jpg"],
      site: "@ThankfulHelpingHand",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <HeaderPage />
      {children}
      <Footer />
       {/* JSON-LD Structured Data for NGO */}
      <Script id="ngo-jsonld" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "NGO",
          "name": "Thankful Helping Hand Foundation",
          "url": "https://thankfulhelpinghand.org",
          "logo": "https://thankfulhelpinghand.org/logo.gif",
          "sameAs": [
            "https://www.facebook.com/yourpage",
            "https://www.instagram.com/yourpage",
            "https://x.com/yourpage"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-XXXXXXXXXX",
            "contactType": "Customer Service",
            "email": "info@thankfulhelpinghand.org"
          },
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Your Street Address",
            "addressLocality": "City",
            "addressRegion": "State",
            "postalCode": "XXXXX",
            "addressCountry": "IN"
          }
        })}
      </Script>
    </>
  );
}
