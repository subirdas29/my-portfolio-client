import ProjectDetails from "@/components/modules/AllProjects/ProjectDetails"
import { getSingleProject } from "@/services/Projects"



const ProjectDetailPage= async({params}:{params:Promise<{projectId:string}>}) => {
    const {projectId} = await params
    const {data:project} = await getSingleProject(projectId)

   
  return (
    <div className="flex justify-center items-center bg-white dark:bg-[#0a0219]">
      <ProjectDetails project={project}/>
    </div>
  )
}

export default ProjectDetailPage
