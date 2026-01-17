/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { TProjects } from '@/types/projects';
import GradientButton from '@/utility/GradientButton';
import { motion } from 'framer-motion';
import { FolderSearch, Ghost } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FaExternalLinkAlt } from 'react-icons/fa';

// Default parameter [] add kora hoyeche jeno build crash na kore
const ProjectShowcase = ({ projects = [] }: { projects: TProjects[] }) => {
  
  // Safe check for projects
  const hasProjects = projects && projects.length > 0;

  return (
    <section className="py-16 lg:py-24 bg-white dark:bg-[#0a0219] transition-colors duration-300 overflow-hidden">
      <div className="page-container">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">
            Featured <span className="text-amber-500">Projects</span>
          </h2>
          <div className="h-1.5 w-24 bg-amber-500 mx-auto rounded-full shadow-[0_0_15px_rgba(245,158,11,0.5)]" />
        </motion.div>

        {!hasProjects ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center py-20 text-center"
          >
            <div className="p-8 rounded-full bg-amber-500/5 mb-6 border border-amber-500/10">
              <Ghost className="w-16 h-16 text-amber-500/50" />
            </div>
            <h3 className="text-2xl font-bold text-gray-400 dark:text-gray-600">No projects to showcase yet</h3>
            <p className="text-gray-500 mt-2 max-w-sm mx-auto font-medium">
              I am currently working on some exciting new projects. Stay tuned!
            </p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 6).map((project, index) => (
              <motion.div
                key={project._id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative rounded-3xl overflow-hidden p-[2px]"
              >
                {/* --- Running Line Border --- */}
                <div className="absolute inset-0 z-0">
                  <svg className="w-full h-full" preserveAspectRatio="none">
                    <rect
                      x="2"
                      y="2"
                      width="calc(100% - 4px)"
                      height="calc(100% - 4px)"
                      rx="24"
                      ry="24"
                      pathLength="100"
                      className="fill-none stroke-amber-500 stroke-[3] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      strokeDasharray="25 75"
                      strokeLinecap="round"
                    >
                      <animate
                        attributeName="stroke-dashoffset"
                        from="100"
                        to="0"
                        dur="8s"
                        repeatCount="indefinite"
                      />
                    </rect>
                  </svg>
                </div>

                <div className="relative z-10 h-full bg-gradient-to-br dark:from-[#0a0219] dark:via-[#120825] dark:to-[#1b0c2d] border border-gray-200 dark:border-white/5 rounded-3xl overflow-hidden flex flex-col shadow-xl">
                  
                  {/* Project Image */}
                  <div className="relative w-full h-52 overflow-hidden z-10">
                    <Image
                      height={500}
                      width={500}
                      src={project?.imageUrls?.[0] || "/default-project.jpg"}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                
                  </div>

                  {/* Project Details */}
                  <div className="relative z-30 p-6 flex flex-col flex-grow">
                    <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2 line-clamp-1">
                      {project.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2 text-sm font-medium">
                      {project.shortDescription}
                    </p>

                    {/* 🔹 TECH STACK SECTION (Standardization) */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project?.technologies?.slice(0, 4)?.map((tech, i) => (
                        <span key={i} className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 rounded-lg">
                          {tech}
                        </span>
                      ))}
                      {project?.technologies?.length > 3 && (
                        <span className="text-[10px] font-bold text-gray-400 self-center">+{project.technologies.length - 3} more</span>
                      )}
                    </div>

                    <div className="flex items-center gap-4 mt-auto">
                      <Link href={`/all-projects/projectDetails/${project?.slug}`} className="flex-1">
                        <GradientButton
                          className="w-full h-12 rounded-xl text-xs font-black tracking-wide"
                        >
                          <FolderSearch className="w-4 h-4 mr-2" />
                          Case Study
                        </GradientButton>
                      </Link>
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-xl border border-amber-500/20 flex items-center justify-center hover:bg-amber-500 hover:text-white transition-all duration-300"
                      >
                        <FaExternalLinkAlt className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* View All Button */}
        <div className='flex justify-center mt-16'>
          <Link href="/all-projects">
             <GradientButton className="px-10 py-4 text-sm font-black">
               View All Projects
            </GradientButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;