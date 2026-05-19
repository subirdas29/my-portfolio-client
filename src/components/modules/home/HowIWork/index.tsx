"use client";
import { motion } from "framer-motion";
import { MessageCircle, Lightbulb, Code2, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: <MessageCircle className="w-6 h-6 text-amber-500" />,
    title: "Discovery & Discussion",
    desc: "We start with a detailed conversation about your goals, requirements, timeline, and budget. I ask the right questions to fully understand your vision.",
  },
  {
    number: "02",
    icon: <Lightbulb className="w-6 h-6 text-purple-500" />,
    title: "Planning & Design",
    desc: "I create a technical plan, architecture overview, and UI wireframes. You get a clear roadmap before a single line of code is written.",
  },
  {
    number: "03",
    icon: <Code2 className="w-6 h-6 text-blue-500" />,
    title: "Development & Updates",
    desc: "I build your product in focused sprints, sharing regular progress updates. You can review and give feedback at every stage.",
  },
  {
    number: "04",
    icon: <Rocket className="w-6 h-6 text-emerald-500" />,
    title: "Delivery & Support",
    desc: "After thorough testing, I deploy the project and hand over all source code. Post-delivery support is included to ensure everything runs smoothly.",
  },
];

export default function HowIWork() {
  return (
    <section className="relative py-20 lg:py-32 bg-white dark:bg-[#120825] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full bg-amber-500/5 blur-[150px]" />
      </div>

      <div className="page-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 mb-4">
            <span className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-widest">My Process</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tighter">
            How I <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-500 to-orange-500">Work</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A transparent, structured process that keeps you informed and in control at every step.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connecting line — desktop only */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-linear-to-r from-transparent via-amber-500/30 to-transparent" />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative flex flex-col items-center text-center p-6 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 hover:border-amber-500/40 transition-colors duration-300"
            >
              {/* Step number */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-amber-500 text-white text-xs font-black flex items-center justify-center shadow-lg shadow-amber-500/30">
                {step.number}
              </div>
              <div className="mt-4 p-3 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 mb-4">
                {step.icon}
              </div>
              <h3 className="font-black text-slate-900 dark:text-white mb-2">{step.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
