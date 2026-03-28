import AllProjects from "@/components/modules/AllProjects/AllProjects"
import { getAllProjects } from "@/services/Projects"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "All Projects | Subir Das",
  description: "Explore the portfolio of projects by Subir Das - Full Stack Developer specializing in web applications, AI automation, and modern software solutions.",
  openGraph: {
    title: "All Projects | Subir Das",
    description: "Explore the portfolio of projects by Subir Das - Full Stack Developer specializing in web applications, AI automation, and modern software solutions.",
    url: "https://subirdas.com/all-projects",
    images: ["https://subirdas.com/og-image.jpg"],
  },
  alternates: {
    canonical: "https://subirdas.com/all-projects",
  },
}

const AllProjectsPage = async() => {
  const {data:projects} = await getAllProjects("1", "50");
 

  return (
    <div>
      <AllProjects projects = {projects}/>
  
    </div>
  )
}

export default AllProjectsPage
