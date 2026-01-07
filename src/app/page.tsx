import AboutMe from "@/components/modules/home/AboutMe";
import Banner from "@/components/modules/home/Banner/banner";
import Blogs from "@/components/modules/home/Blogs";
import ContactSection from "@/components/modules/home/ContactForm";
import ExperienceEducationSection from "@/components/modules/home/EducationAndExperience";
import ProjectShowcase from "@/components/modules/home/MyProjects";
import SkillsSection from "@/components/modules/home/MySkill";
import { getAllBlogs } from "@/services/Blogs";
import { getAllProjects } from "@/services/Projects";
import { getAllSkills } from "@/services/Skills";





const Home = async() => {
const {data:projects} = await getAllProjects("1", "3", "Full-Stack");
  const {data:skills} = await getAllSkills()
  const {data:blogs} = await getAllBlogs()
  return (
  <div>
 
    <Banner/>
    <AboutMe />
    <ExperienceEducationSection/>
    <SkillsSection skills= {skills}/>
    <ProjectShowcase projects={projects}/>
    <Blogs blogs={blogs}/>
    <ContactSection/>
  </div>
  );
}

export default Home