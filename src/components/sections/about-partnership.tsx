import Image from "next/image";

const pillars = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Empowering Investors",
    body: "We instill values of stewardship and financial literacy, providing a safety net through opportunities in commercial multi-family properties and hotels.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7" aria-hidden="true">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: "Passive & Active Returns",
    body: "Whether you seek consistent monthly cash flow or long-term value growth, we help you build wealth through diversified investment strategies.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7" aria-hidden="true">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: "Premium Properties",
    body: "We focus on upscale apartment complexes and innovative hotel projects — premium assets that deliver strong appreciation and reliable returns.",
  },
];

export function AboutPartnership() {
  return (
    <section className="overflow-hidden bg-white">

      {/* ── Top band: headline + intro ── */}
      <div className="bg-[#0d1b3e] px-6 py-16 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-4xl text-center">
          {/* Eyebrow */}
          <span className="inline-block rounded-full border border-white/20 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-white/60">
            Our Mission
          </span>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Fostering Strategic Partnerships
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/75 sm:text-lg">
            Leaving a Legacy Investments is dedicated to creating long-term
            wealth through strategic investments in premium commercial
            properties, including upscale apartment complexes and innovative
            hotel projects.
          </p>
        </div>
      </div>

      {/* ── Split content: image left, text right ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2">

        {/* Image */}
        <div className="relative min-h-[320px] lg:min-h-[480px]">
          <Image
            src="/houses/house-3.webp"
            alt="Multi-family investment property"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          {/* Diagonal navy slice overlay on the right edge — desktop only */}
          <div
            className="absolute inset-y-0 right-0 hidden w-24 lg:block"
            style={{
              background: "linear-gradient(to bottom right, transparent 50%, white 50%)",
            }}
            aria-hidden="true"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col justify-center gap-8 px-8 py-14 lg:px-14 lg:py-16">
          <div>
            <h3 className="text-xl font-bold text-[#0d1b3e] sm:text-2xl">
              Your Trusted Partner in Profitable Ventures
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
              Leaving a Legacy Investments continues to empower current and
              future investors by instilling values of stewardship, financial
              literacy and providing a safety net through investment
              opportunities in commercial multi-family properties and hotels.
              We will be your trusted partner in achieving profitable ventures!
            </p>
          </div>

          <div className="h-px w-16 bg-[#1a4fa0]" />

          <div>
            <h3 className="text-xl font-bold text-[#0d1b3e] sm:text-2xl">
              Bridging Investors &amp; Opportunity
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
              Bridging the gaps between investors and profitable investments is
              what we strive to achieve. Building wealth through passive and
              active investments, consistent monthly cash flow or long-term
              value growth are all within your reach. Let us help you
              strategically diversify your financial portfolio.
            </p>
          </div>
        </div>
      </div>

      {/* ── Three-pillar icon grid ── */}
      <div className="bg-gray-50 px-6 py-16 lg:px-12 lg:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-3">
          {pillars.map(({ icon, title, body }) => (
            <div
              key={title}
              className="group flex flex-col items-center gap-4 rounded-lg border border-gray-100 bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0d1b3e] text-white transition-colors group-hover:bg-[#1a4fa0]">
                {icon}
              </div>
              <h3 className="text-base font-bold text-gray-900 sm:text-lg">{title}</h3>
              <p className="text-sm leading-relaxed text-gray-500">{body}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
