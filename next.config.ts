import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: { unoptimized: false },
  webpack: (config) => {
    config.resolve.symlinks = false;
    return config;
  },
};

export default nextConfig;
