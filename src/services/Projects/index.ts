/* eslint-disable @typescript-eslint/no-explicit-any */
"use server"  
  
  // get all projects
  export const getAllProjects = async (page?: string,limit?:string) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API}/projects?limit=${limit}&page=${page}`,
        {
          next: {
            tags: ["Projects"],
          },
        }
      );
      const data = await res.json();
      return data;
    } catch (error: any) {
      return Error(error.message);
    }
  };


  // get single product
export const getSingleProject = async (projectId: string) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API}/projects/project/${projectId}`,
        {
          next: {
            tags: ["Projects"],
          },
        }
      );
      const data = await res.json();
      return data;
    } catch (error: any) {
      return Error(error);
    }
  };