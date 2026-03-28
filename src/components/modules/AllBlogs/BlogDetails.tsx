"use client";

import { useState, useEffect } from "react";
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

  const [shareUrl, setShareUrl] = useState("");

  useEffect(() => {
    setShareUrl(window.location.href);
  }, []);

  const latestPosts = [...allBlogs]
    .sort((a, b) => new Date(b?.createdAt || 0).getTime() - new Date(a?.createdAt || 0).getTime())
    .slice(0, 3);

  const relatedPosts = allBlogs
    .filter((post) => post?.category === blog?.category && post._id !== blog._id)
    .slice(0, 3);

  const cardBackground = "bg-gradient-to-br dark:via-[#120825] dark:to-[#1b0c2d] border border-gray-200 dark:border-white/5 transition-colors duration-300";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    image: blog.featuredImage,
    datePublished: blog.createdAt,
    dateModified: blog.createdAt,
    author: {
      "@type": "Person",
      name: "Subir Das",
      url: "https://subirdas.com",
    },
    publisher: {
      "@type": "Person",
      name: "Subir Das",
      url: "https://subirdas.com",
    },
    description: blog.summary || blog.content?.replace(/<[^>]*>/g, "").substring(0, 160),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://subirdas.com/all-blogs/blog-details/${blog.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="w-full bg-white dark:bg-[#0a0219] transition-colors duration-300">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 py-6 md:py-10 lg:py-24 flex flex-col lg:flex-row gap-6 md:gap-8 items-start">

        {/* Main Blog Content Area */}
        <div className={`w-full lg:w-2/3 rounded-xl md:rounded-2xl lg:rounded-[2rem]  p-4 sm:p-6 md:p-10 lg:p-12 ${cardBackground}`}>

          <div className="flex flex-wrap items-center gap-2 md:gap-4 mb-4 md:mb-6">
            <span className="px-3 md:px-4 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold border border-amber-500/20 uppercase tracking-widest text-[10px] md:text-xs">
              {blog.category}
            </span>
            <span className="text-gray-500 font-medium text-xs md:text-sm">{formattedDate}</span>
          </div>

          <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 dark:text-white mb-5 md:mb-8 lg:mb-10 leading-tight tracking-tighter">
            {blog.title}
          </h1>

          {/* Featured Image */}
          {blog.featuredImage && (
            <figure className="relative w-full mb-5 md:mb-8 lg:mb-10 overflow-hidden rounded-lg md:rounded-2xl lg:rounded-[2.5rem] border border-transparent dark:border-white/5 shadow-xl bg-black/5">
              <Image
                src={blog.featuredImage}
                alt={blog.title}
                width={1200}
                height={630}
                priority
                className="w-full h-auto block object-contain mx-auto"
                style={{ maxHeight: '60vh' }}
              />
              <figcaption className="sr-only">{blog.title}</figcaption>
            </figure>
          )}

          {/* Blog Content */}
          <div className="prose prose-sm sm:prose-base lg:prose-xl dark:prose-invert max-w-none leading-relaxed
            prose-headings:font-black prose-headings:tracking-tight prose-headings:text-slate-900 dark:prose-headings:text-white
            prose-p:text-gray-600 dark:prose-p:text-gray-300 prose-p:leading-[1.6] md:prose-p:leading-[1.8]
            prose-img:rounded-lg md:prose-img:rounded-xl lg:prose-img:rounded-2xl
            prose-img:mx-auto
            prose-img:max-w-full md:prose-img:max-w-[90%] lg:prose-img:max-w-[50%]
            prose-img:h-auto
            prose-img:shadow-lg
            prose-img:my-6 md:prose-img:my-10
            prose-ul:list-disc prose-ul:marker:text-amber-500
            prose-ol:list-decimal prose-ol:marker:text-amber-500
            prose-blockquote:border-l-amber-500 prose-blockquote:bg-amber-500/5 prose-blockquote:py-2 prose-blockquote:px-4 md:prose-blockquote:px-6 prose-blockquote:rounded-r-lg md:prose-blockquote:rounded-r-xl">
            <div dangerouslySetInnerHTML={{ __html: blog.content }} />
          </div>

          {/* Tags */}
          {blog.tags && blog.tags.length > 0 && (
            <div className="mt-6 md:mt-10 lg:mt-16 pt-5 md:pt-8 border-t border-gray-200 dark:border-white/5">
              <h3 className="text-xs md:text-sm font-black text-amber-500 uppercase tracking-widest mb-3 md:mb-4">Explore Topics</h3>
              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 md:px-4 py-1 md:py-1.5 rounded-lg bg-slate-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 text-xs md:text-sm font-bold border border-transparent hover:border-amber-500 transition-all cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <aside className="w-full lg:w-1/3 flex flex-col gap-5 md:gap-8 lg:sticky lg:top-24">

          {/* Share Card */}
          <div className={`rounded-xl md:rounded-2xl lg:rounded-3xl p-4 sm:p-5 md:p-6 lg:p-8 ${cardBackground}`}>
            <h2 className="text-base md:text-lg lg:text-xl font-black text-slate-900 dark:text-white mb-4 md:mb-6 tracking-tight">
              Share <span className="text-amber-500">Post</span>
            </h2>
            <div className="flex gap-3 md:gap-4">
              {[
                { icon: <FaFacebook size={18} />, link: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}` },
                { icon: <FaTwitter size={18} />, link: `https://twitter.com/intent/tweet?url=${shareUrl}` },
                { icon: <FaLinkedin size={18} />, link: `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}` }
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 md:p-3 lg:p-4 bg-slate-100 dark:bg-white/5 rounded-lg md:rounded-xl lg:rounded-2xl text-slate-600 dark:text-slate-300 hover:bg-amber-500 hover:text-white transition-all duration-300 shadow-sm"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Latest Posts */}
          <div className={`rounded-xl md:rounded-2xl lg:rounded-3xl p-4 sm:p-5 md:p-6 lg:p-8 ${cardBackground}`}>
            <h2 className="text-base md:text-lg lg:text-xl font-black text-slate-900 dark:text-white mb-4 md:mb-6 lg:mb-8 tracking-tight">
              Latest <span className="text-amber-500">Insights</span>
            </h2>
            <div className="space-y-4 md:space-y-6">
              {latestPosts.map((post) => (
                <Link key={post._id} href={`/all-blogs/blog-details/${post.slug}`} className="group flex items-center gap-3 md:gap-4">
                  <div className="relative w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 shrink-0 overflow-hidden rounded-lg md:rounded-xl border border-slate-200 dark:border-white/10">
                    <Image src={post.featuredImage || "/default-thumbnail.jpg"} alt={post.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <h4 className="text-xs md:text-sm font-bold text-gray-800 dark:text-gray-200 leading-snug group-hover:text-amber-500 transition-colors line-clamp-2">
                    {post.title}
                  </h4>
                </Link>
              ))}
            </div>
          </div>

          {/* Related Posts */}
          <div className={`rounded-xl md:rounded-2xl lg:rounded-3xl p-4 sm:p-5 md:p-6 lg:p-8 ${cardBackground}`}>
            <h2 className="text-base md:text-lg lg:text-xl font-black text-slate-900 dark:text-white mb-4 md:mb-6 lg:mb-8 tracking-tight">
              Related <span className="text-amber-500">Reads</span>
            </h2>
            {relatedPosts.length > 0 ? (
              <div className="space-y-4 md:space-y-6">
                {relatedPosts.map((post) => (
                  <Link key={post._id} href={`/all-blogs/blog-details/${post.slug}`} className="group flex items-center gap-3 md:gap-4">
                    <div className="relative w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 shrink-0 overflow-hidden rounded-lg md:rounded-xl border border-slate-200 dark:border-white/10">
                      <Image src={post.featuredImage || "/default-thumbnail.jpg"} alt={post.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <h4 className="text-xs md:text-sm font-bold text-gray-800 dark:text-gray-200 leading-snug group-hover:text-amber-500 transition-colors line-clamp-2">
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
    </article>
    </>
  );
};

export default BlogDetails;
