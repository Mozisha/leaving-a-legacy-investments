import Link from "next/link";
import type { Metadata } from "next";
import { HeroForm } from "@/components/sections/hero-form";
import { AboutSection } from "@/components/sections/about-section";
import { NewsletterSection } from "@/components/sections/newsletter-section";
import { PortfolioCarousel } from "@/components/sections/portfolio-carousel";
import { EmailPopup } from "@/components/ui/email-popup";
import { siteConfig } from "@/lib/site";

const BASE = "https://leavingalegacyinvestments.com";

export const metadata: Metadata = {
  title: "Real Estate Syndication & Multifamily Investing | Leaving a Legacy Investments",
  description:
    "Turn prospective properties into lucrative investments. Leaving a Legacy Investments offers accredited investors passive income through commercial multifamily and hotel syndications. Min. investment $25K–$50K.",
  keywords: [
    "real estate syndication",
    "multifamily investing",
    "passive real estate investment",
    "accredited investor real estate",
    "apartment complex syndication",
    "hotel investment fund",
    "generational wealth real estate",
    "leaving a legacy investments",
    "real estate limited partnership",
    "passive income investing",
  ],
  alternates: { canonical: BASE },
  openGraph: {
    title: "Leaving a Legacy Investments | Real Estate Syndication",
    description:
      "Passive investments in commercial multifamily properties and hotels. Build generational wealth with a trusted partner.",
    url: BASE,
    images: [{ url: `${BASE}/hero-image.webp`, width: 1200, height: 630, alt: "Leaving a Legacy Investments Hero" }],
  },
};

/* ── Social icon SVGs ─────────────────────────────────────── */
function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
      <path d="M22 12a10 10 0 1 0-11.563 9.876v-6.988H7.898V12h2.539V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.888h-2.33V21.876A10.003 10.003 0 0 0 22 12Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.427.403a4.9 4.9 0 0 1 1.772 1.153 4.9 4.9 0 0 1 1.153 1.772c.163.456.35 1.257.403 2.427.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.403 2.427a4.9 4.9 0 0 1-1.153 1.772 4.9 4.9 0 0 1-1.772 1.153c-.456.163-1.257.35-2.427.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.427-.403a4.9 4.9 0 0 1-1.772-1.153A4.9 4.9 0 0 1 1.633 19.277c-.163-.456-.35-1.257-.403-2.427C1.175 15.584 1.163 15.204 1.163 12s.012-3.584.07-4.85c.054-1.17.24-1.97.403-2.427A4.9 4.9 0 0 1 2.79 2.951 4.9 4.9 0 0 1 4.562 1.8C5.018 1.636 5.819 1.45 6.989 1.396 8.255 1.338 8.635 1.326 11.839 1.326h.161Zm0 1.838c-3.142 0-3.516.011-4.769.068-1.086.05-1.676.228-2.07.38a3.06 3.06 0 0 0-1.137.74 3.06 3.06 0 0 0-.74 1.137c-.152.394-.33.984-.38 2.07C2.836 9.484 2.826 9.858 2.826 12s.01 2.516.068 3.769c.05 1.086.228 1.676.38 2.07.178.464.412.852.74 1.137.285.328.673.562 1.137.74.394.152.984.33 2.07.38C8.484 21.164 8.858 21.174 12 21.174s3.516-.01 4.769-.068c1.086-.05 1.676-.228 2.07-.38a3.06 3.06 0 0 0 1.137-.74 3.06 3.06 0 0 0 .74-1.137c.152-.394.33-.984.38-2.07.057-1.253.068-1.627.068-3.769s-.011-2.516-.068-3.769c-.05-1.086-.228-1.676-.38-2.07a3.06 3.06 0 0 0-.74-1.137 3.06 3.06 0 0 0-1.137-.74c-.394-.152-.984-.33-2.07-.38C15.516 4.011 15.142 4 12 4Zm0 3.135a4.865 4.865 0 1 1 0 9.73 4.865 4.865 0 0 1 0-9.73Zm0 8.027a3.162 3.162 0 1 0 0-6.324 3.162 3.162 0 0 0 0 6.324Zm6.406-8.226a1.136 1.136 0 1 1-2.272 0 1.136 1.136 0 0 1 2.272 0Z" />
    </svg>
  );
}

// function LinkedInIcon() {
//   return (
//     <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
//       <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
//     </svg>
//   );
// }

const socialLinks = [
  { href: siteConfig.social.facebook, label: "Facebook", Icon: FacebookIcon },
  { href: siteConfig.social.instagram, label: "Instagram", Icon: InstagramIcon },
  // { href: siteConfig.social.linkedin || "#", label: "LinkedIn", Icon: LinkedInIcon },
];

export default function HomePage() {
  return (
    <>
      <section className="relative w-full overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/hero-image.webp')" }} aria-hidden="true" />
        <div className="relative z-10 flex w-full flex-col md:flex-row md:items-stretch">
          <div className="flex w-full flex-col justify-center bg-[#0d1b3e] px-8 py-16 md:w-1/2 md:min-h-[520px] lg:px-16">
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Turning Prospective Properties Into Lucrative Investments
            </h1>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/80 sm:text-base">
              Motivating others through real estate investment insight and opportunities, affording them a chance to build and Leave a Legacy of wealth, stability and security for generations to come.
            </p>
            <Link href="/portfolio" className="mt-8 inline-flex w-fit items-center gap-2 border border-white px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-[#0d1b3e]">
              View Our Portfolio
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
            <div className="mt-8 flex items-center gap-3 md:hidden">
              {socialLinks.map(({ href, label, Icon }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white hover:text-[#0d1b3e]">
                  <Icon />
                </a>
              ))}
            </div>
          </div>
          <div className="relative flex w-full items-center justify-center bg-[#0d1b3e]/50 px-8 py-16 md:w-1/2 md:min-h-[520px] md:bg-transparent lg:px-12">
            <div className="w-full max-w-md"><HeroForm /></div>
            <div className="absolute right-2 top-1/2 hidden -translate-y-1/2 flex-col gap-3 lg:flex lg:right-3">
              {socialLinks.map(({ href, label, Icon }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-900/80 text-white transition-colors hover:bg-[#1a4fa0]">
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
      <AboutSection />
      <NewsletterSection />
      <PortfolioCarousel />
      <EmailPopup />
    </>
  );
}
