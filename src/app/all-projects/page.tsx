import AllProjects from "@/components/modules/AllProjects/AllProjects"

import { getAllProjects } from "@/services/Projects"


const AllProjectsPage = async() => {
  const {data:projects} = await getAllProjects()

  return (
    <div>
      <AllProjects projects = {projects}/>
  
    </div>
  )
}

export default AllProjectsPage
