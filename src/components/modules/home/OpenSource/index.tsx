"use client";
import { motion } from "framer-motion";
import { Star, GitFork, ExternalLink, Github } from "lucide-react";

type TRepo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
};

const LANG_COLORS: Record<string, string> = {
  TypeScript: "bg-blue-500",
  JavaScript: "bg-yellow-400",
  Python: "bg-green-500",
  Go: "bg-cyan-500",
  Rust: "bg-orange-500",
  CSS: "bg-purple-500",
  HTML: "bg-red-500",
};

export default function OpenSourceSection({ repos }: { repos: TRepo[] }) {
  if (!repos || repos.length === 0) return null;

  return (
    <section className="py-20 lg:py-28 bg-slate-50 dark:bg-[#120825]">
      <div className="page-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 mb-4">
            <span className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-widest">Open Source</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tighter">
            GitHub <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-500 to-orange-500">Projects</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            My most starred public repositories on GitHub.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {repos.map((repo, i) => (
            <motion.a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group flex flex-col p-5 rounded-2xl bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 hover:border-amber-500/40 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-2 mb-3">
                <h3 className="font-black text-slate-900 dark:text-white group-hover:text-amber-500 transition-colors line-clamp-1">
                  {repo.name}
                </h3>
                <ExternalLink className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2 flex-1 mb-4">
                {repo.description || "No description available."}
              </p>
              {repo.topics?.length > 0 && (
                <div className="flex flex-wrap gap-1 mb-4">
                  {repo.topics.slice(0, 3).map((t) => (
                    <span key={t} className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                      {t}
                    </span>
                  ))}
                </div>
              )}
              <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
                {repo.language && (
                  <span className="flex items-center gap-1.5">
                    <span className={`w-2.5 h-2.5 rounded-full ${LANG_COLORS[repo.language] ?? "bg-slate-400"}`} />
                    {repo.language}
                  </span>
                )}
                <span className="flex items-center gap-1">
                  <Star className="w-3.5 h-3.5" /> {repo.stargazers_count}
                </span>
                <span className="flex items-center gap-1">
                  <GitFork className="w-3.5 h-3.5" /> {repo.forks_count}
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://github.com/subirdas29"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-slate-200 dark:border-white/10 hover:border-amber-500/50 text-slate-700 dark:text-slate-300 font-semibold transition-all duration-300 hover:bg-amber-500/5"
          >
            <Github className="w-5 h-5" /> View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
