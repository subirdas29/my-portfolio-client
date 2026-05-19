"use client";
import { motion } from "framer-motion";
import { Code2, BrainCircuit, Zap, Globe, Database, Smartphone } from "lucide-react";

const services = [
  {
    icon: <Code2 className="w-6 h-6 text-amber-500" />,
    title: "Full-Stack Web Development",
    desc: "End-to-end web applications using Next.js, React, Node.js, and MongoDB. Scalable, fast, and production-ready.",
    tags: ["Next.js", "React", "Node.js", "MongoDB"],
  },
  {
    icon: <BrainCircuit className="w-6 h-6 text-purple-500" />,
    title: "AI Agent Engineering",
    desc: "Building autonomous AI agents using LLMs that handle complex business logic, data processing, and decision-making.",
    tags: ["LLMs", "Pinecone", "RAG", "OpenAI"],
  },
  {
    icon: <Zap className="w-6 h-6 text-yellow-500" />,
    title: "n8n Workflow Automation",
    desc: "Automating repetitive business processes by connecting 400+ apps using n8n, saving time and reducing errors.",
    tags: ["n8n", "Zapier", "Webhooks", "APIs"],
  },
  {
    icon: <Globe className="w-6 h-6 text-emerald-500" />,
    title: "REST API Development",
    desc: "Designing and building secure, well-documented REST APIs with authentication, rate limiting, and caching.",
    tags: ["Express.js", "JWT", "REST", "OpenAPI"],
  },
  {
    icon: <Database className="w-6 h-6 text-blue-500" />,
    title: "Database Design & Optimization",
    desc: "MongoDB schema design, indexing strategies, query optimization, and data modeling for high-performance apps.",
    tags: ["MongoDB", "Mongoose", "Redis", "Caching"],
  },
  {
    icon: <Smartphone className="w-6 h-6 text-rose-500" />,
    title: "Responsive UI/UX Development",
    desc: "Pixel-perfect, mobile-first interfaces with smooth animations using Tailwind CSS and Framer Motion.",
    tags: ["Tailwind CSS", "Framer Motion", "Figma"],
  },
];

export default function ServicesSection() {
  return (
    <section className="relative py-20 lg:py-32 bg-slate-50 dark:bg-[#0a0219] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[40%] h-[40%] rounded-full bg-amber-500/5 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[30%] h-[30%] rounded-full bg-purple-500/5 blur-[100px]" />
      </div>

      <div className="page-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 mb-4">
            <span className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-widest">What I Offer</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tighter">
            My <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-500 to-orange-500">Services</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            From idea to deployment — I build complete digital solutions tailored to your business needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group p-6 rounded-2xl bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 hover:border-amber-500/40 hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300"
            >
              <div className="p-3 w-fit rounded-xl bg-slate-100 dark:bg-white/5 mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="font-black text-slate-900 dark:text-white mb-2 text-lg">{service.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">{service.desc}</p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span key={tag} className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
