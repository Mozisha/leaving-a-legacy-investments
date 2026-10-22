import type { Metadata } from "next";
import { WebinarGrid } from "@/components/sections/webinar-grid";

export const metadata: Metadata = {
  title: "Webinars",
  description:
    "We are constantly updating our resources to provide you with the best tools to continue to grow your real estate education.",
};

export default function WebinarsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative flex min-h-[380px] w-full items-center justify-center overflow-hidden sm:min-h-[420px]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/houses/house-4.webp')" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gray-900/65" aria-hidden="true" />
        <div className="relative z-10 px-6 py-20 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-white/60">
            Resources
          </p>
          <h1 className="mt-3 text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl lg:text-6xl">
            Webinars
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
            We are constantly updating our resources to provide you with the
            best tools to continue to grow your real estate education.
          </p>
        </div>
      </section>

      {/* ── Webinar cards with pagination ── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-bold text-[#0d1b3e] sm:text-3xl">
              Capital Conversations
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-gray-500 sm:text-base">
              Watch our webinar series packed with real estate investment
              insights, strategies, and expert conversations.
            </p>
          </div>
          <WebinarGrid />
        </div>
      </section>
    </>
  );
}
