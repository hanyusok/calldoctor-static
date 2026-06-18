import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  /* config options here */
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  distDir: 'out'
};

export default nextConfig;
