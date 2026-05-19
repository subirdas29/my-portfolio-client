/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

export const getAllCertifications = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/certifications`, {
      next: { revalidate: 60 },
    });
    return await res.json();
  } catch (error: any) {
    return { data: [], message: error.message };
  }
};
