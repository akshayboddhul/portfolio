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
    <footer className="border-t border-[#1E2D45] py-8 mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs text-[#4B5563]">
            databricks-workspace@core-engine
          </span>
          <span className="text-[#1E2D45]">·</span>
          <span className="font-mono text-xs text-[#4B5563]">
            © 2026 Akshay Shrinivas Boddhul
          </span>
        </div>

        <div className="flex items-center gap-1 font-mono text-[10px] text-[#4B5563]">
          Built with
          <Heart className="w-3 h-3 mx-1 text-[#FF6B35]" />
          Next.js · Tailwind CSS · Databricks
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/akshayboddhul"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#4B5563] hover:text-[#FF6B35] transition-colors duration-200"
            title="GitHub — akshayboddhul"
          >
            <Code2 className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/akshayboddhul/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#4B5563] hover:text-[#0A66C2] transition-colors duration-200"
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
    <main className="min-h-screen bg-[#0B0F19]">
      <NavBar />
      <HeroSection />
      <SkillGrid />
      <CaseStudies />
      <GitHubBadges />
      <Terminal />
      <Certifications />
      <Footer />
    </main>
  );
}
