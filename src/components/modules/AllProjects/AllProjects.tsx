"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { TProjects } from "@/types/projects";
import Link from "next/link";
import { FolderSearch, Sparkles } from "lucide-react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { cn } from "@/lib/utils";
import GradientButton from "@/utility/GradientButton";

const AllProjects = ({ projects }: { projects: TProjects[] }) => {
  const [activeTab, setActiveTab] = useState("Full-Stack");

  const filteredProjects = projects
    ?.filter((project) => project.projectType === activeTab)
    .sort((a, b) => 
      new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime()
    );

  return (
    <div>
      {/* --- HERO SECTION WITH ANIMATED BG --- */}
      <section className="relative flex flex-col items-center justify-center min-h-[450px] bg-gradient-to-br from-[#F9FAFB] via-[#fff8e1] to-[#faffdd] dark:from-[#0a0219] dark:via-[#120825] dark:to-[#1b0c2d] text-gray-900 dark:text-white overflow-hidden">
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-yellow-500 dark:bg-yellow-500/40"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0.2, 0.8, 0.2],
                y: [0, -100, 0],
                x: [0, Math.random() * 40 - 20, 0],
              }}
              transition={{
                duration: 5 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.4,
              }}
              style={{
                left: `${10 + i * 9}%`,
                top: `${40 + (i % 3) * 15}%`,
              }}
            />
          ))}
          
          <motion.div
            className="absolute -top-24 -right-24 w-[400px] h-[400px] rounded-full bg-yellow-400/20 dark:bg-yellow-500/10 blur-[90px]"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-24 -left-24 w-[350px] h-[350px] rounded-full bg-amber-400/20 dark:bg-purple-500/10 blur-[80px]"
            animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          />
        </div>

        {/* Content Area */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-center px-4"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-500/10 dark:bg-yellow-400/10 border border-yellow-500/30 dark:border-yellow-400/20 mb-6 backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
            <span className="text-xs md:text-sm font-bold text-yellow-700 dark:text-yellow-300 uppercase tracking-wider">Portfolio Showcase</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4">
            My <span className="bg-gradient-to-r from-yellow-500 to-orange-500 dark:from-yellow-400 dark:to-amber-500 text-transparent bg-clip-text">Projects</span>
          </h1>
          <p className="mt-2 text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto font-medium">
            A collection of my recent works, from pixel-perfect frontends to robust full-stack applications.
          </p>
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white dark:from-[#0a0219] to-transparent" />
      </section>

      {/* --- PROJECT LISTING SECTION --- */}
      <section className="min-h-screen py-20 bg-white dark:bg-[#0a0219] transition-colors duration-300 w-full">
        <div className="page-container px-4">
          
          {/* Tab System */}
          <div className="flex justify-center mb-16">
            <div className="relative flex p-1.5 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-inner">
              {["Full-Stack", "Front-End"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={cn(
                    "relative px-8 md:px-12 py-3 text-sm md:text-lg cursor-pointer font-bold z-10 transition-colors duration-500",
                     activeTab === tab 
                   ? "text-white dark:text-black"
                   : "text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400"
                  )}
                >
                  {activeTab === tab && (
                    <motion.div
                      layoutId="projectActiveTab"
                      className={cn(
      "absolute inset-0 rounded-lg",
      "bg-gradient-to-r from-yellow-500 to-amber-500",
      "hover:from-yellow-600 hover:to-amber-600",
      "shadow-lg shadow-yellow-500/30"
    )}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-20">{tab}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Project Grid */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project._id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative rounded-[2.5rem] overflow-hidden p-[2px]"
              >
                {/* --- Running Border Animation (Hover) --- */}
                <div className="absolute inset-0 z-0">
                  <svg className="w-full h-full" preserveAspectRatio="none">
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

                {/* --- Inner Card Body (Banner Style) --- */}
                <div className="relative z-10 h-full bg-gradient-to-br  dark:from-[#0a0219] dark:via-[#120825] dark:to-[#1b0c2d] border  rounded-[2.4rem] overflow-hidden flex flex-col shadow-xl transition-all duration-300">
                  
                  {/* Floating Bubbles */}
                  <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 rounded-full bg-amber-500/30 dark:bg-yellow-500/20"
                        animate={{ 
                          opacity: [0.2, 0.7, 0.2], 
                          y: [0, -70, 0],
                          x: [0, (i % 2 === 0 ? 12 : -12), 0] 
                        }}
                        transition={{ duration: 4 + i, repeat: Infinity }}
                        style={{ left: `${15 * i + 10}%`, bottom: `${5 + (i % 2) * 15}%` }}
                      />
                    ))}
                  </div>

                  {/* Project Image */}
                  <div className="relative w-full h-56 overflow-hidden z-10">
                    <Image
                      width={600}
                      height={400}
                      src={project.imageUrls[0]}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#fff8e1]/40 dark:from-[#0a0219]/60 to-transparent" />
                  </div>

                  <div className="relative z-30 p-8 flex flex-col flex-grow">
                    <h4 className="text-xl font-black text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-amber-500" />
                      {project.title}
                    </h4>

                    <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-2 text-sm leading-relaxed font-medium">
                      {project.details}
                    </p>

                    <div className="flex items-center gap-4 mt-auto">
                      <Link href={`/all-projects/projectDetails/${project._id}`} className="flex-1">
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
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AllProjects;