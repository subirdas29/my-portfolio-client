// Reusable skeleton components matching real UI layouts.
// Uses CSS-only shimmer/pulse animation for zero main thread impact.
// All skeletons use exact same dimensions as real content to prevent CLS.

// Base shimmer animation class
const shimmer =
  "relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent";

// ===========================
// SKILL CARD SKELETON
// Matches: MySkill/index.tsx - technical skill card
// ===========================
function SkillCardSkeleton() {
  return (
    <div className="p-8 bg-white dark:bg-slate-900/40 border-2 border-gray-200 dark:border-white/10 rounded-2xl flex flex-col items-center justify-center">
      <div className={`w-16 h-16 mb-4 rounded-2xl bg-gray-200 dark:bg-slate-800 ${shimmer}`} />
      <div className={`w-16 h-3 rounded-md bg-gray-200 dark:bg-slate-800 ${shimmer}`} />
    </div>
  );
}

// ===========================
// SOFT SKILL SKELETON
// Matches: MySkill/index.tsx - soft skill card
// ===========================
function SoftSkillCardSkeleton() {
  return (
    <div className="p-10 bg-white dark:bg-slate-900/40 border-2 border-gray-200 dark:border-white/10 rounded-2xl flex flex-col items-center text-center">
      <div className={`w-16 h-16 mb-6 rounded-full bg-gray-200 dark:bg-slate-800 ${shimmer}`} />
      <div className={`w-24 h-4 rounded-md bg-gray-200 dark:bg-slate-800 mb-3 ${shimmer}`} />
      <div className={`w-32 h-3 rounded-md bg-gray-200 dark:bg-slate-800 ${shimmer}`} />
    </div>
  );
}

// ===========================
// PROJECT CARD SKELETON
// Matches: MyProjects/index.tsx and AllProjects/AllProjects.tsx
// ===========================
function ProjectCardSkeleton() {
  return (
    <div className="rounded-3xl overflow-hidden bg-white dark:bg-gradient-to-br dark:from-[#0a0219] dark:via-[#120825] dark:to-[#1b0c2d] border border-gray-100 dark:border-white/5 shadow-xl">
      {/* Image placeholder */}
      <div className={`h-52 w-full bg-gray-200 dark:bg-slate-800 ${shimmer}`} />
      {/* Content placeholder */}
      <div className="p-6 space-y-4">
        <div className={`h-6 w-3/4 rounded-lg bg-gray-200 dark:bg-slate-800 ${shimmer}`} />
        <div className="space-y-2">
          <div className={`h-3 w-full rounded bg-gray-200 dark:bg-slate-800 ${shimmer}`} />
          <div className={`h-3 w-2/3 rounded bg-gray-200 dark:bg-slate-800 ${shimmer}`} />
        </div>
        <div className="flex gap-2">
          <div className={`h-5 w-16 rounded-lg bg-gray-200 dark:bg-slate-800 ${shimmer}`} />
          <div className={`h-5 w-20 rounded-lg bg-gray-200 dark:bg-slate-800 ${shimmer}`} />
          <div className={`h-5 w-14 rounded-lg bg-gray-200 dark:bg-slate-800 ${shimmer}`} />
        </div>
        <div className="flex gap-4">
          <div className={`h-12 flex-1 rounded-xl bg-gray-200 dark:bg-slate-800 ${shimmer}`} />
          <div className={`h-12 w-12 rounded-xl bg-gray-200 dark:bg-slate-800 ${shimmer}`} />
        </div>
      </div>
    </div>
  );
}

// ===========================
// BLOG CARD SKELETON
// Matches: Blogs/index.tsx and AllBlogs/AllBlogs.tsx
// ===========================
function BlogCardSkeleton() {
  return (
    <div className="rounded-3xl overflow-hidden bg-white dark:bg-gradient-to-br dark:from-[#0a0219] dark:via-[#120825] dark:to-[#1b0c2d] border border-gray-100 dark:border-white/5 shadow-xl">
      {/* Image placeholder */}
      <div className={`h-56 w-full bg-gray-200 dark:bg-slate-800 ${shimmer}`} />
      {/* Content placeholder */}
      <div className="p-6 space-y-4">
        <div className={`h-6 w-full rounded-lg bg-gray-200 dark:bg-slate-800 ${shimmer}`} />
        <div className="space-y-2">
          <div className={`h-3 w-full rounded bg-gray-200 dark:bg-slate-800 ${shimmer}`} />
          <div className={`h-3 w-3/4 rounded bg-gray-200 dark:bg-slate-800 ${shimmer}`} />
        </div>
        <div className={`h-12 w-full rounded-xl bg-gray-200 dark:bg-slate-800 ${shimmer}`} />
      </div>
    </div>
  );
}

