"use client"
import { motion } from "framer-motion";
import Image from 'next/image';
import sideImg from "../../../../assets/aboutme/sideimg/side-img-1.png";
import { Facebook, GithubIcon, LinkedinIcon, Download, Code2, Zap, BrainCircuit, Rocket } from 'lucide-react';
import Link from 'next/link';
import fiverrLight from '../../../../assets/icon/fiverr-white.webp';
import upworkLight from '../../../../assets/icon/upwork.webp';
import GradientButton from '@/utility/GradientButton';

const AboutMe = () => {
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

      <div className="page-container">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* --- LEFT SECTION --- */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Background Decorative Shape */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-amber-500/20 to-orange-500/20 rounded-[3rem] blur-2xl opacity-50" />

            {/* Main Image Container */}
            <div className="relative z-10 w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 md:border-8 border-white dark:border-slate-800 group">
              <Image
                src={sideImg}
                alt="Subir Das - Portfolio"
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Floating Tech Badges - মোবাইলের জন্য flex এবং ছোট সাইজ করা হয়েছে */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-2 md:-top-6 md:-right-6 z-20 p-2 md:p-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-xl md:rounded-2xl shadow-xl border border-white/20 flex items-center gap-2 md:gap-3"
            >
              <div className="p-1.5 md:p-2 bg-purple-500/10 rounded-lg">
                <BrainCircuit className="w-4 h-4 md:w-6 md:h-6 text-purple-500" />
              </div>
              <div className="pr-1 md:pr-2">
                <p className="text-[8px] md:text-[10px] font-bold text-slate-400 uppercase">Specialist</p>
                <p className="text-[10px] md:text-xs font-black text-slate-900 dark:text-white">AI Agent</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-1/2 -left-4 md:-left-8 z-20 p-2 md:p-3 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-xl md:rounded-2xl shadow-xl border border-white/20 flex items-center gap-2 md:gap-3"
            >
              <div className="p-1.5 md:p-2 bg-amber-500/10 rounded-lg">
                <Zap className="w-4 h-4 md:w-6 md:h-6 text-amber-500" />
              </div>
              <p className="text-[10px] md:text-xs font-black text-slate-900 dark:text-white pr-1">Full Stack Developer</p>
            </motion.div>
            
           
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -right-2 md:-right-10 z-30 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl p-4 md:p-8 rounded-[1.5rem] md:rounded-[2rem] shadow-2xl border border-slate-100 dark:border-white/10"
            >
              <div className="flex items-center gap-3 md:gap-5">
                <div className="relative">
                   <div className="text-3xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-amber-500 to-orange-600">2+</div>
                   <div className="absolute -top-1 -right-1 w-2 h-2 md:w-4 md:h-4 bg-emerald-500 rounded-full animate-ping" />
                </div>
                <div className="text-[10px] md:text-sm font-bold uppercase tracking-[0.1em] md:tracking-[0.2em] text-slate-500 dark:text-slate-400 leading-tight">
                  Years of<br/><span className="text-slate-900 dark:text-white font-black">Expertise</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

      
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8 mt-12 lg:mt-0"
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

            <div className="flex flex-col gap-8 pt-4">
              <div className="flex flex-wrap items-center gap-4">
                <GradientButton
                  href="/resume/Software_Engineer_Resume_of_Subir.pdf"
                  download="Subir_Das_Resume.pdf"
                  icon={<Download className="w-5 h-5" />}
                >
                  Download CV
                </GradientButton>

                <Link
                  href="/contact"
                  className="px-8 py-4 border-2 border-yellow-500/50 dark:border-yellow-400/30 hover:border-yellow-500 dark:hover:border-yellow-400/50 text-yellow-700 dark:text-yellow-300 font-semibold rounded-lg transition-all duration-300 inline-flex items-center justify-center backdrop-blur-sm hover:bg-yellow-500/10"
                >
                  Hire me
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-2">
                <div className="flex items-center gap-4">
                  <a href="https://www.facebook.com/profile.php?id=100006456303568" target="_blank" className="text-slate-400 p-2 bg-slate-300/40 hover:bg-slate-200 dark:bg-white/10 rounded-full dark:hover:bg-white/20 transition-colors">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="https://www.linkedin.com/in/subirdas29" target="_blank" className="text-slate-400 p-2 bg-slate-300/40 hover:bg-slate-200 dark:bg-white/10 rounded-full dark:hover:bg-white/20 transition-colors">
                    <LinkedinIcon className="w-5 h-5" />
                  </a>
                  <a href="https://github.com/subirdas29" target="_blank" className="text-slate-400 p-2 bg-slate-300/40 hover:bg-slate-200 dark:bg-white/10 rounded-full dark:hover:bg-white/20 transition-colors">
                    <GithubIcon className="w-5 h-5" />
                  </a>
                  <a href="https://www.fiverr.com/s/YR8eP7z" target="_blank" className="transition-colors p-2 bg-slate-300/40 hover:bg-slate-200 dark:bg-white/10 rounded-full dark:hover:bg-white/20">
                    <Image src={fiverrLight} alt="Fiverr" width={20} height={20} />
                  </a>
                  <a href="https://www.upwork.com/freelancers/~01ac68ecfaf5ac96f9?mp_source=share" target="_blank" className="transition-colors p-2 bg-slate-300/40 hover:bg-slate-200 dark:bg-white/10 rounded-full dark:hover:bg-white/20">
                    <Image src={upworkLight} alt="Upwork" width={20} height={20} />
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