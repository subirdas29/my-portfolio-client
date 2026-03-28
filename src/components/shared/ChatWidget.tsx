/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState, useRef, useEffect, useCallback, memo } from "react";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { Bot, X, Send, Trash2, Sparkles, ExternalLink } from "lucide-react";
import Image from "next/image";

interface ProjectCard {
  _id: string;
  title: string;
  slug: string;
  shortDescription: string;
  liveLink: string;
  imageUrls: string[];
  projectType: string;
  technologies: string[];
}

interface SkillCard {
  _id: string;
  title: string;
  logo: string[];
}

interface BlogCard {
  _id: string;
  title: string;
  slug: string;
  summary: string;
  category: string;
  featuredImage: string;
}

interface Message {
  id: string;
  role: "user" | "assistant" | "error";
  content: string;
  projects?: ProjectCard[];
  skills?: SkillCard[];
  blogs?: BlogCard[];
}

const MAX_CHARS = 500;

// [OPTIMIZATION] Memoize TypingIndicator to prevent unnecessary re-renders
const TypingIndicator = memo(() => (
  <div className="flex items-end gap-3 mb-5">
    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-500 to-amber-500 flex items-center justify-center shrink-0 shadow-lg shadow-amber-500/20">
      <Bot className="w-4 h-4 text-white dark:text-black" />
    </div>
    <div className="px-4 py-3 rounded-2xl rounded-bl-md bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-sm">
      <div className="flex items-center gap-1.5">
        {[0, 1, 2].map((i) => (
          <div key={i} className="css-typing-dot" />
        ))}
      </div>
    </div>
  </div>
));

TypingIndicator.displayName = "TypingIndicator";

