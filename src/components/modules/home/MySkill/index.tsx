"use client";
import { cn } from '@/lib/utils';
import { TSkill } from '@/types/skills';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const softSkills = [
  { name: 'Communication', icon: '💬', desc: 'Effective verbal & written' },
  { name: 'Teamwork', icon: '🤝', desc: 'Collaborative mindset' },
  { name: 'Problem Solving', icon: '🧩', desc: 'Analytical approach' },
  { name: 'Time Management', icon: '⏰', desc: 'Prioritizing tasks' },
  { name: 'Adaptability', icon: '🔄', desc: 'Quick learner' },
  { name: 'Leadership', icon: '🌟', desc: 'Guiding teams' },
  { name: 'Creativity', icon: '🎨', desc: 'Out of box thinking' },
  { name: 'Critical Thinking', icon: '🧠', desc: 'Logical evaluation' },
];

const SkillsSection = ({ skills }: { skills: TSkill[] }) => {
  const [activeTab, setActiveTab] = useState('technical');

  return (
    <section className="py-24 bg-gray-50 dark:bg-[#030014] transition-colors duration-500">
      <div className="page-container px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">
            My <span className="text-amber-500">Skills</span>
          </h2>
          <div className="h-1.5 w-24 bg-amber-500 mx-auto rounded-full shadow-[0_0_15px_rgba(245,158,11,0.5)]" />
        </motion.div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-20">
          <div className="flex p-1.5 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10">
            {["technical", "soft"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "relative px-10 py-3 text-sm md:text-lg font-bold capitalize z-10 transition-all duration-300 rounded-xl cursor-pointer",
                  activeTab === tab 
                   ? "text-white dark:text-black"
    : "text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400"
                )}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="skillActiveTab"
                    className={cn(
      "absolute inset-0 rounded-lg",
      "bg-gradient-to-r from-yellow-500 to-amber-500",
      "hover:from-yellow-600 hover:to-amber-600",
      "shadow-lg shadow-yellow-500/30"
    )}
                    transition={{ type: "spring", bounce: 0.15, duration: 0.6 }}
                  />
                )}
                <span className="relative z-20">{tab === "technical" ? "Technical" : "Soft Skills"}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Container */}
        <div className="min-h-[500px]">
          <AnimatePresence mode="wait">
            {activeTab === 'technical' ? (
              <motion.div
                key="tech-grid"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
              >
                {skills?.map((skill, index) => (
                  <motion.div
                    key={skill._id}
                    whileHover={{ y: -10 }}
                    className="group relative p-8 bg-white  dark:bg-slate-900/40 border-2 border-gray-200 dark:border-white/10 rounded-2xl flex flex-col items-center justify-center shadow-lg hover:shadow-amber-500/20 hover:border-amber-500 transition-all duration-500 overflow-hidden cursor-default"
                  >
                    {/* Hover Corner Accent (Visible in both) */}
                    <div className="absolute top-0 right-0 w-16 h-16 bg-amber-500/40 dark:bg-amber-500/20 rounded-bl-full translate-x-16 -translate-y-16 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500 ease-out" />
                    
                    <div className="relative z-10 w-16 h-16 mb-4 flex items-center justify-center bg-gray-50 dark:bg-white/5 rounded-2xl group-hover:rotate-6 transition-all duration-500 shadow-inner">
                      <Image
                        width={100}
                        height={100}
                        src={skill.logo[0]}
                        alt={skill.title}
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                    <h4 className="relative z-10 text-[15px] font-bold text-gray-800 dark:text-gray-100">{skill.title}</h4>
                    
                    {/* Bottom Line */}
                    <div className="absolute bottom-6 w-0 h-1 bg-amber-500 rounded-full group-hover:w-10 transition-all duration-500" />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="soft-grid"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
              >
                {softSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ y: -10 }}
                    className="group relative p-10 bg-white dark:bg-slate-900/40 border-2 border-gray-200 dark:border-white/10 rounded-2xl flex flex-col items-center text-center shadow-lg hover:shadow-amber-500/20 hover:border-amber-500 transition-all duration-500 overflow-hidden"
                  >
                    {/* Same Hover Corner Accent as Tech Grid */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-amber-500/40 dark:bg-amber-500/20 rounded-bl-full translate-x-20 -translate-y-20 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500 ease-out" />

                    <div className="relative z-10 text-6xl mb-6 transform group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500">
                      {skill.icon}
                    </div>
                    <h4 className="relative z-10 text-2xl font-black text-gray-900 dark:text-white mb-3">
                      {skill.name}
                    </h4>
                    <p className="relative z-10 text-sm font-medium text-gray-500 dark:text-gray-400">
                      {skill.desc}
                    </p>

                    {/* Same Bottom Line as Tech Grid */}
                    <div className="absolute bottom-8 w-0 h-1.5 bg-amber-500 rounded-full group-hover:w-20 transition-all duration-500" />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;