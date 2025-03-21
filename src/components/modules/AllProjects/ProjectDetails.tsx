"use client";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useState } from "react";
import Image from "next/image";
import { TProjects } from "@/types/projects";

const ProjectDetails = ({ project }: { project: TProjects }) => {
  const [selectedImage, setSelectedImage] = useState(project.imageUrls[0]);

  return (
    <section className="py-12 w-3/4 bg-gray-200 dark:bg-gray-900 min-h-screen my-24 shadow-xl">
      <div className="px-4">
        {/* Project Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-8">
          {project.title}
        </h1>

        {/* Project Type */}
        <p className="text-lg text-center text-gray-700 dark:text-gray-300 mb-8">
          Project Type:{" "}
          <span className="font-semibold text-primary">{project.projectType}</span>
        </p>

        {/* Large Selected Image */}
        <div className="mb-8 px-16 rounded-lg overflow-hidden">
          <Image
            width={500}
            height={500}
            src={selectedImage}
            alt={project.title}
            className="w-full h-64 md:h-96 object-cover"
          />
        </div>

        {/* Thumbnail Images */}
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          {project.imageUrls.map((image, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(image)}
              className={`cursor-pointer rounded-lg overflow-hidden shadow-lg ${
                selectedImage === image ? "border-2 border-primary" : "border-2 border-transparent"
              }`}
            >
              <Image
                width={500}
                height={500}
                src={image}
                alt={`${project.title} - Thumbnail ${index + 1}`}
                className="w-24 h-16 md:w-32 md:h-20 object-cover"
              />
            </div>
          ))}
        </div>

        {/* Project Details */}
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 px-16">
          {project.details}
        </p>

        {/* Key Features */}
        <div className="mb-8 px-16">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Key Features
          </h2>
          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
            {Array.isArray(project.keyFeatures)
              ? project.keyFeatures.map((feature, index) => (
                  <li key={index} className="mb-2">
                    {feature}
                  </li>
                ))
              : (
                  <li>{project.keyFeatures}</li>
                )}
          </ul>
        </div>

        {/* Technologies Used */}
        <div className="mb-8 px-16">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Technologies Used
          </h2>
          <div className="flex flex-wrap gap-2">
            {Array.isArray(project.technologies)
              ? project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))
              : (
                  <span className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm">
                    {project.technologies}
                  </span>
                )}
          </div>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col md:flex-row gap-4 px-16">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-6 py-3 bg-primary text-black font-semibold rounded-lg hover:bg-yellow-600 transition duration-300"
          >
            <FaExternalLinkAlt className="mr-2" />
            Live Demo
          </a>
          <a
            href={project.clientGithubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-900 transition duration-300"
          >
            <FaGithub className="mr-2" />
            Client GitHub
          </a>
          {project.serverGithubLink && (
            <a
              href={project.serverGithubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-900 transition duration-300"
            >
              <FaGithub className="mr-2" />
              Server GitHub
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
