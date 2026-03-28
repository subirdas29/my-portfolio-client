import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { Navbar } from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { Toaster } from "sonner";
import ChatWidget from "@/components/shared/ChatWidget";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Subir Das - Full Stack Developer Portfolio",
  description: "Professional portfolio of Subir Das, a Full Stack Developer specializing in web development, AI automation, and modern software solutions.",
  keywords: "Subir Das, full stack developer, web development, portfolio, software engineer, AI automation, React, Next.js, TypeScript, JavaScript, Node.js, MongoDB, frontend developer, backend developer",
  icons: {
    icon: "/favicon-dp.ico",
  },
  openGraph: {
    title: "Subir Das - Full Stack Developer Portfolio",
    description: "Professional portfolio of Subir Das, a Full Stack Developer specializing in web development, AI automation, and modern software solutions.",
    url: "https://subirdas.com",
    siteName: "Subir Das Portfolio",
    images: [
      {
        url: "https://subirdas.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Subir Das - Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Subir Das - Full Stack Developer Portfolio",
    description: "Professional portfolio of Subir Das, a Full Stack Developer specializing in web development, AI automation, and modern software solutions.",
    images: ["https://subirdas.com/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://subirdas.com",
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   
   <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-N1NMKPZRXL"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-N1NMKPZRXL');
            `,
          }}
        />
      </head>
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
        <ChatWidget/>
        </ThemeProvider>
      </body>
    </html>
    
  );
}
