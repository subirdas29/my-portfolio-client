"use client"
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
  },
];

const ExperienceEducationSection = () => {
  const [activeTab, setActiveTab] = useState('experience');
  const data = activeTab === 'experience' ? experience : education;

  return (
    <section className="py-20 bg-gray-50 dark:bg-[#0a0219] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Wrapper Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gray-800/30 backdrop-blur-sm border border-gray-100 dark:border-gray-700/50 rounded-[2.5rem] shadow-2xl shadow-gray-200/50 dark:shadow-none p-8 md:p-12"
        >
          {/* Section Header Inside Card */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
            
            {/* Dynamic Title Section */}
            <div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white capitalize">
                    My {activeTab}
                  </h2>
                  <motion.div 
                    layoutId="headerUnderline"
                    className="h-1.5 w-12 bg-yellow-600 rounded-full mt-2" 
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Tab Switcher */}
            <div className="flex p-1.5 bg-gray-100 dark:bg-gray-900/50 rounded-2xl border border-gray-200 dark:border-gray-700 w-fit">
              {['experience', 'education'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative px-6 md:px-8 py-2.5 text-sm font-bold transition-colors duration-300 capitalize z-10 ${
                    activeTab === tab ? 'text-white' : 'text-gray-600 dark:text-gray-400'
                  }`}
                >
                  {activeTab === tab && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-yellow-600 rounded-xl shadow-md"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-20">{tab}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Timeline Content Area */}
          <div className="relative border-l-2 border-gray-100 dark:border-gray-700/50 ml-4 md:ml-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.4 }}
                className="space-y-12"
              >
                {data.map((item, index) => (
                  <div key={index} className="relative pl-10 md:pl-12">
                    {/* Timeline Icon Circle */}
                    <div className="absolute -left-[21px] top-0 flex items-center justify-center w-10 h-10 bg-white dark:bg-[#0a0219] border-2 border-yellow-600 rounded-full z-10 shadow-lg shadow-yellow-600/10">
                      {activeTab === 'experience' ? (
                        <Briefcase size={18} className="text-yellow-600" />
                      ) : (
                        <GraduationCap size={18} className="text-yellow-600" />
                      )}
                    </div>

                    {/* Content Body */}
                    <motion.div 
                      className="group"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <span className="text-xs font-bold text-yellow-700 dark:text-yellow-500 bg-yellow-100 dark:bg-yellow-900/20 px-3 py-1 rounded-full uppercase tracking-tighter">
                          {item.duration}
                        </span>
                      </div>
                      
                      <h4 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white transition-colors group-hover:text-yellow-600">
                        {activeTab === 'experience' ? item?.title : item?.degree}
                      </h4>
                      
                      <p className="text-md font-medium text-gray-500 dark:text-gray-400 mt-1 italic">
                        {activeTab === 'experience' ? item?.company : item?.institution}
                      </p>
                      
                      <p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed text-sm md:text-base">
                        {item?.description}
                      </p>
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ExperienceEducationSection;