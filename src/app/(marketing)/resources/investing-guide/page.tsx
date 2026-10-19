import type { Metadata } from "next";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Investing Guide",
  description: "A comprehensive investing guide from Leaving a Legacy Investments.",
};

export default function InvestingGuidePage() {
  return (
    <Container className="py-24">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-4xl font-semibold tracking-tight">Investing Guide</h1>
        <p className="mt-6 text-lg text-foreground/70">
          This page will be built out once the Investing Guide screenshot is provided.
        </p>
      </div>
    </Container>
  );
}
