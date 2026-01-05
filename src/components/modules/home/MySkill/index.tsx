"use client"
import { TSkill } from '@/types/skills';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';



const softSkills = [
  { name: 'Communication', icon: '💬' },
  { name: 'Teamwork', icon: '🤝' },
  { name: 'Problem Solving', icon: '🧩' },
  { name: 'Time Management', icon: '⏰' },
  { name: 'Adaptability', icon: '🔄' },
  { name: 'Leadership', icon: '🌟' },
  { name: 'Creativity', icon: '🎨' },
  { name: 'Critical Thinking', icon: '🧠' },

];

const SkillsSection = ({skills}:{skills:TSkill[]}) => {

  const [activeTab, setActiveTab] = useState('technical');

  return (
    <section className="py-16 lg:py-20  bg-white dark:bg-[#0a0219] transition-colors duration-300">
      <div className=" mx-4 md:mx-8 lg:mx-16 px-6">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-12"
        >
          My Skills
        </motion.h2>

        {/* Tab System */}
        <div className="flex justify-center gap-4 mb-12 ">
          <button
            onClick={() => setActiveTab('technical')}
            className={`px-6 py-3 rounded-full font-semibold ${
              activeTab === 'technical'
                ? 'bg-primary dark:text-black text-white'
                : 'bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white'
            } transition-colors duration-300`}
          >
            Technical Skills
          </button>
          <button
            onClick={() => setActiveTab('soft')}
            className={`px-6 py-3 rounded-full font-semibold ${
              activeTab === 'soft'
                ? 'bg-primary dark:text-black text-white'
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
          transition={{ duration: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
        >
          {activeTab === 'technical'
            ? skills?.map((skill, index) => (
                <motion.div
                  key={skill._id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.1, rotate: 5, borderColor: '#facc15' }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="relative p-6 bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-lg flex flex-col items-center justify-center cursor-pointer hover:shadow-primary/20  hover:border-2 transition-all duration-300"
                >
                  {/* Skill Logo */}
                  <div className="w-16 h-16 mb-4">
                    <Image
                    width={500}
                    height={500}
                      src={skill.logo[0]}
                      alt={skill.title}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Skill Name */}
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {skill.title}
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
                  transition={{ duration: 0.4, delay: index * 0.1 }}
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