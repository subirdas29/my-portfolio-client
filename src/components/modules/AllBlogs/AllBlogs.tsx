"use client";
import { TBlog } from "@/types/blogs";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import GradientButton from "@/utility/GradientButton";
import { ArrowBigRight, Clock, Ghost, Sparkles, Search, X } from "lucide-react";

function readingTime(content: string): number {
  const words = content.replace(/<[^>]*>/g, "").split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

const AllBlogs = ({ blogs = [] }: { blogs: TBlog[] }) => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = useMemo(() => {
    const cats = new Set<string>();
    blogs.forEach((b) => { if (b.category) cats.add(b.category); });
    return ["All", ...Array.from(cats).sort()];
  }, [blogs]);

  const filtered = useMemo(() => {
    return blogs.filter((b) => {
      const matchSearch =
        search === "" ||
        b.title.toLowerCase().includes(search.toLowerCase()) ||
        b.content.replace(/<[^>]*>/g, "").toLowerCase().includes(search.toLowerCase()) ||
        b.tags?.some((t) => t.toLowerCase().includes(search.toLowerCase()));
      const matchCat = activeCategory === "All" || b.category === activeCategory;
      return matchSearch && matchCat;
    });
  }, [blogs, search, activeCategory]);

  const hasBlogs = filtered.length > 0;
  const latestBlog = hasBlogs ? filtered[0] : null;
  const otherBlogs = filtered.length > 1 ? filtered.slice(1) : [];

  const latestImage = latestBlog?.featuredImage || "/default-image.jpg";

  return (
    <div className="bg-white dark:bg-[#0a0219] transition-colors duration-300">
      {/* --- BANNER SECTION --- */}
      <section className="relative flex flex-col items-center justify-center min-h-[450px] bg-gradient-to-br from-[#F9FAFB] via-[#fff8e1] to-[#faffdd] dark:from-[#0a0219] dark:via-[#120825] dark:to-[#1b0c2d] text-gray-900 dark:text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden" suppressHydrationWarning>
          {[...Array(6)].map((_, i) => (
            <div key={i} className={`css-particle css-particle--${i + 1}`} suppressHydrationWarning />
          ))}
          <div className="css-orb css-orb--amber absolute w-[500px] h-[500px] -top-32 -right-32 rounded-full bg-yellow-400/20 dark:bg-yellow-500/10 blur-[100px]" suppressHydrationWarning />
          <div className="css-orb css-orb--purple absolute w-[400px] h-[400px] -bottom-32 -left-32 rounded-full bg-amber-400/20 dark:bg-purple-500/10 blur-[80px]" suppressHydrationWarning />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-center px-4"
          suppressHydrationWarning
        >
          <motion.div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-500/10 dark:bg-yellow-400/10 border border-yellow-500/30 dark:border-yellow-400/20 mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
            <span className="text-xs md:text-sm font-bold text-yellow-700 dark:text-yellow-300 uppercase tracking-wider">
              Insights & Articles
            </span>
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-4">
            All{" "}
            <span className="bg-gradient-to-r from-yellow-500 to-orange-500 dark:from-yellow-400 dark:to-amber-500 text-transparent bg-clip-text">
              Blogs
            </span>
          </h1>
          <p className="mt-2 text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto font-medium">
            Sharing my thoughts, tutorials, and latest updates from the world
            of development.
          </p>
        </motion.div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white dark:from-[#0a0219] to-transparent" />
      </section>

      {/* --- SEARCH + FILTER --- */}
      <section className="py-6 border-b border-slate-100 dark:border-white/5 sticky top-16 z-30 backdrop-blur-md bg-white/90 dark:bg-[#0a0219]/90">
        <div className="page-container px-4 space-y-4">
          <div className="relative max-w-lg mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search blogs by title, content or tags..."
              className="w-full pl-11 pr-10 py-3 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:border-amber-500/50 transition-colors"
            />
            {search && (
              <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-amber-500 text-white shadow-md shadow-amber-500/30"
                    : "bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/10 hover:border-amber-500/40"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <p className="text-center text-xs text-slate-400 dark:text-slate-500">
            {filtered.length} blog{filtered.length !== 1 ? "s" : ""} found
          </p>
        </div>
      </section>

      {/* --- BLOG LISTING SECTION --- */}
      <section className="py-10 md:py-16 bg-white dark:bg-[#0a0219] transition-colors duration-300 min-h-[400px]">
        <div className="page-container px-4">
          {!hasBlogs ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center py-20 text-center"
              suppressHydrationWarning
            >
              <div className="p-6 rounded-full bg-amber-500/10 mb-6">
                <Ghost className="w-12 h-12 text-amber-500/50" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-400 dark:text-gray-600">
                {search || activeCategory !== "All" ? "No blogs match your filter" : "No blogs available right now"}
              </h2>
              {(search || activeCategory !== "All") && (
                <button
                  onClick={() => { setSearch(""); setActiveCategory("All"); }}
                  className="mt-4 text-amber-500 text-sm font-semibold hover:underline"
                >
                  Clear filters
                </button>
              )}
            </motion.div>
          ) : (
            <div className="space-y-12">
              {/* --- Featured Post (Special Large Card) --- */}
              {latestBlog && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.5,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="group relative rounded-[2.5rem] overflow-hidden p-[2px]"
                  suppressHydrationWarning
                >
                  {/* Border SVG */}
                  <div className="absolute inset-0 z-0">
                    <svg
                      className="w-full h-full"
                      preserveAspectRatio="none"
                    >
                      <rect
                        x="2"
                        y="2"
                        width="calc(100% - 4px)"
                        height="calc(100% - 4px)"
                        rx="40"
                        ry="40"
                        pathLength="100"
                        className="fill-none stroke-amber-500 stroke-[3] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        strokeDasharray="20 80"
                      >
                        <animate
                          attributeName="stroke-dashoffset"
                          from="100"
                          to="0"
                          dur="10s"
                          repeatCount="indefinite"
                        />
                      </rect>
                    </svg>
                  </div>

                  <div className="relative z-10 bg-white dark:bg-gradient-to-br dark:from-[#0a0219] dark:via-[#120825] dark:to-[#1b0c2d] border border-gray-100 dark:border-white/5 rounded-[2.4rem] overflow-hidden lg:grid lg:grid-cols-12 shadow-xl">
                    {/* [OPTIMIZATION] Featured image: eager loaded (above fold on this page) */}
                    <div className="lg:col-span-7 overflow-hidden relative z-20">
                      <Image
                        src={latestImage}
                        alt={latestBlog.title}
                        width={800}
                        height={500}
                        className="object-cover w-full h-64 sm:h-120 group-hover:scale-105 transition-transform duration-700"
                        priority
                        sizes="(max-width: 1024px) 100vw, 58vw"
                      />
                    </div>

                    {/* Content Area with Bubbles */}
                    <div className="p-8 lg:p-12 lg:col-span-5 flex flex-col justify-center relative z-30 overflow-hidden">
                      {/* [OPTIMIZATION] Animated bubbles - transform-only */}
                      <div className="absolute inset-0 overflow-hidden pointer-events-none" suppressHydrationWarning>
                        {[...Array(6)].map((_, i) => (
                          <div key={i} className={`css-particle css-particle--${i + 1}`} suppressHydrationWarning />
                        ))}
                      </div>

                      <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-sm font-black text-amber-500 uppercase tracking-widest">
                            Featured Post
                          </span>
                          <span className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                            <Clock className="w-3 h-3" />
                            {readingTime(latestBlog.content)} min read
                          </span>
                        </div>
                        <h3 className="text-3xl font-black sm:text-4xl text-gray-900 dark:text-white group-hover:text-amber-500 transition-colors mb-4">
                       
                          {latestBlog.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6 font-medium line-clamp-3">
                          {latestBlog.content
                            .replace(/<\/?[^>]+(>|$)/g, "")
                            .substring(0, 150)}
                          ...
                        </p>
                        <Link
                          href={`/all-blogs/blog-details/${latestBlog.slug}`}
                        >
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
                  const blogImage =
                    blog.featuredImage || "/default-image.jpg";
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
                      className="group relative rounded-[2.5rem] overflow-hidden p-[2px]"
                      suppressHydrationWarning
                    >
                      <div className="absolute inset-0 z-0">
                        <svg
                          className="w-full h-full"
                          preserveAspectRatio="none"
                        >
                          <rect
                            x="2"
                            y="2"
                            width="calc(100% - 4px)"
                            height="calc(100% - 4px)"
                            rx="38"
                            ry="38"
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

                      <div className="relative z-10 h-full bg-white dark:bg-gradient-to-br dark:from-[#0a0219] dark:via-[#120825] dark:to-[#1b0c2d] border border-gray-100 dark:border-white/5 rounded-[2.4rem] overflow-hidden flex flex-col shadow-xl">
                        {/* [OPTIMIZATION] Blog images: lazy loaded */}
                        <div className="relative w-full h-52 overflow-hidden z-20">
                          <Image
                            src={blogImage}
                            alt={blog.title}
                            width={500}
                            height={500}
                            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                            loading="lazy"
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
                        </div>

                        {/* Content Area with Bubbles */}
                        <div className="relative z-30 p-8 flex flex-col flex-grow overflow-hidden">
                          {/* [OPTIMIZATION] Animated bubbles - transform-only */}
                          <div className="absolute inset-0 overflow-hidden pointer-events-none" suppressHydrationWarning>
                            {[...Array(6)].map((_, i) => (
                              <div key={i} className={`css-particle css-particle--${i + 1}`} suppressHydrationWarning />
                            ))}
                          </div>

                          <div className="relative z-10">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                                <Clock className="w-3 h-3" />
                                {readingTime(blog.content)} min read
                              </span>
                            </div>
                            <h3 className="text-xl font-black text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-amber-500 transition-colors">
                              {blog.title}
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-6 font-medium leading-relaxed">
                              {blog.content
                                .replace(/<\/?[^>]+(>|$)/g, "")
                                .substring(0, 100)}
                              ...
                            </p>
                            <Link
                              href={`/all-blogs/blog-details/${blog?.slug}`}
                              className="mt-auto"
                            >
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
