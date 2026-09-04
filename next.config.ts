import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  distDir: process.env.NEXT_DIST_DIR || ".next",
  poweredByHeader: false,
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: false },
  async rewrites() {
    return [
      { source: "/__grok/manifest.webmanifest", destination: "/manifest.webmanifest" },
      { source: "/__grok/manifest.json", destination: "/manifest.webmanifest" },
    ];
  },
};

export default nextConfig;
