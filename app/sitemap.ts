import type { MetadataRoute } from "next";
import { ROUTES, SITE_URL } from "./_lib/site";

const pages = [
  { path: ROUTES.home, changeFrequency: "weekly" as const, priority: 1 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((page) => ({
    url: `${SITE_URL}${page.path}`,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
