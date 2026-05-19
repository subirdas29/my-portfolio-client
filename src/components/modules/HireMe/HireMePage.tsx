"use client";
import { motion } from "framer-motion";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { useState } from "react";
import { MessageCircle, Lightbulb, Code2, Rocket, Loader2, CheckCircle2 } from "lucide-react";
import Breadcrumb from "@/components/shared/Breadcrumb";
import dynamic from "next/dynamic";

const CalendlyEmbed = dynamic(() => import("@/components/shared/CalendlyEmbed"), { ssr: false });
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import GradientButton from "@/utility/GradientButton";
import { createContact } from "@/services/Contact";

const steps = [
  { icon: <MessageCircle className="w-5 h-5 text-amber-500" />, title: "Tell me about your project", desc: "Fill the form below with your requirements, budget, and timeline." },
  { icon: <Lightbulb className="w-5 h-5 text-purple-500" />, title: "I review & respond", desc: "I'll reply within 24 hours with a plan, timeline, and cost estimate." },
  { icon: <Code2 className="w-5 h-5 text-blue-500" />, title: "We start building", desc: "After agreement, I start development with regular progress updates." },
  { icon: <Rocket className="w-5 h-5 text-emerald-500" />, title: "Launch & support", desc: "Project delivered, deployed, and supported post-launch." },
];

const projectTypes = [
  "Full-Stack Web Application",
  "Landing Page / Portfolio",
  "AI Agent / Chatbot",
  "n8n Automation Workflow",
  "REST API Development",
  "Admin Dashboard / CMS",
  "E-commerce Platform",
  "Other / Not sure yet",
];

const budgets = ["< $300", "$300 - $800", "$800 - $2000", "$2000+", "Let's discuss"];

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function HireMePage() {
  const [loading, setLoading] = useState(false);
  const [projectType, setProjectType] = useState("");
  const [budget, setBudget] = useState("");

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setLoading(true);
    try {
      const message = `Project Type: ${projectType || "Not specified"}\nBudget: ${budget || "Not specified"}\n\n${data.message}`;
      const res = await createContact({ ...data, phone: "", subject: data.subject || `Hire Me — ${projectType}`, message });
      if (res?.success !== false) {
        toast.success("Message sent! I'll get back to you within 24 hours.");
        reset();
        setProjectType("");
        setBudget("");
      } else {
        toast.error("Failed to send. Please try again.");
      }
    } catch {
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white dark:bg-[#0a0219] min-h-screen">
      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center min-h-[400px] bg-gradient-to-br from-[#F9FAFB] via-[#fff8e1] to-[#faffdd] dark:from-[#0a0219] dark:via-[#120825] dark:to-[#1b0c2d] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden" suppressHydrationWarning>
          {[...Array(6)].map((_, i) => (<div key={i} className={`css-particle css-particle--${i + 1}`} suppressHydrationWarning />))}
          <div className="absolute w-[500px] h-[500px] -top-32 -right-32 rounded-full bg-yellow-400/20 dark:bg-yellow-500/10 blur-[100px]" />
          <div className="absolute w-[400px] h-[400px] -bottom-32 -left-32 rounded-full bg-amber-400/20 dark:bg-purple-500/10 blur-[80px]" />
        </div>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="relative z-10 text-center px-4" suppressHydrationWarning>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 dark:border-emerald-400/20 mb-4 backdrop-blur-sm">
            <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" /><span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" /></span>
            <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400">Available for new projects</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-4 text-slate-900 dark:text-white">
            Let&apos;s <span className="bg-gradient-to-r from-yellow-500 to-orange-500 dark:from-yellow-400 dark:to-amber-500 text-transparent bg-clip-text">Work Together</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-xl mx-auto">Tell me about your project and I&apos;ll get back to you within 24 hours.</p>
        </motion.div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white dark:from-[#0a0219] to-transparent" />
      </section>

      {/* Breadcrumb */}
      <div className="page-container px-4 pt-8">
        <Breadcrumb items={[{ label: "Hire Me" }]} />
      </div>

      {/* Process Steps */}
      <section className="py-12 bg-slate-50 dark:bg-[#120825]">
        <div className="page-container px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {steps.map((step, i) => (
              <div key={step.title} className="flex flex-col items-center text-center p-4">
                <div className="w-10 h-10 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center mb-3 shadow-sm">{step.icon}</div>
                <div className="text-xs font-black text-amber-500 mb-1">{String(i + 1).padStart(2, "0")}</div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">{step.title}</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 md:py-24">
        <div className="page-container px-4 max-w-2xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-8">Tell me about your project</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-1.5 block">Your Name *</label>
                  <Input {...register("name", { required: true })} placeholder="John Doe" className={errors.name ? "border-red-500" : ""} />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-1.5 block">Email *</label>
                  <Input {...register("email", { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })} type="email" placeholder="you@example.com" className={errors.email ? "border-red-500" : ""} />
                </div>
              </div>

              {/* Project Type */}
              <div>
                <label className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-1.5 block">Project Type</label>
                <div className="flex flex-wrap gap-2">
                  {projectTypes.map((type) => (
                    <button key={type} type="button" onClick={() => setProjectType(type)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all ${projectType === type ? "bg-amber-500 text-white border-amber-500" : "bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-white/10 hover:border-amber-500/40"}`}>
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Budget */}
              <div>
                <label className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-1.5 block">Budget Range</label>
                <div className="flex flex-wrap gap-2">
                  {budgets.map((b) => (
                    <button key={b} type="button" onClick={() => setBudget(b)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all ${budget === b ? "bg-amber-500 text-white border-amber-500" : "bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-white/10 hover:border-amber-500/40"}`}>
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-1.5 block">Project Title</label>
                <Input {...register("subject")} placeholder="e.g. E-commerce platform for my clothing brand" />
              </div>

              {/* Message */}
              <div>
                <label className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-1.5 block">Project Details *</label>
                <Textarea {...register("message", { required: true })} rows={5} placeholder="Describe your project, goals, timeline, and any specific requirements..." className={errors.message ? "border-red-500" : ""} />
              </div>

              <GradientButton type="submit" className="w-full h-12 rounded-xl font-black" icon={loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <CheckCircle2 className="w-4 h-4" />}>
                {loading ? "Sending..." : "Send Project Brief"}
              </GradientButton>
            </form>
          </motion.div>

          {/* Divider */}
          <div className="flex items-center gap-4 mt-12">
            <div className="flex-1 h-px bg-slate-200 dark:bg-white/10" />
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">or</span>
            <div className="flex-1 h-px bg-slate-200 dark:bg-white/10" />
          </div>

          {/* Calendly */}
          <div className="mt-8">
            <CalendlyEmbed />
          </div>
        </div>
      </section>
    </div>
  );
}
