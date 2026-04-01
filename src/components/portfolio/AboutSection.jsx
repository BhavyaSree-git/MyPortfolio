import React from "react";
import { motion } from "framer-motion";
import { Server, Database, Layout, Zap } from "lucide-react";

const highlights = [
  {
    icon: Server,
    title: "API Architecture",
    description: "Building scalable, well-documented REST APIs using Flask with clean architecture patterns and best practices.",
  },
  {
    icon: Database,
    title: "Database Design",
    description: "Designing efficient MySQL schemas, writing optimized queries, and implementing proper indexing strategies.",
  },
  {
    icon: Layout,
    title: "Full-Stack Delivery",
    description: "Seamlessly integrating React frontends with Flask backends to deliver polished, end-to-end applications.",
  },
  {
    icon: Zap,
    title: "API Security",
    description: "Implementing JWT authentication, role-based access control, input validation, and secure data handling.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-28 sm:py-36 bg-[#0a0a0f] relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/[0.02] to-transparent" />
      
      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase">About Me</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4">
            Passionate about building<br className="hidden sm:block" /> reliable backend systems
          </h2>
          <p className="mt-6 text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            With 2 years of professional experience, I specialize in designing and developing 
            production-grade REST APIs, optimizing database performance, and delivering full-stack 
            applications that solve real business problems. I thrive in collaborative environments 
            and am committed to writing clean, maintainable code.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-8 rounded-2xl border border-slate-800/60 bg-slate-900/30 hover:border-cyan-500/20 hover:bg-slate-900/50 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-5 group-hover:bg-cyan-500/15 transition-colors">
                <item.icon className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed text-[15px]">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}