/** @type {import('next').NextConfig} */
import type { NextConfig } from "next";



const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "tecnagro.ao",
        pathname: "**",
      },
     
    ],

    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 86400, // 1 dia
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96],
    disableStaticImages: false,
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          { key: 'Access-Control-Allow-Origin', value: 'https://tecnagro.ao' },
          { key: 'Access-Control-Allow-Origin', value: 'https://www.tecnagro.ao' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,POST' }
        ],
      },
    ];
  },
};

export default nextConfig;
