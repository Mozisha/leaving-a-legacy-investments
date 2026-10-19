"use client";

import { useState, useEffect, useRef } from "react";

/* ── Modal ─────────────────────────────────────────────── */
function EbookModal({ onClose }: { onClose: () => void }) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);

  // Trap focus & close on Escape
  useEffect(() => {
    firstInputRef.current?.focus();
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    // Prevent body scroll while modal is open
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  function handleOverlayClick(e: React.MouseEvent<HTMLDivElement>) {
    if (e.target === overlayRef.current) onClose();
  }

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="relative w-full max-w-xl rounded-lg bg-white px-8 py-10 shadow-2xl sm:px-12">
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute right-4 top-4 text-gray-400 transition-colors hover:text-gray-700"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>

        {/* Heading */}
        <h2 id="modal-title" className="text-center text-2xl font-bold text-[#1a4fa0] sm:text-3xl">
          Get your free ebook!
        </h2>
        <p className="mx-auto mt-3 max-w-sm text-center text-sm leading-relaxed text-gray-500">
          Input your details below to get instant access to your free ebook and
          stay updated on future insights.
        </p>

        {/* Form — TODO: connect to backend / email service */}
        <form
          className="mt-7 flex flex-col gap-4"
          onSubmit={(e) => e.preventDefault()}
          aria-label="Ebook download form"
        >
          <input
            ref={firstInputRef}
            type="text"
            name="firstName"
            placeholder="Enter your first name"
            required
            className="w-full rounded border border-gray-300 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-[#1a4fa0] focus:outline-none focus:ring-1 focus:ring-[#1a4fa0]"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Enter your last name"
            required
            className="w-full rounded border border-gray-300 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-[#1a4fa0] focus:outline-none focus:ring-1 focus:ring-[#1a4fa0]"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            required
            className="w-full rounded border border-gray-300 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-[#1a4fa0] focus:outline-none focus:ring-1 focus:ring-[#1a4fa0]"
          />

          <button
            type="submit"
            className="mt-1 w-full rounded bg-[#1a4fa0] py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Submit and download
          </button>
        </form>

        <p className="mt-4 text-center text-xs text-gray-400">
          We will not spam, rent, or sell your information. We respect your privacy.
        </p>
      </div>
    </div>
  );
}

/* ── Hero ─────────────────────────────────────────────── */
export function InvestingGuideHero() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="relative flex min-h-[480px] w-full items-center overflow-hidden sm:min-h-[520px]">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/houses/ridge-1.webp')" }}
          aria-hidden="true"
        />
        {/* Subtle dark overlay so text pops */}
        <div className="absolute inset-0 bg-gray-900/55" aria-hidden="true" />

        {/* Content — left-aligned matching screenshot */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20 lg:px-12">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-extrabold uppercase leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              The Beginner&apos;s Guide to Investing as a Limited Partner
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base">
              Are you interested in investing as a limited partner (LP), but
              need clarification on the role of the LP? If so this guide can
              be a tool for your investment success!
            </p>
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="mt-8 inline-flex items-center justify-center rounded bg-[#1a4fa0] px-7 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Download pdf
            </button>
          </div>
        </div>
      </section>

      {modalOpen && <EbookModal onClose={() => setModalOpen(false)} />}
    </>
  );
}
