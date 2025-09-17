import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  experimental: {
    optimizeCss: true, // enables critters
  },
};

export default nextConfig;
