import React from "react";
import { motion } from "framer-motion";
import { FileDown, Briefcase, GraduationCap } from "lucide-react";

const experience = [
  {
    role: "Python Flask Developer",
    company: "AECearth — Construction Industry Platform",
    period: "Nov 2023 — Present",
    points: [
      "Developed comprehensive REST APIs for construction project management serving multiple stakeholder roles",
      "Built Material Management System (MR, ASN, GRN) and BOQ modules with MySQL database optimization",
      "Implemented role-based access control and authentication system for 6+ user types",
      "Integrated React frontend components with Flask backend APIs for seamless user experience",
      "Designed and developed Task Management, Document Management, and Risk/Issue tracking modules",
      "Created reporting and analytics dashboards for project performance and material cost tracking",
      "Improved stakeholder coordination by 60% through unified digital workflows",
    ],
  },
];

export default function ResumeSection() {
  return (
    <section id="resume" className="py-28 sm:py-36 bg-[#0a0a0f] relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase">Resume</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4">
            Experience & Background
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          {experience.map((item, i) => (
            <motion.div
              key={item.role}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative pl-10 pb-12 last:pb-0"
            >
              {/* Timeline line */}
              {i < experience.length - 1 && (
                <div className="absolute left-[11px] top-10 bottom-0 w-px bg-slate-800" />
              )}
              {/* Timeline dot */}
              <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full border-2 border-cyan-500/40 bg-[#0a0a0f] flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-cyan-400" />
              </div>

              <div className="p-6 rounded-2xl border border-slate-800/60 bg-slate-900/30">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{item.role}</h3>
                    <p className="text-slate-400 text-sm">{item.company}</p>
                  </div>
                  <span className="text-xs font-medium text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full w-fit">
                    {item.period}
                  </span>
                </div>
                <ul className="space-y-2">
                  {item.points.map((point, j) => (
                    <li key={j} className="flex gap-3 text-slate-400 text-[15px]">
                      <span className="text-cyan-400/60 mt-1.5 shrink-0">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Download Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-slate-500 mb-6 text-sm">Want to know more? Download my full resume.</p>
<a
  href="/Bhavyasree_Mettupalli_Resume.pdf"
  download="BhavyaSree_Mettupalli_Resume.pdf"
  type="application/pdf"
  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold text-sm tracking-wide hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:-translate-y-0.5"
>
  <FileDown className="w-5 h-5" />
  Download Resume
</a>
        </motion.div>
      </div>
    </section>
  );
}