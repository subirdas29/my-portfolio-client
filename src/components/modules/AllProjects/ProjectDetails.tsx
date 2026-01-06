"use client";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useState } from "react";
import Image from "next/image";
import { TProjects } from "@/types/projects";
import GradientButton from "@/utility/GradientButton";

const ProjectDetails = ({ project }: { project: TProjects }) => {
  const [selectedImage, setSelectedImage] = useState(project.imageUrls[0]);


  const signatureBg = "bg-gradient-to-br dark:from-[#0a0219] dark:via-[#120825] dark:to-[#1b0c2d] border border-gray-200 dark:border-white/5 transition-colors duration-300";

  return (
    <section className="py-12 flex justify-center bg-white dark:bg-[#0a0219] min-h-screen transition-colors duration-300">
      <div className={`w-full md:w-3/4 my-24 rounded-[2.5rem] overflow-hidden ${signatureBg}`}>
        <div className="py-12 px-6 md:px-12">
          {/* Project Title */}
          <h1 className="text-4xl md:text-6xl font-black text-center text-gray-900 dark:text-white mb-4 tracking-tight">
            {project.title}
          </h1>

          {/* Project Type Badge */}
          <div className="flex justify-center mb-10">
            <span className="px-6 py-2 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 font-black border border-amber-500/20 uppercase text-sm tracking-widest">
              {project.projectType}
            </span>
          </div>

          {/* Large Selected Image */}

<div className="mb-8 rounded-[2rem] overflow-hidden border border-gray-200 dark:border-white/10 max-w-5xl mx-auto bg-black/5 dark:bg-white/5">
  <div className="relative w-full h-[300px] md:h-[550px] flex items-center justify-center">
    <Image
      width={1200}
      height={700}
      src={selectedImage}
      alt={project.title}
      className="max-w-full max-h-full w-auto h-auto object-contain transition-all duration-500"
      priority 
    />
  </div>
</div>
          {/* Thumbnail Images */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {project.imageUrls.map((image, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(image)}
                className={`cursor-pointer rounded-2xl overflow-hidden transition-all duration-300 transform hover:scale-105 ${
                  selectedImage === image 
                    ? "ring-2 ring-amber-500 border-transparent" 
                    : "border-2 border-gray-200 dark:border-white/10"
                }`}
              >
                <Image
                  width={200}
                  height={150}
                  src={image}
                  alt={`${project.title} - Thumbnail ${index + 1}`}
                  className="w-24 h-16 md:w-36 md:h-24 object-cover"
                />
              </div>
            ))}
          </div>

          {/* Details Content Wrapper */}
          <div className="max-w-5xl mx-auto space-y-12">
            {/* Project Details Description */}
            <div className="bg-white/40 dark:bg-white/5 backdrop-blur-sm p-8 rounded-[2rem] border border-gray-200 dark:border-white/5">
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
                {project.details}
              </p>
            </div>

            {/* Key Features & Tech Stack Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Key Features */}
              <div className="bg-white/40 dark:bg-white/5 backdrop-blur-sm p-8 rounded-[2rem] border border-gray-200 dark:border-white/5">
                <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                  <span className="w-2 h-8 bg-amber-500 rounded-full"></span>
                  Key Features
                </h2>
                <ul className="space-y-4 text-gray-700 dark:text-gray-300 font-medium">
                  {Array.isArray(project.keyFeatures)
                    ? project.keyFeatures.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="text-amber-500 mt-1">✦</span>
                          {feature}
                        </li>
                      ))
                    : (
                        <li className="flex items-start gap-3">
                           <span className="text-amber-500 mt-1">✦</span>
                           {project.keyFeatures}
                        </li>
                      )}
                </ul>
              </div>

              {/* Technologies Used */}
              <div className="bg-white/40 dark:bg-white/5 backdrop-blur-sm p-8 rounded-[2rem] border border-gray-200 dark:border-white/5">
                <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                  <span className="w-2 h-8 bg-amber-500 rounded-full"></span>
                  Technologies Used
                </h2>
                <div className="flex flex-wrap gap-3">
                  {(Array.isArray(project.technologies) ? project.technologies : [project.technologies]).map((tech, index) => (
                    <span
                      key={index}
                      className="px-5 py-2.5 bg-amber-500/10 dark:bg-amber-500/20 text-gray-800 dark:text-amber-300 rounded-xl text-sm font-bold border border-amber-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-6 justify-center pt-8">
              <GradientButton
                href={project.liveLink}
                target="_blank"
                className="px-10 py-4  rounded-2xl flex items-center gap-2 shadow-xl"
              >
                <FaExternalLinkAlt className="text-sm" />
                Live Demo
              </GradientButton>

              <a
                href={project.clientGithubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-black font-semibold rounded-2xl hover:scale-105 transition-all shadow-xl"
              >
                <FaGithub className="mr-2 text-xl" />
                Client Code
              </a>

              {project.serverGithubLink && (
                <a
                  href={project.serverGithubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-black font-semibold rounded-2xl hover:scale-105 transition-all shadow-xl"
                >
                  <FaGithub className="mr-2 text-xl" />
                  Server Code
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;