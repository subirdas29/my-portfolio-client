"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react"; 
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { ModeToggle } from "../ui/core/theme/mode-toggle";
import Image from "next/image";
import logo from '../../assets/logo/sd-logo.webp';
import { motion } from "framer-motion";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const routes = [
    { href: "/", label: "Home" },
    { href: "/all-projects", label: "Projects" },
    { href: "/all-blogs", label: "Blogs" },
    { href: "/contact", label: "Contact" },
  ];

  const navTextColor = scrolled 
    ? "text-gray-900 dark:text-gray-100"
    : "text-black dark:text-white";

  return (
    <nav className={cn("fixed w-full top-0 left-0 z-[9999] transition-all duration-500 ease-in-out", scrolled ? "pt-3" : "pt-6")}>
      <div className={cn("transition-all duration-500 ease-in-out flex items-center justify-between page-container", scrolled ? "bg-white/80 dark:bg-gray-950/50 backdrop-blur-xl border border-white/20 dark:border-gray-800/50 shadow-lg px-6 py-3 rounded-[5rem]" : "bg-transparent px-2 py-2 rounded-none border-transparent")}>
        
        {/* Logo */}
        <div className="flex">
          <Link href="/" className="flex items-center gap-2">
            <Image src={logo} width={100} height={100} alt="My logo" className="w-10 h-10" />
            <span className="text-3xl font-black bg-gradient-to-r from-yellow-600 via-amber-500 to-orange-600 dark:from-yellow-400 dark:via-yellow-500 dark:to-amber-500 text-transparent bg-clip-text">
              Subir Das
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          <ul className="flex items-center gap-2">
            {routes.map((route) => {
              const isActive = pathname === route.href;
              return (
                <li key={route.href}>
                  <Link href={route.href} className={cn("px-4 py-2 rounded-full text-lg font-semibold transition-all duration-300", navTextColor, "hover:opacity-70", isActive && "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400")}>
                    {route.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className={cn("pl-4 border-l transition-colors flex items-center", scrolled ? "border-gray-200 dark:border-gray-800" : "border-black/20 dark:border-white/30")}>
            <ModeToggle />
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex lg:hidden items-center gap-2">
          <ModeToggle /> 
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={cn("rounded-full transition-colors", navTextColor)}>
                <Menu className="h-7 w-7" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[300px] p-0 border-l dark:border-white/10 z-[99999] overflow-hidden">

            <SheetHeader className="sr-only"> 
    <SheetTitle>Navigation Menu</SheetTitle>
  </SheetHeader>
              
             
              <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#F9FAFB] via-[#fff8e1] to-[#faffdd] dark:from-[#0a0219] dark:via-[#120825] dark:to-[#1b0c2d]">
                {[...Array(15)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full bg-amber-500/30"
                    animate={{ 
                      opacity: [0.3, 0.8, 0.3], 
                      y: [0, -200, 0], 
                      x: [0, (i % 2 === 0 ? 30 : -30), 0] 
                    }}
                    transition={{ duration: 5 + i, repeat: Infinity, ease: "linear" }}
                    style={{ left: `${(i * 7) % 100}%`, bottom: "-5%" }}
                  />
                ))}
              </div>

              {/* --- 2. Content Container --- */}
              <div className="relative z-10 flex flex-col h-full backdrop-blur-sm">
                
                {/* Header with ModeToggle and Close */}
                <div className="p-6 flex items-center justify-between border-b dark:border-white/10 pt-10">
                  <ModeToggle /> 
                  <SheetClose className="p-2 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400">
                    <X className="h-6 w-6" />
                  </SheetClose>
                </div>

                <div className="p-8 flex flex-col gap-8">
            

                  <div className="flex flex-col gap-6">
                    {routes.map((route) => {
                      const isActive = pathname === route.href;
                      return (
                        <SheetClose asChild key={route.href}>
                          <Link
                            href={route.href}
                            className={cn(
                              "text-2xl font-black tracking-tight transition-all duration-300 flex items-center gap-4",
                              isActive ? "text-amber-600 dark:text-yellow-400 translate-x-2" : "text-gray-400 hover:text-black dark:hover:text-white"
                            )}
                          >
                            {isActive && <div className="w-1.5 h-8 bg-amber-500 rounded-full" />}
                            {route.label}
                          </Link>
                        </SheetClose>
                      );
                    })}
                  </div>
                </div>

                {/* Footer */}
                <div className="mt-auto p-8 border-t dark:border-white/10">
                  <p className="text-[11px] font-black text-amber-600 dark:text-amber-500 uppercase tracking-widest">
                    Available for new projects
                  </p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}