/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

const experience = [
  {
    title: 'Junior Software Engineer',
    company: 'Codealign',
    duration: 'Oct 2025 - Present',
    description: 'Worked on end-to-end full-stack web application development, focusing on RESTful API development, backend logic, database management, and frontend integration. Built responsive and user-friendly interfaces, ensured smooth data flow between frontend and backend, optimized performance, and collaborated remotely with cross-functional teams to deliver scalable and efficient solutions.',
  },
  {
    title: 'Full Stack Developer (Internship)',
    company: 'Codealign',
    duration: 'Jun 2025 - Sept 2025',
    description: "As a Full Stack Developer Intern at CodeAlign, I develop responsive and scalable web applications using Next.js, React, Redux, and Node.js. I work closely with UI/UX designers to improve user experience, build backend APIs with MongoDB, PostgreSQL, Prisma, and Mongoose, follow clean code practices, and deliver features through agile, sprint-based workflows."
  },
];

const education = [
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'Faridpur Engineering College',
    duration: '2017 - 2021',
    description: 'Focused on Data Structures, Algorithms, Database Management, and Software Engineering principles. Participated in various programming contests and built several academic projects.'
  },
];

const ExperienceEducationSection = () => {
  const [activeTab, setActiveTab] = useState('experience');
  const data = activeTab === 'experience' ? experience : education;

  return (
    <section className="py-20 bg-white dark:bg-[#0a0219] transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- Main Wrapper Card with Running Border --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="group relative rounded-[2.5rem] shadow-2xl overflow-hidden p-[2px]" // p-[2px] for the border space
        >
          {/* --- Running Border SVG (Hover Triggered) --- */}
          <div className="absolute inset-0 z-0">
            <svg className="w-full h-full" preserveAspectRatio="none">
              <rect
                x="2"
                y="2"
                width="calc(100% - 4px)"
                height="calc(100% - 4px)"
                rx="40"
                ry="40"
                pathLength="100"
                className="fill-none stroke-amber-500 stroke-[3] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                strokeDasharray="20 80"
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

          {/* --- Main Content Card Body --- */}
          <div className="relative z-10 bg-gradient-to-br from-[#F9FAFB] via-[#fff8e1] to-[#faffdd] dark:from-[#0a0219] dark:via-[#120825] dark:to-[#1b0c2d] border border-gray-200 dark:border-white/5 rounded-[2.4rem] p-8 md:p-12 lg:p-16 overflow-hidden">
            
            {/* Animated Background Bubbles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-yellow-500 dark:bg-yellow-500/40"
                  animate={{ opacity: [0.2, 0.7, 0.2], y: [0, -100, 0], x: [0, Math.random() * 40 - 20, 0] }}
                  transition={{ duration: 5 + i, repeat: Infinity, delay: i * 0.5 }}
                  style={{ left: `${10 + i * 12}%`, bottom: `${10 + (i % 3) * 20}%` }}
                />
              ))}
            </div>

            {/* Header Section */}
            <div className="relative z-20 flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
              <div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                  >
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 dark:text-white capitalize">
                      My <span className="bg-gradient-to-r from-yellow-600 to-orange-600 dark:from-yellow-400 dark:to-amber-500 text-transparent bg-clip-text">{activeTab}</span>
                    </h2>
                    <div className="h-1.5 w-16 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full mt-3 shadow-lg shadow-yellow-500/30" />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Tab Switcher */}
              <div className="flex p-1.5 bg-white/50 dark:bg-black/20 backdrop-blur-md rounded-2xl border border-gray-200 dark:border-white/10 w-fit shadow-inner">
                {['experience', 'education'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`relative px-6 md:px-10 py-3.5 text-sm font-black transition-all duration-500 capitalize cursor-pointer z-10 rounded-xl ${
                      activeTab === tab
                        ? "text-white dark:text-black"
                        : "text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400"
                    }`}
                  >
                    {activeTab === tab && (
                      <motion.div
                        layoutId="activeTabGlow"
                        className="absolute inset-0 rounded-xl bg-gradient-to-r from-yellow-500 to-amber-500 shadow-lg shadow-yellow-500/40"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className="relative z-20">{tab}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Timeline Content */}
            <div className="relative z-20 border-l-2 border-amber-500/30 dark:border-white/10 ml-4 md:ml-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-16"
                >
                  {data.map((item, index) => (
                    <div key={index} className="relative pl-12 md:pl-16 group/item">
                      {/* Timeline Icon */}
                      <div className="absolute -left-[21px] md:-left-[25px] top-0 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-white dark:bg-[#120825] border-2 border-amber-500 rounded-full z-20 shadow-[0_0_15px_rgba(245,158,11,0.3)] transition-transform group-hover/item:scale-110 duration-300">
                        {activeTab === 'experience' ? (
                          <Briefcase size={20} className="text-amber-600 dark:text-amber-400" />
                        ) : (
                          <GraduationCap size={20} className="text-amber-600 dark:text-amber-400" />
                        )}
                      </div>

                      <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="relative"
                      >
                        <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-400 text-xs font-black uppercase tracking-widest mb-4 border border-amber-500/20 backdrop-blur-sm">
                          {item.duration}
                        </span>
                        
                        <h4 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white mb-2 tracking-tight group-hover/item:text-amber-600 dark:group-hover/item:text-amber-400 transition-colors">
                          {(item as any).title || (item as any).degree}
                        </h4>
                        
                        <p className="text-lg font-bold text-amber-700/80 dark:text-yellow-500/80 mb-6 italic flex items-center gap-2">
                           <span className="w-4 h-[2px] bg-amber-500/50" />
                           {(item as any).company || (item as any).institution}
                        </p>
                        
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base md:text-lg max-w-4xl font-medium">
                          {item.description}
                        </p>
                      </motion.div>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceEducationSection;