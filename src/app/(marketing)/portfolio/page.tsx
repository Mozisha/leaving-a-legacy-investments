import type { Metadata } from "next";
import { PortfolioCards } from "@/components/sections/portfolio-cards";

const BASE = "https://leavingalegacyinvestments.com";

export const metadata: Metadata = {
  title: "Investment Portfolio | Multifamily & Hotel Properties",
  description:
    "Explore Leaving a Legacy Investments' portfolio of acquired commercial multifamily properties and hotels — Hickory Gardens, Austin Ridge, and Butterworth Flats in Virginia and North Carolina.",
  keywords: [
    "real estate investment portfolio",
    "multifamily property investments",
    "Hickory Gardens Hickory NC",
    "Austin Ridge Southern Pines NC",
    "Butterworth Flats Petersburg VA",
    "closed real estate deals",
    "apartment complex investment returns",
    "commercial real estate portfolio",
  ],
  alternates: { canonical: `${BASE}/portfolio` },
  openGraph: {
    title: "Portfolio | Leaving a Legacy Investments",
    description: "Multifamily and hotel investment properties acquired by Leaving a Legacy Investments.",
    url: `${BASE}/portfolio`,
    images: [{ url: `${BASE}/houses/house-4.webp`, width: 1200, height: 630, alt: "Leaving a Legacy Investments Portfolio" }],
  },
};

export default function PortfolioPage() {
  return (
    <>
      <section className="relative flex min-h-[380px] w-full items-center justify-center overflow-hidden sm:min-h-[420px]">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/houses/house-4.webp')" }} aria-hidden="true" />
        <div className="absolute inset-0 bg-gray-900/65" aria-hidden="true" />
        <div className="relative z-10 px-6 py-20 text-center">
          <h1 className="text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl lg:text-7xl">Our Portfolio</h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
            Take a look below at some of the properties that Leaving a Legacy Investments have acquired. Please feel free to reach out to us with any questions you may have.
          </p>
        </div>
      </section>
      <PortfolioCards />
    </>
  );
}
