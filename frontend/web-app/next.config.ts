import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  logging: {
    fetches: {
      fullUrl: true,
    }
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.pixabay.com' },
    ],
  },
  /* config options here */
};

export default nextConfig;
