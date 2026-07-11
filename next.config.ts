import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: { unoptimized: false },
  webpack: (config) => {
    config.resolve.symlinks = false;
    return config;
  },
  async redirects() {
    return [
      {
        source: '/netplans-podcast/:path*',
        destination: 'https://www.netplans.de/podcast-folge-14-sind-unsere-daten-in-der-cloud-sicher/',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
