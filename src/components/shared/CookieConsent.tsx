"use client";
import { useState, useEffect } from "react";
import { Cookie, X } from "lucide-react";
import Link from "next/link";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-sm z-[9997] bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-2xl shadow-2xl p-4 animate-in slide-in-from-bottom-4 duration-300">
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-xl bg-amber-500/10 shrink-0">
          <Cookie className="w-4 h-4 text-amber-500" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-bold text-slate-900 dark:text-white mb-1">Cookie Notice</p>
          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
            We use cookies for analytics and to improve your experience.{" "}
            <Link href="/privacy-policy" className="text-amber-500 hover:underline">
              Privacy Policy
            </Link>
          </p>
          <div className="flex gap-2 mt-3">
            <button
              onClick={accept}
              className="flex-1 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-white text-xs font-bold transition-colors"
            >
              Accept
            </button>
            <button
              onClick={decline}
              className="flex-1 py-1.5 rounded-lg border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 text-xs font-bold hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
            >
              Decline
            </button>
          </div>
        </div>
        <button onClick={decline} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 shrink-0">
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
