import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { Navbar } from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SubirDas-Portfolio",
  description: "This is Subir Das Portfolio. A professional and modern portfolio website showcasing my skills, projects, and experience in a visually appealing way.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <ThemeProvider
    attribute="class"
    defaultTheme="system"
    enableSystem = {true}
    disableTransitionOnChange
  >
       <Navbar/>
       <Toaster richColors position="top-center"/>
        {children}
        <Footer/>
        </ThemeProvider>
      </body>
    </html>
    
  );
}
