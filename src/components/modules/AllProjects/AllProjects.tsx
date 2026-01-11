"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { TProjects } from "@/types/projects";
import Link from "next/link";
import { FolderSearch, Sparkles, Plus } from "lucide-react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { cn } from "@/lib/utils";
import GradientButton from "@/utility/GradientButton";

const AllProjects = ({ projects }: { projects: TProjects[] }) => {

  console.log("AllProjects received projects:", projects);
 
  const [activeTab, setActiveTab] = useState("Full-Stack");
  const [visibleCount, setVisibleCount] = useState(6); 

  useEffect(() => {
    setVisibleCount(6);
  }, [activeTab]);


  const allFilteredProjects = projects?.filter(
    (project) => project.projectType === activeTab
  );

 
  const displayedProjects = allFilteredProjects?.slice(0, visibleCount);


  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3); 
  };

  return (
    <div>
      {/* --- HERO SECTION --- */}
      <section className="relative flex flex-col items-center justify-center min-h-[450px] bg-gradient-to-br from-[#F9FAFB] via-[#fff8e1] to-[#faffdd] dark:from-[#0a0219] dark:via-[#120825] dark:to-[#1b0c2d] text-gray-900 dark:text-white overflow-hidden">
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
              transition={{ duration: 5 + i * 0.5, repeat: Infinity, delay: i * 0.4 }}
              style={{ left: `${10 + i * 9}%`, top: `${40 + (i % 3) * 15}%` }}
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
            <span className="text-xs md:text-sm font-bold text-yellow-700 dark:text-yellow-300 uppercase tracking-wider">Portfolio Showcase</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-4">
            My <span className="bg-gradient-to-r from-yellow-500 to-orange-500 dark:from-yellow-400 dark:to-amber-500 text-transparent bg-clip-text">Projects</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed">
    A curated collection of my latest work, ranging from web applications 
    to creative experiments in software development.
  </p>
        </motion.div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white dark:from-[#0a0219] to-transparent" />
      </section>

      {/* --- PROJECT LISTING SECTION --- */}
      <section className="min-h-screen py-20 bg-white dark:bg-[#0a0219] w-full">
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
                     activeTab === tab ? "text-white dark:text-black" : "text-gray-600 dark:text-gray-400"
                  )}
                >
                  {activeTab === tab && (
                    <motion.div
                      layoutId="projectActiveTab"
                      className="absolute inset-0 rounded-lg bg-gradient-to-r from-yellow-500 to-amber-500 shadow-lg shadow-yellow-500/30"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-20">{tab}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {displayedProjects.map((project, index) => (
                <motion.div
                  key={project._id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group relative rounded-[2.5rem] overflow-hidden p-[2px]"
                >
                  <div className="relative z-10 h-full bg-white dark:bg-[#120825] border border-gray-100 dark:border-white/5 rounded-[2.4rem] overflow-hidden flex flex-col shadow-xl">
                    <div className="relative w-full h-56 overflow-hidden">
                      <Image
                        width={600}
                        height={400}
                        src={project.imageUrls[0]}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    <div className="p-8 flex flex-col flex-grow">
                      <h4 className="text-xl font-black text-gray-900 dark:text-white mb-3">{project.title}</h4>
                      <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-2 text-sm">{project.shortDescription}</p>
                      <div className="flex items-center gap-4 mt-auto">
                        <Link href={`/all-projects/projectDetails/${project?.slug}`} className="flex-1">
                          <GradientButton className="w-full h-12" icon={<FolderSearch className="w-4 h-4" />}>Case Study</GradientButton>
                        </Link>
                        <GradientButton
                          href={project.liveLink}
                          target="_blank"
                          className="w-12 h-12 p-0"
                          icon={<FaExternalLinkAlt className="w-4 h-4" />}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Load More Button */}
          {allFilteredProjects.length > visibleCount && (
            <div className="flex justify-center mt-20">
              <button
                onClick={handleLoadMore}
                className="group relative flex items-center gap-3 px-10 py-4 border-2 border-yellow-500 text-yellow-600 dark:text-yellow-400 font-black rounded-2xl hover:bg-yellow-500 hover:text-white transition-all duration-300"
              >
                <Plus className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
                <span>Load More {activeTab} Projects</span>
              </button>
            </div>
          )}

          {/* End Message */}
          {allFilteredProjects.length <= visibleCount && allFilteredProjects.length > 0 && (
            <p className="text-center text-gray-500 mt-16 italic">
              You&apos;ve reached the end of the {activeTab} showcase.
            </p>
          )}
        </div>
      </section>
    </div>
  );
};

export default AllProjects;