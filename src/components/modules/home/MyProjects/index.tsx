"use client"

import { TProjects } from '@/types/projects';
import { motion } from 'framer-motion';
import { FolderSearch } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FaExternalLinkAlt } from 'react-icons/fa';


const ProjectShowcase = ({projects}:{projects:TProjects[]}) => {
  
  const filteredProjects = projects
  ?.filter((project) => project.projectType === "Full-Stack")
  .sort((a, b) => new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime());
  
  return (
    <section className="py-16 lg:py-20 bg-white dark:bg-[#0a0219] transition-colors duration-300">
      <div className=" px-6  mx-4 md:mx-8 lg:mx-16">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-12"
        >
          My Projects
        </motion.h2>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project._id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, borderColor: '#facc15' }}
              className="bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-transparent"
            >
              {/* Project Image */}
              <div className="w-full h-48 overflow-hidden ">
                <Image
                height={500}
                width={500}
                  src={project.imageUrls[0]}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Project Content */}
              <div className="p-3 lg:p-6">
                {/* Project Name */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.details.slice(0,50)}...
                </p>

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
                        className="flex items-center justify-center w-24 h-10 lg:w-32 lg:h-12 bg-primary text-white dark:text-gray-900 font-semibold rounded-lg hover:bg-primary/90 transition duration-300"
                      >
                        <FaExternalLinkAlt className="mr-2" />
                        Live
                      </a>
             </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className='flex justify-center my-10'>
        <Link href="/all-projects">
        <button className="px-8 py-3 bg-primary text-white dark:text-gray-900 font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-300 cursor-pointer">
                  All Projects
                </button>
                </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;