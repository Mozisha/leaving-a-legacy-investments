import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE = "https://leavingalegacyinvestments.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  title: {
    default: "Leaving a Legacy Investments | Real Estate Syndication & Multifamily Investing",
    template: "%s | Leaving a Legacy Investments",
  },
  description:
    "Leaving a Legacy Investments helps accredited investors build generational wealth through passive real estate syndications in commercial multifamily properties and hotels. Minimum investment $25K–$50K.",
  keywords: [
    "real estate syndication",
    "multifamily investing",
    "passive real estate investment",
    "accredited investor opportunities",
    "commercial real estate investment",
    "real estate limited partnership",
    "generational wealth building",
    "apartment complex investment",
    "hotel investment",
    "leaving a legacy investments",
    "Phya Webb",
    "real estate investing Virginia",
    "passive income real estate",
    "real estate fund",
    "private placement memorandum",
    "LP investment",
    "cash on cash return",
    "IRR real estate",
    "multifamily real estate fund",
  ],
  authors: [{ name: "T. Phya Webb", url: BASE }],
  creator: "Leaving a Legacy Investments",
  publisher: "Leaving a Legacy Investments",
  alternates: { canonical: BASE },
  openGraph: {
    title: "Leaving a Legacy Investments | Real Estate Syndication & Multifamily Investing",
    description:
      "Passive real estate syndications in commercial multifamily properties and hotels. Build generational wealth with a trusted investment partner.",
    url: BASE,
    siteName: "Leaving a Legacy Investments",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${BASE}/hero-image.webp`,
        width: 1200,
        height: 630,
        alt: "Leaving a Legacy Investments — Real Estate Syndication",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Leaving a Legacy Investments | Real Estate Syndication",
    description:
      "Passive real estate syndications in commercial multifamily properties and hotels. Build generational wealth.",
    images: [`${BASE}/hero-image.webp`],
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
  verification: {
    // Add Google Search Console verification token here when available
    // google: "YOUR_VERIFICATION_TOKEN",
  },
};

/* ── JSON-LD Structured Data ──────────────────────────── */
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness", "FinancialService"],
  "@id": `${BASE}/#organization`,
  name: "Leaving a Legacy Investments",
  alternateName: "LALI",
  url: BASE,
  logo: {
    "@type": "ImageObject",
    url: `${BASE}/lali-logo.webp`,
    width: 240,
    height: 80,
  },
  image: `${BASE}/hero-image.webp`,
  description:
    "Leaving a Legacy Investments is a real estate syndication company that helps accredited investors build generational wealth through passive investments in commercial multifamily properties and hotels.",
  founder: {
    "@type": "Person",
    name: "T. Phya Webb",
    jobTitle: "Founder & Owner",
    worksFor: { "@id": `${BASE}/#organization` },
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+17036461954",
      contactType: "customer service",
      email: "leavingalegacyinvestments@gmail.com",
      areaServed: "US",
      availableLanguage: "English",
    },
  ],
  sameAs: [
    "https://www.facebook.com/share/19uxYHNe3H/",
    "https://www.instagram.com/leavingalegacyinvestments",
  ],
  knowsAbout: [
    "Real estate syndication",
    "Multifamily investing",
    "Commercial real estate",
    "Limited partnerships",
    "Passive income investing",
    "Generational wealth building",
    "Accredited investor opportunities",
    "Hotel investing",
    "Apartment complex investing",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Real Estate Investment Opportunities",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Multifamily Property Syndication",
        description:
          "Passive investment in commercial multifamily apartment complexes with minimum investment of $25,000–$50,000.",
      },
      {
        "@type": "Offer",
        name: "Hotel Investment Syndication",
        description:
          "Passive investment in hotel properties with strong cash flow and long-term capital appreciation.",
      },
    ],
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE}/#website`,
  url: BASE,
  name: "Leaving a Legacy Investments",
  description:
    "Real estate syndication company specializing in multifamily and hotel investments.",
  publisher: { "@id": `${BASE}/#organization` },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${BASE}/faqs`,
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationSchema, websiteSchema]),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
