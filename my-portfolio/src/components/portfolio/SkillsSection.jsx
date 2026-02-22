import React from "react";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Backend",
    color: "cyan",
    skills: [
      { name: "Python", level: 92 },
      { name: "Flask", level: 88 },
      { name: "REST APIs", level: 90 },
      { name: "JWT Auth", level: 82 },
    ],
  },
  {
    title: "Frontend",
    color: "teal",
    skills: [
      { name: "React", level: 78 },
      { name: "JavaScript", level: 80 },
      { name: "HTML/CSS", level: 85 },
      { name: "Tailwind CSS", level: 75 },
    ],
  },
  {
    title: "Database",
    color: "emerald",
    skills: [
      { name: "MySQL", level: 88 },
      { name: "Schema Design", level: 85 },
      { name: "Query Optimization", level: 80 },
      { name: "Database Indexing", level: 78 },
    ],
  },
  {
    title: "Tools & DevOps",
    color: "sky",
    skills: [
      { name: "Git / GitHub", level: 88 },
      { name: "Postman", level: 90 },
      { name: "VS Code", level: 92 },
      { name: "Linux/CLI", level: 75 },
    ],
  },
];

const colorMap = {
  cyan: { bar: "bg-cyan-400", bg: "bg-cyan-400/10", text: "text-cyan-400", border: "border-cyan-500/20" },
  teal: { bar: "bg-teal-400", bg: "bg-teal-400/10", text: "text-teal-400", border: "border-teal-500/20" },
  emerald: { bar: "bg-emerald-400", bg: "bg-emerald-400/10", text: "text-emerald-400", border: "border-emerald-500/20" },
  sky: { bar: "bg-sky-400", bg: "bg-sky-400/10", text: "text-sky-400", border: "border-sky-500/20" },
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-28 sm:py-36 bg-[#0a0a0f] relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase">Skills</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4">
            Technical Expertise
          </h2>
          <p className="mt-6 text-slate-400 max-w-xl mx-auto text-lg">
            A well-rounded skill set focused on backend development with strong full-stack capabilities.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => {
            const colors = colorMap[category.color];
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                className={`p-8 rounded-2xl border border-slate-800/60 bg-slate-900/30`}
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className={`w-3 h-3 rounded-full ${colors.bar}`} />
                  <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                </div>
                <div className="space-y-6">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-slate-300 font-medium">{skill.name}</span>
                        <span className={`text-xs font-semibold ${colors.text}`}>{skill.level}%</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-slate-800 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                          className={`h-full rounded-full ${colors.bar}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}