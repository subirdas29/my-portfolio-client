"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Code2, BrainCircuit, Zap, Globe, Database, Smartphone, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import GradientButton from "@/utility/GradientButton";
import Breadcrumb from "@/components/shared/Breadcrumb";

const services = [
  {
    icon: <Code2 className="w-7 h-7 text-amber-500" />,
    title: "Full-Stack Web Development",
    tagline: "End-to-end web applications built for scale",
    desc: "I design and build complete web applications — from database architecture to pixel-perfect UI. Specializing in Next.js, React, Node.js, and MongoDB for fast, SEO-friendly, and production-ready solutions.",
    features: ["Next.js / React Frontend", "Node.js + Express Backend", "MongoDB / PostgreSQL Database", "REST API Design", "Authentication & Security", "Deployment & DevOps"],
    tags: ["Next.js", "React", "Node.js", "MongoDB", "TypeScript"],
    cta: "/hire-me",
  },
  {
    icon: <BrainCircuit className="w-7 h-7 text-purple-500" />,
    title: "AI Agent Engineering",
    tagline: "Intelligent automation that thinks for your business",
    desc: "I build autonomous AI agents powered by LLMs (GPT, Claude, Gemini) that handle complex business logic, answer user queries, search knowledge bases, and automate decision-making processes.",
    features: ["Custom AI Chatbots", "RAG (Retrieval-Augmented Generation)", "Pinecone Vector Search", "LLM Integration (OpenAI, Anthropic)", "AI-Powered Search", "Knowledge Base Setup"],
    tags: ["LLMs", "Pinecone", "RAG", "OpenAI", "Langchain"],
    cta: "/hire-me",
  },
  {
    icon: <Zap className="w-7 h-7 text-yellow-500" />,
    title: "n8n Workflow Automation",
    tagline: "Automate repetitive tasks, save hours every week",
    desc: "I design and build powerful automation pipelines using n8n, connecting your business tools — CRM, email, Slack, databases, APIs — so your team can focus on what matters.",
    features: ["400+ App Integrations", "Custom Webhook Triggers", "CRM & Email Automation", "Data Sync Pipelines", "Scheduled Workflows", "Error Handling & Monitoring"],
    tags: ["n8n", "Webhooks", "APIs", "Automation", "Integration"],
    cta: "/hire-me",
  },
  {
    icon: <Globe className="w-7 h-7 text-emerald-500" />,
    title: "REST API Development",
    tagline: "Secure, scalable APIs for any platform",
    desc: "I design and build well-documented, performant REST APIs with proper authentication, rate limiting, caching, and error handling — ready for web, mobile, or third-party integrations.",
    features: ["RESTful Endpoint Design", "JWT Authentication", "Rate Limiting & Security", "Request Validation", "API Documentation", "Caching Layer"],
    tags: ["Express.js", "JWT", "REST", "OpenAPI", "Postman"],
    cta: "/hire-me",
  },
  {
    icon: <Database className="w-7 h-7 text-blue-500" />,
    title: "Database Design & Optimization",
    tagline: "Fast, reliable data for high-traffic applications",
    desc: "I design efficient MongoDB schemas and implement indexing strategies, query optimization, and data modeling patterns that keep your application fast as it grows.",
    features: ["MongoDB Schema Design", "Index Optimization", "Aggregation Pipelines", "Query Performance Tuning", "Data Migration", "Backup Strategies"],
    tags: ["MongoDB", "Mongoose", "Aggregation", "Redis", "Caching"],
    cta: "/hire-me",
  },
  {
    icon: <Smartphone className="w-7 h-7 text-rose-500" />,
    title: "Responsive UI/UX Development",
    tagline: "Beautiful interfaces that work on every device",
    desc: "I build pixel-perfect, mobile-first interfaces with smooth animations using Tailwind CSS and Framer Motion — turning designs into fast, accessible, and engaging user experiences.",
    features: ["Mobile-First Design", "Framer Motion Animations", "Dark / Light Mode", "Accessible Components", "Performance Optimized", "Cross-Browser Compatible"],
    tags: ["Tailwind CSS", "Framer Motion", "Radix UI", "Accessibility"],
    cta: "/hire-me",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-white dark:bg-[#0a0219] min-h-screen">
      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center min-h-[420px] bg-gradient-to-br from-[#F9FAFB] via-[#fff8e1] to-[#faffdd] dark:from-[#0a0219] dark:via-[#120825] dark:to-[#1b0c2d] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden" suppressHydrationWarning>
          {[...Array(6)].map((_, i) => (<div key={i} className={`css-particle css-particle--${i + 1}`} suppressHydrationWarning />))}
          <div className="css-orb css-orb--amber absolute w-[500px] h-[500px] -top-32 -right-32 rounded-full bg-yellow-400/20 dark:bg-yellow-500/10 blur-[100px]" />
          <div className="css-orb css-orb--purple absolute w-[400px] h-[400px] -bottom-32 -left-32 rounded-full bg-amber-400/20 dark:bg-purple-500/10 blur-[80px]" />
        </div>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="relative z-10 text-center px-4" suppressHydrationWarning>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-500/10 dark:bg-yellow-400/10 border border-yellow-500/30 dark:border-yellow-400/20 mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
            <span className="text-xs font-bold text-yellow-700 dark:text-yellow-300 uppercase tracking-widest">What I Do</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-4 text-slate-900 dark:text-white">
            My <span className="bg-gradient-to-r from-yellow-500 to-orange-500 dark:from-yellow-400 dark:to-amber-500 text-transparent bg-clip-text">Services</span>
          </h1>
          <p className="mt-3 text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-medium">
            Full-stack solutions from idea to deployment — tailored to your business needs.
          </p>
        </motion.div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white dark:from-[#0a0219] to-transparent" />
      </section>

      {/* Breadcrumb */}
      <div className="page-container px-4 pt-8">
        <Breadcrumb items={[{ label: "Services" }]} />
      </div>

      {/* Services */}
      <section className="py-16 md:py-24">
        <div className="page-container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="p-6 md:p-8 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 hover:border-amber-500/40 hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-5">
                  <div className="p-3 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shrink-0">{s.icon}</div>
                  <div>
                    <h2 className="text-xl font-black text-slate-900 dark:text-white">{s.title}</h2>
                    <p className="text-sm text-amber-600 dark:text-amber-400 font-semibold mt-0.5">{s.tagline}</p>
                  </div>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-5">{s.desc}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />{f}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mb-5">
                  {s.tags.map((t) => (
                    <span key={t} className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">{t}</span>
                  ))}
                </div>
                <Link href={s.cta}>
                  <GradientButton className="w-full h-11 rounded-xl text-sm font-black" icon={<ArrowRight className="w-4 h-4" />}>
                    Get Started
                  </GradientButton>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-16 bg-slate-50 dark:bg-[#120825]">
        <div className="page-container px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4">
            Not sure which service you need?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-xl mx-auto">
            Let&apos;s talk about your project and I&apos;ll recommend the best solution for your goals and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/hire-me"><GradientButton className="px-8 py-3 rounded-xl font-black">Hire Me</GradientButton></Link>
            <Link href="/contact" className="px-8 py-3 border-2 border-amber-500/40 hover:border-amber-500 text-amber-600 dark:text-amber-400 font-bold rounded-xl transition-all duration-300 hover:bg-amber-500/10">
              Contact Me
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
