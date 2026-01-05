"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { ModeToggle } from "../ui/core/theme/mode-toggle";

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
    <nav
      className={cn(
        "fixed w-full top-0 left-0 z-[9999] transition-all duration-500 ease-in-out",
        scrolled ? "pt-3" : "pt-6"
      )}
    >
      <div
        className={cn(
          "mx-auto transition-all duration-500 ease-in-out flex items-center justify-between",
          "max-w-7xl w-[92%] md:w-[85%]",
          scrolled ? 
            "bg-white/80 dark:bg-gray-950/50 backdrop-blur-xl border border-white/20 dark:border-gray-800/50 shadow-lg px-6 py-4 rounded-[5rem]" : 
            "bg-transparent px-2 py-2 rounded-none border-transparent"
        )}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 ">
          <span className={cn(
            "text-3xl text-yellow-600 dark:text-yellow-400 font-black tracking-tighter transition-colors ",
            
          )}>
            Subir Das
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          <ul className="flex items-center gap-2">
            {routes.map((route) => {
              const isActive = pathname === route.href;
              return (
                <li key={route.href}>
                  <Link
                    href={route.href}
                    className={cn(
                      "px-4 py-2 rounded-full text-lg font-semibold transition-all duration-300",
                      navTextColor,
                      "hover:opacity-70",
                      isActive && (scrolled 
                        ? "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400" 
                        : "bg-black/10 dark:bg-white/20 text-black dark:text-white")
                    )}
                  >
                    {route.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          
          <div className={cn(
            "pl-4 border-l transition-colors flex items-center",
            scrolled ? "border-gray-200 dark:border-gray-800" : "border-black/20 dark:border-white/30"
          )}>
            <ModeToggle />
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex lg:hidden items-center gap-2">
      
          <ModeToggle /> 
          <Sheet>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                className={cn("rounded-full transition-colors", navTextColor)}
              >
                <Menu className="h-7 w-7" />
              </Button>
            </SheetTrigger>
  
            <SheetContent side="right" className="w-[280px] p-0 border-l dark:border-gray-800 z-[99999]">
              <div className="flex flex-col h-full bg-white dark:bg-[#0a0219]">
                <div className="p-8 flex flex-col gap-6 pt-24">
        
                  <div className="flex items-center justify-between mb-4 pb-4 border-b dark:border-gray-800">
                  
                    <ModeToggle />
                  </div>

                  {routes.map((route) => (
                    <Link
                      key={route.href}
                      href={route.href}
                      className={cn(
                        "text-3xl font-bold tracking-tight transition-colors",
                        pathname === route.href ? "text-yellow-500" : "text-gray-400 dark:text-gray-500 hover:text-black dark:hover:text-white"
                      )}
                    >
                      {route.label}
                    </Link>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}