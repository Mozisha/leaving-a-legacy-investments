import type { Metadata } from "next";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Webinars",
  description: "Investment webinars hosted by Leaving a Legacy Investments.",
};

export default function WebinarsPage() {
  return (
    <Container className="py-24">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-4xl font-semibold tracking-tight">Webinars</h1>
        <p className="mt-6 text-lg text-foreground/70">
          This page will be built out once the Webinars page screenshot is provided.
        </p>
      </div>
    </Container>
  );
}
