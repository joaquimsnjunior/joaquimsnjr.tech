import { MetadataRoute } from "next"
import { getPosts } from "@/lib/blog"

const BASE_URL = "https://www.joaquimsnjr.tech"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Buscar todos os posts do blog
  const posts = getPosts()

  // Gerar entries para cada post
  const blogEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.metadata.date),
    changeFrequency: "monthly",
    priority: 0.8,
  }))

  // Páginas estáticas do site
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/projects`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/sobre`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/talks`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ]

  // Combinar todas as páginas
  return [...staticPages, ...blogEntries]
}