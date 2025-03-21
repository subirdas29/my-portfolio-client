/* eslint-disable @typescript-eslint/no-explicit-any */
"use server"

    // get all skills
    export const getAllSkills = async (page?: string,limit?:string) => {
        try {
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_API}/skills?limit=${limit}&page=${page}`,
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