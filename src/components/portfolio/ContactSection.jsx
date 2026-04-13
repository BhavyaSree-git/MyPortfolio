import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send, MapPin, ArrowUpRight, Clipboard, Loader2, CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    description: "Copy my email address",
    value: "bhavya.mettupalli@gmail.com",
    copy: true,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    description: "View my LinkedIn profile",
    href: "https://www.linkedin.com/in/bhavyasreem",
  },
  {
    icon: Github,
    label: "GitHub",
    description: "Explore my GitHub projects",
    href: "https://github.com/BhavyaSree-git",
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [copyStatus, setCopyStatus] = useState("");
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopyEmail = async () => {
    const emailAddress = contactLinks.find((link) => link.copy)?.value;
    if (!emailAddress) {
      setCopyStatus("Could not copy email. Please try again.");
      setTimeout(() => setCopyStatus(""), 3000);
      return;
    }

    try {
      await navigator.clipboard.writeText(emailAddress);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 3000);
    } catch (error) {
      console.error(error);
      setCopyStatus("Could not copy email. Please copy it manually.");
      setTimeout(() => setCopyStatus(""), 3000);
    }
  };

  /** @param {React.FormEvent<HTMLFormElement>} e */
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSending) return;

    setIsSending(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: "success", message: "Message sent successfully!" });
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus({ type: "", message: "" }), 5000);
      } else {
        setStatus({ type: "error", message: data.error || "Something went wrong. Please try again." });
      }
    } catch (error) {
      console.error(error);
      setStatus({ type: "error", message: "Something went wrong. Please try again." });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="py-28 sm:py-36 bg-[#0a0a0f] relative">
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/[0.03] to-transparent" />
      
      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase">Contact</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4">
            Let's Work Together
          </h2>
          <p className="mt-4 text-cyan-400 text-sm uppercase tracking-wide font-medium">
            Currently available for Backend & Frontend Developer roles
          </p>
          <p className="mt-6 text-slate-400 max-w-xl mx-auto text-lg">
            Open to opportunities, collaborations, or freelance work. Feel free to reach out — I’d love to connect!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-6"
          >
            {contactLinks.map((link) => {
              const commonClasses = "group flex items-center gap-4 p-5 rounded-2xl border border-slate-800/60 bg-slate-900/30 hover:-translate-y-1 hover:border-cyan-500/20 hover:shadow-xl shadow-black/10 transition-all duration-300";

              if (link.copy) {
                return (
                  <button
                    key={link.label}
                    type="button"
                    onClick={handleCopyEmail}
                    className={`${commonClasses} w-full text-left cursor-pointer`}
                  >
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center shrink-0 group-hover:bg-cyan-500/15 transition-colors">
                      <link.icon className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">{link.label}</p>
                        {emailCopied && (
                          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-1 text-emerald-300 text-[11px] font-semibold">
                            <CheckCircle2 className="w-3 h-3" />
                            Copied!
                          </span>
                        )}
                      </div>
                      <p className="text-slate-300 text-sm mt-1">{link.description}</p>
                      <p className="text-slate-500 text-xs mt-2 truncate">{link.value}</p>
                    </div>
                    {emailCopied ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 ml-auto shrink-0 transition-colors" />
                    ) : (
                      <Clipboard className="w-4 h-4 text-slate-600 group-hover:text-cyan-400 ml-auto shrink-0 transition-colors" />
                    )}
                  </button>
                );
              }

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={commonClasses}
                >
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center shrink-0 group-hover:bg-cyan-500/15 transition-colors">
                    <link.icon className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">{link.label}</p>
                    <p className="text-slate-300 text-sm mt-0.5">{link.description}</p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-600 group-hover:text-cyan-400 ml-auto shrink-0 transition-colors" />
                </a>
              );
            })}
            {copyStatus && (
              <p className="text-sm text-emerald-400 mt-2 ml-1">{copyStatus}</p>
            )}

            <div className="flex items-center gap-3 p-5 rounded-2xl border border-slate-800/60 bg-slate-900/30">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Location</p>
                <p className="text-slate-300 text-sm mt-0.5">Open to Remote & On-site</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="p-8 rounded-2xl border border-slate-800/60 bg-slate-900/30 space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm text-slate-400 font-medium mb-2 block">Name</label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-600 focus:border-cyan-500/50 focus:ring-cyan-500/20 h-12 rounded-xl"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm text-slate-400 font-medium mb-2 block">Email</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-600 focus:border-cyan-500/50 focus:ring-cyan-500/20 h-12 rounded-xl"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="text-sm text-slate-400 font-medium mb-2 block">Message</label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-600 focus:border-cyan-500/50 focus:ring-cyan-500/20 rounded-xl resize-none"
                  required
                />
              </div>
              <Button
                type="submit"
                disabled={isSending}
                className="w-full h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 text-white font-semibold disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSending ? (
                  <span className="flex items-center justify-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="w-4 h-4" />
                    Send Message
                  </span>
                )}
              </Button>
              {status.message && (
                <p className={`text-sm mt-2 ${status.type === "success" ? "text-emerald-400" : "text-rose-400"}`}>
                  {status.message}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}