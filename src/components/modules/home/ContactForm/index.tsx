"use client"
import { motion } from 'framer-motion';
import { House,  Mail, Phone } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="py-20 bg-white dark:bg-[#0a0219] transition-colors duration-300">
      <div className="mx-4 md:mx-8 lg:mx-16 px-6">
        {/* Single Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          whileHover={{ borderColor: '#facc15' }} // Yellow border on hover
          className="bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border-2  border-transparent transition-all duration-300"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left Section: Heading and Contact Info */}
            <div className="flex flex-col justify-center items-center p-10">
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
              >
                Get Ready To Create 
              </motion.h2>

              {/* Contact Information */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-primary text-2xl"><Mail/></span>
                  <p className="text-gray-600 dark:text-gray-300">
                    E-mail: nafiz125@gmail.com
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-primary  text-2xl"><House/></span>
                  <p className="text-gray-600 dark:text-gray-300">
                    Location: 3891 Ranchview Dr. Richardson
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-primary text-2xl"><Phone/></span>
                  <p className="text-gray-600 dark:text-gray-300">
                    Contact: 01245789321
                  </p>
                </div>
              </div>
            </div>

            {/* Right Section: Contact Form */}
            <div className="p-10 bg-white dark:bg-gray-900">
              <motion.h3
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-2xl font-bold text-gray-900 dark:text-white mb-6"
              >
                GET IN TOUCH
              </motion.h3>
              <form className="space-y-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:border-primary transition-colors duration-300"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:border-primary transition-colors duration-300"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:border-primary transition-colors duration-300"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:border-primary transition-colors duration-300"
                />
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:border-primary transition-colors duration-300"
                ></textarea>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-300"
                >
                  Appointment Now →
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;