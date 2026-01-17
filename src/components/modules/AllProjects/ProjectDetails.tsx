/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { FaExternalLinkAlt, FaCode, FaServer, FaLaptop, FaExpand, FaTimes } from "react-icons/fa";
import { useState } from "react";
import Image from "next/image";
import { TProjects } from "@/types/projects";
import GradientButton from "@/utility/GradientButton";

const ProjectDetails = ({ project }: { project: TProjects }) => {
  const [selectedImage, setSelectedImage] = useState(project?.imageUrls[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);


  return (
    <section className="bg-white dark:bg-[#0a0219] min-h-screen pb-32 transition-colors duration-500 selection:bg-amber-500/30">
      
    
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0a0219] backdrop-blur-xl p-4 md:p-10 transition-all duration-300"
          onClick={() => setIsModalOpen(false)}
        >
          <button className="absolute top-8 right-8 text-white/50 hover:text-amber-500 transition-colors z-[999999] bg-white/5 p-3 rounded-full border border-white/10">
            <FaTimes size={24} />
          </button>
          <div className="relative w-full h-full max-w-7xl max-h-[90vh] flex items-center justify-center">
            <img
              src={selectedImage}
              alt="Full View"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}

      {/* HEADER SECTION */}
      <div className="pt-32 pb-16 ">
        <div className="max-w-7xl mx-auto text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-sm font-bold uppercase tracking-widest mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            {project?.projectType}
          </div>
          
          <h1 className="text-6xl font-black text-slate-900 dark:text-white tracking-tighter mb-12">
            {project.title}
          </h1>

          <div className="flex flex-wrap items-center gap-8 pt-4 justify-center md:justify-start">
            <GradientButton href={project.liveLink} target="_blank" className="px-10 py-5 rounded-2xl font-bold flex items-center gap-3 shadow-2xl shadow-amber-500/30 hover:-translate-y-1 transition-all">
              Launch Case Study <FaExternalLinkAlt className="text-sm" />
            </GradientButton>

            <div className="flex gap-6">
              <div className="flex flex-col items-center gap-2">
                <a href={project.clientGithubLink} target="_blank" className="p-4 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl hover:bg-slate-900 dark:hover:bg-white hover:text-white dark:hover:text-black transition-all group shadow-sm">
                  <FaLaptop size={22} />
                </a>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Client Code</span>
              </div>

              {project.serverGithubLink && (
                <div className="flex flex-col items-center gap-2">
                  <a href={project.serverGithubLink} target="_blank" className="p-4 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl hover:bg-slate-900 dark:hover:bg-white hover:text-white dark:hover:text-black transition-all group shadow-sm">
                    <FaServer size={22} />
                  </a>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Server Code</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* HERO & GALLERY SECTION */}
      <div className="max-w-7xl mx-auto mb-24">
        {/* Main Display Image */}
        <div 
          onClick={() => setIsModalOpen(true)}
          className="relative group rounded-[2.5rem] overflow-hidden bg-slate-100 dark:bg-[#111] border border-slate-200 dark:border-white/10 transition-all duration-700 hover:shadow-2xl cursor-zoom-in"
        >
          <div className="relative aspect-video w-full flex items-center justify-center p-4 md:p-12">
            <Image
              fill
              src={selectedImage}
              alt={project.title}
              className="object-contain p-4 transition-all duration-1000 group-hover:scale-[1.03]"
              priority
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
               <div className="bg-white/10 backdrop-blur-md p-4 rounded-full border border-white/20">
                  <FaExpand className="text-white text-2xl" />
               </div>
            </div>
          </div>
        </div>
        
        {/* Thumbnails - Using Flex Wrap so none are hidden */}
        <div className="flex flex-wrap gap-4 justify-center mt-10">
          {project?.imageUrls?.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(image)}
              className={`relative w-24 h-16 md:w-32 md:h-20 rounded-xl overflow-hidden transition-all duration-300 border-2 ${
                selectedImage === image
                  ? "border-amber-500 scale-105 shadow-lg shadow-amber-500/20"
                  : "border-slate-200 dark:border-white/10 opacity-50 hover:opacity-100"
              }`}
            >
              <Image fill src={image} alt="thumbnail" className="object-cover" />
            </button>
          ))}
        </div>
      </div>

      {/* CONTENT & INFO SECTION */}
      <div className="max-w-7xl mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
          
          <div className="lg:col-span-8 space-y-24">
            
            {/* Architecture Section - Updated List Styles */}
            <section className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tighter">
                Architecture & <span className="text-amber-500 italic">Vision</span>
              </h2>
              <div
                className="prose prose-xl dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 leading-[1.8]
                prose-p:mb-8 prose-strong:text-slate-900 dark:prose-strong:text-white
                prose-ul:list-disc prose-ul:marker:text-amber-500 prose-ul:space-y-4
                prose-ol:list-decimal prose-ol:marker:text-amber-500 prose-li:pl-2"
                dangerouslySetInnerHTML={{ __html: project.details }}
              />
            </section>

            {/* Benchmarks Section */}
            <section className="space-y-12">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tighter">
                Technical <span className="text-amber-500 italic">Benchmarks</span>
              </h2>
              <div
                className="prose prose-xl dark:prose-invert max-w-none
                prose-ul:list-disc prose-ul:marker:text-amber-500 prose-ul:space-y-4
                prose-ol:list-decimal prose-ol:marker:text-amber-500 prose-li:pl-2"
                dangerouslySetInnerHTML={{ __html: project.keyFeatures }}
              />
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 p-8 bg-slate-50 dark:bg-white/[0.03] border border-slate-100 dark:border-white/5 rounded-[2.5rem]">
              <h3 className="text-xs font-black text-amber-500 uppercase tracking-[0.3em] mb-10 flex items-center gap-2">
                <FaCode /> Core Stack
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {(Array.isArray(project.technologies) ? project.technologies : [project.technologies]).map((tech, index) => (
                  <div key={index} className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-white/10 text-slate-700 dark:text-slate-200 rounded-xl text-sm font-bold border border-slate-200 dark:border-white/10 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]"></span>
                    {tech}
                  </div>
                ))}
              </div>

              <div className="mt-12 pt-10 border-t border-slate-200 dark:border-white/10 space-y-6">
                <div className="flex justify-between items-center text-sm font-medium">
                  <span className="text-slate-400">Category</span>
                  <span className="text-slate-900 dark:text-white">{project?.projectType}</span>
                </div>
             
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;