// [OPTIMIZATION] Lazy-load react-markdown only when needed.
// This keeps the ~45KB react-markdown library out of the initial bundle.
let ReactMarkdown: typeof import("react-markdown").default | null = null;
const getReactMarkdown = async () => {
  if (!ReactMarkdown) {
    const mod = await import("react-markdown");
    ReactMarkdown = mod.default;
  }
  return ReactMarkdown;
};

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPrompt, setShowPrompt] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  // [OPTIMIZATION] Lazy-load ReactMarkdown component
  const [MarkdownComp, setMarkdownComp] = useState<typeof import("react-markdown").default | null>(null);

  // [OPTIMIZATION] Load react-markdown only when chat is first opened
  useEffect(() => {
    if (isOpen && !MarkdownComp) {
      getReactMarkdown().then((comp) => setMarkdownComp(() => comp));
    }
  }, [isOpen, MarkdownComp]);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading, scrollToBottom]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed || trimmed.length > MAX_CHARS || isLoading) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      content: trimmed,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    try {
      const history = messages
        .filter((msg) => msg.role === "user" || msg.role === "assistant")
        .map((msg) => ({
          role: msg.role as "user" | "assistant",
          content: msg.content,
        }));

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API}/ai/chat`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: trimmed, history }),
        }
      );

      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      const data = await res.json();

      if (!data.success) {
        throw new Error(data.message || "API error");
      }

      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: data.message || "I received your message.",
        projects: data.projects,
        skills: data.skills,
        blogs: data.blogs,
      };

      setMessages((prev) => [...prev, aiMsg]);
    } catch (err) {
      const errorMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: "error",
        content: "I'm having trouble connecting. Please try again later.",
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const clearChat = () => {
    setMessages([]);
  };

  return (
    <>
      {/* Floating Chat Bubble */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="fixed bottom-6 right-6 z-[9998] flex flex-col items-end gap-3"
          >
            {/* Chat Prompt Bubble */}
            <AnimatePresence>
              {showPrompt && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.9 }}
                  transition={{ delay: 1, duration: 0.3 }}
                  className="relative bg-white dark:bg-[#1a102e] border border-gray-200/60 dark:border-white/10 rounded-2xl rounded-br-md px-4 py-3 shadow-xl shadow-black/10 dark:shadow-black/40 max-w-[220px]"
                >
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowPrompt(false);
                    }}
                    className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-gray-200 dark:bg-white/10 hover:bg-gray-300 dark:hover:bg-white/20 flex items-center justify-center cursor-pointer transition-colors"
                    aria-label="Dismiss"
                  >
                    <X className="w-3 h-3 text-gray-500 dark:text-gray-400" />
                  </button>
                  <p className="text-sm text-gray-800 dark:text-gray-200 font-medium leading-relaxed">
                    Hey there! Have questions about my work?
                  </p>
                  <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-1 font-medium">
                    Click to chat
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Chat Button */}
            <motion.button
              onClick={() => setIsOpen(true)}
              className="relative w-14 h-14 rounded-full bg-gradient-to-br from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-white dark:text-black shadow-xl shadow-amber-500/30 flex items-center justify-center cursor-pointer group"
              aria-label="Open chat"
            >
              {/* [OPTIMIZATION] Pulse ring uses opacity+scale only (GPU-composited) */}
              <motion.div
                className="absolute inset-0 rounded-full bg-amber-500/40"
                animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0, 0.4] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <Bot className="w-6 h-6 relative z-10 group-hover:scale-110 transition-transform" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
            className="fixed bottom-6 right-6 z-[9998] w-[calc(100vw-3rem)] sm:w-[400px] h-[calc(100vh-6rem)] sm:h-[560px] rounded-3xl overflow-hidden flex flex-col
              bg-white/80 dark:bg-[#0a0219]/85 backdrop-blur-2xl
              border border-gray-200/60 dark:border-white/10
              shadow-2xl shadow-black/10 dark:shadow-black/40"
          >
            {/* Header */}
            <div className="relative px-5 py-4 flex items-center justify-between bg-gradient-to-r from-yellow-500/10 to-amber-500/10 dark:from-yellow-500/5 dark:to-amber-500/5 border-b border-gray-200/50 dark:border-white/5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-500 to-amber-500 flex items-center justify-center shadow-lg shadow-amber-500/20">
                  <Bot className="w-5 h-5 text-white dark:text-black" />
                </div>
                <div>
                  <h3 className="text-sm font-black text-gray-900 dark:text-white">
                    Subir&apos;s Copilot
                  </h3>
                  <div className="flex items-center gap-1.5">
                    <motion.div
                      className="w-2 h-2 rounded-full bg-emerald-500"
                      animate={{ opacity: [1, 0.4, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                    <span className="text-[11px] font-medium text-gray-500 dark:text-gray-400">
                      Online
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1">
                {messages.length > 0 && (
                  <button
                    onClick={clearChat}
                    className="p-2 rounded-xl hover:bg-gray-200/50 dark:hover:bg-white/5 text-gray-500 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 transition-all cursor-pointer"
                    aria-label="Clear chat"
                    title="Clear chat"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-xl hover:bg-gray-200/50 dark:hover:bg-white/5 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-all cursor-pointer"
                  aria-label="Close chat"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 flex flex-col overflow-y-auto overflow-x-hidden px-4 py-4 space-y-5 scroll-smooth">
              {messages.length === 0 && (
                <div className="flex flex-1 flex-col items-center justify-center text-center px-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-500/10 to-amber-500/10 dark:from-yellow-500/5 dark:to-amber-500/5 border border-amber-500/20 flex items-center justify-center mb-4">
                    <Sparkles className="w-7 h-7 text-amber-500" />
                  </div>
                  <h4 className="text-lg font-black text-gray-900 dark:text-white mb-2">
                    Welcome!
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 max-w-[260px] font-medium leading-relaxed">
                    I&apos;m here to help. Ask me anything about Subir&apos;s
                    skills, projects, or experience.
                  </p>
                </div>
              )}

              {messages.length > 0 && <div className="flex-1" />}

              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex w-full ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`flex items-start gap-3 ${
                      msg.role === "user"
                        ? "max-w-[80%] flex-row-reverse"
                        : "max-w-[75%] flex-row"
                    }`}
                  >
                    {(msg.role === "assistant" ||
                      msg.role === "error") && (
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-500 to-amber-500 flex items-center justify-center shrink-0 shadow-lg shadow-amber-500/20">
                        <Bot className="w-4 h-4 text-white dark:text-black" />
                      </div>
                    )}

                    <div className="flex flex-col gap-2 min-w-0">
                      <div
                        className={`w-fit overflow-hidden break-words ${
                          msg.role === "user"
                            ? "px-4 py-3 bg-gradient-to-br from-yellow-500 to-amber-500 text-white dark:text-black rounded-2xl rounded-br-md font-medium shadow-lg shadow-amber-500/20 text-sm leading-relaxed"
                            : msg.role === "error"
                              ? "px-4 py-3 bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 text-red-700 dark:text-red-300 rounded-2xl rounded-bl-md text-sm leading-relaxed"
                              : "px-5 py-4 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-800 dark:text-gray-200 rounded-2xl rounded-bl-md"
                        }`}
                      >
                        {msg.role === "user" ? (
                          <p className="whitespace-pre-wrap break-words">
                            {msg.content}
                          </p>
                        ) : MarkdownComp ? (
                          <div
                            className={`prose prose-sm dark:prose-invert max-w-none break-words
                              prose-p:my-2 prose-p:leading-[1.75] prose-p:break-words prose-p:text-[13px]
                              prose-headings:my-2.5 prose-headings:font-bold prose-headings:text-[14px]
                              prose-h1:text-[15px] prose-h2:text-[14px] prose-h3:text-[13px]
                              prose-ul:my-2 prose-ol:my-2 prose-ul:pl-1 prose-ol:pl-1
                              prose-li:my-1 prose-li:text-[13px] prose-li:leading-[1.7]
                              prose-li:marker:text-amber-500 dark:prose-li:marker:text-amber-400
                              prose-code:text-amber-600 dark:prose-code:text-amber-400 prose-code:bg-amber-500/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:before:content-none prose-code:after:content-none prose-code:break-all prose-code:text-[12px]
                              prose-pre:bg-gray-100 dark:prose-pre:bg-white/5 prose-pre:rounded-xl prose-pre:border prose-pre:border-gray-200 dark:prose-pre:border-white/10 prose-pre:overflow-x-auto prose-pre:max-w-full prose-pre:my-2.5
                              prose-strong:text-gray-900 dark:prose-strong:text-white prose-strong:font-semibold
                              prose-a:text-amber-600 dark:prose-a:text-amber-400 prose-a:break-all prose-a:font-medium
                              prose-blockquote:my-2 prose-blockquote:border-l-amber-500 prose-blockquote:text-gray-600 dark:prose-blockquote:text-gray-400
                              prose-hr:my-3 prose-hr:border-gray-200 dark:prose-hr:border-white/10
                              prose-table:text-[12px] prose-th:px-2 prose-th:py-1.5 prose-td:px-2 prose-td:py-1.5`}
                          >
                            <MarkdownComp
                              components={{
                                a: ({ node, ...props }) => (
                                  <a
                                    {...props}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  />
                                ),
                              }}
                            >
                              {msg.content}
                            </MarkdownComp>
                          </div>
                        ) : (
                          <p className="text-sm">{msg.content}</p>
                        )}
                      </div>

                      {/* Project Cards */}
                      {msg.projects && msg.projects.length > 0 && (
                        <div className="grid grid-cols-1 gap-2">
                          {(msg.projects.length > 2
                            ? msg.projects.slice(0, 2)
                            : msg.projects
                          ).map((project) => (
                            <motion.a
                              key={project._id}
                              href={`/all-projects/projectDetails/${project.slug}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              initial={{ opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="group block rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 overflow-hidden hover:border-amber-500/50 dark:hover:border-amber-500/30 hover:shadow-lg hover:shadow-amber-500/10 transition-all"
                            >
                              {project.imageUrls?.[0] && (
                                <div className="relative h-28 overflow-hidden">
                                  <Image
                                    src={project.imageUrls[0]}
                                    alt={project.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                    sizes="(max-width: 768px) 100vw, 300px"
                                    loading="lazy"
                                  />
                                </div>
                              )}
                              <div className="p-3">
                                <div className="flex items-center justify-between gap-2">
                                  <h4 className="text-sm font-bold text-gray-900 dark:text-white truncate">
                                    {project.title}
                                  </h4>
                                  <ExternalLink className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                                </div>
                                <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-1 font-medium">
                                  {project.projectType}
                                </p>
                                <div className="flex flex-wrap gap-1 mt-1.5">
                                  {project.technologies
                                    .slice(0, 4)
                                    .map((tech) => (
                                      <span
                                        key={tech}
                                        className="text-[10px] px-1.5 py-0.5 rounded-md bg-amber-500/10 text-amber-600 dark:text-amber-400 font-medium"
                                      >
                                        {tech}
                                      </span>
                                    ))}
                                  {project.technologies.length > 4 && (
                                    <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-gray-400 font-medium">
                                      +{project.technologies.length - 4}
                                    </span>
                                  )}
                                </div>
                                <div className="mt-2">
                                  <span className="text-[11px] font-semibold text-amber-600 dark:text-amber-400">
                                    View Details →
                                  </span>
                                </div>
                              </div>
                            </motion.a>
                          ))}

                          {msg.projects.length > 2 && (
                            <motion.a
                              href="/all-projects"
                              target="_blank"
                              rel="noopener noreferrer"
                              initial={{ opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="group flex items-center justify-center rounded-xl border-2 border-dashed border-amber-500/30 dark:border-amber-500/20 bg-amber-500/5 dark:bg-amber-500/5 p-6 hover:border-amber-500/50 hover:bg-amber-500/10 transition-all"
                            >
                              <div className="text-center">
                                <p className="text-sm font-bold text-amber-600 dark:text-amber-400">
                                  View All {msg.projects.length} Projects →
                                </p>
                                <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-1">
                                  See complete portfolio
                                </p>
                              </div>
                            </motion.a>
                          )}
                        </div>
                      )}

                      {/* Blog Cards */}
                      {msg.blogs && msg.blogs.length > 0 && (
                        <div className="grid grid-cols-1 gap-2">
                          {msg.blogs.map((blog) => (
                            <motion.a
                              key={blog._id}
                              href={`/blogs/${blog.slug}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              initial={{ opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="group block rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 overflow-hidden hover:border-amber-500/50 dark:hover:border-amber-500/30 hover:shadow-lg hover:shadow-amber-500/10 transition-all"
                            >
                              {blog.featuredImage && (
                                <div className="relative h-28 overflow-hidden">
                                  <Image
                                    src={blog.featuredImage}
                                    alt={blog.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                    sizes="(max-width: 768px) 100vw, 300px"
                                    loading="lazy"
                                  />
                                </div>
                              )}
                              <div className="p-3">
                                <div className="flex items-center justify-between gap-2">
                                  <h4 className="text-sm font-bold text-gray-900 dark:text-white line-clamp-2">
                                    {blog.title}
                                  </h4>
                                  <ExternalLink className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                                </div>
                                <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-1 font-medium">
                                  {blog.category}
                                </p>
                                <div className="mt-2">
                                  <span className="text-[11px] font-semibold text-amber-600 dark:text-amber-400">
                                    Read More →
                                  </span>
                                </div>
                              </div>
                            </motion.a>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {isLoading && <TypingIndicator />}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="px-4 pb-4 pt-2 border-t border-gray-200/50 dark:border-white/5">
              <div className="relative flex items-end gap-2 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl px-3 py-2 shadow-sm focus-within:border-amber-500/50 dark:focus-within:border-amber-500/30 focus-within:ring-2 focus-within:ring-amber-500/20 transition-all">
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={(e) => {
                    if (e.target.value.length <= MAX_CHARS) {
                      setInput(e.target.value);
                    }
                  }}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask me anything..."
                  rows={1}
                  className="flex-1 resize-none bg-transparent text-sm text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 outline-none min-h-[24px] max-h-[120px] py-1 font-medium leading-relaxed"
                  style={{
                    height: "auto",
                    overflowY:
                      input.split("\n").length > 3 ? "auto" : "hidden",
                  }}
                  onInput={(e) => {
                    const target = e.target as HTMLTextAreaElement;
                    target.style.height = "auto";
                    target.style.height = `${target.scrollHeight}px`;
                  }}
                />
                <motion.button
                  onClick={sendMessage}
                  disabled={!input.trim() || isLoading}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="shrink-0 w-9 h-9 rounded-xl bg-gradient-to-br from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 disabled:opacity-40 disabled:cursor-not-allowed text-white dark:text-black flex items-center justify-center shadow-md shadow-amber-500/20 transition-opacity cursor-pointer"
                  aria-label="Send message"
                >
                  <Send className="w-4 h-4" />
                </motion.button>
              </div>

              {/* Character Counter */}
              <div className="flex items-center justify-between mt-2 px-1">
                <span className="text-[10px] text-gray-400 dark:text-gray-500 font-medium">
                  Press Enter to send, Shift+Enter for new line
                </span>
                <span
                  className={`text-[10px] font-bold ${
                    input.length > MAX_CHARS * 0.9
                      ? "text-amber-500"
                      : "text-gray-400 dark:text-gray-500"
                  }`}
                >
                  {input.length}/{MAX_CHARS}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatWidget;
