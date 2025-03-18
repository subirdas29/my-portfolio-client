"use client"
import { Button } from '@/components/ui/button';
import { motion } from "framer-motion";
import Image from 'next/image';
import sideImg from "../../../../assets/aboutme/sideimg/side-img.png";

const AboutMe = () => {
  return (
    <section className="  bg-white dark:bg-[#0a0219] transition-colors duration-300">
      <div className="my-24 mx-4 md:mx-8 lg:mx-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Section: Image with Glow Effect */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={sideImg}
                alt="About Me"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Right Section: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
           <div className='flex items-center gap-3'>
           <Image
                src='https://i.ibb.co/9wf5748/108365991.jpg'
                width={500}
                height={500}
                alt="About Me"
                className="w-10 h-10 rounded-full"
              />
           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              About Me
            </h2>
           </div>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              I’m a passionate web developer with a knack for solving complex user experience problems. My mission is to create seamless, integrity-focused solutions that connect billions of people worldwide.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              With expertise in modern web technologies, I specialize in building scalable, user-friendly applications that deliver exceptional performance and aesthetics.
            </p>
            <div className="flex gap-4">
              <Button className="bg-primary text-white hover:bg-primary/90 transition-colors duration-300">
                Download CV
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Contact Me
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
