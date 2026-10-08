import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { subjects } from "@/lib/subjects";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/about",
    "/curriculum",
    "/start-studying",
    "/past-papers",
    "/book",
    "/tutors",
    "/contact",
    "/privacy",
    "/terms",
    ...subjects.map((subject) => `/curriculum/${subject.slug}`),
  ];

  return paths.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date("2026-09-29"),
  }));
}
