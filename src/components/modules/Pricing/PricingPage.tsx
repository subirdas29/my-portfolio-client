"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle2, X, Sparkles, Zap, Crown } from "lucide-react";
import GradientButton from "@/utility/GradientButton";
import Breadcrumb from "@/components/shared/Breadcrumb";

const plans = [
  {
    name: "Starter",
    icon: <Sparkles className="w-5 h-5 text-slate-500" />,
    price: "$300",
    period: "/ project",
    tagline: "Perfect for small businesses & landing pages",
    highlighted: false,
    features: [
      { text: "Up to 5 pages", included: true },
      { text: "Responsive design", included: true },
      { text: "Contact form", included: true },
      { text: "Basic SEO setup", included: true },
      { text: "1 round of revisions", included: true },
      { text: "Custom backend / API", included: false },
      { text: "Admin dashboard", included: false },
      { text: "AI integration", included: false },
      { text: "Automation workflows", included: false },
      { text: "3 months support", included: false },
    ],
    cta: "/hire-me",
    ctaLabel: "Get Started",
  },
  {
    name: "Professional",
    icon: <Zap className="w-5 h-5 text-amber-500" />,
    price: "$800",
    period: "/ project",
    tagline: "For growing businesses needing a full system",
    highlighted: true,
    badge: "Most Popular",
    features: [
      { text: "Unlimited pages", included: true },
      { text: "Responsive design", included: true },
      { text: "Contact form + validation", included: true },
      { text: "Full SEO optimization", included: true },
      { text: "3 rounds of revisions", included: true },
      { text: "Custom backend / REST API", included: true },
      { text: "Admin dashboard (CMS)", included: true },
      { text: "AI integration", included: false },
      { text: "Automation workflows", included: false },
      { text: "3 months support", included: true },
    ],
    cta: "/hire-me",
    ctaLabel: "Hire Me Now",
  },
  {
    name: "Enterprise",
    icon: <Crown className="w-5 h-5 text-purple-500" />,
    price: "Custom",
    period: "/ project",
    tagline: "Full-stack + AI + automation for complex needs",
    highlighted: false,
    features: [
      { text: "Everything in Professional", included: true },
      { text: "AI agent integration", included: true },
      { text: "n8n automation pipelines", included: true },
      { text: "Vector search (Pinecone)", included: true },
      { text: "Unlimited revisions", included: true },
      { text: "Custom backend / REST API", included: true },
      { text: "Admin dashboard (CMS)", included: true },
      { text: "Performance optimization", included: true },
      { text: "6 months support", included: true },
      { text: "Priority response", included: true },
    ],
    cta: "/hire-me",
    ctaLabel: "Let's Talk",
  },
];

const faqs = [
  { q: "How long does a project take?", a: "Starter: 1-2 weeks. Professional: 3-5 weeks. Enterprise: 6-10 weeks depending on complexity." },
  { q: "Do you work with international clients?", a: "Yes! I work with clients worldwide. Communication is via email, Slack, or video call in your timezone." },
  { q: "What payment methods do you accept?", a: "Bank transfer, PayPal, and crypto. 50% upfront, 50% on delivery." },
  { q: "Can I upgrade my plan mid-project?", a: "Yes. If your requirements grow during development, we can discuss upgrading to a higher package." },
  { q: "Do you provide hosting?", a: "I can deploy to Vercel, Railway, or Render. Hosting costs are separate and typically $0-20/month." },
];

export default function PricingPage() {
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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/30 dark:border-yellow-400/20 mb-6 backdrop-blur-sm">
            <span className="text-xs font-bold text-yellow-700 dark:text-yellow-300 uppercase tracking-widest">Transparent Pricing</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-4 text-slate-900 dark:text-white">
            Simple <span className="bg-gradient-to-r from-yellow-500 to-orange-500 dark:from-yellow-400 dark:to-amber-500 text-transparent bg-clip-text">Pricing</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-xl mx-auto">No hidden fees. Pay for exactly what you need.</p>
        </motion.div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white dark:from-[#0a0219] to-transparent" />
      </section>

      {/* Breadcrumb */}
      <div className="page-container px-4 pt-8">
        <Breadcrumb items={[{ label: "Pricing" }]} />
      </div>

      {/* Plans */}
      <section className="py-16 md:py-24">
        <div className="page-container px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative rounded-2xl p-6 md:p-8 border transition-all duration-300 ${
                  plan.highlighted
                    ? "bg-gradient-to-br from-amber-500/10 to-orange-500/5 border-amber-500/50 shadow-2xl shadow-amber-500/10 md:scale-[1.02]"
                    : "bg-slate-50 dark:bg-white/[0.03] border-slate-200 dark:border-white/10"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-amber-500 text-white text-xs font-black shadow-lg shadow-amber-500/30">
                    {plan.badge}
                  </div>
                )}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10">{plan.icon}</div>
                  <div>
                    <h3 className="font-black text-slate-900 dark:text-white text-lg">{plan.name}</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{plan.tagline}</p>
                  </div>
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-black text-slate-900 dark:text-white">{plan.price}</span>
                  <span className="text-slate-500 dark:text-slate-400 text-sm ml-1">{plan.period}</span>
                </div>
                <ul className="space-y-2.5 mb-8">
                  {plan.features.map((f) => (
                    <li key={f.text} className={`flex items-center gap-2.5 text-sm ${f.included ? "text-slate-700 dark:text-slate-300" : "text-slate-400 dark:text-slate-600 line-through"}`}>
                      {f.included
                        ? <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        : <X className="w-4 h-4 text-slate-300 dark:text-slate-600 shrink-0" />}
                      {f.text}
                    </li>
                  ))}
                </ul>
                <Link href={plan.cta}>
                  {plan.highlighted
                    ? <GradientButton className="w-full h-12 rounded-xl font-black">{plan.ctaLabel}</GradientButton>
                    : <button className="w-full h-12 rounded-xl border-2 border-slate-200 dark:border-white/10 hover:border-amber-500/50 text-slate-700 dark:text-slate-300 font-bold transition-all hover:bg-amber-500/5 text-sm">{plan.ctaLabel}</button>
                  }
                </Link>
              </motion.div>
            ))}
          </div>

          {/* FAQ */}
          <div className="mt-24">
            <h2 className="text-3xl md:text-4xl font-black text-center text-slate-900 dark:text-white mb-12">
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">Questions</span>
            </h2>
            <div className="max-w-2xl mx-auto space-y-4">
              {faqs.map((faq, i) => (
                <motion.div
                  key={faq.q}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="p-5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10"
                >
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2">{faq.q}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
