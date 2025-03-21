"use client";

import { motion } from "framer-motion";
import { House, Mail, Phone } from "lucide-react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { createContact } from "@/services/Contact";
import { toast } from "sonner";
import { TContact } from "@/types/contact";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";


const ContactSection = () => {
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
    <section className="py-16 lg:py-20  bg-white dark:bg-[#0a0219] transition-colors duration-300">
      <div className="mx-4 md:mx-8 lg:mx-16 px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          whileHover={{ borderColor: "#facc15" }}
          className="bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border-2 border-transparent transition-all duration-300"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col justify-center items-center p-10">
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
              >
                Get Ready To Create
              </motion.h2>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Mail className="text-primary text-2xl" />
                  <p className="text-gray-600 dark:text-gray-300">E-mail: subirdas1045@gmail.com</p>
                </div>
                <div className="flex items-center gap-4">
                  <House className="text-primary text-2xl" />
                  <p className="text-gray-600 dark:text-gray-300">Location: Akbarshah, Pahartali, Chattogram</p>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="text-primary text-2xl" />
                  <p className="text-gray-600 dark:text-gray-300">Contact: +8801689586905</p>
                </div>
              </div>
            </div>

            <div className="p-10 bg-white dark:bg-gray-900">
              <motion.h3
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-2xl font-bold text-gray-900 dark:text-white mb-6"
              >
                GET IN TOUCH
              </motion.h3>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <Input {...register("name", { required: true })} placeholder="Your Name" />
                <Input {...register("phone", { required: true })} placeholder="Phone Number" />
                <Input {...register("email", { required: true })} type="email" placeholder="Your Email" />
                <Input {...register("subject", { required: true })} placeholder="Subject" />
                <Textarea {...register("message", { required: true })} placeholder="Your Message" />
                <Button type="submit" className="w-full text-white dark:text-gray-900" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message →"}
                </Button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
