/** @type {import('next').NextConfig} */
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript:{
    ignoreBuildErrors:true,
  },
  /* config options here */
     serverActions: true,
    serverExternalPackages: ["mongoose"], // <-- and this
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["utfs.io"], // Adiciona utfs.io como um domínio confiável
  },
};

export default nextConfig;
