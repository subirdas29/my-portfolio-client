import type { Metadata } from "next";
import UsesPage from "@/components/modules/Uses/UsesPage";

export const metadata: Metadata = {
  title: "Uses | Subir Das — My Developer Setup",
  description: "Hardware, software, tools and services I use daily for development, design, and productivity.",
  openGraph: {
    title: "Uses | Subir Das — My Developer Setup",
    description: "Hardware, software, tools and services used daily for development.",
    url: "https://subirdas.com/uses",
    images: ["https://subirdas.com/og-image.jpg"],
  },
  alternates: { canonical: "https://subirdas.com/uses" },
};

export default function Page() {
  return <UsesPage />;
}
