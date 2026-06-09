/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    DOMAIN: "https://taxisieure.com",
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Cho phép tất cả domain HTTPS
      },
      {
        protocol: "http",
        hostname: "**", // (Không khuyến khích) — Cho phép cả HTTP
      },
    ],
    dangerouslyAllowSVG: true, // nếu bạn muốn cho phép SVG
    contentDispositionType: "inline",
  },
  async redirects() {
    return [
      {
        source: "/:path((?!_next|api).*)\\.html", // tránh ảnh hưởng đến các route đặc biệt
        destination: "/:path",
        permanent: true,
      },
    ];
  },
  // Optimize build performance
  experimental: {
    optimizePackageImports: ["@mui/material", "@mui/icons-material"],
  },
  // Reduce static generation to only critical pages
  onDemandEntries: {
    maxInactiveAge: 60 * 1000,
    pagesBufferLength: 5,
  },
};

export default nextConfig;
