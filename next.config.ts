import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // No basePath — this app now serves from the root (/)
  // of the main Vercel domain via a catch-all rewrite.

  // Prevents Next.js from issuing 308 redirects to normalize trailing slashes.
  trailingSlash: true,

  // The Next.js image optimizer doesn't support SVG files — it returns an
  // error for them. Setting unoptimized:true makes <Image> serve the file
  // directly from /public.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
