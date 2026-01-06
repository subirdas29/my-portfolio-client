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

  const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm<TContact>();

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
        <section className="relative flex flex-col items-center justify-center min-h-[400px] bg-gradient-to-br from-[#F9FAFB] via-[#fff8e1] to-[#faffdd] dark:from-[#0a0219] dark:via-[#120825] dark:to-[#1b0c2d] overflow-hidden">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative z-10 text-center px-4">
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white tracking-tighter">
              Contact <span className="text-amber-500">Me</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-4 text-lg font-medium">Let's build something extraordinary together.</p>
          </motion.div>
        </section>
      )}

      {/* --- Main Card Section --- */}
      <section className={`transition-colors duration-300 ${className ?? "py-16 lg:py-24"}`}>
        <div className="page-container">
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative rounded-[2.5rem] overflow-hidden shadow-xl transition-all duration-500 hover:shadow-amber-500/20"
          >
            {/* --- Running Line (Only animates on Group Hover) --- */}
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
                    {/* SVG animation triggered via CSS classes isn't ideal, 
                        so we use a CSS animation or simply keep it running but hidden.
                        Here, it starts animating only on hover by controlling 'begin' or 'dur' logic, 
                        but the simplest way is to keep it rotating and show it on hover. */}
                    <animate
                      attributeName="stroke-dashoffset"
                      from="100"
                      to="0"
                      dur="8s" // Speed slowed down (Higher is slower)
                      repeatCount="indefinite"
                    />
                  </rect>
                </svg>
            </div>

            {/* --- Inner Content Card --- */}
            <div className="relative z-10 m-[3px] grid grid-cols-1 md:grid-cols-2 rounded-[2.4rem] bg-gradient-to-br from-[#F9FAFB] via-[#fff8e1] to-[#faffdd] dark:from-[#0a0219] dark:via-[#120825] dark:to-[#1b0c2d] overflow-hidden border border-gray-200/20 dark:border-white/5">
              
              {/* Left Side: Info */}
              <div className="flex flex-col justify-center p-10 lg:p-16 space-y-10 relative">
                <div className="relative z-20">
                  <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white leading-tight mb-4">
                    Get Ready To <br />
                    <span className="bg-gradient-to-r from-yellow-600 to-orange-600 text-transparent bg-clip-text">Create Something</span> Great
                  </h2>
                  <div className="h-1.5 w-20 bg-amber-500 rounded-full" />
                </div>

                <div className="space-y-6 relative z-20">
                  {[
                    { icon: <Mail />, label: "Email Me", val: "subirdas1045@gmail.com" },
                    { icon: <House />, label: "Office", val: "Akbarshah, Pahartali, Chattogram" },
                    { icon: <Phone />, label: "Call Me", val: "+8801689586905" }
                  ].map((item, i) => (
                    <motion.div key={i} whileHover={{ x: 10 }} className="flex items-center gap-5 group/item cursor-default">
                      <div className="p-4 rounded-2xl bg-white dark:bg-white/5 text-amber-500 border border-amber-500/20 shadow-sm transition-colors group-hover/item:bg-amber-500 group-hover/item:text-white">
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

              {/* Right Side: Form */}
              <div className="p-10 lg:p-16 bg-white/60 dark:bg-black/40  border-l border-gray-200 dark:border-white/5 relative z-20">
                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-8 flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-amber-500" />
                  GET IN TOUCH
                </h3>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <Input {...register("name", { required: true })} placeholder="Your Name" className="bg-white/50 dark:bg-gray-800/50 border-gray-200 dark:border-white/10 h-14 rounded-2xl focus-visible:ring-amber-500 transition-all shadow-sm" />
                    <Input {...register("phone", { required: true })} placeholder="Phone Number" className="bg-white/50 dark:bg-gray-800/50 border-gray-200 dark:border-white/10 h-14 rounded-2xl focus-visible:ring-amber-500 transition-all shadow-sm" />
                  </div>
                  <Input {...register("email", { required: true })} type="email" placeholder="Your Email" className="bg-white/50 dark:bg-gray-800/50 border-gray-200 dark:border-white/10 h-14 rounded-2xl focus-visible:ring-amber-500 transition-all shadow-sm" />
                  <Input {...register("subject", { required: true })} placeholder="Subject" className="bg-white/50 dark:bg-gray-800/50 border-gray-200 dark:border-white/10 h-14 rounded-2xl focus-visible:ring-amber-500 transition-all shadow-sm" />
                  <Textarea {...register("message", { required: true })} placeholder="Your Message" className="bg-white/50 dark:bg-gray-800/50 border-gray-200 dark:border-white/10 min-h-[150px] rounded-2xl focus-visible:ring-amber-500 transition-all shadow-sm" />
                  
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