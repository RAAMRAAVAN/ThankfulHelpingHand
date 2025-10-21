// app/layout.tsx
import { ReactNode } from "react";
import type { Metadata } from "next";
import Footer from "../(components)/Footer/Footer";
import HeaderPage from "../(components)/Header/HeaderPage";
import { StaticHospital } from "@/lib/fetchData";

export async function generateMetadata(): Promise<Metadata> {
  const hospital = StaticHospital();

  return {
    metadataBase: new URL("https://thankfulhelpinghand.org"),
    title:
      "Thankful Helping Hand Foundation | NGO in India | Donate for a Better Future",
    description:
      "Thankful Helping Hand Foundation is a registered non-profit organization in India helping underprivileged people through education, healthcare, food, and social welfare programs. Join us to make a difference.",
    keywords: [
      "Thankful Helping Hand Foundation",
      "Thankful Helping Hand",
      "NGO in India",
      "Non-profit organization",
      "Charity Foundation",
      "Donate for poor",
      "Education NGO",
      "Healthcare NGO",
      "Food donation NGO",
      "Help for needy people",
      "Support NGO India",
      "Thankful NGO",
    ],
    icons: {
      icon: "/logo.gif",
    },
    openGraph: {
      title:
        "Thankful Helping Hand Foundation | Non-Profit Organization in India",
      description:
        "Join Thankful Helping Hand Foundation to support education, healthcare, and welfare initiatives across India. Donate now to help those in need.",
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
      title: "Thankful Helping Hand Foundation | Charity Organization India",
      description:
        "Support the Thankful Helping Hand Foundation — an NGO working for education, healthcare, and social development in India.",
      images: ["/og-image.jpg"],
      site: "@ThankfulHelpingHand",
    },
    alternates: {
      canonical: "https://thankfulhelpinghand.org",
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
    </>
  );
}
