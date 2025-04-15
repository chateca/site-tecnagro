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
  async headers() {
    const securityHeaders = [
      // Segurança Básica
      {
        key: 'X-DNS-Prefetch-Control',
        value: 'on'
      },
      {
        key: 'Strict-Transport-Security',
        value: 'max-age=63072000; includeSubDomains; preload'
      },
      {
        key: 'X-XSS-Protection',
        value: '1; mode=block'
      },
      {
        key: 'X-Frame-Options',
        value: 'SAMEORIGIN'
      },
      {
        key: 'X-Content-Type-Options',
        value: 'nosniff'
      },
      // CORS Corrigido
      {
        key: 'Access-Control-Allow-Origin',
        value: 'https://tecnagro.ao, https://www.tecnagro.ao'
      },
      {
        key: 'Access-Control-Allow-Methods',
        value: 'GET, POST, OPTIONS'
      },
      {
        key: 'Access-Control-Allow-Headers',
        value: 'Content-Type, Authorization'
      },
      // Cache mais seguro para mobile
      {
        key: 'Cache-Control',
        value: 'public, max-age=604800, stale-while-revalidate=86400'
      }
    ];

    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
      {
        source: '/_next/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }
        ]
      }
    ];
  },
};

export default nextConfig;
