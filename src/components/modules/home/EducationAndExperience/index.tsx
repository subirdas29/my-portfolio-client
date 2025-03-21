"use client"
import { motion } from 'framer-motion';

// const experience = [
//   {
//     title: 'Web Developer',
//     company: 'Tech Solutions Inc.',
//     duration: 'Jan 2021 - Present',
//     description: 'Developed and maintained web applications using modern technologies.',
//   },
//   {
//     title: 'Frontend Developer',
//     company: 'Creative Agency',
//     duration: 'Jun 2019 - Dec 2020',
//     description: 'Designed and implemented user interfaces for client projects.',
//   },
// ];

const education = [
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'Faridpur Engineering College',
    duration: '2017 - 2021',
    description: 'Graduated with honors, focusing on software development and algorithms.',
  },

];

const ExperienceEducationSection = () => {
  return (
    <section className="py-16 lg:py-20  bg-white dark:bg-[#0a0219] transition-colors duration-300">
      <div className="mx-4 md:mx-8 lg:mx-16 px-6">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-12"
        >
          Education
        </motion.h2>

        {/* Experience and Education Grid */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> */}
          {/* Experience Column
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Experience
            </h3>
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {exp.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  {exp.company} | {exp.duration}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mt-4">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div> */}

          {/* Education Column */}
          <div className="space-y-8">
         
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, borderColor: '#facc15' }}
                className="bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-transparent"
              >
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {edu.degree}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  {edu.institution} | {edu.duration}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mt-4">
                  {edu.description}
                </p>
              </motion.div>
            ))}
          </div>
        {/* </div> */}
      </div>
    </section>
  );
};

export default ExperienceEducationSection;