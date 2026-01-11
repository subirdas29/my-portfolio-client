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

  const latestPosts = [...allBlogs]
    .sort((a, b) => new Date(b?.createdAt || 0).getTime() - new Date(a?.createdAt || 0).getTime())
    .slice(0, 3);

  // 🔹 Get related posts
  const relatedPosts = allBlogs
    .filter((post) => post?.category === blog?.category && post._id !== blog._id)
    .slice(0, 3);

  const extractFirstImage = (content: string) => {
    const match = content.match(/<img[^>]+src="([^"]+)"/);
    return match ? match[1] : "/default-thumbnail.jpg";
  };

 
  const cardBackground = "bg-gradient-to-br  dark:via-[#120825] dark:to-[#1b0c2d] border border-gray-200 dark:border-white/5 transition-colors duration-300";

  return (
    <section className="py-12 bg-white dark:bg-[#0a0219] transition-colors duration-300">
      <div className="my-20 mx-6 md:mx-16 lg:mx-28 px-4 flex flex-col lg:flex-row gap-8">
        
        {/* Main Blog Content Area */}
        <div className={`lg:w-2/3 rounded-[2rem] p-8 md:p-12 ${cardBackground}`}>
          {/* Blog Title */}
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 leading-tight">
            {blog.title}
          </h1>

          {/* Blog Metadata */}
          <div className="flex items-center gap-4 text-sm mb-8">
            <span className="px-4 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold border border-amber-500/20">
              {blog.category}
            </span>
            <span className="text-gray-500">•</span>
            <span className="text-gray-500 font-medium">{formattedDate}</span>
          </div>

          {/* Blog Content */}
          <div className="prose dark:prose-invert max-w-none leading-relaxed prose-img:rounded-3xl prose-img:shadow-2xl prose-headings:font-black prose-p:text-gray-700 dark:prose-p:text-gray-300">
            <div dangerouslySetInnerHTML={{
              __html: blog.content.replace(
                /<img /g,
                '<img class="w-full md:w-4/5 mx-auto rounded-[2rem] shadow-2xl mb-10 mt-6" '
              ),
            }}></div>
          </div>
        </div>

        {/* Sidebar Section */}
        <aside className="lg:w-1/3 flex flex-col gap-8">
          
          {/* Share Buttons Card */}
          <div className={`rounded-3xl p-6 ${cardBackground}`}>
            <h2 className="text-xl font-black text-gray-900 dark:text-white mb-4">Share post</h2>
            <div className="flex justify-start gap-5">
              <a href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                <FaFacebook className="text-blue-600 text-3xl" />
              </a>
              <a href={`https://twitter.com/intent/tweet?url=${shareUrl}`} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                <FaTwitter className="text-sky-400 text-3xl" />
              </a>
              <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                <FaLinkedin className="text-blue-700 text-3xl" />
              </a>
            </div>
          </div>

          {/* Latest Posts Card */}
          <div className={`rounded-3xl p-6 ${cardBackground}`}>
            <h2 className="text-xl font-black text-gray-900 dark:text-white mb-6">Latest Posts</h2>
            {latestPosts?.length > 0 ? (
              <ul className="space-y-6">
                {latestPosts?.map((post) => (
                  <li key={post._id} className="group">
                    <Link href={`/all-blogs/blog-details/${post.slug}`} className="flex items-center gap-4">
                      <div className="relative w-16 h-16 shrink-0 overflow-hidden rounded-xl border border-amber-500/20">
                         <Image 
                           src={extractFirstImage(post.content)} 
                           alt={post.title} 
                           fill 
                           className="object-cover group-hover:scale-110 transition-transform duration-500" 
                         />
                      </div>
                      <span className="text-gray-800 dark:text-gray-200 font-bold leading-snug group-hover:text-amber-500 transition-colors line-clamp-2">
                        {post.title}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">No latest posts available.</p>
            )}
          </div>

          {/* Related Posts Card */}
          <div className={`rounded-3xl p-6 ${cardBackground}`}>
            <h2 className="text-xl font-black text-gray-900 dark:text-white mb-6">Related Posts</h2>
            {relatedPosts?.length > 0 ? (
              <ul className="space-y-6">
                {relatedPosts?.map((post) => (
                  <li key={post._id} className="group">
                    <Link href={`/all-blogs/blog-details/${post.slug}`} className="flex items-center gap-4">
                      <div className="relative w-16 h-16 shrink-0 overflow-hidden rounded-xl border border-amber-500/20">
                         <Image 
                           src={extractFirstImage(post.content)} 
                           alt={post.title} 
                           fill 
                           className="object-cover group-hover:scale-110 transition-transform duration-500" 
                         />
                      </div>
                      <span className="text-gray-800 dark:text-gray-200 font-bold leading-snug group-hover:text-amber-500 transition-colors line-clamp-2">
                        {post.title}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">No related posts available.</p>
            )}
          </div>
        </aside>
      </div>
    </section>
  );
};

export default BlogDetails;