'use client'
import  { useState } from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';
import { TProjects } from '@/types/projects';
import Link from 'next/link';


const AllProjects = ({projects}:{projects:TProjects[]}) => {
 
    const [activeTab,setActiveTab] = useState('Full-Stack')

    const filteredProjects = projects.filter((project)=>project.projectType === activeTab)
 
  return (
    <section className="py-20 bg-white dark:bg-[#0a0219] transition-colors duration-300">
      <div className="mx-4 md:mx-8 lg:mx-16 px-6">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-12"
        >
          Projects
        </motion.h2>

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
              className="bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 hover:border-primary hover:border-2 border-transparent p-8"
            >
              {/* Project Image */}
              <div className="w-16 h-16 mb-4">
                <Image
                  width={500}
                  height={500}
                  src={project.imageUrls[0]}
                  alt={project.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Project Name */}
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                {project.title}
              </h4>

              {/* Project Description */}
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.details.slice(0, 50)}
              </p>

              {/* Details Button */}
              <Link href={`/all-projects/projectDetails/${project._id}`}>
              <button className="px-4 py-2 bg-primary text-white dark:text-gray-900 font-semibold rounded-full hover:bg-primary/90 transition-colors duration-300">
                Details
              </button>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default AllProjects
