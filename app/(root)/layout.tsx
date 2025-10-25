// app/layout.tsx
import { ReactNode } from "react";
import type { Metadata } from "next";
import Footer from "../(components)/Footer/Footer";
import HeaderPage from "../(components)/Header/HeaderPage";
import { StaticHospital } from "@/lib/fetchData";
import Script from "next/script";

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL("https://thankfulhelpinghand.org"),
    title: "Thankful Helping Hand Foundation | NGO in India | Donate for a Better Future",
    description: "Thankful Helping Hand Foundation is a registered NGO in India helping underprivileged people through education, healthcare, and social welfare programs.",
    icons: {
      icon: "https://thankfulhelpinghand.org/logo.png",
    },
    openGraph: {
      title: "Thankful Helping Hand Foundation",
      description: "Support education, healthcare, and welfare initiatives across India.",
      url: "https://thankfulhelpinghand.org",
      siteName: "Thankful Helping Hand Foundation",
      images: [
        {
          url: "https://thankfulhelpinghand.org/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Thankful Helping Hand Foundation",
        },
      ],
      type: "website",
      locale: "en_IN",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <HeaderPage />
      {children}
      <Footer />

      {/* NGO Info */}
      <Script id="ngo-jsonld" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "NGO",
          "name": "Thankful Helping Hand Foundation",
          "url": "https://thankfulhelpinghand.org",
          "logo": "https://thankfulhelpinghand.org/logo.png",
        })}
      </Script>

      {/* WebSite Schema for Google Search logo */}
      <Script id="website-jsonld" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Thankful Helping Hand Foundation",
          "url": "https://thankfulhelpinghand.org/",
          "publisher": {
            "@type": "Organization",
            "name": "Thankful Helping Hand Foundation",
            "logo": {
              "@type": "ImageObject",
              "url": "https://thankfulhelpinghand.org/logo.png"
            }
          }
        })}
      </Script>
    </>
  );
}
