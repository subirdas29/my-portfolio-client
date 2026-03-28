import AllBlogs from "@/components/modules/AllBlogs/AllBlogs"
import { getAllBlogs } from "@/services/Blogs"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "All Blogs | Subir Das",
  description: "Read the latest blog posts by Subir Das on web development, programming, AI, and technology.",
  openGraph: {
    title: "All Blogs | Subir Das",
    description: "Read the latest blog posts by Subir Das on web development, programming, AI, and technology.",
    url: "https://subirdas.com/all-blogs",
    images: ["https://subirdas.com/og-image.jpg"],
  },
  alternates: {
    canonical: "https://subirdas.com/all-blogs",
  },
}

const AllBlogsPage = async() => {
  const {data:blogs} = await getAllBlogs()
  return (
    <div>
      <AllBlogs blogs={blogs}/>
    </div>
  )
}

export default AllBlogsPage
