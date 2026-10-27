"use client";

import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import SkillGrid from "@/components/SkillGrid";
import CaseStudies from "@/components/CaseStudies";
import GitHubBadges from "@/components/GitHubBadges";
import Terminal from "@/components/Terminal";
import Certifications from "@/components/Certifications";
import { Code2, Link, Heart } from "lucide-react";

function Footer() {
  return (
    <footer className="glass-footer py-8 mt-12 relative overflow-hidden">
      <div className="glass-rim-top" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs text-[#94A3B8]">
            databricks-workspace@core-engine
          </span>
          <span className="text-white/10">·</span>
          <span className="font-mono text-xs text-[#CBD5E1] font-medium">
            © 2026 Akshay Shrinivas Boddhul
          </span>
        </div>

        <div className="flex items-center gap-1 font-mono text-[11px] text-[#94A3B8]">
          Built with
          <Heart className="w-3.5 h-3.5 mx-1 text-[#FF6B35] fill-[#FF6B35]/20 animate-pulse" />
          Next.js · Tailwind CSS · Databricks
        </div>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/akshayboddhul"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl glass-pill text-[#94A3B8] hover:text-[#FF6B35] hover:border-[#FF6B35]/40 transition-all duration-200"
            title="GitHub — akshayboddhul"
          >
            <Code2 className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/akshayboddhul/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl glass-pill text-[#94A3B8] hover:text-[#0A66C2] hover:border-[#0A66C2]/40 transition-all duration-200"
            title="LinkedIn — Akshay Boddhul"
          >
            <Link className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0F19] relative">
      {/* Fixed global ambient light background meshes */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[45rem] h-[45rem] rounded-full bg-[#FF6B35]/[0.035] blur-[160px]" />
        <div className="absolute top-1/3 -right-40 w-[40rem] h-[40rem] rounded-full bg-[#10D98A]/[0.03] blur-[150px]" />
        <div className="absolute top-2/3 -left-40 w-[42rem] h-[42rem] rounded-full bg-[#8B5CF6]/[0.035] blur-[160px]" />
        <div className="absolute -bottom-40 right-1/4 w-[45rem] h-[45rem] rounded-full bg-[#06B6D4]/[0.03] blur-[160px]" />
      </div>

      <div className="relative z-10">
        <NavBar />
        <HeroSection />
        <SkillGrid />
        <CaseStudies />
        <GitHubBadges />
        <Terminal />
        <Certifications />
        <Footer />
      </div>
    </main>
  );
}
