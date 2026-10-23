import Link from "next/link";

const benefits = [
  {
    title: "Consistent Revenue Growth",
    body: "Rental income aligned with inflation and market trends, with diligent oversight to maximize returns for every investor.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
  },
  {
    title: "Attractive Tax Advantages",
    body: "Every opportunity details potential tax benefits in its PPM. Our investments are structured to help you keep more of what you earn.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: "Minimized Risk",
    body: "Multi-family real estate is one of the most stable long-term asset classes — housing demand ensures consistent cash flow regardless of market cycles.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Variety of Investment Options",
    body: "Access high-value multi-family properties and hotels with a lower barrier to entry — diversify your portfolio without going it alone.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
];

export function AboutSection() {
  return (
    <section className="overflow-hidden bg-white">

      {/* ── Intro band ── */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12 lg:py-20">

        {/* Eyebrow + headline */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-[#ddeaf7] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#1a4fa0]">
            Our Mission
          </span>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-[#0d1b3e] sm:text-4xl">
            Providing investors with opportunities to preserve and grow their wealth.
          </h2>
        </div>

        {/* Two-column copy */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-10">
          <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
            Leaving a Legacy Investments continues to empower current and future
            investors by instilling values of stewardship, financial literacy and
            providing a safety net through investment opportunities in commercial
            multi-family properties and hotels. We will be your trusted partner
            in achieving profitable ventures!
          </p>
          <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
            Bridging the gaps between investors and profitable investments is what
            we strive to achieve. Building wealth through passive and active
            investments, consistent monthly cash flow or long-term value growth
            are all within your reach. Let us help you strategically diversify
            your financial portfolio.
          </p>
        </div>
      </div>

      {/* ── Full-width navy highlight band ── */}
      <div className="bg-[#0d1b3e] px-6 py-12 lg:px-12 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between md:gap-12">
            <p className="text-base leading-relaxed text-white/85 sm:text-lg md:max-w-2xl">
              While generating monthly cash flow and long-term capital appreciation,
              multi-family and hotel investing allows investors to build generational
              wealth and diversify their investment portfolios.
            </p>
            <Link
              href="/portfolio"
              className="shrink-0 rounded-lg border border-white/30 bg-white/10 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-[#0d1b3e]"
            >
              View Our Portfolio →
            </Link>
          </div>
        </div>
      </div>

      {/* ── Benefits grid ── */}
      <div className="bg-gray-50 px-6 py-16 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-7xl">

          {/* Section label */}
          <div className="mb-10 text-center">
            <h3 className="text-2xl font-bold text-[#0d1b3e] sm:text-3xl">
              Why Invest With Us
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-sm text-gray-500 sm:text-base">
              Built on transparency, stewardship, and a commitment to helping
              every partner build lasting wealth.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map(({ title, body, icon }) => (
              <div
                key={title}
                className="group flex flex-col gap-4 rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0d1b3e] text-white transition-colors group-hover:bg-[#1a4fa0]">
                  {icon}
                </div>
                {/* Blue accent line */}
                <div className="h-0.5 w-8 rounded-full bg-[#1a4fa0] opacity-0 transition-opacity group-hover:opacity-100" />
                <h4 className="text-sm font-bold text-gray-900 sm:text-base">{title}</h4>
                <p className="text-sm leading-relaxed text-gray-500">{body}</p>
              </div>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
}
