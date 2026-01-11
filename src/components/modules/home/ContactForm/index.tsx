/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { motion } from "framer-motion";
import { House, Mail, Phone, Sparkles } from "lucide-react";
import { useForm, SubmitHandler } from "react-hook-form";
import { createContact } from "@/services/Contact";
import { toast } from "sonner";
import { TContact } from "@/types/contact";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import GradientButton from "@/utility/GradientButton";
import { usePathname } from "next/navigation";

const ContactSection = ({ className }: { className?: string }) => {
  const pathname = usePathname();
  const isContactPage = pathname === "/contact";


  const { register, handleSubmit, reset, formState: { isSubmitting, errors } } = useForm<TContact>();

  const onSubmit: SubmitHandler<TContact> = async (data) => {
    try {
      const res = await createContact(data);
      if (res.success) {
        toast.success(res.message);
        reset();
      } else {
        toast.error(res.message);
      }
    } catch (err) {
      console.error(err);
      toast.error("An error occurred while sending your message.");
    }
  };

  return (
    <div className="bg-white dark:bg-[#0a0219]">
      {/* --- Banner Section --- */}
      {isContactPage && (
        <section className="relative flex flex-col items-center justify-center min-h-[450px] bg-gradient-to-br from-[#F9FAFB] via-[#fff8e1] to-[#faffdd] dark:from-[#0a0219] dark:via-[#120825] dark:to-[#1b0c2d] text-gray-900 dark:text-white overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-yellow-500 dark:bg-yellow-500/40"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.2, 0.8, 0.2], y: [0, -100, 0], x: [0, Math.random() * 40 - 20, 0] }}
                transition={{ duration: 5 + i * 0.5, repeat: Infinity, delay: i * 0.4 }}
                style={{ left: `${10 + i * 9}%`, top: `${40 + (i % 3) * 15}%` }}
              />
            ))}
            <motion.div 
              className="absolute -top-24 -right-24 w-[400px] h-[400px] rounded-full bg-yellow-400/20 dark:bg-yellow-500/10 blur-[90px]" 
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }} 
              transition={{ duration: 8, repeat: Infinity }} 
            />
            <motion.div 
              className="absolute -bottom-24 -left-24 w-[350px] h-[350px] rounded-full bg-amber-400/20 dark:bg-purple-500/10 blur-[80px]" 
              animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }} 
              transition={{ duration: 10, repeat: Infinity, delay: 2 }} 
            />
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }} 
            className="relative z-10 text-center px-4"
          >
            <motion.div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-500/10 dark:bg-yellow-400/10 border border-yellow-500/30 dark:border-yellow-400/20 mb-6 ">
              <Sparkles className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
              <span className="text-xs md:text-sm font-bold text-yellow-700 dark:text-yellow-300 uppercase tracking-wider">Get In Touch</span>
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-4">
              Contact <span className="bg-gradient-to-r from-yellow-500 to-orange-500 dark:from-yellow-400 dark:to-amber-500 text-transparent bg-clip-text">Me</span>
            </h1>
            <p className="mt-2 text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto font-medium">
              Let&apos;s build something extraordinary together. I&apos;m always open to discussing new projects.
            </p>
          </motion.div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white dark:from-[#0a0219] to-transparent" />
        </section>
      )}

      {/* --- Main Card Section --- */}
      <section className={`transition-colors duration-300 ${className ?? "py-16 lg:py-24"}`}>
        <div className="page-container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative rounded-[2.5rem] overflow-hidden shadow-xl transition-all duration-500 "
          >

            <div className="absolute inset-0 z-0">
               <svg className="w-full h-full" preserveAspectRatio="none">
                  <rect
                    x="2"
                    y="2"
                    width="calc(100% - 4px)"
                    height="calc(100% - 4px)"
                    rx="40"
                    ry="40"
                    pathLength="100"
                    className="fill-none stroke-amber-500 stroke-[3] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    strokeDasharray="20 80"
                    strokeLinecap="round"
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      from="100"
                      to="0"
                      dur="10s"
                      repeatCount="indefinite"
                    />
                  </rect>
                </svg>
            </div>

            {/* --- Inner Content Card --- */}
            <div className="relative z-10 m-[3px] grid grid-cols-1 md:grid-cols-2 rounded-[2.4rem] bg-gradient-to-br from-[#F9FAFB] via-[#fff8e1] to-[#faffdd] dark:from-[#0a0219] dark:via-[#120825] dark:to-[#1b0c2d] overflow-hidden border border-gray-200/20 dark:border-white/5 shadow-2xl">
              
              {/* Background Bubbles (অরিজিনাল) */}
              <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                {[...Array(12)].map((_, i) => (
                   <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full bg-yellow-500 dark:bg-yellow-500/40"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0.2, 0.8, 0.2], y: [0, -100, 0], x: [0, Math.random() * 40 - 20, 0] }}
                    transition={{ duration: 5 + i * 0.5, repeat: Infinity, delay: i * 0.4 }}
                    style={{ left: `${10 + i * 9}%`, top: `${40 + (i % 3) * 15}%` }}
                  />
                ))}
              </div>

              {/* Left Side: Info */}
              <div className="flex flex-col justify-center p-10 lg:p-16 space-y-10 relative z-10">
                <div>
                  <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white leading-tight mb-4">
                    Get Ready To <br />
                    <span className="bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500 dark:from-yellow-400 dark:via-yellow-500 dark:to-amber-500 text-transparent bg-clip-text ">Create Something</span> Great
                  </h2>
                  <div className="h-1.5 w-20 bg-amber-500 rounded-full" />
                </div>

                <div className="space-y-6">
                  {[
                    { icon: <Mail />, label: "Email Me", val: "subirdas1045@gmail.com" },
                    { icon: <House />, label: "Address", val: "Akbarshah, Pahartali, Chattogram" },
                    { icon: <Phone />, label: "Call Me", val: "+8801689586905" }
                  ].map((item, i) => (
                    <motion.div key={i} whileHover={{ x: 10 }} className="flex items-center gap-5 group/item cursor-default">
                      <div className="p-4 rounded-lg bg-white dark:bg-white/10 text-amber-500 border border-amber-500/20 shadow-sm transition-colors group-hover/item:bg-amber-500 group-hover/item:text-white">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-xs font-black uppercase text-gray-500 dark:text-gray-400">{item.label}</p>
                        <p className="text-gray-800 dark:text-gray-200 font-bold text-lg leading-tight">{item.val}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right Side: Form (Validation যুক্ত) */}
              <div className="p-10 lg:p-16 bg-white/60 dark:bg-black/40 border-l border-gray-200 dark:border-white/5 relative z-20">
                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-8 flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-amber-500" />
                  GET IN TOUCH
                </h3>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1">
                      <Input {...register("name", { required: "Name is required" })} placeholder="Your Name" className={`bg-white/50 dark:bg-gray-800/50 border-gray-200 dark:border-white/10 h-14 rounded-2xl focus-visible:ring-amber-500 transition-all shadow-sm ${errors.name ? 'border-red-500 ring-1 ring-red-500' : ''}`} />
                      {errors.name && <p className="text-red-500 text-[10px] font-bold px-2 uppercase">{errors.name.message}</p>}
                    </div>
                    <div className="space-y-1">
  <Input 
    {...register("phone", { 
      required: "Phone is required",
      pattern: {
     
        value: /^[0-9]+$/, 
        message: "Only numbers are allowed" 
      },
      minLength: {
        value: 10,
        message: "Phone number is too short"
      },
      maxLength: {
        value: 11,
        message: "Phone number is too long"
      }
    })} 
    placeholder="Phone Number (Digits only)" 
    className={`bg-white/50 dark:bg-gray-800/50 border-gray-200 dark:border-white/10 h-14 rounded-2xl focus-visible:ring-amber-500 transition-all shadow-sm ${errors.phone ? 'border-red-500 ring-1 ring-red-500' : ''}`} 
  />
  {errors.phone && <p className="text-red-500 text-[10px] font-bold px-2 uppercase">{errors.phone.message}</p>}
</div>
                  </div>
                  
                  <div className="space-y-1">
                    <Input {...register("email", { 
                      required: "Email is required", 
                      pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" } 
                    })} type="email" placeholder="Your Email" className={`bg-white/50 dark:bg-gray-800/50 border-gray-200 dark:border-white/10 h-14 rounded-2xl focus-visible:ring-amber-500 transition-all shadow-sm ${errors.email ? 'border-red-500 ring-1 ring-red-500' : ''}`} />
                    {errors.email && <p className="text-red-500 text-[10px] font-bold px-2 uppercase">{errors.email.message}</p>}
                  </div>

                  <div className="space-y-1">
                    <Input {...register("subject", { required: "Subject is required" })} placeholder="Subject" className={`bg-white/50 dark:bg-gray-800/50 border-gray-200 dark:border-white/10 h-14 rounded-2xl focus-visible:ring-amber-500 transition-all shadow-sm ${errors.subject ? 'border-red-500 ring-1 ring-red-500' : ''}`} />
                    {errors.subject && <p className="text-red-500 text-[10px] font-bold px-2 uppercase">{errors.subject.message}</p>}
                  </div>

                  <div className="space-y-1">
                    <Textarea {...register("message", { required: "Message is required" })} placeholder="Your Message" className={`bg-white/50 dark:bg-gray-800/50 border-gray-200 dark:border-white/10 min-h-[150px] rounded-2xl focus-visible:ring-amber-500 transition-all shadow-sm ${errors.message ? 'border-red-500 ring-1 ring-red-500' : ''}`} />
                    {errors.message && <p className="text-red-500 text-[10px] font-bold px-2 uppercase">{errors.message.message}</p>}
                  </div>
                  
                  <GradientButton
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 text-lg font-black shadow-xl shadow-amber-500/20 rounded-2xl active:scale-95 transition-transform"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </GradientButton>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;