// ===========================
// FEATURED BLOG SKELETON
// Matches: AllBlogs/AllBlogs.tsx - featured large card
// ===========================
function FeaturedBlogSkeleton() {
  return (
    <div className="rounded-[2.5rem] overflow-hidden bg-white dark:bg-gradient-to-br dark:from-[#0a0219] dark:via-[#120825] dark:to-[#1b0c2d] border border-gray-100 dark:border-white/5 shadow-xl lg:grid lg:grid-cols-12">
      <div className={`lg:col-span-7 h-64 sm:h-80 bg-gray-200 dark:bg-slate-800 ${shimmer}`} />
      <div className="p-8 lg:p-12 lg:col-span-5 flex flex-col justify-center space-y-4">
        <div className={`h-3 w-20 rounded bg-gray-200 dark:bg-slate-800 ${shimmer}`} />
        <div className={`h-8 w-full rounded-lg bg-gray-200 dark:bg-slate-800 ${shimmer}`} />
        <div className="space-y-2">
          <div className={`h-3 w-full rounded bg-gray-200 dark:bg-slate-800 ${shimmer}`} />
          <div className={`h-3 w-full rounded bg-gray-200 dark:bg-slate-800 ${shimmer}`} />
          <div className={`h-3 w-2/3 rounded bg-gray-200 dark:bg-slate-800 ${shimmer}`} />
        </div>
        <div className={`h-12 w-full rounded-xl bg-gray-200 dark:bg-slate-800 ${shimmer}`} />
      </div>
    </div>
  );
}

// ===========================
// ABOUT ME SECTION SKELETON
// Matches: AboutMe/index.tsx - image left, text right
// ===========================
function AboutMeSkeleton() {
  return (
    <section className="py-36 bg-slate-50 dark:bg-[#0a0219]">
      <div className="page-container">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left: Image placeholder */}
          <div className={`w-full aspect-[4/5] rounded-[2.5rem] bg-gray-200 dark:bg-slate-800 ${shimmer}`} />
          {/* Right: Text placeholder */}
          <div className="space-y-6 mt-12 lg:mt-0">
            <div className={`h-10 w-3/4 rounded-lg bg-gray-200 dark:bg-slate-800 ${shimmer}`} />
            <div className={`h-5 w-1/2 rounded bg-gray-200 dark:bg-slate-800 ${shimmer}`} />
            <div className="space-y-3">
              <div className={`h-3 w-full rounded bg-gray-200 dark:bg-slate-800 ${shimmer}`} />
              <div className={`h-3 w-full rounded bg-gray-200 dark:bg-slate-800 ${shimmer}`} />
              <div className={`h-3 w-4/5 rounded bg-gray-200 dark:bg-slate-800 ${shimmer}`} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className={`h-24 rounded-2xl bg-gray-200 dark:bg-slate-800 ${shimmer}`} />
              ))}
            </div>
            <div className="flex gap-4">
              <div className={`h-14 w-40 rounded-lg bg-gray-200 dark:bg-slate-800 ${shimmer}`} />
              <div className={`h-14 w-28 rounded-lg bg-gray-200 dark:bg-slate-800 ${shimmer}`} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ===========================
