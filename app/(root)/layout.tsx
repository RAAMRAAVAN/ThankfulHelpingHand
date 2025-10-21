// app/layout.tsx or a similar layout file
import { ReactNode } from "react";
import type { Metadata } from "next";
import Footer from "../(components)/Footer/Footer";
import HeaderPage from '../(components)/Header/HeaderPage';
import AnimatedImages from "../(components)/Animation";
import { StaticHospital } from "@/lib/fetchData";

// ✅ Dynamically generate metadata
export async function generateMetadata(): Promise<Metadata> {
  const hospital = StaticHospital();

  return {
    // metadataBase: new URL("thankfulhelpinghand.org"),
    title: "Thankful Helping Hand Foundation",
    description:
      `Thankful Helping Hand Foundation`,
    keywords: [
      "Thankful Helping Hand Foundation"
    ],
    icons: {
      icon: "/logo.gif",
    },
    openGraph: {
      title: `–Thankful Helping Hand Foundation`,
      description:
        `Thankful Helping Hand Foundation`,
      // url: "thankfulhelpinghand.org",
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
    },
    twitter: {
      card: "summary_large_image",
      title: hospital.HospitalName,
      description:
        "Thankful Helping Hand Foundation",
      images: ["/og-image.jpg"],
      site: "https://x.com",
    },
  };
}

// ✅ Layout Component
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <HeaderPage />
      {children}
      <Footer />
      {/* <AnimatedImages /> */}
    </>
  );
}
