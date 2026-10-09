import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '**', 
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**', 
        port: '',
        pathname: '/**',
      }
    ]
  }
};

export default nextConfig;
