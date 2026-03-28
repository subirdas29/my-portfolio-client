/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { TBlog } from "@/types/blogs";
import GradientButton from "@/utility/GradientButton";
import { motion } from "framer-motion";
import { ArrowBigRight, Sparkles, Ghost } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// [OPTIMIZATION] Memoize particle positions outside component
const particlePositions = [...Array(6)].map((_, i) => ({
  left: `${10 + i * 16}%`,
  top: `${40 + (i % 3) * 15}%`,
  duration: 7 + i,
  delay: i * 0.8,
  xRange: (i % 5 - 2) * 10,
}));

const Blogs = ({ blogs = [] }: { blogs: TBlog[] }) => {
  const hasBlogs = blogs && blogs.length > 0;

  return (
    <section className="py-16 lg:py-24 bg-white dark:bg-[#0a0219] transition-colors duration-300 overflow-hidden">
      <div className="page-container">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">
            My <span className="text-amber-500">Blogs</span>
          </h2>
          <div className="h-1.5 w-24 bg-amber-500 mx-auto rounded-full shadow-[0_0_15px_rgba(245,158,11,0.5)]" />
        </motion.div>

        {!hasBlogs ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center py-20 text-center"
          >
            <div className="p-8 rounded-full bg-amber-500/5 mb-6 border border-amber-500/10">
              <Ghost className="w-16 h-16 text-amber-500/50" />
            </div>
            <h3 className="text-2xl font-bold text-gray-400 dark:text-gray-600">
              No blogs available right now
            </h3>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.slice(0, 3).map((blog, index) => {
              const blogImage = blog.featuredImage || "/default-image.jpg";

              return (
                <motion.div
                  key={blog._id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.12,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="group relative rounded-3xl overflow-hidden p-[2px]"
                >
                  {/* --- Running Line Border --- */}
                  <div className="absolute inset-0 z-0">
                    <svg className="w-full h-full" preserveAspectRatio="none">
                      <rect
                        x="2"
                        y="2"
                        width="calc(100% - 4px)"
                        height="calc(100% - 4px)"
                        rx="24"
                        ry="24"
                        pathLength="100"
                        className="fill-none stroke-amber-500 stroke-[3] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        strokeDasharray="25 75"
                      >
                        <animate
                          attributeName="stroke-dashoffset"
                          from="100"
                          to="0"
                          dur="8s"
                          repeatCount="indefinite"
                        />
                      </rect>
                    </svg>
                  </div>

                  <div className="relative z-10 h-full bg-white dark:bg-gradient-to-br dark:from-[#0a0219] dark:via-[#120825] dark:to-[#1b0c2d] border border-gray-100 dark:border-white/5 rounded-3xl overflow-hidden flex flex-col shadow-xl">
                    {/* [OPTIMIZATION] Blog image: lazy loaded with explicit dimensions and sizes */}
                    <div className="relative w-full h-56 overflow-hidden z-20">
                      <Image
                        height={224}
                        width={500}
                        src={blogImage}
                        alt={blog.title}
                        className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>

                    {/* Blog Content Section with Bubbles */}
                    <div className="relative z-30 p-6 flex flex-col flex-grow overflow-hidden">
                      {/* [OPTIMIZATION] Animated bubbles - transform-only */}
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        {particlePositions.map((pos, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-2 h-2 rounded-full bg-amber-500 dark:bg-yellow-500/60 will-change-transform"
                            initial={{ opacity: 0 }}
                            animate={{
                              opacity: [0.3, 0.8, 0.3],
                              y: [0, -120, 0],
                              x: [0, pos.xRange, 0],
                            }}
                            transition={{
                              duration: pos.duration,
                              repeat: Infinity,
                              delay: pos.delay,
                              ease: "easeInOut",
                            }}
                            style={{ left: pos.left, top: pos.top }}
                          />
                        ))}
                      </div>

                      <div className="relative z-10 flex flex-col h-full">
                        <h3 className="text-xl md:text-2xl font-black text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-amber-500 transition-colors">
                          {blog.title}
                        </h3>

                        <p className="text-gray-600 dark:text-gray-400 mb-6 font-medium leading-relaxed line-clamp-2">
                          {blog.content
                            .replace(/<\/?[^>]+(>|$)/g, "")
                            .substring(0, 80)}
                          ...
                        </p>

                        <Link
                          href={`/all-blogs/blog-details/${blog?.slug}`}
                          className="mt-auto"
                        >
                          <GradientButton className="w-full h-12 rounded-xl text-sm font-black tracking-wide ">
                            <span>Read Full Story</span>
                            {/* [OPTIMIZATION] Arrow animation uses transform only */}
                            <motion.span
                              animate={{ x: [0, 4, 0] }}
                              transition={{
                                repeat: Infinity,
                                duration: 1.5,
                              }}
                              className="ml-2"
                            >
                              <ArrowBigRight className="w-5 h-5" />
                            </motion.span>
                          </GradientButton>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

        <div className="flex justify-center mt-16">
          <Link href="/all-blogs">
            <GradientButton className="px-10 py-4 rounded-2xl text-base">
              View All Blogs
            </GradientButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
