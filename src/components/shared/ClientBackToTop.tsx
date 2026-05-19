"use client";
import dynamic from "next/dynamic";

const BackToTop = dynamic(() => import("./BackToTop"), { ssr: false });

export default function ClientBackToTop() {
  return <BackToTop />;
}
