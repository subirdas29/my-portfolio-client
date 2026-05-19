import type { Metadata } from "next";
import PrivacyPolicyPage from "@/components/modules/PrivacyPolicy/PrivacyPolicyPage";

export const metadata: Metadata = {
  title: "Privacy Policy | Subir Das",
  description: "Privacy Policy for subirdas.com — how we collect, use, and protect your information.",
  alternates: { canonical: "https://subirdas.com/privacy-policy" },
  robots: { index: false, follow: false },
};

export default function Page() {
  return <PrivacyPolicyPage />;
}
