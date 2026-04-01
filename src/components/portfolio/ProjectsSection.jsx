import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Server, Layout, ShieldCheck, Database, ChevronRight } from "lucide-react";
import ProjectDetailModal from "./ProjectDetailModal";

const projects = [
  {
    icon: Server,
    title: "AECearth",
    subtitle: "Construction Industry Platform",
    featured: true,
    period: "Nov 2023 — Present",
    description:
      "A comprehensive construction project management platform connecting clients, consultants, contractors, vendors, and facility management teams. Streamlines project coordination, material management, and stakeholder collaboration in a unified system.",
    tags: ["Python", "Flask", "MySQL", "React", "REST APIs"],
    accent: "cyan",
  },
  {
    icon: Layout,
    title: "Task Management App",
    description:
      "Full-stack task management application with React frontend and Flask backend. Users can create, assign, and track tasks with real-time status updates and dashboard analytics.",
    tags: ["React", "Flask", "MySQL", "Full-Stack"],
    accent: "teal",
  },
  {
    icon: ShieldCheck,
    title: "JWT Authentication System",
    description:
      "Secure authentication and authorization module with JWT token management, refresh tokens, role-based access control, and password hashing using industry-standard practices.",
    tags: ["Flask", "JWT", "Security", "Python"],
    accent: "emerald",
  },
  {
    icon: Database,
    title: "BOQ & Material Management",
    description:
      "Bill of Quantities system with material request workflows, advance shipment notices (ASN), goods receipt notes (GRN), and comprehensive invoice management for construction projects.",
    tags: ["Python", "Flask", "MySQL", "REST API"],
    accent: "sky",
  },
];

const accentMap = {
  cyan: { iconBg: "bg-cyan-500/10", iconColor: "text-cyan-400", tagBg: "bg-cyan-500/10", tagText: "text-cyan-300", border: "hover:border-cyan-500/30" },
  teal: { iconBg: "bg-teal-500/10", iconColor: "text-teal-400", tagBg: "bg-teal-500/10", tagText: "text-teal-300", border: "hover:border-teal-500/30" },
  emerald: { iconBg: "bg-emerald-500/10", iconColor: "text-emerald-400", tagBg: "bg-emerald-500/10", tagText: "text-emerald-300", border: "hover:border-emerald-500/30" },
  sky: { iconBg: "bg-sky-500/10", iconColor: "text-sky-400", tagBg: "bg-sky-500/10", tagText: "text-sky-300", border: "hover:border-sky-500/30" },
};

export default function ProjectsSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="projects" className="py-28 sm:py-36 bg-[#0a0a0f] relative">
      <ProjectDetailModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-500/[0.02] to-transparent" />
      
      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase">Projects</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4">
            Featured Work
          </h2>
          <p className="mt-6 text-slate-400 max-w-xl mx-auto text-lg">
            A selection of projects that showcase my backend expertise and full-stack capabilities.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, i) => {
            const colors = accentMap[project.accent];
            const isFeatured = project.featured;
            
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`group p-8 rounded-2xl border bg-slate-900/30 ${colors.border} transition-all duration-500 ${
                  isFeatured ? "sm:col-span-2 border-cyan-500/30" : "border-slate-800/60"
                }`}
              >
                {isFeatured && (
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-4">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    <span className="text-cyan-400 text-xs font-semibold tracking-wide">FEATURED PROJECT</span>
                  </div>
                )}

                <div className={`grid gap-8 ${isFeatured ? "sm:grid-cols-3" : ""}`}>
                  <div className={isFeatured ? "sm:col-span-2" : ""}>
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-12 h-12 rounded-xl ${colors.iconBg} flex items-center justify-center`}>
                        <project.icon className={`w-6 h-6 ${colors.iconColor}`} />
                      </div>
                      {!isFeatured && (
                        <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <button className="p-2 rounded-lg border border-slate-700 text-slate-500 hover:text-white hover:border-slate-500 transition-colors">
                            <Github className="w-4 h-4" />
                          </button>
                          <button className="p-2 rounded-lg border border-slate-700 text-slate-500 hover:text-white hover:border-slate-500 transition-colors">
                            <ExternalLink className="w-4 h-4" />
                          </button>
                        </div>
                      )}
                    </div>

                    <div className="mb-3">
                      <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                      {project.subtitle && (
                        <p className="text-cyan-400 text-sm mt-1">{project.subtitle}</p>
                      )}
                      {project.period && (
                        <p className="text-slate-500 text-xs mt-1">{project.period}</p>
                      )}
                    </div>

                    <p className="text-slate-400 text-[15px] leading-relaxed mb-6">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`px-3 py-1 rounded-full text-xs font-medium ${colors.tagBg} ${colors.tagText}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {isFeatured && (
                    <div className="flex flex-col gap-4">
                      <button
                        onClick={() => setModalOpen(true)}
                        className="flex items-center justify-between p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 hover:bg-cyan-500/15 transition-all group/btn"
                      >
                        <span className="text-sm font-semibold">View Full Details</span>
                        <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                      
                      <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700 
                                      transition-all duration-300 
                                      hover:bg-emerald-500/5 hover:border-emerald-500/20 group">
                        <p className="text-xs text-slate-500 uppercase tracking-wider mb-2 
                                      group-hover:text-emerald-400 transition-colors duration-300">
                          My Role
                        </p>
                        <p className="text-sm text-slate-300 leading-relaxed">
                          Python Flask Developer (Backend) with React Integration
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700 
                                      transition-all duration-300 
                                      hover:bg-emerald-500/5 hover:border-emerald-500/20 group">
                        <p className="text-xs text-slate-500 uppercase tracking-wider mb-2 
                                      group-hover:text-emerald-400 transition-colors duration-300">
                          Key Impact
                        </p>
                        <p className="text-sm text-slate-300 leading-relaxed">
                          Streamlined coordination for multi-stakeholder construction projects
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}