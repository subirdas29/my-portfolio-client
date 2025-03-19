"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { ModeToggle } from "../ui/core/theme/mode-toggle";
import { useTheme } from "next-themes";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { theme } = useTheme();

  useEffect(() => {
    if (!["/","/all-projects","/all-blogs","/contact"].includes(pathname)) return;
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const routes = [
    { href: "/", label: "Home", active: pathname === "/" },
    { href: "/all-projects", label: "Projects", active: pathname === "/all-projects" },
    { href: "/all-blogs", label: "Blogs", active: pathname === "/all-blogs" },
    { href: "/contact", label: "Contact", active: pathname === "/contact" },
  ];

  return (
    <nav
      className={cn(
        "w-full top-0 z-50 transition-all duration-300 fixed",
        pathname === "/" || pathname === "/all-projects" || pathname === "/all-blogs"
          ? scrolled
            ? theme === "dark"
              ? "bg-black/80 backdrop-blur-md border-b shadow-md text-white"
              : "bg-white/90 backdrop-blur-md border-b shadow-md text-black"
            : "bg-transparent backdrop-blur-none border-none text-white" 
          : theme === "dark"
          ? "bg-black/80 backdrop-blur-md border-b shadow-md text-white"
          : "bg-white/90 backdrop-blur-md border-b shadow-md text-black"
      )}
    >
      <div className="flex h-16 items-center justify-between mx-4 md:mx-8 lg:mx-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-3xl font-bold text-primary">Subir Das</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "flex items-center gap-1.5 text-xl font-medium transition-colors hover:text-primary",
                scrolled
                  ? theme === "dark"
                    ? "text-white"
                    : "text-black"
                  : "text-white" 
              )}
            >
              {route.label}
            </Link>
          ))}
         
          <div className="text-black dark:text-white">
            <ModeToggle />
          </div>
        </div>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden bg-primary cursor-pointer">
              <Menu className="h-5 w-5 text-white" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className={cn(
              "w-[260px] p-5 transition-colors",
              theme === "dark" ? "bg-black text-white" : "bg-white text-black"
            )}
          >
            <div className="flex flex-col gap-4 pt-8">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className="flex items-center gap-2 text-[16px] font-medium transition-colors"
                >
                  {route.label}
                </Link>
              ))}
              <ModeToggle />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
