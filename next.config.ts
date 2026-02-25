import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // basePath ensures all assets (_next/static, images, etc.) are prefixed
  // with /catalogo so Vercel's rewrite proxy (/catalogo → this app) can
  // find them correctly on the main domain.
  basePath: "/catalogo",
};

export default nextConfig;
