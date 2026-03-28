/* eslint-disable react/no-unescaped-entities */
"use client";
import { useState, useEffect } from "react";
import { Download, Sparkles } from "lucide-react";
import Link from "next/link";
import dp from "../../../../assets/banner/profileImage/Subir_Das.webp";
import Image from "next/image";
import GradientButton from "@/utility/GradientButton";

const roles = [
  "Full Stack Developer",
  "Software Engineer",
  "AI Agent & Automation Engineer",
  "Freelancer",
];

export default function Banner() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < roles[roleIndex].length) {
      const timeout = setTimeout(() => {
        setDisplayedRole((prev) => prev + roles[roleIndex][charIndex]);
        setCharIndex(charIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => {
        setDisplayedRole("");
        setCharIndex(0);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 2000);
    }
  }, [charIndex, roleIndex]);

  return (
    <section className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-[#F9FAFB] via-[#fff8e1] to-[#faffdd] dark:from-[#0a0219] dark:via-[#120825] dark:to-[#1b0c2d] text-gray-900 dark:text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden" suppressHydrationWarning>
        {/* Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <div key={i} className={`css-particle css-particle--${i + 1}`} suppressHydrationWarning />
        ))}

        {/* Glowing Orbs */}
        <div className="css-orb css-orb--amber absolute w-[500px] h-[500px] -top-32 -right-32 rounded-full bg-yellow-400/20 dark:bg-yellow-500/10 blur-[100px]" suppressHydrationWarning />
        <div className="css-orb css-orb--purple absolute w-[400px] h-[400px] -bottom-32 -left-32 rounded-full bg-amber-400/20 dark:bg-purple-500/10 blur-[80px]" suppressHydrationWarning />
        <div className="css-orb css-orb--yellow absolute w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-300/10 dark:bg-yellow-600/5 blur-[120px]" suppressHydrationWarning />
      </div>

      <div className="py-28 px-6 md:px-28 lg:px-40 w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Text Section */}
          <div className="lg:w-1/2 text-center lg:text-left css-banner-slide-left" suppressHydrationWarning>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 dark:bg-yellow-400/10 border border-yellow-500/30 dark:border-yellow-400/20 mb-6 backdrop-blur-sm css-banner-fade-up css-banner-fade-up-1" suppressHydrationWarning>
              <Sparkles className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
              <span className="text-sm font-medium text-yellow-700 dark:text-yellow-300">
                Welcome to my portfolio
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight css-banner-fade-up css-banner-fade-up-2" suppressHydrationWarning>
              Hi, I am{" "}
              <span className="bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500 dark:from-yellow-400 dark:via-yellow-500 dark:to-amber-500 text-transparent bg-clip-text">
                Subir Das
              </span>
            </h1>

            <h2 className="my-5 text-xl sm:text-2xl lg:text-3xl font-semibold css-banner-fade-up css-banner-fade-up-3" suppressHydrationWarning>
              A Passionate{" "}
              <span className="bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500 dark:from-yellow-400 dark:via-yellow-500 dark:to-amber-500 text-transparent bg-clip-text">
                {displayedRole}
                <span className="css-cursor inline-block w-[3px] h-6 lg:h-8 bg-gradient-to-b from-yellow-500 to-amber-500 dark:from-yellow-400 dark:to-yellow-600 ml-1 align-middle rounded-full" />
              </span>
            </h2>

            <p className="mt-8 mb-10 text-gray-600 dark:text-gray-300 max-w-xl text-base lg:text-lg leading-relaxed css-banner-fade-up css-banner-fade-up-4" suppressHydrationWarning>
              I break down complex user experience problems to create
              integrity-focused solutions that connect billions of people.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 css-banner-fade-up css-banner-fade-up-5" suppressHydrationWarning>
              <GradientButton
                href="/resume/Software_Engineer_Resume_of_Subir.pdf"
                download="Subir_Das_Resume.pdf"
                className="px-8 py-3 md:py-4"
                icon={<Download className="w-5 h-5" />}
              >
                Download CV
              </GradientButton>

              <Link
                href="/contact"
                className="px-8 py-3 md:py-4 border-2 border-yellow-500/50 dark:border-yellow-400/30 hover:border-yellow-500 dark:hover:border-yellow-400/50 text-yellow-700 dark:text-yellow-300 font-semibold rounded-lg transition-all duration-300 inline-flex items-center justify-center backdrop-blur-sm hover:bg-yellow-500/10"
              >
                Let's Talk
              </Link>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="lg:w-1/2 flex justify-center items-center mt-8 lg:mt-0 css-banner-slide-right" suppressHydrationWarning>
            <div className="relative flex items-center justify-center">
              <div className="absolute w-[320px] h-[320px] lg:w-[600px] lg:h-[600px] rounded-full bg-gradient-to-br from-yellow-400/20 to-amber-500/20 dark:from-yellow-500/10 dark:to-amber-600/10 blur-3xl" />

              {/* Rotating Solid Ring */}
              <div
                className="css-ring css-ring--solid absolute w-[260px] h-[260px] lg:w-[500px] lg:h-[500px] border-2 border-yellow-500 dark:border-yellow-400 rounded-full"
                style={{
                  boxShadow:
                    "0 0 30px rgba(234, 179, 8, 0.3), inset 0 0 30px rgba(234, 179, 8, 0.1)",
                }}
              >
                <div className="css-orbital-dot css-orbital-dot--top absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 lg:w-8 lg:h-8 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full shadow-lg shadow-yellow-500/50" />
                <div className="css-orbital-dot css-orbital-dot--bottom absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-5 h-5 lg:w-8 lg:h-8 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full shadow-lg shadow-yellow-500/50" />
                <div className="css-orbital-dot css-orbital-dot--left absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 lg:w-6 lg:h-6 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full shadow-lg shadow-yellow-500/50" />
                <div className="css-orbital-dot css-orbital-dot--right absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-4 h-4 lg:w-6 lg:h-6 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full shadow-lg shadow-yellow-500/50" />
              </div>

              {/* Dashed Ring */}
              <div className="css-ring css-ring--dashed absolute w-[220px] h-[220px] lg:w-[420px] lg:h-[420px] border border-yellow-500 dark:border-yellow-500/30 rounded-full border-dashed">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 lg:w-4 lg:h-4 bg-yellow-500/80 rounded-full" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 lg:w-4 lg:h-4 bg-yellow-500/80 rounded-full" />
              </div>

              {/* Profile Image */}
              <div
                className="relative w-44 h-44 lg:w-80 lg:h-80 rounded-full overflow-hidden z-10"
                style={{
                  boxShadow:
                    "0 0 0 4px #EAB308, 0 0 40px rgba(234, 179, 8, 0.4), 0 20px 60px rgba(0, 0, 0, 0.3)",
                }}
              >
                <Image
                  src={dp}
                  alt="Subir Das - Full Stack Developer"
                  fill
                  className="object-cover scale-110"
                  priority
                  sizes="(max-width: 768px) 176px, 320px"
                />
              </div>

              {/* Floating Sparkle Badge */}
              <div className="css-sparkle-float absolute -bottom-2 -left-2 lg:-bottom-2 lg:-left-2 w-10 h-10 lg:w-16 lg:h-16 rounded-full z-20 flex items-center justify-center backdrop-blur-md border bg-amber-400/20 dark:bg-gradient-to-br dark:from-amber-400/30 dark:to-orange-500/30 border-amber-500/50 dark:border-amber-400/40 shadow-lg shadow-amber-500/10">
                <Sparkles
                  className="w-5 h-5 lg:w-9 lg:h-9 text-amber-600 dark:text-amber-400"
                  strokeWidth={2.5}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F9FAFB] dark:from-[#0a0219] to-transparent" />
    </section>
  );
}
