"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Award, ExternalLink } from "lucide-react";

type TCertification = {
  _id: string;
  title: string;
  issuer: string;
  issueDate?: string;
  expiryDate?: string;
  credentialUrl?: string;
  badgeImage?: string;
};

export default function CertificationsSection({ certifications }: { certifications: TCertification[] }) {
  if (!certifications || certifications.length === 0) return null;

  return (
    <section className="py-20 lg:py-28 bg-white dark:bg-[#0a0219]">
      <div className="page-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 mb-4">
            <span className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-widest">Credentials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tighter">
            Certifications & <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-500 to-orange-500">Achievements</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert._id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="group flex gap-4 p-5 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 hover:border-amber-500/40 transition-all duration-300"
            >
              <div className="shrink-0 w-12 h-12 rounded-xl overflow-hidden border border-slate-200 dark:border-white/10 flex items-center justify-center bg-white dark:bg-white/5">
                {cert.badgeImage ? (
                  <div className="relative w-full h-full">
                    <Image src={cert.badgeImage} alt={cert.issuer} fill className="object-contain p-1" />
                  </div>
                ) : (
                  <Award className="w-6 h-6 text-amber-500" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-sm text-slate-900 dark:text-white leading-tight line-clamp-2 mb-1">
                  {cert.title}
                </h3>
                <p className="text-xs text-amber-600 dark:text-amber-400 font-semibold mb-1">{cert.issuer}</p>
                {cert.issueDate && (
                  <p className="text-[10px] text-slate-500 dark:text-slate-500">
                    {cert.issueDate}{cert.expiryDate ? ` — ${cert.expiryDate}` : ""}
                  </p>
                )}
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-2 text-[10px] font-bold text-amber-500 hover:text-amber-400 transition-colors"
                  >
                    View Credential <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
