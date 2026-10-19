import type { Metadata } from "next";
import Image from "next/image";
import { InvestingGuideHero } from "@/components/sections/investing-guide-hero";

export const metadata: Metadata = {
  title: "Investing Guide",
  description:
    "The beginner's guide to investing as a Limited Partner — download your free ebook from Leaving a Legacy Investments.",
};

export default function InvestingGuidePage() {
  return (
    <>
      {/* ── Hero with Download PDF modal ── */}
      <InvestingGuideHero />

      {/* ── Founder bio section ── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">

            {/* Photo */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative h-64 w-64 shrink-0 sm:h-80 sm:w-80">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#c8a84b] via-[#e8c96d] to-[#c8a84b] p-[6px]">
                  <div className="h-full w-full rounded-full bg-white p-[4px]">
                    <div className="relative h-full w-full overflow-hidden rounded-full bg-[#d4a84b]">
                      <Image
                        src="/phya.webp"
                        alt="T. Phya Webb — Founder & Owner, Leaving a Legacy Investments"
                        fill
                        sizes="(max-width: 640px) 256px, 320px"
                        className="object-cover object-top"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div>
              <div className="mb-5 h-1 w-14 rounded-full bg-[#1a4fa0]" />
              <h2 className="text-2xl font-bold text-[#0d1b3e] sm:text-3xl">
                T. Phya Webb
              </h2>
              <p className="mt-1 text-sm font-semibold text-[#1a4fa0]">
                Founder &amp; Owner, Leaving a Legacy Investments
              </p>

              <div className="mt-5 space-y-4 text-sm leading-relaxed text-gray-600 sm:text-base">
                <p>
                  Phya is a Foreign Service Officer with over 20 years of
                  Information Technology and management experience. While
                  securing a travel career in IT, she completed a Global
                  Masters in Business Administration at Howard University.
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
                  sharing her journey and educating others on racing towards
                  true financial freedom. To accomplish this, she has vastly
                  expanded her professional network and continues to focus on
                  building strong partnerships with investors, lenders, and
                  other real estate professionals. This network has afforded
                  her the opportunity to grow a diverse portfolio offering
                  financial benefits to investment partners and to her
                  community as well.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
