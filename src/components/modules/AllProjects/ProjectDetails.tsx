/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import {FaExternalLinkAlt, FaCode, FaServer, FaLaptop } from "react-icons/fa";
import { useState } from "react";
import Image from "next/image";
import { TProjects } from "@/types/projects";
import GradientButton from "@/utility/GradientButton";

const ProjectDetails = ({ project }: { project: TProjects }) => {
  const [selectedImage, setSelectedImage] = useState(project.imageUrls[0]);

  return (
    <section className="bg-white dark:bg-[#080808] min-h-screen pb-32 transition-colors duration-500 selection:bg-amber-500/30">
      
      {/* HEADER SECTION */}
      <div className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-sm font-bold uppercase tracking-widest mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            {project.projectType}
          </div>
          
          <h1 className="text-6xl  font-black text-slate-900 dark:text-white tracking-tighter leading-[0.8] mb-12">
            {project.title}
          </h1>

          <div className="flex flex-wrap items-center gap-8 pt-4 justify-center md:justify-start">
            {/* Live Demo Button */}
            <GradientButton href={project.liveLink} target="_blank" className="px-10 py-5 rounded-2xl font-bold flex items-center gap-3 shadow-2xl shadow-amber-500/30 hover:-translate-y-1 transition-all">
              Launch Case Study <FaExternalLinkAlt className="text-sm" />
            </GradientButton>

            {/* GitHub Links with Labels */}
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

      {/* HERO IMAGE SECTION */}
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <div className="relative group rounded-[3rem] overflow-hidden bg-slate-100 dark:bg-[#111] border border-slate-200 dark:border-white/10 transition-all duration-700 hover:shadow-[0_60px_120px_-20px_rgba(0,0,0,0.2)] dark:hover:shadow-amber-500/10">
          <div className="relative aspect-video w-full flex items-center justify-center p-4 md:p-12">
            <Image
              fill
              src={selectedImage}
              alt={project.title}
              className="object-contain p-4 transition-all duration-1000"
              priority
            />
          </div>
        </div>
        
        {/* Gallery Thumbnails */}
        <div className="flex gap-4 justify-center mt-12 overflow-x-auto pb-4">
          {project.imageUrls.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(image)}
              className={`relative flex-shrink-0 w-28 h-16 rounded-2xl overflow-hidden transition-all duration-500 border-2 ${
                selectedImage === image
                  ? "border-amber-500 scale-110"
                  : "border-transparent opacity-40 hover:opacity-100"
              }`}
            >
              <Image fill src={image} alt="thumbnail" className="object-cover" />
            </button>
          ))}
        </div>
      </div>

      {/* CONTENT & INFO SECTION */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
          
          {/* Main Column */}
          <div className="lg:col-span-8 space-y-24">
            
            {/* About Section */}
            <section className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tighter">
                Architecture & <span className="text-amber-500 italic">Vision</span>
              </h2>
              <div
                className="prose prose-xl dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 leading-[1.8]
                prose-p:mb-8 prose-strong:text-slate-900 dark:prose-strong:text-white"
                dangerouslySetInnerHTML={{ __html: project.details }}
              />
            </section>

            {/* Features - Direct DB Render */}
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

          {/* Sidebar - Tech Stack */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 p-8 bg-slate-50 dark:bg-white/[0.03] border border-slate-100 dark:border-white/5 rounded-[2.5rem]">
              <h3 className="text-xs font-black text-amber-500 uppercase tracking-[0.3em] mb-10 flex items-center gap-2">
                <FaCode /> Core Stack
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {(Array.isArray(project.technologies) ? project.technologies : [project.technologies]).map((tech, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-white/10 text-slate-700 dark:text-slate-200 rounded-xl text-sm font-bold border border-slate-200 dark:border-white/10 shadow-sm hover:border-amber-500/50 transition-all cursor-default"
                  >
                    <span className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]"></span>
                    {tech}
                  </div>
                ))}
              </div>

              {/* Minimalist Specs */}
              <div className="mt-12 pt-10 border-t border-slate-200 dark:border-white/10 space-y-6">
                <div className="flex justify-between items-center text-sm font-medium">
                  <span className="text-slate-400">Category</span>
                  <span className="text-slate-900 dark:text-white">{project.projectType}</span>
                </div>
                <div className="flex justify-between items-center text-sm font-medium">
                  <span className="text-slate-400">Timeline</span>
                  <span className="text-slate-900 dark:text-white">Q1 2026</span>
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