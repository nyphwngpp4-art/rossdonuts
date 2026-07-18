import { site } from "../lib/site";

export const dynamic = "force-static";

export default function sitemap() {
  return [
    {
      url: site.url,
      lastModified: new Date("2026-07-18"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
