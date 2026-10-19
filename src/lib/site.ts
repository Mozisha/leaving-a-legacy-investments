/**
 * Central site configuration.
 * Update these values to reflect the business details, navigation, and contact info.
 */

export const siteConfig = {
  name: "Leaving a Legacy Investments",
  shortName: "Legacy Investments",
  url: "https://leavingalegacyinvestments.com",
  description:
    "Building, protecting, and growing lasting wealth through personalized investment strategies.",
  email: "leavingalegacyinvestments@gmail.com",
  phone: "+1(703) 646-1954",
  address: "",
  social: {
    facebook: "https://www.facebook.com/share/19uxYHNe3H/",
    instagram: "https://www.instagram.com/leavingalegacyinvestments?igsh=MXFpY2lhb2RlbDEzdg==",
    linkedin: "",
    twitter: "",
  },
} as const;

export type NavItem =
  | { label: string; href: string; children?: undefined }
  | { label: string; href?: undefined; children: { label: string; href: string }[] };

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "FAQ's", href: "/faqs" },
  { label: "Contact Us", href: "/contact" },
  {
    label: "Resources",
    children: [
      { label: "Investing Guide", href: "/resources/investing-guide" },
      { label: "Webinars", href: "/resources/webinars" },
    ],
  },
  { label: "Investors Portal", href: "/investors-portal" },
];
