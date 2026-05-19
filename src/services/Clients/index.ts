/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

export const getShowcaseClients = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/clients?status=Completed&limit=20`,
      { next: { revalidate: 60 } },
    );
    const data = await res.json();
    return data;
  } catch (error: any) {
    return { data: { result: [] }, message: error.message };
  }
};
