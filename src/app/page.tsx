import AboutMe from "@/components/modules/home/AboutMe";
import Banner from "@/components/modules/home/Banner/banner";
import ProjectShowcase from "@/components/modules/home/MyProjects";
import SkillsSection from "@/components/modules/home/MySkill";
import { Navbar } from "@/components/shared/Navbar";




export default function Home() {
  return (
  <div>
    <Navbar/>
    <Banner/>
    <AboutMe/>
    <SkillsSection/>
    <ProjectShowcase/>
  </div>
  );
}
