import AllProjects from "@/components/modules/AllProjects/AllProjects"

import { getAllProjects } from "@/services/Projects"


const AllProjectsPage = async() => {
  const {data:projects} = await getAllProjects("1", "50");

  return (
    <div>
      <AllProjects projects = {projects}/>
  
    </div>
  )
}

export default AllProjectsPage
