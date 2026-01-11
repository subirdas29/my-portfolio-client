/* eslint-disable @typescript-eslint/no-explicit-any */
"use server"

    // get all Blogs
    export const getAllBlogs = async (page?: string,limit?:string) => {
        try {
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_API}/blogs?limit=${limit}&page=${page}`,
            {
              next: {
                revalidate: 30
              },
            }
          );
          const data = await res.json();
          return data;
        } catch (error: any) {
          return Error(error.message);
        }
      };

        // get single blog
export const getSingleBlog = async (slug: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/blogs/blog/${slug}`,
      {
        next: {
          revalidate: 30
        },
      }
    );
    const data = await res.json();
    console.log(data,'server')
    return data;
  } catch (error: any) {
    return Error(error);
  }
};