// EXPERIENCE/EDUCATION SECTION SKELETON
// Matches: EducationAndExperience/index.tsx
// ===========================
function ExperienceSkeleton() {
  return (
    <section className="py-20 bg-white dark:bg-[#0a0219]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-[2.5rem] shadow-2xl overflow-hidden p-[2px] bg-gray-200 dark:bg-slate-800">
          <div className="rounded-[2.4rem] bg-gradient-to-br from-[#F9FAFB] via-[#fff8e1] to-[#faffdd] dark:from-[#0a0219] dark:via-[#120825] dark:to-[#1b0c2d] p-8 md:p-12 lg:p-16">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
              <div className="space-y-3">
                <div className={`h-10 w-48 rounded-lg bg-gray-200 dark:bg-slate-800 ${shimmer}`} />
                <div className={`h-1.5 w-16 rounded-full bg-gray-200 dark:bg-slate-800 ${shimmer}`} />
              </div>
              <div className={`h-14 w-56 rounded-2xl bg-gray-200 dark:bg-slate-800 ${shimmer}`} />
            </div>
            {/* Timeline items */}
            <div className="border-l-2 border-gray-200 dark:border-slate-800 ml-4 md:ml-8 space-y-16">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="pl-12 md:pl-16 space-y-3">
                  <div className={`h-7 w-32 rounded-full bg-gray-200 dark:bg-slate-800 ${shimmer}`} />
                  <div className={`h-8 w-64 rounded-lg bg-gray-200 dark:bg-slate-800 ${shimmer}`} />
                  <div className={`h-5 w-40 rounded bg-gray-200 dark:bg-slate-800 ${shimmer}`} />
                  <div className="space-y-2 pt-2">
                    <div className={`h-3 w-full rounded bg-gray-200 dark:bg-slate-800 ${shimmer}`} />
                    <div className={`h-3 w-3/4 rounded bg-gray-200 dark:bg-slate-800 ${shimmer}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ===========================
// SKILLS SECTION SKELETON
// Matches: MySkill/index.tsx
// ===========================
function SkillsSectionSkeleton() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-[#030014]">
      <div className="page-container">
        <div className="text-center mb-16 space-y-3">
          <div className={`h-10 w-40 rounded-lg bg-gray-200 dark:bg-slate-800 mx-auto ${shimmer}`} />
          <div className={`h-1.5 w-24 rounded-full bg-gray-200 dark:bg-slate-800 mx-auto ${shimmer}`} />
        </div>
        <div className="flex justify-center mb-20">
          <div className={`h-14 w-56 rounded-2xl bg-gray-200 dark:bg-slate-800 ${shimmer}`} />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {[...Array(12)].map((_, i) => (
            <SkillCardSkeleton key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ===========================
// CONTACT FORM SKELETON
// Matches: ContactForm/index.tsx
// ===========================
function ContactFormSkeleton() {
  return (
    <section className="py-10 md:py-16">
      <div className="page-container">
        <div className="rounded-[2.5rem] overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 rounded-[2.4rem] bg-gradient-to-br from-[#F9FAFB] via-[#fff8e1] to-[#faffdd] dark:from-[#0a0219] dark:via-[#120825] dark:to-[#1b0c2d]">
            {/* Left side */}
            <div className="flex flex-col justify-center p-10 lg:p-16 space-y-6">
              <div className={`h-10 w-3/4 rounded-lg bg-gray-200 dark:bg-slate-800 ${shimmer}`} />
              <div className={`h-1.5 w-20 rounded-full bg-gray-200 dark:bg-slate-800 ${shimmer}`} />
              <div className="space-y-6">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="flex items-center gap-5">
                    <div className={`p-4 rounded-lg bg-gray-200 dark:bg-slate-800 w-14 h-14 ${shimmer}`} />
                    <div className="space-y-2">
                      <div className={`h-3 w-16 rounded bg-gray-200 dark:bg-slate-800 ${shimmer}`} />
                      <div className={`h-5 w-40 rounded bg-gray-200 dark:bg-slate-800 ${shimmer}`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Right side */}
            <div className="p-10 lg:p-16 bg-white/60 dark:bg-black/40 border-l border-gray-200 dark:border-white/5 space-y-5">
              <div className={`h-7 w-32 rounded-lg bg-gray-200 dark:bg-slate-800 ${shimmer}`} />
              <div className="grid grid-cols-2 gap-5">
                <div className={`h-14 rounded-2xl bg-gray-200 dark:bg-slate-800 ${shimmer}`} />
                <div className={`h-14 rounded-2xl bg-gray-200 dark:bg-slate-800 ${shimmer}`} />
              </div>
              <div className={`h-14 rounded-2xl bg-gray-200 dark:bg-slate-800 ${shimmer}`} />
              <div className={`h-14 rounded-2xl bg-gray-200 dark:bg-slate-800 ${shimmer}`} />
              <div className={`h-[150px] rounded-2xl bg-gray-200 dark:bg-slate-800 ${shimmer}`} />
              <div className={`h-14 rounded-2xl bg-gray-200 dark:bg-slate-800 ${shimmer}`} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ===========================
// PROJECT DETAIL PAGE SKELETON
// Matches: ProjectDetails.tsx
// ===========================
function ProjectDetailSkeleton() {
  return (
    <article className="bg-white dark:bg-[#0a0219] min-h-screen pb-32">
      {/* Header */}
      <div className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto text-center md:text-left space-y-4">
          <div className={`h-7 w-28 rounded-full bg-gray-200 dark:bg-slate-800 ${shimmer}`} />
          <div className={`h-14 w-96 max-w-full rounded-lg bg-gray-200 dark:bg-slate-800 ${shimmer}`} />
          <div className="flex flex-wrap items-center gap-8 pt-4 justify-center md:justify-start">
            <div className={`h-14 w-56 rounded-2xl bg-gray-200 dark:bg-slate-800 ${shimmer}`} />
            <div className="flex gap-6">
              <div className={`w-14 h-14 rounded-2xl bg-gray-200 dark:bg-slate-800 ${shimmer}`} />
              <div className={`w-14 h-14 rounded-2xl bg-gray-200 dark:bg-slate-800 ${shimmer}`} />
            </div>
          </div>
        </div>
      </div>
      {/* Hero image */}
      <div className="max-w-7xl mx-auto mb-24">
        <div className={`aspect-video rounded-[2.5rem] bg-gray-200 dark:bg-slate-800 ${shimmer}`} />
        <div className="flex flex-wrap gap-4 justify-center mt-10">
          {[...Array(4)].map((_, i) => (
            <div key={i} className={`w-24 h-16 md:w-32 md:h-20 rounded-xl bg-gray-200 dark:bg-slate-800 ${shimmer}`} />
          ))}
        </div>
      </div>
      {/* Content */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
          <div className="lg:col-span-8 space-y-12">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="space-y-6">
                <div className={`h-10 w-72 rounded-lg bg-gray-200 dark:bg-slate-800 ${shimmer}`} />
                <div className="space-y-3">
                  {[...Array(4)].map((_, j) => (
                    <div key={j} className={`h-3 w-full rounded bg-gray-200 dark:bg-slate-800 ${shimmer}`} style={{ width: `${90 - j * 10}%` }} />
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="lg:col-span-4">
            <div className={`sticky top-32 p-8 rounded-[2.5rem] bg-gray-200 dark:bg-slate-800 h-80 ${shimmer}`} />
          </div>
        </div>
      </div>
    </article>
  );
}

// ===========================
// BLOG DETAIL PAGE SKELETON
// Matches: BlogDetails.tsx
// ===========================
function BlogDetailSkeleton() {
  return (
    <article className="w-full bg-white dark:bg-[#0a0219]">
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 py-6 md:py-10 lg:py-24 flex flex-col lg:flex-row gap-6 md:gap-8 items-start">
        {/* Main content */}
        <div className="w-full lg:w-2/3 rounded-[2rem] bg-gradient-to-br dark:via-[#120825] dark:to-[#1b0c2d] border border-gray-200 dark:border-white/5 p-4 sm:p-6 md:p-10 lg:p-12 space-y-6">
          <div className="flex gap-4">
            <div className={`h-7 w-24 rounded-full bg-gray-200 dark:bg-slate-800 ${shimmer}`} />
            <div className={`h-5 w-28 rounded bg-gray-200 dark:bg-slate-800 ${shimmer}`} />
          </div>
          <div className={`h-10 w-full rounded-lg bg-gray-200 dark:bg-slate-800 ${shimmer}`} />
          <div className={`h-10 w-3/4 rounded-lg bg-gray-200 dark:bg-slate-800 ${shimmer}`} />
          <div className={`w-full aspect-video rounded-[2.5rem] bg-gray-200 dark:bg-slate-800 ${shimmer}`} />
          <div className="space-y-3">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className={`h-3 rounded bg-gray-200 dark:bg-slate-800 ${shimmer}`}
                style={{ width: `${100 - (i % 3) * 15}%` }}
              />
            ))}
          </div>
        </div>
        {/* Sidebar */}
        <aside className="w-full lg:w-1/3 flex flex-col gap-5 md:gap-8 lg:sticky lg:top-24">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="rounded-[2rem] bg-gradient-to-br dark:via-[#120825] dark:to-[#1b0c2d] border border-gray-200 dark:border-white/5 p-6 space-y-4">
              <div className={`h-5 w-24 rounded bg-gray-200 dark:bg-slate-800 ${shimmer}`} />
              {i === 0 ? (
                <div className="flex gap-3">
                  {[...Array(3)].map((_, j) => (
                    <div key={j} className={`w-10 h-10 rounded-xl bg-gray-200 dark:bg-slate-800 ${shimmer}`} />
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {[...Array(3)].map((_, j) => (
                    <div key={j} className="flex items-center gap-4">
                      <div className={`w-14 h-14 rounded-xl bg-gray-200 dark:bg-slate-800 shrink-0 ${shimmer}`} />
                      <div className={`h-4 w-full rounded bg-gray-200 dark:bg-slate-800 ${shimmer}`} />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </aside>
      </div>
    </article>
  );
}

// ===========================
// SECTION HEADER SKELETON
// Reusable for section titles
// ===========================
function SectionHeaderSkeleton() {
  return (
    <div className="text-center mb-16 space-y-3">
      <div className={`h-10 w-48 rounded-lg bg-gray-200 dark:bg-slate-800 mx-auto ${shimmer}`} />
      <div className={`h-1.5 w-24 rounded-full bg-gray-200 dark:bg-slate-800 mx-auto ${shimmer}`} />
    </div>
  );
}

// ===========================
// HERO SECTION SKELETON
// Matches: Banner/banner.tsx
// ===========================
function HeroSkeleton() {
  return (
    <section className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-[#F9FAFB] via-[#fff8e1] to-[#faffdd] dark:from-[#0a0219] dark:via-[#120825] dark:to-[#1b0c2d]">
      <div className="py-28 px-6 md:px-28 lg:px-40 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="lg:w-1/2 space-y-6">
            <div className={`h-8 w-40 rounded-full bg-gray-200 dark:bg-slate-800 ${shimmer}`} />
            <div className={`h-12 w-80 rounded-lg bg-gray-200 dark:bg-slate-800 ${shimmer}`} />
            <div className={`h-8 w-96 rounded-lg bg-gray-200 dark:bg-slate-800 ${shimmer}`} />
            <div className="space-y-2">
              <div className={`h-4 w-full rounded bg-gray-200 dark:bg-slate-800 ${shimmer}`} />
              <div className={`h-4 w-3/4 rounded bg-gray-200 dark:bg-slate-800 ${shimmer}`} />
            </div>
            <div className="flex gap-4">
              <div className={`h-14 w-44 rounded-lg bg-gray-200 dark:bg-slate-800 ${shimmer}`} />
              <div className={`h-14 w-32 rounded-lg bg-gray-200 dark:bg-slate-800 ${shimmer}`} />
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <div className={`w-64 h-64 lg:w-80 lg:h-80 rounded-full bg-gray-200 dark:bg-slate-800 ${shimmer}`} />
          </div>
        </div>
      </div>
    </section>
  );
}

// ===========================
// FULL PAGE PROJECT LISTING SKELETON
// Matches: AllProjects/AllProjects.tsx
// ===========================
function ProjectListSkeleton() {
  return (
    <div className="bg-white dark:bg-[#0a0219]">
      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center min-h-[400px] bg-gradient-to-br from-[#F9FAFB] via-[#fff8e1] to-[#faffdd] dark:from-[#0a0219] dark:via-[#120825] dark:to-[#1b0c2d]">
        <div className="relative z-10 text-center px-4 space-y-4">
          <div className={`h-7 w-44 rounded-full bg-gray-200 dark:bg-slate-800 mx-auto ${shimmer}`} />
          <div className={`h-14 w-64 rounded-lg bg-gray-200 dark:bg-slate-800 mx-auto ${shimmer}`} />
          <div className={`h-5 w-96 max-w-full rounded bg-gray-200 dark:bg-slate-800 mx-auto ${shimmer}`} />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white dark:from-[#0a0219] to-transparent" />
      </section>
      {/* Grid */}
      <section className="py-10 md:py-16">
        <div className="page-container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {[...Array(6)].map((_, i) => (
              <ProjectCardSkeleton key={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// ===========================
// FULL PAGE BLOG LISTING SKELETON
// Matches: AllBlogs/AllBlogs.tsx
// ===========================
function BlogListSkeleton() {
  return (
    <div className="bg-white dark:bg-[#0a0219]">
      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center min-h-[450px] bg-gradient-to-br from-[#F9FAFB] via-[#fff8e1] to-[#faffdd] dark:from-[#0a0219] dark:via-[#120825] dark:to-[#1b0c2d]">
        <div className="relative z-10 text-center px-4 space-y-4">
          <div className={`h-7 w-40 rounded-full bg-gray-200 dark:bg-slate-800 mx-auto ${shimmer}`} />
          <div className={`h-12 w-48 rounded-lg bg-gray-200 dark:bg-slate-800 mx-auto ${shimmer}`} />
          <div className={`h-5 w-96 max-w-full rounded bg-gray-200 dark:bg-slate-800 mx-auto ${shimmer}`} />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white dark:from-[#0a0219] to-transparent" />
      </section>
      {/* Content */}
      <section className="py-10 md:py-16">
        <div className="page-container px-4 space-y-12">
          <FeaturedBlogSkeleton />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <BlogCardSkeleton key={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export {
  SkillCardSkeleton,
  SoftSkillCardSkeleton,
  ProjectCardSkeleton,
  BlogCardSkeleton,
  FeaturedBlogSkeleton,
  AboutMeSkeleton,
  ExperienceSkeleton,
  SkillsSectionSkeleton,
  ContactFormSkeleton,
  ProjectDetailSkeleton,
  BlogDetailSkeleton,
  SectionHeaderSkeleton,
  HeroSkeleton,
  ProjectListSkeleton,
  BlogListSkeleton,
};
