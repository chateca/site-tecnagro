/** @type {import('next').NextConfig} */
import type { NextConfig } from "next";

const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline' https://apis.google.com;
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data:;
    font-src 'self' data:;
    connect-src 'self' https://api.example.com;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
`;


const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    domains:['utfs.io'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
        pathname: "**",
      },
     
    ],
    minimumCacheTTL: 86400,
    
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: cspHeader.replace(/\n/g, " "),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
