"use client";
import { useEffect } from "react";
import { Calendar } from "lucide-react";

export default function CalendlyEmbed() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full">
      <div className="flex items-center gap-2 mb-4">
        <Calendar className="w-5 h-5 text-amber-500" />
        <h3 className="font-black text-slate-900 dark:text-white">Book a Free Call</h3>
      </div>
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
        Prefer to talk? Schedule a free 30-min discovery call.
      </p>
      <div
        className="calendly-inline-widget rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 h-[500px] md:h-[630px]"
        data-url="https://calendly.com/subirdas1045/30min"
        style={{ minWidth: "100%" }}
      />
    </div>
  );
}
