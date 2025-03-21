"use client";

import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

// Blog type definition
type TBlog = {
  _id?: string;
  title: string;
  category: string;
  content: string;
  createdAt: string; // ISO date string
};

type BlogDetailsProps = {
  blog: TBlog;
  allBlogs: TBlog[];
};

const BlogDetails = ({ blog, allBlogs }: BlogDetailsProps) => {
  const formattedDate = blog.createdAt
    ? new Date(blog.createdAt).toDateString()
    : "No date available";

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  // 🔹 Get latest 3 blogs (sorted by createdAt)
  const latestPosts = [...allBlogs]
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, 3);

  // 🔹 Get related posts (same category, excluding the current blog)
  const relatedPosts = allBlogs
    .filter((post) => post?.category === blog?.category && post._id !== blog._id)
    .slice(0, 3);

  // Function to extract the first image from blog content
  const extractFirstImage = (content: string) => {
    const match = content.match(/<img[^>]+src="([^"]+)"/);
    return match ? match[1] : "/default-thumbnail.jpg"; // Use default image if no image found
  };

  return (
    <section className="py-12 ">
      <div className="my-20 mx-12 md:mx-16 lg:mx-28 px-4 flex flex-col lg:flex-row gap-8">
        {/* Main Blog Content */}
        <div className="lg:w-2/3 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          {/* Blog Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {blog.title}
          </h1>

          {/* Blog Metadata */}
          <div className="flex items-center gap-4 text-sm text-gray-700 dark:text-gray-400 mb-6">
            <span className="font-semibold text-primary">{blog.category}</span>
            <span>•</span>
            <span>{formattedDate}</span>
          </div>

          {/* Blog Content */}
          <div className="prose dark:prose-invert max-w-none leading-relaxed">
            <div dangerouslySetInnerHTML={{
              __html: blog.content.replace(
                /<img /g,
                '<img class="w-3/4 md:w-4/5 mx-auto rounded-lg shadow-md mb-6" '
              ),
            }}></div>
          </div>
        </div>

        {/* Sidebar Section (Large & Tablet Screens) */}
        <aside className="lg:w-1/3 flex flex-col gap-8">
          {/* Share Buttons */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Share this post</h2>
            <div className="flex justify-start gap-4">
              <a href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`} target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-blue-600 text-2xl hover:opacity-80 cursor-pointer" />
              </a>
              <a href={`https://twitter.com/intent/tweet?url=${shareUrl}`} target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-blue-400 text-2xl hover:opacity-80 cursor-pointer" />
              </a>
              <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`} target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-blue-700 text-2xl hover:opacity-80 cursor-pointer" />
              </a>
            </div>
          </div>

          {/* Latest Posts */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Latest Posts</h2>
            {latestPosts?.length > 0 ? (
              <ul className="space-y-4">
                {latestPosts?.map((post) => (
                  <li key={post._id} className="flex items-center gap-3">
                    {extractFirstImage(post.content) && (
                      <Image src={extractFirstImage(post.content)!} alt={post.title} width={50} height={50} className="rounded-md" />
                    )}
                    <Link href={`/all-blogs/blog-details/${post._id}`} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition">
                      {post.title}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500 dark:text-gray-400">No latest posts available.</p>
            )}
          </div>

          {/* Related Posts */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Related Posts</h2>
            {relatedPosts?.length > 0 ? (
              <ul className="space-y-4">
                {relatedPosts?.map((post) => (
                  <li key={post._id} className="flex items-center gap-3">
                    {extractFirstImage(post.content) && (
                      <Image src={extractFirstImage(post.content)!} alt={post.title} width={50} height={50} className="rounded-md" />
                    )}
                    <Link href={`/all-blogs/blog-details/${post._id}`} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition">
                      {post.title}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500 dark:text-gray-400">No related posts available.</p>
            )}
          </div>
        </aside>
      </div>
    </section>
  );
};

export default BlogDetails;