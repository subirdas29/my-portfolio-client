import dynamic from "next/dynamic";
import type { Metadata } from "next";
import { ContactFormSkeleton } from "@/components/shared/Skeletons";

// [PERFORMANCE] Dynamic import with matching contact form skeleton
const ContactSection = dynamic(
  () => import("@/components/modules/home/ContactForm"),
  { loading: () => <ContactFormSkeleton /> }
);

export const metadata: Metadata = {
  title: "Contact Me | Subir Das",
  description:
    "Get in touch with Subir Das for web development projects, collaborations, or any inquiries.",
  openGraph: {
    title: "Contact Me | Subir Das",
    description:
      "Get in touch with Subir Das for web development projects, collaborations, or any inquiries.",
    url: "https://subirdas.com/contact",
    images: ["https://subirdas.com/og-image.jpg"],
  },
  alternates: {
    canonical: "https://subirdas.com/contact",
  },
};

const ContactPage = () => {
  return (
    <div>
      <ContactSection />
    </div>
  );
};

export default ContactPage;
