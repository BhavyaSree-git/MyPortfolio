import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Briefcase, CheckCircle2, ExternalLink } from "lucide-react";

const features = [
  {
    category: "Project Management Module",
    items: [
      "Create and manage construction projects with multi-stakeholder support",
      "Role assignment: Client, Consultant, Contractor, Vendor, Labour, Facility Management",
      "Real-time project progress tracking and activity monitoring",
    ],
  },
  {
    category: "BOQ (Bill of Quantities)",
    items: [
      "Comprehensive quantity and cost estimation system",
      "Material and work requirements tracking",
      "Budget monitoring and variance analysis",
    ],
  },
  {
    category: "Material Management",
    items: [
      "Material Request (MR) workflow automation",
      "Advance Shipment Notice (ASN) management",
      "Goods Receipt Note (GRN) processing",
      "Integrated invoice management and tracking",
    ],
  },
  {
    category: "Task Management",
    items: [
      "Task creation and assignment with role-based access",
      "Status monitoring and completion tracking",
      "Task dependencies and milestone management",
    ],
  },
  {
    category: "Document Management",
    items: [
      "Centralized document repository for project files",
      "Version control and document approval workflows",
      "Secure file sharing across stakeholders",
    ],
  },
  {
    category: "Risk & Issue Management",
    items: [
      "Proactive risk identification and assessment",
      "Issue tracking with priority and severity levels",
      "Resolution workflows and escalation management",
    ],
  },
  {
    category: "Reports & Analytics",
    items: [
      "Project performance dashboards and KPI tracking",
      "Material and cost analysis reports",
      "Task progress and completion metrics",
    ],
  },
  {
    category: "Communication & Collaboration",
    items: [
      "Construction news feed for project updates and announcements",
      "Role-based access control ensuring data security",
      "Stakeholder collaboration tools and notifications",
    ],
  },
];

const impact = [
  "Improved coordination between multiple construction stakeholders through unified platform",
  "Streamlined project tracking and material management workflows",
  "Reduced manual work by 60% through centralized digital processes",
  "Enhanced visibility into project status, budgets, and resource allocation",
];

/**
 * @param {{ isOpen: boolean; onClose: () => void }} props
 */
export default function ProjectDetailModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-5xl max-h-[calc(100vh-4rem)] bg-slate-900 rounded-3xl border border-slate-800 shadow-2xl my-8 overflow-hidden"
        >
          {/* Header */}
          <div className="relative p-6 sm:p-10 border-b border-slate-800">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-teal-500/5" />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-xl text-slate-500 hover:text-white hover:bg-slate-800 transition-all z-10"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="relative">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-4">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-cyan-400 text-xs font-semibold tracking-wide">FEATURED PROJECT</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">AECearth</h2>
              <p className="text-xl text-slate-400 mb-6">Construction Industry Platform</p>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-slate-400">
                  <Briefcase className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm">Python Flask Developer (Backend) with React Integration</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <Calendar className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm font-medium">Nov 2023 — Present</span>
                </div>
              </div>
              <a
                href="https://aecearth.io/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 mt-6 px-4 py-3 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/15 transition-all"
              >
                Visit AECearth Website
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 sm:p-10 space-y-10 max-h-[calc(100vh-18rem)] overflow-y-auto">
            {/* Overview */}
            <section>
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <span className="w-1 h-5 bg-cyan-400 rounded-full" />
                Project Overview
              </h3>
              <p className="text-slate-400 leading-relaxed">
                AECearth is a comprehensive construction industry platform designed to improve communication, 
                collaboration, and project management among all stakeholders. The platform connects clients, 
                consultants, contractors, vendors, laborers, builders, and facility management teams in a single 
                unified system, enabling seamless project coordination and efficient resource management.
              </p>
            </section>

            {/* Key Features */}
            <section>
              <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                <span className="w-1 h-5 bg-cyan-400 rounded-full" />
                Key Features Implemented
              </h3>
              <div className="grid gap-6">
                {features.map((feature, i) => (
                  <div key={i} className="p-6 rounded-2xl border border-slate-800/60 bg-slate-800/30">
                    <h4 className="text-cyan-400 font-semibold mb-3">{feature.category}</h4>
                    <ul className="space-y-2">
                      {feature.items.map((item, j) => (
                        <li key={j} className="flex gap-3 text-slate-400 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400/60 mt-0.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Technology Stack */}
            <section>
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <span className="w-1 h-5 bg-cyan-400 rounded-full" />
                Technology Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Python", "Flask", "MySQL", "React", "REST APIs", "Git", "Postman"].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full text-sm font-medium bg-cyan-500/10 text-cyan-300 border border-cyan-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            {/* Impact */}
            <section>
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <span className="w-1 h-5 bg-cyan-400 rounded-full" />
                Impact & Results
              </h3>
              <div className="space-y-3">
                {impact.map((item, i) => (
                  <div key={i} className="flex gap-3 p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/10">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
                    <p className="text-slate-300 text-sm leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}