import ContactSection from "@/components/modules/home/ContactForm"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Me | Subir Das",
  description: "Get in touch with Subir Das for web development projects, collaborations, or any inquiries.",
  openGraph: {
    title: "Contact Me | Subir Das",
    description: "Get in touch with Subir Das for web development projects, collaborations, or any inquiries.",
    url: "https://subirdas.com/contact",
    images: ["https://subirdas.com/og-image.jpg"],
  },
  alternates: {
    canonical: "https://subirdas.com/contact",
  },
}

const ContactPage = () => {
  return (
    <div>
     <ContactSection />

    </div>
  )
}

export default ContactPage
