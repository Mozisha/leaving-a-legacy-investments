import type { Metadata } from "next";
import { AboutPartnership } from "@/components/sections/about-partnership";
import { TeamSection } from "@/components/sections/team-section";

const BASE = "https://leavingalegacyinvestments.com";

export const metadata: Metadata = {
  title: "About Us | Real Estate Syndication Company",
  description:
    "Learn about Leaving a Legacy Investments, founded by T. Phya Webb. We empower accredited investors to build generational wealth through passive multifamily and hotel real estate syndications.",
  keywords: [
    "about leaving a legacy investments",
    "T. Phya Webb real estate investor",
    "real estate syndication company",
    "multifamily investment firm",
    "passive real estate investing company",
    "accredited investor real estate partner",
    "generational wealth real estate",
    "real estate fund manager",
  ],
  alternates: { canonical: `${BASE}/about` },
  openGraph: {
    title: "About Leaving a Legacy Investments | Real Estate Syndication",
    description: "Founded by T. Phya Webb — empowering investors to build generational wealth through passive multifamily and hotel syndications.",
    url: `${BASE}/about`,
    images: [{ url: `${BASE}/phya.webp`, width: 800, height: 800, alt: "T. Phya Webb — Founder, Leaving a Legacy Investments" }],
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="relative flex min-h-[380px] w-full items-center justify-center overflow-hidden sm:min-h-[420px]">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/houses/house-2.webp')" }} aria-hidden="true" />
        <div className="absolute inset-0 bg-gray-900/65" aria-hidden="true" />
        <div className="relative z-10 px-6 py-20 text-center">
          <h1 className="text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl lg:text-7xl">About Us</h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
            We want to be your partner for active and passive investments in commercial multi-family properties such as apartment complexes and hotels.
          </p>
        </div>
      </section>
      <AboutPartnership />
      <TeamSection />
    </>
  );
}
