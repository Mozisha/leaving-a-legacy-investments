"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "lali_popup_dismissed";
const DELAY_MS = 5000;

export function EmailPopup() {
  const [visible, setVisible] = useState(false);
  const [pending, setPending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return;
    const timer = setTimeout(() => setVisible(true), DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  function dismiss() {
    sessionStorage.setItem(STORAGE_KEY, "1");
    setVisible(false);
  }

  useEffect(() => {
    if (!visible) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") dismiss();
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [visible]);

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
        }),
      });

      if (!res.ok) {
        const json = await res.json();
        setError(json.error ?? "Something went wrong. Please try again.");
      } else {
        setSubmitted(true);
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setPending(false);
    }
  }

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="popup-title"
      onClick={(e) => { if (e.target === e.currentTarget) dismiss(); }}
    >
      <div className="relative w-full max-w-lg overflow-hidden rounded-xl bg-white shadow-2xl">
        {/* Top navy banner */}
        <div className="bg-[#0d1b3e] px-8 py-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-white/60">
            Leaving a Legacy Investments
          </p>
          <h2 id="popup-title" className="mt-2 text-2xl font-bold text-white sm:text-3xl">
            Stay Ahead of the Market
          </h2>
          <p className="mt-2 text-sm text-white/75">
            Get exclusive access to new investment opportunities before they go public.
          </p>
        </div>

        {/* Close button */}
        <button
          type="button"
          onClick={dismiss}
          aria-label="Close"
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>

        {/* Form area */}
        <div className="px-8 py-7">
          {submitted ? (
            <div className="py-6 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-50">
                <svg viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <p className="text-lg font-semibold text-[#0d1b3e]">You&apos;re on the list!</p>
              <p className="mt-1 text-sm text-gray-500">We&apos;ll reach out as soon as new opportunities are available.</p>
              <button
                type="button"
                onClick={dismiss}
                className="mt-6 rounded bg-[#1a4fa0] px-8 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4" aria-label="Investment newsletter signup">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="popup-first" className="text-xs font-semibold text-gray-600">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="popup-first"
                    name="firstName"
                    type="text"
                    placeholder="John"
                    required
                    className="rounded-md border border-gray-300 px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-[#1a4fa0] focus:outline-none focus:ring-1 focus:ring-[#1a4fa0]"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="popup-last" className="text-xs font-semibold text-gray-600">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="popup-last"
                    name="lastName"
                    type="text"
                    placeholder="Doe"
                    required
                    className="rounded-md border border-gray-300 px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-[#1a4fa0] focus:outline-none focus:ring-1 focus:ring-[#1a4fa0]"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="popup-email" className="text-xs font-semibold text-gray-600">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  id="popup-email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                  className="rounded-md border border-gray-300 px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-[#1a4fa0] focus:outline-none focus:ring-1 focus:ring-[#1a4fa0]"
                />
              </div>

              {error && <p className="text-xs text-red-600">{error}</p>}

              <button
                type="submit"
                disabled={pending}
                className="mt-1 w-full rounded-md bg-[#1a4fa0] py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
              >
                {pending ? "Submitting…" : "Get Early Access"}
              </button>

              <p className="text-center text-xs text-gray-400">
                * Your information is secure and will not be sold to a third party.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
