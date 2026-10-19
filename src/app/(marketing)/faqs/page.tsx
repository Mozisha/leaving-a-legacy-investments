import type { Metadata } from "next";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "FAQ's",
  description: "Frequently asked questions about Leaving a Legacy Investments.",
};

export default function FaqsPage() {
  return (
    <Container className="py-24">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-4xl font-semibold tracking-tight">FAQ&apos;s</h1>
        <p className="mt-6 text-lg text-foreground/70">
          This page will be built out once the FAQ&apos;s page screenshot is provided.
        </p>
      </div>
    </Container>
  );
}
