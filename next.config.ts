/** @type {import('next').NextConfig} */
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
 
  typescript:{
    ignoreBuildErrors:true,
  },
    serverExternalPackages: ["mongoose"], // <-- and this
    pageExtensions:['tsx', 'ts', 'jsx', 'js'],
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    qualities: [25, 50, 70],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'utfs.io',
        pathname: '**',
        port:'', 
        search:''
      },
    ],
     // Adiciona utfs.io como um domínio confiável
    localPatterns: [
      {
        pathname: '/assets/**',
        search: '',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store, max-age=0',
          },
        ],
      },
    ]
  },
 
};

export default nextConfig;
