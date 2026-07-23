import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://musubi-44.com/",
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
