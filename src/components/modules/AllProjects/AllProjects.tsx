'use client'
import  { useState } from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';


const AllProjects = () => {
    const [activeTab,setActiveTab] = useState('FullStack')
    const FullStack = [
        {
          name: 'Project 1',
          image: '/projects/project1.jpg', // Replace with your image path
          description: 'A modern e-commerce platform with seamless user experience.',
        },
        {
          name: 'Project 2',
          image: '/projects/project2.jpg', // Replace with your image path
          description: 'A task management app for teams to collaborate efficiently.',
        },
        {
          name: 'Project 3',
          image: '/projects/project3.jpg', // Replace with your image path
          description: 'A portfolio website showcasing creative work and projects.',
        },
      ];

      const FrontEnd = [
        {
          name: 'Project 1',
          image: '/projects/project1.jpg', // Replace with your image path
          description: 'A modern e-commerce platform with seamless user experience.',
        },
        {
          name: 'Project 2',
          image: '/projects/project2.jpg', // Replace with your image path
          description: 'A task management app for teams to collaborate efficiently.',
        },
     
      ];
  return (
    <section className="py-20  bg-white dark:bg-[#0a0219] transition-colors duration-300">
      <div className=" mx-4 md:mx-8 lg:mx-16 px-6">
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
        <div className="flex justify-center gap-4 mb-12 ">
          <button
            onClick={() => setActiveTab('FullStack')}
            className={`px-6 py-3 rounded-full font-semibold ${
              activeTab === 'FullStack'
                ? 'bg-primary text-black'
                : 'bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white'
            } transition-colors duration-300`}
          >
            Full-Stack
          </button>
          <button
            onClick={() => setActiveTab('FrontEnd')}
            className={`px-6 py-3 rounded-full font-semibold ${
              activeTab === 'FrontEnd'
                ? 'bg-primary text-black'
                : 'bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white'
            } transition-colors duration-300`}
          >
            Front-End
          </button>
        </div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 "
        >
          {activeTab === 'FullStack'
            ? FullStack.map((project, index) => (
                <motion.div
                  key={project.name}
                  initial={{ opacity: 0, y:50 }}
                  whileInView={{ opacity: 1, y:0 }}
                  transition={{ duration: 0.2, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, borderColor: '#facc15' }}
                  className="bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 hover:border-primary hover:border-2  border-transparent p-8"
                >
                  {/* project Image */}
                  <div className="w-16 h-16 mb-4">
                    <Image
                    width={500}
                    height={500}
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* project Name */}
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {project.name}
                  </h4>
                     {/* Project Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description.slice(0,50)}
                </p>

                {/* Details Button */}
                <button className="px-4 py-2 bg-primary text-white dark:text-gray-900 font-semibold rounded-full hover:bg-primary/90 transition-colors duration-300">
                  Details
                </button>
                </motion.div>
              ))
            : FrontEnd.map((project, index) => (
                <motion.div
                key={project.name}
                initial={{ opacity: 0, y:50 }}
                whileInView={{ opacity: 1, y:0 }}
                transition={{ duration: 0.2, delay: index * 0.2 }}
            whileHover={{ scale: 1.05, borderColor: '#facc15' }}
                className="bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 hover:border-primary hover:border-2  border-transparent p-8"
              >
                    {/* project Image */}
                    <div className="w-16 h-16 mb-4">
                    <Image
                    width={500}
                    height={500}
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* project Name */}
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {project.name}
                  </h4>
                     {/* Project Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description.slice(0,50)}
                </p>

                {/* Details Button */}
        
             <button className="px-4 py-2 bg-primary text-white dark:text-gray-900 font-semibold rounded-full hover:bg-primary/90 transition-colors duration-300">
                  Details
                </button>
             
                </motion.div>
              ))}
        </motion.div>
      </div>
    </section>
  )
}

export default AllProjects
