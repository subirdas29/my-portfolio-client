"use client";

import { TProjects } from '@/types/projects';
import GradientButton from '@/utility/GradientButton';
import { motion } from 'framer-motion';
import { FolderSearch, Sparkles } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FaExternalLinkAlt } from 'react-icons/fa';

const ProjectShowcase = ({ projects }: { projects: TProjects[] }) => {



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
            My <span className="text-amber-500">Projects</span>
          </h2>
          <div className="h-1.5 w-24 bg-amber-500 mx-auto rounded-full shadow-[0_0_15px_rgba(245,158,11,0.5)]" />
        </motion.div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
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

              {/* --- Inner Card Content --- */}
              <div className="relative z-10 h-full bg-gradient-to-br  dark:from-[#0a0219] dark:via-[#120825] dark:to-[#1b0c2d] border border-gray-200 dark:border-white/5 rounded-3xl overflow-hidden flex flex-col shadow-xl">
                
                {/* --- Bubbles (Fixed Z-Index & Visibility) --- */}
                <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 rounded-full bg-amber-500/40 dark:bg-yellow-500/30"
                      animate={{ 
                        opacity: [0.3, 0.8, 0.3], 
                        y: [0, -80, 0],
                        x: [0, (i % 2 === 0 ? 15 : -15), 0] 
                      }}
                      transition={{ 
                        duration: 3 + i, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                      }}
                      style={{ 
                        left: `${12 * i + 5}%`, 
                        bottom: `${5 + (i % 3) * 15}%` 
                      }}
                    />
                  ))}
                </div>

                {/* Project Image Container */}
                <div className="relative w-full h-52 overflow-hidden z-10">
                  <Image
                    height={500}
                    width={500}
                    src={project.imageUrls[0]}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Overlay to blend with card bg */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#fff8e1]/40 dark:from-[#0a0219]/60 to-transparent" />
                </div>

                {/* Project Details */}
                <div className="relative z-30 p-6 flex flex-col flex-grow bg-transparent">
                  <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-500" />
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-2 text-sm">{project.shortDescription}</p>

                  <div className="flex items-center gap-4 mt-auto">
                    <Link href={`/all-projects/projectDetails/${project?.slug}`} className="flex-1">
                      <GradientButton
                        className="w-full h-12 rounded-xl text-sm font-black tracking-wide shadow-lg"
                        icon={<FolderSearch className="w-4 h-4" />}
                      >
                        Case Study
                      </GradientButton>
                    </Link>
                    <GradientButton
                      href={project.liveLink}
                      target="_blank"
                      className="w-12 h-12 rounded-xl flex items-center justify-center p-0"
                      icon={<FaExternalLinkAlt className="w-4 h-4" />}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className='flex justify-center mt-16'>
          <Link href="/all-projects">
             <GradientButton
                         className=" px-8 py-4">
             View All Projects
            </GradientButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;