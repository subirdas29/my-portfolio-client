"use client";
import { Facebook, Mail, Phone, MapPin, LinkedinIcon, GithubIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import fiverrLight from '../../assets/icon/fiverr-white.webp';
import upworkLight from '../../assets/icon/upwork.webp';
import logo from '../../assets/logo/sd-logo.webp';


const Footer = () => {
  return (
    <footer className="relative flex flex-col items-center justify-center pt-24 pb-12 bg-gradient-to-br from-[#F9FAFB] via-[#fff8e1] to-[#faffdd] dark:from-[#0a0219] dark:via-[#120825] dark:to-[#1b0c2d] text-gray-900 dark:text-white overflow-hidden border-t border-gray-200 dark:border-white/5">
      
      {/* --- Animated Background Elements --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
    
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 rounded-full bg-amber-500/60 dark:bg-yellow-500/30 shadow-[0_0_10px_rgba(245,158,11,0.4)]"
            initial={{ opacity: 0, y: -20 }}
            animate={{
              opacity: [0, 0.7, 0],
              y: [0, 250], 
              x: [0, Math.random() * 40 - 20],
            }}
            transition={{
              duration: 7 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.1,
              ease: "linear"
            }}
            style={{
              left: `${5 + i * 8}%`,
              top: `${-10 + (i % 3) * 5}%`,
            }}
          />
        ))}
        
        {/* Glowing Orbs */}
        <motion.div
          className="absolute -bottom-32 -right-32 w-[450px] h-[450px] rounded-full bg-amber-400/20 dark:bg-yellow-500/10 blur-[100px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-0 -left-32 w-[350px] h-[350px] rounded-full bg-purple-400/15 dark:bg-purple-500/10 blur-[90px]"
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        />
      </div>


      <div className="relative z-10 w-full px-6 md:px-10 lg:px-20 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20 mb-16">
          
          {/* Brand Section */}
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2"
            >
                   <div className="flex ">
         <Link href="/" className="flex items-center gap-2 ">
           <Image
            src={logo}
          width={100}
          height={100}
            alt="My logo"
            className="w-10 h-10"
            />
       <span className="text-3xl font-black bg-gradient-to-r from-yellow-600 via-amber-500 to-orange-600 dark:from-yellow-400 dark:via-yellow-500 dark:to-amber-500 text-transparent bg-clip-text">
         
            Subir Das
          </span>
        </Link>
       </div>
            </motion.div>
            <p className="text-gray-700 dark:text-gray-300 text-[15px] leading-relaxed max-w-sm font-medium">
              I’m a passionate web developer solving complex UX problems. Creating integrity-focused solutions that connect people worldwide.
            </p>
            
            {/* Social Icons */}
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
             href="https://www.upwork.com/freelancers/~01ac68ecfaf5ac96f9?mp_source=share"
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

          {/* Quick Links */}
          <div className="space-y-6 md:pl-8">
            <h3 
              className="flex items-center gap-2 font-bold uppercase text-sm tracking-[0.2em] bg-gradient-to-r from-yellow-600 via-amber-500 to-orange-600 dark:from-yellow-400 dark:via-yellow-500 dark:to-amber-500 text-transparent bg-clip-text">

            
               Navigation
            </h3>
            <ul className="space-y-4 text-gray-700 dark:text-gray-400 font-semibold text-sm">
              <li><Link href="#" className="hover:text-amber-600 dark:hover:text-amber-500 transition-colors">Home</Link></li>
              <li><Link href="/all-projects" className="hover:text-amber-600 dark:hover:text-amber-500 transition-colors">Case Studies</Link></li>
              <li><Link href="/all-blogs" className="hover:text-amber-600 dark:hover:text-amber-500 transition-colors">Articles</Link></li>
              <li><Link href="/contact" className="hover:text-amber-600 dark:hover:text-amber-500 transition-colors">Get in Touch</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
             <h3 
            className="flex items-center gap-2 font-bold uppercase text-sm tracking-[0.2em] bg-gradient-to-r from-yellow-600 via-amber-500 to-orange-600 dark:from-yellow-400 dark:via-yellow-500 dark:to-amber-500 text-transparent bg-clip-text">

            
               Contact Info
            </h3>
            <div className="space-y-5 text-gray-700 dark:text-gray-400 font-medium text-sm">
              <div className="flex items-center gap-4 group">
                   <div className="p-2.5 rounded-lg bg-white dark:bg-white/10 text-amber-500 border border-amber-500/20 shadow-sm transition-colors group-hover/item:bg-amber-500 group-hover/item:text-white">
                   <MapPin className="w-4 h-4" />
                </div>
                <span className="group-hover:text-gray-900 dark:group-hover:text-white transition-colors">Akbarshah, Pahartali, Chattogram</span>
              </div>
              <div className="flex items-center gap-4 group">
                 <div className="p-2.5 rounded-lg bg-white dark:bg-white/10 text-amber-500 border border-amber-500/20 shadow-sm transition-colors group-hover/item:bg-amber-500 group-hover/item:text-white">
                   <Phone className="w-4 h-4" />
                </div>
                <span className="group-hover:text-gray-900 dark:group-hover:text-white transition-colors">+8801689586905</span>
              </div>
              <div className="flex items-center gap-4 group">
                   <div className="p-2.5 rounded-lg bg-white dark:bg-white/10 text-amber-500 border border-amber-500/20 shadow-sm transition-colors group-hover/item:bg-amber-500 group-hover/item:text-white">
                   <Mail className="w-4 h-4" />
                </div>
                <span className="group-hover:text-gray-900 dark:group-hover:text-white transition-colors">subirdas1045@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-16 pt-8 border-t border-gray-300 dark:border-white/5 text-center">
        <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base font-medium tracking-wide">
  © 2025 <span className="text-gray-900 dark:text-white font-semibold">Subir Das</span>. All rights reserved.
</p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;