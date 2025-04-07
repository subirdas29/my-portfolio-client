"use client"
import { TBlog } from "@/types/blogs";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Helper function to extract first image URL from content
const extractFirstImage = (content: string): string | null => {
  const imgTagMatch = content.match(/<img\s+[^>]*src=["']([^"']+)["']/);
  return imgTagMatch ? imgTagMatch[1] : null;
};

const AllBlogs = ({ blogs }: { blogs: TBlog[] }) => {
  if (blogs.length === 0) return <p className="text-center text-2xl">No blogs available</p>;

  const latestBlog = blogs[0]; 
  const otherBlogs = blogs.slice(1);

  // Extract first image from latest blog content
  const latestImage = extractFirstImage(latestBlog.content) || "/default-image.jpg";

  return (
   
     <div>
        <section className="relative flex flex-col items-center justify-center min-h-80 bg-gradient-to-br dark:from-[#0a0219] dark:to-[#1b0c2d] from-[#F9FAFB] to-[#faffdd] dark:text-white text-gray-900 overflow-hidden">
      {/* Animated Banner */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-5xl md:text-6xl font-bold">All Blogs</h1>
        <p className="mt-2 text-lg text-gray-700 dark:text-gray-300">
          Explore my work and case studies
        </p>
      </motion.div>
      </section>
     <section className="py-20 text-gray-800 bg-white dark:bg-[#0a0219] dark:text-gray-100 ">

      <div className="p-6 space-y-6 sm:space-y-12 mx-12 md:mx-16 lg:mx-24 min-h-screen">
        {/* 🔥 Latest Blog (Featured) */}
        <div className="shadow-lg block sm:max-w-full group lg:grid lg:grid-cols-12 dark:bg-gray-800 bg-gray-100 hover:no-underline focus:no-underline">
          <Image
            src={latestImage}
            alt={latestBlog.title}
            width={700}
            height={500}
            className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 bg-white dark:bg-gray-700"
          />
          <div className="p-6 space-y-2 lg:col-span-5">
            <h3 className="text-2xl font-semibold sm:text-4xl">{latestBlog.title}</h3>
            <span className="text-xs text-gray-600 dark:text-gray-400">
              {latestBlog.createdAt ? new Date(latestBlog.createdAt).toDateString() : "No date available"}
            </span>
            <p className="my-4">{latestBlog.content.replace(/<\/?[^>]+(>|$)/g, "").substring(0, 100)}...</p>
            <Link href={`/all-blogs/blog-details/${latestBlog._id}`}>
              <button className="px-4 py-2 bg-primary text-white dark:text-gray-900 font-semibold rounded-xl hover:bg-primary/90 transition-colors duration-300">
                Read More
              </button>
            </Link>
          </div>
        </div>

        {/* 🔹 Other Blogs (Grid) */}
        <div className=" grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {otherBlogs.map((blog) => {
            const blogImage = extractFirstImage(blog.content) || "/default-image.jpg";
            return (
              <div key={blog._id} className=" group dark:bg-gray-800 bg-gray-100 hover:no-underline focus:no-underline shadow-lg">
                <Image
                  src={blogImage}
                  alt={blog.title}
                  width={500}
                  height={500}
                  className="object-cover w-full rounded h-44 bg-white dark:bg-gray-700"
                />
                <div className="p-6 space-y-2">
                  <h3 className="text-2xl font-semibold">{blog.title.substring(0,25)}...</h3>
                  <span className="text-xs text-gray-600 dark:text-gray-400">
                    {blog.createdAt ? new Date(blog.createdAt).toDateString() : "No date available"}
                  </span>
                  <p className="my-4">{blog.content.replace(/<\/?[^>]+(>|$)/g, "").substring(0, 80)}...</p>
                  <Link href={`/all-blogs/blog-details/${blog._id}`}>
                    <button className="px-4 py-2 bg-primary text-white dark:text-gray-900 font-semibold rounded-xl hover:bg-primary/90 transition-colors duration-300">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      
      </div>
    </section>
     </div>
  );
};

export default AllBlogs;
