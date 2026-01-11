import BlogDetails from "@/components/modules/AllBlogs/BlogDetails"
import { getAllBlogs, getSingleBlog } from "@/services/Blogs"




const blogDetailPage= async({params}:{params:Promise<{slug:string}>}) => {
    const {slug} = await params
    console.log(slug)
    const {data:blog} = await getSingleBlog(slug)
    const {data:allBlogs} = await getAllBlogs()


  return (
    <div className="flex justify-center items-center bg-white dark:bg-[#0a0219]">
      <BlogDetails blog={blog} allBlogs={allBlogs}/>
    </div>
  )
}

export default blogDetailPage
