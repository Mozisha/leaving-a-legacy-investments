import Image from "next/image";
import { siteConfig } from "@/lib/site";

// Computed once at build time — stable across renders.
const CURRENT_YEAR = new Date().getFullYear();

const DISCLAIMER = `Investing carries inherent risks, including the potential loss of principal. Past performance is not indicative of future results, and any historical returns, projected returns, or probability forecasts may not reflect actual future outcomes. While we rely on third-party data that we believe to be reliable, we cannot guarantee the accuracy or completeness of this information. Leaving a Legacy Investments and its affiliates do not provide tax advice and do not make any representations regarding the tax consequences of the opportunities described.`;

export function Footer() {
  const year = CURRENT_YEAR;

  return (
    <footer className="bg-[#0d1b3e] text-white">
      {/* Logo row */}
      <div className="mx-auto w-full max-w-7xl px-6 pt-10 lg:px-12">
        <Image
          src="/lali-logo.webp"
          alt="Leaving a Legacy Investments"
          width={160}
          height={64}
          className="h-16 w-auto object-contain"
        />
      </div>

      {/* Main content */}
      <div className="mx-auto w-full max-w-7xl px-6 py-10 lg:px-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {/* Left — company name + disclaimer */}
          <div className="lg:col-span-2">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/60">
              Leaving a Legacy Investments
            </h3>
            <p className="text-sm leading-7 text-white/75">{DISCLAIMER}</p>
          </div>

          {/* Right — contact */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/60">
              Contact Information
            </h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li>
                <span className="font-medium text-white">Phone: </span>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-white transition-colors break-all"
                >
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto w-full max-w-7xl px-6 py-4 lg:px-12">
          <p className="text-xs text-white/40">
            © {year} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
