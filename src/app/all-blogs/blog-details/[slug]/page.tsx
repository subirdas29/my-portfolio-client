import BlogDetails from "@/components/modules/AllBlogs/BlogDetails"
import { getAllBlogs, getSingleBlog } from "@/services/Blogs"
import type { Metadata } from "next"

export async function generateMetadata({params}: {params: Promise<{slug: string}>}): Promise<Metadata> {
  const {slug} = await params
  const {data: blog} = await getSingleBlog(slug)
  
  return {
    title: `${blog?.title} | Subir Das Blog`,
    description: blog?.summary || blog?.content?.replace(/<[^>]*>/g, "").substring(0, 160) || "Read this blog post by Subir Das",
    keywords: blog?.tags?.join(", ") || "blog, technology, web development",
    openGraph: {
      title: blog?.title,
      description: blog?.summary || blog?.content?.replace(/<[^>]*>/g, "").substring(0, 160),
      url: `https://subirdas.com/all-blogs/blog-details/${slug}`,
      siteName: "Subir Das Portfolio",
      images: blog?.featuredImage ? [
        {
          url: blog.featuredImage,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ] : [],
      type: "article",
      publishedTime: blog?.createdAt,
      tags: blog?.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: blog?.title,
      description: blog?.summary || blog?.content?.replace(/<[^>]*>/g, "").substring(0, 160),
      images: blog?.featuredImage ? [blog.featuredImage] : [],
    },
    alternates: {
      canonical: `https://subirdas.com/all-blogs/blog-details/${slug}`,
    },
  }
}

const blogDetailPage= async({params}:{params:Promise<{slug:string}>}) => {
    const {slug} = await params
  
    const {data:blog} = await getSingleBlog(slug)
    const {data:allBlogs} = await getAllBlogs()


  return (
    <div className="bg-white dark:bg-[#0a0219]">
      <BlogDetails blog={blog} allBlogs={allBlogs}/>
    </div>
  )
}

export default blogDetailPage
