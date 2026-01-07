/* eslint-disable @typescript-eslint/no-explicit-any */
"use server"  
  
  // get all projects
/* eslint-disable @typescript-eslint/no-explicit-any */
"use server"  
  
export const getAllProjects = async (page = "1", limit = "10", projectType = "") => {
  try {
   
    const url = new URL(`${process.env.NEXT_PUBLIC_BASE_API}/projects`);
    url.searchParams.append("page", page);
    url.searchParams.append("limit", limit);
    if (projectType) {
      url.searchParams.append("projectType", projectType);
    }

    const res = await fetch(url.toString(), {
      next: {
        revalidate: 30
      },
    });
    
    const data = await res.json();
    return data;
  } catch (error: any) {
    return { data: [], message: error.message };
  }
};


  // get single product
export const getSingleProject = async (projectId: string) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API}/projects/project/${projectId}`,
        {
          next: {
            revalidate: 30
          },
        }
      );
      const data = await res.json();
      return data;
    } catch (error: any) {
      return Error(error);
    }
  };