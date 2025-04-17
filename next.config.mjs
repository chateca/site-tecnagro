/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript:{
    ignoreBuildErrors:true,
  },
    experimental: {
      poweredByHeader: false,
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
        source: '/(.*)', // Aplica para todas as rotas
        headers: [
          {
            key: 'Content-Security-Policy',
            value: `
              default-src * data: blob: 'unsafe-inline' 'unsafe-eval';
              script-src * data: blob: 'unsafe-inline' 'unsafe-eval';
              style-src * data: blob: 'unsafe-inline';
              img-src * data: blob:;
              font-src * data: blob:;
              connect-src * data: blob:;
              media-src * data: blob:;
              frame-src * data: blob:;
              object-src * data: blob:;
              base-uri *;
              form-action *;
              frame-ancestors *;
            `.replace(/\n/g, '').trim(),
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'ALLOWALL',
          },
          {
            key: 'X-XSS-Protection',
            value: '0',
          },
          {
            key: 'Referrer-Policy',
            value: 'unsafe-url',
          },
          {
            key: 'Permissions-Policy',
            value: 'interest-cohort=()',
          },
          {
            key: 'X-Powered-By',
            value: '', // Remove o header x-powered-by
          },
        ],
      },
    ];
  }
};

export default nextConfig;