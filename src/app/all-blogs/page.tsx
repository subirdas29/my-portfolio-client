import AllBlogs from "@/components/modules/AllBlogs/AllBlogs"
import { getAllBlogs } from "@/services/Blogs"


const AllBlogsPage = async() => {
  const {data:blogs} = await getAllBlogs()
  return (
    <div>
      <AllBlogs blogs={blogs}/>
    </div>
  )
}

export default AllBlogsPage
