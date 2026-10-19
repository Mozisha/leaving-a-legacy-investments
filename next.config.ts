import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return [
      {
        source: "/investors-portal",
        destination:
          "https://www.cashflowportal.com/offering/4f13f07%208ab2b48518bbefb52259056e5",
        permanent: false, // 307 — allows the destination URL to change later
      },
    ];
  },
};

export default nextConfig;
