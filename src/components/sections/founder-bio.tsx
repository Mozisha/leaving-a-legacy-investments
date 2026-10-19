import Image from "next/image";

export function FounderBio() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">

        {/* Section label */}
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-gray-400">
          Founder &amp; Owner — Leaving a Legacy Investments
        </p>

        {/* Two-column layout: photo left, bio right */}
        <div className="mt-12 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">

          {/* Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative h-80 w-80 shrink-0 sm:h-96 sm:w-96">
              {/* Gold gradient ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#c8a84b] via-[#e8c96d] to-[#c8a84b] p-[6px]">
                <div className="h-full w-full rounded-full bg-white p-[4px]">
                  <div className="relative h-full w-full overflow-hidden rounded-full bg-[#d4a84b]">
                    <Image
                      src="/phya.webp"
                      alt="T. Phya Webb — Founder & Owner, Leaving a Legacy Investments"
                      fill
                      sizes="(max-width: 640px) 320px, 384px"
                      className="object-cover object-top"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bio text */}
          <div>
            {/* Decorative navy bar */}
            <div className="mb-6 h-1 w-16 rounded-full bg-[#1a4fa0]" />

            <h2 className="text-3xl font-bold leading-tight text-[#0d1b3e] sm:text-4xl">
              T. Phya Webb
            </h2>
            <p className="mt-1 text-base font-medium text-[#1a4fa0]">
              Founder &amp; Owner, Leaving a Legacy Investments
            </p>

            <div className="mt-6 space-y-4 text-sm leading-relaxed text-gray-600 sm:text-base">
              <p>
                Phya is a Foreign Service Officer with over 20 years of
                Information Technology and management experience. While
                securing a travel career in IT, she completed a Global Masters
                in Business Administration at Howard University.
              </p>
              <p>
                After being introduced to real estate investing by a
                Master&apos;s program colleague, she decided to expand her
                investment portfolio and take the next step in securing her
                future. After founding Leaving A Legacy Investments, Phya
                realized her passion for helping others find opportunities to
                make their money make money for them. Her focus: capital
                raising for profitable investments.
              </p>
              <p>
                To ensure her business remains a success, she focuses on
                sharing her journey and educating others on racing towards true
                financial freedom. To accomplish this, she has vastly expanded
                her professional network and continues to focus on building
                strong partnerships with investors, lenders, and other real
                estate professionals. This network has afforded her the
                opportunity to grow a diverse portfolio offering financial
                benefits to investment partners and to her community as well.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
