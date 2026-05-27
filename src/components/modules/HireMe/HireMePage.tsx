"use client";
import { motion } from "framer-motion";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { useState } from "react";
import {
  MessageCircle, Lightbulb, Code2, Rocket, Loader2, CheckCircle2,
  Zap, Shield, Clock, Star, ArrowRight, Mail, MapPin, Github, Linkedin,
  Twitter, Sparkles, ChevronRight,
} from "lucide-react";
import Breadcrumb from "@/components/shared/Breadcrumb";
import dynamic from "next/dynamic";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import GradientButton from "@/utility/GradientButton";
import { createContact } from "@/services/Contact";
import Link from "next/link";

const CalendlyEmbed = dynamic(() => import("@/components/shared/CalendlyEmbed"), { ssr: false });

const steps = [
  { icon: <MessageCircle className="w-5 h-5" />, color: "text-amber-500", bg: "bg-amber-500/10", border: "border-amber-500/20", title: "Share your vision", desc: "Fill out the form with your project details, goals, and budget." },
  { icon: <Lightbulb className="w-5 h-5" />, color: "text-violet-500", bg: "bg-violet-500/10", border: "border-violet-500/20", title: "I review & plan", desc: "Within 24 hours, I'll respond with a detailed plan and timeline." },
  { icon: <Code2 className="w-5 h-5" />, color: "text-blue-500", bg: "bg-blue-500/10", border: "border-blue-500/20", title: "We build together", desc: "Regular updates, clean code, and transparent communication." },
  { icon: <Rocket className="w-5 h-5" />, color: "text-emerald-500", bg: "bg-emerald-500/10", border: "border-emerald-500/20", title: "Launch & beyond", desc: "Deployed, tested, and supported with post-launch care." },
];

const perks = [
  { icon: <Zap className="w-4 h-4" />, label: "Fast delivery" },
  { icon: <Shield className="w-4 h-4" />, label: "Clean, secure code" },
  { icon: <Clock className="w-4 h-4" />, label: "24h response" },
  { icon: <Star className="w-4 h-4" />, label: "Post-launch support" },
];

const projectTypes = [
  "Full-Stack Web App",
  "Landing Page / Portfolio",
  "AI Agent / Chatbot",
  "n8n Automation",
  "REST API",
  "Admin Dashboard",
  "E-commerce",
  "Other",
];

const budgets = ["< $300", "$300–$800", "$800–$2000", "$2000+", "Let's discuss"];

const socials = [
  { icon: <Github className="w-4 h-4" />, href: "https://github.com/subir-das", label: "GitHub" },
  { icon: <Linkedin className="w-4 h-4" />, href: "https://linkedin.com/in/subir-das", label: "LinkedIn" },
  { icon: <Twitter className="w-4 h-4" />, href: "https://twitter.com/subirdas", label: "Twitter" },
];

type FormData = { name: string; email: string; subject: string; message: string };

