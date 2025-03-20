import AboutMe from "@/components/modules/home/AboutMe";
import Banner from "@/components/modules/home/Banner/banner";
import Blogs from "@/components/modules/home/Blogs";
import ContactForm from "@/components/modules/home/ContactForm";
import ExperienceEducationSection from "@/components/modules/home/EducationAndExperience";
import ProjectShowcase from "@/components/modules/home/MyProjects";
import SkillsSection from "@/components/modules/home/MySkill";
import { getAllBlogs } from "@/services/Blogs";
import { getAllProjects } from "@/services/Projects";
import { getAllSkills } from "@/services/Skills";





const Home = async() => {
  const {data:projects} = await getAllProjects()
  const {data:skills} = await getAllSkills()
  const {data:blogs} = await getAllBlogs()
  return (
  <div>
 
    <Banner/>
    <AboutMe/>
    <SkillsSection skills= {skills}/>
    <ProjectShowcase projects={projects}/>
    <ExperienceEducationSection/>
    <ContactForm/>
    <Blogs blogs={blogs}/>

  </div>
  );
}

export default Home