/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import DP from "../../../../assets/banner/profileImage/Subir_Das.png";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Banner() {
  const roles = [
    "Full Stack Developer",
    "MERN Stack Developer",
    "Software Developer",
    "Freelancer"
  ];
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < roles[roleIndex].length) {
      const timeout = setTimeout(() => {
        setDisplayedRole((prev) => prev + roles[roleIndex][charIndex]);
        setCharIndex(charIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => {
        setDisplayedRole("");
        setCharIndex(0);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 2000);
    }
  }, [charIndex, roleIndex]);

  return (
    <section className="relative flex items-center justify-center h-screen bg-gradient-to-br from-[#0a0219] to-[#1b0c2d] text-white overflow-hidden">
      <div className="flex flex-col md:flex-row items-center px-6 relative z-10">
        {/* Left Text Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl">Hi, I am <span className="bg-gradient-to-r text-transparent bg-clip-text from-yellow-400 to-yellow-600">Subir Das</span></h1>
          <h1 className="my-4 text-2xl md:text-3xl font-bold">
          A Passionate <span className="bg-gradient-to-r text-transparent bg-clip-text from-yellow-400 to-yellow-600">
          {displayedRole}
          </span>
          </h1>
          <p className="mt-4 text-gray-300">
            I break down complex user experience problems to create integrity-focused solutions that connect billions of people.
          </p>
          {/* CTA Buttons */}
          <div className="mt-6 flex justify-center md:justify-start gap-4">
            <button className="px-6 py-3 bg-primary text-black font-semibold rounded-full hover:bg-yellow-600 transition duration-300">
              Download CV
            </button>
          </div>
        </div>
        {/* Right Image Section with Circular Frame & Animated Orbiting Circles */}
        <motion.div className="md:w-1/2 flex justify-center items-center mt-20 md:mt-0 relative">
          {/* Outer Rotating Circle */}
          <motion.div 
            animate={{ rotate: 360 }} 
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
            className="absolute w-[350px] h-[350px] md:w-[450px] md:h-[450px] border-2 border-yellow-500 rounded-full"
          >
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="absolute top-0 left-1/2 w-6 h-6 bg-yellow-500 rounded-full"
            ></motion.div>
            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-0 left-1/2 w-6 h-6 bg-yellow-500 rounded-full"
            ></motion.div>
          </motion.div>
          {/* Profile Image inside Circular Frame */}
          <div className="relative w-60 h-60 md:w-80 md:h-80 flex items-center justify-center rounded-full border-4 border-yellow-500 overflow-hidden">
            <Image
              src={DP}
              alt="Your Profile"
              width={310}
              height={310}
              className="rounded-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}


