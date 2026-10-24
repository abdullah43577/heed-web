import type { MetadataRoute } from "next";
import { ROUTES, SITE_URL } from "./_lib/site";

const pages = [
  { path: ROUTES.home, changeFrequency: "weekly" as const, priority: 1 },
  { path: ROUTES.privacy, changeFrequency: "yearly" as const, priority: 0.5 },
  { path: ROUTES.terms, changeFrequency: "yearly" as const, priority: 0.5 },
  {
    path: ROUTES.deleteAccount,
    changeFrequency: "yearly" as const,
    priority: 0.3,
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((page) => ({
    url: `${SITE_URL}${page.path}`,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
