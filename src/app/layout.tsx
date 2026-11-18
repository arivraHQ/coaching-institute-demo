import type { Metadata } from "next";
import { Bricolage_Grotesque, Public_Sans, Caveat } from "next/font/google";
import "./globals.css";
import { siteContent } from "@/content/site";

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["500", "700", "800"],
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-margin",
  display: "swap",
  weight: ["500", "700"],
});

export const metadata: Metadata = {
  title: "Lakshya Academy Kanpur | Serious JEE, NEET & Foundation Classroom Coaching",
  description:
    "Offline coaching in Kakadeo, Kanpur for Class 9-10 Foundation, Class 11-12 PCM/PCB, JEE Main & Advanced, and NEET. Max 40-student batches with daily doubt clearing.",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  keywords: [
    "Lakshya Academy",
    "Kanpur coaching",
    "JEE Main coaching Kanpur",
    "NEET coaching Kakadeo",
    "IIT JEE Kanpur",
    "Foundation coaching class 9 10",
  ],
  openGraph: {
    title: "Lakshya Academy Kanpur — Padhai ka matlab, clarity hona chahiye.",
    description:
      "Small 40-student batches for JEE & NEET with daily teacher doubt clearing in Kakadeo, Kanpur.",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: siteContent.contact.name,
    description: siteContent.contact.tagline,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteContent.contact.address,
      addressLocality: "Kanpur",
      addressRegion: "Uttar Pradesh",
      postalCode: siteContent.contact.pin,
      addressCountry: "IN",
    },
    telephone: siteContent.contact.phoneDisplay,
    openingHours: "Mo-Sa 08:00-20:00, Su 08:30-14:00",
    url: "https://lakshya-academy-kanpur.demo",
  };

  return (
    <html
      lang="en"
      className={`${bricolageGrotesque.variable} ${publicSans.variable} ${caveat.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-bg text-ink font-body antialiased bg-graph-paper">
        {children}
      </body>
    </html>
  );
}
