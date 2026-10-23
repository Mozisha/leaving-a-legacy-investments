"use client";

import { useState } from "react";

const stats = [
  { value: "$25K", label: "Min. Investment" },
  { value: "7%+", label: "Preferred Return" },
  { value: "3–7 yr", label: "Hold Period" },
];

export function NewsletterSection() {
  const [pending, setPending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPending(true);
    setError("");

    const data = new FormData(e.currentTarget);

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: data.get("firstName"),
          lastName: data.get("lastName"),
          email: data.get("email"),
          message: data.get("message"),
        }),
      });

      if (!res.ok) {
        const json = await res.json();
        setError(json.error ?? "Something went wrong. Please try again.");
      } else {
        setSent(true);
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setPending(false);
    }
  }

  return (
    <section className="relative w-full overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-image.webp')" }}
        aria-hidden="true"
      />
      {/* Gradient overlay — darker on left for text legibility */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg, rgba(13,27,62,0.97) 0%, rgba(13,27,62,0.92) 50%, rgba(13,27,62,0.80) 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-16 lg:px-12 lg:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">

          {/* ── Left: copy ── */}
          <div>
            {/* Eyebrow */}
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/80">
              <span className="h-1.5 w-1.5 rounded-full bg-[#4a9eff]" />
              Stay Informed
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Be First to Access
              <span className="block text-[#4a9eff]">New Opportunities</span>
            </h2>

            <p className="mt-5 text-sm leading-relaxed text-white/75 sm:text-base lg:max-w-md">
              At Leaving a Legacy Investments, we are dedicated to expanding
              our portfolio with top-tier properties that deliver exceptional
              returns. Don&apos;t miss out when new deals become available.
            </p>

            {/* Stats row */}
            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
              {stats.map(({ value, label }) => (
                <div key={label}>
                  <p className="text-2xl font-extrabold text-white sm:text-3xl">{value}</p>
                  <p className="mt-0.5 text-xs text-white/55">{label}</p>
                </div>
              ))}
            </div>

            {/* Trust badge */}
            <div className="mt-6 flex items-center gap-2 text-xs text-white/50">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 shrink-0 text-white/40" aria-hidden="true">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              Your information is secure and will never be sold.
            </div>
          </div>

          {/* ── Right: form card ── */}
          <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm ring-1 ring-white/15 sm:p-8">
            {sent ? (
              <div className="flex flex-col items-center py-8 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-400/20">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="mt-4 text-xl font-bold text-white">You&apos;re on the list!</p>
                <p className="mt-2 text-sm text-white/65">
                  We&apos;ll notify you the moment a new opportunity becomes available.
                </p>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white">Get Early Access</h3>
                  <p className="mt-1 text-sm text-white/60">
                    Join investors already building generational wealth.
                  </p>
                </div>

                <form
                  onSubmit={handleSubmit}
                  method="post"
                  className="flex flex-col gap-4"
                  aria-label="Investment opportunities newsletter signup"
                >
                  {/* First / Last name */}
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="nlFirstName" className="text-xs font-semibold text-white/70">
                        First Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="nlFirstName"
                        name="firstName"
                        type="text"
                        placeholder="John"
                        required
                        className="rounded-lg border border-white/15 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/35 focus:border-[#4a9eff] focus:bg-white/15 focus:outline-none focus:ring-1 focus:ring-[#4a9eff]"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="nlLastName" className="text-xs font-semibold text-white/70">
                        Last Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="nlLastName"
                        name="lastName"
                        type="text"
                        placeholder="Doe"
                        required
                        className="rounded-lg border border-white/15 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/35 focus:border-[#4a9eff] focus:bg-white/15 focus:outline-none focus:ring-1 focus:ring-[#4a9eff]"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="nlEmail" className="text-xs font-semibold text-white/70">
                      Email <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="nlEmail"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                      className="rounded-lg border border-white/15 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/35 focus:border-[#4a9eff] focus:bg-white/15 focus:outline-none focus:ring-1 focus:ring-[#4a9eff]"
                    />
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="nlMessage" className="text-xs font-semibold text-white/70">
                      Message <span className="text-white/30">(optional)</span>
                    </label>
                    <textarea
                      id="nlMessage"
                      name="message"
                      placeholder="Tell us about your investment goals…"
                      rows={3}
                      className="resize-none rounded-lg border border-white/15 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/35 focus:border-[#4a9eff] focus:bg-white/15 focus:outline-none focus:ring-1 focus:ring-[#4a9eff]"
                    />
                  </div>

                  {error && (
                    <p className="text-xs text-red-400">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={pending}
                    className="mt-1 w-full rounded-lg bg-[#1a4fa0] py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:bg-[#1a4fa0]/90 hover:shadow-[#1a4fa0]/30 disabled:opacity-60"
                  >
                    {pending ? "Submitting…" : "Get Early Access →"}
                  </button>
                </form>
              </>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
