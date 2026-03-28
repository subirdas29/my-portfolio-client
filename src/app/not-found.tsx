"use client";
import React from "react";
import Link from "next/link";
import { Home, ArrowLeft, Ghost, Sparkles } from "lucide-react";
import GradientButton from "@/utility/GradientButton";

const NotFound = () => {
  return (
    <section className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-[#F9FAFB] via-[#fff8e1] to-[#faffdd] dark:from-[#0a0219] dark:via-[#120825] dark:to-[#1b0c2d] text-gray-900 dark:text-white overflow-hidden transition-colors duration-500">
      {/* CSS-only animated background */}
      <div className="absolute inset-0 overflow-hidden" suppressHydrationWarning>
        {[...Array(8)].map((_, i) => (
          <div key={i} className={`css-particle css-particle--${i + 1 > 6 ? (i + 1 - 6) : i + 1}`} suppressHydrationWarning />
        ))}

        <div className="css-orb css-orb--amber w-[500px] h-[500px] -top-32 -right-32" suppressHydrationWarning />
        <div className="css-orb css-orb--purple w-[400px] h-[400px] -bottom-32 -left-32" suppressHydrationWarning />
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="relative z-10 text-center px-6">
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 dark:bg-yellow-400/10 border border-yellow-500/30 dark:border-yellow-400/20 mb-8 backdrop-blur-sm"
        >
          <Sparkles className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
          <span className="text-sm font-medium text-yellow-700 dark:text-yellow-300">
            Error 404: Page Not Found
          </span>
        </div>

        {/* Floating ghost - CSS animation */}
        <div
          className="flex justify-center mb-10"
        >
          <div className="relative p-12 rounded-full bg-gradient-to-br from-yellow-400/20 to-amber-500/20 dark:from-yellow-500/10 dark:to-amber-600/10 border border-yellow-500/30 backdrop-blur-md shadow-2xl shadow-yellow-500/10">
            <Ghost
              size={100}
              className="text-amber-500 dark:text-yellow-400"
            />
            <div
              className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-black px-4 py-1.5 rounded-full shadow-lg css-hero-badge-pulse"
            >
              LOST
            </div>
          </div>
        </div>

        <h1
          className="text-6xl md:text-8xl font-black tracking-tight mb-6"
        >
          Oops!{" "}
          <span className="bg-gradient-to-r from-yellow-500 to-orange-500 dark:from-yellow-400 dark:to-amber-500 text-transparent bg-clip-text">
            Wrong Path
          </span>
        </h1>

        <p
          className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto mb-12 text-lg md:text-xl font-medium leading-relaxed"
        >
          The page you are looking for doesn&apos;t exist or has been moved to
          another galaxy. Let&apos;s get you back on track.
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <Link href="/">
            <GradientButton className="px-10 py-4 flex items-center gap-2 shadow-2xl shadow-yellow-500/20">
              <Home size={20} />
              Return Home
            </GradientButton>
          </Link>

          <button
            onClick={() => window.history.back()}
            className="px-8 py-4 border-2 border-yellow-500/50 dark:border-yellow-400/30 hover:border-yellow-500 dark:hover:border-yellow-400/50 text-yellow-700 dark:text-yellow-300 font-bold rounded-xl transition-all duration-300 inline-flex items-center gap-2 backdrop-blur-sm hover:bg-yellow-500/10"
          >
            <ArrowLeft size={20} />
            Go Previous
          </button>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F9FAFB] dark:from-[#0a0219] to-transparent" />
    </section>
  );
};

export default NotFound;
