import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // basePath ensures all assets (_next/static, images, etc.) are prefixed
  // with /catalogo so Vercel's rewrite proxy (/catalogo → this app) can
  // find them correctly on the main domain.
  basePath: "/catalogo",

  // Prevents Next.js from issuing 308 redirects to normalize trailing slashes.
  // Without this, the Vercel proxy catches the redirect and re-proxies it
  // creating an infinite redirect loop (ERR_TOO_MANY_REDIRECTS).
  trailingSlash: true,
};

export default nextConfig;
