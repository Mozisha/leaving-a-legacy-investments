"use client";

import { useEffect } from "react";

export function CalendlyWidget() {
  useEffect(() => {
    // Inject the Calendly script once on mount
    if (document.querySelector('script[src*="calendly.com"]')) return;
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div
      className="calendly-inline-widget w-full"
      data-url="https://calendly.com/leavingalegacyinvestments/30min"
      style={{ minWidth: "320px", height: "700px" }}
    />
  );
}
