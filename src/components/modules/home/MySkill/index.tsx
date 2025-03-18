"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const technicalSkills = [
  { name: 'HTML', logo: 'https://i.ibb.co/R71RPtT/html.png' },
  { name: 'CSS', logo: 'https://i.ibb.co/S6qnPPv/css-3.png' },
  { name: 'JavaScript', logo: 'https://i.ibb.co/PsytJyY/img-js.png' },
  { name: 'React', logo: 'https://i.ibb.co/brqdqnM/science.png' },
  { name: 'Next.js', logo: '/logos/nextjs-logo.png' },
  { name: 'Tailwind CSS', logo: 'https://i.ibb.co/rkZHYCY/Tailwind-CSS-Logo-svg.png' },
];

const softSkills = [
  { name: 'Communication', icon: '💬' },
  { name: 'Teamwork', icon: '🤝' },
  { name: 'Problem Solving', icon: '🧩' },
  { name: 'Time Management', icon: '⏰' },
  { name: 'Adaptability', icon: '🔄' },
  { name: 'Leadership', icon: '🌟' },
];

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState('technical');

  return (
    <section className="py-20  bg-white dark:bg-[#0a0219] transition-colors duration-300">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-12"
        >
          My Skills
        </motion.h2>

        {/* Tab System */}
        <div className="flex justify-center gap-4 mb-12 my-24 mx-4 md:mx-8 lg:mx-16">
          <button
            onClick={() => setActiveTab('technical')}
            className={`px-6 py-3 rounded-full font-semibold ${
              activeTab === 'technical'
                ? 'bg-primary text-black'
                : 'bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white'
            } transition-colors duration-300`}
          >
            Technical Skills
          </button>
          <button
            onClick={() => setActiveTab('soft')}
            className={`px-6 py-3 rounded-full font-semibold ${
              activeTab === 'soft'
                ? 'bg-primary text-black'
                : 'bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white'
            } transition-colors duration-300`}
          >
            Soft Skills
          </button>
        </div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {activeTab === 'technical'
            ? technicalSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative p-6 bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-lg flex flex-col items-center justify-center cursor-pointer hover:shadow-primary/20 hover:border-primary hover:border-2 transition-all duration-300"
                >
                  {/* Skill Logo */}
                  <div className="w-16 h-16 mb-4">
                    <Image
                    width={500}
                    height={500}
                      src={skill.logo}
                      alt={skill.name}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Skill Name */}
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {skill.name}
                  </h4>

                  {/* Glow Effect on Hover */}
                  <div className="absolute inset-0 rounded-2xl bg-primary/20 blur-md opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))
            : softSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative p-6 bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-lg flex flex-col items-center justify-center cursor-pointer hover:shadow-primary/20 hover:border-primary hover:border-2 transition-all duration-300"
                >
                  {/* Skill Icon */}
                  <div className="text-4xl mb-4">{skill.icon}</div>

                  {/* Skill Name */}
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {skill.name}
                  </h4>

                  {/* Glow Effect on Hover */}
                  <div className="absolute inset-0 rounded-2xl bg-primary/20 blur-md opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;