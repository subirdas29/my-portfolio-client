"use client";

import { TBlog } from "@/types/blogs";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// 🔹 Function to extract the first image URL from blog content
const extractFirstImageUrl = (content: string) => {
  const imgTagRegex = /<img[^>]+src="([^">]+)"/;
  const match = imgTagRegex.exec(content);
  return match ? match[1] : null; // Return first image src or null
};

const Blogs = ({ blogs }: { blogs: TBlog[] }) => {
  return (
    <section className="py-16 lg:py-20  bg-white dark:bg-[#0a0219] transition-colors duration-300">
      <div className="px-6 mx-4 md:mx-8 lg:mx-16">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-12"
        >
          My Blogs
        </motion.h2>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.slice(0,3).map((blog, index) => {
            const firstImageUrl = extractFirstImageUrl(blog.content);

            return (
              <motion.div
                key={blog._id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, borderColor: "#facc15" }}
                className="bg-gray-100 dark:bg-gray-800 rounded-2xl border-2 overflow-hidden shadow-lg hover:shadow-xl border-transparent transition-shadow duration-300"
              >
                {/* Blog Banner (First Image) */}
                <div className="w-full h-48">
                  <Image
                    height={500}
                    width={500}
                    src={firstImageUrl || "/default-image.jpg"} // Show first image or default
                    alt={blog.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Blog Content */}
                <div className="p-6">
                  {/* Blog Title */}
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {blog.title}
                  </h3>

                  {/* Blog Description */}
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {blog.content.replace(/<\/?[^>]+(>|$)/g, "").substring(0, 50)}...
                  </p>

                  {/* Details Button */}
                  <Link href={`/all-blogs/blog-details/${blog._id}`}>
                    <button className="px-4 py-2 bg-primary text-white dark:text-gray-900 font-semibold rounded-full hover:bg-primary/90 transition-colors duration-300">
                      Details
                    </button>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* All Blogs Button */}
        <div className="flex justify-center my-10">
          <Link href="/all-blogs">
            <button className="px-8 py-2 bg-primary text-white dark:text-gray-900 font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-300">
              All Blogs
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
