"use client";

import { Activity, Cpu } from "lucide-react";

const NAV_LINKS = [
  { href: "#skills", label: "skills" },
  { href: "#projects", label: "projects" },
  { href: "#badges", label: "badges" },
  { href: "#certifications", label: "certs" },
  { href: "#terminal", label: "terminal" },
];

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-12 glass-nav">
      <div className="glass-rim-top" />
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 flex items-center justify-between">
        {/* Left: Workspace identity */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-2.5 py-1 rounded-full glass-pill border-white/[0.08]">
            <div className="w-2 h-2 rounded-full bg-[#FF6B35] animate-pulse shadow-[0_0_8px_rgba(255,107,53,0.9)]" />
            <span className="font-mono text-xs text-[#E5E7EB] hidden sm:inline font-medium">
              akshayboddhul@core-engine
            </span>
            <span className="font-mono text-xs text-[#E5E7EB] sm:hidden font-medium">
              core-engine
            </span>
          </div>
          <span className="text-white/10">|</span>
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full glass-pill border-emerald-500/20 bg-emerald-500/[0.05]">
            <Activity className="w-3 h-3 text-[#10D98A]" />
            <span className="font-mono text-[11px] text-[#10D98A] font-semibold animate-emerald-pulse">
              CLUSTER ONLINE
            </span>
          </div>
        </div>

        {/* Center: Runtime badge */}
        <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full glass-pill border-white/[0.08]">
          <Cpu className="w-3 h-3 text-[#FF6B35]" />
          <span className="font-mono text-xs text-[#9CA3AF]">
            Runtime 15.4 LTS
          </span>
          <span className="font-mono text-xs text-[#FF6B35]">·</span>
          <span className="font-mono text-xs text-[#9CA3AF]">Spark 3.5.1</span>
        </div>

        {/* Right: Nav links */}
        <div className="flex items-center gap-1">
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="font-mono text-xs text-[#9CA3AF] hover:text-white px-3 py-1 rounded-lg transition-all duration-200 hover:bg-white/[0.08] hover:border hover:border-white/15"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
