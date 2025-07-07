/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["tekai.ai"],
  },
  // Removed API rewrites for production deployment
  // The demo will show a message that API is not available in production
};

module.exports = nextConfig;
