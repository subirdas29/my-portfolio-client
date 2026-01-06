"use client"
import { TBlog } from "@/types/blogs";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import GradientButton from "@/utility/GradientButton";
import { ArrowBigRight, Sparkles } from "lucide-react";

// Helper function to extract first image URL from content
const extractFirstImage = (content: string): string | null => {
  const imgTagMatch = content.match(/<img\s+[^>]*src=["']([^"']+)["']/);
  return imgTagMatch ? imgTagMatch[1] : null;
};

const AllBlogs = ({ blogs }: { blogs: TBlog[] }) => {
  if (blogs.length === 0) return <p className="text-center text-2xl py-20">No blogs available</p>;

  const latestBlog = blogs[0]; 
  const otherBlogs = blogs.slice(1);
  const latestImage = extractFirstImage(latestBlog.content) || "/default-image.jpg";

  return (
    <div>
      {/* --- HERO SECTION (Updated to match Projects style) --- */}
      <section className="relative flex flex-col items-center justify-center min-h-[450px] bg-gradient-to-br from-[#F9FAFB] via-[#fff8e1] to-[#faffdd] dark:from-[#0a0219] dark:via-[#120825] dark:to-[#1b0c2d] text-gray-900 dark:text-white overflow-hidden">
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating Particles */}
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-yellow-500 dark:bg-yellow-500/40"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0.2, 0.8, 0.2],
                y: [0, -100, 0],
                x: [0, Math.random() * 40 - 20, 0],
              }}
              transition={{
                duration: 5 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.4,
              }}
              style={{
                left: `${10 + i * 9}%`,
                top: `${40 + (i % 3) * 15}%`,
              }}
            />
          ))}
          
          {/* Glowing Orbs */}
          <motion.div
            className="absolute -top-24 -right-24 w-[400px] h-[400px] rounded-full bg-yellow-400/20 dark:bg-yellow-500/10 blur-[90px]"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-24 -left-24 w-[350px] h-[350px] rounded-full bg-amber-400/20 dark:bg-purple-500/10 blur-[80px]"
            animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          />
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-center px-4"
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-500/10 dark:bg-yellow-400/10 border border-yellow-500/30 dark:border-yellow-400/20 mb-6 backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
            <span className="text-xs md:text-sm font-bold text-yellow-700 dark:text-yellow-300 uppercase tracking-wider">Insights & Articles</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4">
            All <span className="bg-gradient-to-r from-yellow-500 to-orange-500 dark:from-yellow-400 dark:to-amber-500 text-transparent bg-clip-text">Blogs</span>
          </h1>
          <p className="mt-2 text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto font-medium">
            Sharing my thoughts, tutorials, and latest updates from the world of development.
          </p>
        </motion.div>

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white dark:from-[#0a0219] to-transparent" />
      </section>

      {/* --- BLOG LISTING SECTION --- */}
      <section className="py-20 text-gray-800 bg-white dark:bg-[#0a0219] dark:text-gray-100">
        <div className="space-y-6 sm:space-y-12 page-container min-h-screen">
          
          {/* Latest Blog (Featured) */}
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="shadow-xl rounded-3xl overflow-hidden block sm:max-w-full group lg:grid lg:grid-cols-12 dark:bg-gray-800/40 bg-gray-100 border border-gray-200 dark:border-white/5 hover:border-amber-500/50 transition-all duration-500"
          >
            <div className="lg:col-span-7 overflow-hidden">
              <Image
                src={latestImage}
                alt={latestBlog.title}
                width={800}
                height={500}
                className="object-cover w-full h-64 sm:h-96 group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-8 lg:p-12 space-y-4 lg:col-span-5 flex flex-col justify-center">
              <span className="text-sm font-bold text-amber-500 uppercase tracking-widest">Featured Post</span>
              <h3 className="text-3xl font-black sm:text-4xl group-hover:text-amber-500 transition-colors">{latestBlog.title}</h3>
              <span className="text-sm text-gray-600 dark:text-gray-400 block italic">
                {latestBlog.createdAt ? new Date(latestBlog.createdAt).toDateString() : "No date available"}
              </span>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-3">
                {latestBlog.content.replace(/<\/?[^>]+(>|$)/g, "").substring(0, 150)}...
              </p>
              <div className="pt-4">
                <Link href={`/all-blogs/blog-details/${latestBlog._id}`}>
                   <GradientButton
                     className="h-11 w-full rounded-xl px-4 py-2 cursor-pointer flex items-center justify-center gap-2 group transition-all"
                   >
                     <span className="font-bold tracking-wide">Read Full Story</span>
                     <motion.span
                       animate={{ x: [0, 4, 0] }}
                       transition={{ repeat: Infinity, duration: 1.5 }}
                     >
                       <ArrowBigRight className="w-4 h-4" />
                     </motion.span>
                   </GradientButton>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Other Blogs (Grid) */}
          <div className="grid justify-center grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {otherBlogs.map((blog, index) => {
              const blogImage = extractFirstImage(blog.content) || "/default-image.jpg";
              return (
                <motion.div 
                  key={blog._id} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group dark:bg-gray-800/40 bg-gray-100 rounded-[2rem] overflow-hidden shadow-lg border border-gray-200 dark:border-white/5 hover:border-amber-500/50 transition-all duration-500"
                >
                  <div className="h-52 overflow-hidden">
                    <Image
                      src={blogImage}
                      alt={blog.title}
                      width={500}
                      height={500}
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-8">
                    <span className="text-xs font-bold text-amber-500 uppercase tracking-tighter">Article</span>
                    <h3 className="text-xl font-bold mt-2 mb-3 line-clamp-2 group-hover:text-amber-500 transition-colors">
                      {blog.title}
                    </h3>
                    <span className="text-xs text-gray-500 dark:text-gray-400 block mb-4">
                      {blog.createdAt ? new Date(blog.createdAt).toDateString() : "No date available"}
                    </span>
                    <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-6 leading-relaxed">
                      {blog.content.replace(/<\/?[^>]+(>|$)/g, "").substring(0, 80)}...
                    </p>
                    <Link href={`/all-blogs/blog-details/${blog._id}`}>
                   <GradientButton
                     className="h-11 w-full rounded-xl px-4 py-2 cursor-pointer flex items-center justify-center gap-2 group transition-all"
                   >
                     <span className="font-bold tracking-wide">Read Full Story</span>
                     <motion.span
                       animate={{ x: [0, 4, 0] }}
                       transition={{ repeat: Infinity, duration: 1.5 }}
                     >
                       <ArrowBigRight className="w-4 h-4" />
                     </motion.span>
                   </GradientButton>
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllBlogs;