/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import { TBlog } from "@/types/blogs";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import GradientButton from "@/utility/GradientButton";
import { ArrowBigRight, Ghost, Sparkles } from "lucide-react";

const AllBlogs = ({ blogs = [] }: { blogs: TBlog[] }) => { 
  
  const hasBlogs = blogs && blogs.length > 0;
  const latestBlog = hasBlogs ? blogs[0] : null;
  const otherBlogs = (blogs && blogs.length > 1) ? blogs.slice(1) : [];
  
  const latestImage = latestBlog?.featuredImage || "/default-image.jpg";

  return (
    <div className="bg-white dark:bg-[#0a0219] transition-colors duration-300">
      {/* --- BANNER SECTION --- */}
      <section className="relative flex flex-col items-center justify-center min-h-[450px] bg-gradient-to-br from-[#F9FAFB] via-[#fff8e1] to-[#faffdd] dark:from-[#0a0219] dark:via-[#120825] dark:to-[#1b0c2d] text-gray-900 dark:text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-amber-500 dark:bg-yellow-500/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.2, 0.8, 0.2], y: [0, -100, 0], x: [0, Math.random() * 40 - 20, 0] }}
              transition={{ duration: 7 + i, repeat: Infinity, delay: i * 0.4, ease: "easeInOut" }}
              style={{ left: `${10 + i * 9}%`, top: `${40 + (i % 3) * 15}%` }}
            />
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="relative z-10 text-center px-4">
          <motion.div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-500/10 dark:bg-yellow-400/10 border border-yellow-500/30 dark:border-yellow-400/20 mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
            <span className="text-xs md:text-sm font-bold text-yellow-700 dark:text-yellow-300 uppercase tracking-wider">Insights & Articles</span>
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-4">
            All <span className="bg-gradient-to-r from-yellow-500 to-orange-500 dark:from-yellow-400 dark:to-amber-500 text-transparent bg-clip-text">Blogs</span>
          </h1>
          <p className="mt-2 text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto font-medium">Sharing my thoughts, tutorials, and latest updates from the world of development.</p>
        </motion.div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white dark:from-[#0a0219] to-transparent" />
      </section>

      {/* --- BLOG LISTING SECTION --- */}
      <section className="py-10 md:py-16 bg-white dark:bg-[#0a0219] transition-colors duration-300 min-h-[400px]">
        <div className="page-container px-4">
          
          {!hasBlogs ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center justify-center py-20 text-center">
                <div className="p-6 rounded-full bg-amber-500/10 mb-6">
                   <Ghost className="w-12 h-12 text-amber-500/50" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-400 dark:text-gray-600">No blogs available right now</h2>
            </motion.div>
          ) : (
            <div className="space-y-12">
              {/* --- Featured Post (Special Large Card) --- */}
              {latestBlog && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="group relative rounded-[2.5rem] overflow-hidden p-[2px]"
                >
                   {/* Border SVG */}
                  <div className="absolute inset-0 z-0">
                    <svg className="w-full h-full" preserveAspectRatio="none">
                      <rect x="2" y="2" width="calc(100% - 4px)" height="calc(100% - 4px)" rx="40" ry="40" pathLength="100" className="fill-none stroke-amber-500 stroke-[3] opacity-0 group-hover:opacity-100 transition-opacity duration-500" strokeDasharray="20 80">
                        <animate attributeName="stroke-dashoffset" from="100" to="0" dur="10s" repeatCount="indefinite" />
                      </rect>
                    </svg>
                  </div>

                  <div className="relative z-10 bg-white dark:bg-gradient-to-br dark:from-[#0a0219] dark:via-[#120825] dark:to-[#1b0c2d] border border-gray-100 dark:border-white/5 rounded-[2.4rem] overflow-hidden lg:grid lg:grid-cols-12 shadow-xl">
                    <div className="lg:col-span-7 overflow-hidden relative z-20">
                      <Image src={latestImage} alt={latestBlog.title} width={800} height={500} className="object-cover w-full h-64 sm:h-120 group-hover:scale-105 transition-transform duration-700" />
                    </div>
                    
                    {/* Content Area with Bubbles */}
                    <div className="p-8 lg:p-12 lg:col-span-5 flex flex-col justify-center relative z-30 overflow-hidden">
                      
                      {/* --- Animated Bubbles (Exact match with ProjectShowcase) --- */}
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        {[...Array(6)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-2 h-2 rounded-full bg-amber-500 dark:bg-yellow-500/60"
                            initial={{ opacity: 0 }}
                            animate={{
                              opacity: [0.3, 0.8, 0.3],
                              y: [0, -120, 0],
                              x: [0, Math.random() * 40 - 20, 0],
                            }}
                            transition={{
                              duration: 7 + i,
                              repeat: Infinity,
                              delay: i * 0.8,
                              ease: "easeInOut"
                            }}
                            style={{
                              left: `${10 + i * 16}%`,
                              top: `${40 + (i % 3) * 15}%`,
                            }}
                          />
                        ))}
                      </div>

                      <div className="relative z-10">
                        <span className="text-sm font-black text-amber-500 uppercase tracking-widest mb-2">Featured Post</span>
                        <h3 className="text-3xl font-black sm:text-4xl group-hover:text-amber-500 transition-colors mb-4">{latestBlog.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6 font-medium line-clamp-3">
                          {latestBlog.content.replace(/<\/?[^>]+(>|$)/g, "").substring(0, 150)}...
                        </p>
                        <Link href={`/all-blogs/blog-details/${latestBlog.slug}`}>
                          <GradientButton className="w-full h-12 rounded-xl text-sm font-black tracking-wide">
                            <span>Read Full Story</span>
                            <ArrowBigRight className="w-5 h-5 ml-2" />
                          </GradientButton>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* --- Other Blogs Grid --- */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {otherBlogs.map((blog, index) => {
                  const blogImage = blog.featuredImage || "/default-image.jpg";
                  return (
                    <motion.div 
                      key={blog._id} 
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="group relative rounded-[2.5rem] overflow-hidden p-[2px]"
                    >
                      <div className="absolute inset-0 z-0">
                        <svg className="w-full h-full" preserveAspectRatio="none">
                          <rect x="2" y="2" width="calc(100% - 4px)" height="calc(100% - 4px)" rx="38" ry="38" pathLength="100" className="fill-none stroke-amber-500 stroke-[3] opacity-0 group-hover:opacity-100 transition-opacity duration-500" strokeDasharray="25 75">
                            <animate attributeName="stroke-dashoffset" from="100" to="0" dur="8s" repeatCount="indefinite" />
                          </rect>
                        </svg>
                      </div>

                      <div className="relative z-10 h-full bg-white dark:bg-gradient-to-br dark:from-[#0a0219] dark:via-[#120825] dark:to-[#1b0c2d] border border-gray-100 dark:border-white/5 rounded-[2.4rem] overflow-hidden flex flex-col shadow-xl">
                        <div className="relative w-full h-52 overflow-hidden z-20">
                          <Image src={blogImage} alt={blog.title} width={500} height={500} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700" />
                        </div>
                        
                        {/* Content Area with Bubbles */}
                        <div className="relative z-30 p-8 flex flex-col flex-grow overflow-hidden">
                          
                          {/* --- Animated Bubbles (Exact match with ProjectShowcase) --- */}
                          <div className="absolute inset-0 overflow-hidden pointer-events-none">
                            {[...Array(6)].map((_, i) => (
                              <motion.div
                                key={i}
                                className="absolute w-2 h-2 rounded-full bg-amber-500 dark:bg-yellow-500/60"
                                initial={{ opacity: 0 }}
                                animate={{
                                  opacity: [0.3, 0.8, 0.3],
                                  y: [0, -120, 0],
                                  x: [0, Math.random() * 40 - 20, 0],
                                }}
                                transition={{
                                  duration: 7 + i,
                                  repeat: Infinity,
                                  delay: i * 0.8,
                                  ease: "easeInOut"
                                }}
                                style={{
                                  left: `${10 + i * 16}%`,
                                  top: `${40 + (i % 3) * 15}%`,
                                }}
                              />
                            ))}
                          </div>

                          <div className="relative z-10">
                            <h3 className="text-xl font-black text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-amber-500 transition-colors">
                              {blog.title}
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-6 font-medium leading-relaxed">
                              {blog.content.replace(/<\/?[^>]+(>|$)/g, "").substring(0, 100)}...
                            </p>
                            <Link href={`/all-blogs/blog-details/${blog?.slug}`} className="mt-auto">
                              <GradientButton className="w-full h-12 rounded-xl text-sm font-black tracking-wide">
                                <span>Read Full Story</span>
                                <ArrowBigRight className="w-5 h-5 ml-2" />
                              </GradientButton>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default AllBlogs;