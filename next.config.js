/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  // output: 'export', // Removed to allow dynamic API routes

  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'css')],
  },
  trailingSlash: true,
  devIndicators: {
    buildActivity: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
};

module.exports = nextConfig;
