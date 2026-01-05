"use client"
import { Button } from '@/components/ui/button';
import { motion } from "framer-motion";
import Image from 'next/image';
import sideImg from "../../../../assets/aboutme/sideimg/side-img.png";
import { Facebook, GithubIcon, LinkedinIcon, Download, Send, Code2, Cpu, Zap, Rocket, BrainCircuit } from 'lucide-react';
import Link from 'next/link';
import fiverrLight from '../../../../assets/icon/fiverr-white.webp';
import upworkLight from '../../../../assets/icon/upwork.webp';

import { FiverrIcon, UpworkIcon } from '@/components/icons/SocialIcons';

const AboutMe = () => {
  // Detailed Competencies including n8n and AI Agents
  const coreCompetencies = [
    { 
      title: "Full-Stack Development", 
      desc: "Specialized in Next.js, MERN stack, and high-performance system architecture.",
      icon: <Code2 className="w-6 h-6 text-blue-500" /> 
    },
    { 
      title: "Autonomous AI Agents", 
      desc: "Developing self-thinking agents using LLMs to handle complex business logic.",
      icon: <BrainCircuit className="w-6 h-6 text-purple-500" /> 
    },
    { 
      title: "n8n Workflow Automation", 
      desc: "Building advanced automation pipelines to sync 400+ apps using n8n.",
      icon: <Zap className="w-6 h-6 text-amber-500" /> 
    },
    { 
      title: "Scalable Infrastructure", 
      desc: "Ensuring applications remain fast, secure, and reliable under heavy traffic.",
      icon: <Rocket className="w-6 h-6 text-emerald-500" /> 
    }
  ];

  return (
    <section className="relative overflow-hidden pb-20 lg:pb-32 pt-36 bg-slate-50 dark:bg-[#0a0219] transition-colors duration-500">
      
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[0%] w-[30%] h-[30%] rounded-full bg-blue-500/10 blur-[120px]" />
      </div>

      <div className="px-6 md:px-16 lg:px-32">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Left: Professional Image with Static Fade-in Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-[10px] border-white dark:border-slate-800">
              <Image
                src={sideImg}
                alt="Subir Das - Portfolio"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                priority
              />
            </div>
            
            {/* Experience Card: Sudden blink off (using simple fade and gentle slide) */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
              className="absolute -bottom-8 -right-4 md:-right-8 z-20 bg-white dark:bg-slate-900 p-6 md:p-8 rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-800"
            >
              <div className="flex items-center gap-4">
                <div className="text-5xl font-extrabold text-primary">2+</div>
                <div className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                  Years of<br/>Expertise
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Section: In-depth About Details */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white leading-tight">
                Engineering <span className="text-primary">Intelligence</span> into Modern Web.
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 font-medium">
                Full-Stack Developer & AI Agent Architect
              </p>
            </div>

            <div className="space-y-4 text-lg text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
           <p>
  I am <b>Subir Das</b>, a passionate <b>Full-Stack Developer</b> with extensive experience in building robust and scalable web applications. 
  Beyond core development, I also specialize in <b>AI Agent Engineering</b> and <b>n8n Workflow Automation</b>, designing intelligent agents and automation pipelines to optimize complex business processes.
</p>
<p>
  By combining deep expertise in <b>Full-Stack Development</b> with advanced AI and automation skills, I create solutions that are both powerful and intelligent, delivering seamless user experiences and operational efficiency.
</p>

            </div>

            {/* Expertise Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {coreCompetencies.map((item, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:shadow-lg transition-all group">
                  <div className="mb-3 p-2 w-fit rounded-lg bg-slate-50 dark:bg-slate-800 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm">{item.title}</h3>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Final Actions & Socials */}
            <div className="flex flex-col gap-8 pt-4">
              <div className="flex flex-wrap items-center gap-4">
                  <a
                href="/resume/Software_Engineer_Resume_of_Subir.pdf"
                download="Subir_Das_Resume.pdf"
                className="group relative px-8 py-4 bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-white dark:text-black font-semibold rounded-2xl transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-lg shadow-yellow-500/25 hover:shadow-xl hover:shadow-yellow-500/30 overflow-hidden"
               
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity " />
                <Download className="w-5 h-5" />
                Download CV
              </a>
                  <Link
                href="/contact"
                className="px-8 py-4 border-2 border-yellow-500/50 dark:border-yellow-400/30 hover:border-yellow-500 dark:hover:border-yellow-400/50 text-yellow-700 dark:text-yellow-300 font-semibold rounded-2xl transition-all duration-300 inline-flex items-center justify-center backdrop-blur-sm hover:bg-yellow-500/10"
              
              >
                Hire me
              </Link>
               
              </div>

              {/* Social & Marketplace Logos */}
            
<div className="flex flex-wrap items-center gap-6 pt-2">
  <div className="flex items-center gap-4">

    {/* Facebook */}
    <a
      href="https://www.facebook.com/profile.php?id=100006456303568"
      target="_blank"
      className="text-slate-400 p-2 bg-slate-300/40 hover:bg-slate-200  dark:bg-white/10 rounded-full dark:hover:bg-white/20 transition-colors"
    >
      <Facebook className="w-5 h-5" />
    </a>

    {/* LinkedIn */}
    <a
      href="https://www.linkedin.com/in/subirdas29"
      target="_blank"
      className="text-slate-400 p-2 bg-slate-300/40 hover:bg-slate-200  dark:bg-white/10 rounded-full dark:hover:bg-white/20 transition-colors"
    >
      <LinkedinIcon className="w-5 h-5" />
    </a>

    {/* GitHub */}
    <a
      href="https://github.com/subirdas29"
      target="_blank"
      className="text-slate-400 p-2 bg-slate-300/40 hover:bg-slate-200  dark:bg-white/10 rounded-full dark:hover:bg-white/20 transition-colors"
    >
      <GithubIcon className="w-5 h-5" />
    </a>

    {/* Fiverr */}
<a
  href="https://www.fiverr.com/s/YR8eP7z"
  target="_blank"
  aria-label="Fiverr"
  className="transition-colors p-2 bg-slate-300/40 hover:bg-slate-200  dark:bg-white/10 rounded-full dark:hover:bg-white/20"
>
  <Image
    src={fiverrLight} 
    alt="Fiverr"
    width={20}
    height={20}
    
  />
</a>


    
  <a
  href="https://www.fiverr.com/s/YR8eP7z"
  target="_blank"
  aria-label="Upwork"
  className="transition-colors p-2 bg-slate-300/40 hover:bg-slate-200  dark:bg-white/10 rounded-full dark:hover:bg-white/20"
>
  <Image
    src={upworkLight} 
    alt="Upwork"
    width={20}
    height={20}
 
  />
</a>


  </div>
</div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;