/* eslint-disable @typescript-eslint/no-explicit-any */
"use server"

    // get all Blogs
    export const getAllBlogs = async (page?: string,limit?:string) => {
        try {
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_API}/blogs?limit=${limit}&page=${page}`,
            {
              next: {
                tags: ["Blogs"],
              },
            }
          );
          const data = await res.json();
          return data;
        } catch (error: any) {
          return Error(error.message);
        }
      };