"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { TProjects } from "@/types/projects";
import Link from "next/link";
import { FolderSearch } from "lucide-react";
import { FaExternalLinkAlt } from "react-icons/fa";

const AllProjects = ({ projects }: { projects: TProjects[] }) => {
  const [activeTab, setActiveTab] = useState("Full-Stack");

  const filteredProjects = projects
  ?.filter((project) => project.projectType === activeTab)
  .sort((a, b) => 
    new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime()
  );

  return (
   <div>
     <section className="relative flex flex-col items-center justify-center min-h-80 bg-gradient-to-br dark:from-[#0a0219] dark:to-[#1b0c2d] from-[#F9FAFB] to-[#faffdd] dark:text-white text-gray-900 overflow-hidden">
      {/* Animated Banner */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-5xl md:text-6xl font-bold">All Projects</h1>
        <p className="mt-2 text-lg text-gray-700 dark:text-gray-300">
          Explore my work and case studies
        </p>
      </motion.div>
      </section>

      {/* Project Section */}
      <section className="py-20 bg-white dark:bg-[#0a0219] transition-colors duration-300 w-full">
        <div className="mx-4 md:mx-8 lg:mx-16 px-6">
          {/* Tab System */}
          <div className="flex justify-center gap-4 mb-12">
            {["Full-Stack", "Front-End"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-full font-semibold transition-colors duration-300 ${
                  activeTab === tab
                    ? "bg-primary dark:text-black text-white"
                    : "bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project._id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, borderColor: "#facc15" }}
                className="bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 hover:border-primary hover:border-2 border-transparent"
              >
                {/* Project Image */}
                <div className="w-full h-48 overflow-hidden ">
                  <Image
                    width={500}
                    height={500}
                    src={project.imageUrls[0]}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

             <div className=" p-3 md:p-6">
                 {/* Project Name */}
                 <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {project.title}
                </h4>

                {/* Project Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.details.slice(0, 50)}
                </p>

                {/* Details Button */}
                 {/* Details Button */}
             <div className='flex justify-evenly gap-2'>
             <Link href={`/all-projects/projectDetails/${project._id}`}>
              <button className=" w-24 h-10 lg:w-32 lg:h-12 bg-primary text-white dark:text-gray-900 font-semibold rounded-lg hover:bg-primary/90 duration-300  flex justify-center items-center cursor-pointer">
              <FolderSearch className="mr-2" />
            <span>  Details </span>
                </button>
              </Link>
            <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-24 h-10 lg:w-32 lg:h-12 text-white dark:text-gray-900 font-semibold rounded-lg hover:bg-primary/90 bg-primary transition duration-300"
                      >
                        <FaExternalLinkAlt className="mr-2" />
                        Live
                      </a>
             </div>
             </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
   </div>
  );
};

export default AllProjects;
