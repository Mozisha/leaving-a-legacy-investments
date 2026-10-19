import type { Metadata } from "next";
import { PortfolioCards } from "@/components/sections/portfolio-cards";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Take a look at some of the properties that Leaving a Legacy Investments have acquired.",
};

export default function PortfolioPage() {
  return (
    <>
      {/* ── Page hero — same pattern as About ── */}
      <section className="relative flex min-h-[380px] w-full items-center justify-center overflow-hidden sm:min-h-[420px]">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/houses/house-4.webp')" }}
          aria-hidden="true"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gray-900/65" aria-hidden="true" />

        {/* Text */}
        <div className="relative z-10 px-6 py-20 text-center">
          <h1 className="text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl lg:text-7xl">
            Our Portfolio
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
            Take a look below at some of the properties that Leaving a Legacy
            Investments have acquired. Please feel free to reach out to us with
            any questions you may have.
          </p>
        </div>
      </section>

      {/* ── Property cards grid ── */}
      <PortfolioCards />
    </>
  );
}
