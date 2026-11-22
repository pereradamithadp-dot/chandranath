import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    // Careers form uploads CVs up to 5 MB; leave room for multipart overhead.
    serverActions: { bodySizeLimit: "6mb" },
  },
  // Send www.chandranathandcompany.com to the main domain.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.chandranathandcompany.com" }],
        destination: "https://chandranathandcompany.com/:path*",
        permanent: true,
      },
    ];
  },
  // Basic security headers for every page.
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
  images: {
    remotePatterns: [{ protocol: "https", hostname: "cdn.sanity.io" }],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
