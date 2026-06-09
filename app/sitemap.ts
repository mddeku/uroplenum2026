import type { MetadataRoute } from "next";

const baseUrl = "https://uroplenum.com";

const pages = ["", "/program", "/faculty", "/venue", "/registration"];
const languages = ["en", "ru", "kz"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return pages.flatMap((page) =>
    languages.map((lang) => ({
      url: `${baseUrl}${page}?lang=${lang}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: page === "" ? 1 : 0.8
    }))
  );
}
