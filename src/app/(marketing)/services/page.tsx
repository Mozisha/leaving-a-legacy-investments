import type { Metadata } from "next";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore the investment and wealth management services offered by Leaving a Legacy Investments.",
};

export default function ServicesPage() {
  return (
    <Container className="py-24">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-4xl font-semibold tracking-tight">Our Services</h1>
        <p className="mt-6 text-lg text-foreground/70">
          This page will be built out once the Services page screenshot is
          provided.
        </p>
      </div>
    </Container>
  );
}
