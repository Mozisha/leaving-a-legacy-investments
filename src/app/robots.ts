import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: "https://leavingalegacyinvestments.com/sitemap.xml",
    host: "https://leavingalegacyinvestments.com",
  };
}
