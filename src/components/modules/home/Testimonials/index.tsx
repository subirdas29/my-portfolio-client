import { getFeaturedTestimonials } from "@/services/Testimonials";
import { Star } from "lucide-react";
import Image from "next/image";

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5">
    {[1, 2, 3, 4, 5].map((s) => (
      <Star
        key={s}
        className={`h-3.5 w-3.5 ${s <= rating ? "fill-amber-400 text-amber-400" : "text-gray-300"}`}
      />
    ))}
  </div>
);

export default async function Testimonials() {
  const testimonials = await getFeaturedTestimonials();

  if (testimonials.length === 0) return null;

  return (
    <section className="py-16 md:py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">Client Testimonials</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          What clients say about working with me.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t) => (
          <div
            key={t._id}
            className="rounded-2xl border bg-card p-6 space-y-4 hover:shadow-lg transition-shadow"
          >
            <StarRating rating={t.rating} />
            <p className="text-sm leading-relaxed text-muted-foreground italic">
              &ldquo;{t.content}&rdquo;
            </p>
            <div className="flex items-center gap-3 pt-2 border-t">
              <div className="relative h-9 w-9 rounded-full overflow-hidden shrink-0">
                {t.avatar ? (
                  <Image src={t.avatar} alt={t.name} fill className="object-cover" />
                ) : (
                  <div className="h-full w-full bg-linear-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white font-bold text-sm">
                    {t.name[0]?.toUpperCase()}
                  </div>
                )}
              </div>
              <div>
                <p className="text-sm font-semibold">{t.name}</p>
                <p className="text-xs text-muted-foreground">
                  {[t.role, t.company].filter(Boolean).join(" · ")}
                </p>
              </div>
            </div>
            {t.projectName && (
              <p className="text-xs text-muted-foreground">
                Project:{" "}
                <span className="font-medium text-foreground">{t.projectName}</span>
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
