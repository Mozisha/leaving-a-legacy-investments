"use client";

import { useState } from "react";

export function HeroForm() {
  const [pending, setPending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPending(true);
    setError("");

    const data = new FormData(e.currentTarget);
    const fullName = (data.get("name") as string).trim();
    const [firstName, ...rest] = fullName.split(" ");
    const lastName = rest.join(" ");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
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
    <div className="w-full rounded-sm bg-white/90 p-6 shadow-xl sm:p-8">
      <h2 className="text-center text-xl font-bold text-gray-900 sm:text-2xl">
        Start Investing Today
      </h2>
      <p className="mt-1 text-center text-sm text-gray-500">
        Get your questions answered
      </p>
      <p className="mt-0.5 text-center text-sm font-semibold text-gray-700">
        No obligations, no commitment
      </p>

      {sent ? (
        <p className="mt-6 rounded bg-green-50 px-4 py-3 text-center text-sm font-medium text-green-700">
          Thank you! We&apos;ll be in touch soon.
        </p>
      ) : (
        <form onSubmit={handleSubmit} method="post" className="mt-5 flex flex-col gap-3">
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="w-full rounded border border-gray-300 px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-[#1a4fa0] focus:outline-none focus:ring-1 focus:ring-[#1a4fa0]"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full rounded border border-gray-300 px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-[#1a4fa0] focus:outline-none focus:ring-1 focus:ring-[#1a4fa0]"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows={4}
            className="w-full resize-none rounded border border-gray-300 px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-[#1a4fa0] focus:outline-none focus:ring-1 focus:ring-[#1a4fa0]"
          />
          {error && (
            <p className="text-xs text-red-600">{error}</p>
          )}
          <button
            type="submit"
            disabled={pending}
            className="mt-1 w-full rounded bg-[#1a4fa0] py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
          >
            {pending ? "Sending…" : "Get Started"}
          </button>
        </form>
      )}
    </div>
  );
}
