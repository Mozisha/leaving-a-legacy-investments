import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Leaving a Legacy Investments.",
};

export default function ContactPage() {
  return (
    <Container className="py-24">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-4xl font-semibold tracking-tight">Contact Us</h1>
        <p className="mt-6 text-lg text-foreground/70">
          This page will be built out once the Contact page screenshot is
          provided.
        </p>
        <div className="mt-8 space-y-2 text-sm text-foreground/70">
          <p>
            <span className="font-medium text-foreground">Email: </span>
            {siteConfig.email}
          </p>
          <p>
            <span className="font-medium text-foreground">Phone: </span>
            {siteConfig.phone}
          </p>
        </div>
      </div>
    </Container>
  );
}
