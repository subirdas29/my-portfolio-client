/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { TProjects } from "@/types/projects";
import Link from "next/link";
import { FolderSearch, Sparkles, Plus, Ghost } from "lucide-react";
import { FaExternalLinkAlt } from "react-icons/fa";
import GradientButton from "@/utility/GradientButton";

const AllProjects = ({ projects = [] }: { projects: TProjects[] }) => {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  const displayedProjects = projects?.slice(0, visibleCount) || [];

  return (
    <div className="bg-white dark:bg-[#0a0219] transition-colors duration-300">
      {/* --- HERO SECTION --- */}
      <section className="relative flex flex-col items-center justify-center min-h-[400px] bg-gradient-to-br from-[#F9FAFB] via-[#fff8e1] to-[#faffdd] dark:from-[#0a0219] dark:via-[#120825] dark:to-[#1b0c2d] text-gray-900 dark:text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden" suppressHydrationWarning>
          {[...Array(6)].map((_, i) => (
            <div key={i} className={`css-particle css-particle--${i + 1}`} suppressHydrationWarning />
          ))}
          <div className="css-orb css-orb--amber absolute w-[500px] h-[500px] -top-32 -right-32 rounded-full bg-yellow-400/20 dark:bg-yellow-500/10 blur-[100px]" suppressHydrationWarning />
          <div className="css-orb css-orb--purple absolute w-[400px] h-[400px] -bottom-32 -left-32 rounded-full bg-amber-400/20 dark:bg-purple-500/10 blur-[80px]" suppressHydrationWarning />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-center px-4"
          suppressHydrationWarning
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-500/10 dark:bg-yellow-400/10 border border-yellow-500/30 dark:border-yellow-400/20 mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
            <span className="text-xs md:text-sm font-black text-yellow-700 dark:text-yellow-300 uppercase tracking-widest">
              The Full Collection
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-yellow-500 to-orange-500 dark:from-yellow-400 dark:to-amber-500 text-transparent bg-clip-text">
              Works
            </span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-xl mx-auto font-medium">
            Explore a diverse range of projects from Full-Stack apps to
            Automation workflows.
          </p>
        </motion.div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white dark:from-[#0a0219] to-transparent" />
      </section>

      {/* --- PROJECT LISTING SECTION --- */}
      <section className="py-10 md:py-16">
        <div className="page-container px-4">
          {projects.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center py-24 text-center"
              suppressHydrationWarning
            >
              <Ghost className="w-16 h-16 text-gray-300 dark:text-gray-700 mb-4" />
              <h2 className="text-2xl font-bold text-gray-400">
                No projects to show right now
              </h2>
            </motion.div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                <AnimatePresence mode="popLayout">
                  {displayedProjects.map((project, index) => (
                    <motion.div
                      key={project._id}
                      layout
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.1 }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.08,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }}
                      className="group relative rounded-[2.5rem] overflow-hidden p-[2px]"
                      suppressHydrationWarning
                    >
                      {/* Card Border SVG Effect */}
                      <div className="absolute inset-0 z-0">
                        <svg
                          className="w-full h-full"
                          preserveAspectRatio="none"
                        >
                          <rect
                            x="2"
                            y="2"
                            width="calc(100% - 4px)"
                            height="calc(100% - 4px)"
                            rx="38"
                            ry="38"
                            pathLength="100"
                            className="fill-none stroke-amber-500 stroke-[3] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            strokeDasharray="25 75"
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

                      <div className="relative z-10 h-full bg-white dark:bg-gradient-to-br dark:from-[#0a0219] dark:via-[#120825] dark:to-[#1b0c2d] border border-gray-100 dark:border-white/5 rounded-[2.5rem] overflow-hidden flex flex-col shadow-sm hover:shadow-2xl transition-all duration-500">
                        {/* [OPTIMIZATION] Image: lazy loaded with sizes */}
                        <div className="relative h-56 w-full overflow-hidden z-20">
                          <Image
                            width={600}
                            height={400}
                            src={
                              project.imageUrls?.[0] || "/default-project.jpg"
                            }
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            loading="lazy"
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
                        </div>

                        {/* Content Part with Bubbles */}
                        <div className="relative z-30 p-8 flex flex-col flex-grow overflow-hidden">
                          <div className="absolute inset-0 overflow-hidden pointer-events-none" suppressHydrationWarning>
                            {[...Array(6)].map((_, i) => (
                              <div key={i} className={`css-particle css-particle--${i + 1}`} suppressHydrationWarning />
                            ))}
                          </div>

                          {/* Content */}
                          <div className="relative z-10">
                            <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2 line-clamp-1">
                              {project.title}
                            </h3>

                            <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-2 text-sm leading-relaxed font-medium">
                              {project.shortDescription}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-6">
                              {project?.technologies
                                ?.slice(0, 4)
                                .map((tech, i) => (
                                  <span
                                    key={i}
                                    className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 rounded-lg"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              {project?.technologies?.length > 3 && (
                                <span className="text-[10px] font-bold text-gray-400 self-center">
                                  +{project.technologies.length - 3}
                                </span>
                              )}
                            </div>

                            <div className="flex items-center gap-4 mt-auto">
                              <Link
                                href={`/all-projects/projectDetails/${project?.slug}`}
                                className="flex-1"
                              >
                                <GradientButton
                                  className="w-full h-12 text-sm rounded-xl font-black tracking-wider"
                                  icon={
                                    <FolderSearch className="w-4 h-4" />
                                  }
                                >
                                  Case Study
                                </GradientButton>
                              </Link>
                              <a
                                href={project.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 flex items-center justify-center rounded-xl bg-gray-100 dark:bg-white/5 border border-transparent hover:border-amber-500/50 hover:text-amber-500 transition-all duration-300 text-amber-600 dark:text-amber-400"
                              >
                                <FaExternalLinkAlt className="w-4 h-4" />
                              </a>
                            </div>
                          </div>
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
