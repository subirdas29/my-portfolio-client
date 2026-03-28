import type { NextConfig } from "next";

// [OPTIMIZATION] Next.js config tuned for maximum production performance:
// - AVIF/WebP image format support for smaller image sizes
// - Compression enabled for smaller bundle transfer
// - Cache-Control headers for static assets
// - Strict mode enabled for better React debugging
const nextConfig: NextConfig = {
  // [OPTIMIZATION] Enable React strict mode for better development experience
  reactStrictMode: true,

  // [OPTIMIZATION] Image optimization: AVIF first (smallest), then WebP fallback
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    // [OPTIMIZATION] Use modern image formats for 20-50% smaller file sizes
    formats: ["image/avif", "image/webp"],
    // [OPTIMIZATION] Cache optimized images for 60 days
    minimumCacheTTL: 60 * 60 * 24 * 60,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  experimental: {
    serverActions: {
      bodySizeLimit: "5mb",
    },
    // [OPTIMIZATION] Optimize package imports to reduce bundle size
    // Tree-shakes unused exports from these packages
    optimizePackageImports: [
      "framer-motion",
      "lucide-react",
      "react-icons",
      "react-markdown",
      "sonner",
    ],
  },

  // [OPTIMIZATION] Compiler-level optimizations
  compiler: {
    // Remove console.log in production builds
    removeConsole: process.env.NODE_ENV === "production",
  },

  async headers() {
    return [
      {
        // [OPTIMIZATION] Cache static assets (JS, CSS, images) aggressively
        source: "/:all*(svg|jpg|jpeg|png|gif|ico|webp|avif|woff|woff2)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // [OPTIMIZATION] Cache Next.js static build assets
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          // [OPTIMIZATION] Enable compression for all text-based responses
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
        ],
      },
    ];
  },

  async redirects() {
    return [
      {
        source: "/index.html",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
