import "./globals.css";
import "../lib/font.css";
import { Providers } from "./providers"; // Client-side Redux + MUI
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://thankfulhelpinghand.org"),
  title: "Thankful Helping Hand Foundation | NGO in India",
  description:
    "Thankful Helping Hand Foundation is a registered NGO in India helping underprivileged people through education, healthcare, and social welfare programs.",
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
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Organization JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Thankful Helping Hand Foundation",
              "url": "https://thankfulhelpinghand.org",
              "logo": "https://thankfulhelpinghand.org/logo.png",
              "sameAs": [
                "https://www.facebook.com/thankfulhelpinghand",
                "https://www.instagram.com/thankfulhelpinghand",
                "https://x.com/thankfulhelpinghand"
              ]
            }),
          }}
        />

        {/* WebSite JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
            }),
          }}
        />
      </head>

      <body>
        {/* Client-side providers (Redux + MUI) */}
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
