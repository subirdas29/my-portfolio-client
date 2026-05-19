import type { Metadata } from "next";
import dynamic from "next/dynamic";

const PricingPage = dynamic(() => import("@/components/modules/Pricing/PricingPage"));

export const metadata: Metadata = {
  title: "Pricing | Subir Das — Transparent Project Rates",
  description: "Simple, transparent pricing for full-stack web development, AI integration, and automation projects. Starter, Professional, and Enterprise packages.",
  openGraph: {
    title: "Pricing | Subir Das",
    description: "Transparent pricing for web development, AI, and automation projects.",
    url: "https://subirdas.com/pricing",
    images: ["https://subirdas.com/og-image.jpg"],
  },
  alternates: { canonical: "https://subirdas.com/pricing" },
};

export default function Page() {
  return <PricingPage />;
}
