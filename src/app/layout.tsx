import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { Navbar } from "@/components/shared/Navbar";
import dynamic from "next/dynamic";
import { Toaster } from "sonner";

// [OPTIMIZATION] Lazy-load Footer - it's below-the-fold
// and not needed for initial paint. This reduces the initial JS bundle size.
const Footer = dynamic(() => import("@/components/shared/Footer"));

// [OPTIMIZATION] ChatWidget is imported via a client wrapper to enable ssr:false.
// This ensures the chat widget code doesn't bloat the initial server bundle.
const ClientChatWidget = dynamic(
  () => import("@/components/shared/ClientChatWidget"),
  { loading: () => null }
);

// [OPTIMIZATION] Preload fonts with display:swap for fastest text rendering.
// display:swap ensures text is visible immediately with fallback font,
// then swaps to custom font when loaded (improves FCP).
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

// [OPTIMIZATION] Separate viewport export for better Lighthouse compliance
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0219" },
  ],
};

export const metadata: Metadata = {
  title: "Subir Das - Full Stack Developer Portfolio",
  description:
    "Professional portfolio of Subir Das, a Full Stack Developer specializing in web development, AI automation, and modern software solutions.",
  keywords:
    "Subir Das, full stack developer, web development, portfolio, software engineer, AI automation, React, Next.js, TypeScript, JavaScript, Node.js, MongoDB, frontend developer, backend developer",
  icons: {
    icon: "/favicon-dp.ico",
  },
  openGraph: {
    title: "Subir Das - Full Stack Developer Portfolio",
    description:
      "Professional portfolio of Subir Das, a Full Stack Developer specializing in web development, AI automation, and modern software solutions.",
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
    description:
      "Professional portfolio of Subir Das, a Full Stack Developer specializing in web development, AI automation, and modern software solutions.",
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
        {/* [OPTIMIZATION] Preload critical fonts for faster first paint.
            These fonts are used above-the-fold, so preloading eliminates
            the network round-trip delay before font discovery. */}
        <link
          rel="preload"
          href="/fonts/GeistVariable.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        {/* [OPTIMIZATION] Google Analytics loaded with 'lazyOnload' strategy.
            This ensures GA never blocks initial rendering or first paint.
            The script loads only after the page has fully loaded. */}
        <Script
          strategy="lazyOnload"
          src="https://www.googletagmanager.com/gtag/js?id=G-N1NMKPZRXL"
        />
        <Script
          id="google-analytics"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-N1NMKPZRXL', {
                send_page_view: false
              });
              // [OPTIMIZATION] Delay GA page view until browser is idle
              // to avoid blocking main thread during initial load
              if ('requestIdleCallback' in window) {
                requestIdleCallback(function() {
                  gtag('event', 'page_view');
                });
              } else {
                setTimeout(function() {
                  gtag('event', 'page_view');
                }, 2000);
              }
            `,
          }}
        />

        {/* [OPTIMIZATION] Inline critical CSS for above-the-fold content.
            This prevents FOUC (Flash of Unstyled Content) and improves FCP
            by ensuring the page background and text colors are set immediately,
            before the external CSS file loads. */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              /* Critical CSS: Inlined for instant first paint */
              html{color-scheme:light dark}
              body{margin:0;background:#fff;color:#1a1a2e;font-family:system-ui,-apple-system,sans-serif}
              @media(prefers-color-scheme:dark){body{background:#0a0219;color:#f0f0f0}}
              /* Prevent layout shift from font loading */
              body{min-height:100vh}
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
          enableSystem={true}
          disableTransitionOnChange
        >
          <Navbar />
          <Toaster richColors position="top-center" />
          {children}
          <Footer />
          <ClientChatWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}
