import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const BASE = "https://leavingalegacyinvestments.com";

export const metadata: Metadata = {
  title: "Hickory Gardens | 48-Unit Affordable Housing Investment — Hickory, NC",
  description:
    "Closed deal: 48-unit affordable housing property in Hickory, NC. Delivered 25%+ IRR, 14% cash-on-cash, and 2.1x equity multiple over 5 years. A Leaving a Legacy Investments acquisition.",
  keywords: [
    "Hickory Gardens Hickory NC investment",
    "48 unit affordable housing investment",
    "multifamily real estate Hickory NC",
    "closed real estate deal 25% IRR",
    "apartment complex investment returns",
    "real estate syndication North Carolina",
    "affordable housing syndication",
  ],
  alternates: { canonical: `${BASE}/portfolio/hickory-gardens` },
  openGraph: {
    title: "Hickory Gardens | 48-Unit Multifamily — Hickory, NC",
    description: "Closed multifamily deal delivering 25%+ IRR and 14% cash-on-cash. A Leaving a Legacy Investments acquisition.",
    url: `${BASE}/portfolio/hickory-gardens`,
    images: [{ url: `${BASE}/houses/hickory-1.webp`, width: 1200, height: 630, alt: "Hickory Gardens — 48-Unit Affordable Housing, Hickory NC" }],
  },
};

const propertySchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateListing",
  name: "Hickory Gardens",
  description: "48-unit affordable housing property in Hickory, NC. Closed deal delivering 25%+ IRR, 14% cash-on-cash, and 2.1x equity multiple.",
  url: `${BASE}/portfolio/hickory-gardens`,
  image: `${BASE}/houses/hickory-1.webp`,
  numberOfRooms: 48,
  address: { "@type": "PostalAddress", addressLocality: "Hickory", addressRegion: "NC", addressCountry: "US" },
};

/* ── Data ──────────────────────────────────────────────── */
const highlights = [
  {
    stat: "25%+",
    label: "IRR",
    detail:
      "Expected annual return after factoring in time and cash flow — generating exceptional returns while building solid equity.",
  },
  {
    stat: "14%",
    label: "Cash-on-Cash",
    detail:
      "Cash return on initial investment each year — signalling stable, predictable income for our investors.",
  },
  {
    stat: "2.1×",
    label: "Equity Multiple",
    detail:
      "Over 5 years, every dollar invested is projected to more than double — turning $1 into $2.10 by end of period.",
  },
];

const dealNumbers = [
  { label: "Purchase Price", value: "$3.5M", note: "Acquisition cost of the property" },
  { label: "CapEx", value: "$226K", note: "Upgrades & improvements for long-term value" },
  { label: "Soft Costs & Reserves", value: "$420K", note: "Legal, inspections & contingency reserve" },
  { label: "Financing", value: "$2.2M", note: "Loan secured to maximise cash flow" },
  { label: "Equity", value: "$1.3M", note: "Investment from us and our investors" },
];

const photos = [
  { src: "/houses/hickory-1.webp", alt: "Hickory Gardens interior living area" },
  { src: "/houses/hickory-2.webp", alt: "Hickory Gardens exterior view" },
  { src: "/houses/hickory-3.webp", alt: "Hickory Gardens unit interior" },
];

/* ── Page ──────────────────────────────────────────────── */
export default function HickoryGardensPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(propertySchema) }} />
      {/* ── Hero / Photo Header ── */}
      <section className="bg-[#ddeaf7] px-6 pb-0 pt-16 lg:px-12">
        {/* Title block */}
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#1a4fa0]/70">
            Closed Deal
          </p>
          <h1 className="mt-2 text-4xl font-extrabold uppercase tracking-tight text-[#1a4fa0] sm:text-5xl lg:text-7xl">
            Hickory Gardens
          </h1>
          <p className="mt-4 text-base text-gray-600 sm:text-lg">
            A 48-unit affordable housing property in Hickory, NC!
          </p>
        </div>

        {/* Photo grid — 3 images, middle one slightly taller */}
        <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 items-end gap-3 sm:grid-cols-3 sm:gap-4">
          <div className="relative h-48 overflow-hidden rounded-t-lg sm:h-56 lg:h-64">
            <Image
              src={photos[0].src}
              alt={photos[0].alt}
              fill
              sizes="(max-width: 640px) 33vw, (max-width: 1024px) 33vw, 400px"
              className="object-cover"
            />
          </div>
          {/* Centre image is taller */}
          <div className="relative h-56 overflow-hidden rounded-t-lg sm:h-64 lg:h-72">
            <Image
              src={photos[1].src}
              alt={photos[1].alt}
              fill
              sizes="(max-width: 640px) 33vw, (max-width: 1024px) 33vw, 400px"
              className="object-cover"
            />
          </div>
          <div className="relative h-48 overflow-hidden rounded-t-lg sm:h-56 lg:h-64">
            <Image
              src={photos[2].src}
              alt={photos[2].alt}
              fill
              sizes="(max-width: 640px) 33vw, (max-width: 1024px) 33vw, 400px"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── Key Return Highlights ── */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <h2 className="text-center text-2xl font-bold text-[#0d1b3e] sm:text-3xl">
            What Makes This Deal a Winner
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-gray-500 sm:text-base">
            Here&apos;s a closer look at the numbers behind this successful
            multifamily investment.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {highlights.map(({ stat, label, detail }) => (
              <div
                key={label}
                className="flex flex-col items-center rounded-xl border border-gray-100 bg-[#ddeaf7] p-8 text-center shadow-sm"
              >
                <p className="text-5xl font-extrabold text-[#1a4fa0]">{stat}</p>
                <p className="mt-1 text-lg font-bold text-[#0d1b3e]">{label}</p>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Deal Breakdown ── */}
      <section className="bg-[#0d1b3e] py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <h2 className="text-center text-2xl font-bold text-white sm:text-3xl">
            Deal Breakdown
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-sm text-white/70 sm:text-base">
            Combining these elements creates a strong, passive investment
            opportunity that produces real returns and sustainable growth.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {dealNumbers.map(({ label, value, note }) => (
              <div
                key={label}
                className="flex flex-col gap-1 rounded-lg border border-white/10 bg-white/5 p-5"
              >
                <p className="text-2xl font-extrabold text-white">{value}</p>
                <p className="text-sm font-semibold text-[#7eb3f5]">{label}</p>
                <p className="mt-1 text-xs leading-relaxed text-white/60">{note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Closing statement ── */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
            <span className="font-semibold text-[#0d1b3e]">
              This deal is a great example of how multifamily investing can
              generate consistent income and wealth,
            </span>{" "}
            all with a hands-off approach!
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded bg-[#1a4fa0] px-8 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Invest With Us
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center rounded border border-[#1a4fa0] px-8 py-3.5 text-sm font-semibold text-[#1a4fa0] transition-colors hover:bg-[#ddeaf7]"
            >
              ← Back to Portfolio
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
