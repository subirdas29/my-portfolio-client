/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { TProjects } from "@/types/projects";
import Link from "next/link";
import { FolderSearch, Sparkles, Plus, Ghost } from "lucide-react";
import { FaExternalLinkAlt } from "react-icons/fa";
import GradientButton from "@/utility/GradientButton";

// projects = [] build error fix korar jonno
const AllProjects = ({ projects = [] }: { projects: TProjects[] }) => {
  // Shob project eksathe dekhano hobe
  const [visibleCount, setVisibleCount] = useState(6);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  const displayedProjects = projects?.slice(0, visibleCount) || [];

  return (
    <div className="bg-white dark:bg-[#0a0219] transition-colors duration-300">
      {/* --- HERO SECTION --- */}
      <section className="relative flex flex-col items-center justify-center min-h-[400px] bg-gradient-to-br from-[#F9FAFB] via-[#fff8e1] to-[#faffdd] dark:from-[#0a0219] dark:via-[#120825] dark:to-[#1b0c2d] text-gray-900 dark:text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-yellow-500/20 dark:bg-yellow-500/10"
              animate={{
                opacity: [0.2, 0.5, 0.2],
                y: [0, -100, 0],
              }}
              transition={{ duration: 5 + i, repeat: Infinity }}
              style={{ left: `${12 * i + 5}%`, top: `${50 + (i % 2) * 20}%` }}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-center px-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-500/10 dark:bg-yellow-400/10 border border-yellow-500/30 dark:border-yellow-400/20 mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
            <span className="text-xs md:text-sm font-black text-yellow-700 dark:text-yellow-300 uppercase tracking-widest">The Full Collection</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4">
            My <span className="bg-gradient-to-r from-yellow-500 to-orange-500 dark:from-yellow-400 dark:to-amber-500 text-transparent bg-clip-text">Works</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-xl mx-auto font-medium">
            Explore a diverse range of projects from Full-Stack apps to Automation workflows.
          </p>
        </motion.div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white dark:from-[#0a0219] to-transparent" />
      </section>

      {/* --- PROJECT LISTING SECTION --- */}
      <section className="py-16">
        <div className="page-container px-4">
          
          {projects.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center py-24 text-center"
            >
              <Ghost className="w-16 h-16 text-gray-300 dark:text-gray-700 mb-4" />
              <h2 className="text-2xl font-bold text-gray-400">No projects to show right now</h2>
            </motion.div>
          ) : (
            <>
              {/* Grid of All Projects (Mixed) */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                <AnimatePresence mode="popLayout">
                  {displayedProjects.map((project, index) => (
                    <motion.div
                      key={project._id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="group flex flex-col h-full bg-white dark:bg-[#120825]/40 border border-gray-100 dark:border-white/5 rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
                    >
                      {/* Image Part */}
                      <div className="relative h-56 w-full overflow-hidden">
                        <Image
                          width={600}
                          height={400}
                          src={project.imageUrls?.[0] || "/default-project.jpg"}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>

                      {/* Content Part (Standardized Tech Tags at Bottom) */}
                      <div className="p-8 flex flex-col flex-grow">
                        {/* Type Badge */}
                        {/* <span className="text-[10px] font-black uppercase tracking-[0.2em] text-amber-600 dark:text-amber-500 mb-2">
                           {project.projectType}
                        </span> */}

                        <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2 line-clamp-1">
                      {project.title}
                    </h3>
                        
                        <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-2 text-sm leading-relaxed font-medium">
                          {project.shortDescription}
                        </p>

                        {/* Tech Stack Badges */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project?.technologies?.slice(0, 4).map((tech, i) => (
                            <span key={i} className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 rounded-lg">
                              {tech}
                            </span>
                          ))}
                          {project?.technologies?.length > 3 && (
                             <span className="text-[10px] font-bold text-gray-400 self-center">+{project.technologies.length - 3}</span>
                          )}
                        </div>

                        {/* Buttons */}
                        <div className="flex items-center gap-4 mt-auto">
                          <Link href={`/all-projects/projectDetails/${project?.slug}`} className="flex-1">
                            <GradientButton className="w-full h-12 text-xs font-black uppercase tracking-wider" icon={<FolderSearch className="w-4 h-4" />}>
                              Case Study
                            </GradientButton>
                          </Link>
                          <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 flex items-center justify-center rounded-xl bg-gray-100 dark:bg-white/5 border border-transparent hover:border-amber-500/50 hover:text-amber-500 transition-all duration-300"
                          >
                            <FaExternalLinkAlt className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* Load More Section */}
              {projects.length > visibleCount && (
                <div className="flex justify-center mt-20">
                  <button
                    onClick={handleLoadMore}
                    className="group flex items-center gap-3 px-12 py-4 border-2 border-amber-500/20 hover:border-amber-500 text-amber-600 dark:text-amber-400 font-black rounded-2xl transition-all duration-300 shadow-lg hover:shadow-amber-500/10"
                  >
                    <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
                    <span>Discover More Projects</span>
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default AllProjects;