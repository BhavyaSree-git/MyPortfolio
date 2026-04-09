import React from "react";
import { Mail } from "lucide-react";
import Navbar from "@/components/portfolio/Navbar";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import ResumeSection from "@/components/portfolio/ResumeSection";
import ContactSection from "@/components/portfolio/ContactSection";
import Footer from "@/components/portfolio/Footer";
import whatsappIcon from "@/assets/whatsapp.svg";

export default function Home() {
  return (
    <div className="bg-[#0a0a0f] min-h-screen" style={{ scrollBehavior: "smooth" }}>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ResumeSection />
      <ContactSection />
      <Footer />

      <a
        href="#contact"
        rel="noopener noreferrer"
        aria-label="Send Message"
        className="fixed right-6 bottom-40 z-[60] inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 p-2 text-white shadow-[0_20px_40px_rgba(16,185,129,0.25)] transition-transform duration-300 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-emerald-300"
      >
        <Mail className="h-6 w-6" />
      </a>

      <a
        href="https://wa.me/919491207140"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed right-6 bottom-24 z-[60] inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 p-2 text-white shadow-[0_20px_40px_rgba(16,185,129,0.25)] transition-transform duration-300 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-emerald-300"
      >
        <img src={whatsappIcon} alt="WhatsApp" className="h-full w-full object-contain" />
      </a>
    </div>
  );
}