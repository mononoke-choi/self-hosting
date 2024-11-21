import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    ppr: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
