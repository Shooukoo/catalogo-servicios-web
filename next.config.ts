import type { NextConfig } from "next";

// This portfolio is served as a sub-page of the main site via rewrites.
// PORTFOLIO_URL = the standalone deployment URL of this app (set in Vercel env vars)
const PORTFOLIO_URL = process.env.NEXT_PUBLIC_PORTFOLIO_URL || "";

const nextConfig: NextConfig = {
  // Serve all static assets (_next/static, images, etc.) from the portfolio's
  // own origin so they don't go through the main-site rewrite proxy.
  assetPrefix: PORTFOLIO_URL,

  images: {
    // Allow Next.js <Image> to load from the portfolio's own domain
    remotePatterns: PORTFOLIO_URL
      ? [
          {
            protocol: "https",
            hostname: new URL(PORTFOLIO_URL).hostname,
          },
        ]
      : [],
  },
};

export default nextConfig;
