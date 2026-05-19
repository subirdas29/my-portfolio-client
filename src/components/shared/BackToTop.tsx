"use client";
import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="fixed bottom-24 right-6 z-50 p-3 rounded-full bg-linear-to-br from-yellow-500 to-amber-500 text-white shadow-lg shadow-amber-500/30 hover:scale-110 transition-transform duration-200"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
