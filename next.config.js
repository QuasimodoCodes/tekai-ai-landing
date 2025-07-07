/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["tekai.ai"],
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:8080/:path*", // Proxy to FastAPI backend
      },
    ];
  },
};

module.exports = nextConfig;
