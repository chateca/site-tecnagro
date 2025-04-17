/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript:{
    ignoreBuildErrors:true,
  },
    experimental: {
      serverActions:{
        bodySizeLimit:"4MB",
       serverComponentsExternalPackages: ["mongoose"],
     }
    },
    eslint: {
      // Warning: This allows production builds to successfully complete even if
      // your project has ESLint errors.
      ignoreDuringBuilds: true,
    },

    reactStrictMode: true,
  images: {
      dangerouslyAllowSVG: true,
      contentDispositionType: 'attachment',
      contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
      localPatterns: [
        {
          pathname: '/assets/**',
          search: '',
        },
      ],
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
      },
      {
        protocol: "https",
        hostname: "uploadthing.com",
      },
    ],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 86400,
    deviceSizes: [360, 640, 750, 828, 1080, 1200, 1920], // Adicionei 360 para mobile
    imageSizes: [16, 32, 48, 64, 96],
    qualities:[75,80],
   loader: 'default',
      path: '/_next/image'
  },

  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  ) => {
    // Important: return the modified config
    return config
  },
   
  async headers() {
    return [
      {
        source: '/(.*)', // aplica para todas as rotas
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "script-src 'self' 'unsafe-eval' 'unsafe-inline' data: blob:; object-src 'none'; base-uri 'self';", 
          },
        ],
      },
    ];
  },
};

export default nextConfig;
