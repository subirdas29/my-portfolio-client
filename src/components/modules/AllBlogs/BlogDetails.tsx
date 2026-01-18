/* eslint-disable @next/next/no-img-element */
"use client";

import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { TBlog } from "@/types/blogs";

type BlogDetailsProps = {
  blog: TBlog;
  allBlogs: TBlog[];
};

const BlogDetails = ({ blog, allBlogs }: BlogDetailsProps) => {
  const formattedDate = blog.createdAt
    ? new Date(blog.createdAt).toDateString()
    : "No date available";

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  // লেটেস্ট পোস্ট লজিক
  const latestPosts = [...allBlogs]
    .sort((a, b) => new Date(b?.createdAt || 0).getTime() - new Date(a?.createdAt || 0).getTime())
    .slice(0, 3);

  // 🔹 রিলেটেড পোস্ট লজিক: একই ক্যাটাগরির পোস্টগুলো খুঁজে বের করা (বর্তমান পোস্টটি বাদে)
  const relatedPosts = allBlogs
    .filter((post) => post?.category === blog?.category && post._id !== blog._id)
    .slice(0, 3);

  const cardBackground = "bg-gradient-to-br dark:via-[#120825] dark:to-[#1b0c2d] border border-gray-200 dark:border-white/5 transition-colors duration-300";

  return (
    <section className="py-12 bg-white dark:bg-[#0a0219] transition-colors duration-300">
      <div className="my-10 md:my-20 mx-4 md:mx-16 lg:mx-28 px-0 md:px-4 flex flex-col lg:flex-row gap-8 items-start">
        
        {/* Main Blog Content Area (Left) */}
        <div className={`lg:w-2/3 rounded-[1.5rem] md:rounded-[2rem] p-5 md:p-12 ${cardBackground}`}>
          
          <div className="flex items-center gap-4 text-sm mb-6">
            <span className="px-4 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold border border-amber-500/20 uppercase tracking-widest text-[10px] md:text-xs">
              {blog.category}
            </span>
            <span className="text-gray-500 font-medium">{formattedDate}</span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-8 md:mb-10 leading-tight tracking-tighter">
            {blog.title}
          </h1>

          {/* Featured Image */}
          {blog.featuredImage && (
            <div className="relative w-full mb-10 overflow-hidden rounded-2xl md:rounded-[2.5rem] border border-transparent dark:border-white/5 shadow-xl bg-black/5">
              <img 
                src={blog.featuredImage} 
                alt={blog.title} 
                className="w-full h-auto block object-contain mx-auto"
                style={{ maxHeight: '60vh' }}
              />
            </div>
          )}

          {/* Blog Content */}
          <div className="prose prose-base md:prose-xl dark:prose-invert max-w-none leading-relaxed
            prose-headings:font-black prose-headings:tracking-tight prose-headings:text-slate-900 dark:prose-headings:text-white
            prose-p:text-gray-600 dark:prose-p:text-gray-300 prose-p:leading-[1.7] md:prose-p:leading-[1.8]
            prose-img:rounded-xl md:prose-img:rounded-2xl 
            prose-img:mx-auto 
            prose-img:max-w-[90%] md:prose-img:max-w-[50%] 
            prose-img:h-auto 
            prose-img:shadow-lg
            prose-img:my-8 md:prose-img:my-12
            prose-ul:list-disc prose-ul:marker:text-amber-500
            prose-ol:list-decimal prose-ol:marker:text-amber-500
            prose-blockquote:border-l-amber-500 prose-blockquote:bg-amber-500/5 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-xl">
            <div dangerouslySetInnerHTML={{ __html: blog.content }} />
          </div>

          {/* Tags */}
          {blog.tags && blog.tags.length > 0 && (
            <div className="mt-16 pt-8 border-t border-gray-200 dark:border-white/5">
              <h3 className="text-sm font-black text-amber-500 uppercase tracking-widest mb-4">Explore Topics</h3>
              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className="px-4 py-1.5 rounded-lg bg-slate-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 text-xs md:text-sm font-bold border border-transparent hover:border-amber-500 transition-all cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar (Right) */}
        <aside className="lg:w-1/3 w-full flex flex-col gap-8 lg:sticky lg:top-24">
          
          {/* Share Card */}
          <div className={`rounded-[1.5rem] md:rounded-3xl p-6 md:p-8 ${cardBackground}`}>
            <h2 className="text-lg md:text-xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
              Share <span className="text-amber-500">Post</span>
            </h2>
            <div className="flex justify-start gap-4">
              {[
                { icon: <FaFacebook size={20} />, link: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}` },
                { icon: <FaTwitter size={20} />, link: `https://twitter.com/intent/tweet?url=${shareUrl}` },
                { icon: <FaLinkedin size={20} />, link: `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}` }
              ].map((item, idx) => (
                <a 
                  key={idx}
                  href={item.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 md:p-4 bg-slate-100 dark:bg-white/5 rounded-xl md:rounded-2xl text-slate-600 dark:text-slate-300 hover:bg-amber-500 hover:text-white transition-all duration-300 shadow-sm"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Latest Posts */}
          <div className={`rounded-[1.5rem] md:rounded-3xl p-6 md:p-8 ${cardBackground}`}>
            <h2 className="text-lg md:text-xl font-black text-slate-900 dark:text-white mb-8 tracking-tight">
              Latest <span className="text-amber-500">Insights</span>
            </h2>
            <div className="space-y-6">
              {latestPosts.map((post) => (
                <Link key={post._id} href={`/all-blogs/blog-details/${post.slug}`} className="group flex items-center gap-4">
                  <div className="relative w-14 h-14 md:w-16 md:h-16 shrink-0 overflow-hidden rounded-xl border border-slate-200 dark:border-white/10">
                     <Image src={post.featuredImage || "/default-thumbnail.jpg"} alt={post.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <h4 className="text-sm font-bold text-gray-800 dark:text-gray-200 leading-snug group-hover:text-amber-500 transition-colors line-clamp-2">
                    {post.title}
                  </h4>
                </Link>
              ))}
            </div>
          </div>

          {/* 🔹 Related Posts - Added here */}
          <div className={`rounded-[1.5rem] md:rounded-3xl p-6 md:p-8 ${cardBackground}`}>
            <h2 className="text-lg md:text-xl font-black text-slate-900 dark:text-white mb-8 tracking-tight">
              Related <span className="text-amber-500">Reads</span>
            </h2>
            {relatedPosts.length > 0 ? (
              <div className="space-y-6">
                {relatedPosts.map((post) => (
                  <Link key={post._id} href={`/all-blogs/blog-details/${post.slug}`} className="group flex items-center gap-4">
                    <div className="relative w-14 h-14 md:w-16 md:h-16 shrink-0 overflow-hidden rounded-xl border border-slate-200 dark:border-white/10">
                       <Image src={post.featuredImage || "/default-thumbnail.jpg"} alt={post.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <h4 className="text-sm font-bold text-gray-800 dark:text-gray-200 leading-snug group-hover:text-amber-500 transition-colors line-clamp-2">
                      {post.title}
                    </h4>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-gray-500 text-sm italic py-2">
                No similar posts in this category.
              </div>
            )}
          </div>
        </aside>
      </div>
    </section>
  );
};

export default BlogDetails;