export default function HireMePage() {
  const [loading, setLoading] = useState(false);
  const [projectType, setProjectType] = useState("");
  const [budget, setBudget] = useState("");
  const [sent, setSent] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setLoading(true);
    try {
      const message = `Project Type: ${projectType || "Not specified"}\nBudget: ${budget || "Not specified"}\n\n${data.message}`;
      const res = await createContact({ ...data, phone: "", subject: data.subject || `Hire Me — ${projectType}`, message });
      if (res?.success !== false) {
        toast.success("Message sent! I'll get back to you within 24 hours.");
        setSent(true);
        reset();
        setProjectType("");
        setBudget("");
        setTimeout(() => setSent(false), 5000);
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

      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-amber-50/40 to-orange-50/30 dark:from-[#0a0219] dark:via-[#140a28] dark:to-[#0d0620]" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-amber-400/10 dark:bg-amber-500/5 blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-violet-400/10 dark:bg-violet-500/5 blur-[120px]" />
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04]"
            style={{ backgroundImage: "linear-gradient(#000 1px,transparent 1px),linear-gradient(90deg,#000 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
        </div>

        <div className="relative z-10 mx-6 md:mx-10 lg:mx-20 pt-20 pb-16">
          <Breadcrumb items={[{ label: "Hire Me" }]} />

          <div className="mt-8 max-w-3xl">
            {/* Availability badge */}
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400">Available for new projects</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.05]"
            >
              Let&apos;s Build{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 text-transparent bg-clip-text">Something</span>
              </span>
              <br />
              <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 text-transparent bg-clip-text">Remarkable</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="mt-5 text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed"
            >
              I partner with founders, startups, and businesses to turn ambitious ideas into polished digital products — fast, reliable, and built to scale.
            </motion.p>

            {/* Perks row */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-7 flex flex-wrap gap-3">
              {perks.map((p) => (
                <div key={p.label} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/60 dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-sm">
                  <span className="text-amber-500">{p.icon}</span>
                  <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">{p.label}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mt-8 flex flex-wrap gap-3">
              <a href="#contact-form"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm transition-all shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40">
                Start a project <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#book-call"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-white font-bold text-sm hover:border-amber-500/40 transition-all">
                Book a call
              </a>
            </motion.div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white dark:from-[#0a0219] to-transparent" />
      </section>

      {/* ── Process Steps ── */}
      <section className="py-14 bg-slate-50/80 dark:bg-[#0e0720] border-y border-slate-100 dark:border-white/5">
        <div className="mx-6 md:mx-10 lg:mx-20">
          <div className="flex items-center gap-2 mb-8">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span className="text-xs font-black uppercase tracking-widest text-amber-500">How it works</span>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="relative group"
              >
                {i < 3 && (
                  <div className="hidden lg:block absolute top-5 left-[calc(100%-8px)] w-full h-px border-t border-dashed border-slate-300 dark:border-white/10 z-0" />
                )}
                <div className={`relative z-10 p-5 rounded-2xl bg-white dark:bg-white/[0.03] border ${step.border} hover:shadow-md transition-all`}>
                  <div className={`w-10 h-10 rounded-xl ${step.bg} ${step.color} flex items-center justify-center mb-4`}>
                    {step.icon}
                  </div>
                  <div className="text-xs font-black text-slate-400 dark:text-slate-600 mb-1">{String(i + 1).padStart(2, "0")}</div>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1.5">{step.title}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Main Content: Form + Sidebar ── */}
      <section id="contact-form" className="py-20">
        <div className="mx-6 md:mx-10 lg:mx-20">
          <div className="grid lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_420px] gap-12 xl:gap-16">

            {/* ── Left: Form ── */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-2">
                Tell me about your project
              </h2>
              <p className="text-slate-500 dark:text-slate-400 mb-8">The more detail you share, the better I can help.</p>

              {sent && (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 mb-6">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  <div>
                    <p className="text-sm font-bold text-emerald-700 dark:text-emerald-400">Message sent successfully!</p>
                    <p className="text-xs text-emerald-600/70 dark:text-emerald-500/70">I&apos;ll get back to you within 24 hours.</p>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name + Email */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Your Name *</label>
                    <Input {...register("name", { required: true })} placeholder="John Doe"
                      className={`h-11 ${errors.name ? "border-red-500 focus-visible:ring-red-500" : ""}`} />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Email *</label>
                    <Input {...register("email", { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })}
                      type="email" placeholder="you@example.com"
                      className={`h-11 ${errors.email ? "border-red-500 focus-visible:ring-red-500" : ""}`} />
                  </div>
                </div>

                {/* Project Type */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Project Type</label>
                  <div className="flex flex-wrap gap-2">
                    {projectTypes.map((type) => (
                      <button key={type} type="button" onClick={() => setProjectType(type === projectType ? "" : type)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all ${projectType === type
                          ? "bg-amber-500 text-white border-amber-500 shadow-sm shadow-amber-500/30"
                          : "bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-white/10 hover:border-amber-500/50 hover:text-amber-600 dark:hover:text-amber-400"
                          }`}>
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Budget */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Budget Range</label>
                  <div className="flex flex-wrap gap-2">
                    {budgets.map((b) => (
                      <button key={b} type="button" onClick={() => setBudget(b === budget ? "" : b)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all ${budget === b
                          ? "bg-amber-500 text-white border-amber-500 shadow-sm shadow-amber-500/30"
                          : "bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-white/10 hover:border-amber-500/50 hover:text-amber-600 dark:hover:text-amber-400"
                          }`}>
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Project Title</label>
                  <Input {...register("subject")} placeholder="e.g. E-commerce platform for my clothing brand" className="h-11" />
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Project Details *</label>
                  <Textarea {...register("message", { required: true })} rows={6}
                    placeholder="Describe your project goals, features, tech preferences, deadline, and anything else that matters..."
                    className={`resize-none ${errors.message ? "border-red-500 focus-visible:ring-red-500" : ""}`} />
                </div>

                <GradientButton type="submit" disabled={loading}
                  className="w-full h-12 rounded-xl font-black text-sm"
                  icon={loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <ArrowRight className="w-4 h-4" />}>
                  {loading ? "Sending..." : "Send Project Brief"}
                </GradientButton>

                <p className="text-center text-xs text-slate-400 dark:text-slate-600">
                  No commitment required — just a conversation.
                </p>
              </form>
            </motion.div>

            {/* ── Right: Sidebar ── */}
            <motion.div
              initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-5"
            >
              {/* Contact Info Card */}
              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10">
                <h3 className="font-black text-slate-900 dark:text-white text-sm mb-4">Direct Contact</h3>
                <div className="space-y-3">
                  <a href="mailto:codealign.co@gmail.com" className="flex items-center gap-3 group">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                      <Mail className="w-3.5 h-3.5 text-amber-500" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 dark:text-slate-500">Email</p>
                      <p className="text-xs font-bold text-slate-700 dark:text-slate-300 group-hover:text-amber-500 transition-colors">codealign.co@gmail.com</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                      <MapPin className="w-3.5 h-3.5 text-blue-500" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 dark:text-slate-500">Location</p>
                      <p className="text-xs font-bold text-slate-700 dark:text-slate-300">Bangladesh · Remote worldwide</p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-200 dark:border-white/10">
                  <div className="flex gap-2">
                    {socials.map((s) => (
                      <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                        className="w-8 h-8 rounded-lg bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-500 hover:text-amber-500 hover:border-amber-500/40 transition-all">
                        {s.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* What I offer */}
              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10">
                <h3 className="font-black text-slate-900 dark:text-white text-sm mb-4">What I build</h3>
                <ul className="space-y-2">
                  {["Full-stack web apps (Next.js, Node.js)", "AI agents & chatbots", "n8n automation workflows", "REST APIs & backend systems", "Admin dashboards & CMS", "Landing pages & portfolios"].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <ChevronRight className="w-3.5 h-3.5 text-amber-500 mt-0.5 shrink-0" />
                      <span className="text-xs text-slate-600 dark:text-slate-400">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* FAQ quick */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-500/5 to-orange-500/5 dark:from-amber-500/10 dark:to-orange-500/5 border border-amber-500/20">
                <h3 className="font-black text-slate-900 dark:text-white text-sm mb-3">Quick FAQs</h3>
                <div className="space-y-3">
                  {[
                    { q: "How fast can you start?", a: "Usually within 2–3 days of agreement." },
                    { q: "Do you work with international clients?", a: "Yes — I work fully remote worldwide." },
                    { q: "What stack do you prefer?", a: "Next.js, Node.js, MongoDB, TypeScript." },
                  ].map((faq) => (
                    <div key={faq.q}>
                      <p className="text-xs font-bold text-slate-700 dark:text-slate-300">{faq.q}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{faq.a}</p>
                    </div>
                  ))}
                </div>
                <Link href="/faq" className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-amber-600 dark:text-amber-400 hover:underline">
                  View all FAQs <ChevronRight className="w-3 h-3" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Book a Call ── */}
      <section id="book-call" className="py-16 bg-slate-50/80 dark:bg-[#0e0720] border-t border-slate-100 dark:border-white/5">
        <div className="mx-6 md:mx-10 lg:mx-20">
          <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span className="text-xs font-black uppercase tracking-widest text-amber-500">Prefer to talk?</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white">Book a Free 30-min Call</h2>
              <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">No fluff — just a focused discovery conversation.</p>
            </div>
          </div>
          <CalendlyEmbed />
        </div>
      </section>
    </div>
  );
}
