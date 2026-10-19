import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://leavingalegacyinvestments.com"),
  title: {
    default: "Leaving a Legacy Investments",
    template: "%s | Leaving a Legacy Investments",
  },
  description:
    "Leaving a Legacy Investments helps individuals and families build, protect, and grow lasting wealth through personalized investment strategies.",
  keywords: [
    "investments",
    "wealth management",
    "financial planning",
    "legacy planning",
    "retirement",
  ],
  openGraph: {
    title: "Leaving a Legacy Investments",
    description:
      "Building, protecting, and growing lasting wealth through personalized investment strategies.",
    url: "https://leavingalegacyinvestments.com",
    siteName: "Leaving a Legacy Investments",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
