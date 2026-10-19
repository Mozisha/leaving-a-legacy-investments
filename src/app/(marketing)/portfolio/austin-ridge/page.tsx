import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Austin Ridge",
  description:
    "Closed — 52 Units in Southern Pines, NC. Delivering 17%+ IRR, 10%+ cash-on-cash, and a 2.1x equity multiple over 5 years.",
};

/* ── Data ──────────────────────────────────────────────── */
const highlights = [
  {
    stat: "17%+",
    label: "IRR",
    detail:
      "Strong annual return after factoring in time and cash flow — delivering consistent equity growth over the investment period.",
  },
  {
    stat: "10%+",
    label: "Cash-on-Cash",
    detail:
      "Reliable cash return on initial investment each year — providing stable, predictable income for our investors.",
  },
  {
    stat: "2.1×",
    label: "Equity Multiple",
    detail:
      "Over 5 years, every dollar invested is projected to more than double — turning $1 into $2.10 by end of period.",
  },
];

const dealNumbers = [
  { label: "Purchase Price", value: "$4.5M", note: "Acquisition cost of the property" },
  { label: "CapEx", value: "$580K", note: "Upgrades & improvements for long-term value" },
  { label: "Soft Costs & Reserves", value: "$420K", note: "Legal, inspections & contingency reserve" },
  { label: "Financing", value: "$3.8M", note: "Loan secured to maximise cash flow" },
  { label: "Equity", value: "$2M", note: "Investment from us and our investors" },
];

const photos = [
  { src: "/houses/ridge-1.webp", alt: "Austin Ridge property view 1" },
  { src: "/houses/ridge-2.webp", alt: "Austin Ridge property view 2" },
  { src: "/houses/ridge-3.webp", alt: "Austin Ridge property view 3" },
  { src: "/houses/ridge-4.webp", alt: "Austin Ridge property view 4" },
];

/* ── Page ──────────────────────────────────────────────── */
export default function AustinRidgePage() {
  return (
    <>
      {/* ── Hero / Photo Header ── */}
      <section className="bg-[#ddeaf7] px-6 pb-0 pt-16 lg:px-12">
        {/* Title block */}
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#1a4fa0]/70">
            Closed Deal
          </p>
          <h1 className="mt-2 text-4xl font-extrabold uppercase tracking-tight text-[#1a4fa0] sm:text-5xl lg:text-7xl">
            Austin Ridge
          </h1>
          <p className="mt-4 text-base text-gray-600 sm:text-lg">
            Closed — 52 Units in Southern Pines, NC
          </p>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-gray-500">
            Congratulations to fellow partners, investors, brokers, and sellers
            on this deal.
          </p>
        </div>

        {/* Photo grid — 4 images, 2×2 on desktop, stacked on mobile */}
        <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
          {photos.map((photo, i) => (
            <div
              key={i}
              className="relative h-48 overflow-hidden rounded-t-lg sm:h-60 lg:h-72"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 600px"
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ── Key Return Highlights ── */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <h2 className="text-center text-2xl font-bold text-[#0d1b3e] sm:text-3xl">
            This Deal Will Deliver
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-gray-500 sm:text-base">
            A strong passive investment opportunity producing real returns and
            sustainable growth.
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

      {/* ── Closing CTA ── */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
            <span className="font-semibold text-[#0d1b3e]">
              This deal is another example of how multifamily investing can
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
