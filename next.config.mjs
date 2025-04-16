/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
      },
      {
        protocol: "https",
        hostname: "tecnagro.ao",
      },
      {
        protocol: 'https',
        hostname: '**', // Permite todas as imagens externas
      }
    ],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 86400,
    deviceSizes: [360, 640, 750, 828, 1080, 1200, 1920], // Adicionei 360 para mobile
    imageSizes: [16, 32, 48, 64, 96],
   loader: 'default',
      path: '/_next/image'
  },
   
};

export default nextConfig;
