/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['unique-timing-044438.framer.app'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    unoptimized: true,
  },
};

export default nextConfig;




