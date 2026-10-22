import type { Metadata } from "next";
import Link from "next/link";
import { FaqAccordion } from "@/components/sections/faq-accordion";

const BASE = "https://leavingalegacyinvestments.com";

export const metadata: Metadata = {
  title: "FAQ's | Real Estate Syndication Questions Answered",
  description:
    "Answers to the most common questions about investing with Leaving a Legacy Investments — accredited investors, hold periods, preferred returns, PPMs, limited partnerships, minimum investment, and tax benefits.",
  keywords: [
    "real estate syndication FAQ",
    "accredited investor questions",
    "what is a limited partnership real estate",
    "what is a preferred return",
    "what is a PPM real estate",
    "real estate investment hold period",
    "minimum investment real estate syndication",
    "real estate tax benefits investors",
    "passive real estate investing questions",
    "multifamily syndication FAQ",
  ],
  alternates: { canonical: `${BASE}/faqs` },
  openGraph: {
    title: "FAQ's | Leaving a Legacy Investments",
    description: "Common questions about real estate syndication, limited partnerships, returns, and investing with Leaving a Legacy Investments.",
    url: `${BASE}/faqs`,
  },
};

export default function FaqsPage() {
  return (
    <>
      <section className="relative flex min-h-[380px] w-full items-center justify-center overflow-hidden sm:min-h-[420px]">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/houses/house-3.webp')" }} aria-hidden="true" />
        <div className="absolute inset-0 bg-gray-900/65" aria-hidden="true" />
        <div className="relative z-10 px-6 py-20 text-center">
          <h1 className="text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl lg:text-7xl">Frequently Asked Questions</h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
            Here is a list of frequently asked questions we commonly receive. If you have a question that isn&apos;t addressed here, don&apos;t hesitate to reach out to us.
          </p>
        </div>
      </section>
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <FaqAccordion />
          <div className="mx-auto mt-14 max-w-xl rounded-xl bg-[#0d1b3e] px-8 py-8 text-center">
            <p className="text-base font-medium text-white sm:text-lg">Still have questions? We&apos;d love to hear from you.</p>
            <Link href="/contact" className="mt-5 inline-flex items-center justify-center rounded bg-white px-8 py-3 text-sm font-semibold text-[#0d1b3e] transition-opacity hover:opacity-90">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
