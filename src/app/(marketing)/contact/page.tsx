import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { HeroForm } from "@/components/sections/hero-form";
import { CalendlyWidget } from "@/components/ui/calendly-widget";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Leaving a Legacy Investments. We'd love to hear from you.",
};

export default function ContactPage() {
  return (
    <>
      {/* ── Page hero — same pattern as About, Portfolio, FAQ's ── */}
      <section className="relative flex min-h-[380px] w-full items-center justify-center overflow-hidden sm:min-h-[420px]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/houses/house-5.webp')" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gray-900/65" aria-hidden="true" />
        <div className="relative z-10 px-6 py-20 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-white/60">
            Contact Us
          </p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            We&apos;d Love To Hear From You
          </h1>
        </div>
      </section>

      {/* ── Contact content ── */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">

            {/* Left — info */}
            <div className="flex flex-col justify-center gap-8">
              <div>
                <h2 className="text-2xl font-bold text-[#0d1b3e] sm:text-3xl">
                  Get In Touch
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
                  Whether you&apos;re ready to invest, have questions about
                  our properties, or just want to learn more — we&apos;re here
                  to help. Reach out and a member of our team will be in touch
                  shortly.
                </p>
              </div>

              <div className="space-y-5">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0d1b3e] text-white">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.3h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.84a16 16 0 0 0 5.93 5.93l1.01-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">Phone</p>
                    <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="mt-0.5 text-base font-medium text-[#0d1b3e] hover:text-[#1a4fa0] transition-colors">
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0d1b3e] text-white">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
                      <rect width="20" height="16" x="2" y="4" rx="2"/>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">Email</p>
                    <a href={`mailto:${siteConfig.email}`} className="mt-0.5 break-all text-base font-medium text-[#0d1b3e] hover:text-[#1a4fa0] transition-colors">
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                {/* Social */}
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0d1b3e] text-white">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
                      <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
                      <path d="m8.59 13.51 6.83 3.98M15.41 6.51l-6.82 3.98"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">Follow Us</p>
                    <div className="mt-1.5 flex gap-3">
                      <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-[#1a4fa0] hover:underline">Facebook</a>
                      <span className="text-gray-300">·</span>
                      <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-[#1a4fa0] hover:underline">Instagram</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div>
              <HeroForm />
            </div>

          </div>
        </div>
      </section>
      {/* ── Calendly scheduler ── */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-12">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-[#0d1b3e] sm:text-3xl">
              Schedule a Meeting
            </h2>
            <p className="mt-3 text-sm text-gray-500 sm:text-base">
              Pick a time that works for you and we&apos;ll connect to discuss
              your investment goals.
            </p>
          </div>
          <CalendlyWidget />
        </div>
      </section>
    </>
  );
}
