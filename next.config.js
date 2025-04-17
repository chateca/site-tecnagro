/** @type {import('next').NextConfig} */

const cspHeader = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline' data: blob:;
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: blob:;
  font-src 'self';
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
  upgrade-insecure-requests;
`;

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },

  experimental: {
    serverActions: {
      bodySizeLimit: "4MB",
      serverComponentsExternalPackages: ["mongoose"],
    },
  },

  eslint: {
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
        hostname: '**',
      },
      {
        protocol: "https",
        hostname: "uploadthing.com",
      },
    ],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 86400,
    deviceSizes: [360, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96],
    qualities: [75, 80],
    loader: 'default',
    path: '/_next/image',
  },

  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  ) => {
    return config;
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: cspHeader.replace(/\n/g, ''),
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
