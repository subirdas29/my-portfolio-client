import ProjectDetails from "@/components/modules/AllProjects/ProjectDetails"
import { getSingleProject } from "@/services/Projects"



const ProjectDetailPage= async({params}:{params:Promise<{slug:string}>}) => {
    const {slug} = await params
    const {data:project} = await getSingleProject(slug)

   
  return (
    <div>
      <ProjectDetails project={project}/>
    </div>
  )
}

export default ProjectDetailPage
