import { MetadataRoute } from "next"
import { getAllBlogs } from "@/services/Blogs"
import { getAllProjects } from "@/services/Projects"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://subirdas.com"

  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/all-projects`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/all-blogs`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
  ]

  let blogPages: MetadataRoute.Sitemap = []
  let projectPages: MetadataRoute.Sitemap = []

  try {
    const { data: blogs } = await getAllBlogs()
    if (blogs && Array.isArray(blogs)) {
      blogPages = blogs.map((blog: { slug: string; createdAt?: string }) => ({
        url: `${baseUrl}/all-blogs/blog-details/${blog.slug}`,
        lastModified: blog.createdAt ? new Date(blog.createdAt) : new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.7,
      }))
    }
  } catch {
    // ignore
  }

  try {
    const { data: projects } = await getAllProjects()
    if (projects && Array.isArray(projects)) {
      projectPages = projects.map((project: { slug: string; createdAt?: string }) => ({
        url: `${baseUrl}/all-projects/projectDetails/${project.slug}`,
        lastModified: project.createdAt ? new Date(project.createdAt) : new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.6,
      }))
    }
  } catch {
    // ignore
  }

  return [...staticPages, ...blogPages, ...projectPages]
}
