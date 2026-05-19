import { Suspense } from "react";
import dynamic from "next/dynamic";
import Banner from "@/components/modules/home/Banner/banner";
import { getAllBlogs } from "@/services/Blogs";
import { getAllProjects } from "@/services/Projects";
import { getAllSkills } from "@/services/Skills";
import { getStats } from "@/services/Stats";
import { getAllCertifications } from "@/services/Certifications";
import { getShowcaseClients } from "@/services/Clients";
import {
  AboutMeSkeleton,
  ExperienceSkeleton,
  SkillsSectionSkeleton,
  ProjectCardSkeleton,
  BlogCardSkeleton,
  ContactFormSkeleton,
  SectionHeaderSkeleton,
} from "@/components/shared/Skeletons";

const AboutMe = dynamic(() => import("@/components/modules/home/AboutMe"), {
  loading: () => <AboutMeSkeleton />,
});
const ServicesSection = dynamic(() => import("@/components/modules/home/Services"), {
  loading: () => <GenericSectionSkeleton />,
});
const HowIWork = dynamic(() => import("@/components/modules/home/HowIWork"), {
  loading: () => <GenericSectionSkeleton />,
});
const ExperienceEducationSection = dynamic(
  () => import("@/components/modules/home/EducationAndExperience"),
  { loading: () => <ExperienceSkeleton /> }
);
const SkillsSection = dynamic(
  () => import("@/components/modules/home/MySkill"),
  { loading: () => <SkillsSectionSkeleton /> }
);
const CertificationsSection = dynamic(
  () => import("@/components/modules/home/Certifications"),
  { loading: () => null }
);
const ProjectShowcase = dynamic(
  () => import("@/components/modules/home/MyProjects"),
  { loading: () => <ProjectShowcaseSkeleton /> }
);
const ClientLogoCarousel = dynamic(
  () => import("@/components/modules/home/ClientLogoCarousel"),
  { loading: () => null }
);
const OpenSourceSection = dynamic(
  () => import("@/components/modules/home/OpenSource"),
  { loading: () => null }
);
const Blogs = dynamic(() => import("@/components/modules/home/Blogs"), {
  loading: () => <BlogsShowcaseSkeleton />,
});
const TestimonialsSection = dynamic(
  () => import("@/components/modules/home/Testimonials"),
  { loading: () => null }
);
const ContactSection = dynamic(
  () => import("@/components/modules/home/ContactForm"),
  { loading: () => <ContactFormSkeleton /> }
);

function GenericSectionSkeleton() {
  return (
    <section className="py-16 lg:py-24 bg-slate-50 dark:bg-[#0a0219]">
      <div className="page-container">
        <SectionHeaderSkeleton />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-48 rounded-2xl bg-slate-200 dark:bg-white/5 animate-pulse" />
          ))}
        </div>
      </div>
    </section>
  );
}

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
  const [
    { data: projects },
    { data: skills },
    { data: blogs },
    { data: stats },
    { data: certifications },
    { data: clientsData },
    githubRepos,
  ] = await Promise.all([
    getAllProjects("1", "3", "Full-Stack"),
    getAllSkills(),
    getAllBlogs(),
    getStats(),
    getAllCertifications(),
    getShowcaseClients(),
    fetch("https://api.github.com/users/subirdas29/repos?sort=stars&per_page=6&type=public", {
      next: { revalidate: 3600 },
      headers: { Accept: "application/vnd.github+json" },
    })
      .then((r) => r.json())
      .catch(() => []),
  ]);

  const showcaseClients = Array.isArray(clientsData?.result) ? clientsData.result : [];
  const repos = Array.isArray(githubRepos) ? githubRepos : [];

  return (
    <div>
      <Banner />

      <Suspense fallback={<AboutMeSkeleton />}>
        <AboutMe stats={stats} />
      </Suspense>

      <Suspense fallback={<GenericSectionSkeleton />}>
        <ServicesSection />
      </Suspense>

      <Suspense fallback={<GenericSectionSkeleton />}>
        <HowIWork />
      </Suspense>

      <Suspense fallback={<ExperienceSkeleton />}>
        <ExperienceEducationSection />
      </Suspense>

      <Suspense fallback={<SkillsSectionSkeleton />}>
        <SkillsSection skills={skills} />
      </Suspense>

      <Suspense fallback={null}>
        <CertificationsSection certifications={certifications ?? []} />
      </Suspense>

      <Suspense fallback={<ProjectShowcaseSkeleton />}>
        <ProjectShowcase projects={projects} />
      </Suspense>

      <Suspense fallback={null}>
        <ClientLogoCarousel clients={showcaseClients} />
      </Suspense>

      <Suspense fallback={null}>
        <OpenSourceSection repos={repos} />
      </Suspense>

      <Suspense fallback={<BlogsShowcaseSkeleton />}>
        <Blogs blogs={blogs} />
      </Suspense>

      <Suspense fallback={null}>
        <TestimonialsSection />
      </Suspense>

      <Suspense fallback={<ContactFormSkeleton />}>
        <ContactSection />
      </Suspense>
    </div>
  );
};

export default Home;
