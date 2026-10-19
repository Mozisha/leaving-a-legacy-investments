const benefits = [
  {
    title: "Consistent Revenue Growth",
    body: "Leaving a Legacy Investments is committed to ensuring that rental income from our properties aligns with inflation and market trends. Through diligent oversight and optimization of property management costs, we strive to maximize returns for our investors.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7" aria-hidden="true">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
  },
  {
    title: "Attractive Tax Advantages",
    body: "Real estate investments offer numerous tax advantages. At Leaving a Legacy Investments, we detail the potential tax benefits of each opportunity in the Private Placement Memorandum or prospectus provided for every investment. However, the specific tax advantages you may receive will depend on your individual financial situation.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7" aria-hidden="true">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: "Minimized Risk",
    body: "Compared to other investment options, real estate is widely regarded as a stable, long-term investment. Housing remains a fundamental need, ensuring consistent demand. While economic fluctuations may impact annual appreciation rates, multi-family property investments reliably provide cash flow and long-term capital growth.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Variety of Investment Options",
    body: "A well-diversified portfolio is essential for mitigating risk, and real estate plays a crucial role in achieving that balance. By partnering with Leaving a Legacy Investments, you gain access to high-value multi-family properties, benefiting from their growth potential while enjoying a lower barrier to entry.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7" aria-hidden="true">
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
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">

        {/* ── Top tagline ── */}
        <p className="text-center text-lg font-medium italic text-[#1a4fa0] lg:text-xl">
          Providing investors with opportunities to preserve and grow their wealth.
        </p>

        {/* ── Two-column intro text ── */}
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
          <p className="text-gray-700 leading-relaxed">
            Leaving a Legacy Investments continues to empower current and future investors
            by instilling values of stewardship, financial literacy and providing a safety
            net through investment opportunities in commercial multi-family properties and
            hotels. We will be your trusted partner in achieving profitable ventures!
          </p>
          <p className="text-gray-700 leading-relaxed">
            Bridging the gaps between investors and profitable investments is what we strive
            to achieve. Building wealth through passive and active investments, consistent
            monthly cash flow or long-term value growth are all within your reach. Let us
            help you strategically diversify your financial portfolio.
          </p>
        </div>

        {/* ── Divider ── */}
        <div className="my-12 border-t border-gray-200" />

        {/* ── Navy highlight band ── */}
        <div className="rounded-sm bg-[#0d1b3e] px-8 py-8 text-center md:px-16">
          <p className="text-base leading-relaxed text-white/90 md:text-lg">
            While generating monthly cash flow and long-term capital appreciation,
            multi-family and hotel investing will allow investors to build generational
            wealth and to diversify their investment portfolios.
          </p>
        </div>

        {/* ── Four benefits grid ── */}
        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map(({ title, body, icon }) => (
            <div
              key={title}
              className="flex flex-col gap-4 rounded-sm border border-gray-100 bg-gray-50 p-6 shadow-sm"
            >
              {/* Icon circle */}
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0d1b3e] text-white">
                {icon}
              </div>
              <h3 className="text-base font-semibold text-gray-900">{title}</h3>
              <p className="text-sm leading-relaxed text-gray-600">{body}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
