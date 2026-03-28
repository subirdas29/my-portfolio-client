import dynamic from "next/dynamic";
import { getSingleProject } from "@/services/Projects";
import type { Metadata } from "next";
import { ProjectDetailSkeleton } from "@/components/shared/Skeletons";

// [PERFORMANCE] Dynamic import with matching detail skeleton
const ProjectDetails = dynamic(
  () => import("@/components/modules/AllProjects/ProjectDetails"),
  { loading: () => <ProjectDetailSkeleton /> }
);

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const { data: project } = await getSingleProject(slug);

  return {
    title: `${project?.title} | Subir Das Project`,
    description:
      project?.shortDescription ||
      `Explore ${project?.title} - A ${project?.projectType} project by Subir Das`,
    keywords:
      project?.technologies?.join(", ") ||
      "web development, project, portfolio",
    openGraph: {
      title: project?.title,
      description:
        project?.shortDescription ||
        `Explore ${project?.title} - A ${project?.projectType} project by Subir Das`,
      url: `https://subirdas.com/all-projects/projectDetails/${slug}`,
      siteName: "Subir Das Portfolio",
      images: project?.imageUrls?.[0]
        ? [
            {
              url: project.imageUrls[0],
              width: 1200,
              height: 630,
              alt: project.title,
            },
          ]
        : [],
      type: "article",
      publishedTime: project?.createdAt,
      tags: project?.technologies,
    },
    twitter: {
      card: "summary_large_image",
      title: project?.title,
      description:
        project?.shortDescription ||
        `Explore ${project?.title} - A ${project?.projectType} project by Subir Das`,
      images: project?.imageUrls?.[0] ? [project.imageUrls[0]] : [],
    },
    alternates: {
      canonical: `https://subirdas.com/all-projects/projectDetails/${slug}`,
    },
  };
}

const ProjectDetailPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const { data: project } = await getSingleProject(slug);

  return (
    <div>
      <ProjectDetails project={project} />
    </div>
  );
};

export default ProjectDetailPage;
