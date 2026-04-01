import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/50 bg-[#0a0a0f] py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} — Built with passion & Python
          </p>
        </div>
        <div className="flex items-center gap-4">
          {[
            { icon: Github, href: "https://github.com/BhavyaSree-git" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/bhavyasreem" },
            { icon: Mail, href: "mailto:bhavya.mettupalli@gmail.com" },
          ].map(({ icon: Icon, href }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-600 hover:text-cyan-400 hover:bg-cyan-500/5 transition-all duration-300"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}