/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

export const getStats = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/stats`, {
      next: { revalidate: 60 },
    });
    const data = await res.json();
    return data;
  } catch (error: any) {
    return { data: { totalProjects: 0, totalBlogs: 0, totalClients: 0, totalTestimonials: 0 }, message: error.message };
  }
};
