import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Butterworth Flats & Odd Fellows Lofts",
  description:
    "64 residential units + 17,200 SF of commercial space in Historic Downtown Petersburg, VA. 100% occupied. 18-20% IRR target.",
};

/* ── Data ─────────────────────────────────────────────── */
const returns = [
  { stat: "18–20%", label: "IRR", detail: "Target internal rate of return over a 6-year hold." },
  { stat: "2.2×", label: "Equity Multiple", detail: "Projected equity multiple over the 6-year investment period." },
  { stat: "8%", label: "Avg. Cash-on-Cash", detail: "Average annual cash-on-cash return with quarterly distributions." },
];

const investmentTerms = [
  { label: "Hold Period", value: "6 Years" },
  { label: "Preferred Return", value: "7%" },
  { label: "LP / GP Split", value: "70 / 30" },
  { label: "Distributions", value: "Quarterly" },
  { label: "Min. Investment", value: "$50,000" },
];

const butterworthStats = [
  { label: "Residential Units", value: "45" },
  { label: "Retail SF", value: "9,419" },
  { label: "Artist Studios", value: "54" },
  { label: "Event Space", value: "8,429 SF" },
  { label: "Event Capacity", value: "500 persons" },
  { label: "Avg. Rent", value: "$1,397 / mo" },
  { label: "Avg. Rent / SF", value: "$1.98" },
  { label: "Gross Building Area", value: "53,652 SF" },
  { label: "Year Built / Rehabbed", value: "1908 / 2014" },
  { label: "Occupancy", value: "100%" },
];

const oddFellowsStats = [
  { label: "Residential Units", value: "19" },
  { label: "Retail SF", value: "7,794" },
  { label: "Commercial Tenants", value: "5" },
  { label: "Avg. Rent", value: "$1,483 / mo" },
  { label: "Avg. Rent / SF", value: "$1.85" },
  { label: "Gross Building Area", value: "25,948 SF" },
  { label: "Year Built / Rehabbed", value: "1892 / 2010" },
  { label: "Occupancy", value: "100%" },
];

const highlights = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    title: "100% Occupied",
    body: "All 64 residential units are fully leased with strong historical cash flow and additional upside through event space and commercial lease-up.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
      </svg>
    ),
    title: "Prime Location",
    body: "Located adjacent to the newly opened $23M Hotel Petersburg, walkable to top restaurants, cafes, and breweries in Historic Downtown.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>
      </svg>
    ),
    title: "$200K+ Event Revenue",
    body: "Butterworth's 8,429 SF event venue with 500-person capacity has generated over $200K in annual revenue historically.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
        <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
      </svg>
    ),
    title: "Growing Market",
    body: "Petersburg is emerging as a life sciences and logistics hub — driving demand, population growth, and rent appreciation.",
  },
];

const photos = [
  { src: "/houses/butterworth-1.webp", alt: "Butterworth Flats exterior" },
  { src: "/houses/butter-2.webp", alt: "Butterworth Flats interior" },
  { src: "/houses/butterworth-3.webp", alt: "Butterworth event space" },
];

/* ── Page ─────────────────────────────────────────────── */
export default function ButterworthFlatsPage() {
  return (
    <>
      {/* ── Hero / Photo Header ── */}
      <section className="bg-[#ddeaf7] px-6 pb-0 pt-16 lg:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#1a4fa0]/70">
            Active Opportunity · Petersburg, VA
          </p>
          <h1 className="mt-2 text-4xl font-extrabold uppercase tracking-tight text-[#1a4fa0] sm:text-5xl lg:text-6xl">
            Butterworth Flats &amp; Odd Fellows Lofts
          </h1>
          <p className="mt-4 text-base text-gray-600 sm:text-lg">
            64 Units + 17K SF Commercial · 100% Occupied · Historic Downtown Petersburg, VA
          </p>
        </div>

        {/* Photos — large hero image + two side by side below on mobile, 3-col on desktop */}
        <div className="mx-auto mt-10 max-w-6xl">
          {/* Large feature image */}
          <div className="relative h-64 w-full overflow-hidden rounded-t-lg sm:h-80 lg:h-96">
            <Image
              src={photos[0].src}
              alt={photos[0].alt}
              fill
              sizes="(max-width: 1024px) 100vw, 1152px"
              className="object-cover"
              priority
            />
          </div>
          {/* Two supporting images */}
          <div className="grid grid-cols-2 gap-3 pt-3 sm:gap-4">
            {photos.slice(1).map((photo, i) => (
              <div key={i} className="relative h-44 overflow-hidden rounded-b-lg sm:h-56 lg:h-64">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 576px"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Target Returns ── */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <h2 className="text-center text-2xl font-bold text-[#0d1b3e] sm:text-3xl">
            Target Returns
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {returns.map(({ stat, label, detail }) => (
              <div key={label} className="flex flex-col items-center rounded-xl bg-[#ddeaf7] p-8 text-center shadow-sm">
                <p className="text-5xl font-extrabold text-[#1a4fa0]">{stat}</p>
                <p className="mt-1 text-lg font-bold text-[#0d1b3e]">{label}</p>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{detail}</p>
              </div>
            ))}
          </div>

          {/* Investment terms strip */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {investmentTerms.map(({ label, value }) => (
              <div key={label} className="flex items-center gap-2 rounded-full border border-[#1a4fa0]/20 bg-[#f0f6ff] px-5 py-2.5 text-sm">
                <span className="text-gray-500">{label}:</span>
                <span className="font-semibold text-[#0d1b3e]">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Investment Highlights ── */}
      <section className="bg-gray-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <h2 className="text-center text-2xl font-bold text-[#0d1b3e] sm:text-3xl">
            Investment Highlights
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map(({ icon, title, body }) => (
              <div key={title} className="group flex flex-col gap-4 rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0d1b3e] text-white transition-colors group-hover:bg-[#1a4fa0]">
                  {icon}
                </div>
                <h3 className="text-base font-bold text-gray-900">{title}</h3>
                <p className="text-sm leading-relaxed text-gray-500">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Property Summaries ── */}
      <section className="bg-[#0d1b3e] py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <h2 className="text-center text-2xl font-bold text-white sm:text-3xl">
            Property Summary
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Butterworth Flats */}
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 sm:p-8">
              <h3 className="text-xl font-bold text-white">Butterworth Flats</h3>
              <p className="mt-1 text-sm text-white/60">Originally built 1908 · Rehabbed 2014</p>
              <dl className="mt-6 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
                {butterworthStats.map(({ label, value }) => (
                  <div key={label}>
                    <dt className="text-xs text-white/50">{label}</dt>
                    <dd className="mt-0.5 text-sm font-semibold text-white">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Odd Fellows Lofts */}
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 sm:p-8">
              <h3 className="text-xl font-bold text-white">Odd Fellows Lofts</h3>
              <p className="mt-1 text-sm text-white/60">Originally built 1892 · Rehabbed 2010</p>
              <dl className="mt-6 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
                {oddFellowsStats.map(({ label, value }) => (
                  <div key={label}>
                    <dt className="text-xs text-white/50">{label}</dt>
                    <dd className="mt-0.5 text-sm font-semibold text-white">{value}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-6 text-xs leading-relaxed text-white/50">
                Located directly across from Butterworth Flats. Retail leases include annual
                rent escalations and renewal options.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
            <span className="font-semibold text-[#0d1b3e]">
              Two fully restored historic assets in one of Virginia&apos;s fastest-growing cities —
            </span>{" "}
            delivering strong cash flow, quarterly distributions, and long-term appreciation.
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
