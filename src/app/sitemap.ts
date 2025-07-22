import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://zainyounas.vercel.app";
  const lastModified = new Date();

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "always",
      priority: 1,
    },
    {
      url: `${baseUrl}#about`,
      lastModified,
      changeFrequency: "always",
      priority: 0.8,
    },
    {
      url: `${baseUrl}#experience`,
      lastModified,
      changeFrequency: "always",
      priority: 0.8,
    },
    {
      url: `${baseUrl}#projects`,
      lastModified,
      changeFrequency: "always",
      priority: 0.9,
    },
    {
      url: `${baseUrl}#contact`,
      lastModified,
      changeFrequency: "always",
      priority: 0.7,
    },
  ];
}
