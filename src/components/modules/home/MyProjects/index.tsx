"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
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
    description: 'A portfolio website showcasing creative work and skills.',
  },
];

const ProjectShowcase = () => {
  return (
    <section className="py-20 bg-white dark:bg-[#0a0219] transition-colors duration-300">
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
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, borderColor: '#facc15' }}
              className="bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-transparent"
            >
              {/* Project Image */}
              <div className="w-full h-48 overflow-hidden">
                <Image
                height={500}
                width={500}
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Project Name */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.name}
                </h3>

                {/* Project Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description.slice(0,50)}
                </p>

                {/* Details Button */}
                <button className="px-4 py-2 bg-primary text-white dark:text-gray-900 font-semibold rounded-full hover:bg-primary/90 transition-colors duration-300">
                  Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        <div className='flex justify-center my-10'>
        <Link href="/all-projects">
        <button className="px-8 py-2 bg-primary text-white dark:text-gray-900 font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-300">
                  All Projects
                </button>
                </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;