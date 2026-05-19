import Link from "next/link";
import { Monitor, Code2, Globe, Wrench, Cpu, Smartphone } from "lucide-react";

const categories = [
  {
    icon: <Monitor className="w-5 h-5 text-blue-500" />,
    title: "Hardware",
    items: [
      { name: "Laptop", desc: "Primary development machine for all work" },
      { name: "External Monitor", desc: "Extra screen space for productivity" },
      { name: "Mechanical Keyboard", desc: "Better typing experience during long sessions" },
      { name: "Wireless Mouse", desc: "Comfortable for extended use" },
    ],
  },
  {
    icon: <Code2 className="w-5 h-5 text-amber-500" />,
    title: "Editor & Terminal",
    items: [
      { name: "VS Code", desc: "Primary code editor — fast, extensible, free" },
      { name: "Zsh + Oh My Zsh", desc: "Customized terminal with useful plugins" },
      { name: "GitHub Copilot", desc: "AI code suggestions for faster development" },
      { name: "Prettier + ESLint", desc: "Code formatting and linting on every save" },
      { name: "GitLens", desc: "Enhanced Git history inside VS Code" },
    ],
  },
  {
    icon: <Globe className="w-5 h-5 text-emerald-500" />,
    title: "Dev Stack",
    items: [
      { name: "Next.js + React", desc: "Full-stack framework for web apps" },
      { name: "Node.js + Express", desc: "Backend API development" },
      { name: "MongoDB + Mongoose", desc: "Database of choice for most projects" },
      { name: "TypeScript", desc: "Type safety across the entire stack" },
      { name: "Tailwind CSS", desc: "Utility-first CSS — fast and consistent UI" },
      { name: "Framer Motion", desc: "Production-grade animations in React" },
    ],
  },
  {
    icon: <Wrench className="w-5 h-5 text-purple-500" />,
    title: "Tools & Services",
    items: [
      { name: "Cloudinary", desc: "Image hosting and optimization" },
      { name: "Vercel", desc: "Frontend deployment — zero config" },
      { name: "Render", desc: "Backend/API hosting" },
      { name: "Postman", desc: "API testing and documentation" },
      { name: "Figma", desc: "UI design and wireframing" },
      { name: "Notion", desc: "Project management and notes" },
      { name: "GitHub", desc: "Version control and code collaboration" },
    ],
  },
  {
    icon: <Cpu className="w-5 h-5 text-rose-500" />,
    title: "AI & Automation",
    items: [
      { name: "n8n", desc: "Workflow automation — self-hosted" },
      { name: "OpenAI API", desc: "LLM integration for AI features" },
      { name: "Pinecone", desc: "Vector database for semantic search (RAG)" },
      { name: "Google Gemini", desc: "Alternative LLM for cost-effective tasks" },
      { name: "Claude (Anthropic)", desc: "Complex reasoning and code generation" },
    ],
  },
  {
    icon: <Smartphone className="w-5 h-5 text-cyan-500" />,
    title: "Productivity",
    items: [
      { name: "Arc Browser", desc: "Cleaner, faster browser for dev work" },
      { name: "Slack", desc: "Client communication" },
      { name: "Zoom", desc: "Video calls and client meetings" },
      { name: "Linear", desc: "Issue tracking and project management" },
      { name: "Obsidian", desc: "Personal knowledge base and notes" },
    ],
  },
];

export default function UsesPage() {
  return (
    <div className="bg-white dark:bg-[#0a0219] min-h-screen pt-28 pb-24">
      <div className="max-w-3xl mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="mb-12">
          <Link href="/" className="text-xs text-amber-500 hover:underline font-semibold mb-4 block">← Back to Home</Link>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-3">
            Uses
          </h1>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            A full list of the hardware, software, tools, and services I use daily for development, design, and productivity.
            Inspired by <a href="https://uses.tech" target="_blank" rel="noopener noreferrer" className="text-amber-500 hover:underline">uses.tech</a>.
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-12">
          {categories.map((cat) => (
            <div key={cat.title}>
              <div className="flex items-center gap-2.5 mb-5">
                <div className="p-2 rounded-lg bg-slate-100 dark:bg-white/5">{cat.icon}</div>
                <h2 className="text-xl font-black text-slate-900 dark:text-white">{cat.title}</h2>
              </div>
              <div className="space-y-3">
                {cat.items.map((item) => (
                  <div key={item.name} className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 hover:border-amber-500/30 transition-colors">
                    <span className="mt-0.5 w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                    <div>
                      <span className="font-bold text-slate-900 dark:text-white text-sm">{item.name}</span>
                      <span className="text-slate-500 dark:text-slate-400 text-sm"> — {item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className="mt-16 text-xs text-slate-400 dark:text-slate-600 text-center">
          This page is inspired by <a href="https://uses.tech" target="_blank" rel="noopener noreferrer" className="text-amber-500/70 hover:text-amber-500">uses.tech</a> — a collection of developer setups.
        </p>
      </div>
    </div>
  );
}
