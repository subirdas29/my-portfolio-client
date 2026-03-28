import { Suspense } from "react";
import dynamic from "next/dynamic";
import Banner from "@/components/modules/home/Banner/banner";
import { getAllBlogs } from "@/services/Blogs";
import { getAllProjects } from "@/services/Projects";
import { getAllSkills } from "@/services/Skills";
import {
  AboutMeSkeleton,
  ExperienceSkeleton,
  SkillsSectionSkeleton,
  ProjectCardSkeleton,
  BlogCardSkeleton,
  ContactFormSkeleton,
  SectionHeaderSkeleton,
} from "@/components/shared/Skeletons";

// [PERFORMANCE] Dynamic imports with code splitting for below-the-fold sections.
// Each section has its own skeleton that matches the real layout 1:1 to prevent CLS.
const AboutMe = dynamic(() => import("@/components/modules/home/AboutMe"), {
  loading: () => <AboutMeSkeleton />,
});
const ExperienceEducationSection = dynamic(
  () => import("@/components/modules/home/EducationAndExperience"),
  { loading: () => <ExperienceSkeleton /> }
);
const SkillsSection = dynamic(
  () => import("@/components/modules/home/MySkill"),
  { loading: () => <SkillsSectionSkeleton /> }
);
const ProjectShowcase = dynamic(
  () => import("@/components/modules/home/MyProjects"),
  { loading: () => <ProjectShowcaseSkeleton /> }
);
const Blogs = dynamic(() => import("@/components/modules/home/Blogs"), {
  loading: () => <BlogsShowcaseSkeleton />,
});
const ContactSection = dynamic(
  () => import("@/components/modules/home/ContactForm"),
  { loading: () => <ContactFormSkeleton /> }
);

// [PERFORMANCE] Project showcase skeleton - matches MyProjects/index.tsx layout exactly
function ProjectShowcaseSkeleton() {
  return (
    <section className="py-16 lg:py-24 bg-white dark:bg-[#0a0219] transition-colors duration-300">
      <div className="page-container">
        <SectionHeaderSkeleton />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(3)].map((_, i) => (
            <ProjectCardSkeleton key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

// [PERFORMANCE] Blogs showcase skeleton - matches Blogs/index.tsx layout exactly
function BlogsShowcaseSkeleton() {
  return (
    <section className="py-16 lg:py-24 bg-white dark:bg-[#0a0219] transition-colors duration-300">
      <div className="page-container">
        <SectionHeaderSkeleton />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(3)].map((_, i) => (
            <BlogCardSkeleton key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

const Home = async () => {
  // [PERFORMANCE] Data fetching happens server-side via async/await.
  // This eliminates client-side waterfalls and ensures data is available
  // at render time, reducing LCP and TBT.
  const [{ data: projects }, { data: skills }, { data: blogs }] =
    await Promise.all([
      getAllProjects("1", "3", "Full-Stack"),
      getAllSkills(),
      getAllBlogs(),
    ]);

  return (
    <div>
      {/* Banner: Above-the-fold, loaded eagerly for instant LCP */}
      <Banner />

      {/* [PERFORMANCE] Each section is dynamically imported with its own
          matching skeleton. Suspense boundaries allow React to stream HTML
          for above-the-fold content while below-the-fold sections load. */}
      <Suspense fallback={<AboutMeSkeleton />}>
        <AboutMe />
      </Suspense>

      <Suspense fallback={<ExperienceSkeleton />}>
        <ExperienceEducationSection />
      </Suspense>

      <Suspense fallback={<SkillsSectionSkeleton />}>
        <SkillsSection skills={skills} />
      </Suspense>

      <Suspense fallback={<ProjectShowcaseSkeleton />}>
        <ProjectShowcase projects={projects} />
      </Suspense>

      <Suspense fallback={<BlogsShowcaseSkeleton />}>
        <Blogs blogs={blogs} />
      </Suspense>

      <Suspense fallback={<ContactFormSkeleton />}>
        <ContactSection />
      </Suspense>
    </div>
  );
};

export default Home;
