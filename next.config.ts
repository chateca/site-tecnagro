/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  typescript:{
    ignoreBuildErrors:true,
  },
  /* config options here */
  experimental: {
    serverActions: true,
    serverExternalPackages: ["mongoose"], // <-- and this
  },
    
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["utfs.io"], // Adiciona utfs.io como um domínio confiável
  },
};

module.exports = nextConfig 
