"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Building2 } from "lucide-react";

type TShowcaseClient = {
  _id: string;
  name: string;
  company?: string;
  logo?: string;
};

export default function ClientLogoCarousel({ clients }: { clients: TShowcaseClient[] }) {
  const withLogos = clients.filter((c) => c.logo);

  if (withLogos.length === 0) return null;

  // Duplicate for infinite scroll effect
  const doubled = [...withLogos, ...withLogos];

  return (
    <section className="py-16 bg-slate-50 dark:bg-[#0a0219] overflow-hidden">
      <div className="page-container mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 mb-4">
            <span className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-widest">Trusted By</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tighter">
            Clients I&apos;ve <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-500 to-orange-500">Worked With</span>
          </h2>
        </motion.div>
      </div>

      {/* Carousel */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-linear-to-r from-slate-50 dark:from-[#0a0219] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-linear-to-l from-slate-50 dark:from-[#0a0219] to-transparent z-10 pointer-events-none" />

        <div className="flex gap-8 animate-[scroll_30s_linear_infinite] hover:[animation-play-state:paused]">
          {doubled.map((client, i) => (
            <div
              key={`${client._id}-${i}`}
              className="flex-shrink-0 flex flex-col items-center gap-3 px-6 py-4 rounded-2xl bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 min-w-[140px] md:min-w-[180px]"
            >
              <div className="relative w-16 h-10 md:w-20 md:h-12">
                {client.logo ? (
                  <Image
                    src={client.logo}
                    alt={client.company || client.name}
                    fill
                    className="object-contain"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Building2 className="w-8 h-8 text-slate-400" />
                  </div>
                )}
              </div>
              <span className="text-xs font-bold text-slate-600 dark:text-slate-400 text-center line-clamp-1">
                {client.company || client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
