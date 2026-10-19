import type { Metadata } from "next";
import { AboutPartnership } from "@/components/sections/about-partnership";
import { TeamSection } from "@/components/sections/team-section";

export const metadata: Metadata = {
  title: "About",
  description:
    "We want to be your partner for active and passive investments in commercial multi-family properties such as apartment complexes and hotels.",
};

export default function AboutPage() {
  return (
    <>
      {/* ── Page hero ── */}
      <section className="relative flex min-h-[380px] w-full items-center justify-center overflow-hidden sm:min-h-[420px]">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/houses/house-2.webp')" }}
          aria-hidden="true"
        />
        {/* Dark overlay so text pops */}
        <div className="absolute inset-0 bg-gray-900/65" aria-hidden="true" />

        {/* Text content */}
        <div className="relative z-10 px-6 py-20 text-center">
          <h1 className="text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl lg:text-7xl">
            About Us
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
            We want to be your partner for active and passive investments in
            commercial multi-family properties such as apartment complexes and
            hotels.
          </p>
        </div>
      </section>

      {/* ── Partnership section ── */}
      <AboutPartnership />

      {/* ── Team section ── */}
      <TeamSection />
    </>
  );
}