export type TTestimonial = {
  _id: string;
  name: string;
  role?: string;
  company?: string;
  avatar?: string;
  content: string;
  rating: number;
  projectName?: string;
  featured: boolean;
  order: number;
};

export const getFeaturedTestimonials = async (): Promise<TTestimonial[]> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/testimonials?featured=true`,
      { next: { tags: ["Testimonials"], revalidate: 3600 } },
    );
    const data = await res.json();
    return Array.isArray(data?.data) ? data.data : [];
  } catch {
    return [];
  }
};
