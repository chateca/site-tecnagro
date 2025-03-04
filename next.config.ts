/** @type {import('next').NextConfig} */
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript:{
    ignoreBuildErrors:true,
  },
    serverExternalPackages: ["mongoose"], // <-- and this
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
 
};

export default nextConfig;
