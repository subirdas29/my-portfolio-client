"use client"
import { Button } from '@/components/ui/button';
import { motion } from "framer-motion";
import Image from 'next/image';
import sideImg from "../../../../assets/aboutme/sideimg/side-img.png";
import { Facebook, GithubIcon, LinkedinIcon } from 'lucide-react';
import Link from 'next/link';

const AboutMe = () => {
  return (
    <section className=" pb-16 lg:pb-20 pt-36  bg-white dark:bg-[#0a0219] transition-colors duration-300">
      <div className=" mx-4 md:mx-8 lg:mx-16 px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center ">
          {/* Left Section: Image with Glow Effect */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            // whileHover={{ borderColor: '#facc15' }} 
            className="relative "
          >
            <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-lg ">
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
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=100006456303568" target="_blank" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition">
                <Facebook className="w-5 h-5" />
              </a>
              {/* <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition">
                <Twitter className="w-5 h-5" />
              </a> */}
              <a href="https://www.linkedin.com/in/subirdas29" target="_blank" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition">
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a href="https://github.com/subirdas29" target="_blank" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition">
                <GithubIcon className="w-5 h-5" />
              </a>
            </div>
            <div className="flex gap-4">
                <a
              href='/resume/Fullstack_Developer_resume_of_Subir.pdf'
              download="Subir_Das_Resume.pdf" 
            className="px-4 py-1 bg-primary text-white dark:text-black font-semibold rounded-lg hover:bg-yellow-600 transition duration-300">
              Download CV
            </a>
            
            <Link href="/contact">
            <Button variant="outline" className="border-primary text-primary px-4 py-2 hover:bg-primary/10">
                Contact Me
              </Button>
            </Link>
            </div>
          
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
