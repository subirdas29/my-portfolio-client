import AboutMe from "@/components/modules/home/AboutMe";
import Banner from "@/components/modules/home/Banner/banner";
import Blogs from "@/components/modules/home/Blogs";
import ContactForm from "@/components/modules/home/ContactForm";
import ExperienceEducationSection from "@/components/modules/home/EducationAndExperience";
import ProjectShowcase from "@/components/modules/home/MyProjects";
import SkillsSection from "@/components/modules/home/MySkill";





export default function Home() {
  return (
  <div>
 
    <Banner/>
    <AboutMe/>
    <SkillsSection/>
    <ProjectShowcase/>
    <ExperienceEducationSection/>
    <ContactForm/>
    <Blogs/>

  </div>
  );
}
