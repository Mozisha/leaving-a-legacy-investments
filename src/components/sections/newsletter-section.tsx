"use client";

import { useState } from "react";

export function NewsletterSection() {
  const [pending, setPending] = useState(false);
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPending(true);
    // TODO: wire up Mailchimp API / route handler
    await new Promise((r) => setTimeout(r, 800));
    setPending(false);
    setSent(true);
  }

  return (
    <section className="relative w-full overflow-hidden py-20 lg:py-28">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-image.webp')" }}
        aria-hidden="true"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gray-900/75" aria-hidden="true" />

      {/* Content wrapper — full bleed padding */}
      <div className="relative z-10 mx-auto w-full px-6 lg:px-12">

        {/* Heading — spans up to max-w-6xl so it fills the screen on desktop */}
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-5xl">
            Stay informed about new investment opportunities, crucial for making
            strategic decisions in the dynamic real estate market.
          </h2>
          <p className="mt-6 text-center text-sm leading-relaxed text-white/80 sm:text-base">
            Be the first to hear about new investment opportunities as they become
            available. At Leaving a Legacy Investments, we are dedicated to
            expanding our portfolio with top-tier properties that deliver
            exceptional returns.
          </p>
        </div>

        {/* Form — narrower container for readability */}
        <div className="mx-auto mt-10 w-full max-w-3xl">
          {sent ? (
            <div className="rounded bg-white/10 px-6 py-5 text-center text-white">
              <p className="text-lg font-semibold">You&apos;re on the list!</p>
              <p className="mt-1 text-sm text-white/70">
                We&apos;ll reach out as soon as new opportunities are available.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4"
              aria-label="Investment opportunities newsletter signup"
            >
              {/* First / Last name row */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1">
                  <label htmlFor="firstName" className="text-sm font-medium text-white">
                    First Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="John"
                    required
                    className="rounded border border-white/20 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-[#1a4fa0] focus:outline-none focus:ring-1 focus:ring-[#1a4fa0]"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="lastName" className="text-sm font-medium text-white">
                    Last Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Doe"
                    required
                    className="rounded border border-white/20 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-[#1a4fa0] focus:outline-none focus:ring-1 focus:ring-[#1a4fa0]"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1">
                <label htmlFor="nlEmail" className="text-sm font-medium text-white">
                  Email <span className="text-red-400">*</span>
                </label>
                <input
                  id="nlEmail"
                  name="email"
                  type="email"
                  placeholder="Email"
                  required
                  className="rounded border border-white/20 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-[#1a4fa0] focus:outline-none focus:ring-1 focus:ring-[#1a4fa0]"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1">
                <label htmlFor="nlMessage" className="text-sm font-medium text-white">
                  Message
                </label>
                <textarea
                  id="nlMessage"
                  name="message"
                  placeholder="Message"
                  rows={5}
                  className="resize-none rounded border border-white/20 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-[#1a4fa0] focus:outline-none focus:ring-1 focus:ring-[#1a4fa0]"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={pending}
                className="mt-2 w-full rounded bg-[#1a4fa0] py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
              >
                {pending ? "Submitting…" : "Subscribe"}
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
