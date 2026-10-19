import type { Metadata } from "next";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Investors Portal",
  description: "Secure investors portal for Leaving a Legacy Investments clients.",
};

export default function InvestorsPortalPage() {
  return (
    <Container className="py-24">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-4xl font-semibold tracking-tight">Investors Portal</h1>
        <p className="mt-6 text-lg text-foreground/70">
          This page will be built out once the Investors Portal screenshot is provided.
        </p>
      </div>
    </Container>
  );
}
