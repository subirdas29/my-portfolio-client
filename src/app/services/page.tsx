import type { Metadata } from "next";
import dynamic from "next/dynamic";

const ServicesPage = dynamic(() => import("@/components/modules/Services/ServicesPage"));

export const metadata: Metadata = {
  title: "Services | Subir Das — Full-Stack Developer",
  description: "Full-stack web development, AI agent engineering, n8n workflow automation, REST API development, and responsive UI/UX design services by Subir Das.",
  openGraph: {
    title: "Services | Subir Das",
    description: "Full-stack web development, AI agents, automation and more.",
    url: "https://subirdas.com/services",
    images: ["https://subirdas.com/og-image.jpg"],
  },
  alternates: { canonical: "https://subirdas.com/services" },
};

export default function Page() {
  return <ServicesPage />;
}
