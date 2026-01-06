"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

import { ReactNode } from "react";

interface GradientButtonProps {
  children?: ReactNode;
  href?: string;
  download?: string;
  className?: string;
  icon?: ReactNode;
  target?: "_blank" | "_self";
    type?: "button" | "submit" | "reset"; 
  disabled?: boolean; 
}

export default function GradientButton({
  children,
  href,
  download,
  className,
  icon,
  target = "_self",
    type = "button",
  disabled = false,
}: GradientButtonProps) {
  const baseClasses =
    "group relative px-8 py-4 bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-white dark:text-black font-semibold rounded-lg transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-lg shadow-yellow-500/25 hover:shadow-xl hover:shadow-yellow-500/30 overflow-hidden cursor-pointer";

  const content = (
    <>
      <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      {icon}
      {children}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        download={download}
        target={target}
        className={cn(baseClasses, className)}
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
       type={type}            
      disabled={disabled} 
      className={cn(baseClasses, className)}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
    >
      {content}
    </motion.button>
  );
}
