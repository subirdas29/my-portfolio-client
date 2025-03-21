import BlogDetails from "@/components/modules/AllBlogs/BlogDetails"
import { getAllBlogs, getSingleBlog } from "@/services/Blogs"




const blogDetailPage= async({params}:{params:Promise<{blogId:string}>}) => {
    const {blogId} = await params
    console.log(blogId)
    const {data:blog} = await getSingleBlog(blogId)
    const {data:allBlogs} = await getAllBlogs()
    console.log(blog,'blog')

  return (
    <div className="flex justify-center items-center bg-white dark:bg-[#0a0219]">
      <BlogDetails blog={blog} allBlogs={allBlogs}/>
    </div>
  )
}

export default blogDetailPage
