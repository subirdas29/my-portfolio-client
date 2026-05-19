import type { Metadata } from "next";
import dynamic from "next/dynamic";

const HireMePage = dynamic(() => import("@/components/modules/HireMe/HireMePage"));

export const metadata: Metadata = {
  title: "Hire Me | Subir Das — Full-Stack Developer",
  description: "Ready to start your next project? Hire Subir Das for full-stack web development, AI integration, and automation. Get a response within 24 hours.",
  openGraph: {
    title: "Hire Me | Subir Das",
    description: "Start your next project with Subir Das. Full-stack web development, AI, and automation.",
    url: "https://subirdas.com/hire-me",
    images: ["https://subirdas.com/og-image.jpg"],
  },
  alternates: { canonical: "https://subirdas.com/hire-me" },
};

export default function Page() {
  return <HireMePage />;
}
