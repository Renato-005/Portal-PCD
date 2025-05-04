import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'miro.medium.com',
        port: '',
        pathname: '/v2/**',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'http.dog',
        port: '',
        pathname: '/**',
        search: '',
      },
      
    ],
  },
};

export default nextConfig;
